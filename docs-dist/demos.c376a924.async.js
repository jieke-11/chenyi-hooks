'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [433],
  {
    81157: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useBoolean)(!0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = s.toggle,
          r = s.setTrue,
          E = s.setFalse;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('p', {
              children: ['Effects\uFF1A', JSON.stringify(u)],
            }),
            (0, n.jsxs)('p', {
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: l,
                  children: 'Toggle',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: E,
                  style: { margin: '0 16px' },
                  children: 'Set false',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: r,
                  children: 'Set true',
                }),
              ],
            }),
          ],
        });
      };
    },
    62881: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(91831),
        a = e(75271),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useState)(0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, i.useDebounceFn)(
            function () {
              s(u + 1);
            },
            { wait: 500 },
          ),
          r = l.run;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('p', {
              style: { marginTop: 16 },
              children: [' Clicked count: ', u, ' '],
            }),
            (0, n.jsx)('button', {
              type: 'button',
              onClick: r,
              children: 'Click fast!',
            }),
          ],
        });
      };
    },
    79706: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, i.useState)(),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, a.useDebounce)(u, { wait: 500 });
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('input', {
              value: u,
              onChange: function (E) {
                return s(E.target.value);
              },
              placeholder: 'Typed value',
              style: { width: 280 },
            }),
            (0, n.jsxs)('p', {
              style: { marginTop: 16 },
              children: ['DebouncedValue: ', l],
            }),
          ],
        });
      };
    },
    33510: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useGetState)(0),
          _ = d()(t, 3),
          u = _[0],
          s = _[1],
          l = _[2];
        return (
          (0, i.useEffect)(function () {
            var r = setInterval(function () {
              console.log('interval count', l());
            }, 3e3);
            return function () {
              clearInterval(r);
            };
          }, []),
          (0, n.jsxs)('button', {
            onClick: function () {
              return s(function (E) {
                return E + 1;
              });
            },
            children: ['count: ', u],
          })
        );
      };
    },
    8814: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, i.useState)(0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, a.useLatest)(u);
        return (
          (0, i.useEffect)(function () {
            var r = setInterval(function () {
              s(l.current + 1);
            }, 1e3);
            return function () {
              return clearInterval(r);
            };
          }, []),
          (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('p', { children: ['count: ', u] }),
          })
        );
      };
    },
    20848: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(53271),
        n = e(91831),
        t = e(52676);
      o.default = function () {
        var _ = (0, i.useState)(0),
          u = d()(_, 2),
          s = u[0],
          l = u[1],
          r = (0, i.useCallback)(
            function () {
              a.ZP.info('Current count is '.concat(s));
            },
            [s],
          ),
          E = (0, n.useMemoizedFn)(function () {
            a.ZP.info('Current count is '.concat(s));
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('p', { children: ['count: ', s] }),
            (0, t.jsx)('button', {
              type: 'button',
              onClick: function () {
                l(function (h) {
                  return h + 1;
                });
              },
              children: 'Add Count',
            }),
            (0, t.jsxs)('div', {
              style: { marginTop: 16 },
              children: [
                (0, t.jsx)('button', {
                  type: 'button',
                  onClick: r,
                  children: 'call callbackFn',
                }),
                (0, t.jsx)('button', {
                  type: 'button',
                  onClick: E,
                  style: { marginLeft: 8 },
                  children: 'call memoizedFn',
                }),
              ],
            }),
          ],
        });
      };
    },
    94043: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(91831),
        a = e(53271),
        n = e(75271),
        t = e(52676);
      o.default = function () {
        var u = (0, n.useState)(0),
          s = d()(u, 2),
          l = s[0],
          r = s[1],
          E = (0, n.useCallback)(
            function () {
              a.ZP.info('Current count is '.concat(l));
            },
            [l],
          ),
          C = (0, i.useMemoizedFn)(function () {
            a.ZP.info('Current count is '.concat(l));
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('p', { children: ['count: ', l] }),
            (0, t.jsx)('button', {
              type: 'button',
              onClick: function () {
                r(function (T) {
                  return T + 1;
                });
              },
              children: 'Add Count',
            }),
            (0, t.jsx)('p', {
              children:
                'You can click the button to see the number of sub-component renderings',
            }),
            (0, t.jsxs)('div', {
              style: { marginTop: 32 },
              children: [
                (0, t.jsx)('h3', {
                  children: 'Component with useCallback function:',
                }),
                (0, t.jsx)(_, { showCount: E }),
              ],
            }),
            (0, t.jsxs)('div', {
              style: { marginTop: 32 },
              children: [
                (0, t.jsx)('h3', {
                  children: 'Component with useMemoizedFn function:',
                }),
                (0, t.jsx)(_, { showCount: C }),
              ],
            }),
          ],
        });
      };
      var _ = n.memo(function (u) {
        var s = u.showCount,
          l = (0, n.useRef)(0);
        return (
          (l.current += 1),
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsxs)('p', { children: ['Render Count: ', l.current] }),
              (0, t.jsx)('button', {
                type: 'button',
                onClick: s,
                children: 'showParentCount',
              }),
            ],
          })
        );
      });
    },
    16879: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(91831),
        a = e(75271),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useState)(0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, i.usePrevious)(u);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', { children: ['counter current value: ', u] }),
            (0, n.jsxs)('div', {
              style: { marginBottom: 8 },
              children: ['counter previous value: ', l],
            }),
            (0, n.jsx)('button', {
              type: 'button',
              onClick: function () {
                return s(function (E) {
                  return E + 1;
                });
              },
              children: 'increase',
            }),
            (0, n.jsx)('button', {
              type: 'button',
              style: { marginLeft: 8 },
              onClick: function () {
                return s(function (E) {
                  return E - 1;
                });
              },
              children: 'decrease',
            }),
          ],
        });
      };
    },
    97770: function (m, o, e) {
      e.r(o);
      var c = e(26068),
        d = e.n(c),
        i = e(48305),
        a = e.n(i),
        n = e(75271),
        t = e(91831),
        _ = e(52676),
        u = function (r, E) {
          return !r || r.name !== E.name;
        },
        s = function (r, E) {
          return !r || r.job !== E.job;
        };
      o.default = function () {
        var l = (0, n.useState)({ name: 'Jack', job: 'student' }),
          r = a()(l, 2),
          E = r[0],
          C = r[1],
          h = (0, n.useState)(''),
          T = a()(h, 2),
          D = T[0],
          O = T[1],
          P = (0, n.useState)(''),
          M = a()(P, 2),
          j = M[0],
          b = M[1],
          y = (0, t.usePrevious)(E, u),
          A = (0, t.usePrevious)(E, s);
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)('div', {
              style: {
                margin: '8px 0',
                border: '1px solid #e8e8e8',
                padding: 8,
              },
              children: [
                (0, _.jsxs)('div', { children: ['current name: ', E.name] }),
                (0, _.jsxs)('div', { children: ['current job: ', E.job] }),
              ],
            }),
            (0, _.jsxs)('div', {
              children: ['previous name: ', (y || {}).name],
            }),
            (0, _.jsxs)('div', {
              style: { marginBottom: 8 },
              children: ['previous job: ', (A || {}).job],
            }),
            (0, _.jsxs)('div', {
              style: { marginTop: 8 },
              children: [
                (0, _.jsx)('input', {
                  style: { width: 220 },
                  value: D,
                  onChange: function (v) {
                    return O(v.target.value);
                  },
                  placeholder: 'new name',
                }),
                (0, _.jsx)('button', {
                  type: 'button',
                  onClick: function () {
                    C(function (v) {
                      return d()(d()({}, v), {}, { name: D });
                    });
                  },
                  style: { marginLeft: 8 },
                  children: 'update',
                }),
              ],
            }),
            (0, _.jsxs)('div', {
              style: { marginTop: 8 },
              children: [
                (0, _.jsx)('input', {
                  style: { width: 220 },
                  value: j,
                  onChange: function (v) {
                    return b(v.target.value);
                  },
                  placeholder: 'new job',
                }),
                (0, _.jsx)('button', {
                  type: 'button',
                  onClick: function () {
                    C(function (v) {
                      return d()(d()({}, v), {}, { job: j });
                    });
                  },
                  style: { marginLeft: 8 },
                  children: 'update',
                }),
              ],
            }),
          ],
        });
      };
    },
    98097: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useResetState)({ hello: '', count: 0 }),
          _ = d()(t, 3),
          u = _[0],
          s = _[1],
          l = _[2];
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('pre', { children: JSON.stringify(u, null, 2) }),
            (0, n.jsxs)('p', {
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  style: { marginRight: '8px' },
                  onClick: function () {
                    return s({ hello: 'world', count: 1 });
                  },
                  children: 'set hello and count',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: l,
                  children: 'resetState',
                }),
              ],
            }),
          ],
        });
      };
    },
    55740: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useSet)(['Hello']),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = s.add,
          r = s.remove,
          E = s.reset;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('button', {
              type: 'button',
              onClick: function () {
                return l(String(Date.now()));
              },
              children: 'Add Timestamp',
            }),
            (0, n.jsx)('button', {
              type: 'button',
              onClick: function () {
                return r('Hello');
              },
              disabled: !u.has('Hello'),
              style: { margin: '0 8px' },
              children: 'Remove Hello',
            }),
            (0, n.jsx)('button', {
              type: 'button',
              onClick: function () {
                return E();
              },
              children: 'Reset',
            }),
            (0, n.jsx)('div', {
              style: { marginTop: 16 },
              children: (0, n.jsx)('pre', {
                children: JSON.stringify(Array.from(u), null, 2),
              }),
            }),
          ],
        });
      };
    },
    2675: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, i.useState)(0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, a.useThrottleFn)(
            function () {
              s(u + 1);
            },
            { wait: 500 },
          ),
          r = l.run;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('p', {
              style: { marginTop: 16 },
              children: [' Clicked count: ', u, ' '],
            }),
            (0, n.jsx)('button', {
              type: 'button',
              onClick: r,
              children: 'Click fast!',
            }),
          ],
        });
      };
    },
    29588: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, i.useState)(),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, a.useThrottle)(u, { wait: 500 });
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('input', {
              value: u,
              onChange: function (E) {
                return s(E.target.value);
              },
              placeholder: 'Typed value',
              style: { width: 280 },
            }),
            (0, n.jsxs)('p', {
              style: { marginTop: 16 },
              children: ['throttledValue: ', l],
            }),
          ],
        });
      };
    },
    43163: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useToggle)(),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = s.toggle,
          r = s.setLeft,
          E = s.setRight;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('p', { children: ['Effects\uFF1A', ''.concat(u)] }),
            (0, n.jsxs)('p', {
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: l,
                  children: 'Toggle',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: r,
                  style: { margin: '0 8px' },
                  children: 'Toggle False',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: E,
                  children: 'Toggle True',
                }),
              ],
            }),
          ],
        });
      };
    },
    33194: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, a.useToggle)('Hello', 'World'),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = s.toggle,
          r = s.set,
          E = s.setLeft,
          C = s.setRight;
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)('p', { children: ['Effects\uFF1A', u] }),
            (0, n.jsxs)('p', {
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: l,
                  children: 'Toggle',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: function () {
                    return r('Hello');
                  },
                  style: { margin: '0 8px' },
                  children: 'Set Hello',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: function () {
                    return r('World');
                  },
                  children: 'Set World',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: E,
                  style: { margin: '0 8px' },
                  children: 'Set Left',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: C,
                  children: 'Set Right',
                }),
              ],
            }),
          ],
        });
      };
    },
    64076: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(91831),
        a = e(53271),
        n = e(75271),
        t = e(52676),
        _ = function () {
          return (
            (0, i.useUnmount)(function () {
              a.ZP.info('unmount');
            }),
            (0, t.jsx)('p', { children: 'Hello World!' })
          );
        };
      o.default = function () {
        var u = (0, i.useBoolean)(!0),
          s = d()(u, 2),
          l = s[0],
          r = s[1].toggle;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)('button', {
              type: 'button',
              onClick: r,
              children: l ? 'unmount' : 'mount',
            }),
            l && (0, t.jsx)(_, {}),
          ],
        });
      };
    },
    61369: function (m, o, e) {
      e.r(o);
      var c = e(48305),
        d = e.n(c),
        i = e(75271),
        a = e(91831),
        n = e(52676);
      o.default = function () {
        var t = (0, i.useState)(0),
          _ = d()(t, 2),
          u = _[0],
          s = _[1],
          l = (0, i.useState)(0),
          r = d()(l, 2),
          E = r[0],
          C = r[1],
          h = (0, i.useState)(0),
          T = d()(h, 2),
          D = T[0],
          O = T[1];
        return (
          (0, i.useEffect)(
            function () {
              C(function (P) {
                return P + 1;
              });
            },
            [u],
          ),
          (0, a.useUpdateEffect)(
            function () {
              return (
                O(function (P) {
                  return P + 1;
                }),
                function () {}
              );
            },
            [u],
          ),
          (0, n.jsxs)('div', {
            children: [
              (0, n.jsxs)('p', { children: ['effectCount: ', E] }),
              (0, n.jsxs)('p', { children: ['updateEffectCount: ', D] }),
              (0, n.jsx)('p', {
                children: (0, n.jsx)('button', {
                  type: 'button',
                  onClick: function () {
                    return s(function (M) {
                      return M + 1;
                    });
                  },
                  children: 'reRender',
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
