import { defineConfig } from 'dumi';

const projectPath = '/scratch-card/';
const projectName = 'ScratchCard';

export default defineConfig({
  base: projectPath,
  publicPath: projectPath,
  outputPath: 'docs-dist',
  title: projectName,
  themeConfig: {
    name: projectName,
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/scratch-card' },
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 200px !important;
    }`,
  ],
});
