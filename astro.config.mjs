// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Development site only. The real eionbooks.com is not connected to this project.
  site: 'https://eion-books-dev.netlify.app',
  trailingSlash: 'ignore',
});
