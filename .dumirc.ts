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
        link: '/components/foo'
      }
    ],
    //To Do 侧边栏，hooks分类

  },
});
