'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [9],
  {
    48648: function (y, u, e) {
      e.r(u),
        e.d(u, {
          default: function () {
            return g;
          },
        });
      var o = e(55483),
        n = e(75271),
        h = e(87883),
        D = function () {
          var E = (0, o.UO)(),
            t = E.id,
            a = (0, o.FO)(t),
            O = (0, h.m)({
              id: t,
              component: a.component,
              renderOpts: a.renderOpts,
            }),
            R = O.canvasRef,
            v = a || {},
            m = v.component,
            d = v.renderOpts,
            r = (0, o.kw)(t),
            s = r.node,
            c = r.setSource,
            i = r.error,
            f = r.loading,
            w =
              s ||
              (d != null && d.renderer
                ? (0, n.createElement)('div', { ref: R })
                : m && (0, n.createElement)(m));
          return (
            (0, n.useEffect)(
              function () {
                var l = function (p) {
                  p.data.type === 'dumi.liveDemo.setSource' && c(p.data.value);
                };
                return (
                  window.addEventListener('message', l),
                  function () {
                    return window.removeEventListener('message', l);
                  }
                );
              },
              [c],
            ),
            (0, n.useEffect)(
              function () {
                !f &&
                  (i || s) &&
                  window.postMessage({
                    type: 'dumi.liveDemo.compileDone',
                    value: { err: i },
                  });
              },
              [i, s, f],
            ),
            w
          );
        },
        g = D;
    },
  },
]);
