// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Development site only. The real eionbooks.com is not connected to this project.
  site: 'https://example-dev-site.netlify.app',
  trailingSlash: 'ignore',
});
