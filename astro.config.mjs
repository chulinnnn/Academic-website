import { defineConfig } from 'astro/config';

// For https://USERNAME.github.io keep base as '/'.
// For a project site https://USERNAME.github.io/REPO set base to '/REPO/'.
export default defineConfig({
  site: 'https://chulinzhao.github.io',
  base: '/',
  output: 'static',
});
