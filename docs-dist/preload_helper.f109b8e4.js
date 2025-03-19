!(function () {
  'use strict';
  var t = '/chenyi-hooks/'.replace(/([^/])$/, '$1/'),
    e = location.pathname,
    n = e.startsWith(t) && decodeURI('/'.concat(e.slice(t.length)));
  if (n) {
    var a = document,
      c = a.head,
      r = a.createElement.bind(a),
      i = (function (t, e, n) {
        var a,
          c =
            e.r[t] ||
            (null ===
              (a = Object.entries(e.r).find(function (e) {
                var n = e[0];
                return new RegExp(
                  '^'.concat(
                    n.replace(/\/:[^/]+/g, '/[^/]+').replace('/*', '/.+'),
                    '$',
                  ),
                ).test(t);
              })) || void 0 === a
              ? void 0
              : a[1]);
        return null == c
          ? void 0
          : c.map(function (t) {
              var a = e.f[t][1],
                c = e.f[t][0];
              return {
                type: c.split('.').pop(),
                url: ''.concat(n.publicPath).concat(c),
                attrs: [['data-'.concat(e.b), ''.concat(e.p, ':').concat(a)]],
              };
            });
      })(
        n,
        {
          p: 'chenyi-hooks',
          b: 'webpack',
          f: [
            [
              'nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css',
              9,
            ],
            ['nm__dumi__dist__client__pages__Demo__index.4c7b1336.async.js', 9],
            ['useThrottle__index.md.dbd9d6b5.async.js', 42],
            ['nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css', 65],
            ['nm__dumi__dist__client__pages__404.5a55a362.async.js', 65],
            ['useToggle__index.md.75ea3c28.async.js', 130],
            ['useUnmount__index.md.a664b93a.async.js', 141],
            ['useLatest__index.md.a665a0ab.async.js', 178],
            ['useGetState__index.md.4836fc1c.async.js', 209],
            ['useBoolean__index.md.be88b585.async.js', 326],
            ['usePrevious__index.md.539e317a.async.js', 471],
            ['useDebounce__index.md.73310777.async.js', 483],
            [
              'nm__dumi__theme-default__layouts__DocLayout__index.272bca30.async.js',
              519,
            ],
            ['useDebounceFn__index.md.2121e57d.async.js', 644],
            ['useSet__index.md.0ce73e64.async.js', 719],
            ['useResetState__index.md.25e6460d.async.js', 772],
            ['useUnmountedRef__index.md.8670c6cd.async.js', 787],
            ['useThrottleFn__index.md.d7dff588.async.js', 800],
            ['useSessionStorageState__index.md.ac02eca6.async.js', 829],
            ['useUpdateEffect__index.md.6a0b1ef4.async.js', 843],
            ['909.e8c51481.chunk.css', 909],
            ['909.fb9a201c.async.js', 909],
            [
              'dumi__tmp-production__dumi__theme__ContextWrapper.b6a78611.async.js',
              923,
            ],
            ['docs__index.md.e3575cc5.async.js', 935],
            ['docs__guide.md.aa63a986.async.js', 937],
            ['useMemoizedFn__index.md.5cbc02cf.async.js', 997],
          ],
          r: {
            '/*': [3, 4, 12, 20, 21, 22],
            '/': [23, 12, 20, 21, 22],
            '/guide': [24, 12, 20, 21, 22],
            '/~demos/:id': [0, 1, 22],
            '/components/use-boolean': [9, 12, 20, 21, 22],
            '/components/use-debounce': [11, 12, 20, 21, 22],
            '/components/use-debounce-fn': [13, 12, 20, 21, 22],
            '/components/use-get-state': [8, 12, 20, 21, 22],
            '/components/use-latest': [7, 12, 20, 21, 22],
            '/components/use-memoized-fn': [25, 12, 20, 21, 22],
            '/components/use-previous': [10, 12, 20, 21, 22],
            '/components/use-reset-state': [15, 12, 20, 21, 22],
            '/components/use-session-storage-state': [18, 12, 20, 21, 22],
            '/components/use-set': [14, 12, 20, 21, 22],
            '/components/use-throttle': [2, 12, 20, 21, 22],
            '/components/use-throttle-fn': [17, 12, 20, 21, 22],
            '/components/use-toggle': [5, 12, 20, 21, 22],
            '/components/use-unmount': [6, 12, 20, 21, 22],
            '/components/use-unmounted-ref': [16, 12, 20, 21, 22],
            '/components/use-update-effect': [19, 12, 20, 21, 22],
          },
        },
        { publicPath: '/chenyi-hooks/' },
      );
    null == i ||
      i.forEach(function (t) {
        var e,
          n = t.type,
          a = t.url;
        if ('js' === n) ((e = r('script')).src = a), (e.async = !0);
        else {
          if ('css' !== n) return;
          ((e = r('link')).href = a), (e.rel = 'preload'), (e.as = 'style');
        }
        t.attrs.forEach(function (t) {
          e.setAttribute(t[0], t[1] || '');
        }),
          c.appendChild(e);
      });
  }
})();
