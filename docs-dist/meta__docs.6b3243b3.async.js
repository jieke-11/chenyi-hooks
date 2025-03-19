'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [904],
  {
    79554: function (m, n, e) {
      var _;
      e.r(n),
        e.d(n, {
          demos: function () {
            return l;
          },
        });
      var u = e(90228),
        o = e.n(u),
        r = e(48305),
        a = e.n(r),
        i = e(87999),
        s = e.n(i),
        E = e(75271),
        d = e(95450),
        t = e(91831),
        l = {
          'docs-guide-demo-0': {
            component: E.memo(
              E.lazy(
                s()(
                  o()().mark(function f() {
                    var O, M, c, D, v;
                    return o()().wrap(function (T) {
                      for (;;)
                        switch ((T.prev = T.next)) {
                          case 0:
                            return (
                              (T.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (O = T.sent),
                              (M = O.default),
                              (T.next = 6),
                              Promise.resolve().then(e.bind(e, 91831))
                            );
                          case 6:
                            return (
                              (c = T.sent),
                              (D = c.useBoolean),
                              (v = function () {
                                var R = D(!1),
                                  y = a()(R, 2),
                                  h = y[0],
                                  C = y[1].toggle;
                                return M.createElement(
                                  'div',
                                  null,
                                  M.createElement(
                                    'p',
                                    null,
                                    '\u5F53\u524D\u72B6\u6001: ',
                                    h ? '\u5F00\u542F' : '\u5173\u95ED',
                                  ),
                                  M.createElement(
                                    'button',
                                    { onClick: C },
                                    '\u5207\u6362\u72B6\u6001',
                                  ),
                                );
                              }),
                              T.abrupt('return', { default: v })
                            );
                          case 10:
                          case 'end':
                            return T.stop();
                        }
                    }, f);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-guide-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.jsx': {
                  type: 'FILE',
                  value: `import React from 'react';\r
import { useBoolean } from 'chenyi-hooks';\r
\r
const ExampleComponent = () => {\r
  const [state, { toggle }] = useBoolean(false);\r
\r
  return (\r
    <div>\r
      <p>\u5F53\u524D\u72B6\u6001: {state ? '\u5F00\u542F' : '\u5173\u95ED'}</p>\r
      <button onClick={toggle}>\u5207\u6362\u72B6\u6001</button>\r
    </div>\r
  );\r
};\r
\r
export default ExampleComponent;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                'chenyi-hooks': { type: 'NPM', value: '0.0.1' },
              },
              entry: 'index.jsx',
            },
            context: { react: _ || (_ = e.t(E, 2)), 'chenyi-hooks': t },
            renderOpts: {
              compile: (function () {
                var f = s()(
                  o()().mark(function M() {
                    var c,
                      D = arguments;
                    return o()().wrap(function (P) {
                      for (;;)
                        switch ((P.prev = P.next)) {
                          case 0:
                            return (
                              (P.next = 2), e.e(378).then(e.bind(e, 35378))
                            );
                          case 2:
                            return P.abrupt(
                              'return',
                              (c = P.sent).default.apply(c, D),
                            );
                          case 3:
                          case 'end':
                            return P.stop();
                        }
                    }, M);
                  }),
                );
                function O() {
                  return f.apply(this, arguments);
                }
                return O;
              })(),
            },
          },
        };
    },
    13408: function (m, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var _ = e(75271),
        u = e(92789),
        o = {};
    },
    18086: function (m, n, e) {
      e.r(n),
        e.d(n, {
          createUpdateEffect: function () {
            return u;
          },
        });
      var _ = e(75271),
        u = function (r) {
          return function (a, i) {
            var s = (0, _.useRef)(!1);
            r(function () {
              return function () {
                s.current = !1;
              };
            }, []),
              r(function () {
                if (!s.current) s.current = !0;
                else return a();
              }, i);
          };
        };
      n.default = u;
    },
    51490: function (m, n, e) {
      e.r(n),
        e.d(n, {
          createUseStorageState: function () {
            return s;
          },
        });
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(53740),
        a = e(645),
        i = e(29925);
      function s(E) {
        function d(t) {
          var l =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            f,
            O = l.onError,
            M =
              O === void 0
                ? function (h) {
                    console.error(h);
                  }
                : O;
          try {
            f = E();
          } catch (h) {
            M(h);
          }
          var c = function (C) {
              return l.serializer ? l.serializer(C) : JSON.stringify(C);
            },
            D = function (C) {
              return l.deserializer ? l.deserializer(C) : JSON.parse(C);
            };
          function v() {
            try {
              var h,
                C = (h = f) === null || h === void 0 ? void 0 : h.getItem(t);
              if (C) return D(C);
            } catch (U) {
              M(U);
            }
            return (0, i.isFunction)(l.defaultValue)
              ? l.defaultValue()
              : l.defaultValue;
          }
          var P = (0, o.useState)(v),
            T = u()(P, 2),
            g = T[0],
            R = T[1];
          (0, a.default)(
            function () {
              R(v());
            },
            [t],
          );
          var y = function (C) {
            var U = (0, i.isFunction)(C) ? C(g) : C;
            if ((R(U), (0, i.isUndef)(U))) {
              var B;
              (B = f) === null || B === void 0 || B.removeItem(t);
            } else
              try {
                var L;
                (L = f) === null || L === void 0 || L.setItem(t, c(U));
              } catch (b) {
                console.error(b);
              }
          };
          return [g, (0, r.default)(y)];
        }
        return d;
      }
    },
    91831: function (m, n, e) {
      e.r(n),
        e.d(n, {
          createUpdateEffect: function () {
            return _.createUpdateEffect;
          },
          useBoolean: function () {
            return u.default;
          },
          useDebounce: function () {
            return o.default;
          },
          useDebounceFn: function () {
            return r.default;
          },
          useGetState: function () {
            return a.default;
          },
          useLatest: function () {
            return i.default;
          },
          useMemoizedFn: function () {
            return s.default;
          },
          usePrevious: function () {
            return E.default;
          },
          useResetState: function () {
            return d.default;
          },
          useSessionStorageState: function () {
            return t.default;
          },
          useSet: function () {
            return l.default;
          },
          useThrottle: function () {
            return f.default;
          },
          useThrottleFn: function () {
            return O.default;
          },
          useToggle: function () {
            return M.default;
          },
          useUnmount: function () {
            return c.default;
          },
          useUnmountedRef: function () {
            return D.default;
          },
          useUpdateEffect: function () {
            return v.default;
          },
        });
      var _ = e(18086),
        u = e(91118),
        o = e(81743),
        r = e(23086),
        a = e(65251),
        i = e(56574),
        s = e(53740),
        E = e(90884),
        d = e(96587),
        t = e(9156),
        l = e(96605),
        f = e(65509),
        O = e(26808),
        M = e(50541),
        c = e(38797),
        D = e(65215),
        v = e(645);
    },
    91118: function (m, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return a;
          },
        });
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(50541);
      function a() {
        var i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          s = (0, r.default)(!!i),
          E = u()(s, 2),
          d = E[0],
          t = E[1],
          l = t.toggle,
          f = t.set,
          O = (0, o.useMemo)(function () {
            var M = function () {
                return f(!0);
              },
              c = function () {
                return f(!1);
              };
            return {
              toggle: l,
              set: function (v) {
                return f(!!v);
              },
              setTrue: M,
              setFalse: c,
            };
          }, []);
        return [d, O];
      }
    },
    23086: function (m, n, e) {
      e.r(n);
      var _ = e(31759),
        u = e.n(_),
        o = e(99702),
        r = e(75271),
        a = e(56574),
        i = e(38797),
        s = e(29925),
        E = e(61614);
      function d(t, l) {
        var f;
        E.default &&
          ((0, s.isFunction)(t) ||
            console.error(
              'useDebounceFn expected parameter is a function, got '.concat(
                u()(t),
              ),
            ));
        var O = (0, a.default)(t),
          M =
            (f = l == null ? void 0 : l.wait) !== null && f !== void 0
              ? f
              : 1e3,
          c = (0, r.useMemo)(function () {
            return (0, o.debounce)(
              function () {
                return O.current.apply(O, arguments);
              },
              M,
              l,
            );
          }, []);
        return (
          (0, i.default)(function () {
            c.cancel();
          }),
          { run: c, cancel: c.cancel, flush: c.flush }
        );
      }
      n.default = d;
    },
    81743: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(23086);
      function a(i, s) {
        var E = (0, o.useState)(i),
          d = u()(E, 2),
          t = d[0],
          l = d[1],
          f = (0, r.default)(function () {
            l(i);
          }, s),
          O = f.run;
        return (
          (0, o.useEffect)(
            function () {
              O();
            },
            [i],
          ),
          t
        );
      }
      n.default = a;
    },
    65251: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271);
      function r(a) {
        var i = (0, o.useState)(a),
          s = u()(i, 2),
          E = s[0],
          d = s[1],
          t = (0, o.useRef)(E);
        t.current = E;
        var l = (0, o.useCallback)(function () {
          return t.current;
        }, []);
        return [E, d, l];
      }
      n.default = r;
    },
    56574: function (m, n, e) {
      e.r(n);
      var _ = e(75271);
      function u(o) {
        var r = (0, _.useRef)(o);
        return (r.current = o), r;
      }
      n.default = u;
    },
    53740: function (m, n, e) {
      e.r(n);
      var _ = e(31759),
        u = e.n(_),
        o = e(75271),
        r = e(29925),
        a = e(61614);
      function i(s) {
        a.default &&
          ((0, r.isFunction)(s) ||
            console.error(
              'useMemoizedFn expected parameter is a function, got '.concat(
                u()(s),
              ),
            ));
        var E = (0, o.useRef)(s);
        E.current = (0, o.useMemo)(
          function () {
            return s;
          },
          [s],
        );
        var d = (0, o.useRef)();
        return (
          d.current ||
            (d.current = function () {
              for (
                var t = arguments.length, l = new Array(t), f = 0;
                f < t;
                f++
              )
                l[f] = arguments[f];
              return E.current.apply(this, l);
            }),
          d.current
        );
      }
      n.default = i;
    },
    90884: function (m, n, e) {
      e.r(n);
      var _ = e(75271),
        u = function (a, i) {
          return !Object.is(a, i);
        };
      function o(r) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u,
          i = (0, _.useRef)(),
          s = (0, _.useRef)();
        return (
          a(s.current, r) && ((i.current = s.current), (s.current = r)),
          i.current
        );
      }
      n.default = o;
    },
    96587: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(53740),
        a = function (s) {
          var E = (0, o.useState)(s),
            d = u()(E, 2),
            t = d[0],
            l = d[1],
            f = (0, r.default)(function () {
              l(s);
            });
          return [t, l, f];
        };
      n.default = a;
    },
    9156: function (m, n, e) {
      e.r(n);
      var _ = e(51490),
        u = e(32641),
        o = (0, _.createUseStorageState)(function () {
          return u.default ? sessionStorage : void 0;
        });
      n.default = o;
    },
    96605: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(53740);
      function a(i) {
        var s = function () {
            return new Set(i);
          },
          E = (0, o.useState)(s),
          d = u()(E, 2),
          t = d[0],
          l = d[1],
          f = function (D) {
            t.has(D) ||
              l(function (v) {
                var P = new Set(v);
                return P.add(D), P;
              });
          },
          O = function (D) {
            t.has(D) &&
              l(function (v) {
                var P = new Set(v);
                return P.delete(D), P;
              });
          },
          M = function () {
            return l(s());
          };
        return [
          t,
          {
            add: (0, r.default)(f),
            remove: (0, r.default)(O),
            reset: (0, r.default)(M),
          },
        ];
      }
      n.default = a;
    },
    26808: function (m, n, e) {
      e.r(n);
      var _ = e(31759),
        u = e.n(_),
        o = e(20057),
        r = e(75271),
        a = e(56574),
        i = e(38797),
        s = e(29925),
        E = e(61614);
      function d(t, l) {
        var f;
        E.default &&
          ((0, s.isFunction)(t) ||
            console.error(
              'useThrottleFn expected parameter is a function, got '.concat(
                u()(t),
              ),
            ));
        var O = (0, a.default)(t),
          M =
            (f = l == null ? void 0 : l.wait) !== null && f !== void 0
              ? f
              : 1e3,
          c = (0, r.useMemo)(function () {
            return (0, o.Z)(
              function () {
                return O.current.apply(O, arguments);
              },
              M,
              l,
            );
          }, []);
        return (
          (0, i.default)(function () {
            c.cancel();
          }),
          { run: c, cancel: c.cancel, flush: c.flush }
        );
      }
      n.default = d;
    },
    65509: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271),
        r = e(26808);
      function a(i, s) {
        var E = (0, o.useState)(i),
          d = u()(E, 2),
          t = d[0],
          l = d[1],
          f = (0, r.default)(function () {
            l(i);
          }, s),
          O = f.run;
        return (
          (0, o.useEffect)(
            function () {
              O();
            },
            [i],
          ),
          t
        );
      }
      n.default = a;
    },
    50541: function (m, n, e) {
      e.r(n);
      var _ = e(48305),
        u = e.n(_),
        o = e(75271);
      function r() {
        var a =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          i = arguments.length > 1 ? arguments[1] : void 0,
          s = (0, o.useState)(a),
          E = u()(s, 2),
          d = E[0],
          t = E[1],
          l = (0, o.useMemo)(function () {
            var f = i === void 0 ? !a : i,
              O = function () {
                return t(function (P) {
                  return P === a ? f : a;
                });
              },
              M = function (P) {
                return t(P);
              },
              c = function () {
                return t(a);
              },
              D = function () {
                return t(f);
              };
            return { toggle: O, set: M, setLeft: c, setRight: D };
          }, []);
        return [d, l];
      }
      n.default = r;
    },
    38797: function (m, n, e) {
      e.r(n);
      var _ = e(31759),
        u = e.n(_),
        o = e(75271),
        r = e(56574),
        a = e(29925),
        i = e(61614),
        s = function (d) {
          i.default &&
            ((0, a.isFunction)(d) ||
              console.error(
                'useUnmount expected parameter is a function, got '.concat(
                  u()(d),
                ),
              ));
          var t = (0, r.default)(d);
          (0, o.useEffect)(function () {
            return function () {
              t.current();
            };
          }, []);
        };
      n.default = s;
    },
    65215: function (m, n, e) {
      e.r(n);
      var _ = e(75271),
        u = function () {
          var r = (0, _.useRef)(!1);
          return (
            (0, _.useEffect)(function () {
              return (
                (r.current = !1),
                function () {
                  r.current = !0;
                }
              );
            }, []),
            r
          );
        };
      n.default = u;
    },
    645: function (m, n, e) {
      e.r(n);
      var _ = e(75271),
        u = e(18086);
      n.default = (0, u.createUpdateEffect)(_.useEffect);
    },
    29925: function (m, n, e) {
      e.r(n),
        e.d(n, {
          isBoolean: function () {
            return i;
          },
          isFunction: function () {
            return r;
          },
          isNumber: function () {
            return s;
          },
          isObject: function () {
            return o;
          },
          isString: function () {
            return a;
          },
          isUndef: function () {
            return E;
          },
        });
      var _ = e(31759),
        u = e.n(_),
        o = function (t) {
          return t !== null && u()(t) === 'object';
        },
        r = function (t) {
          return typeof t == 'function';
        },
        a = function (t) {
          return typeof t == 'string';
        },
        i = function (t) {
          return typeof t == 'boolean';
        },
        s = function (t) {
          return typeof t == 'number';
        },
        E = function (t) {
          return typeof t == 'undefined';
        };
    },
    32641: function (m, n, e) {
      e.r(n);
      var _ = !!(
        typeof window != 'undefined' &&
        window.document &&
        window.document.createElement
      );
      n.default = _;
    },
    61614: function (m, n, e) {
      e.r(n);
      var _ = !1;
      n.default = _;
    },
    99702: function (m, n, e) {
      e.r(n),
        e.d(n, {
          debounce: function () {
            return o.Z;
          },
        });
      var _ = e(31759),
        u = e.n(_),
        o = e(65885);
      function r() {
        var a =
            (typeof e.g == 'undefined' || typeof e.g == 'undefined'
              ? 'undefined'
              : u()(e.g)) == 'object' &&
            e.g &&
            e.g.Object === Object &&
            e.g,
          i =
            (typeof self == 'undefined' ? 'undefined' : u()(self)) ==
              'object' &&
            self &&
            self.Object === Object &&
            self;
        return a || i;
      }
      r() || (e.g.Date = Date);
    },
    47117: function (m, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return u;
          },
        });
      var _ = e(95450);
      const u = [
        { value: '\u6B22\u8FCE\u4F7F\u7528 ', paraId: 0, tocIndex: 0 },
        { value: 'Chenyi Hooks', paraId: 0, tocIndex: 0 },
        {
          value:
            '\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684 React Hooks \u5E93\uFF0C\u65E8\u5728\u7B80\u5316\u5F00\u53D1\u8FC7\u7A0B\u5E76\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u91CD\u7528\u6027\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u8F7B\u91CF\u7EA7', paraId: 1, tocIndex: 1 },
        {
          value:
            '\uFF1A\u4E13\u6CE8\u4E8E\u63D0\u4F9B\u5E38\u7528\u7684 Hooks\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u4F9D\u8D56\u3002',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '\u6613\u4E8E\u4F7F\u7528', paraId: 1, tocIndex: 1 },
        {
          value:
            '\uFF1A\u63D0\u4F9B\u7B80\u5355\u6613\u7528\u7684 API\uFF0C\u5FEB\u901F\u4E0A\u624B\u3002',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '\u9AD8\u6027\u80FD', paraId: 1, tocIndex: 1 },
        {
          value:
            '\uFF1A\u4F18\u5316\u7684\u5B9E\u73B0\uFF0C\u786E\u4FDD\u6027\u80FD\u4E0D\u53D7\u5F71\u54CD\u3002',
          paraId: 1,
          tocIndex: 1,
        },
        {
          value:
            '\u4F60\u53EF\u4EE5\u901A\u8FC7 npm \u6216 yarn \u5B89\u88C5 Chenyi Hooks\uFF1A',
          paraId: 2,
          tocIndex: 2,
        },
        {
          value: `npm install chenyi-hooks
`,
          paraId: 3,
          tocIndex: 2,
        },
        { value: '\u6216', paraId: 4, tocIndex: 2 },
        {
          value: `yarn add chenyi-hooks
`,
          paraId: 5,
          tocIndex: 2,
        },
        {
          value:
            '\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5C55\u793A\u5982\u4F55\u4F7F\u7528 Chenyi Hooks\uFF1A',
          paraId: 6,
          tocIndex: 3,
        },
        {
          value:
            '\u8BE6\u7EC6\u7684 API \u6587\u6863\u548C\u4F7F\u7528\u6307\u5357\u8BF7\u8BBF\u95EE ',
          paraId: 7,
          tocIndex: 4,
        },
        { value: '\u5B98\u65B9\u6587\u6863', paraId: 8, tocIndex: 4 },
        { value: '\u3002', paraId: 7, tocIndex: 4 },
        {
          value:
            '\u611F\u8C22\u4F60\u9009\u62E9 Chenyi Hooks\uFF0C\u5E0C\u671B\u5B83\u80FD\u5E2E\u52A9\u4F60\u66F4\u9AD8\u6548\u5730\u5F00\u53D1\u5E94\u7528\uFF01',
          paraId: 9,
          tocIndex: 4,
        },
        { value: '', paraId: 10, tocIndex: 4 },
      ];
    },
    22760: function (m, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return u;
          },
        });
      var _ = e(92789);
      const u = [
        {
          value:
            '\u57FA\u4E8E React 18+\u8BBE\u8BA1\u7684\u9AD8\u6027\u80FD\u4E1A\u52A1 Hook \u96C6\u5408\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u63D0\u5347 30%+\u5F00\u53D1\u6548\u7387\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u7279\u6027', paraId: 1, tocIndex: 1 },
        { value: '\u8BF4\u660E', paraId: 1, tocIndex: 1 },
        { value: '\u{1F4A8} ', paraId: 1, tocIndex: 1 },
        { value: '\u9AD8\u6027\u80FD', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u96F6\u4F9D\u8D56\u8F7B\u91CF\u5316\u8BBE\u8BA1\uFF0C\u901A\u8FC7',
          paraId: 1,
          tocIndex: 1,
        },
        { value: 'useMemo', paraId: 1, tocIndex: 1 },
        { value: '/', paraId: 1, tocIndex: 1 },
        { value: 'useCallback', paraId: 1, tocIndex: 1 },
        {
          value: '\u4F18\u5316\u5185\u5B58\u4F7F\u7528',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '\u{1F6E1}\uFE0F ', paraId: 1, tocIndex: 1 },
        { value: '\u7C7B\u578B\u5B89\u5168', paraId: 1, tocIndex: 1 },
        {
          value:
            '100% TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7C7B\u578B\u5B9A\u4E49\u4E0E\u6CDB\u578B\u652F\u6301',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '\u{1F4D6} ', paraId: 1, tocIndex: 1 },
        { value: '\u6587\u6863\u53CB\u597D', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u5305\u542B\u8BE6\u7EC6\u4F7F\u7528\u793A\u4F8B\u4E0E API \u8BF4\u660E\uFF0C\u652F\u6301 Dumi \u81EA\u52A8\u751F\u6210\u53EF\u4EA4\u4E92\u6587\u6863',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '\u{1F504} ', paraId: 1, tocIndex: 1 },
        { value: '\u751F\u6001\u517C\u5BB9', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u517C\u5BB9 React \u751F\u6001\u4E3B\u6D41\u5DE5\u5177\u94FE\uFF08Vite/Webpack\uFF09\uFF0C\u652F\u6301 SSR \u4E0E\u9759\u6001\u7AD9\u70B9\u751F\u6210',
          paraId: 1,
          tocIndex: 1,
        },
        {
          value: `# \u5B89\u88C5
npm install chenyi-hooks
yarn add chenyi-hooks
`,
          paraId: 2,
          tocIndex: 2,
        },
      ];
    },
    66711: function (m, n, e) {
      var _ = e(99615),
        u = _.Z.Symbol;
      n.Z = u;
    },
    33918: function (m, n, e) {
      e.d(n, {
        Z: function () {
          return D;
        },
      });
      var _ = e(66711),
        u = Object.prototype,
        o = u.hasOwnProperty,
        r = u.toString,
        a = _.Z ? _.Z.toStringTag : void 0;
      function i(v) {
        var P = o.call(v, a),
          T = v[a];
        try {
          v[a] = void 0;
          var g = !0;
        } catch (y) {}
        var R = r.call(v);
        return g && (P ? (v[a] = T) : delete v[a]), R;
      }
      var s = i,
        E = Object.prototype,
        d = E.toString;
      function t(v) {
        return d.call(v);
      }
      var l = t,
        f = '[object Null]',
        O = '[object Undefined]',
        M = _.Z ? _.Z.toStringTag : void 0;
      function c(v) {
        return v == null
          ? v === void 0
            ? O
            : f
          : M && M in Object(v)
          ? s(v)
          : l(v);
      }
      var D = c;
    },
    59691: function (m, n, e) {
      var _ = e(7550),
        u = /^\s+/;
      function o(r) {
        return r && r.slice(0, (0, _.Z)(r) + 1).replace(u, '');
      }
      n.Z = o;
    },
    97889: function (m, n) {
      var e =
        typeof global == 'object' &&
        global &&
        global.Object === Object &&
        global;
      n.Z = e;
    },
    99615: function (m, n, e) {
      var _ = e(97889),
        u = typeof self == 'object' && self && self.Object === Object && self,
        o = _.Z || u || Function('return this')();
      n.Z = o;
    },
    7550: function (m, n) {
      var e = /\s/;
      function _(u) {
        for (var o = u.length; o-- && e.test(u.charAt(o)); );
        return o;
      }
      n.Z = _;
    },
    65885: function (m, n, e) {
      var _ = e(82433),
        u = e(89200),
        o = e(47305),
        r = 'Expected a function',
        a = Math.max,
        i = Math.min;
      function s(E, d, t) {
        var l,
          f,
          O,
          M,
          c,
          D,
          v = 0,
          P = !1,
          T = !1,
          g = !0;
        if (typeof E != 'function') throw new TypeError(r);
        (d = (0, o.Z)(d) || 0),
          (0, _.Z)(t) &&
            ((P = !!t.leading),
            (T = 'maxWait' in t),
            (O = T ? a((0, o.Z)(t.maxWait) || 0, d) : O),
            (g = 'trailing' in t ? !!t.trailing : g));
        function R(I) {
          var A = l,
            p = f;
          return (l = f = void 0), (v = I), (M = E.apply(p, A)), M;
        }
        function y(I) {
          return (v = I), (c = setTimeout(U, d)), P ? R(I) : M;
        }
        function h(I) {
          var A = I - D,
            p = I - v,
            K = d - A;
          return T ? i(K, O - p) : K;
        }
        function C(I) {
          var A = I - D,
            p = I - v;
          return D === void 0 || A >= d || A < 0 || (T && p >= O);
        }
        function U() {
          var I = (0, u.Z)();
          if (C(I)) return B(I);
          c = setTimeout(U, h(I));
        }
        function B(I) {
          return (c = void 0), g && l ? R(I) : ((l = f = void 0), M);
        }
        function L() {
          c !== void 0 && clearTimeout(c), (v = 0), (l = D = f = c = void 0);
        }
        function b() {
          return c === void 0 ? M : B((0, u.Z)());
        }
        function W() {
          var I = (0, u.Z)(),
            A = C(I);
          if (((l = arguments), (f = this), (D = I), A)) {
            if (c === void 0) return y(D);
            if (T) return clearTimeout(c), (c = setTimeout(U, d)), R(D);
          }
          return c === void 0 && (c = setTimeout(U, d)), M;
        }
        return (W.cancel = L), (W.flush = b), W;
      }
      n.Z = s;
    },
    82433: function (m, n) {
      function e(_) {
        var u = typeof _;
        return _ != null && (u == 'object' || u == 'function');
      }
      n.Z = e;
    },
    13795: function (m, n) {
      function e(_) {
        return _ != null && typeof _ == 'object';
      }
      n.Z = e;
    },
    98111: function (m, n, e) {
      var _ = e(33918),
        u = e(13795),
        o = '[object Symbol]';
      function r(a) {
        return typeof a == 'symbol' || ((0, u.Z)(a) && (0, _.Z)(a) == o);
      }
      n.Z = r;
    },
    89200: function (m, n, e) {
      var _ = e(99615),
        u = function () {
          return _.Z.Date.now();
        };
      n.Z = u;
    },
    20057: function (m, n, e) {
      var _ = e(65885),
        u = e(82433),
        o = 'Expected a function';
      function r(a, i, s) {
        var E = !0,
          d = !0;
        if (typeof a != 'function') throw new TypeError(o);
        return (
          (0, u.Z)(s) &&
            ((E = 'leading' in s ? !!s.leading : E),
            (d = 'trailing' in s ? !!s.trailing : d)),
          (0, _.Z)(a, i, { leading: E, maxWait: i, trailing: d })
        );
      }
      n.Z = r;
    },
    47305: function (m, n, e) {
      var _ = e(59691),
        u = e(82433),
        o = e(98111),
        r = NaN,
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        E = parseInt;
      function d(t) {
        if (typeof t == 'number') return t;
        if ((0, o.Z)(t)) return r;
        if ((0, u.Z)(t)) {
          var l = typeof t.valueOf == 'function' ? t.valueOf() : t;
          t = (0, u.Z)(l) ? l + '' : l;
        }
        if (typeof t != 'string') return t === 0 ? t : +t;
        t = (0, _.Z)(t);
        var f = i.test(t);
        return f || s.test(t) ? E(t.slice(2), f ? 2 : 8) : a.test(t) ? r : +t;
      }
      n.Z = d;
    },
  },
]);
