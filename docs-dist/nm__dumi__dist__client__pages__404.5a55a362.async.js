'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [65],
  {
    51905: function (r, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var t = e(55483),
        a = e(75271),
        o = function () {
          var u = (0, t.YB)(),
            l = (0, t.bU)();
          return a.createElement(
            'div',
            { className: 'dumi-default-not-found' },
            a.createElement('h1', null, u.formatMessage({ id: '404.title' })),
            a.createElement(
              t.rU,
              { to: 'base' in l ? l.base : '/', replace: !0 },
              u.formatMessage({ id: '404.back' }),
              ' \u2192',
            ),
          );
        },
        s = o;
    },
  },
]);
