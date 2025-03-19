'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [829],
  {
    76915: function (l, n, _) {
      _.r(n);
      var m = _(86906),
        E = _(13638),
        c = _(73797),
        h = _(51328),
        b = _(45033),
        r = _(99587),
        f = _(25843),
        M = _(61744),
        s = _(55483),
        o = _(54914),
        a = _(75271),
        e = _(52676);
      function t() {
        var u = (0, s.eL)(),
          d = u.texts;
        return (0, e.jsx)(e.Fragment, {
          children: (0, e.jsxs)('div', {
            className: 'markdown',
            children: [
              (0, e.jsxs)('h1', {
                id: 'usesessionstoragestate',
                children: [
                  (0, e.jsx)('a', {
                    'aria-hidden': 'true',
                    tabIndex: '-1',
                    href: '#usesessionstoragestate',
                    children: (0, e.jsx)('span', {
                      className: 'icon icon-link',
                    }),
                  }),
                  'useSessionStorageState',
                ],
              }),
              (0, e.jsx)('p', { children: d[0].value }),
              (0, e.jsxs)('p', {
                children: [
                  d[1].value,
                  (0, e.jsx)(s.rU, {
                    to: '/components/use-local-storage-state',
                    children: d[2].value,
                  }),
                  d[3].value,
                ],
              }),
            ],
          }),
        });
      }
      function i() {
        return (0, e.jsx)(s.dY, {
          children: (0, e.jsx)(a.Suspense, {
            fallback: (0, e.jsx)(o.Z, {}),
            children: (0, e.jsx)(t, {}),
          }),
        });
      }
      n.default = i;
    },
  },
]);
