import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
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
  base: '/scratch-card/',
  publicPath: '/scratch-card/',
});
