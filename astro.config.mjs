// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Live address. www is the primary domain; eionbooks.com redirects to it in Netlify.
  site: 'https://www.eionbooks.com',
  trailingSlash: 'ignore',
});
