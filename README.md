# arras.io-leaderboard-bot
An arras.io bot that can scan servers and send leaderboards to discord.

Modify the bot_config.txt file to configure it to your needs. If you have a working proxy, you can add it to the proxy= line. If not, do not delete this line but simply leave the line as "proxy=".

To run, simply install the undici library with npm and run the bot_loader.js file.

Command prefix - !lb
Commands ->
!lb s [server] -> Returns the leaderboard for a single server
!lb l [server1] [server2] [server3] ... [servern] [interval (in ms)] -> Creates a loop leaderboard update for however many servers specified. Depending on the interval set by the user, the bot will create/edit (if it has already initialized) a message for a certain leaderboard along that interval. 
!lb q [server1] [server2] [server3] ... [servern] -> For each server specified, the loop leaderboard update for that server is cancelled. 
