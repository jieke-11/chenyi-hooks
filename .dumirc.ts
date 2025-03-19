import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'chenyi-hooks',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'hooks',
        link: '/components/foo',
      },
    ],
    //To Do 侧边栏，hooks分类
  },
  base: '/chenyi-hooks/',
  publicPath: '/chenyi-hooks/',
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
