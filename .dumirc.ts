import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  history: { type: 'browser' },
  themeConfig: {
    name: 'chenyi-hooks',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Hooks',
        link: '/components/use-boolean',
      },
    ],
    sidebar: {
      '/components': [
        {
          title: '状态',
          children: [
            { title: 'useBoolean', link: '/components/use-boolean' },
            { title: 'useGetState', link: '/components/use-get-state' },
            { title: 'useToggle', link: '/components/use-toggle' },
          ],
        },
        {
          title: '性能',
          children: [
            { title: 'useDebounce', link: '/components/use-debounce' },
            { title: 'useDebounceFn', link: '/components/use-debounce-fn' },
            { title: 'useThrottle', link: '/components/use-throttle' },
            { title: 'useThrottleFn', link: '/components/use-throttle-fn' },
          ],
        },
        {
          title: '生命周期',
          children: [
            { title: 'useUnmount', link: '/components/use-unmount' },
            { title: 'useUnmountedRef', link: '/components/use-unmounted-ref' },
            { title: 'useUpdateEffect', link: '/components/use-update-effect' },
          ],
        },
        {
          title: '工具',
          children: [
            { title: 'useLatest', link: '/components/use-latest' },
            { title: 'useMemoizedFn', link: '/components/use-memoized-fn' },
            { title: 'usePrevious', link: '/components/use-previous' },
            { title: 'useResetState', link: '/components/use-reset-state' },
            { title: 'useSet', link: '/components/use-set' },
          ],
        },
      ],
    },
  },
  base: '/',
  publicPath: '/',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      {
        type: 'component',
        dir: 'src',
      },
    ],
  },
});
