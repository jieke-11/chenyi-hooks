'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [463],
  {
    6397: function (E, o, n) {
      n.r(o);
      var l = n(48305),
        d = n.n(l),
        t = n(91831),
        r = n(53271),
        a = n(75271),
        e = n(52676),
        i = function () {
          var _ = (0, t.useUnmountedRef)();
          return (
            (0, a.useEffect)(function () {
              setTimeout(function () {
                _.current || r.ZP.info('component is alive');
              }, 3e3);
            }, []),
            (0, e.jsx)('p', { children: 'Hello World!' })
          );
        };
      o.default = function () {
        var s = (0, t.useBoolean)(!0),
          _ = d()(s, 2),
          u = _[0],
          m = _[1].toggle;
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)('button', {
              type: 'button',
              onClick: m,
              children: u ? 'unmount' : 'mount',
            }),
            u && (0, e.jsx)(i, {}),
          ],
        });
      };
    },
  },
]);
