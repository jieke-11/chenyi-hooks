import { defineConfig } from 'father';

export default defineConfig({
  // 配置 ESModule 输出
  esm: {
    // 输出目录
    output: 'dist/esm',
    // 打包工具使用 rollup
    platform: 'browser',
    transformer: 'babel',
  },
  // 配置 CommonJS 输出
  cjs: {
    output: 'dist/cjs',
    platform: 'node',
    transformer: 'babel',
  },
  // 配置打包时的额外 Babel 插件
  extraBabelPlugins: [
    // 按需加载 antd 组件的样式
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
