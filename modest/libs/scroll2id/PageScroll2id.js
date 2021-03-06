! function(L, w, P, D) {
    var F, x, G, z, B, N, q, J, H, K, M, A = "mPageScroll2id",
        Q = "mPS2id",
        y = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",
        k = {
            scrollSpeed: 1300,
            autoScrollSpeed: !0,
            scrollEasing: "easeInOutExpo",
            scrollingEasing: "easeInOutCirc",
            pageEndSmoothScroll: !0,
            layout: "vertical",
            offset: 0,
            highlightSelector: !1,
            clickedClass: Q + "-clicked",
            targetClass: Q + "-target",
            highlightClass: Q + "-highlight",
            forceSingleHighlight: !1,
            keepHighlightUntilNext: !1,
            highlightByNextTarget: !1,
            disablePluginBelow: !1,
            clickEvents: !0,
            onStart: function() {},
            onComplete: function() {},
            defaultSelector: !1,
            live: !0
        },
        E = 0,
        j = {
            init: function(d) {
                var d = L.extend(!0, {}, k, d);
                if (L(P).data(Q, d), x = L(P).data(Q), !this.selector) {
                    var a = "__" + Q;
                    this.each(function() {
                        var c = L(this);
                        c.hasClass(a) || c.addClass(a)
                    }), this.selector = "." + a
                }
                F = F ? F + "," + this.selector : this.selector, x.defaultSelector && ("object" != typeof L(F) || 0 === L(F).length) && (F = y), x.clickEvents && L(P).undelegate("." + Q).delegate(F, "click." + Q, function(f) {
                    if (b._isDisabled.call(null)) {
                        return void b._removeClasses.call(null)
                    }
                    var e = L(this),
                        g = e.attr("href"),
                        c = e.prop("href");
                    g && -1 !== g.indexOf("#/") || (b._reset.call(null), K = e.data("ps2id-offset") || 0, b._isValid.call(null, g, c) && b._findTarget.call(null, g) && (f.preventDefault(), z = "selector", B = e, b._setClasses.call(null, !0), b._scrollTo.call(null)))
                }), L(w).unbind("." + Q).bind("scroll." + Q + " resize." + Q, function() {
                    if (b._isDisabled.call(null)) {
                        return void b._removeClasses.call(null)
                    }
                    var c = L("._" + Q + "-t");
                    c.each(function(f) {
                        var h = L(this),
                            e = h.attr("id"),
                            g = b._findHighlight.call(null, e);
                        b._setClasses.call(null, !1, h, g), f == c.length - 1 && b._extendClasses.call(null)
                    })
                }), G = !0, b._setup.call(null), b._live.call(null)
            },
            scrollTo: function(d, c) {
                if (b._isDisabled.call(null)) {
                    return void b._removeClasses.call(null)
                }
                if (d && "undefined" != typeof d) {
                    b._isInit.call(null);
                    var e = {
                            layout: x.layout,
                            offset: x.offset,
                            clicked: !1
                        },
                        c = L.extend(!0, {}, e, c);
                    b._reset.call(null), J = c.layout, H = c.offset, d = -1 !== d.indexOf("#") ? d : "#" + d, b._isValid.call(null, d) && b._findTarget.call(null, d) && (z = "scrollTo", B = c.clicked, B && b._setClasses.call(null, !0), b._scrollTo.call(null))
                }
            },
            destroy: function() {
                L(w).unbind("." + Q), L(P).undelegate("." + Q).removeData(Q), L("._" + Q + "-t").removeData(Q), b._removeClasses.call(null, !0)
            }
        },
        b = {
            _isDisabled: function() {
                var c = w,
                    d = "inner",
                    a = x.disablePluginBelow instanceof Array ? [x.disablePluginBelow[0] || 0, x.disablePluginBelow[1] || 0] : [x.disablePluginBelow || 0, 0];
                return "innerWidth" in w || (d = "client", c = P.documentElement || P.body), c[d + "Width"] <= a[0] || c[d + "Height"] <= a[1]
            },
            _isValid: function(f, d) {
                if (f) {
                    d = d ? d : f;
                    var g = -1 !== d.indexOf("#/") ? d.split("#/")[0] : d.split("#")[0],
                        c = w.location.toString().split("#")[0];
                    return "#" !== f && -1 !== f.indexOf("#") && ("" === g || g === c)
                }
            },
            _setup: function() {
                var d = b._highlightSelector(),
                    c = 1,
                    e = 0;
                return L(d).each(function() {
                    var a = L(this),
                        g = a.attr("href"),
                        h = a.prop("href");
                    if (b._isValid.call(null, g, h)) {
                        var m = -1 !== g.indexOf("#/") ? g.split("#/")[1] : g.split("#")[1],
                            n = L("#" + m);
                        if (n.length > 0) {
                            x.highlightByNextTarget && n !== e && (e ? e.data(Q, {
                                tn: n
                            }) : n.data(Q, {
                                tn: "0"
                            }), e = n), n.hasClass("_" + Q + "-t") || n.addClass("_" + Q + "-t"), n.data(Q, {
                                i: c
                            }), a.hasClass("_" + Q + "-h") || a.addClass("_" + Q + "-h");
                            var f = b._findHighlight.call(null, m);
                            b._setClasses.call(null, !1, n, f), E = c, c++, c == L(d).length && b._extendClasses.call(null)
                        }
                    }
                })
            },
            _highlightSelector: function() {
                return x.highlightSelector && "" !== x.highlightSelector ? x.highlightSelector : F
            },
            _findTarget: function(d) {
                var c = -1 !== d.indexOf("#/") ? d.split("#/")[1] : d.split("#")[1],
                    e = L("#" + c);
                if (e.length < 1 || "fixed" === e.css("position")) {
                    if ("top" !== c) {
                        return
                    }
                    e = L("body")
                }
                return N = e, J || (J = x.layout), H = b._setOffset.call(null), q = [(e.offset().top - H[0]).toString(), (e.offset().left - H[1]).toString()], q[0] = q[0] < 0 ? 0 : q[0], q[1] = q[1] < 0 ? 0 : q[1], q
            },
            _setOffset: function() {
                H || (H = x.offset ? x.offset : 0), K && (H = K);
                var e, d, f, c;
                switch (typeof H) {
                    case "object":
                    case "string":
                        e = [H.y ? H.y : H, H.x ? H.x : H], d = [e[0] instanceof jQuery ? e[0] : L(e[0]), e[1] instanceof jQuery ? e[1] : L(e[1])], d[0].length > 0 ? (f = d[0].height(), "fixed" === d[0].css("position") && (f += d[0][0].offsetTop)) : f = !isNaN(parseFloat(e[0])) && isFinite(e[0]) ? parseInt(e[0]) : 0, d[1].length > 0 ? (c = d[1].width(), "fixed" === d[1].css("position") && (c += d[1][0].offsetLeft)) : c = !isNaN(parseFloat(e[1])) && isFinite(e[1]) ? parseInt(e[1]) : 0;
                        break;
                    case "function":
                        e = H.call(null), e instanceof Array ? (f = e[0], c = e[1]) : f = c = e;
                        break;
                    default:
                        f = c = parseInt(H)
                }
                return [f, c]
            },
            _findHighlight: function(d) {
                var h = w.location.toString().split("#")[0],
                    c = L("._" + Q + "-h[href='#" + d + "']"),
                    f = L("._" + Q + "-h[href='" + h + "#" + d + "']"),
                    e = L("._" + Q + "-h[href='#/" + d + "']"),
                    g = L("._" + Q + "-h[href='" + h + "#/" + d + "']");
                return c = c.length > 0 ? c : f, e = e.length > 0 ? e : g, e.length > 0 ? e : c
            },
            _setClasses: function(f, d, h) {
                var c = x.clickedClass,
                    e = x.targetClass,
                    g = x.highlightClass;
                f && c && "" !== c ? (L("." + c).removeClass(c), B.addClass(c)) : d && e && "" !== e && h && g && "" !== g && (b._currentTarget.call(null, d) ? (d.addClass(e), h.addClass(g)) : (!x.keepHighlightUntilNext || L("." + g).length > 1) && (d.removeClass(e), h.removeClass(g)))
            },
            _extendClasses: function() {
                var g = x.targetClass,
                    e = x.highlightClass,
                    s = L("." + g),
                    d = L("." + e),
                    f = g + "-first",
                    h = g + "-last",
                    m = e + "-first",
                    p = e + "-last";
                L("._" + Q + "-t").removeClass(f + " " + h), L("._" + Q + "-h").removeClass(m + " " + p), x.forceSingleHighlight ? x.keepHighlightUntilNext && s.length > 1 ? (s.slice(0, 1).removeClass(g), d.slice(0, 1).removeClass(e)) : (s.slice(1).removeClass(g), d.slice(1).removeClass(e)) : (s.slice(0, 1).addClass(f).end().slice(-1).addClass(h), d.slice(0, 1).addClass(m).end().slice(-1).addClass(p))
            },
            _removeClasses: function(a) {
                L("." + x.clickedClass).removeClass(x.clickedClass), L("." + x.targetClass).removeClass(x.targetClass + " " + x.targetClass + "-first " + x.targetClass + "-last"), L("." + x.highlightClass).removeClass(x.highlightClass + " " + x.highlightClass + "-first " + x.highlightClass + "-last"), a && (L("._" + Q + "-t").removeClass("_" + Q + "-t"), L("._" + Q + "-h").removeClass("_" + Q + "-h"))
            },
            _currentTarget: function(al) {
                var aa = x["target_" + al.data(Q).i],
                    ac = al.data("ps2id-target"),
                    ae = ac ? L(ac)[0].getBoundingClientRect() : al[0].getBoundingClientRect();
                if ("undefined" != typeof aa) {
                    var X = al.offset().top,
                        Z = al.offset().left,
                        aj = aa.from ? aa.from + X : X,
                        V = aa.to ? aa.to + X : X,
                        ag = aa.fromX ? aa.fromX + Z : Z,
                        af = aa.toX ? aa.toX + Z : Z;
                    return ae.top >= V && ae.top <= aj && ae.left >= af && ae.left <= ag
                }
                var ah = L(w).height(),
                    ai = L(w).width(),
                    Y = ac ? L(ac).height() : al.height(),
                    W = ac ? L(ac).width() : al.width(),
                    U = 1 + Y / ah,
                    ab = U,
                    T = ah > Y ? U * (ah / Y) : U,
                    s = 1 + W / ai,
                    e = s,
                    ak = ai > W ? s * (ai / W) : s,
                    t = [ae.top <= ah / ab, ae.bottom >= ah / T, ae.left <= ai / e, ae.right >= ai / ak];
                if (x.highlightByNextTarget) {
                    var R = al.data(Q).tn;
                    if (R) {
                        var ad = R[0].getBoundingClientRect();
                        "vertical" === x.layout ? t = [ae.top <= ah / 2, ad.top > ah / 2, 1, 1] : "horizontal" === x.layout && (t = [1, 1, ae.left <= ai / 2, ad.left > ai / 2])
                    }
                }
                return t[0] && t[1] && t[2] && t[3]
            },
            _scrollTo: function() {
                x.scrollSpeed = parseInt(x.scrollSpeed), q = x.pageEndSmoothScroll ? b._pageEndSmoothScroll.call(null) : q;
                var d = L("html,body"),
                    h = x.autoScrollSpeed ? b._autoScrollSpeed.call(null) : x.scrollSpeed,
                    c = d.is(":animated") ? x.scrollingEasing : x.scrollEasing,
                    e = L(w).scrollTop(),
                    f = L(w).scrollLeft();
                switch (J) {
                    case "horizontal":
                        f != q[1] && (b._callbacks.call(null, "onStart"), d.stop().animate({
                            scrollLeft: q[1]
                        }, h, c).promise().then(function() {
                            b._callbacks.call(null, "onComplete")
                        }));
                        break;
                    case "auto":
                        if (e != q[0] || f != q[1]) {
                            if (b._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                                var g;
                                d.stop().animate({
                                    pageYOffset: q[0],
                                    pageXOffset: q[1]
                                }, {
                                    duration: h,
                                    easing: c,
                                    step: function(l, i) {
                                        "pageXOffset" == i.prop ? g = l : "pageYOffset" == i.prop && w.scrollTo(g, l)
                                    }
                                }).promise().then(function() {
                                    b._callbacks.call(null, "onComplete")
                                })
                            } else {
                                d.stop().animate({
                                    scrollTop: q[0],
                                    scrollLeft: q[1]
                                }, h, c).promise().then(function() {
                                    b._callbacks.call(null, "onComplete")
                                })
                            }
                        }
                        break;
                    default:
                        e != q[0] && (b._callbacks.call(null, "onStart"), d.stop().animate({
                            scrollTop: q[0]
                        }, h, c).promise().then(function() {
                            b._callbacks.call(null, "onComplete")
                        }))
                }
            },
            _pageEndSmoothScroll: function() {
                var e = L(P).height(),
                    a = L(P).width(),
                    d = L(w).height(),
                    c = L(w).width();
                return [e - q[0] < d ? e - d : q[0], a - q[1] < c ? a - c : q[1]]
            },
            _autoScrollSpeed: function() {
                var f = L(w).scrollTop(),
                    a = L(w).scrollLeft(),
                    c = L(P).height(),
                    d = L(P).width(),
                    e = [x.scrollSpeed + x.scrollSpeed * Math.floor(Math.abs(q[0] - f) / c * 100) / 100, x.scrollSpeed + x.scrollSpeed * Math.floor(Math.abs(q[1] - a) / d * 100) / 100];
                return Math.max.apply(Math, e)
            },
            _callbacks: function(a) {
                if (x) {
                    switch (this[Q] = {
                        trigger: z,
                        clicked: B,
                        target: N,
                        scrollTo: {
                            y: q[0],
                            x: q[1]
                        }
                    }, a) {
                        case "onStart":
                            x.onStart.call(null, this[Q]);
                            break;
                        case "onComplete":
                            x.onComplete.call(null, this[Q])
                    }
                }
            },
            _reset: function() {
                J = H = K = !1
            },
            _isInit: function() {
                G || j.init.apply(this)
            },
            _live: function() {
                M = setTimeout(function() {
                    x.live ? L(b._highlightSelector()).length !== E && b._setup.call(null) : M && clearTimeout(M), b._live.call(null)
                }, 1000)
            },
            _easing: function() {
                L.easing.easeInQuad = L.easing.easeInQuad || function(g, f, d, h, c) {
                    return h * (f /= c) * f + d
                }, L.easing.easeOutQuad = L.easing.easeOutQuad || function(g, f, d, h, c) {
                    return -h * (f /= c) * (f - 2) + d
                }, L.easing.easeInOutQuad = L.easing.easeInOutQuad || function(g, f, d, h, c) {
                    return (f /= c / 2) < 1 ? h / 2 * f * f + d : -h / 2 * (--f * (f - 2) - 1) + d
                }, L.easing.easeInCubic = L.easing.easeInCubic || function(g, f, d, h, c) {
                    return h * (f /= c) * f * f + d
                }, L.easing.easeOutCubic = L.easing.easeOutCubic || function(g, f, d, h, c) {
                    return h * ((f = f / c - 1) * f * f + 1) + d
                }, L.easing.easeInOutCubic = L.easing.easeInOutCubic || function(g, f, d, h, c) {
                    return (f /= c / 2) < 1 ? h / 2 * f * f * f + d : h / 2 * ((f -= 2) * f * f + 2) + d
                }, L.easing.easeInQuart = L.easing.easeInQuart || function(g, f, d, h, c) {
                    return h * (f /= c) * f * f * f + d
                }, L.easing.easeOutQuart = L.easing.easeOutQuart || function(g, f, d, h, c) {
                    return -h * ((f = f / c - 1) * f * f * f - 1) + d
                }, L.easing.easeInOutQuart = L.easing.easeInOutQuart || function(g, f, d, h, c) {
                    return (f /= c / 2) < 1 ? h / 2 * f * f * f * f + d : -h / 2 * ((f -= 2) * f * f * f - 2) + d
                }, L.easing.easeInQuint = L.easing.easeInQuint || function(g, f, d, h, c) {
                    return h * (f /= c) * f * f * f * f + d
                }, L.easing.easeOutQuint = L.easing.easeOutQuint || function(g, f, d, h, c) {
                    return h * ((f = f / c - 1) * f * f * f * f + 1) + d
                }, L.easing.easeInOutQuint = L.easing.easeInOutQuint || function(g, f, d, h, c) {
                    return (f /= c / 2) < 1 ? h / 2 * f * f * f * f * f + d : h / 2 * ((f -= 2) * f * f * f * f + 2) + d
                }, L.easing.easeInExpo = L.easing.easeInExpo || function(g, f, d, h, c) {
                    return 0 == f ? d : h * Math.pow(2, 10 * (f / c - 1)) + d
                }, L.easing.easeOutExpo = L.easing.easeOutExpo || function(g, f, d, h, c) {
                    return f == c ? d + h : h * (-Math.pow(2, -10 * f / c) + 1) + d
                }, L.easing.easeInOutExpo = L.easing.easeInOutExpo || function(g, f, d, h, c) {
                    return 0 == f ? d : f == c ? d + h : (f /= c / 2) < 1 ? h / 2 * Math.pow(2, 10 * (f - 1)) + d : h / 2 * (-Math.pow(2, -10 * --f) + 2) + d
                }, L.easing.easeInSine = L.easing.easeInSine || function(g, f, d, h, c) {
                    return -h * Math.cos(f / c * (Math.PI / 2)) + h + d
                }, L.easing.easeOutSine = L.easing.easeOutSine || function(g, f, d, h, c) {
                    return h * Math.sin(f / c * (Math.PI / 2)) + d
                }, L.easing.easeInOutSine = L.easing.easeInOutSine || function(g, f, d, h, c) {
                    return -h / 2 * (Math.cos(Math.PI * f / c) - 1) + d
                }, L.easing.easeInCirc = L.easing.easeInCirc || function(g, f, d, h, c) {
                    return -h * (Math.sqrt(1 - (f /= c) * f) - 1) + d
                }, L.easing.easeOutCirc = L.easing.easeOutCirc || function(g, f, d, h, c) {
                    return h * Math.sqrt(1 - (f = f / c - 1) * f) + d
                }, L.easing.easeInOutCirc = L.easing.easeInOutCirc || function(g, f, d, h, c) {
                    return (f /= c / 2) < 1 ? -h / 2 * (Math.sqrt(1 - f * f) - 1) + d : h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + d
                }, L.easing.easeInElastic = L.easing.easeInElastic || function(o, g, d, p, c) {
                    var h = 1.70158,
                        f = 0,
                        m = p;
                    if (0 == g) {
                        return d
                    }
                    if (1 == (g /= c)) {
                        return d + p
                    }
                    if (f || (f = 0.3 * c), m < Math.abs(p)) {
                        m = p;
                        var h = f / 4
                    } else {
                        var h = f / (2 * Math.PI) * Math.asin(p / m)
                    }
                    return -(m * Math.pow(2, 10 * (g -= 1)) * Math.sin(2 * (g * c - h) * Math.PI / f)) + d
                }, L.easing.easeOutElastic = L.easing.easeOutElastic || function(o, g, d, p, c) {
                    var h = 1.70158,
                        f = 0,
                        m = p;
                    if (0 == g) {
                        return d
                    }
                    if (1 == (g /= c)) {
                        return d + p
                    }
                    if (f || (f = 0.3 * c), m < Math.abs(p)) {
                        m = p;
                        var h = f / 4
                    } else {
                        var h = f / (2 * Math.PI) * Math.asin(p / m)
                    }
                    return m * Math.pow(2, -10 * g) * Math.sin(2 * (g * c - h) * Math.PI / f) + p + d
                }, L.easing.easeInOutElastic = L.easing.easeInOutElastic || function(o, g, d, p, c) {
                    var h = 1.70158,
                        f = 0,
                        m = p;
                    if (0 == g) {
                        return d
                    }
                    if (2 == (g /= c / 2)) {
                        return d + p
                    }
                    if (f || (f = 0.3 * c * 1.5), m < Math.abs(p)) {
                        m = p;
                        var h = f / 4
                    } else {
                        var h = f / (2 * Math.PI) * Math.asin(p / m)
                    }
                    return 1 > g ? -0.5 * m * Math.pow(2, 10 * (g -= 1)) * Math.sin(2 * (g * c - h) * Math.PI / f) + d : m * Math.pow(2, -10 * (g -= 1)) * Math.sin(2 * (g * c - h) * Math.PI / f) * 0.5 + p + d
                }, L.easing.easeInBack = L.easing.easeInBack || function(m, g, d, c, h, f) {
                    return f == D && (f = 1.70158), c * (g /= h) * g * ((f + 1) * g - f) + d
                }, L.easing.easeOutBack = L.easing.easeOutBack || function(m, g, d, c, h, f) {
                    return f == D && (f = 1.70158), c * ((g = g / h - 1) * g * ((f + 1) * g + f) + 1) + d
                }, L.easing.easeInOutBack = L.easing.easeInOutBack || function(m, g, d, c, h, f) {
                    return f == D && (f = 1.70158), (g /= h / 2) < 1 ? c / 2 * g * g * (((f *= 1.525) + 1) * g - f) + d : c / 2 * ((g -= 2) * g * (((f *= 1.525) + 1) * g + f) + 2) + d
                }, L.easing.easeInBounce = L.easing.easeInBounce || function(e, d, g, c, f) {
                    return c - L.easing.easeOutBounce(e, f - d, 0, c, f) + g
                }, L.easing.easeOutBounce = L.easing.easeOutBounce || function(g, f, d, h, c) {
                    return (f /= c) < 1 / 2.75 ? 7.5625 * h * f * f + d : 2 / 2.75 > f ? h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + d : 2.5 / 2.75 > f ? h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + d : h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + d
                }, L.easing.easeInOutBounce = L.easing.easeInOutBounce || function(e, d, g, c, f) {
                    return f / 2 > d ? 0.5 * L.easing.easeInBounce(e, 2 * d, 0, c, f) + g : 0.5 * L.easing.easeOutBounce(e, 2 * d - f, 0, c, f) + 0.5 * c + g
                }
            }
        };
    b._easing.call(), L.fn[A] = function(a) {
        return j[a] ? j[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void L.error("Method " + a + " does not exist") : j.init.apply(this, arguments)
    }, L[A] = function(a) {
        return j[a] ? j[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void L.error("Method " + a + " does not exist") : j.init.apply(this, arguments)
    }, L[A].defaults = k
}(jQuery, window, document);