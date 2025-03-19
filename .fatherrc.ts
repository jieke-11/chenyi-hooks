import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'dist' },
  cjs: { output: 'lib' },
  extraBabelPlugins: [
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
