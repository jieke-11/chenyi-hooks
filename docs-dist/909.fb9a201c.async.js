'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [909],
  {
    35558: function (te, U, M) {
      M.d(U, {
        r: function () {
          return P;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (j, N, x) =>
          N in j
            ? h(j, N, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: x,
              })
            : (j[N] = x),
        Z = (j, N) => {
          for (var x in N || (N = {})) T.call(N, x) && b(j, x, N[x]);
          if (p) for (var x of p(N)) B.call(N, x) && b(j, x, N[x]);
          return j;
        };
      const P = (j) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, j),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          }),
        );
      var S =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==';
    },
    90649: function (te, U, M) {
      M.r(U),
        M.d(U, {
          default: function () {
            return O;
          },
        });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (o, l, s) =>
          l in o
            ? h(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (o[l] = s),
        Z = (o, l) => {
          for (var s in l || (l = {})) T.call(l, s) && b(o, s, l[s]);
          if (p) for (var s of p(l)) B.call(l, s) && b(o, s, l[s]);
          return o;
        };
      const P = (o) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        j = M(15020),
        N = M(55483),
        x = M(78792),
        Q = M(79452),
        g = M(47075),
        d = M(22502),
        u = M(80375),
        v = M(74459),
        A = M(60454),
        I = M(77709);
      function D(o, l) {
        return G(o) || W(o, l) || k(o, l) || H();
      }
      function H() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function k(o, l) {
        if (o) {
          if (typeof o == 'string') return R(o, l);
          var s = Object.prototype.toString.call(o).slice(8, -1);
          if (
            (s === 'Object' && o.constructor && (s = o.constructor.name),
            s === 'Map' || s === 'Set')
          )
            return Array.from(o);
          if (
            s === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
          )
            return R(o, l);
        }
      }
      function R(o, l) {
        (l == null || l > o.length) && (l = o.length);
        for (var s = 0, Y = new Array(l); s < l; s++) Y[s] = o[s];
        return Y;
      }
      function W(o, l) {
        var s =
          o == null
            ? null
            : (typeof Symbol != 'undefined' && o[Symbol.iterator]) ||
              o['@@iterator'];
        if (s != null) {
          var Y,
            F,
            J,
            f,
            r = [],
            t = !0,
            a = !1;
          try {
            if (((J = (s = s.call(o)).next), l === 0)) {
              if (Object(s) !== s) return;
              t = !1;
            } else
              for (
                ;
                !(t = (Y = J.call(s)).done) &&
                (r.push(Y.value), r.length !== l);
                t = !0
              );
          } catch (E) {
            (a = !0), (F = E);
          } finally {
            try {
              if (!t && s.return != null && ((f = s.return()), Object(f) !== f))
                return;
            } finally {
              if (a) throw F;
            }
          }
          return r;
        }
      }
      function G(o) {
        if (Array.isArray(o)) return o;
      }
      var K = function () {
          var l = (0, N.YB)(),
            s = (0, N.pC)(),
            Y = (0, N.tx)(),
            F = (0, N.TH)(),
            J = F.hash,
            f = F.pathname,
            r = (0, N.WF)(),
            t = r.loading,
            a = r.hostname,
            E = (0, e.useState)(!1),
            w = D(E, 2),
            C = w[0],
            i = w[1],
            c = (0, N.eL)(),
            n = c.frontmatter,
            z = n.sidebar !== !1 && (Y == null ? void 0 : Y.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var V = J.replace('#', '');
                V &&
                  setTimeout(function () {
                    var _ = document.getElementById(decodeURIComponent(V));
                    _ && (0, j.Z)(_.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [t, J],
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': C || void 0,
                onClick: function () {
                  return i(!1);
                },
              },
              e.createElement(
                N.ql,
                null,
                e.createElement('html', { lang: l.locale.replace(/-.+$/, '') }),
                n.title && e.createElement('title', null, n.title),
                n.title &&
                  e.createElement('meta', {
                    property: 'og:title',
                    content: n.title,
                  }),
                n.description &&
                  e.createElement('meta', {
                    name: 'description',
                    content: n.description,
                  }),
                n.description &&
                  e.createElement('meta', {
                    property: 'og:description',
                    content: n.description,
                  }),
                n.keywords &&
                  e.createElement('meta', {
                    name: 'keywords',
                    content: n.keywords.join(','),
                  }),
                n.keywords &&
                  n.keywords.map(function (V) {
                    return e.createElement('meta', {
                      key: V,
                      property: 'article:tag',
                      content: V,
                    });
                  }),
                a && e.createElement('link', { rel: 'canonical', href: a + f }),
              ),
              e.createElement(u.Z, null),
              e.createElement(v.Z, null),
              e.createElement(g.Z, null),
              z &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (_) {
                        _.stopPropagation(),
                          i(function (X) {
                            return !X;
                          });
                      },
                    },
                    e.createElement(P, null),
                    l.formatMessage({ id: 'layout.sidebar.btn' }),
                  ),
                ),
              e.createElement(
                'main',
                null,
                z && e.createElement(A.Z, null),
                e.createElement(
                  x.Z,
                  null,
                  e.createElement('article', null, s),
                  e.createElement(Q.Z, null),
                  e.createElement(d.Z, null),
                ),
                n.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(I.Z, null),
                  ),
              ),
            )
          );
        },
        O = K;
    },
    70124: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return g;
        },
      });
      var e = M(55483),
        h = M(75271);
      function p(d, u) {
        return P(d) || Z(d, u) || B(d, u) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function B(d, u) {
        if (d) {
          if (typeof d == 'string') return b(d, u);
          var v = Object.prototype.toString.call(d).slice(8, -1);
          if (
            (v === 'Object' && d.constructor && (v = d.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(d);
          if (
            v === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
          )
            return b(d, u);
        }
      }
      function b(d, u) {
        (u == null || u > d.length) && (u = d.length);
        for (var v = 0, A = new Array(u); v < u; v++) A[v] = d[v];
        return A;
      }
      function Z(d, u) {
        var v =
          d == null
            ? null
            : (typeof Symbol != 'undefined' && d[Symbol.iterator]) ||
              d['@@iterator'];
        if (v != null) {
          var A,
            I,
            D,
            H,
            k = [],
            R = !0,
            W = !1;
          try {
            if (((D = (v = v.call(d)).next), u === 0)) {
              if (Object(v) !== v) return;
              R = !1;
            } else
              for (
                ;
                !(R = (A = D.call(v)).done) &&
                (k.push(A.value), k.length !== u);
                R = !0
              );
          } catch (G) {
            (W = !0), (I = G);
          } finally {
            try {
              if (!R && v.return != null && ((H = v.return()), Object(H) !== H))
                return;
            } finally {
              if (W) throw I;
            }
          }
          return k;
        }
      }
      function P(d) {
        if (Array.isArray(d)) return d;
      }
      var S = function () {
          return h.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            h.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            }),
          );
        },
        j = function () {
          return h.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            h.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            }),
          );
        },
        N = function () {
          return h.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            h.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            }),
          );
        },
        x = { light: j, dark: S, auto: N },
        Q = function () {
          var u = (0, e.WF)(),
            v = u.themeConfig.prefersColor.default,
            A = (0, e.YB)(),
            I = (0, e.OI)(),
            D = p(I, 3),
            H = D[1],
            k = H === void 0 ? v : H,
            R = D[2],
            W = x[k];
          return h.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': A.formatMessage({
                id: 'header.color.mode.'.concat(k),
              }),
              'data-dumi-tooltip-bottom': !0,
            },
            W && h.createElement(W, null),
            h.createElement(
              'select',
              {
                onChange: function (K) {
                  return R(K.target.value);
                },
                value: k,
                onClick: function (K) {
                  return K.stopPropagation();
                },
              },
              ['light', 'dark', 'auto'].map(function (G) {
                return h.createElement(
                  'option',
                  { value: G, key: G },
                  A.formatMessage({ id: 'header.color.mode.'.concat(G) }),
                );
              }),
            ),
          );
        },
        g = Q;
    },
    24037: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return O;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (o, l, s) =>
          l in o
            ? h(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (o[l] = s),
        Z = (o, l) => {
          for (var s in l || (l = {})) T.call(l, s) && b(o, s, l[s]);
          if (p) for (var s of p(l)) B.call(l, s) && b(o, s, l[s]);
          return o;
        };
      const P = (o) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODcyIDQ3NEgyODYuOWwzNTAuMi0zMDRjNS42LTQuOSAyLjItMTQtNS4yLTE0aC04OC41Yy0zLjkgMC03LjYgMS40LTEwLjUgMy45TDE1NSA0ODcuOGEzMS45NiAzMS45NiAwIDAgMCAwIDQ4LjNMNTM1LjEgODY2YzEuNSAxLjMgMy4zIDIgNS4yIDJoOTEuNWM3LjQgMCAxMC44LTkuMiA1LjItMTRMMjg2LjkgNTUwSDg3MmM0LjQgMCA4LTMuNiA4LTh2LTYwYzAtNC40LTMuNi04LTgtOHoiLz48L3N2Zz4=',
        j = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        g = (o, l, s) =>
          l in o
            ? j(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (o[l] = s),
        d = (o, l) => {
          for (var s in l || (l = {})) x.call(l, s) && g(o, s, l[s]);
          if (N) for (var s of N(l)) Q.call(l, s) && g(o, s, l[s]);
          return o;
        };
      const u = (o) =>
        e.createElement(
          'svg',
          d({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          }),
          e.createElement('path', {
            d: 'M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik02ODYuNyA2MzguNiA1NDQuMSA1MzUuNVYyODhjMC00LjQtMy42LTgtOC04SDQ4OGMtNC40IDAtOCAzLjYtOCA4djI3NS40YzAgMi42IDEuMiA1IDMuMyA2LjVsMTY1LjQgMTIwLjZjMy42IDIuNiA4LjYgMS44IDExLjItMS43bDI4LjYtMzljMi42LTMuNyAxLjgtOC43LTEuOC0xMS4yeiIvPjwvc3ZnPg==',
        A = M(23485),
        I = M(55483);
      function D(o, l) {
        return G(o) || W(o, l) || k(o, l) || H();
      }
      function H() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function k(o, l) {
        if (o) {
          if (typeof o == 'string') return R(o, l);
          var s = Object.prototype.toString.call(o).slice(8, -1);
          if (
            (s === 'Object' && o.constructor && (s = o.constructor.name),
            s === 'Map' || s === 'Set')
          )
            return Array.from(o);
          if (
            s === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
          )
            return R(o, l);
        }
      }
      function R(o, l) {
        (l == null || l > o.length) && (l = o.length);
        for (var s = 0, Y = new Array(l); s < l; s++) Y[s] = o[s];
        return Y;
      }
      function W(o, l) {
        var s =
          o == null
            ? null
            : (typeof Symbol != 'undefined' && o[Symbol.iterator]) ||
              o['@@iterator'];
        if (s != null) {
          var Y,
            F,
            J,
            f,
            r = [],
            t = !0,
            a = !1;
          try {
            if (((J = (s = s.call(o)).next), l === 0)) {
              if (Object(s) !== s) return;
              t = !1;
            } else
              for (
                ;
                !(t = (Y = J.call(s)).done) &&
                (r.push(Y.value), r.length !== l);
                t = !0
              );
          } catch (E) {
            (a = !0), (F = E);
          } finally {
            try {
              if (!t && s.return != null && ((f = s.return()), Object(f) !== f))
                return;
            } finally {
              if (a) throw F;
            }
          }
          return r;
        }
      }
      function G(o) {
        if (Array.isArray(o)) return o;
      }
      var K = function () {
          var l = (0, I.TH)(),
            s = l.pathname,
            Y = (0, I.tx)(),
            F = (0, I.WF)(),
            J = F.themeConfig,
            f = (0, I.eL)(),
            r = f.frontmatter,
            t = (0, I.YB)(),
            a = (0, e.useState)(void 0),
            E = D(a, 2),
            w = E[0],
            C = E[1],
            i = (0, e.useState)(void 0),
            c = D(i, 2),
            n = c[0],
            z = c[1],
            V = (0, e.useState)(''),
            _ = D(V, 2),
            X = _[0],
            re = _[1],
            q = (0, e.useState)(''),
            ne = D(q, 2),
            ue = ne[0],
            oe = ne[1],
            ae = J.editLink && r.filename,
            ee = J.lastUpdated && r.lastUpdated;
          return (
            (0, e.useLayoutEffect)(
              function () {
                if (Y) {
                  var $ = Y.reduce(function (se, ge) {
                      return se.concat(ge.children);
                    }, []),
                    ie = $.findIndex(function (se) {
                      return se.link === s;
                    });
                  C($[ie - 1]), z($[ie + 1]);
                }
              },
              [s, Y],
            ),
            (0, e.useLayoutEffect)(
              function () {
                ee &&
                  (re(new Date(r.lastUpdated).toISOString()),
                  oe(
                    new Intl.DateTimeFormat(void 0, {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(r.lastUpdated),
                  ));
              },
              [ee],
            ),
            e.createElement(
              'footer',
              { className: 'dumi-default-content-footer' },
              e.createElement(
                'dl',
                null,
                ee &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(u, null),
                    e.createElement(
                      'span',
                      { className: 'dumi-default-mobile-hidden' },
                      e.createElement(I._H, {
                        id: 'content.footer.last.updated',
                      }),
                    ),
                    e.createElement('time', { dateTime: X }, ue),
                  ),
                ae &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(
                      'a',
                      {
                        target: '_blank',
                        href: ''.concat(
                          t.formatMessage(
                            { id: '$internal.edit.link' },
                            { filename: r.filename },
                          ),
                        ),
                        rel: 'noreferrer',
                      },
                      e.createElement(A.r, null),
                      e.createElement(I._H, {
                        id: 'content.footer.actions.edit',
                      }),
                    ),
                  ),
              ),
              e.createElement(
                'nav',
                null,
                w &&
                  e.createElement(
                    I.rU,
                    { to: w.link, 'data-prev': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(P, null),
                      e.createElement(I._H, {
                        id: 'content.footer.actions.previous',
                      }),
                    ),
                    w.title,
                  ),
                n &&
                  e.createElement(
                    I.rU,
                    { to: n.link, 'data-next': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(I._H, {
                        id: 'content.footer.actions.next',
                      }),
                      e.createElement(P, null),
                    ),
                    n.title,
                  ),
              ),
            )
          );
        },
        O = K;
    },
    95210: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return T;
        },
      });
      var e = M(55483),
        h = M(75271),
        p = function (b) {
          var Z = (0, e.tx)(),
            P = (0, e.WF)(),
            S = P.themeConfig,
            j = (0, e.eL)(),
            N = j.frontmatter;
          return h.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !Z || N.sidebar === !1 || void 0,
              'data-no-footer': S.footer === !1 || void 0,
            },
            b.children,
          );
        },
        T = p;
    },
    59235: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return T;
        },
      });
      var e = M(55483),
        h = M(75271),
        p = function () {
          var b,
            Z = (0, e.eL)(),
            P = Z.frontmatter;
          return !((b = P.features) === null || b === void 0) && b.length
            ? h.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (S) {
                      return P.features.length % S === 0;
                    }) || 3,
                },
                P.features.map(function (S) {
                  var j = S.title,
                    N = S.description,
                    x = S.emoji,
                    Q = S.link,
                    g;
                  return (
                    Q &&
                      (g = /^(\w+:)\/\/|^(mailto|tel):/.test(Q)
                        ? h.createElement(
                            'a',
                            { href: Q, target: '_blank', rel: 'noreferrer' },
                            j,
                          )
                        : h.createElement(e.rU, { to: Q }, j)),
                    h.createElement(
                      'div',
                      { key: j, className: 'dumi-default-features-item' },
                      x && h.createElement('i', null, x),
                      j && h.createElement('h3', null, g || j),
                      N &&
                        h.createElement('p', {
                          dangerouslySetInnerHTML: { __html: N },
                        }),
                    )
                  );
                }),
              )
            : null;
        },
        T = p;
    },
    29031: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return T;
        },
      });
      var e = M(55483),
        h = M(75271),
        p = function () {
          var b = (0, e.WF)(),
            Z = b.themeConfig;
          return Z.footer
            ? h.createElement('div', {
                className: 'dumi-default-footer',
                dangerouslySetInnerHTML: { __html: Z.footer },
              })
            : null;
        },
        T = p;
    },
    9898: function (te, U, M) {
      var e = M(75271),
        h = function () {
          return e.createElement(e.Fragment, null);
        };
      U.Z = h;
    },
    11429: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return f;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (r, t, a) =>
          t in r
            ? h(r, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (r[t] = a),
        Z = (r, t) => {
          for (var a in t || (t = {})) T.call(t, a) && b(r, a, t[a]);
          if (p) for (var a of p(t)) B.call(t, a) && b(r, a, t[a]);
          return r;
        };
      const P = (r) =>
        e.createElement(
          'svg',
          Z({ fillRule: 'evenodd', viewBox: '64 64 896 896' }, r),
          e.createElement('path', {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 0 1 0 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 0 1 0 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 0 1-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 0 1-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7a.169.169 0 0 1-.06-.07.12.12 0 0 1 0-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7a.199.199 0 0 1-.06-.09.12.12 0 0 1 0-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 0 1 .07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 0 1 .07 0z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik03OTkuODYgMTY2LjMxYy4wMiAwIC4wNC4wMi4wOC4wNmw1Ny42OSA1Ny43Yy4wNC4wMy4wNS4wNS4wNi4wOGEuMTIuMTIgMCAwIDEgMCAuMDZjMCAuMDMtLjAyLjA1LS4wNi4wOUw1NjkuOTMgNTEybDI4Ny43IDI4Ny43Yy4wNC4wNC4wNS4wNi4wNi4wOWEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMCAxLS4wNyAwYy0uMDMgMC0uMDUtLjAyLS4wOS0uMDZMNTEyIDU2OS45M2wtMjg3LjcgMjg3LjdjLS4wNC4wNC0uMDYuMDUtLjA5LjA2YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAyIDAtLjA0LS4wMi0uMDgtLjA2bC01Ny42OS01Ny43YS4xNjkuMTY5IDAgMCAxLS4wNi0uMDcuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDMuMDItLjA1LjA2LS4wOUw0NTQuMDcgNTEybC0yODcuNy0yODcuN2EuMTk5LjE5OSAwIDAgMS0uMDYtLjA5LjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMCAxIC4wNyAwYy4wMyAwIC4wNS4wMi4wOS4wNkw1MTIgNDU0LjA3bDI4Ny43LTI4Ny43Yy4wNC0uMDQuMDYtLjA1LjA5LS4wNmEuMTIuMTIgMCAwIDEgLjA3IDB6Ii8+PC9zdmc+',
        j = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        g = (r, t, a) =>
          t in r
            ? j(r, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (r[t] = a),
        d = (r, t) => {
          for (var a in t || (t = {})) x.call(t, a) && g(r, a, t[a]);
          if (N) for (var a of N(t)) Q.call(t, a) && g(r, a, t[a]);
          return r;
        };
      const u = (r) =>
        e.createElement(
          'svg',
          d({ viewBox: '64 64 896 896' }, r),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        A = M(55483),
        I = M(77628),
        D = M(50411),
        H = M(39593),
        k = M(61712),
        R = M(64598),
        W = M(86439),
        G = M(18622),
        K = M(85958);
      function O(r, t) {
        return F(r) || Y(r, t) || l(r, t) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(r, t) {
        if (r) {
          if (typeof r == 'string') return s(r, t);
          var a = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (a === 'Object' && r.constructor && (a = r.constructor.name),
            a === 'Map' || a === 'Set')
          )
            return Array.from(r);
          if (
            a === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return s(r, t);
        }
      }
      function s(r, t) {
        (t == null || t > r.length) && (t = r.length);
        for (var a = 0, E = new Array(t); a < t; a++) E[a] = r[a];
        return E;
      }
      function Y(r, t) {
        var a =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (a != null) {
          var E,
            w,
            C,
            i,
            c = [],
            n = !0,
            z = !1;
          try {
            if (((C = (a = a.call(r)).next), t === 0)) {
              if (Object(a) !== a) return;
              n = !1;
            } else
              for (
                ;
                !(n = (E = C.call(a)).done) &&
                (c.push(E.value), c.length !== t);
                n = !0
              );
          } catch (V) {
            (z = !0), (w = V);
          } finally {
            try {
              if (!n && a.return != null && ((i = a.return()), Object(i) !== i))
                return;
            } finally {
              if (z) throw w;
            }
          }
          return c;
        }
      }
      function F(r) {
        if (Array.isArray(r)) return r;
      }
      var J = function () {
          var t = (0, A.eL)(),
            a = t.frontmatter,
            E = (0, e.useState)(!1),
            w = O(E, 2),
            C = w[0],
            i = w[1],
            c = (0, A.WF)(),
            n = c.themeConfig,
            z = (0, e.useMemo)(
              function () {
                return n.socialLinks
                  ? Object.keys(n.socialLinks)
                      .slice(0, 5)
                      .map(function (V) {
                        return { icon: V, link: n.socialLinks[V] };
                      })
                  : [];
              },
              [n.socialLinks],
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': !!a.hero || void 0,
              'data-mobile-active': C || void 0,
              onClick: function () {
                return i(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(k.Z, null),
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(R.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(G.ZP, null),
                  e.createElement(H.Z, null),
                  e.createElement(W.Z, null),
                  n.prefersColor.switch && e.createElement(I.Z, null),
                  z.map(function (V) {
                    return e.createElement(K.Z, {
                      icon: V.icon,
                      link: V.link,
                      key: V.link,
                    });
                  }),
                  e.createElement(D.Z, null),
                ),
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (_) {
                    _.stopPropagation(),
                      i(function (X) {
                        return !X;
                      });
                  },
                },
                C ? e.createElement(P, null) : e.createElement(u, null),
              ),
            ),
          );
        },
        f = J;
    },
    28365: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return p;
        },
      });
      var e = M(75271),
        h = function (B) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, B.children),
          );
        },
        p = h;
    },
    32288: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return B;
        },
      });
      var e = M(55483),
        h = M(5487),
        p = M(75271),
        T = function () {
          var Z,
            P = (0, e.eL)(),
            S = P.frontmatter;
          return 'hero' in S
            ? p.createElement(
                'div',
                { className: 'dumi-default-hero' },
                S.hero.title && p.createElement(h.Z, null, S.hero.title),
                S.hero.description &&
                  p.createElement('p', {
                    dangerouslySetInnerHTML: { __html: S.hero.description },
                  }),
                !!(
                  !((Z = S.hero.actions) === null || Z === void 0) && Z.length
                ) &&
                  p.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    S.hero.actions.map(function (j) {
                      var N = j.text,
                        x = j.link;
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(x)
                        ? p.createElement(
                            'a',
                            {
                              href: x,
                              target: '_blank',
                              rel: 'noreferrer',
                              key: N,
                            },
                            N,
                          )
                        : p.createElement(e.rU, { key: N, to: x }, N);
                    }),
                  ),
              )
            : null;
        },
        B = T;
    },
    90148: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return Q;
        },
      });
      var e = M(35558),
        h = M(55483),
        p = M(75271);
      function T(g, d) {
        return S(g) || P(g, d) || b(g, d) || B();
      }
      function B() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function b(g, d) {
        if (g) {
          if (typeof g == 'string') return Z(g, d);
          var u = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (u === 'Object' && g.constructor && (u = g.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(g);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return Z(g, d);
        }
      }
      function Z(g, d) {
        (d == null || d > g.length) && (d = g.length);
        for (var u = 0, v = new Array(d); u < d; u++) v[u] = g[u];
        return v;
      }
      function P(g, d) {
        var u =
          g == null
            ? null
            : (typeof Symbol != 'undefined' && g[Symbol.iterator]) ||
              g['@@iterator'];
        if (u != null) {
          var v,
            A,
            I,
            D,
            H = [],
            k = !0,
            R = !1;
          try {
            if (((I = (u = u.call(g)).next), d === 0)) {
              if (Object(u) !== u) return;
              k = !1;
            } else
              for (
                ;
                !(k = (v = I.call(u)).done) &&
                (H.push(v.value), H.length !== d);
                k = !0
              );
          } catch (W) {
            (R = !0), (A = W);
          } finally {
            try {
              if (!k && u.return != null && ((D = u.return()), Object(D) !== D))
                return;
            } finally {
              if (R) throw A;
            }
          }
          return H;
        }
      }
      function S(g) {
        if (Array.isArray(g)) return g;
      }
      function j(g) {
        var d = g.pathname,
          u = g.current,
          v = g.target,
          A =
            'base' in u
              ? d.replace(u.base.replace(/\/$/, ''), '') || '/'
              : d.replace(new RegExp(''.concat(u.suffix, '$')), '');
        return 'base' in v
          ? ''
              .concat(v.base.replace(/\/$/, ''))
              .concat(A)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(A).concat(v.suffix);
      }
      var N = function (d) {
          var u = d.locale,
            v = d.current,
            A = (0, h.TH)(),
            I = A.pathname,
            D = (0, p.useState)(function () {
              return j({ pathname: I, current: v, target: u });
            }),
            H = T(D, 2),
            k = H[0],
            R = H[1];
          return (
            (0, p.useEffect)(
              function () {
                R(j({ pathname: I, current: v, target: u }));
              },
              [I, v.id, u.id],
            ),
            p.createElement(
              h.rU,
              { className: 'dumi-default-lang-switch', to: k },
              u.name,
            )
          );
        },
        x = function () {
          var d = (0, h.WF)(),
            u = d.locales,
            v = (0, h.YB)(),
            A = v.locale,
            I = (0, h.bU)();
          return u.length <= 1
            ? null
            : u.length > 2
            ? p.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                p.createElement(
                  'select',
                  {
                    defaultValue: A,
                    onChange: function (H) {
                      h.m8.push(
                        j({
                          pathname: h.m8.location.pathname,
                          current: I,
                          target: u.find(function (k) {
                            var R = k.id;
                            return R === H.target.value;
                          }),
                        }),
                      );
                    },
                  },
                  u.map(function (D) {
                    return p.createElement(
                      'option',
                      { key: D.id, value: D.id },
                      D.name,
                    );
                  }),
                ),
                p.createElement(e.r, null),
              )
            : p.createElement(N, {
                locale: u.find(function (D) {
                  var H = D.id;
                  return H !== A;
                }),
                current: I,
              });
        },
        Q = x;
    },
    48942: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return T;
        },
      });
      var e = M(55483),
        h = M(75271),
        p = function () {
          var b = (0, e.WF)(),
            Z = b.themeConfig,
            P = (0, e.bU)();
          return h.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in P ? P.base : '/' },
            Z.logo !== !1 &&
              h.createElement('img', {
                src:
                  Z.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: Z.name,
              }),
            Z.name,
          );
        },
        T = p;
    },
    23174: function (te, U, M) {
      var e = M(75271),
        h = function () {
          return e.createElement(e.Fragment, null);
        };
      U.Z = h;
    },
    59116: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return d;
        },
      });
      var e = M(35558),
        h = M(55483),
        p = M(31542),
        T = M(75271);
      function B() {
        return (
          (B = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var v = 1; v < arguments.length; v++) {
                  var A = arguments[v];
                  for (var I in A)
                    Object.prototype.hasOwnProperty.call(A, I) && (u[I] = A[I]);
                }
                return u;
              }),
          B.apply(this, arguments)
        );
      }
      function b(u, v) {
        return N(u) || j(u, v) || P(u, v) || Z();
      }
      function Z() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function P(u, v) {
        if (u) {
          if (typeof u == 'string') return S(u, v);
          var A = Object.prototype.toString.call(u).slice(8, -1);
          if (
            (A === 'Object' && u.constructor && (A = u.constructor.name),
            A === 'Map' || A === 'Set')
          )
            return Array.from(u);
          if (
            A === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)
          )
            return S(u, v);
        }
      }
      function S(u, v) {
        (v == null || v > u.length) && (v = u.length);
        for (var A = 0, I = new Array(v); A < v; A++) I[A] = u[A];
        return I;
      }
      function j(u, v) {
        var A =
          u == null
            ? null
            : (typeof Symbol != 'undefined' && u[Symbol.iterator]) ||
              u['@@iterator'];
        if (A != null) {
          var I,
            D,
            H,
            k,
            R = [],
            W = !0,
            G = !1;
          try {
            if (((H = (A = A.call(u)).next), v === 0)) {
              if (Object(A) !== A) return;
              W = !1;
            } else
              for (
                ;
                !(W = (I = H.call(A)).done) &&
                (R.push(I.value), R.length !== v);
                W = !0
              );
          } catch (K) {
            (G = !0), (D = K);
          } finally {
            try {
              if (!W && A.return != null && ((k = A.return()), Object(k) !== k))
                return;
            } finally {
              if (G) throw D;
            }
          }
          return R;
        }
      }
      function N(u) {
        if (Array.isArray(u)) return u;
      }
      var x = function (v) {
          var A = v.data,
            I = (0, h.TH)(),
            D = I.pathname,
            H = (0, T.useState)(function () {
              var l;
              return (l = A.children) === null || l === void 0
                ? void 0
                : l.some(function (s) {
                    var Y = s.activePath || s.link;
                    return Y && D.startsWith(Y);
                  });
            }),
            k = b(H, 2),
            R = k[0],
            W = k[1],
            G =
              A.children &&
              T.createElement(
                'button',
                {
                  className: 'dumi-default-navbar-collapse-btn',
                  type: 'button',
                  onClick: function (s) {
                    s.stopPropagation(),
                      W(function (Y) {
                        return !Y;
                      });
                  },
                  'data-collapsed': R || void 0,
                },
                T.createElement(e.r, null),
              ),
            K =
              A.children &&
              T.createElement(
                'ul',
                {
                  className: 'dumi-default-navbar-dropdown',
                  'data-collapsed': R || void 0,
                },
                T.createElement(Q, { data: A.children }),
              ),
            O = A.activePath || A.link,
            o = O && D.startsWith(O) ? { className: 'active' } : {};
          return A.link
            ? T.createElement(
                T.Fragment,
                null,
                T.createElement(h.rU, B({ to: A.link }, o), A.title),
                G,
                K,
              )
            : T.createElement(
                T.Fragment,
                null,
                T.createElement(
                  'span',
                  B(
                    {
                      onClick: function (s) {
                        s.stopPropagation(),
                          W(function (Y) {
                            return !Y;
                          });
                      },
                    },
                    o,
                  ),
                  A.title,
                ),
                G,
                K,
              );
        },
        Q = function (v) {
          var A = v.data;
          return T.createElement(
            T.Fragment,
            null,
            A.map(function (I) {
              return T.createElement(
                'li',
                { key: I.activePath || I.link || I.title },
                I.link && /^(\w+:)\/\/|^(mailto|tel):/.test(I.link)
                  ? T.createElement(
                      'a',
                      { href: I.link, target: '_blank', rel: 'noreferrer' },
                      I.title,
                    )
                  : T.createElement(x, { data: I }),
              );
            }),
          );
        },
        g = function () {
          var v = (0, h.OK)();
          return T.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            T.createElement(Q, { data: v }),
            T.createElement(p.Z, null),
          );
        },
        d = g;
    },
    81816: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return Q;
        },
      });
      var e = M(55483),
        h = M(75271);
      function p(g, d) {
        return P(g) || Z(g, d) || B(g, d) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function B(g, d) {
        if (g) {
          if (typeof g == 'string') return b(g, d);
          var u = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (u === 'Object' && g.constructor && (u = g.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(g);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return b(g, d);
        }
      }
      function b(g, d) {
        (d == null || d > g.length) && (d = g.length);
        for (var u = 0, v = new Array(d); u < d; u++) v[u] = g[u];
        return v;
      }
      function Z(g, d) {
        var u =
          g == null
            ? null
            : (typeof Symbol != 'undefined' && g[Symbol.iterator]) ||
              g['@@iterator'];
        if (u != null) {
          var v,
            A,
            I,
            D,
            H = [],
            k = !0,
            R = !1;
          try {
            if (((I = (u = u.call(g)).next), d === 0)) {
              if (Object(u) !== u) return;
              k = !1;
            } else
              for (
                ;
                !(k = (v = I.call(u)).done) &&
                (H.push(v.value), H.length !== d);
                k = !0
              );
          } catch (W) {
            (R = !0), (A = W);
          } finally {
            try {
              if (!k && u.return != null && ((D = u.return()), Object(D) !== D))
                return;
            } finally {
              if (R) throw A;
            }
          }
          return H;
        }
      }
      function P(g) {
        if (Array.isArray(g)) return g;
      }
      var S = function () {
          return h.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            h.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            }),
          );
        },
        j = function () {
          return h.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            h.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            }),
          );
        },
        N = 'dumi:rtl',
        x = function () {
          var d = (0, h.useState)(!1),
            u = p(d, 2),
            v = u[0],
            A = u[1],
            I = (0, e.WF)(),
            D = I.themeConfig;
          return (
            (0, h.useEffect)(function () {
              localStorage.getItem(N) &&
                (A(!0),
                document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            D.rtl
              ? h.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      v
                        ? (document.documentElement.removeAttribute(
                            'data-direction',
                          ),
                          localStorage.removeItem(N))
                        : (document.documentElement.setAttribute(
                            'data-direction',
                            'rtl',
                          ),
                          localStorage.setItem(N, '1')),
                        A(!v);
                    },
                    'data-dumi-tooltip': v ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  v ? h.createElement(S, null) : h.createElement(j, null),
                )
              : null
          );
        },
        Q = x;
    },
    50686: function (te, U, M) {
      M.d(U, {
        ZP: function () {
          return C;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (i, c, n) =>
          c in i
            ? h(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (i[c] = n),
        Z = (i, c) => {
          for (var n in c || (c = {})) T.call(c, n) && b(i, n, c[n]);
          if (p) for (var n of p(c)) B.call(c, n) && b(i, n, c[n]);
          return i;
        };
      const P = (i) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        j = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        g = (i, c, n) =>
          c in i
            ? j(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (i[c] = n),
        d = (i, c) => {
          for (var n in c || (c = {})) x.call(c, n) && g(i, n, c[n]);
          if (N) for (var n of N(c)) Q.call(c, n) && g(i, n, c[n]);
          return i;
        };
      const u = (i) =>
        e.createElement(
          'svg',
          d({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        A = Object.defineProperty,
        I = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable,
        k = (i, c, n) =>
          c in i
            ? A(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (i[c] = n),
        R = (i, c) => {
          for (var n in c || (c = {})) D.call(c, n) && k(i, n, c[n]);
          if (I) for (var n of I(c)) H.call(c, n) && k(i, n, c[n]);
          return i;
        };
      const W = (i) =>
        e.createElement(
          'svg',
          R({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          }),
        );
      var G =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        K = M(55483),
        O = M(4499),
        o = (0, e.forwardRef)(function (i, c) {
          var n = (0, K.YB)(),
            z = (0, e.useRef)(!1),
            V = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(c, function () {
              return V.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (z.current = !0);
              },
              onCompositionEnd: function (X) {
                (z.current = !1), i.onChange(X.currentTarget.value);
              },
              onFocus: i.onFocus,
              onBlur: i.onBlur,
              onMouseEnter: i.onMouseEnter,
              onKeyDown: function (X) {
                ['ArrowDown', 'ArrowUp'].includes(X.key) && X.preventDefault(),
                  X.key === 'Escape' && !z.current && X.currentTarget.blur();
              },
              onChange: function (X) {
                var re = X.target.value;
                setTimeout(function () {
                  z.current || i.onChange(re);
                }, 1);
              },
              placeholder: n.formatMessage({ id: 'header.search.placeholder' }),
              ref: V,
            })
          );
        }),
        l = function (c) {
          return (
            (0, e.useEffect)(
              function () {
                if (c.visible) document.body.style.overflow = 'hidden';
                else if (document.body.style.overflow) {
                  var n;
                  (document.body.style.overflow = ''),
                    (n = c.onClose) === null || n === void 0 || n.call(c);
                }
              },
              [c.visible],
            ),
            c.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: c.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    c.children,
                  ),
                )
              : null
          );
        },
        s;
      function Y(i, c) {
        return t(i) || r(i, c) || J(i, c) || F();
      }
      function F() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function J(i, c) {
        if (i) {
          if (typeof i == 'string') return f(i, c);
          var n = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (n === 'Object' && i.constructor && (n = i.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(i);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return f(i, c);
        }
      }
      function f(i, c) {
        (c == null || c > i.length) && (c = i.length);
        for (var n = 0, z = new Array(c); n < c; n++) z[n] = i[n];
        return z;
      }
      function r(i, c) {
        var n =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) ||
              i['@@iterator'];
        if (n != null) {
          var z,
            V,
            _,
            X,
            re = [],
            q = !0,
            ne = !1;
          try {
            if (((_ = (n = n.call(i)).next), c === 0)) {
              if (Object(n) !== n) return;
              q = !1;
            } else
              for (
                ;
                !(q = (z = _.call(n)).done) &&
                (re.push(z.value), re.length !== c);
                q = !0
              );
          } catch (ue) {
            (ne = !0), (V = ue);
          } finally {
            try {
              if (!q && n.return != null && ((X = n.return()), Object(X) !== X))
                return;
            } finally {
              if (ne) throw V;
            }
          }
          return re;
        }
      }
      function t(i) {
        if (Array.isArray(i)) return i;
      }
      var a = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (s = navigator) === null || s === void 0
              ? void 0
              : s.platform
            : '',
        ),
        E = function (c) {
          return (
            ['TEXTAREA', 'INPUT'].includes(c.tagName) ||
            c.contentEditable === 'true'
          );
        },
        w = function () {
          var c = (0, e.useState)(!1),
            n = Y(c, 2),
            z = n[0],
            V = n[1],
            _ = (0, e.useRef)(null),
            X = (0, e.useRef)(null),
            re = (0, e.useState)('\u2318'),
            q = Y(re, 2),
            ne = q[0],
            ue = q[1],
            oe = (0, K.OO)(),
            ae = oe.keywords,
            ee = oe.setKeywords,
            $ = oe.result,
            ie = oe.loading,
            se = oe.load,
            ge = (0, e.useState)(!1),
            Me = Y(ge, 2),
            ye = Me[0],
            me = Me[1];
          return (
            (0, e.useEffect)(function () {
              a || ue('Ctrl');
              var le = function (ce) {
                if (
                  (((a ? ce.metaKey : ce.ctrlKey) && ce.key === 'k') ||
                    (ce.key === '/' && !E(ce.target))) &&
                  (ce.preventDefault(), _.current)
                ) {
                  var de = _.current.getBoundingClientRect(),
                    ve = de.top,
                    Ae = de.bottom,
                    Ne = de.left,
                    Le = de.right,
                    L =
                      ve >= 0 &&
                      Ne >= 0 &&
                      Ae <= window.innerHeight &&
                      Le <= window.innerWidth;
                  L
                    ? _.current.focus()
                    : (ee(''),
                      me(!0),
                      setTimeout(function () {
                        var m;
                        (m = X.current) === null || m === void 0 || m.focus();
                      }));
                }
                ce.key === 'Escape' && (ce.preventDefault(), me(!1));
              };
              return (
                document.addEventListener('keydown', le),
                function () {
                  return document.removeEventListener('keydown', le);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(W, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(o, {
                onFocus: function () {
                  V(!0), se();
                },
                onMouseEnter: function () {
                  se();
                },
                onBlur: function () {
                  setTimeout(function () {
                    V(!1);
                  }, 1);
                },
                onChange: function (fe) {
                  return ee(fe);
                },
                ref: _,
              }),
              e.createElement(
                'span',
                { className: 'dumi-default-search-shortcut' },
                ne,
                ' K',
              ),
              ae.trim() &&
                z &&
                !ye &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement(
                    'section',
                    null,
                    e.createElement(O.Z, { data: $, loading: ie }),
                  ),
                ),
              e.createElement(
                l,
                {
                  visible: ye,
                  onMaskClick: function () {
                    me(!1);
                  },
                  onClose: function () {
                    return ee('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(W, {
                    className: 'dumi-default-search-bar-svg',
                  }),
                  e.createElement(o, {
                    onFocus: function () {
                      return V(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        V(!1);
                      }, 1);
                    },
                    onChange: function (fe) {
                      return ee(fe);
                    },
                    ref: X,
                  }),
                ),
                e.createElement(O.Z, {
                  data: $,
                  loading: ie,
                  onItemSelect: function () {
                    me(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(u, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(P, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to navigate',
                      ),
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc',
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to close',
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        C = w;
    },
    43150: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return K;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (O, o, l) =>
          o in O
            ? h(O, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (O[o] = l),
        Z = (O, o) => {
          for (var l in o || (o = {})) T.call(o, l) && b(O, l, o[l]);
          if (p) for (var l of p(o)) B.call(o, l) && b(O, l, o[l]);
          return O;
        };
      const P = (O) =>
        e.createElement(
          'svg',
          Z({ viewBox: '0 0 1024 1024' }, O),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=',
        j = M(15020),
        N = M(55483);
      function x(O, o) {
        return v(O) || u(O, o) || g(O, o) || Q();
      }
      function Q() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function g(O, o) {
        if (O) {
          if (typeof O == 'string') return d(O, o);
          var l = Object.prototype.toString.call(O).slice(8, -1);
          if (
            (l === 'Object' && O.constructor && (l = O.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(O);
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return d(O, o);
        }
      }
      function d(O, o) {
        (o == null || o > O.length) && (o = O.length);
        for (var l = 0, s = new Array(o); l < o; l++) s[l] = O[l];
        return s;
      }
      function u(O, o) {
        var l =
          O == null
            ? null
            : (typeof Symbol != 'undefined' && O[Symbol.iterator]) ||
              O['@@iterator'];
        if (l != null) {
          var s,
            Y,
            F,
            J,
            f = [],
            r = !0,
            t = !1;
          try {
            if (((F = (l = l.call(O)).next), o === 0)) {
              if (Object(l) !== l) return;
              r = !1;
            } else
              for (
                ;
                !(r = (s = F.call(l)).done) &&
                (f.push(s.value), f.length !== o);
                r = !0
              );
          } catch (a) {
            (t = !0), (Y = a);
          } finally {
            try {
              if (!r && l.return != null && ((J = l.return()), Object(J) !== J))
                return;
            } finally {
              if (t) throw Y;
            }
          }
          return f;
        }
      }
      function v(O) {
        if (Array.isArray(O)) return O;
      }
      var A = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        I = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        D = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        H = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        k = { title: A, page: I, content: D, demo: H },
        R = function (o) {
          return e.createElement(
            e.Fragment,
            null,
            o.texts.map(function (l, s) {
              return e.createElement(
                e.Fragment,
                { key: s },
                l.highlighted ? e.createElement('mark', null, l.text) : l.text,
              );
            }),
          );
        },
        W = function (o) {
          var l = (0, e.useCallback)(
              function () {
                var f = 0,
                  r = [];
                return (
                  o.forEach(function (t) {
                    t.title &&
                      r.push({ type: 'title', value: { title: t.title } }),
                      t.hints.forEach(function (a) {
                        r.push({ type: 'hint', activeIndex: f++, value: a });
                      });
                  }),
                  [r, f]
                );
              },
              [o],
            ),
            s = (0, e.useState)(l),
            Y = x(s, 2),
            F = Y[0],
            J = Y[1];
          return (
            (0, e.useEffect)(
              function () {
                J(l);
              },
              [o],
            ),
            F
          );
        },
        G = function (o) {
          var l = W(o.data),
            s = x(l, 2),
            Y = s[0],
            F = s[1],
            J = (0, e.useState)(-1),
            f = x(J, 2),
            r = f[0],
            t = f[1],
            a = (0, N.TH)(),
            E = a.pathname,
            w = function (c) {
              var n;
              (n = o.onItemSelect) === null || n === void 0 || n.call(o, c);
              var z = new URL(c == null ? void 0 : c.link, location.origin);
              (z == null ? void 0 : z.pathname) === E &&
                !z.hash &&
                setTimeout(function () {
                  (0, j.Z)(0, { maxDuration: 300 });
                }, 1);
            };
          (0, e.useEffect)(function () {
            var i = function (n) {
              if (n.key === 'ArrowDown') t((r + 1) % F);
              else if (n.key === 'ArrowUp') t((r + F - 1) % F);
              else if (n.key === 'Enter' && r >= 0) {
                var z = Y.find(function (V) {
                  return V.type === 'hint' && V.activeIndex === r;
                }).value;
                N.m8.push(z.link),
                  w == null || w(z),
                  document.activeElement.blur();
              }
              ['Escape', 'Enter'].includes(n.key) && t(-1);
            };
            return (
              document.addEventListener('keydown', i),
              function () {
                return document.removeEventListener('keydown', i);
              }
            );
          });
          var C = null;
          return (
            o.loading
              ? (C = e.createElement(
                  'div',
                  { className: 'dumi-default-search-empty' },
                  e.createElement(P, null),
                  e.createElement(N._H, { id: 'search.loading' }),
                ))
              : o.data.length
              ? (C = e.createElement(
                  'dl',
                  null,
                  Y.map(function (i, c) {
                    return i.type === 'title'
                      ? e.createElement('dt', { key: String(c) }, i.value.title)
                      : e.createElement(
                          'dd',
                          { key: String(c) },
                          e.createElement(
                            N.rU,
                            {
                              to: i.value.link,
                              'data-active': r === i.activeIndex || void 0,
                              onClick: function () {
                                return w == null ? void 0 : w(i.value);
                              },
                            },
                            e.createElement(k[i.value.type]),
                            e.createElement(
                              'h4',
                              null,
                              e.createElement(R, {
                                texts: i.value.highlightTitleTexts,
                              }),
                            ),
                            e.createElement(
                              'p',
                              null,
                              e.createElement(R, {
                                texts: i.value.highlightTexts,
                              }),
                            ),
                          ),
                        );
                  }),
                ))
              : (C = e.createElement(
                  'div',
                  { className: 'dumi-default-search-empty' },
                  e.createElement(P, null),
                  e.createElement(N._H, { id: 'search.not.found' }),
                )),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return t(-1);
                },
                onMouseDownCapture: function (c) {
                  return c.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              C,
            )
          );
        },
        K = G;
    },
    98832: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return B;
        },
      });
      var e = M(55483),
        h = M(77709),
        p = M(75271),
        T = function () {
          var Z = (0, e.TH)(),
            P = Z.pathname,
            S = (0, e.eL)(),
            j = (0, e.tx)();
          return j
            ? p.createElement(
                'div',
                { className: 'dumi-default-sidebar' },
                j.map(function (N, x) {
                  return p.createElement(
                    'dl',
                    { className: 'dumi-default-sidebar-group', key: String(x) },
                    N.title && p.createElement('dt', null, N.title),
                    N.children.map(function (Q) {
                      return p.createElement(
                        'dd',
                        { key: Q.link },
                        p.createElement(
                          e.OL,
                          { to: Q.link, title: Q.title, end: !0 },
                          Q.title,
                        ),
                        Q.link === P &&
                          S.frontmatter.toc === 'menu' &&
                          p.createElement(h.Z, null),
                      );
                    }),
                  );
                }),
              )
            : null;
        },
        B = T;
    },
    99636: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return Le;
        },
      });
      var e = M(75271),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        b = (L, m, y) =>
          m in L
            ? h(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        Z = (L, m) => {
          for (var y in m || (m = {})) T.call(m, y) && b(L, y, m[y]);
          if (p) for (var y of p(m)) B.call(m, y) && b(L, y, m[y]);
          return L;
        };
      const P = (L) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        j = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        g = (L, m, y) =>
          m in L
            ? j(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        d = (L, m) => {
          for (var y in m || (m = {})) x.call(m, y) && g(L, y, m[y]);
          if (N) for (var y of N(m)) Q.call(m, y) && g(L, y, m[y]);
          return L;
        };
      const u = (L) =>
        e.createElement(
          'svg',
          d({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        A = Object.defineProperty,
        I = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable,
        k = (L, m, y) =>
          m in L
            ? A(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        R = (L, m) => {
          for (var y in m || (m = {})) D.call(m, y) && k(L, y, m[y]);
          if (I) for (var y of I(m)) H.call(m, y) && k(L, y, m[y]);
          return L;
        };
      const W = (L) =>
        e.createElement(
          'svg',
          R({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          }),
        );
      var G =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        K = Object.defineProperty,
        O = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        s = (L, m, y) =>
          m in L
            ? K(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        Y = (L, m) => {
          for (var y in m || (m = {})) o.call(m, y) && s(L, y, m[y]);
          if (O) for (var y of O(m)) l.call(m, y) && s(L, y, m[y]);
          return L;
        };
      const F = (L) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          }),
        );
      var J =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        f = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable,
        E = (L, m, y) =>
          m in L
            ? f(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        w = (L, m) => {
          for (var y in m || (m = {})) t.call(m, y) && E(L, y, m[y]);
          if (r) for (var y of r(m)) a.call(m, y) && E(L, y, m[y]);
          return L;
        };
      const C = (L) =>
        e.createElement(
          'svg',
          w({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          }),
        );
      var i =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        c = Object.defineProperty,
        n = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable,
        _ = (L, m, y) =>
          m in L
            ? c(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        X = (L, m) => {
          for (var y in m || (m = {})) z.call(m, y) && _(L, y, m[y]);
          if (n) for (var y of n(m)) V.call(m, y) && _(L, y, m[y]);
          return L;
        };
      const re = (L) =>
        e.createElement(
          'svg',
          X({ fillRule: 'evenodd', viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M921 912 601.11 445.75l.55.43L890.08 112H793.7L558.74 384 372.15 112H119.37l298.65 435.31-.04-.04L103 912h96.39L460.6 609.38 668.2 912zM333.96 184.73l448.83 654.54H706.4L257.2 184.73z',
          }),
        );
      var q =
          'data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik05MjEgOTEyIDYwMS4xMSA0NDUuNzVsLjU1LjQzTDg5MC4wOCAxMTJINzkzLjdMNTU4Ljc0IDM4NCAzNzIuMTUgMTEySDExOS4zN2wyOTguNjUgNDM1LjMxLS4wNC0uMDRMMTAzIDkxMmg5Ni4zOUw0NjAuNiA2MDkuMzggNjY4LjIgOTEyek0zMzMuOTYgMTg0LjczbDQ0OC44MyA2NTQuNTRINzA2LjRMMjU3LjIgMTg0LjczeiIvPjwvc3ZnPg==',
        ne = Object.defineProperty,
        ue = Object.getOwnPropertySymbols,
        oe = Object.prototype.hasOwnProperty,
        ae = Object.prototype.propertyIsEnumerable,
        ee = (L, m, y) =>
          m in L
            ? ne(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        $ = (L, m) => {
          for (var y in m || (m = {})) oe.call(m, y) && ee(L, y, m[y]);
          if (ue) for (var y of ue(m)) ae.call(m, y) && ee(L, y, m[y]);
          return L;
        };
      const ie = (L) =>
        e.createElement(
          'svg',
          $({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          }),
        );
      var se =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        ge = Object.defineProperty,
        Me = Object.getOwnPropertySymbols,
        ye = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        le = (L, m, y) =>
          m in L
            ? ge(L, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y,
              })
            : (L[m] = y),
        fe = (L, m) => {
          for (var y in m || (m = {})) ye.call(m, y) && le(L, y, m[y]);
          if (Me) for (var y of Me(m)) me.call(m, y) && le(L, y, m[y]);
          return L;
        };
      const ce = (L) =>
        e.createElement(
          'svg',
          fe({ viewBox: '64 64 896 896' }, L),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          }),
        );
      var de =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        ve = M(83530),
        Ae = {
          github: u,
          weibo: C,
          twitter: re,
          x: re,
          gitlab: W,
          facebook: P,
          zhihu: ce,
          yuque: ie,
          linkedin: F,
        },
        Ne = function (m) {
          var y = m.icon,
            he = m.link,
            Ie = (0, ve.Z)(),
            je = (0, e.useMemo)(
              function () {
                return { Icon: Ae[y], link: he };
              },
              [y, he],
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': Ie.formatMessage({
                id: 'header.social.'.concat(y),
              }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: je.link,
              rel: 'noreferrer',
            },
            e.createElement(je.Icon, null),
          );
        },
        Le = Ne;
    },
    17125: function (te, U, M) {
      M.d(U, {
        Z: function () {
          return J;
        },
      });
      var e = M(75271),
        h = function (r) {
          var t = null,
            a = function (w) {
              return function () {
                r.apply(void 0, w);
              };
            };
          return function () {
            t && cancelAnimationFrame(t);
            for (var E = arguments.length, w = new Array(E), C = 0; C < E; C++)
              w[C] = arguments[C];
            t = requestAnimationFrame(a(w));
          };
        };
      function p(f, r) {
        for (var t = 0; t < r.length; t++) {
          var a = r[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(f, a.key, a);
        }
      }
      function T(f, r, t) {
        return r && p(f.prototype, r), t && p(f, t), f;
      }
      function B(f, r) {
        (f.prototype = Object.create(r.prototype)),
          (f.prototype.constructor = f),
          b(f, r);
      }
      function b(f, r) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (a, E) {
              return (a.__proto__ = E), a;
            }),
          b(f, r)
        );
      }
      var Z = function () {},
        P = null,
        S = null,
        j = null,
        N = function (r) {
          var t,
            a = useRef();
          useEffect(
            function () {
              a.current = new j({
                rootEl: r == null ? void 0 : r.rootEl,
                targetEl: r == null ? void 0 : r.targetEl,
              });
            },
            [r],
          );
          var E = useState(
              ((t = a.current) == null ? void 0 : t.getProgress()) || 0,
            ),
            w = E[0],
            C = E[1],
            i = useCallback(function () {
              var n;
              C(((n = a.current) == null ? void 0 : n.getProgress()) || 0);
            }, []),
            c = useCallback(
              h(function () {
                i();
              }),
              [],
            );
          return (
            useEffect(
              function () {
                var n;
                return (
                  (n = a.current) != null &&
                    n.rootSelector &&
                    a.current.rootSelector.addEventListener('scroll', c),
                  window.addEventListener('resize', c),
                  i(),
                  function () {
                    var z;
                    (z = a.current) != null &&
                      z.rootSelector &&
                      a.current.rootSelector.removeEventListener('scroll', c),
                      window.removeEventListener('resize', c);
                  }
                );
              },
              [i, c],
            ),
            { value: w }
          );
        },
        x = function (r) {
          var t = r.targetEl,
            a = r.rootEl,
            E = r.children,
            w = N({ targetEl: t, rootEl: a });
          return E(w);
        },
        Q = function () {},
        g = (function (f) {
          B(r, f);
          function r(a) {
            var E;
            return (E = f.call(this) || this), (E.el = a), E;
          }
          var t = r.prototype;
          return (
            (t.isScrolledToBottom = function () {
              return this.scrollTop + this.outerHeight >= this.scrollHeight;
            }),
            (t.registerScrollEvent = function (E) {
              this.el.addEventListener('scroll', E);
            }),
            (t.unregisterScrollEvent = function (E) {
              this.el.removeEventListener('scroll', E);
            }),
            (r.create = function (E) {
              var w = document.querySelector(E);
              if (!w) throw new Error('element is not found.');
              return new r(w);
            }),
            T(r, [
              {
                key: 'top',
                get: function () {
                  return this.el.getBoundingClientRect().top;
                },
              },
              {
                key: 'outerHeight',
                get: function () {
                  return this.el.getBoundingClientRect().height;
                },
              },
              {
                key: 'scrollTop',
                get: function () {
                  return this.el.scrollTop;
                },
              },
              {
                key: 'scrollHeight',
                get: function () {
                  return this.el.scrollHeight;
                },
              },
            ]),
            r
          );
        })(Q),
        d = (function (f) {
          B(r, f);
          function r() {
            return f.apply(this, arguments) || this;
          }
          var t = r.prototype;
          return (
            (t.isScrolledToBottom = function () {
              return this.scrollTop + this.outerHeight >= this.scrollHeight;
            }),
            (t.registerScrollEvent = function (E) {
              document.addEventListener('scroll', E);
            }),
            (t.unregisterScrollEvent = function (E) {
              document.removeEventListener('scroll', E);
            }),
            (r.create = function () {
              return new r();
            }),
            T(r, [
              {
                key: 'outerHeight',
                get: function () {
                  return window.innerHeight;
                },
              },
              {
                key: 'scrollTop',
                get: function () {
                  return document.documentElement.scrollTop;
                },
              },
              {
                key: 'scrollHeight',
                get: function () {
                  return document.documentElement.scrollHeight;
                },
              },
            ]),
            r
          );
        })(Q),
        u = (function () {
          function f() {}
          return (
            (f.create = function (t) {
              return t ? g.create(t) : d.create();
            }),
            f
          );
        })(),
        v = function (r) {
          var t = r.sectionRefs,
            a = r.rootSelector,
            E = r.offset,
            w = E === void 0 ? 0 : E,
            C = (0, e.useRef)(null);
          (0, e.useEffect)(
            function () {
              C.current = u.create(a);
            },
            [a],
          );
          var i = (0, e.useCallback)(
              function () {
                return C.current ? C.current.isScrolledToBottom() : !1;
              },
              [C],
            ),
            c = (0, e.useCallback)(
              function (q) {
                if (!C.current) return !1;
                var ne = C.current.scrollTop,
                  ue = ne + C.current.outerHeight,
                  oe = q.getBoundingClientRect(),
                  ae =
                    C.current instanceof g
                      ? ne + oe.top - C.current.top + w
                      : ne + oe.top + w,
                  ee = ae + oe.height;
                return [ae < ue, ee > ne].every(function ($) {
                  return $;
                });
              },
              [C, w],
            ),
            n = (0, e.useCallback)(
              function () {
                return t.map(function (q) {
                  return q.current ? c(q.current) : !1;
                });
              },
              [c, t],
            ),
            z = (0, e.useState)([]),
            V = z[0],
            _ = z[1],
            X = (0, e.useMemo)(
              function () {
                return V.findIndex(function (q) {
                  return q;
                });
              },
              [V],
            ),
            re = (0, e.useCallback)(
              function () {
                var q = i()
                  ? [].concat(
                      new Array(t.length - 1).fill(!1).map(function (ne) {
                        return ne;
                      }),
                      [!0],
                    )
                  : n();
                _(q);
              },
              [n, i, t],
            );
          return (
            (0, e.useEffect)(
              function () {
                return (
                  re(),
                  C.current && C.current.registerScrollEvent(re),
                  function () {
                    C.current && C.current.unregisterScrollEvent(re);
                  }
                );
              },
              [re],
            ),
            { elementsStatusInViewport: V, currentElementIndexInViewport: X }
          );
        },
        A = function (r) {
          var t = r.children,
            a = r.sectionRefs,
            E = r.rootSelector,
            w = r.offset,
            C = v({ sectionRefs: a, rootSelector: E, offset: w }),
            i = C.elementsStatusInViewport,
            c = C.currentElementIndexInViewport;
          return t({
            elementsStatusInViewport: i,
            currentElementIndexInViewport: c,
          });
        },
        I = function (r) {
          var t = this,
            a = r.currentPage,
            E = r.totalPage,
            w = r.middlePagesSiblingCount,
            C = w === void 0 ? 2 : w,
            i = r.edgePageCount,
            c = i === void 0 ? 2 : i;
          (this.getAllPages = function () {
            return []
              .concat(Array(t.totalPage))
              .fill(1)
              .map(function (n, z) {
                return z + 1;
              });
          }),
            (this.getMiddlePageCount = function () {
              return t.middlePagesSiblingCount * 2 + 1;
            }),
            (this.isReachedToFirst = function () {
              return t.currentPage <= t.middlePagesSiblingCount;
            }),
            (this.isReachedToLast = function () {
              return t.currentPage + t.middlePagesSiblingCount >= t.totalPage;
            }),
            (this.getAllPreviousPages = function () {
              return t.getAllPages().slice(0, t.getMiddlePages()[0] - 1);
            }),
            (this.getAllNextPages = function () {
              var n = t.getAllPages(),
                z = t.getMiddlePages();
              return n.slice(z[z.length - 1], n[n.length]);
            }),
            (this.hasPreviousPage = function () {
              return t.currentPage > 1;
            }),
            (this.hasNextPage = function () {
              return t.totalPage > t.currentPage;
            }),
            (this.getMiddlePages = function () {
              var n = t.getAllPages(),
                z = t.getMiddlePageCount();
              return t.isReachedToFirst()
                ? n.slice(0, z)
                : t.isReachedToLast()
                ? n.slice(-z)
                : n.slice(
                    t.currentPage - t.middlePagesSiblingCount - 1,
                    t.currentPage + t.middlePagesSiblingCount,
                  );
            }),
            (this.getPreviousPages = function () {
              return t.isReachedToFirst()
                ? []
                : t.getAllPreviousPages().length < 1
                ? []
                : t
                    .getAllPages()
                    .slice(0, t.edgePageCount)
                    .filter(function (n) {
                      return !t.getMiddlePages().includes(n);
                    });
            }),
            (this.getNextPages = function () {
              if (t.isReachedToLast()) return [];
              if (t.getAllNextPages().length < 1) return [];
              var n = t.getAllPages();
              return n
                .slice(n.length - t.edgePageCount, n.length)
                .filter(function (z) {
                  return !t.getMiddlePages().includes(z);
                });
            }),
            (this.isPreviousTruncable = function () {
              return (
                t.getAllPreviousPages().filter(function (n) {
                  return (
                    !t.getPreviousPages().includes(n) &&
                    !t.getMiddlePages().includes(n)
                  );
                }).length > 0
              );
            }),
            (this.isNextTruncable = function () {
              return (
                t.getAllNextPages().filter(function (n) {
                  return (
                    !t.getNextPages().includes(n) &&
                    !t.getMiddlePages().includes(n)
                  );
                }).length > 0
              );
            }),
            (this.currentPage = a),
            (this.totalPage = E),
            (this.middlePagesSiblingCount = C),
            (this.edgePageCount = c);
        },
        D = 2,
        H = 2,
        k = function (r) {
          var t = r.totalPage,
            a = r.currentPage,
            E = r.middlePagesSiblingCount,
            w = E === void 0 ? D : E,
            C = r.edgePageCount,
            i = C === void 0 ? H : C,
            c = useMemo(
              function () {
                return new I({
                  totalPage: t,
                  currentPage: a,
                  middlePagesSiblingCount: w,
                  edgePageCount: i,
                });
              },
              [t, a, w, i],
            );
          return {
            getMiddlePages: c.getMiddlePages,
            hasPreviousPage: c.hasPreviousPage,
            hasNextPage: c.hasNextPage,
            getPreviousPages: c.getPreviousPages,
            getNextPages: c.getNextPages,
            isPreviousTruncable: c.isPreviousTruncable,
            isNextTruncable: c.isNextTruncable,
            totalPage: t,
            currentPage: a,
          };
        },
        R = function (r) {
          var t = r.children,
            a = r.totalPage,
            E = r.currentPage,
            w = r.middlePagesSiblingCount,
            C = r.edgePageCount,
            i = k({
              totalPage: a,
              currentPage: E,
              middlePagesSiblingCount: w,
              edgePageCount: C,
            });
          return t(i);
        },
        W = M(55483);
      function G() {
        return (
          (G = Object.assign
            ? Object.assign.bind()
            : function (f) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (f[a] = t[a]);
                }
                return f;
              }),
          G.apply(this, arguments)
        );
      }
      function K(f, r) {
        return Y(f) || s(f, r) || o(f, r) || O();
      }
      function O() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function o(f, r) {
        if (f) {
          if (typeof f == 'string') return l(f, r);
          var t = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (t === 'Object' && f.constructor && (t = f.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(f);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return l(f, r);
        }
      }
      function l(f, r) {
        (r == null || r > f.length) && (r = f.length);
        for (var t = 0, a = new Array(r); t < r; t++) a[t] = f[t];
        return a;
      }
      function s(f, r) {
        var t =
          f == null
            ? null
            : (typeof Symbol != 'undefined' && f[Symbol.iterator]) ||
              f['@@iterator'];
        if (t != null) {
          var a,
            E,
            w,
            C,
            i = [],
            c = !0,
            n = !1;
          try {
            if (((w = (t = t.call(f)).next), r === 0)) {
              if (Object(t) !== t) return;
              c = !1;
            } else
              for (
                ;
                !(c = (a = w.call(t)).done) &&
                (i.push(a.value), i.length !== r);
                c = !0
              );
          } catch (z) {
            (n = !0), (E = z);
          } finally {
            try {
              if (!c && t.return != null && ((C = t.return()), Object(C) !== C))
                return;
            } finally {
              if (n) throw E;
            }
          }
          return i;
        }
      }
      function Y(f) {
        if (Array.isArray(f)) return f;
      }
      var F = function () {
          var r = (0, W.TH)(),
            t = r.pathname,
            a = r.search,
            E = r.hash,
            w = (0, W.eL)(),
            C = (0, W.zh)(),
            i = (0, W.WF)(),
            c = i.loading,
            n = (0, e.useRef)(0),
            z = (0, e.useState)([]),
            V = K(z, 2),
            _ = V[0],
            X = V[1],
            re = (0, e.useState)(0),
            q = K(re, 2),
            ne = q[0],
            ue = q[1],
            oe = e.useMemo(
              function () {
                var ae = w.toc;
                return (
                  C && (ae = C.toc),
                  ae.filter(function (ee) {
                    var $ = ee.depth;
                    return $ > 1 && $ < 4;
                  })
                );
              },
              [w, C],
            );
          return (
            (0, e.useEffect)(
              function () {
                if (!c) {
                  var ae = oe.map(function (ee) {
                    var $ = ee.id;
                    return { current: document.getElementById($) };
                  });
                  X(ae);
                }
              },
              [t, a, c, oe],
            ),
            (0, e.useEffect)(
              function () {
                if (_.length > 0) {
                  var ae = document.querySelector('.dumi-default-header');
                  ue(ae ? ae.clientHeight : 0);
                }
              },
              [_],
            ),
            _.length
              ? e.createElement(
                  A,
                  { sectionRefs: _, offset: -ne },
                  function (ae) {
                    var ee = ae.currentElementIndexInViewport;
                    return (
                      ee > -1 && (n.current = ee),
                      e.createElement(
                        'ul',
                        { className: 'dumi-default-toc' },
                        oe
                          .filter(function ($) {
                            var ie = $.depth;
                            return ie > 1 && ie < 4;
                          })
                          .map(function ($, ie) {
                            var se = ''
                                .concat(a, '#')
                                .concat(encodeURIComponent($.id)),
                              ge = ee > -1 ? ee : n.current;
                            return e.createElement(
                              'li',
                              { key: $.id, 'data-depth': $.depth },
                              e.createElement(
                                W.rU,
                                G(
                                  {
                                    to: se,
                                    onClickCapture: function () {
                                      decodeURIComponent(E).slice(1) === $.id &&
                                        W.m8.replace(''.concat(t).concat(a));
                                    },
                                    title: $.title,
                                  },
                                  ge === ie ? { className: 'active' } : {},
                                ),
                                $.title,
                              ),
                            );
                          }),
                      )
                    );
                  },
                )
              : null
          );
        },
        J = F;
    },
    15020: function (te, U) {
      var M = function (P, S, j, N) {
        function x(Q) {
          return Q instanceof j
            ? Q
            : new j(function (g) {
                g(Q);
              });
        }
        return new (j || (j = Promise))(function (Q, g) {
          function d(A) {
            try {
              v(N.next(A));
            } catch (I) {
              g(I);
            }
          }
          function u(A) {
            try {
              v(N.throw(A));
            } catch (I) {
              g(I);
            }
          }
          function v(A) {
            A.done ? Q(A.value) : x(A.value).then(d, u);
          }
          v((N = N.apply(P, S || [])).next());
        });
      };
      function e(P) {
        let S = 0,
          j = 0,
          N = P;
        do
          (S += N.offsetTop || 0),
            (j += N.offsetLeft || 0),
            (N = N.offsetParent);
        while (N);
        return { top: S, left: j };
      }
      class h {
        constructor(S) {
          this.element = S;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(S, j) {
          return e(S).left - e(j).left;
        }
        getVerticalElementScrollOffset(S, j) {
          return e(S).top - e(j).top;
        }
        scrollTo(S, j) {
          (this.element.scrollLeft = S), (this.element.scrollTop = j);
        }
      }
      class p {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(S) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) +
            S.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(S) {
          return (
            (window.scrollY || document.documentElement.scrollTop) +
            S.getBoundingClientRect().top
          );
        }
        scrollTo(S, j) {
          window.scrollTo(S, j);
        }
      }
      const T = {
          elements: [],
          cancelMethods: [],
          add: (P, S) => {
            T.elements.push(P), T.cancelMethods.push(S);
          },
          remove: (P, S) => {
            const j = T.elements.indexOf(P);
            j > -1 &&
              (S && T.cancelMethods[j](),
              T.elements.splice(j, 1),
              T.cancelMethods.splice(j, 1));
          },
        },
        B = typeof window != 'undefined',
        b = {
          cancelOnUserAction: !0,
          easing: (P) => --P * P * P + 1,
          elementToScroll: B ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function Z(P) {
        return M(this, arguments, void 0, function* (S, j = {}) {
          if (B) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((s) => {
              s(!1);
            });
          let N,
            x,
            Q,
            g = Object.assign(Object.assign({}, b), j);
          const d = g.elementToScroll === window,
            u = !!g.elementToScroll.nodeName;
          if (!d && !u)
            throw 'Element to scroll needs to be either window or DOM element.';
          const v = [
              { property: 'scroll-behavior', value: 'smooth' },
              { property: 'scroll-snap-type', value: 'mandatory' },
            ],
            A = d ? document.documentElement : g.elementToScroll,
            I = getComputedStyle(A);
          v.forEach(({ property: s, value: Y }) => {
            const F = I.getPropertyValue(s);
            F.includes(Y) &&
              console.warn(
                `${A.tagName} has "${s}: ${F}" which can break animated-scroll-to's animations`,
              );
          });
          const D = d ? new p() : new h(g.elementToScroll);
          if (S instanceof Element) {
            if (
              ((Q = S),
              u &&
                (!g.elementToScroll.contains(Q) ||
                  g.elementToScroll.isSameNode(Q)))
            )
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (N = D.getHorizontalElementScrollOffset(Q, g.elementToScroll)),
              (x = D.getVerticalElementScrollOffset(Q, g.elementToScroll));
          } else if (typeof S == 'number')
            (N = D.getHorizontalScroll()), (x = S);
          else if (Array.isArray(S) && S.length === 2)
            (N = S[0] === null ? D.getHorizontalScroll() : S[0]),
              (x = S[1] === null ? D.getVerticalScroll() : S[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (N += g.horizontalOffset), (x += g.verticalOffset);
          const H = D.getMaxHorizontalScroll(),
            k = D.getHorizontalScroll();
          N > H && (N = H);
          const R = N - k,
            W = D.getMaxVerticalScroll(),
            G = D.getVerticalScroll();
          x > W && (x = W);
          const K = x - G,
            O = Math.abs(Math.round((R / 1e3) * g.speed)),
            o = Math.abs(Math.round((K / 1e3) * g.speed));
          let l = O > o ? O : o;
          return (
            l < g.minDuration
              ? (l = g.minDuration)
              : l > g.maxDuration && (l = g.maxDuration),
            new Promise((s, Y) => {
              R === 0 && K === 0 && s(!0), T.remove(D.element, !0);
              let F;
              const J = () => {
                E(), cancelAnimationFrame(F), s(!1);
              };
              T.add(D.element, J);
              const f = (i) => i.preventDefault(),
                r = g.cancelOnUserAction ? J : f,
                t = g.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                a = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                E = () => {
                  a.forEach((i) => {
                    D.element.removeEventListener(i, r, t);
                  });
                };
              a.forEach((i) => {
                D.element.addEventListener(i, r, t);
              });
              const w = Date.now(),
                C = () => {
                  var i = Date.now() - w,
                    c = i / l;
                  const n = Math.round(k + R * g.easing(c)),
                    z = Math.round(G + K * g.easing(c));
                  i < l && (n !== N || z !== x)
                    ? (D.scrollTo(n, z), (F = requestAnimationFrame(C)))
                    : (D.scrollTo(N, x),
                      cancelAnimationFrame(F),
                      E(),
                      T.remove(D.element, !1),
                      s(!0));
                };
              F = requestAnimationFrame(C);
            })
          );
        });
      }
      U.Z = Z;
    },
  },
]);
