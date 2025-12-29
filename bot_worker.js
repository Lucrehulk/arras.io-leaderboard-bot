const fs = require('fs').promises;
const path = require('path');
const { WebSocket } = require('undici');
const { parentPort, workerData: [user_agent, proxy, server_code] } = require('worker_threads');

// Normal fetch was having some errors if it failed, so figured I'd do this to prevent the process from crashing.
function safe_fetch(url, options = {}) {
    return fetch(url, options).catch(err => {
        return {
            ok: false,
            status: 0,
            json: async () => ({}),
            text: async () => "",
        };
    });
}

function create_bot(url, proxy, connection_count) {
    (async () => {
        let e = [],
            t = (t, r) => {
                e[t] = r
            },
            r = null,
            a = () => ((null == r || 0 === r.byteLength) && (r = u8 = new Uint8Array(f.e.buffer)),
                r),
            n = null,
            o = () => ((null == n || 0 === n.byteLength) && (n = new Int32Array(f.e.buffer)),
                n),
            s = null,
            i = () => ((null == s || 0 === s.byteLength) && (s = new Float64Array(f.e.buffer)),
                s),
            d = new TextEncoder("utf-8"),
            l = new TextDecoder("utf-8", {
                ignoreBOM: !0
            });
        l.decode();
        let c = /^[\x00-\x7f]*$/,
            u = (e, t) => {
                if (c.test(t)) {
                    let len = t ? (t.length ? t.length : 0) : 0;
                    let r = f.d(len, 1),
                        n = a();
                    for (let e = 0; e < len; e++)
                        n[r + e] = t.charCodeAt(e);
                    o().set([r, len], e >> 2)
                } else
                    y(e, d.encode(t))
            },
            p = (e, t) => {
                null != t && u(e, t)
            },
            y = (e, t) => {
                let r = f.d(t.length, 1);
                a().set(t, r),
                o().set([r, t.length], e >> 2)
            },
            h = (e, t) => {
                let r = f.d(t.length << 3, 8);
                i().set(t, r >> 3),
                    o().set([r, t.length], e >> 2)
            },
            m = [
                [(e, r, n) => {
                        // r = l.decode(a().subarray(r, r + n)),
                        t(e,
                            /* ( () => {
                                                let e = document.createElement("div");
                                                return e.id = r,
                                                document.body.appendChild(e),
                                                e
                                            }
                                            )() */
                            {})
                    }, (t, r) => {
                        y(t, (r = e[r]).shift())
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.strokeStyle = `rgb(${r >> 16},${r >> 8 & 255},${255 & r})`
                    }, (t, r, a) => {
                        //(t = e[t]).moveTo(r, a)
                    }, () => {
                        /*let e = document.createElement("script");
                        e.defer = !0,
                        e.src = "https://static.cloudflareinsights.com/beacon.min.js",
                        e.setAttribute("data-cf-beacon", JSON.stringify({
                            token: "arras.io" === location.hostname.slice(-8) ? "ff5561cea47c47eaafe62003a2bb80fe" : "arrax.io" === location.hostname.slice(-8) ? "7ce137179299421288a5a93c26f71e2c" : "arras.netlify.app" === location.hostname.slice(-17) ? "73db2851ba12432c968cae9c6b385f3a" : "arras.cx" === location.hostname.slice(-8) ? "a5ebfa0ea9364b2ca5cddf829c28095e" : "1a3464390f784a2a800f401f1bfa6a30"
                        })),
                        document.body.appendChild(e)*/
                    }, t => /* (t = e[t]).readyState */ 1, () => true, (t, r, a, n, o, s) => {
                        /*t = e[t],
                        r = e[r],
                        t.drawImage(r, a, n, o, s)*/
                    }, t => {
                        //(t = e[t]).clip()
                    }, (e, r, n) => {
                        // r = l.decode(a().subarray(r, r + n)),
                        t(e,
                            /*( () => {
                                                let e = new Image;
                                                return e.src = r,
                                                e
                                            }
                                            )()*/
                            {})
                    }, t => /*!!((t = e[t]).captureStream && MediaRecorder && MediaRecorder.isTypeSupported("video/webm"))*/ true, (t, r, a, n) => {
                        //t = e[t],
                        //r >>>= 0,
                        //a >>>= 0,
                        //t.texParameteri(r, a, n)
                    }, e => {
                        /*t(e, e => {
                            (async () => navigator.clipboard.write([new ClipboardItem({
                                [e.type]: e
                            })]))().catch(e => alert("Failed to copy!"))
                        }
                        )*/
                    }, t => {
                        //(t = e[t]).id = "canvas",
                        //document.body.appendChild(t)
                    }, (t, r) => {
                        //(t = e[t]).lineWidth = r
                    }, (e, t, r, n) => {
                        // console.log(e = l.decode(a().subarray(e, e + t)), r = l.decode(a().subarray(r, r + n)))
                    }, e => {
                        t(e,
                            /*( () => {
                                                let e = [];
                                                try {
                                                    navigator.keyboard.getLayoutMap().then(t => {
                                                        e.push(Array.from(t).join("\n"))
                                                    }
                                                    ).catch(t => {
                                                        e.push("")
                                                    }
                                                    )
                                                } catch (t) {
                                                    e.push("")
                                                }
                                                return e
                                            }
                                            )()*/
                            [])
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //a = e[a],
                        //t.bindTexture(r, a)
                    }, () => false, (t, r, n, o, s) => {
                        //t = e[t],
                        //r >>>= 0,
                        //n = a().subarray(n, n + o),
                        //s >>>= 0,
                        //t.bufferData(r, n, s)
                    }, (t, r, a, n, o) => {
                        //(t = e[t]).viewport(r, a, n, o)
                    }, (t, r, a) => {
                        //t = e[t],
                        //r = e[r],
                        //a = e[a],
                        //t.attachShader(r, a)
                    }, (t, r, n, o, s) => {
                        /*(t = e[t])(new Blob([r = a().subarray(r, r + n)],{
                            type: o = l.decode(a().subarray(o, o + s))
                        }))*/
                    }, t => 0 === (t = e[t]).length ? 0 : t[0].status ? 1 : t[0].signature ? 2 : 3, (t, r, a) => {
                        u(t, (r = e[r])[a].name)
                    }, (t, r, n, o) =>
                    /*(t = e[t],
                                r = e[r],
                                n = l.decode(a().subarray(n, n + o)),
                                t.getAttribLocation(r, n))*/
                    {}, (t, r, a, n, o) => {
                        //t = e[t],
                        //r = e[r],
                        //t.uniform3f(r, a, n, o)
                    },
                    t => "boolean" == typeof(t = e[t]), t => (t = e[t]).shift() ?? -1, e => {
                        t(e, /*window*/ {})
                    },
                    e => {
                        u(e,
                            /*( () => {
                                                let e;
                                                try {
                                                    e = localStorage.getItem("arras.io")
                                                } catch (e) {}
                                                return e || ""
                                            }
                                            )()*/
                        "")
                    },
                    e => {
                        u(e, "#" + url)
                    }, (t, r, n, o, s, i) => {
                        /*t = e[t],
                        r = e[r],
                        n = l.decode(a().subarray(n, n + o)),
                        s = l.decode(a().subarray(s, s + i)),
                        t(new Blob([r],{
                            type: n
                        }), s)*/
                    }, (t, r, n, o) => {
                        // t = l.decode(a().subarray(t, t + r)),
                        // n = e[n],
                        // o >>>= 0,
                        // fetch(t).then(e => e.arrayBuffer()).then(e => e.byteLength).catch( () => -1).then(e => n.push(o, e))
                    }, (t, r, a) => {
                        //t = e[t],
                        //r = e[r],
                        //t.uniform1i(r, a)
                    }, (e, t) => {
                        /*e = l.decode(a().subarray(e, e + t));
                        let r = document.createElement("canvas");
                        try {
                            return r.getContext(e, {
                                failIfMajorPerformanceCaveat: !0
                            }) ? 3 : r.getContext(e) ? 2 : 1
                        } catch (e) {}
                        return 0*/
                    }, (t, r) => {
                        //r = e[r],
                        h(t, (() => {
                            /*r.style.position = "absolute",
                            r.style.display = "inline-block",
                            r.style.width = "auto",
                            r.style.height = "auto",
                            r.style.overflow = "hidden",
                            r.style.transformOrigin = "top left",
                            r.style.transform = "";
                            let e = r.getBoundingClientRect();
                            return [e.width, e.height]*/
                            [0, 0]
                        })())
                    },
                    t => {
                        //(t = e[t]).focus()
                    }, () => /*"ontouchstart"in document.body && /android|mobi/i.test(navigator.userAgent)*/ false, (t, r) => {
                        u(t, r = e[r])
                    },
                    t => (t = e[t]).shift(), t => "number" == typeof(t = e[t]), (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.clear(r)
                    }, () =>
                    /*!document.createElement("canvas").getContext("webgl", {
                                    failIfMajorPerformanceCaveat: !0
                                })*/
                    false, (t, r, n, o, s) => {
                        //t = e[t],
                        //r = l.decode(a().subarray(r, r + n)),
                        //t.fillText(r, o, s)
                    }, (r, a, n) => {
                        //a = e[a],
                        //n >>>= 0,
                        t(r, /*a.getParameter(n)*/ [])
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.disable(r)
                    }, (t, r) => {
                        //(t = e[t]).font = `${r}px Ubuntu`
                    },
                    t => {
                        let r = (t = e[t])[0];
                        return t[0] = !1,
                            r
                    }, (t, r, n) => {
                        t = e[t];
                        r = a().subarray(r, r + n);
                        1 === t.readyState && t.send(r); 
                    }, (t, r) => (t = e[t])[r].clients, (t, r, a, n, o) => {
                        //(t = e[t]).strokeRect(r, a, n, o)
                    }, (t, r) => {
                        //t = e[t],
                        //r = e[r],
                        //t.compileShader(r)
                    }, () => performance.now() + 1000000, t => {
                        //(t = e[t]).remove()
                    }, (t, r, n, o) => {
                        //t = e[t],
                        //r = e[r],
                        //n = l.decode(a().subarray(n, n + o)),
                        //t.shaderSource(r, n)
                    }, () => /*Date.now()*/ 0, t => t = e[t], () => {
                        /*try {
                            document.body.requestFullscreen()
                        } catch (e) {}*/
                    }, (t, r, n) => {
                        t = l.decode(a().subarray(t, t + r)),
                        t = t.replace(".uvwx.xyz:2222", "-c.uvwx.xyz:8443/2222"),
                        n = e[n];
                        if (!t.includes("/status")) {
                            if (!t.includes("signature")) {
                                safe_fetch(t).then(e => e.json()).then(e => {
                                    n.push(e),
                                    g()
                                });
                            } else {
                                n.push({}),
                                g()
                            }
                        } else {
                            // Write our own custom fetch to replace the real fetch (this avoids rate limit issues)
                            (async () => {
                                n.push(JSON.parse(await fs.readFile(path.resolve(__dirname, './servers.txt')))),
                                g()
                            })();
                        }
                    }, (t, r) => {
                        //(t = e[t]).globalAlpha = r
                    },
                    t => /*(t = e[t]).complete*/ true, t => (t = e[t]).shift(), () => /*navigator.hardwareConcurrency || -1*/ 16, (e, t) => {
                        //e = l.decode(a().subarray(e, e + t)),
                        //location.hash = `#${e}`
                    }, () => /*crypto.getRandomValues(new Uint32Array(1))[0]*/ 0, (t, r) => {
                        u(t, (r = e[r]).shift() ?? "")
                    }, (e, t) => {
                        /*e = l.decode(a().subarray(e, e + t)),
                        location.hash = e;*/
                    }, (t, r, a) => {
                        //(t = e[t]).width = r,
                        //t.height = a
                    }, () => true, () => {
                        /*try {
                            location.reload()
                        } catch (e) {}*/
                    }, (t, r) => {
                        //t = e[t],
                        //r = e[r],
                        //t.linkProgram(r)
                    }, (t, r, a, n) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.drawArrays(r, a, n)
                    }, (t, r) => {
                        u(t, /*(r = e[r]).shift().signature*/ "")
                    },
                    t => (t = e[t]).shift().clients, (r, a) => {
                        key_press("Enter", 13);
                        t(r, Object.values((a = e[a]).shift().status))
                    }, (r, n, o, s) => {
                        //n = e[n],
                        //o = l.decode(a().subarray(o, o + s)),
                        t(r,
                            /*( () => {
                                                try {
                                                    return n[o]
                                                } catch (e) {
                                                    return n
                                                }
                                            }
                                            )()*/
                            0)
                    },
                    e => {
                        u(e,
                            /* ( () => {
                                                let e = document.createElement("canvas").getContext("webgl");
                                                if (!e)
                                                    return "";
                                                let t = [e.RENDERER, e.VENDOR]
                                                    , r = e.getExtension("WEBGL_debug_renderer_info");
                                                return null != r && t.push(r.UNMASKED_RENDERER_WEBGL, r.UNMASKED_VENDOR_WEBGL),
                                                t.map(t => e.getParameter(t)).join("\n")
                                            }
                                            )()*/
                            [])
                    },
                    e => {
                        u(e, "")
                    }, () => true, (e, t) => {
                        /*
                        e = a().subarray(e, e + t);
                        try {
                            return new WebAssembly.Instance(new WebAssembly.Module(e)).exports.b(BigInt(0)) === BigInt(0)
                        } catch (e) {}
                        return !1 */
                    },
                    e => {
                        t(e,
                            /*e => (e.preventDefault(),
                                            e.returnValue = "",
                                            "")*/
                            function() {})
                    }, () => true, (t, r, n) => {
                        //t = e[t],
                        //r = l.decode(a().subarray(r, r + n)),
                        //console.log(r, t),
                        //t.value = r
                    },
                    e => {
                        t(e, /*document.createElement("canvas")*/ {})
                    },
                    e => {
                        t(e,
                            (() => {
                                let e = [!1, !1],
                                    t = () => {
                                        e[0] = true;
                                        g();
                                        setTimeout(t, 0);
                                    };
                                setTimeout(t, 0);
                                return e;
                            })())
                    },
                    e => {
                        u(e, "arras.io")
                    },
                    t => (t = e[t]).shift() || 0, t => {
                        //(t = e[t]).addEventListener("focus", () => t.select())
                    },
                    t => {
                        //(t = e[t]).stroke()
                    }, (t, r, a, n, o, s, i, d, l) => {
                        //r >>>= 0,
                        //a = e[a],
                        //d >>>= 0,
                        //l >>>= 0,
                        y(t,
                            /*( () => {
                                                let e = new Uint8Array(r);
                                                return a.readPixels(n, o, s, i, d, l, e),
                                                e
                                            }
                                            )()*/
                            [])
                    },
                    t => {
                        //(t = e[t]).lineJoin = "round",
                        //t.lineCap = "round",
                        //t.textAlign = "left",
                        //t.textBaseline = "middle"
                    }, () => {
                        /*let e = !1;
                        addEventListener("error", t => {
                            if (e)
                                return;
                            e = !0;
                            let {message: r, filename: a, lineno: n, colno: o, error: s} = t;
                            s && (s = s.toString()),
                            (null != s || 0 != n || 0 != o) && prompt("The game may have crashed, refresh the page to recover from error.\n\nError information:", JSON.stringify({
                                message: r,
                                filename: a,
                                lineno: n,
                                colno: o,
                                error: s
                            }))
                        }
                        )*/
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //a >>>= 0,
                        //t.blendFunc(r, a)
                    },
                    t => {
                        //(t = e[t]).lineCap = "round"
                    },
                    t => (t = e[t]).pop(), (t, r) => {
                        //(t = e[t]).font = `bold ${r}px Ubuntu`
                    },
                    t => {
                        //(t = e[t]).fill()
                    }, (t, r, a, n) => {
                        /*t = e[t],
                        r = e[r],
                        t.drawImage(r, a, n)*/
                    }, (t, r, a, n, o) => {
                        //t = e[t],
                        //r >>>= 0,
                        //n >>>= 0,
                        //t.drawElements(r, a, n, o)
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.strokeStyle = `rgba(${r >> 16},${r >> 8 & 255},${255 & r},${a})`
                    },
                    t => {
                        /*((t = e[t]).videoRecorder || (t.videoRecorder = new MediaRecorder(t.captureStream(30),{
                                            mimeType: MediaRecorder.isTypeSupported("video/webm;codecs=vp8") ? "video/webm;codecs=vp8" : "video/webm",
                                            videoBitsPerSecond: 2097152,
                                            audioBitsPerSecond: 0
                                        })),
                                        "inactive" === t.videoRecorder.state) ? (t.videoRecorder.start(),
                                        !1) : (t.videoRecorder.stop(),
                                        !0)*/
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.pixelStorei(r, a)
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.depthFunc(r)
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.enableVertexAttribArray(r)
                    },
                    t => {
                        //(t = e[t]).style.clipPath = "none"
                    }, (t, r, a) => {
                        //(t = e[t]).translate(r, a)
                    }, (t, r) => {
                        u(t, "127.0.0.1")
                    }, () => true, t => {
                        //t = e[t],
                        //addEventListener("beforeunload", t)
                    }, (r, a) => {
                        a = e[a],
                            t(r,
                                /*( () => {
                                                    let e = atob(a.toDataURL().split(",")[1])
                                                        , t = new Uint8Array(e.length);
                                                    for (let r = 0; r < e.length; r++)
                                                        t[r] = e.charCodeAt(r);
                                                    return t
                                                }
                                                )()*/
                                [])
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.activeTexture(r)
                    }, (r, n, o, s, i) => {
                        //n = e[n],
                        //o = e[o],
                        //s = l.decode(a().subarray(s, s + i)),
                        t(r, {})
                    },
                    t => {
                        // (t = e[t]).lineCap = "butt"
                    },
                    t => "string" == typeof(t = e[t]), (e, t) => {
                        // open(e = l.decode(a().subarray(e, e + t)), "_blank", "noopener")
                    }, (e, t) => (e = a().subarray(e, e + t),
                        WebAssembly.validate(e)), (t, r) => {
                        //t = e[t],
                        //r = e[r],
                        //t.replaceWith(r)
                    }, (t, r, a, n, o, s) => {
                        //(t = e[t]).style.left = `${r}px`,
                        //t.style.top = `${a}px`,
                        //t.style.width = `${n}px`,
                        //t.style.height = `${o}px`,
                        //t.style.transform = `scale(${s}, ${s})`
                    }, () => {
                        /*let e = ramp = ramp || {};
                        e.que = e.que || [],
                        e.passiveMode = !0,
                        _pwGA4PageviewId = Date.now().toString();
                        let t = dataLayer = dataLayer || []
                        , r = gtag = gtag || function() {
                            t.push(arguments)
                        }
                        ;
                        r("js", new Date),
                        r("config", "UA-120544149-1"),
                        r("event", "ramp_js", {
                            send_to: "UA-120544149-1",
                            pageview_id: _pwGA4PageviewId
                        })*/
                    },
                    t => {
                        e[t >>>= 0] = null
                    }, (t, r) => false, e => {
                        t(e, null)
                    },
                    t =>
                    /*(t = e[t],
                                document.activeElement === t)*/
                    {
                        false
                    }, (r, a) => {
                        t(r, (() => {
                            let e = [];
                            return e
                            /*addEventListener("mousedown", t => {
                                                        (e.push(1, t.clientX, t.clientY, t.button),
                                                        g())
                                                    }
                                                    ),
                                                    addEventListener("mousemove", t => {
                                                        (e.push(2, t.clientX, t.clientY),
                                                        g())
                                                    }
                                                    ),
                                                    addEventListener("mouseup", t => {
                                                        (e.push(3, t.clientX, t.clientY, t.button),
                                                        g())
                                                    }
                                                    ),
                                                    addEventListener("wheel", t => {
                                                        (t.preventDefault(),
                                                        e.push(4, t.clientX, t.clientY, t.deltaY * (1 === t.deltaMode ? 40 : 2 === t.deltaMode ? 320 : 1)),
                                                        g())
                                                    }
                                                    ),*/
                        })())
                    }, (t, r) => {
                        //(t = e[t]).font = `${r}px Trebuchet MS`
                    }, (t, r) => (t = e[t])[r].uptime, () => /*new Date(new Date().getFullYear(),0,1).getTimezoneOffset()*/ 0, e => {
                        t(e, [])
                    }, (t, r, a, n, o, s, i) => {
                        //t = e[t],
                        //r >>>= 0,
                        //n >>>= 0,
                        //o = o > 0,
                        //t.vertexAttribPointer(r, a, n, o, s, i)
                    }, (t, r) => {
                        u(t, (r = e[r]).protocol)
                    }, (t, r, a, n, o) => {
                        //(t = e[t]).scissor(r, a, n, o)
                    }, () => /*innerWidth*/ 0, t => (t = e[t]).length || 0, () => /*devicePixelRatio*/ 1, (t, r) => {
                        //t = e[t],
                        //r = e[r],
                        //t.appendChild(r)
                    }, (t, r, a) => {
                        u(t, (r = e[r])[a].host)
                    }, (r, a, n) => {
                        //a = e[a],
                        //n = n > 0,
                        t(r,
                            /*a.getContext("2d", {
                                                alpha: n
                                            })*/
                            {})
                    },
                    t => !(t = e[t]), (r, a) => {
                        t(r, /*(a = e[a]).createTexture()*/ {})
                    }, (t, r, a, n, o) => {
                        //t = e[t],
                        //r >>>= 0,
                        //a >>>= 0,
                        //n >>>= 0,
                        //o >>>= 0,
                        //t.blendFuncSeparate(r, a, n, o)
                    }, (t, r, n, o, s) => {
                        //t = e[t],
                        //r = l.decode(a().subarray(r, r + n)),
                        //t.strokeText(r, o, s)
                    }, (t, r, a, n) => {
                        //t = e[t],
                        //r = e[r],
                        //t.uniform2f(r, a, n)
                    }, (r, a) => {
                        // a = e[a],
                        t(r, /*new Promise(e => a.toBlob(e))*/ {})
                    }, (t, r, n, o) => {
                        //t = e[t],
                        //r = e[r],
                        //n = l.decode(a().subarray(n, n + o)),
                        //t.then(e => r(e, n))
                    }, () => {
                        /*let e = () => arrasAdDone = true
                        , t = document.createElement("script");
                        t.async = !0,
                        t.src = "https://cdn.intergient.com/1024850/73985/ramp.js",
                        t.onload = () => {
                            ramp.que.push(e),
                            setTimeout(e, 2e4)
                        }
                        ,
                        t.onerror = e,
                        document.body.appendChild(t)*/
                    }, (r, a) => {
                        t(r, (a = e[a])[1])
                    }, (t, r, n, o) => {
                        /*(t = e[t])(new Blob([r = e[r]],{
                            type: n = l.decode(a().subarray(n, n + o))
                        }))*/
                    },
                    e => {
                        /*t(e, (e, t) => {
                            let r = URL.createObjectURL(e)
                            , a = document.createElement("a");
                            a.style.display = "none",
                            a.setAttribute("download", t),
                            a.setAttribute("href", r),
                            document.body.appendChild(a),
                            a.click(),
                            a.remove(),
                            URL.revokeObjectURL(r)
                        }
                        )*/
                    },
                    t => /*(t = e[t])[0].timestamp*/ 0, (r, a, n) => {
                        //a = e[a],
                        //n >>>= 0,
                        t(r, /*a.createShader(n)*/ {})
                    },
                    e => {
                        u(e, 'Error\n    at <anonymous>:4:33\n    at <anonymous>:8:22')
                    }, () => {
                        //let e = document.activeElement;
                        //null != e && e.blur()
                    }, (t, r) => {
                        u(t, (r = e[r]).shift())
                    },
                    e => {
                        t(e,
                            /*( () => {
                                                let e = [];
                                                return fetch("./CHANGELOG.md").then(e => e.text()).catch( () => "").then(t => e.push(t)),
                                                e
                                            }
                                            )()*/
                            [])
                    },
                    e => {
                        t(e, (() => {
                            // Promise font thing
                            let e = [];
                            return e.push(!0),
                                e
                        })())
                    }, (t, r) => {
                        y(t, r = e[r])
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //a = e[a],
                        //t.bindBuffer(r, a)
                    }, (t, r) => {
                        u(t, /*(r = e[r]).lastValue*/ 0)
                    }, (t, r, a, n, o, s) => {
                        //(t = e[t]).arc(r, a, n, o, s)
                    }, (r, a, n) => {
                        //a = e[a],
                        //n = n > 0,
                        t(r,
                            /*a.getContext("webgl", {
                                                antialias: n,
                                                premultipliedAlpha: !0,
                                                failIfMajorPerformanceCaveat: !0
                                            })*/
                            {})
                    }, (t, r, n) => {
                        //t = e[t],
                        //r = l.decode(a().subarray(r, r + n)),
                        //t.lastValue = r
                    }, (t, r, a) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.fillStyle = `rgba(${r >> 16},${r >> 8 & 255},${255 & r},${a})`
                    },
                    t => {
                        //(t = e[t]).style.textAlign = "center"
                    },
                    t => {
                        //(t = e[t]).save()
                    }, (t, r) => {
                        // r = e[r],
                        u(t,
                            /*( () => {
                                                try {
                                                    return `${r}`
                                                } catch (e) {
                                                    return ""
                                                }
                                            }
                                            )()*/
                            "")
                    },
                    t => {
                        //(t = e[t]).closePath()
                    },
                    t => /*(t = e[t]).isContextLost()*/ false, (t, r, a, n, o, s, i, d, l, c, u) => {
                        /*t = e[t],
                        i >>>= 0,
                        c = c > 0,
                        u = u > 0,
                        t.style.position = "absolute",
                        t.style.left = `${r}px`,
                        t.style.top = `${a}px`,
                        t.style.width = `${n}px`,
                        t.style.height = `${o}px`,
                        t.style.font = `bold ${s}px/${o}px Ubuntu`,
                        t.style.border = "none",
                        t.style.outline = "none",
                        t.style.padding = "0",
                        t.style.margin = "0",
                        t.style.backgroundColor = "transparent",
                        t.style.setProperty("color", `rgba(${i >> 16},${i >> 8 & 255},${255 & i},${d})`, "important"),
                        t.maxLength = l,
                        t.type = c ? "password" : "text",
                        t.readOnly = u*/
                    }, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.enable(r)
                    }, (t, r, a, n, o, s, i, d, l, c) => {
                        /*t = e[t],
                        r = e[r],
                        t.drawImage(r, a, n, o, s, i, d, l, c)*/
                    },
                    t => {
                        //(t = e[t]).restore()
                    },
                    t => {
                        //(t = e[t]).beginPath()
                    }, (t, r, n) => {
                        //t = e[t],
                        //r = l.decode(a().subarray(r, r + n)),
                        //t.style.cursor = r
                    }, (t, r) => {
                        r = e[r],
                            h(t,
                                /* ( () => {
                                                    let e = r.getBoundingClientRect();
                                                    return [e.top, e.right, e.bottom, e.left]
                                                }
                                                )()*/
                                [0, 0, 0, 0])
                    },
                    e => {
                        t(e, /*document.createElement("div")*/ {})
                    }, (e, t, r) => {
                        t = l.decode(a().subarray(t, t + r)),
                            u(e,
                                /*( () => {
                                                    let e = ""
                                                        , r = document.createElement("span");
                                                    for (let a of (r.style.visibility = "hidden",
                                                    r.style.font = "initial",
                                                    r.style.fontSize = "1920px",
                                                    document.body.appendChild(r),
                                                    ["initial", "sans-serif", "serif", "monospace", "cursive", "fantasy"]))
                                                        for (let n of (r.style.fontFamily = a,
                                                        t))
                                                            r.textContent = n,
                                                            e += `${r.offsetWidth} ${r.offsetHeight}`;
                                                            r.remove();
                                                            console.log(e.slice(0, -1));
                                                        return e.slice(0, -1);
                                                }
                                                )()*/
                                "960 21261068 21261461 2126585 21260 21261015 21260 21261154 21261493 21261141 21262324 21261348 21261920 21261141 21261037 21261173 21260 21261370 2126960 21261173 2126960 2126960 2126960 21260 21261656 21262358 21261532 21261275 21261734 21261049 2126853 21261780 21261920 21261920 21261187 2126465 21261493 21261493 21261225 21261493 21261865 21261493 21261344 2126960 21451281 21451395 2145677 21450 21451015 21450 21451154 21451440 21451141 21452324 21451348 21451920 21451141 21451037 21451173 21450 21451349 21451000 21451173 21451068 21451068 21451068 21450 21451656 21452358 21451532 21451275 21451734 21451049 2145940 21451780 21451920 21451920 21451410 2145465 21451440 21451440 21451225 21451440 21451865 21451440 21451344 2145960 21261068 21261461 2126585 21260 21261015 21260 21261154 21261493 21261141 21262324 21261348 21261920 21261141 21261037 21261173 21260 21261370 2126960 21261173 2126960 2126960 2126960 21260 21261656 21262358 21261532 21261275 21261734 21261049 2126853 21261780 21261920 21261920 21261187 2126465 21261493 21261493 21261225 21261493 21261865 21261493 21261344 2126960 22481056 22481056 2248585 22480 22481015 22480 22481154 22481056 22481141 22482324 22481348 22481920 22481141 22481037 22481173 22480 22481056 22481056 22481056 22481056 22481056 22481056 22480 22481656 22482358 22481532 22481275 22481734 22481049 22481056 22481780 22481920 22481920 22481187 2248465 22481056 22481056 22481225 22481056 22481865 22481056 22481344 2248960 26761331 26761461 2676585 26760 26761015 26760 26761154 2676960 26761141 26762324 26761348 26761920 26761141 26761037 26761173 26760 26761370 2676960 26761172 26761172 26761172 26761194 26760 26761656 26762358 26761532 26761275 26761734 26761049 2676853 26761780 26761920 26761920 26761187 2676465 2676960 2676960 26761225 2676960 26761865 2676960 26761344 2676960 2342993 23421461 2342585 23420 23421015 23420 23421154 23421440 23421141 23422324 23421348 23421920 23421141 23421037 23421173 23420 23421370 2342960 23421173 2342960 2342960 2342960 23420 23421656 23422358 23421532 23421275 23421734 23421049 2342853 23421780 23421920 23421920 23421187 2342465 2342323 23421440 23421225 23421440 23421865 23421440 23421344 234")
                    }, (e, t) => {
                        /*e = l.decode(a().subarray(e, e + t));
                        try {
                            localStorage.setItem("arras.io", e)
                        } catch (e) {}*/
                    },
                    e => {
                        // Figure out how to get rid of
                        t(e,
                            /*( () => {
                                                let e = document.createElement("input");
                                                e.spellcheck = !1,
                                                e.autocomplete = "off",
                                                e.tabIndex = -1,
                                                e.lastValue = e.value;
                                                return e;
                                            }
                                            )()*/
                            [])
                    }, (t, r) => (t = e[t])[r].mspt, (t, r) => {
                        //t = e[t],
                        //r >>>= 0,
                        //t.fillStyle = `rgb(${r >> 16},${r >> 8 & 255},${255 & r})`
                    }, (r, a, n, o) => {
                        //a = e[a],
                        //n = e[n],
                        //o >>>= 0,
                        t(r, /*a.getProgramParameter(n, o)*/ 0)
                    }, (t, r, a, n, o) => {
                        // (t = e[t]).rect(r, a, n, o)
                    }, (r, a) => {
                        /*a = e[a],
                        t(r, new Promise(e => {
                            let t = r => {
                                e(r.data),
                                a.videoRecorder.removeEventListener("dataavailable", t)
                            }
                            ;
                            a.videoRecorder.addEventListener("dataavailable", t)
                        }
                        ))*/
                    }, (t, r, n) => {
                        /*(t = e[t],
                                        r = l.decode(a().subarray(r, r + n)),
                                        t.measureText(r).width)*/
                    }, (t, r, n, o, s, i, d) => {
                        /*t = e[t],
                        r = a().subarray(r, r + n),
                        o = l.decode(a().subarray(o, o + s)),
                        i = l.decode(a().subarray(i, i + d)),
                        t(new Blob([r],{
                            type: o
                        }), i)*/
                    }, (t, r, a, n, o) => {
                        // (t = e[t]).style.clipPath = `xywh(${r}px ${a}px ${n}px ${o}px)`
                    }, (t, r, a, n, o, s, i) => {
                        /*t = e[t],
                        r >>>= 0,
                        n >>>= 0,
                        o >>>= 0,
                        s >>>= 0,
                        i = e[i],
                        t.texImage2D(r, a, n, o, s, i)*/
                    }, (t, r) => {
                        /*t = e[t],
                        r = e[r],
                        t.useProgram(r)*/
                    }, (t, r) => {
                        /*t = e[t],
                        r = e[r],
                        t.then(e => r(e))*/
                    },
                    t => (t = e[t]).shift() || 0, (r, a) => {
                        a = e[a],
                            t(r, (() => {
                                let e = [];
                                return a.addEventListener("open", () => {
                                        client_opened = true;
                                        mockup_data = new mockup_parser();
                                        broadcast_data = new broadcast_parser();
                                        room_data = new room_parser();
                                        console.log(`Socket OPENED in ${url}`);
                                        e.push(1);
                                        g();
                                    }),
                                    a.addEventListener("message", t => {
                                        let packet = new Uint8Array(t.data);
                                        new_packet_message = true;
                                        e.push(2, packet),
                                            g()
                                    }),
                                    a.addEventListener("close", t => {
                                        console.log(`Socket CLOSED in ${url}`);
                                        if (client_opened) {
                                            if (rejoin && connection_count < 3) {
                                                create_bot(url, proxy, connection_count);
                                            } else {
                                                parentPort.postMessage(`There was an error connecting to #${url}.`);
                                            }
                                        } else {
                                            console.log(`Socket FAILED to connect to ${url}`);
                                            if (connection_count < 3) {
                                                create_bot(url, proxy, connection_count + 1);
                                            } else {
                                                parentPort.postMessage(`There was an error connecting to #${url}.`);
                                            }
                                        }
                                        e.push(3, t.wasClean, t.code, t.reason),
                                            g();
                                    }),
                                    a.addEventListener("error", () => {
                                        e.push(4),
                                            g()
                                    }),
                                    e
                            })())
                    }, (e, t) => {
                        /*fetch("https://analytics-server.arras.cx:2002/data", {
                            method: "POST",
                            mode: "cors",
                            cache: "no-cache",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: e = l.decode(a().subarray(e, e + t))
                        }).then(e => e.json()).catch( () => {}
                        )*/
                    }, (t, r) => {
                        u(t, (r = e[r]).value)
                    }, () => false, () => /* innerHeight */ 0, (t, r, a, n, o) => {
                        // t = e[t];
                        // t.fillRect(r, a, n, o);
                    },
                    t => t = e[t], t => {
                        // (t = e[t]).lineJoin = "round"
                    },
                    t => (t = e[t])[0], t => {
                        // (t = e[t]).lineJoin = "miter"
                    }, (e, t) => {
                        /*e = l.decode(a().subarray(e, e + t)),
                        (async () => navigator.clipboard.writeText(e))().catch( () => prompt("Copy:", e))*/
                    },
                    e => {
                        u(e, "")
                    },
                    t => {
                        (t = e[t])[1] = !0
                    },
                    t => {
                        t = e[t]
                    },
                    e => {
                        /*t(e, ( () => {
                            let e = [!1, !1]
                            , t = new MessageChannel;
                            return t.port1.addEventListener("message", () => {
                                e[0] = !0,
                                g(),
                                e[1] || (document.hidden ? requestAnimationFrame( () => t.port2.postMessage(null)) : t.port2.postMessage(null))
                            }
                            ),
                            t.port1.start(),
                            t.port2.postMessage(null),
                            e
                        }
                        )())*/
                    }, (t, r) => (t = e[t])[r].online, () => {
                        /*document.addEventListener("contextmenu", e => {
                            "A" !== e.target.tagName && "INPUT" !== e.target.tagName && e.preventDefault()
                        }
                        )*/
                    },
                    e => {
                        t(e, (() => {
                            let e = [],
                                t = () => true;
                            key_press = function(key, keyCode) {
                                e.push(2, key, keyCode);
                                g();
                            };
                            key_up = function (key, keyCode) {
                                e.push(1, key, keyCode);
                                g();
                            };
                            return e;
                            /*addEventListener("keydown", r => {
                                                        r.ctrlKey || r.altKey || r.metaKey || t() || /^F([56]|\d{2,})$/.test(r.key) || r.preventDefault();
                                                        let a = r.ctrlKey | r.altKey << 1 | r.shiftKey << 2 | r.metaKey << 3;
                                                        e.push(2 | r.repeat | a << 2, r.key, r.code),
                                                        g()
                                                    }
                                                    ),
                                                    addEventListener("keyup", r => {
                                                        r.ctrlKey || r.altKey || r.metaKey || t() || /^F([56]|\d{2,})$/.test(r.key) || r.preventDefault();
                                                        let a = r.ctrlKey | r.altKey << 1 | r.shiftKey << 2 | r.metaKey << 3;
                                                        e.push(1 | a << 2, r.key, r.code),
                                                        g()
                                                    }
                                                    ),*/
                        })())
                    }, () => true, (e, t) => {
                        // console.log(e = l.decode(a().subarray(e, e + t)))
                    },
                    t => {
                        (t = e[t]).close()
                    }, (t, r, a) => {
                        u(t, (r = e[r])[a].code)
                    }, (t, r) => {
                        r = e[r],
                            h(t, (() => {
                                let e = new Int32Array(r);
                                return r.length = 0,
                                    e
                            })())
                    }, (t, r) => {
                        p(t, (r = e[r]).pop())
                    }, (t, r) => (t = e[t])[r].featured, (e, r, n, o, s) => {
                            r = l.decode(a().subarray(r, r + n)).split("&");
                            o = l.decode(a().subarray(o, o + s));
                            r.splice(1, 1);
                            r = r.join("&");
                            t(e, (() => {
                                let websocket_headers = {
                                    headers: {
                                        'User-Agent': user_agent,
                                        'Origin': 'https://arras.io',
                                        'Pragma': 'no-cache',
                                        'Cache-Control': 'no-cache',
                                        'Accept-Encoding': 'gzip, deflate, br, zstd',
                                        'Accept-Language': 'en-US,en;q=0.9',
                                    },
                                    protocols: ['arras.io#v1.4+sls+et0', 'arras.io'],
                                };
                                if (proxy !== "") websocket_headers.dispatcher = proxy;
                                let e = new WebSocket(r, websocket_headers);
                                return e.binaryType = "arraybuffer",
                                    e
                            })())
                    }, (r, n, o, s, i, d) => {
                        n = l.decode(a().subarray(n, n + o)),
                            s = l.decode(a().subarray(s, s + i)),
                            d = e[d],
                            t(r, (() => {
                                try {
                                    return [!1, Function(n, s)(d)]
                                } catch (e) {
                                    return [!0, e]
                                }
                            })())
                    }, (t, r, a) => {
                        // (t = e[t]).lineTo(r, a)
                    }, (r, a) => {
                        t(r, /*(a = e[a]).createProgram()*/ {})
                    }, (r, a) => {
                        t(r, /*(a = e[a]).createBuffer()*/ [])
                    }, (t, r, a, n, o) => {
                        // (t = e[t]).clearRect(r, a, n, o)
                    }, (t, r, a, n, o) => {
                        // (t = e[t]).blendColor(r, a, n, o)
                    }, (value, xor, type) => {
                        if (!type) {
                            if (new_packet_message) {
                                switch (message_packet[0]) {
                                    case 98:
                                        encoded_packet = new Uint8Array(message_packet);
                                        decoded_packet = decode_packet(encoded_packet, "b");
                                        broadcast_data.parse(decoded_packet[0], decoded_packet[1], encoded_packet);
                                        if (Object.keys(broadcast_data.leaderboard).length) send_lb();
                                    break;
                                    case 74:
                                        decoded_packet = decode_packet(new Uint8Array(message_packet), "J")[0];
                                        mockup_data.parse(decoded_packet);
                                    break;
                                    case 82:
                                        let game_data_length = message_packet[2] + message_packet[3] * 256;
                                        let game_data_end = 4 + game_data_length;
                                        let game_data = new TextDecoder().decode(new Uint8Array(message_packet.slice(4, game_data_end)));
                                        let remaining_packet = decode_packet(new Uint8Array(message_packet.slice(game_data_end, message_packet.length)))[0];
                                        room_data.parse(remaining_packet, game_data);
                                    break;
                                    case 75:
                                        let message = new TextDecoder().decode(new Uint8Array(message_packet));
                                        if (message.includes("blacklisted")) {
                                            console.log(`Socket BLACKLISTED`);
                                            rejoin = false;
                                        } else if (message.includes("temporarily")) {
                                            console.log(`Socket BANNED in ${url}`);
                                            rejoin = false;
                                        } else if (message.includes("cooldown")) {
                                            console.log(`Socket RATE LIMITED in ${url}`);
                                        } else if (message.includes("private")) {
                                            console.log(`Socket tried to join a PRIVATE SERVER in ${url}`);
                                            rejoin = false;
                                        } else if (message.includes("review"))  {
                                            console.log(`Socket is UNDER REVIEW in ${url}`);
                                            rejoin = false;
                                        } else if (message.includes("closed")) {
                                            console.log(`Socket tried to join a CLOSED SERVER in ${url}`);
                                        } else if (message.includes("destroyed")) {
                                            console.log(`Socket tried to join a SIEGE SERVER WITH SANCTUARIES DESTROYED in ${url}`);
                                        } else if (message.includes("timed")) {
                                            console.log(`Socket TIMED OUT in ${url}`);
                                            connection_count += 1;
                                        } else {
                                            console.log(`Socket KICKED in ${url}`);
                                        }
                                    break;
                                }
                                message_packet = [];
                                new_packet_message = false;
                            }
                            let decoded_value = (value ^ xor) & 255;
                            message_packet.push(decoded_value);
                        }
                    },  
                    (index, slice) => {
                        if (u8[index] == 84) {
                            analytics_data = JSON.parse(new TextDecoder().decode(u8.slice(index + 4, index + slice)));
                            user_id = analytics_data.storage.id;
                            let new_message = "This blocks analytics packet data.";
                            if (new_message.length > slice - 4) {
                                new_message = new_message.slice(0, slice - 4);
                            } else {
                                while (new_message.length < slice - 4) new_message += "/";
                            }
                            new_message = new TextEncoder().encode(new_message);
                            u8.set(new_message, index + 4);
                        };
                        return 0;
                    }, 
                    // Created this import to allow for memory modification of the incoming packets
                    // Just deleted since it is unnecessary for headless lb bots
                    () => {}
                ]
            ]
            let g;
            let f;
            let u8;
            let key_press;
            let rejoin = true;
            let client_opened = false;
            let mockup_data;
            let broadcast_data;
            let room_data;
            let message_packet = [];
            let encoded_packet;
            let decoded_packet;
            let new_packet_message = false;
            function send_lb() {
                let text = `**Leaderboard for #${url} - ${room_data.mode}**\n`;
                let lb = Object.values(broadcast_data.leaderboard).sort((a, b) => b.score - a.score);
                for (let index = 0; index < lb.length; index += 1) {
                    let entry = lb[index];
                    let color;
                    switch (entry.color) {
                        case 10:
                            color = "🔵";
                        break;
                        case 11:
                        case 4:
                        case 1:
                            color = "🟢";
                        break;
                        case 12:
                            color = "🔴";
                        break;
                        case 15:
                        case 14:
                            color = "🟣";
                        break;
                        case 13:
                        case 3:
                            color = "🟡";
                        break;
                        case 6:
                            color = "⚪";
                        break;
                        case 2:
                            color = "🟠";
                        break;
                        case 5:
                            color = "🩷";
                        break;
                        default:
                            color = "⚫";
                    };
                    text += `\n${index + 1}. ${color} - ${entry.name == "" ? "Unnamed Tank" : entry.name} - ${mockup_data.mockups[entry.mockup_index]} - ${entry.score}`;
                }
                parentPort.postMessage(text);
            };
            async function create_wasm_instance() {
                f = (await WebAssembly.instantiate(compiled_module, m)).exports;
                g = f.c;
                f.b();
            };
            create_wasm_instance();
    })();
};

let rotator_table = [1, 2, 3, 3, 3, 3, 3, 3, 4, 3];

function i64_as_f32(var2) {
    const result = Number(var2);
    return Math.fround(result);
};

function i64_extend_i32_u(var2) {
    return BigInt(var2 >>> 0);
};

function decode_packet(packet, header = undefined) {
    let packet_read_index = 0;
    let remaining_packet_len = packet.length;
    let decoded_packet = [];
    let offsets = [];

    if (header) {
        packet_read_index = 1;
        remaining_packet_len = packet.length - 1;
        decoded_packet = [header];
        offsets = [0];
    };

    while (remaining_packet_len > 0) {
        let var1, var2, var3, var4, var5, var6, var7, var8;

        var8 = remaining_packet_len;
        var5 = var8 - 1;
        remaining_packet_len = var5;
        offsets.push(packet_read_index);
        var3 = packet_read_index;
        var6 = packet_read_index + 1;
        packet_read_index = var6;

        var2 = packet[var3];
        var7 = (var2 ^ 255);
        var7 = Math.clz32(var7);
        var7 = var7 - 24;
        var7 = var7 & 255;

        switch (rotator_table[var7]) {
            case 1:
                decoded_packet.push(i64_as_f32(BigInt(var2)));
                break;
            case 2:
                var2 |= -64;
                decoded_packet.push(i64_as_f32(BigInt(var2) | -4294967296n));
                break;
            case 3:
                var3 = var7 - 2;
                remaining_packet_len = var5 - var3;
                var8 = var3 + var6;
                packet_read_index = var8;
                var1 = var7 + 25;
                var5 = (var2 << var1) >> var1;
                var2 = var5;
                block7: {
                    if (var3 == 0) break block7;
                    var4 = var3 & 7;
                    if (var4) {
                        var1 = var6;
                        var2 = var5;
                        while (var4) {
                            var2 = (var2 << 8) | packet[var1];
                            var6 = var1 + 1;
                            var1 = var6;
                            var4 = var4 - 1;
                        }
                    }
                }
                if (var5 < 0) {
                    decoded_packet.push(i64_as_f32(i64_extend_i32_u(var2) | -4294967296n));
                } else {
                    decoded_packet.push(i64_as_f32(i64_extend_i32_u(var2)));
                }
                break;
            case 4:
                decoded_packet.push(new Float32Array(packet.slice(packet_read_index, packet_read_index + 4).buffer)[0]);
                packet_read_index += 4;
                remaining_packet_len -= 4;
                break;
        }
    }
    return [decoded_packet, offsets];
};

class broadcast_parser {
    constructor() {
        this.global_minimap = {};
        this.team_minimap = {};
        this.leaderboard = {};
        this.decoder = new TextDecoder();
    }

    parse(packet, offsets, encoded_packet) {
        let offset = 1;
        offset = this.parse_global_minimap_deletions(packet, offset, offsets, encoded_packet);
        offset = this.parse_global_minimap(packet, offset, offsets, encoded_packet);
        offset = this.parse_team_minimap_deletions(packet, offset, offsets, encoded_packet);
        offset = this.parse_team_minimap(packet, offset, offsets, encoded_packet);
        offset = this.parse_leaderboard_deletions(packet, offset, offsets, encoded_packet);
        offset = this.parse_leaderboard(packet, offset, offsets, encoded_packet);
    }

    parse_global_minimap(packet, offset) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            let id = packet[offset++];
            let type = packet[offset++];
            this.global_minimap[id] = {
                type: type,
                x: packet[offset++],
                y: packet[offset++],
                color: packet[offset++],
                size: packet[offset++],
            }
        }
        return offset;
    }

    parse_global_minimap_deletions(packet, offset) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            delete this.global_minimap[packet[offset++]];
        }
        return offset;
    }

    parse_team_minimap(packet, offset) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            this.team_minimap[packet[offset++]] = {
                x: packet[offset++],
                y: packet[offset++],
                color: packet[offset++],
            }
        }
        return offset;
    }

    parse_team_minimap_deletions(packet, offset) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            delete this.team_minimap[packet[offset++]];
        }
        return offset;
    }

    parse_leaderboard(packet, offset, offsets, encoded_packet) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            let id = packet[offset++];
            let entry = {
                score: packet[offset++],
                mockup_index: packet[offset++]
            };
            let name_len = encoded_packet[offsets[offset++]] - 192;
            let name_offset = offsets[offset];
            let bytes = 0;
            let name = "";
            while (bytes !== name_len) {
                let byte = encoded_packet[name_offset];
                let length;
                if (byte < 128) {
                    length = 1; 
                } else if (byte >= 192 && byte <= 223) {
                    length = 2; 
                } else if (byte >= 224 && byte <= 239) {
                    length = 3; 
                } else {
                    length = 4; 
                };
                name += this.decoder.decode(encoded_packet.slice(name_offset, name_offset + length));
                bytes += length;
                name_offset += length;
                offset += length == 1 ? 1 : 2;
            };
            entry.name = name;
            entry.color = packet[offset++];
            entry.bar_color = packet[offset++];
            this.leaderboard[id] = entry;
        }
        return offset;
    }

    parse_leaderboard_deletions(packet, offset) {
        let len = packet[offset++];
        for (let iter = 0; iter < len; iter++) {
            delete this.leaderboard[packet[offset++]];
        }
        return offset;
    }
}

class mockup_parser {
    constructor() {
        this.mockups = {};
        this.decoder = new TextDecoder();
    }

    parse(packet) {
        // For now I just made the mockups get the names, almost no point to getting the other data.
        let offset = 2;
        while (offset < packet.length) {
            if (packet[offset + 1] !== 0 && packet[offset] > 0 && packet[offset] === Math.trunc(packet[offset]) && packet[offset + 1] === Math.trunc(packet[offset + 1])) {
                let id = packet[offset];
                let name_len = packet[offset + 1];
                if (name_len < 0) name_len = 32 + name_len;
                let potential_name_bytes = packet.slice(offset + 2, offset + 2 + name_len);
                if (!potential_name_bytes.some(byte => byte > 255)) {
                    let potential_name = this.decoder.decode(new Uint8Array(potential_name_bytes));
                    let cleaned_name = potential_name.split("/")[0].trim();
                    if (!/[\p{C}\uFFFD]/u.test(cleaned_name) && cleaned_name.length > 0) {
                        this.mockups[id] = cleaned_name;
                    }
                }
            }
            offset++;
        }
    }
}

class room_parser {
    constructor() {
        this.room_dimensions = [];
        this.grid = [];
    }

    parse(packet, game_data) {
        let split_game_data = game_data.split(",");
        for (let entry in split_game_data) {
            let current_data = split_game_data[entry].split("=");
            this[current_data[0]] = current_data[1];
        };
        this.room_dimensions = [packet[0], packet[1], packet[2], packet[3]];
        // Unsure of what either of these values are, usually just 1 and 45
        let idk_1 = packet[4];
        let idk_2 = packet[5];
        let grid_width = packet[6];
        let grid_height = packet[7];
        this.grid = Array.from({ length: grid_height }, () => Array.from({ length: grid_width }, () => 0));
        let grid_data = packet.slice(8, packet.length);
        let iter = 0;
        for (let y = 0; y < grid_height; y++) {
            for (let x = 0; x < grid_width; x++) {
                this.grid[y][x] = grid_data[iter];
                iter++;
            }
        }
    }
}

let compiled_module;
(async () => {
    compiled_module = await WebAssembly.compile(await fs.readFile(path.resolve(__dirname, './bot.wasm')));
    create_bot(server_code, proxy, 0);
})();
