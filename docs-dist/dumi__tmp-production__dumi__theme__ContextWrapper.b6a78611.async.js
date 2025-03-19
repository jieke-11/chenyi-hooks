'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [923],
  {
    53720: function (E, s, e) {
      e.r(s),
        e.d(s, {
          default: function () {
            return C;
          },
        });
      var k = e(48305),
        g = e.n(k),
        n = e(75271),
        o = e(55483),
        y = e(22217),
        S = e(54837),
        l = null,
        i = e(28247),
        T = e(52676),
        u = {},
        a = {
          name: 'chenyi-hooks',
          description: '\u4E00\u4E2A\u8F7B\u91CF\u7EA7hooks\u5E93',
          version: '0.0.1',
          license: 'MIT',
          authors: [],
        },
        r = 'hash',
        c = void 0,
        m = {
          footer:
            'Copyright \xA9 2025 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
          name: 'chenyi-hooks',
          nav: [
            { title: '\u6307\u5357', link: '/guide' },
            { title: 'Hooks', link: '/components/use-boolean' },
          ],
          sidebar: {
            '/components': [
              {
                title: '\u72B6\u6001',
                children: [
                  { title: 'useBoolean', link: '/components/use-boolean' },
                  { title: 'useGetState', link: '/components/use-get-state' },
                  { title: 'useSetState', link: '/components/use-set-state' },
                  { title: 'useToggle', link: '/components/use-toggle' },
                ],
              },
              {
                title: '\u5B58\u50A8',
                children: [
                  {
                    title: 'useLocalStorageState',
                    link: '/components/use-local-storage-state',
                  },
                  {
                    title: 'useSessionStorageState',
                    link: '/components/use-session-storage-state',
                  },
                ],
              },
              {
                title: '\u6027\u80FD',
                children: [
                  { title: 'useDebounce', link: '/components/use-debounce' },
                  {
                    title: 'useDebounceFn',
                    link: '/components/use-debounce-fn',
                  },
                  { title: 'useThrottle', link: '/components/use-throttle' },
                  {
                    title: 'useThrottleFn',
                    link: '/components/use-throttle-fn',
                  },
                ],
              },
              {
                title: '\u751F\u547D\u5468\u671F',
                children: [
                  { title: 'useUnmount', link: '/components/use-unmount' },
                  {
                    title: 'useUnmountedRef',
                    link: '/components/use-unmounted-ref',
                  },
                  {
                    title: 'useUpdateEffect',
                    link: '/components/use-update-effect',
                  },
                ],
              },
              {
                title: '\u5DE5\u5177',
                children: [
                  { title: 'useLatest', link: '/components/use-latest' },
                  { title: 'useMap', link: '/components/use-map' },
                  {
                    title: 'useMemoizedFn',
                    link: '/components/use-memoized-fn',
                  },
                  { title: 'usePrevious', link: '/components/use-previous' },
                  {
                    title: 'useResetState',
                    link: '/components/use-reset-state',
                  },
                  { title: 'useSafeState', link: '/components/use-safe-state' },
                  { title: 'useSet', link: '/components/use-set' },
                ],
              },
            ],
          },
        },
        p = !0;
      function C() {
        var x = (0, o.pC)(),
          b = (0, n.useState)(!1),
          d = g()(b, 2),
          h = d[0],
          f = d[1],
          v = (0, n.useRef)(o.m8.location.pathname);
        (0, n.useEffect)(function () {
          return o.m8.listen(function (t) {
            t.location.pathname !== v.current &&
              ((v.current = t.location.pathname),
              document.documentElement.scrollTo(0, 0));
          });
        }, []);
        var D = n.useMemo(
          function () {
            var t = {
              pkg: a,
              historyType: r,
              entryExports: u,
              demos: null,
              components: l,
              locales: i.k,
              loading: h,
              setLoading: f,
              hostname: c,
              themeConfig: m,
              _2_level_nav_available: p,
            };
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, y.Kp)(
                      !1,
                      '`demos` return empty in latest version, please use `useDemo` instead.',
                    ),
                    {}
                  );
                },
              }),
              t
            );
          },
          [a, r, u, l, i.k, h, f, c, m, p],
        );
        return (0, T.jsx)(S.D.Provider, { value: D, children: x });
      }
    },
  },
]);
