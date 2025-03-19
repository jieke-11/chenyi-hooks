// import { defineConfig } from 'father';

// export default defineConfig({
//   // more father config: https://github.com/umijs/father/blob/master/docs/config.md
//   esm: { output: 'dist' },
// });
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
