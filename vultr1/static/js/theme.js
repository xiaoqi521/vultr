!function e(t, n, r) {
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (i) return i(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[a] = {exports: {}};
            t[a][0].call(c.exports, function (e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[a].exports
    }

    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o
}({
    1: [function (e, t, n) {
        !function (e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function n(e) {
                var t = "length" in e && e.length, n = Z.type(e);
                return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function r(e, t, n) {
                if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return Z.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (se.test(t)) return Z.filter(t, e, n);
                    t = Z.filter(t, e)
                }
                return Z.grep(e, function (e) {
                    return X.call(t, e) >= 0 !== n
                })
            }

            function o(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            function i(e) {
                var t = de[e] = {};
                return Z.each(e.match(he) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function a() {
                Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = Z.expando + s.uid++
            }

            function u(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n
                    } catch (o) {
                    }
                    ye.set(e, t, n)
                } else n = void 0;
                return n
            }

            function l() {
                return !0
            }

            function c() {
                return !1
            }

            function f() {
                try {
                    return Q.activeElement
                } catch (e) {
                }
            }

            function p(e, t) {
                return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function h(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function d(e) {
                var t = Fe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function g(e, t) {
                for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
            }

            function m(e, t) {
                var n, r, o, i, a, s, u, l;
                if (1 === t.nodeType) {
                    if (ve.hasData(e) && (i = ve.access(e), a = ve.set(t, i), l = i.events)) {
                        delete a.handle, a.events = {};
                        for (o in l) for (n = 0, r = l[o].length; r > n; n++) Z.event.add(t, o, l[o][n])
                    }
                    ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
                }
            }

            function v(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
            }

            function y(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function b(t, n) {
                var r, o = Z(n.createElement(t)).appendTo(n.body),
                    i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Z.css(o[0], "display");
                return o.detach(), i
            }

            function x(e) {
                var t = Q, n = $e[e];
                return n || (n = b(e, t), "none" !== n && n || (Ie = (Ie || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ie[0].contentDocument, t.write(), t.close(), n = b(e, t), Ie.detach()), $e[e] = n), n
            }

            function w(e, t, n) {
                var r, o, i, a, s = e.style;
                return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), We.test(a) && _e.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
            }

            function C(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function k(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ye.length; o--;) if (t = Ye[o] + n, t in e) return t;
                return r
            }

            function T(e, t, n) {
                var r = ze.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function j(e, t, n, r, o) {
                for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += Z.css(e, n + Ce[i], !0, o)), r ? ("content" === n && (a -= Z.css(e, "padding" + Ce[i], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + Ce[i] + "Width", !0, o))) : (a += Z.css(e, "padding" + Ce[i], !0, o), "padding" !== n && (a += Z.css(e, "border" + Ce[i] + "Width", !0, o)));
                return a
            }

            function N(e, t, n) {
                var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = Be(e),
                    a = "border-box" === Z.css(e, "boxSizing", !1, i);
                if (0 >= o || null == o) {
                    if (o = w(e, t, i), (0 > o || null == o) && (o = e.style[t]), We.test(o)) return o;
                    r = a && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + j(e, t, n || (a ? "border" : "content"), r, i) + "px"
            }

            function E(e, t) {
                for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ve.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && ke(r) && (i[a] = ve.access(r, "olddisplay", x(r.nodeName)))) : (o = ke(r), "none" === n && o || ve.set(r, "olddisplay", o ? n : Z.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
                return e
            }

            function S(e, t, n, r, o) {
                return new S.prototype.init(e, t, n, r, o)
            }

            function A() {
                return setTimeout(function () {
                    Ge = void 0
                }), Ge = Z.now()
            }

            function q(e, t) {
                var n, r = 0, o = {height: e};
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ce[r], o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function D(e, t, n) {
                for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++) if (r = o[i].call(n, t, e)) return r
            }

            function O(e, t, n) {
                var r, o, i, a, s, u, l, c, f = this, p = {}, h = e.style, d = e.nodeType && ke(e),
                    g = ve.get(e, "fxshow");
                n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || u()
                }), s.unqueued++, f.always(function () {
                    f.always(function () {
                        s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || x(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }));
                for (r in t) if (o = t[r], Je.exec(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (d ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r]) continue;
                        d = !0
                    }
                    p[r] = g && g[r] || Z.style(e, r)
                } else l = void 0;
                if (Z.isEmptyObject(p)) "inline" === ("none" === l ? x(e.nodeName) : l) && (h.display = l); else {
                    g ? "hidden" in g && (d = g.hidden) : g = ve.access(e, "fxshow", {}), i && (g.hidden = !d), d ? Z(e).show() : f.done(function () {
                        Z(e).hide()
                    }), f.done(function () {
                        var t;
                        ve.remove(e, "fxshow");
                        for (t in p) Z.style(e, t, p[t])
                    });
                    for (r in p) a = D(d ? g[r] : 0, r, f), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function L(e, t) {
                var n, r, o, i, a;
                for (n in e) if (r = Z.camelCase(n), o = t[r], i = e[n], Z.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                    i = a.expand(i), delete e[r];
                    for (n in i) n in e || (e[n] = i[n], t[n] = o)
                } else t[r] = o
            }

            function H(e, t, n) {
                var r, o, i = 0, a = tt.length, s = Z.Deferred().always(function () {
                    delete u.elem
                }), u = function () {
                    if (o) return !1;
                    for (var t = Ge || A(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(i);
                    return s.notifyWith(e, [l, i, n]), 1 > i && u ? n : (s.resolveWith(e, [l]), !1)
                }, l = s.promise({
                    elem: e,
                    props: Z.extend({}, t),
                    opts: Z.extend(!0, {specialEasing: {}}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0, r = t ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > n; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }), c = l.props;
                for (L(c, l.opts.specialEasing); a > i; i++) if (r = tt[i].call(l, e, c, l.opts)) return r;
                return Z.map(c, D, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function P(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0, i = t.toLowerCase().match(he) || [];
                    if (Z.isFunction(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function F(e, t, n, r) {
                function o(s) {
                    var u;
                    return i[s] = !0, Z.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
                    }), u
                }

                var i = {}, a = e === bt;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function M(e, t) {
                var n, r, o = Z.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && Z.extend(!0, e, r), e
            }

            function R(e, t, n) {
                for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) for (o in s) if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break
                }
                if (u[0] in n) i = u[0]; else {
                    for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                            i = o;
                            break
                        }
                        a || (a = o)
                    }
                    i = i || a
                }
                return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
            }

            function I(e, t, n, r) {
                var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (i = c.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
                    if (a = l[u + " " + i] || l["* " + i], !a) for (o in l) if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
                    if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                        t = a(t)
                    } catch (f) {
                        return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + i}
                    }
                }
                return {state: "success", data: t}
            }

            function $(e, t, n, r) {
                var o;
                if (Z.isArray(t)) Z.each(t, function (t, o) {
                    n || Tt.test(e) ? r(e, o) : $(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
                }); else if (n || "object" !== Z.type(t)) r(e, t); else for (o in t) $(e + "[" + o + "]", t[o], n, r)
            }

            function _(e) {
                return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var W = [], B = W.slice, U = W.concat, z = W.push, X = W.indexOf, K = {}, V = K.toString,
                Y = K.hasOwnProperty, G = {}, Q = e.document, J = "2.1.4", Z = function (e, t) {
                    return new Z.fn.init(e, t)
                }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, re = function (e, t) {
                    return t.toUpperCase()
                };
            Z.fn = Z.prototype = {
                jquery: J, constructor: Z, selector: "", length: 0, toArray: function () {
                    return B.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
                }, pushStack: function (e) {
                    var t = Z.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e, t) {
                    return Z.each(this, e, t)
                }, map: function (e) {
                    return this.pushStack(Z.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(B.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: z, sort: W.sort, splice: W.splice
            }, Z.extend = Z.fn.extend = function () {
                var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (o = Z.isArray(r))) ? (o ? (o = !1, i = n && Z.isArray(n) ? n : []) : i = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }, Z.extend({
                expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isFunction: function (e) {
                    return "function" === Z.type(e)
                }, isArray: Array.isArray, isWindow: function (e) {
                    return null != e && e === e.window
                }, isNumeric: function (e) {
                    return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
                }, isPlainObject: function (e) {
                    return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[V.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    var t, n = eval;
                    e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                }, camelCase: function (e) {
                    return e.replace(te, "ms-").replace(ne, re)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t, r) {
                    var o, i = 0, a = e.length, s = n(e);
                    if (r) {
                        if (s) for (; a > i && (o = t.apply(e[i], r), o !== !1); i++) ; else for (i in e) if (o = t.apply(e[i], r), o === !1) break
                    } else if (s) for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++) ; else for (i in e) if (o = t.call(e[i], i, e[i]), o === !1) break;
                    return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(ee, "")
                }, makeArray: function (e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : X.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                    return e.length = o, e
                }, grep: function (e, t, n) {
                    for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
                    return o
                }, map: function (e, t, r) {
                    var o, i = 0, a = e.length, s = n(e), u = [];
                    if (s) for (; a > i; i++) o = t(e[i], i, r), null != o && u.push(o); else for (i in e) o = t(e[i], i, r), null != o && u.push(o);
                    return U.apply([], u)
                }, guid: 1, proxy: function (e, t) {
                    var n, r, o;
                    return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = B.call(arguments, 2), o = function () {
                        return e.apply(t || this, r.concat(B.call(arguments)))
                    }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
                }, now: Date.now, support: G
            }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                K["[object " + t + "]"] = t.toLowerCase()
            });
            var oe = function (e) {
                function t(e, t, n, r) {
                    var o, i, a, s, u, l, f, h, d, g;
                    if ((t ? t.ownerDocument || t : $) !== O && D(t), t = t || O, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && H) {
                        if (11 !== s && (o = ye.exec(e))) if (a = o[1]) {
                            if (9 === s) {
                                if (i = t.getElementById(a), !i || !i.parentNode) return n;
                                if (i.id === a) return n.push(i), n
                            } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && R(t, i) && i.id === a) return n.push(i), n
                        } else {
                            if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && w.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (w.qsa && (!P || !P.test(e))) {
                            if (h = f = I, d = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (l = j(e), (f = t.getAttribute("id")) ? h = f.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + p(l[u]);
                                d = be.test(e) && c(t.parentNode) || t, g = l.join(",")
                            }
                            if (g) try {
                                return J.apply(n, d.querySelectorAll(g)), n
                            } catch (m) {
                            } finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(ue, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[I] = !0, e
                }

                function o(e) {
                    var t = O.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function i(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {
                }

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir, o = n && "parentNode" === r, i = W++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];) if (1 === t.nodeType || o) return e(t, n, i)
                    } : function (t, n, a) {
                        var s, u, l = [_, i];
                        if (a) {
                            for (; t = t[r];) if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else for (; t = t[r];) if (1 === t.nodeType || o) {
                            if (u = t[I] || (t[I] = {}), (s = u[r]) && s[0] === _ && s[1] === i) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                        }
                    }
                }

                function d(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                    return r
                }

                function m(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), l && t.push(s));
                    return a
                }

                function v(e, t, n, o, i, a) {
                    return o && !o[I] && (o = v(o)), i && !i[I] && (i = v(i, a)), r(function (r, a, s, u) {
                        var l, c, f, p = [], h = [], d = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? v : m(v, p, e, s, u), b = n ? i || (r ? e : d || o) ? [] : a : y;
                        if (n && n(y, b, s, u), o) for (l = m(b, h), o(l, [], s, u), c = l.length; c--;) (f = l[c]) && (b[h[c]] = !(y[h[c]] = f));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = b.length; c--;) (f = b[c]) && l.push(y[c] = f);
                                    i(null, b = [], l, u)
                                }
                                for (c = b.length; c--;) (f = b[c]) && (l = i ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else b = m(b === a ? b.splice(d, b.length) : b), i ? i(null, a, b, u) : J.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, r, o = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, u = h(function (e) {
                        return e === t
                    }, a, !0), l = h(function (e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function (e, n, r) {
                        var o = !i && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                        return t = null, o
                    }]; o > s; s++) if (n = C.relative[e[s].type]) c = [h(d(c), n)]; else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                            for (r = ++s; o > r && !C.relative[e[r].type]; r++) ;
                            return v(s > 1 && d(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && p(e))
                        }
                        c.push(n)
                    }
                    return d(c)
                }

                function b(e, n) {
                    var o = n.length > 0, i = e.length > 0, a = function (r, a, s, u, l) {
                        var c, f, p, h = 0, d = "0", g = r && [], v = [], y = S, b = r || i && C.find.TAG("*", l),
                            x = _ += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (l && (S = a !== O && a); d !== w && null != (c = b[d]); d++) {
                            if (i && c) {
                                for (f = 0; p = e[f++];) if (p(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                                l && (_ = x)
                            }
                            o && ((c = !p && c) && h--, r && g.push(c))
                        }
                        if (h += d, o && d !== h) {
                            for (f = 0; p = n[f++];) p(g, v, a, s);
                            if (r) {
                                if (h > 0) for (; d--;) g[d] || v[d] || (v[d] = G.call(u));
                                v = m(v)
                            }
                            J.apply(u, v), l && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (_ = x, S = y), g
                    };
                    return o ? r(a) : a
                }

                var x, w, C, k, T, j, N, E, S, A, q, D, O, L, H, P, F, M, R, I = "sizzle" + 1 * new Date,
                    $ = e.document, _ = 0, W = 0, B = n(), U = n(), z = n(), X = function (e, t) {
                        return e === t && (q = !0), 0
                    }, K = 1 << 31, V = {}.hasOwnProperty, Y = [], G = Y.pop, Q = Y.push, J = Y.push, Z = Y.slice,
                    ee = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"),
                    ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                    ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae),
                    he = new RegExp("^" + oe + "$"), de = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ce = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, ke = function () {
                        D()
                    };
                try {
                    J.apply(Y = Z.call($.childNodes), $.childNodes), Y[$.childNodes.length].nodeType
                } catch (Te) {
                    J = {
                        apply: Y.length ? function (e, t) {
                            Q.apply(e, Z.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, T = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, D = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : $;
                    return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, L = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), H = !T(r), w.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = o(function (e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = o(function (e) {
                        return L.appendChild(e).id = I, !r.getElementsByName || !r.getElementsByName(I).length
                    }), w.getById ? (C.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(we, Ce);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(we, Ce);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], o = 0, i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                        return H ? t.getElementsByClassName(e) : void 0
                    }, F = [], P = [], (w.qsa = ve.test(r.querySelectorAll)) && (o(function (e) {
                        L.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || P.push(".#.+[+~]")
                    }), o(function (e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (w.matchesSelector = ve.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {
                        w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), F.push("!=", ae)
                    }), P = P.length && new RegExp(P.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(L.compareDocumentPosition), R = t || ve.test(L.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, X = t ? function (e, t) {
                        if (e === t) return q = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && R($, e) ? -1 : t === r || t.ownerDocument === $ && R($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return q = !0, 0;
                        var n, o = 0, i = e.parentNode, s = t.parentNode, u = [e], l = [t];
                        if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                        if (i === s) return a(e, t);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; u[o] === l[o];) o++;
                        return o ? a(u[o], l[o]) : u[o] === $ ? -1 : l[o] === $ ? 1 : 0
                    }, r) : O
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== O && D(e), n = n.replace(fe, "='$1']"), w.matchesSelector && H && (!F || !F.test(n)) && (!P || !P.test(n))) try {
                        var r = M.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (o) {
                    }
                    return t(n, O, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== O && D(e), R(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== O && D(e);
                    var n = C.attrHandle[t.toLowerCase()],
                        r = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                    return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, o = 0;
                    if (q = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(X), q) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return A = null, e
                }, k = t.getText = function (e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else for (; t = e[r++];) n += k(t);
                    return n
                }, C = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: de,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(we, Ce).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, n, r) {
                            return function (o) {
                                var i = t.attr(o, e);
                                return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        }, CHILD: function (e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, p, h, d, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(), y = !u && !s;
                                if (m) {
                                    if (i) {
                                        for (; g;) {
                                            for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            d = g = "only" === e && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (c = m[I] || (m[I] = {}), l = c[e] || [], h = l[0] === _ && l[1], p = l[0] === _ && l[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();) if (1 === f.nodeType && ++p && f === t) {
                                            c[e] = [_, h, p];
                                            break
                                        }
                                    } else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === _) p = l[1]; else for (; (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[I] || (f[I] = {}))[e] = [_, p]), f !== t));) ;
                                    return p -= o, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var o,
                                i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[I] ? i(n) : i.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, o)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], o = N(e.replace(ue, "$1"));
                            return o[I] ? r(function (e, t, n, r) {
                                for (var i, a = o(e, null, r, []), s = e.length; s--;) (i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function (e, r, i) {
                                return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                            }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(we, Ce), function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(), function (t) {
                                var n;
                                do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === L
                        }, focus: function (e) {
                            return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !C.pseudos.empty(e)
                        }, header: function (e) {
                            return me.test(e.nodeName)
                        }, input: function (e) {
                            return ge.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (e, t) {
                            return [t - 1]
                        }), eq: l(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }), even: l(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }), odd: l(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }), lt: l(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }), gt: l(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[x] = s(x);
                for (x in{submit: !0, reset: !0}) C.pseudos[x] = u(x);
                return f.prototype = C.filters = C.pseudos, C.setFilters = new f, j = t.tokenize = function (e, n) {
                    var r, o, i, a, s, u, l, c = U[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = C.preFilter; s;) {
                        (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                            value: r,
                            type: o[0].replace(ue, " ")
                        }), s = s.slice(r.length));
                        for (a in C.filter) !(o = de[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(), i.push({
                            value: r,
                            type: a,
                            matches: o
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
                }, N = t.compile = function (e, t) {
                    var n, r = [], o = [], i = z[e + " "];
                    if (!i) {
                        for (t || (t = j(e)), n = t.length; n--;) i = y(t[n]), i[I] ? r.push(i) : o.push(i);
                        i = z(e, b(o, r)), i.selector = e
                    }
                    return i
                }, E = t.select = function (e, t, n, r) {
                    var o, i, a, s, u, l = "function" == typeof e && e, f = !r && j(e = l.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && H && C.relative[i[1].type]) {
                            if (t = (C.find.ID(a.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (o = de.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !C.relative[s = a.type]);) if ((u = C.find[s]) && (r = u(a.matches[0].replace(we, Ce), be.test(i[0].type) && c(t.parentNode) || t))) {
                            if (i.splice(o, 1), e = r.length && p(i), !e) return J.apply(n, r), n;
                            break
                        }
                    }
                    return (l || N(e, f))(r, t, !H, n, be.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = I.split("").sort(X).join("") === I, w.detectDuplicates = !!q, D(), w.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(O.createElement("div"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || i("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function (e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos,
                Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
            var ie = Z.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
            Z.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, Z.fn.extend({
                find: function (e) {
                    var t, n = this.length, r = [], o = this;
                    if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                        for (t = 0; n > t; t++) if (Z.contains(o[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) Z.find(e, o[t], r);
                    return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                }, filter: function (e) {
                    return this.pushStack(r(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(r(this, e || [], !0))
                }, is: function (e) {
                    return !!r(this, "string" == typeof e && ie.test(e) ? Z(e) : e || [], !1).length
                }
            });
            var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
            };
            ce.prototype = Z.fn, ue = Z(Q);
            var fe = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
            Z.extend({
                dir: function (e, t, n) {
                    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                        if (o && Z(e).is(n)) break;
                        r.push(e)
                    }
                    return r
                }, sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), Z.fn.extend({
                has: function (e) {
                    var t = Z(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
                    })
                }, closest: function (e, t) {
                    for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
                    return this.pushStack(i.length > 1 ? Z.unique(i) : i)
                }, index: function (e) {
                    return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), Z.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return Z.dir(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return Z.dir(e, "parentNode", n)
                }, next: function (e) {
                    return o(e, "nextSibling")
                }, prev: function (e) {
                    return o(e, "previousSibling")
                }, nextAll: function (e) {
                    return Z.dir(e, "nextSibling")
                }, prevAll: function (e) {
                    return Z.dir(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return Z.dir(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return Z.dir(e, "previousSibling", n)
                }, siblings: function (e) {
                    return Z.sibling((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return Z.sibling(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || Z.merge([], e.childNodes)
                }
            }, function (e, t) {
                Z.fn[e] = function (n, r) {
                    var o = Z.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Z.filter(r, o)), this.length > 1 && (pe[e] || Z.unique(o), fe.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var he = /\S+/g, de = {};
            Z.Callbacks = function (e) {
                e = "string" == typeof e ? de[e] || i(e) : Z.extend({}, e);
                var t, n, r, o, a, s, u = [], l = !e.once && [], c = function (i) {
                    for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; s++) if (u[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                    r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
                }, f = {
                    add: function () {
                        if (u) {
                            var n = u.length;
                            !function i(t) {
                                Z.each(t, function (t, n) {
                                    var r = Z.type(n);
                                    "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), r ? a = u.length : t && (o = n, c(t))
                        }
                        return this
                    }, remove: function () {
                        return u && Z.each(arguments, function (e, t) {
                            for (var n; (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                        }), this
                    }, has: function (e) {
                        return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                    }, empty: function () {
                        return u = [], a = 0, this
                    }, disable: function () {
                        return u = l = t = void 0, this
                    }, disabled: function () {
                        return !u
                    }, lock: function () {
                        return l = void 0, t || f.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (e, t) {
                        return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                    }, fire: function () {
                        return f.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return f
            }, Z.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
                        n = "pending", r = {
                            state: function () {
                                return n
                            }, always: function () {
                                return o.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return Z.Deferred(function (n) {
                                    Z.each(t, function (t, i) {
                                        var a = Z.isFunction(e[t]) && e[t];
                                        o[i[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? Z.extend(e, r) : r
                            }
                        }, o = {};
                    return r.pipe = r.then, Z.each(t, function (e, i) {
                        var a = i[2], s = i[3];
                        r[i[1]] = a.add, s && a.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
                            return o[i[0] + "With"](this === o ? r : this, arguments), this
                        }, o[i[0] + "With"] = a.fireWith
                    }), r.promise(o), e && e.call(o, o), o
                }, when: function (e) {
                    var t, n, r, o = 0, i = B.call(arguments), a = i.length,
                        s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0, u = 1 === s ? e : Z.Deferred(),
                        l = function (e, n, r) {
                            return function (o) {
                                n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                            }
                        };
                    if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && Z.isFunction(i[o].promise) ? i[o].promise().done(l(o, r, i)).fail(u.reject).progress(l(o, n, t)) : --s;
                    return s || u.resolveWith(r, i), u.promise()
                }
            });
            var ge;
            Z.fn.ready = function (e) {
                return Z.ready.promise().done(e), this
            }, Z.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? Z.readyWait++ : Z.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
                }
            }), Z.ready.promise = function (t) {
                return ge || (ge = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
            }, Z.ready.promise();
            var me = Z.access = function (e, t, n, r, o, i, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === Z.type(n)) {
                    o = !0;
                    for (s in n) Z.access(e, t, s, n[s], !0, i, a)
                } else if (void 0 !== r && (o = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(Z(e), n)
                    })), t)) for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
            };
            Z.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
                key: function (e) {
                    if (!s.accepts(e)) return 0;
                    var t = {}, n = e[this.expando];
                    if (!n) {
                        n = s.uid++;
                        try {
                            t[this.expando] = {value: n}, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, Z.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (e, t, n) {
                    var r, o = this.key(e), i = this.cache[o];
                    if ("string" == typeof t) i[t] = n; else if (Z.isEmptyObject(i)) Z.extend(this.cache[o], t); else for (r in t) i[r] = t[r];
                    return i
                }, get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                }, access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r, o, i = this.key(e), a = this.cache[i];
                    if (void 0 === t) this.cache[i] = {}; else {
                        Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(he) || [])), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                }, hasData: function (e) {
                    return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
                }, discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var ve = new s, ye = new s, be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xe = /([A-Z])/g;
            Z.extend({
                hasData: function (e) {
                    return ye.hasData(e) || ve.hasData(e)
                }, data: function (e, t, n) {
                    return ye.access(e, t, n)
                }, removeData: function (e, t) {
                    ye.remove(e, t)
                }, _data: function (e, t, n) {
                    return ve.access(e, t, n)
                }, _removeData: function (e, t) {
                    ve.remove(e, t)
                }
            }), Z.fn.extend({
                data: function (e, t) {
                    var n, r, o, i = this[0], a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = ye.get(i), 1 === i.nodeType && !ve.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(i, r, o[r])));
                            ve.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function () {
                        ye.set(this, e)
                    }) : me(this, function (t) {
                        var n, r = Z.camelCase(e);
                        if (i && void 0 === t) {
                            if (n = ye.get(i, e), void 0 !== n) return n;
                            if (n = ye.get(i, r), void 0 !== n) return n;
                            if (n = u(i, r, void 0), void 0 !== n) return n
                        } else this.each(function () {
                            var n = ye.get(this, r);
                            ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        ye.remove(this, e)
                    })
                }
            }), Z.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = Z.queue(e, t), r = n.length, o = n.shift(), i = Z._queueHooks(e, t), a = function () {
                        Z.dequeue(e, t)
                    };
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ve.get(e, n) || ve.access(e, n, {
                        empty: Z.Callbacks("once memory").add(function () {
                            ve.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), Z.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = Z.queue(this, e, t);
                        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        Z.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, o = Z.Deferred(), i = this, a = this.length, s = function () {
                        --r || o.resolveWith(i, [i])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            });
            var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"],
                ke = function (e, t) {
                    return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
                }, Te = /^(?:checkbox|radio)$/i;
            !function () {
                var e = Q.createDocumentFragment(), t = e.appendChild(Q.createElement("div")),
                    n = Q.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var je = "undefined";
            G.focusinBubbles = "onfocusin" in e;
            var Ne = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, Se = /^(?:focusinfocus|focusoutblur)$/,
                Ae = /^([^.]*)(?:\.(.+)|)$/;
            Z.event = {
                global: {},
                add: function (e, t, n, r, o) {
                    var i, a, s, u, l, c, f, p, h, d, g, m = ve.get(e);
                    if (m) for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                        return typeof Z !== je && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(he) || [""], l = t.length; l--;) s = Ae.exec(t[l]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h && (f = Z.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = Z.event.special[h] || {}, c = Z.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Z.expr.match.needsContext.test(o),
                        namespace: d.join(".")
                    }, i), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, d, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[h] = !0)
                },
                remove: function (e, t, n, r, o) {
                    var i, a, s, u, l, c, f, p, h, d, g, m = ve.hasData(e) && ve.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(he) || [""], l = t.length; l--;) if (s = Ae.exec(t[l]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h) {
                            for (f = Z.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || Z.removeEvent(e, h, m.handle), delete u[h])
                        } else for (h in u) Z.event.remove(e, h + t[l], n, r, !0);
                        Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
                    }
                },
                trigger: function (t, n, r, o) {
                    var i, a, s, u, l, c, f, p = [r || Q], h = Y.call(t, "type") ? t.type : t,
                        d = Y.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Se.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[h] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!o && !f.noBubble && !Z.isWindow(r)) {
                            for (u = f.delegateType || h, Se.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || Q) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0; (a = p[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : f.bindType || h, c = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                        return t.type = h, o || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[h]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = h, r[h](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
                    }
                },
                dispatch: function (e) {
                    e = Z.event.fix(e);
                    var t, n, r, o, i, a = [], s = B.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [],
                        l = Z.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (a = Z.event.handlers.call(this, e, u), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Z.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, o, i, a = [], s = t.delegateCount, u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Z(o, this).index(u) >= 0 : Z.find(o, this, null, [u]).length), r[o] && r.push(i);
                        r.length && a.push({elem: u, handlers: r})
                    }
                    return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, o, i = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[Z.expando]) return e;
                    var t, n, r, o = e.type, i = e, a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = Ee.test(o) ? this.mouseHooks : Ne.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                    return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== f() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === f() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return Z.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var o = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                    r ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
                }
            }, Z.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, Z.Event = function (e, t) {
                return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
            }, Z.Event.prototype = {
                isDefaultPrevented: c,
                isPropagationStopped: c,
                isImmediatePropagationStopped: c,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Z.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                Z.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, r = this, o = e.relatedTarget, i = e.handleObj;
                        return (!o || o !== r && !Z.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), G.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = function (e) {
                    Z.event.simulate(t, e.target, Z.event.fix(e), !0)
                };
                Z.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this, o = ve.access(r, t);
                        o || r.addEventListener(e, n, !0), ve.access(r, t, (o || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this, o = ve.access(r, t) - 1;
                        o ? ve.access(r, t, o) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
                    }
                }
            }), Z.fn.extend({
                on: function (e, t, n, r, o) {
                    var i, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (a in e) this.on(a, t, n, e[a], o);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c; else if (!r) return this;
                    return 1 === o && (i = r, r = function (e) {
                        return Z().off(e), i.apply(this, arguments)
                    }, r.guid = i.guid || (i.guid = Z.guid++)), this.each(function () {
                        Z.event.add(this, e, r, n, t)
                    })
                }, one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                        Z.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        Z.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? Z.event.trigger(e, t, n, !0) : void 0
                }
            });
            var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, De = /<([\w:]+)/,
                Oe = /<|&#?\w+;/, Le = /<(?:script|style|link)/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Pe = /^$|\/(?:java|ecma)script/i, Fe = /^true\/(.*)/, Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Re = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
                clone: function (e, t, n) {
                    var r, o, i, a, s = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
                    if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (a = v(s), i = v(e), r = 0, o = i.length; o > r; r++) y(i[r], a[r]);
                    if (t) if (n) for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++) m(i[r], a[r]); else m(e, s);
                    return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
                }, buildFragment: function (e, t, n, r) {
                    for (var o, i, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, h = e.length; h > p; p++) if (o = e[p], o || 0 === o) if ("object" === Z.type(o)) Z.merge(f, o.nodeType ? [o] : o); else if (Oe.test(o)) {
                        for (i = i || c.appendChild(t.createElement("div")), a = (De.exec(o) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, i.innerHTML = s[1] + o.replace(qe, "<$1></$2.png>") + s[2], l = s[0]; l--;) i = i.lastChild;
                        Z.merge(f, i.childNodes), i = c.firstChild, i.textContent = ""
                    } else f.push(t.createTextNode(o));
                    for (c.textContent = "", p = 0; o = f[p++];) if ((!r || -1 === Z.inArray(o, r)) && (u = Z.contains(o.ownerDocument, o), i = v(c.appendChild(o), "script"), u && g(i), n)) for (l = 0; o = i[l++];) Pe.test(o.type || "") && n.push(o);
                    return c
                }, cleanData: function (e) {
                    for (var t, n, r, o, i = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                        if (Z.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                            if (t.events) for (r in t.events) i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                            ve.cache[o] && delete ve.cache[o]
                        }
                        delete ye.cache[n[ye.expando]]
                    }
                }
            }), Z.fn.extend({
                text: function (e) {
                    return me(this, function (e) {
                        return void 0 === e ? Z.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, remove: function (e, t) {
                    for (var n, r = e ? Z.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return Z.clone(this, e, t)
                    })
                }, html: function (e) {
                    return me(this, function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Le.test(e) && !Re[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(qe, "<$1></$2.png>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (o) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                }, detach: function (e) {
                    return this.remove(e, !0)
                }, domManip: function (e, t) {
                    e = U.apply([], e);
                    var n, r, o, i, a, s, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
                    if (g || l > 1 && "string" == typeof p && !G.checkClone && He.test(p)) return this.each(function (n) {
                        var r = c.eq(n);
                        g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (o = Z.map(v(n, "script"), h), i = o.length; l > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), i && Z.merge(o, v(a, "script"))), t.call(this[u], a, u);
                        if (i) for (s = o[o.length - 1].ownerDocument, Z.map(o, d), u = 0; i > u; u++) a = o[u], Pe.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Me, "")))
                    }
                    return this
                }
            }), Z.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                Z.fn[e] = function (e) {
                    for (var n, r = [], o = Z(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Z(o[a])[t](n), z.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ie, $e = {}, _e = /^margin/, We = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), Be = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
            !function () {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
                    var t = e.getComputedStyle(a, null);
                    n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
                }

                var n, r, o = Q.documentElement, i = Q.createElement("div"), a = Q.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Z.extend(G, {
                    pixelPosition: function () {
                        return t(), n
                    }, boxSizingReliable: function () {
                        return null == r && t(), r
                    }, reliableMarginRight: function () {
                        var t, n = a.appendChild(Q.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
                    }
                }))
            }(), Z.swap = function (e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t) e.style[i] = a[i];
                return o
            };
            var Ue = /^(none|table(?!-c[ea]).+)/, ze = new RegExp("^(" + we + ")(.*)$", "i"),
                Xe = new RegExp("^([+-])=(" + we + ")", "i"),
                Ke = {position: "absolute", visibility: "hidden", display: "block"},
                Ve = {letterSpacing: "0", fontWeight: "400"}, Ye = ["Webkit", "O", "Moz", "ms"];
            Z.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = w(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = Z.camelCase(t), u = e.style;
                        return t = Z.cssProps[s] || (Z.cssProps[s] = k(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Xe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var o, i, a, s = Z.camelCase(t);
                    return t = Z.cssProps[s] || (Z.cssProps[s] = k(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = w(e, t, r)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Z.isNumeric(i) ? i || 0 : o) : o
                }
            }), Z.each(["height", "width"], function (e, t) {
                Z.cssHooks[t] = {
                    get: function (e, n, r) {
                        return n ? Ue.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ke, function () {
                            return N(e, t, r)
                        }) : N(e, t, r) : void 0
                    }, set: function (e, n, r) {
                        var o = r && Be(e);
                        return T(e, n, r ? j(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), Z.cssHooks.marginRight = C(G.reliableMarginRight, function (e, t) {
                return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
            }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                Z.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ce[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, _e.test(e) || (Z.cssHooks[e + t].set = T)
            }), Z.fn.extend({
                css: function (e, t) {
                    return me(this, function (e, t, n) {
                        var r, o, i = {}, a = 0;
                        if (Z.isArray(t)) {
                            for (r = Be(e), o = t.length; o > a; a++) i[t[a]] = Z.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return E(this, !0)
                }, hide: function () {
                    return E(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        ke(this) ? Z(this).show() : Z(this).hide()
                    })
                }
            }), Z.Tween = S, S.prototype = {
                constructor: S, init: function (e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Z.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = S.propHooks[this.prop];
                    return e && e.get ? e.get(this) : S.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = S.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
                }
            }, S.prototype.init.prototype = S.prototype, S.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    }, set: function (e) {
                        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, Z.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, Z.fx = S.prototype.init, Z.fx.step = {};
            var Ge, Qe, Je = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
                et = /queueHooks$/, tt = [O], nt = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t), r = n.cur(), o = Ze.exec(t),
                            i = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
                            a = (Z.cssNumber[e] || "px" !== i && +r) && Ze.exec(Z.css(n.elem, e)), s = 1, u = 20;
                        if (a && a[3] !== i) {
                            i = i || a[3], o = o || [], a = +r || 1;
                            do s = s || ".5", a /= s, Z.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                        }
                        return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                    }]
                };
            Z.Animation = Z.extend(H, {
                tweener: function (e, t) {
                    Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                }, prefilter: function (e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), Z.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? Z.extend({}, e) : {
                    complete: n || !n && t || Z.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Z.isFunction(t) && t
                };
                return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
                }, r
            }, Z.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(ke).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (e, t, n, r) {
                    var o = Z.isEmptyObject(e), i = Z.speed(t, n, r), a = function () {
                        var t = H(this, Z.extend({}, e), i);
                        (o || ve.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, o = null != e && e + "queueHooks", i = Z.timers, a = ve.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && et.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        (t || !n) && Z.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ve.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = Z.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function (e, t) {
                var n = Z.fn[t];
                Z.fn[t] = function (e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, o)
                }
            }), Z.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                Z.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), Z.timers = [], Z.fx.tick = function () {
                var e, t = 0, n = Z.timers;
                for (Ge = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || Z.fx.stop(), Ge = void 0
            }, Z.fx.timer = function (e) {
                Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function () {
                Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function () {
                clearInterval(Qe), Qe = null
            }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
                return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, function () {
                var e = Q.createElement("input"), t = Q.createElement("select"),
                    n = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
            }();
            var rt, ot, it = Z.expr.attrHandle;
            Z.fn.extend({
                attr: function (e, t) {
                    return me(this, Z.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        Z.removeAttr(this, e)
                    })
                }
            }), Z.extend({
                attr: function (e, t, n) {
                    var r, o, i = e.nodeType;
                    if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === je ? Z.prop(e, t, n) : (1 === i && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
                }, removeAttr: function (e, t) {
                    var n, r, o = 0, i = t && t.match(he);
                    if (i && 1 === e.nodeType) for (; n = i[o++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), ot = {
                set: function (e, t, n) {
                    return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = it[t] || Z.find.attr;
                it[t] = function (e, t, r) {
                    var o, i;
                    return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = i), o
                }
            });
            var at = /^(?:input|select|textarea|button)$/i;
            Z.fn.extend({
                prop: function (e, t) {
                    return me(this, Z.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[Z.propFix[e] || e]
                    })
                }
            }), Z.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                    var r, o, i, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !Z.isXMLDoc(e), i && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), G.optSelected || (Z.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                Z.propFix[this.toLowerCase()] = this
            });
            var st = /[\t\r\n\f]/g;
            Z.fn.extend({
                addClass: function (e) {
                    var t, n, r, o, i, a, s = "string" == typeof e && e, u = 0, l = this.length;
                    if (Z.isFunction(e)) return this.each(function (t) {
                        Z(this).addClass(e.call(this, t, this.className))
                    });
                    if (s) for (t = (e || "").match(he) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = Z.trim(r), n.className !== a && (n.className = a)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0,
                        l = this.length;
                    if (Z.isFunction(e)) return this.each(function (t) {
                        Z(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s) for (t = (e || "").match(he) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (i = 0; o = t[i++];) for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function (n) {
                        Z(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" === n) for (var t, r = 0, o = Z(this), i = e.match(he) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === je || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                    })
                }, hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var ut = /\r/g;
            Z.fn.extend({
                val: function (e) {
                    var t, n, r, o = this[0];
                    {
                        if (arguments.length) return r = Z.isFunction(e), this.each(function (n) {
                            var o;
                            1 === this.nodeType && (o = r ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function (e) {
                                return null == e ? "" : e + ""
                            })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
                    }
                }
            }), Z.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = Z.find.attr(e, "value");
                            return null != t ? t : Z.trim(Z.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++) if (n = r[u], (n.selected || u === o) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(), i) return t;
                                a.push(t)
                            }
                            return a
                        }, set: function (e, t) {
                            for (var n, r, o = e.options, i = Z.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), Z.each(["radio", "checkbox"], function () {
                Z.valHooks[this] = {
                    set: function (e, t) {
                        return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                    }
                }, G.checkOn || (Z.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                Z.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), Z.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }, bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var lt = Z.now(), ct = /\?/;
            Z.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, Z.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (r) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
            };
            var ft = /#.*$/, pt = /([?&])_=[^&]*/, ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gt = /^(?:GET|HEAD)$/, mt = /^\/\//,
                vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, bt = {},
                xt = "*/".concat("*"), wt = e.location.href, Ct = vt.exec(wt.toLowerCase()) || [];
            Z.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt,
                    type: "GET",
                    isLocal: dt.test(Ct[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": xt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
                },
                ajaxPrefilter: P(yt),
                ajaxTransport: P(bt),
                ajax: function (e, t) {
                    function n(e, t, n, a) {
                        var u, c, v, y, x, C = t;
                        2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = I(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (Z.etag[o] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, u = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? d.resolveWith(p, [c, C, w]) : d.rejectWith(p, [w, C, v]), w.statusCode(m), m = void 0, l && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, C]), l && (h.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, o, i, a, s, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f,
                        h = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, d = Z.Deferred(),
                        g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled",
                        w = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!a) for (a = {}; t = ht.exec(i);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === b ? i : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, v[e] = t), this
                            }, overrideMimeType: function (e) {
                                return b || (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || x;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Ct[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Ct[1] && u[2] === Ct[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), F(yt, f, t, w), 2 === b) return w;
                    l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (ct.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(o) ? o.replace(pt, "$1_=" + lt++) : o + (ct.test(o) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
                    for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
                    if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
                    x = "abort";
                    for (c in{success: 1, error: 1, complete: 1}) w[c](f[c]);
                    if (r = F(bt, f, t, w)) {
                        w.readyState = 1, l && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                            w.abort("timeout")
                        }, f.timeout));
                        try {
                            b = 1, r.send(v, n)
                        } catch (C) {
                            if (!(2 > b)) throw C;
                            n(-1, C)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (e, t, n) {
                    return Z.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return Z.get(e, void 0, t, "script")
                }
            }), Z.each(["get", "post"], function (e, t) {
                Z[t] = function (e, n, r, o) {
                    return Z.isFunction(n) && (o = o || r, r = n, n = void 0), Z.ajax({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    })
                }
            }), Z._evalUrl = function (e) {
                return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, Z.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return Z.isFunction(e) ? this.each(function (t) {
                        Z(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                }, wrapInner: function (e) {
                    return Z.isFunction(e) ? this.each(function (t) {
                        Z(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = Z(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = Z.isFunction(e);
                    return this.each(function (n) {
                        Z(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Z.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, Z.expr.filters.visible = function (e) {
                return !Z.expr.filters.hidden(e)
            };
            var kt = /%20/g, Tt = /\[\]$/, jt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
                Et = /^(?:input|select|textarea|keygen)/i;
            Z.param = function (e, t) {
                var n, r = [], o = function (e, t) {
                    t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
                    o(this.name, this.value)
                }); else for (n in e) $(n, e[n], t, o);
                return r.join("&").replace(kt, "+")
            }, Z.fn.extend({
                serialize: function () {
                    return Z.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = Z.prop(this, "elements");
                        return e ? Z.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !Z(this).is(":disabled") && Et.test(this.nodeName) && !Nt.test(e) && (this.checked || !Te.test(e))
                    }).map(function (e, t) {
                        var n = Z(this).val();
                        return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                            return {name: t.name, value: e.replace(jt, "\r\n")}
                        }) : {name: t.name, value: n.replace(jt, "\r\n")}
                    }).get()
                }
            }), Z.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {
                }
            };
            var St = 0, At = {}, qt = {0: 200, 1223: 204}, Dt = Z.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function () {
                for (var e in At) At[e]()
            }), G.cors = !!Dt && "withCredentials" in Dt, G.ajax = Dt = !!Dt, Z.ajaxTransport(function (e) {
                var t;
                return G.cors || Dt && !e.crossDomain ? {
                    send: function (n, r) {
                        var o, i = e.xhr(), a = ++St;
                        if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) i[o] = e.xhrFields[o];
                        e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) i.setRequestHeader(o, n[o]);
                        t = function (e) {
                            return function () {
                                t && (delete At[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(qt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {text: i.responseText} : void 0, i.getAllResponseHeaders()))
                            }
                        }, i.onload = t(), i.onerror = t("error"), t = At[a] = t("abort");
                        try {
                            i.send(e.hasContent && e.data || null)
                        } catch (s) {
                            if (t) throw s
                        }
                    }, abort: function () {
                        t && t()
                    }
                } : void 0
            }), Z.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (e) {
                        return Z.globalEval(e), e
                    }
                }
            }), Z.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), Z.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, o) {
                            t = Z("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), Q.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var Ot = [], Lt = /(=)\?(?=&|$)|\?\?/;
            Z.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Ot.pop() || Z.expando + "_" + lt++;
                    return this[e] = !0, e
                }
            }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
                var o, i, a,
                    s = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                    return a || Z.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
                    a = arguments
                }, r.always(function () {
                    e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Ot.push(o)), a && Z.isFunction(i) && i(a[0]), a = i = void 0
                }), "script") : void 0
            }), Z.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || Q;
                var r = ae.exec(e), o = !n && [];
                return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], r.childNodes))
            };
            var Ht = Z.fn.load;
            Z.fn.load = function (e, t, n) {
                if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
                var r, o, i, a = this, s = e.indexOf(" ");
                return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Z.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }), this
            }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                Z.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), Z.expr.filters.animated = function (e) {
                return Z.grep(Z.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var Pt = e.document.documentElement;
            Z.offset = {
                setOffset: function (e, t, n) {
                    var r, o, i, a, s, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
                    "static" === c && (e.style.position = "relative"), s = f.offset(), i = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, Z.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        Z.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0], o = {top: 0, left: 0}, i = r && r.ownerDocument;
                    if (i) return t = i.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== je && (o = r.getBoundingClientRect()), n = _(i), {
                        top: o.top + n.pageYOffset - t.clientTop,
                        left: o.left + n.pageXOffset - t.clientLeft
                    }) : o
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = this[0], r = {top: 0, left: 0};
                        return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - Z.css(n, "marginTop", !0),
                            left: t.left - r.left - Z.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                        return e || Pt
                    })
                }
            }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
                var r = "pageYOffset" === n;
                Z.fn[t] = function (o) {
                    return me(this, function (t, o, i) {
                        var a = _(t);
                        return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
                    }, t, o, arguments.length, null)
                }
            }), Z.each(["top", "left"], function (e, t) {
                Z.cssHooks[t] = C(G.pixelPosition, function (e, n) {
                    return n ? (n = w(e, t), We.test(n) ? Z(e).position()[t] + "px" : n) : void 0
                })
            }), Z.each({Height: "height", Width: "width"}, function (e, t) {
                Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                    Z.fn[r] = function (r, o) {
                        var i = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || o === !0 ? "margin" : "border");
                        return me(this, function (t, n, r) {
                            var o;
                            return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                        }, t, i ? r : void 0, i, null)
                    }
                })
            }), Z.fn.size = function () {
                return this.length
            }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return Z
            });
            var Ft = e.jQuery, Mt = e.$;
            return Z.noConflict = function (t) {
                return e.$ === Z && (e.$ = Mt), t && e.jQuery === Z && (e.jQuery = Ft), Z
            }, typeof t === je && (e.jQuery = e.$ = Z), Z
        })
    }, {}],
    2: [function (e, t, n) {
        !function (e, n, r) {
            function o(e, t, n) {
                return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
            }

            function i(e) {
                if ("keypress" == e.type) {
                    var t = String.fromCharCode(e.which);
                    return e.shiftKey || (t = t.toLowerCase()), t
                }
                return y[e.which] ? y[e.which] : b[e.which] ? b[e.which] : String.fromCharCode(e.which).toLowerCase()
            }

            function a(e, t) {
                return e.sort().join(",") === t.sort().join(",")
            }

            function s(e) {
                var t = [];
                return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
            }

            function u(e) {
                return e.preventDefault ? void e.preventDefault() : void(e.returnValue = !1)
            }

            function l(e) {
                return e.stopPropagation ? void e.stopPropagation() : void(e.cancelBubble = !0)
            }

            function c(e) {
                return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
            }

            function f() {
                if (!v) {
                    v = {};
                    for (var e in y) e > 95 && 112 > e || y.hasOwnProperty(e) && (v[y[e]] = e)
                }
                return v
            }

            function p(e, t, n) {
                return n || (n = f()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n
            }

            function h(e) {
                return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e.split("+"))
            }

            function d(e, t) {
                var n, r, o, i = [];
                for (n = h(e), o = 0; o < n.length; ++o) r = n[o], w[r] && (r = w[r]), t && "keypress" != t && x[r] && (r = x[r], i.push("shift")), c(r) && i.push(r);
                return t = p(r, i, t), {key: r, modifiers: i, action: t}
            }

            function g(e, t) {
                return null === e || e === n ? !1 : e === t ? !0 : g(e.parentNode, t)
            }

            function m(e) {
                function t(e) {
                    e = e || {};
                    var t, n = !1;
                    for (t in x) e[t] ? n = !0 : x[t] = 0;
                    n || (k = !1)
                }

                function r(e, t, n, r, o, i) {
                    var s, u, l = [], f = n.type;
                    if (!y._callbacks[e]) return [];
                    for ("keyup" == f && c(e) && (t = [e]), s = 0; s < y._callbacks[e].length; ++s) if (u = y._callbacks[e][s], (r || !u.seq || x[u.seq] == u.level) && f == u.action && ("keypress" == f && !n.metaKey && !n.ctrlKey || a(t, u.modifiers))) {
                        var p = !r && u.combo == o, h = r && u.seq == r && u.level == i;
                        (p || h) && y._callbacks[e].splice(s, 1), l.push(u)
                    }
                    return l
                }

                function f(e, t, n, r) {
                    y.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (u(t), l(t))
                }

                function p(e) {
                    "number" != typeof e.which && (e.which = e.keyCode);
                    var t = i(e);
                    if (t) return "keyup" == e.type && w === t ? void(w = !1) : void y.handleKey(t, s(e), e)
                }

                function h() {
                    clearTimeout(b), b = setTimeout(t, 1e3)
                }

                function g(e, n, r, o) {
                    function a(t) {
                        return function () {
                            k = t, ++x[e], h()
                        }
                    }

                    function s(n) {
                        f(r, n, e), "keyup" !== o && (w = i(n)), setTimeout(t, 10)
                    }

                    x[e] = 0;
                    for (var u = 0; u < n.length; ++u) {
                        var l = u + 1 === n.length, c = l ? s : a(o || d(n[u + 1]).action);
                        v(n[u], c, o, e, u)
                    }
                }

                function v(e, t, n, o, i) {
                    y._directMap[e + ":" + n] = t, e = e.replace(/\s+/g, " ");
                    var a, s = e.split(" ");
                    return s.length > 1 ? void g(e, s, t, n) : (a = d(e, n), y._callbacks[a.key] = y._callbacks[a.key] || [], r(a.key, a.modifiers, {type: a.action}, o, e, i), void y._callbacks[a.key][o ? "unshift" : "push"]({
                        callback: t,
                        modifiers: a.modifiers,
                        action: a.action,
                        seq: o,
                        level: i,
                        combo: e
                    }))
                }

                var y = this;
                if (e = e || n, !(y instanceof m)) return new m(e);
                y.target = e, y._callbacks = {}, y._directMap = {};
                var b, x = {}, w = !1, C = !1, k = !1;
                y._handleKey = function (e, n, o) {
                    var i, a = r(e, n, o), s = {}, u = 0, l = !1;
                    for (i = 0; i < a.length; ++i) a[i].seq && (u = Math.max(u, a[i].level));
                    for (i = 0; i < a.length; ++i) if (a[i].seq) {
                        if (a[i].level != u) continue;
                        l = !0, s[a[i].seq] = 1, f(a[i].callback, o, a[i].combo, a[i].seq)
                    } else l || f(a[i].callback, o, a[i].combo);
                    var p = "keypress" == o.type && C;
                    o.type != k || c(e) || p || t(s), C = l && "keydown" == o.type
                }, y._bindMultiple = function (e, t, n) {
                    for (var r = 0; r < e.length; ++r) v(e[r], t, n)
                }, o(e, "keypress", p), o(e, "keydown", p), o(e, "keyup", p)
            }

            for (var v, y = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            }, b = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, x = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            }, w = {
                option: "alt",
                command: "meta",
                "return": "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            }, C = 1; 20 > C; ++C) y[111 + C] = "f" + C;
            for (C = 0; 9 >= C; ++C) y[C + 96] = C;
            m.prototype.bind = function (e, t, n) {
                var r = this;
                return e = e instanceof Array ? e : [e], r._bindMultiple.call(r, e, t, n), r
            }, m.prototype.unbind = function (e, t) {
                var n = this;
                return n.bind.call(n, e, function () {
                }, t)
            }, m.prototype.trigger = function (e, t) {
                var n = this;
                return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e), n
            }, m.prototype.reset = function () {
                var e = this;
                return e._callbacks = {}, e._directMap = {}, e
            }, m.prototype.stopCallback = function (e, t) {
                var n = this;
                return (" " + t.className + " ").indexOf(" mousetrap ") > -1 ? !1 : g(t, n.target) ? !1 : "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable
            }, m.prototype.handleKey = function () {
                var e = this;
                return e._handleKey.apply(e, arguments)
            }, m.init = function () {
                var e = m(n);
                for (var t in e) "_" !== t.charAt(0) && (m[t] = function (t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }(t))
            }, m.init(), e.Mousetrap = m, "undefined" != typeof t && t.exports && (t.exports = m), "function" == typeof define && define.amd && define(function () {
                return m
            })
        }(window, document)
    }, {}],
    3: [function (e, t, n) {
        (function (e) {
            !function (r) {
                function o(e) {
                    throw new RangeError(L[e])
                }

                function i(e, t) {
                    for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                    return r
                }

                function a(e, t) {
                    var n = e.split("@"), r = "";
                    n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(O, ".");
                    var o = e.split("."), a = i(o, t).join(".");
                    return r + a
                }

                function s(e) {
                    for (var t, n, r = [], o = 0, i = e.length; i > o;) t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && i > o ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                    return r
                }

                function u(e) {
                    return i(e, function (e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += F(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += F(e)
                    }).join("")
                }

                function l(e) {
                    return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : C
                }

                function c(e, t) {
                    return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                }

                function f(e, t, n) {
                    var r = 0;
                    for (e = n ? P(e / N) : e >> 1, e += P(e / t); e > H * T >> 1; r += C) e = P(e / H);
                    return P(r + (H + 1) * e / (e + j))
                }

                function p(e) {
                    var t, n, r, i, a, s, c, p, h, d, g = [], m = e.length, v = 0, y = S, b = E;
                    for (n = e.lastIndexOf(A), 0 > n && (n = 0), r = 0; n > r; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), g.push(e.charCodeAt(r));
                    for (i = n > 0 ? n + 1 : 0; m > i;) {
                        for (a = v, s = 1, c = C; i >= m && o("invalid-input"), p = l(e.charCodeAt(i++)), (p >= C || p > P((w - v) / s)) && o("overflow"), v += p * s, h = b >= c ? k : c >= b + T ? T : c - b, !(h > p); c += C) d = C - h, s > P(w / d) && o("overflow"), s *= d;
                        t = g.length + 1, b = f(v - a, t, 0 == a), P(v / t) > w - y && o("overflow"), y += P(v / t), v %= t, g.splice(v++, 0, y)
                    }
                    return u(g)
                }

                function h(e) {
                    var t, n, r, i, a, u, l, p, h, d, g, m, v, y, b, x = [];
                    for (e = s(e), m = e.length, t = S, n = 0, a = E, u = 0; m > u; ++u) g = e[u], 128 > g && x.push(F(g));
                    for (r = i = x.length, i && x.push(A); m > r;) {
                        for (l = w, u = 0; m > u; ++u) g = e[u], g >= t && l > g && (l = g);
                        for (v = r + 1, l - t > P((w - n) / v) && o("overflow"), n += (l - t) * v, t = l, u = 0; m > u; ++u) if (g = e[u], t > g && ++n > w && o("overflow"), g == t) {
                            for (p = n, h = C; d = a >= h ? k : h >= a + T ? T : h - a, !(d > p); h += C) b = p - d, y = C - d, x.push(F(c(d + b % y, 0))), p = P(b / y);
                            x.push(F(c(p, 0))), a = f(n, v, r == i), n = 0, ++r
                        }
                        ++n, ++t
                    }
                    return x.join("")
                }

                function d(e) {
                    return a(e, function (e) {
                        return q.test(e) ? p(e.slice(4).toLowerCase()) : e
                    })
                }

                function g(e) {
                    return a(e, function (e) {
                        return D.test(e) ? "xn--" + h(e) : e
                    })
                }

                var m = "object" == typeof n && n && !n.nodeType && n,
                    v = "object" == typeof t && t && !t.nodeType && t, y = "object" == typeof e && e;
                (y.global === y || y.window === y || y.self === y) && (r = y);
                var b, x, w = 2147483647, C = 36, k = 1, T = 26, j = 38, N = 700, E = 72, S = 128, A = "-", q = /^xn--/,
                    D = /[^\x20-\x7E]/, O = /[\x2E\u3002\uFF0E\uFF61]/g, L = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, H = C - k, P = Math.floor, F = String.fromCharCode;
                if (b = {
                        version: "1.4.1",
                        ucs2: {decode: s, encode: u},
                        decode: p,
                        encode: h,
                        toASCII: g,
                        toUnicode: d
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function () {
                    return b
                }); else if (m && v) if (t.exports == m) v.exports = b; else for (x in b) b.hasOwnProperty(x) && (m[x] = b[x]); else r.punycode = b
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        t.exports = function (e, t, n, i) {
            t = t || "&", n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var s = /\+/g;
            e = e.split(t);
            var u = 1e3;
            i && "number" == typeof i.maxKeys && (u = i.maxKeys);
            var l = e.length;
            u > 0 && l > u && (l = u);
            for (var c = 0; l > c; ++c) {
                var f, p, h, d, g = e[c].replace(s, "%20"), m = g.indexOf(n);
                m >= 0 ? (f = g.substr(0, m), p = g.substr(m + 1)) : (f = g, p = ""), h = decodeURIComponent(f), d = decodeURIComponent(p), r(a, h) ? o(a[h]) ? a[h].push(d) : a[h] = [a[h], d] : a[h] = d
            }
            return a
        };
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}],
    5: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }

        var o = function (e) {
            switch (typeof e) {
                case"string":
                    return e;
                case"boolean":
                    return e ? "true" : "false";
                case"number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function (e, t, n, s) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(a(e), function (a) {
                var s = encodeURIComponent(o(a)) + n;
                return i(e[a]) ? r(e[a], function (e) {
                    return s + encodeURIComponent(o(e))
                }).join(t) : s + encodeURIComponent(o(e[a]))
            }).join(t) : s ? encodeURIComponent(o(s)) + n + encodeURIComponent(o(e)) : ""
        };
        var i = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, a = Object.keys || function (e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    }, {}],
    6: [function (e, t, n) {
        "use strict";
        n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
    }, {"./decode": 4, "./encode": 5}],
    7: [function (e, t, n) {
        "use strict";

        function r() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function o(e, t, n) {
            if (e && l.isObject(e) && e instanceof r) return e;
            var o = new r;
            return o.parse(e, t, n), o
        }

        function i(e) {
            return l.isString(e) && (e = o(e)), e instanceof r ? e.format() : r.prototype.format.call(e)
        }

        function a(e, t) {
            return o(e, !1, !0).resolve(t)
        }

        function s(e, t) {
            return e ? o(e, !1, !0).resolveObject(t) : t
        }

        var u = e("punycode"), l = e("./util");
        n.parse = o, n.resolve = a, n.resolveObject = s, n.format = i, n.Url = r;
        var c = /^([a-z0-9.+-]+:)/i, f = /:[0-9]*$/, p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            h = ["<", ">", '"', "`", " ", "\r", "\n", "	"], d = ["{", "}", "|", "\\", "^", "`"].concat(h),
            g = ["'"].concat(d), m = ["%", "/", "?", ";", "#"].concat(g), v = ["/", "?", "#"], y = 255,
            b = /^[+a-z0-9A-Z_-]{0,63}$/, x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, w = {javascript: !0, "javascript:": !0},
            C = {javascript: !0, "javascript:": !0}, k = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, T = e("querystring");
        r.prototype.parse = function (e, t, n) {
            if (!l.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var r = e.indexOf("?"), o = -1 !== r && r < e.indexOf("#") ? "?" : "#", i = e.split(o), a = /\\/g;
            i[0] = i[0].replace(a, "/"), e = i.join(o);
            var s = e;
            if (s = s.trim(), !n && 1 === e.split("#").length) {
                var f = p.exec(s);
                if (f) return this.path = s, this.href = s, this.pathname = f[1], f[2] ? (this.search = f[2], t ? this.query = T.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var h = c.exec(s);
            if (h) {
                h = h[0];
                var d = h.toLowerCase();
                this.protocol = d, s = s.substr(h.length)
            }
            if (n || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var j = "//" === s.substr(0, 2);
                !j || h && C[h] || (s = s.substr(2), this.slashes = !0)
            }
            if (!C[h] && (j || h && !k[h])) {
                for (var N = -1, E = 0; E < v.length; E++) {
                    var S = s.indexOf(v[E]);
                    -1 !== S && (-1 === N || N > S) && (N = S)
                }
                var A, q;
                q = -1 === N ? s.lastIndexOf("@") : s.lastIndexOf("@", N), -1 !== q && (A = s.slice(0, q), s = s.slice(q + 1),
                    this.auth = decodeURIComponent(A)), N = -1;
                for (var E = 0; E < m.length; E++) {
                    var S = s.indexOf(m[E]);
                    -1 !== S && (-1 === N || N > S) && (N = S)
                }
                -1 === N && (N = s.length), this.host = s.slice(0, N), s = s.slice(N), this.parseHost(), this.hostname = this.hostname || "";
                var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!D) for (var O = this.hostname.split(/\./), E = 0, L = O.length; L > E; E++) {
                    var H = O[E];
                    if (H && !H.match(b)) {
                        for (var P = "", F = 0, M = H.length; M > F; F++) P += H.charCodeAt(F) > 127 ? "x" : H[F];
                        if (!P.match(b)) {
                            var R = O.slice(0, E), I = O.slice(E + 1), $ = H.match(x);
                            $ && (R.push($[1]), I.unshift($[2])), I.length && (s = "/" + I.join(".") + s), this.hostname = R.join(".");
                            break
                        }
                    }
                }
                this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), D || (this.hostname = u.toASCII(this.hostname));
                var _ = this.port ? ":" + this.port : "", W = this.hostname || "";
                this.host = W + _, this.href += this.host, D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
            }
            if (!w[d]) for (var E = 0, L = g.length; L > E; E++) {
                var B = g[E];
                if (-1 !== s.indexOf(B)) {
                    var U = encodeURIComponent(B);
                    U === B && (U = escape(B)), s = s.split(B).join(U)
                }
            }
            var z = s.indexOf("#");
            -1 !== z && (this.hash = s.substr(z), s = s.slice(0, z));
            var X = s.indexOf("?");
            if (-1 !== X ? (this.search = s.substr(X), this.query = s.substr(X + 1), t && (this.query = T.parse(this.query)), s = s.slice(0, X)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), k[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var _ = this.pathname || "", K = this.search || "";
                this.path = _ + K
            }
            return this.href = this.format(), this
        }, r.prototype.format = function () {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", o = !1, i = "";
            this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && l.isObject(this.query) && Object.keys(this.query).length && (i = T.stringify(this.query));
            var a = this.search || i && "?" + i || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || k[t]) && o !== !1 ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e)
            }), a = a.replace("#", "%23"), t + o + n + a + r
        }, r.prototype.resolve = function (e) {
            return this.resolveObject(o(e, !1, !0)).format()
        }, r.prototype.resolveObject = function (e) {
            if (l.isString(e)) {
                var t = new r;
                t.parse(e, !1, !0), e = t
            }
            for (var n = new r, o = Object.keys(this), i = 0; i < o.length; i++) {
                var a = o[i];
                n[a] = this[a]
            }
            if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
            if (e.slashes && !e.protocol) {
                for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                    var c = s[u];
                    "protocol" !== c && (n[c] = e[c])
                }
                return k[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!k[e.protocol]) {
                    for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                        var h = f[p];
                        n[h] = e[h]
                    }
                    return n.href = n.format(), n
                }
                if (n.protocol = e.protocol, e.host || C[e.protocol]) n.pathname = e.pathname; else {
                    for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift());) ;
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/")
                }
                if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                    var g = n.pathname || "", m = n.search || "";
                    n.path = g + m
                }
                return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }
            var v = n.pathname && "/" === n.pathname.charAt(0),
                y = e.host || e.pathname && "/" === e.pathname.charAt(0), b = y || v || n.host && e.pathname, x = b,
                w = n.pathname && n.pathname.split("/") || [], d = e.pathname && e.pathname.split("/") || [],
                T = n.protocol && !k[n.protocol];
            if (T && (n.hostname = "", n.port = null, n.host && ("" === w[0] ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), b = b && ("" === d[0] || "" === w[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = d; else if (d.length) w || (w = []), w.pop(), w = w.concat(d), n.search = e.search, n.query = e.query; else if (!l.isNullOrUndefined(e.search)) {
                if (T) {
                    n.hostname = n.host = w.shift();
                    var j = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                    j && (n.auth = j.shift(), n.host = n.hostname = j.shift())
                }
                return n.search = e.search, n.query = e.query, l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!w.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var N = w.slice(-1)[0], E = (n.host || e.host || w.length > 1) && ("." === N || ".." === N) || "" === N, S = 0, A = w.length; A >= 0; A--) N = w[A], "." === N ? w.splice(A, 1) : ".." === N ? (w.splice(A, 1), S++) : S && (w.splice(A, 1), S--);
            if (!b && !x) for (; S--; S) w.unshift("..");
            !b || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), E && "/" !== w.join("/").substr(-1) && w.push("");
            var q = "" === w[0] || w[0] && "/" === w[0].charAt(0);
            if (T) {
                n.hostname = n.host = q ? "" : w.length ? w.shift() : "";
                var j = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
                j && (n.auth = j.shift(), n.host = n.hostname = j.shift())
            }
            return b = b || n.host && w.length, b && !q && w.unshift(""), w.length ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }, r.prototype.parseHost = function () {
            var e = this.host, t = f.exec(e);
            t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, {"./util": 8, punycode: 3, querystring: 6}],
    8: [function (e, t, n) {
        "use strict";
        t.exports = {
            isString: function (e) {
                return "string" == typeof e
            }, isObject: function (e) {
                return "object" == typeof e && null !== e
            }, isNull: function (e) {
                return null === e
            }, isNullOrUndefined: function (e) {
                return null == e
            }
        }
    }, {}],
    9: [function (e, t, n) {
        function r(e) {
            var t = a(e.currentTarget).parent().find(".dropdown-menu");
            t.toggleClass("open"), e.stopPropagation(), e.preventDefault()
        }

        function o(e) {
            a(".dropdown-menu").removeClass("open")
        }

        function i() {
            a(document).on("click", ".toggle-dropdown", r), a(document).on("click", ".dropdown-menu", function (e) {
                e.stopPropagation()
            }), a(document).on("click", o)
        }

        var a = e("jquery");
        t.exports = {init: i}
    }, {jquery: 1}],
    10: [function (e, t, n) {
        function r() {
            s.init(), i.init(), o.init(), a.init(), u.createButton({
                index: 0,
                icon: "fa fa-align-justify",
                onClick: function (e) {
                    e.preventDefault(), s.toggle()
                }
            })
        }

        var o = e("./dropdown"), i = e("./keyboard"), a = e("./navigation"), s = e("./sidebar"), u = e("./toolbar"),
            l = window.gitbook;
        l.events.on("start", r), l.keyboard = i, l.navigation = a, l.sidebar = s, l.toolbar = u
    }, {"./dropdown": 9, "./keyboard": 11, "./navigation": 13, "./sidebar": 15, "./toolbar": 16}],
    11: [function (e, t, n) {
        function r(e, t) {
            i.bind(e, function (e) {
                return t(), !1
            })
        }

        function o() {
            r(["right"], function (e) {
                a.goNext()
            }), r(["left"], function (e) {
                a.goPrev()
            }), r(["s"], function (e) {
                s.toggle()
            })
        }

        var i = e("mousetrap"), a = e("./navigation"), s = e("./sidebar");
        t.exports = {init: o, bind: r}
    }, {"./navigation": 13, "./sidebar": 15, mousetrap: 2}],
    12: [function (e, t, n) {
        function r(e) {
            return o.state.$book.addClass("is-loading"), e.always(function () {
                o.state.$book.removeClass("is-loading")
            }), e
        }

        var o = window.gitbook;
        t.exports = {show: r}
    }, {}],
    13: [function (e, t, n) {
        function r() {
            return w(T.isSmallScreen() ? ".book-body" : ".body-inner")
        }

        function o(e) {
            e = decodeURIComponent(e);
            var t = r(), n = 0;
            i(e) && (e && (n = a(e)), t.unbind("scroll"), t.animate({scrollTop: n}, 800, "swing", function () {
                t.scroll(l)
            }), s(null, e))
        }

        function i(e) {
            var t = r(), n = t.find(e);
            return !!n.length
        }

        function a(e) {
            var t = r(), n = t.find(".page-inner"), o = t.find(e), i = o.offsetParent(), a = 0;
            for (a = o.position().top; !i.is(n);) o = i, a += o.position().top, i = o.offsetParent();
            return Math.floor(a)
        }

        function s(e, t) {
            if (e || t || (e = b.first()), t && (e = b.filter(function () {
                    var e = u(w(this));
                    return e == t
                }).first()), !(e.is(x) || (x = e, b.removeClass("active"), e.length <= 0))) {
                e.addClass("active"), t = u(e);
                var n = window.location.pathname + window.location.hash, r = window.location.pathname + t;
                r != n && history.replaceState({path: r}, null, r)
            }
        }

        function u(e) {
            if (e.length <= 0) return "";
            var t = e.children("a"), n = t.attr("href").split("#")[1];
            return n && (n = "#" + n), n ? n : ""
        }

        function l() {
            var e = r(), t = e.scrollTop(), n = e.prop("scrollHeight"), o = e.prop("clientHeight"), i = b.length,
                l = null;
            w(b.get().reverse()).each(function (e) {
                var n, r = u(w(this));
                r && !l && (n = a(r), t >= n && (l = w(this))), e != i - 1 || l || (l = w(this))
            }), l || t || (l = b.first()), t && n - t == o && (l = b.last()), s(l)
        }

        function c(e, t) {
            var n = C.parse(E), r = C.resolve(window.location.pathname, e), i = C.parse(r), a = i.hash,
                s = i.pathname !== n.pathname, u = Boolean(i.hostname);
            if (!N || u) return void(location.href = e);
            if (!s) return t && history.pushState({path: r}, null, r), o(a);
            E = r;
            var l = w.Deferred(function (e) {
                w.ajax({
                    type: "GET",
                    url: r,
                    cache: !0,
                    headers: {"Access-Control-Expose-Headers": "X-Current-Location"},
                    success: function (n, i, s) {
                        var u = s.getResponseHeader("X-Current-Location") || r;
                        n = n.replace(/<(\/?)(html|head|body)([^>]*)>/gi, function (e, t, n, r) {
                            return "<" + t + "div" + (t ? "" : ' data-element="' + n + '"') + r + ">"
                        });
                        var l, c = w(n), f = c.find(".book");
                        if (0 === f.length) {
                            var h = new Error("Invalid gitbook page, redirecting...");
                            return e.reject(h)
                        }
                        t && history.pushState({path: u}, null, u), c = w(n), l = c.find("[data-element=head]"), f = c.find(".book"), document.title = l.find("title").text();
                        var d = w("head");
                        d.find("link[rel=prev]").remove(), d.find("link[rel=next]").remove(), d.append(l.find("link[rel=prev]")), d.append(l.find("link[rel=next]"));
                        var g = w(".book").attr("class"), m = w(".book-summary").scrollTop();
                        f.toggleClass("with-summary", w(".book").hasClass("with-summary")), w(".book").replaceWith(f), w(".book").attr("class", g), w(".book-summary").scrollTop(m), j.state.$book = w(".book"), p(!a), a && o(a), e.resolve()
                    }
                })
            }).promise();
            return k.show(l.fail(function (e) {
                console.log(e)
            }))
        }

        function f() {
            var e, t;
            e = parseInt(w(".body-inner").css("width"), 10), t = parseInt(w(".page-wrapper").css("width"), 10), w(".navigation-next").css("margin-right", e - t + "px");
            var n = r();
            n.unbind("scroll"), n.scroll(l)
        }

        function p(e) {
            var t = w(".book-body"), n = t.find(".body-inner"), o = n.find(".page-wrapper");
            f(), o.focus(), e !== !1 && n.scrollTop(0), t.scrollTop(0), b = w(".book-summary .summary .chapter").filter(function () {
                var e = w(this).children("a"), t = null;
                if (!e.length) return !1;
                t = e.attr("href").split("#")[0];
                var n = C.resolve(window.location.pathname, t);
                return window.location.pathname == n
            });
            var i = r();
            b.length > 1 && i.scroll(l)
        }

        function h(e) {
            return 0 === e.button
        }

        function d(e) {
            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }

        function g(e) {
            var t = w(this), n = t.attr("target");
            if (!d(e) && h(e) && !n) {
                e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation();
                var r = t.attr("href");
                r && c(r, !0)
            }
        }

        function m() {
            var e = w(".navigation-next").attr("href");
            e && c(e, !0)
        }

        function v() {
            var e = w(".navigation-prev").attr("href");
            e && c(e, !0)
        }

        function y() {
            w.ajaxSetup({cache: !1}), history.replaceState({path: window.location.href}, ""), window.onpopstate = function (e) {
                return e && null !== e.state ? c(e.state.path, !1) : void 0
            }, w(document).on("click", ".navigation-prev", g), w(document).on("click", ".navigation-next", g), w(document).on("click", ".summary [data-path] a", g), w(document).on("click", ".page-inner a", g), w(window).resize(f), p()
        }

        var b, x, w = e("jquery"), C = e("url"), k = e("./loading"), T = e("./platform"), j = window.gitbook,
            N = "undefined" != typeof history.pushState, E = location.href;
        t.exports = {init: y, goNext: m, goPrev: v}
    }, {"./loading": 12, "./platform": 14, jquery: 1, url: 7}],
    14: [function (e, t, n) {
        var r = e("jquery");
        t.exports = {
            isMobile: function () {
                return r(document).width() <= 600
            }, isSmallScreen: function () {
                return r(document).width() <= 1240
            }
        }
    }, {jquery: 1}],
    15: [function (e, t, n) {
        function r(e, t) {
            (null == l.state || o() != e) && (null == t && (t = !0), l.state.$book.toggleClass("without-animation", !t), l.state.$book.toggleClass("with-summary", e), l.storage.set("sidebar", o()))
        }

        function o() {
            return l.state.$book.hasClass("with-summary")
        }

        function i() {
            u.isMobile() || r(l.storage.get("sidebar", !0), !1), s(document).on("click", ".book-summary li.chapter a", function (e) {
                u.isMobile() && r(!1, !1)
            })
        }

        function a(e) {
            var t = s(".book-summary");
            t.find("li").each(function () {
                var t = s(this).data("path"), n = null == e || -1 !== e.indexOf(t);
                s(this).toggle(n), n && s(this).parents("li").show()
            })
        }

        var s = e("jquery"), u = e("./platform"), l = window.gitbook;
        t.exports = {init: i, isOpen: o, toggle: r, filter: a}
    }, {"./platform": 14, jquery: 1}],
    16: [function (e, t, n) {
        function r() {
            return "btn-" + g++
        }

        function o(e, t, n, r) {
            var o = e.children(t).size();
            0 > n && (n = Math.max(0, o + 1 + n)), e.append(r), o > n && e.children(t).eq(n).before(e.children(t).last())
        }

        function i(e) {
            e.preventDefault()
        }

        function a(e) {
            var t = p("<div>", {
                "class": "dropdown-menu",
                html: '<div class="dropdown-caret"><span class="caret-outer"></span><span class="caret-inner"></span></div>'
            });
            if ("string" == typeof e) t.append(e); else {
                var n = e.map(function (e) {
                    return p.isArray(e) ? e : [e]
                });
                n.forEach(function (e) {
                    var n = p("<div>", {"class": "buttons"}), r = "size-" + e.length;
                    e.forEach(function (e) {
                        e = p.extend({text: "", className: "", onClick: i}, e || {});
                        var t = p("<button>", {"class": "button " + r + " " + e.className, text: e.text});
                        t.click(e.onClick), n.append(t)
                    }), t.append(n)
                })
            }
            return t
        }

        function s(e) {
            return e = p.extend({
                label: "",
                icon: "",
                text: "",
                position: "left",
                className: "",
                onClick: i,
                dropdown: null,
                index: null,
                id: r()
            }, e || {}), d.push(e), u(e), e.id
        }

        function u(e) {
            var t, n = p(".book-header"), r = n.find("h1"), i = "pull-" + e.position,
                s = p("<a>", {"class": "btn", text: e.text ? " " + e.text : "", "aria-label": e.label, href: "#"});
            if (s.click(e.onClick), e.icon && p("<i>", {"class": e.icon}).prependTo(s), e.dropdown) {
                var u = p("<div>", {"class": "dropdown " + i + " " + e.className});
                s.addClass("toggle-dropdown"), u.append(s);
                var l = a(e.dropdown);
                l.addClass("dropdown-" + ("right" == e.position ? "left" : "right")), u.append(l), t = u
            } else s.addClass(i), s.addClass(e.className), t = s;
            t.addClass("js-toolbar-action"), p.isNumeric(e.index) && e.index >= 0 ? o(n, ".btn, .dropdown, h1", e.index, t) : t.insertBefore(r)
        }

        function l() {
            p(".js-toolbar-action").remove(), d.forEach(u)
        }

        function c(e) {
            d = p.grep(d, function (t) {
                return t.id != e
            }), l()
        }

        function f(e) {
            d = p.grep(d, function (t) {
                return -1 == e.indexOf(t.id)
            }), l()
        }

        var p = e("jquery"), h = window.gitbook, d = [], g = 0;
        h.events.on("page.change", function () {
            l()
        }), t.exports = {createButton: s, removeButton: c, removeButtons: f}
    }, {jquery: 1}]
}, {}, [10]);