const path = require('path');
const ProxyAgent = require('undici');
const { Worker } = require('worker_threads');
const fs = require('fs').promises;

// Init config
let config = {};
(async () => {
    (await fs.readFile(path.resolve(__dirname, './bot_config.txt'))).toString().split("\n").map(entry => {
        let data = entry.split("=");
        config[data[0]] = data[1];
    });
    if (config.proxy !== "") {
        let proxy = config.proxy.split(":").map(data => data = data.trimStart());
        config.proxy = proxy.length == 4 ? 
            new ProxyAgent(`http://${proxy[2]}:${proxy[3]}@${proxy[0]}:${proxy[1]}`) :
            new ProxyAgent(`http://${proxy[0]}:${proxy[1]}`);
    };
    send_discord_message(config.token, config.channel_id, `LB bot is now active in this channel.`);
    console.log("LB bot started!");
    await fs.writeFile(path.resolve(__dirname, './servers.txt'), await (await fetch("https://ak7oqfc2u4qqcu6i-c.uvwx.xyz:8443/2222/status")).text());
    let servers = (await (await fetch("https://ak7oqfc2u4qqcu6i-c.uvwx.xyz:8443/2222/status")).json()).status;
    if (!servers) {
        send_discord_message(config.token, config.channel_id, `Failed to retrieve servers. Aborting.`);
        throw Error("FAILED TO GET SERVERS");
    };
    setInterval(() => {
        bot_loop(config.token, config.channel_id, servers, config.bot_message_depth);
    }, parseInt(config.bot_update_interval));
})();

async function send_discord_message(token, channel_id, text, reply = false) {
    let content = { content: text };
    if (reply) content.message_reference = { channel_id: channel_id, message_id: reply };
    return await (await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(content)
    })).json();
}

async function edit_discord_message(token, channel_id, text, id) {
    await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ content: text })
    });
}

function setImmediateInterval(fn, ms) {
    fn();
    return setInterval(fn, ms);
}

let replied_ids = {};
let active_queries = {};
let server_loops = {};
let bot_start = Date.now();

async function bot_loop(token, channel_id, servers, limit) {
    let messages = await (await fetch(`https://discord.com/api/v9/channels/${channel_id}/messages?limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })).json();
    let eliminate = { ...replied_ids };
    for (let index = 0; index < messages.length; index += 1) {
        let message = messages[index];
        if (!replied_ids[message.id]) {
            if (Date.parse(message.timestamp) - bot_start > 0) {
                let message_content = message.content.trim();
                if (message_content.slice(0, 3) == "!lb") {
                    switch (message_content[4]) {
                        case "s": {
                                let server = message_content.slice(6, message_content.length).trim();
                                if (servers[server]) {
                                    if (!active_queries[server]) {
                                        let worker = new Worker(path.resolve(__dirname, './bot_worker.js'), {
                                            workerData: [
                                                config.user_agent,
                                                config.proxy, 
                                                server
                                            ] 
                                        }); 
                                        worker.on('message', (response) => {
                                            send_discord_message(config.token, config.channel_id, response, message.id);
                                            active_queries[server] = false;
                                            worker.terminate();
                                        });
                                        active_queries[server] = true;
                                    } else {
                                        send_discord_message(config.token, config.channel_id, `Server #${server} has already been queried.`, message.id);
                                    }
                                } else {
                                    send_discord_message(config.token, config.channel_id, `Server #${server} not found.`, message.id);
                                };
                            };
                        break;
                        case "l": {
                                let content = message_content.slice(6, message_content.length).trim().split(" ") ?? [];
                                let update_interval = parseInt(content.pop());
                                if (!Number.isNaN(update_interval) && typeof update_interval == "number") {
                                    let time = update_interval / content.length;
                                    let index = 0;
                                    let load_servers = setImmediateInterval(() => {
                                        let server = content[index];
                                        if (servers[server]) {
                                            if (!active_queries[server]) {
                                                let loop_message_id;
                                                let worker = new Worker(path.resolve(__dirname, './bot_worker.js'), {
                                                    workerData: [
                                                        config.user_agent,
                                                        config.proxy, 
                                                        server
                                                    ] 
                                                }); 
                                                worker.on('message', (response) => {
                                                    if (!response.includes("There was an error connecting to")) {
                                                        send_discord_message(config.token, config.channel_id, response + `\n\n**Last updated: ${new Date().toISOString().split("T")[1].split(".")[0]} UTC**`, message.id).then(data => loop_message_id = data.id);
                                                        let loop_worker_free = true;
                                                        server_loops[server] = setInterval(() => {
                                                            if (loop_worker_free) {
                                                                let loop_worker = new Worker(path.resolve(__dirname, './bot_worker.js'), {
                                                                    workerData: [
                                                                        config.user_agent,
                                                                        config.proxy, 
                                                                        server
                                                                    ] 
                                                                });
                                                                loop_worker_free = false; 
                                                                loop_worker.on('message', (response) => {
                                                                    if (!response.includes("There was an error connecting to")) {
                                                                        edit_discord_message(config.token, config.channel_id, response + `\n\n**Last updated: ${new Date().toISOString().split("T")[1].split(".")[0]} UTC**`, loop_message_id);
                                                                    } else {
                                                                        edit_discord_message(config.token, config.channel_id, response + " Aborting...", loop_message_id);
                                                                        clearInterval(server_loops[server]);
                                                                        delete server_loops[server];
                                                                        delete active_queries[server];
                                                                    };
                                                                    loop_worker.terminate();
                                                                    loop_worker_free = true;
                                                                });
                                                            }
                                                        }, update_interval);
                                                    } else {
                                                        send_discord_message(config.token, config.channel_id, response, message.id);  
                                                    };
                                                    worker.terminate();
                                                });
                                                active_queries[server] = true;
                                            } else {
                                                send_discord_message(config.token, config.channel_id, `Server #${server} has already been queried.`, message.id);
                                            }
                                        } else {
                                            send_discord_message(config.token, config.channel_id, `Server #${server} not found.`, message.id);
                                        };
                                        index += 1;
                                        if (index == content.length) clearInterval(load_servers);
                                    }, time);
                                } else {
                                    send_discord_message(config.token, config.channel_id, `Please provide an update interval at the end of the command.`, message.id);
                                };
                            }; 
                        break;
                        case "q": {
                            let servers = message_content.slice(6, message_content.length).split(" ") ?? [];
                            if (servers.length !== 0) {
                                for (let index = 0; index < servers.length; index += 1) {
                                    let server = servers[index];
                                    if (server_loops[server]) {
                                        clearInterval(server_loops[server]);
                                        delete server_loops[server];
                                        delete active_queries[server];
                                        send_discord_message(config.token, config.channel_id, `Exited loop leaderboard update for #${server}.`, message.id);
                                    } else {
                                        send_discord_message(config.token, config.channel_id, `No loop leaderboard update for #${server} found.`, message.id);
                                    };
                                };
                            } else {
                                send_discord_message(config.token, config.channel_id, `Please add servers to exit loop leaderboards from.`, message.id);
                            };
                        };
                        break;
                    }
                    replied_ids[message.id] = true; 
                }
            }
        } else {
            delete eliminate[message.id];
        }
    }
    // Delete any message ids that are now out of the message range, otherwise they may add up
    for (let id in eliminate) {
        delete replied_ids[id];
    }
}