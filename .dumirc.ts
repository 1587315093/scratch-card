import { defineConfig } from 'dumi';

const path = '/scratch-card';

export default defineConfig({
  base: path,
  publicPath: path,
  outputPath: 'docs-dist',
  title: 'ScratchCard',
  themeConfig: {
    name: 'ScratchCard',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/scratch-card' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 200px !important;
    }`,
  ],
});
