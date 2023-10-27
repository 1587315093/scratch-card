import { defineConfig } from 'dumi';

const projectPath = '/scratch-card/';
const projectName = 'ScratchCard';

export default defineConfig({
  base: projectPath,
  publicPath: projectPath,
  outputPath: 'docs-dist',
  title: projectName,
  logo: false,
  themeConfig: {
    name: projectName,
    nav: [{ title: '文档', link: '/components/scratch-card' }],
    footer: false,
  },
});
