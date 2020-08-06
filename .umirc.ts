import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: false,
    compact: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
