import type { APIRoute } from 'astro';
import { SITE_IS_LIVE } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const body = SITE_IS_LIVE
    ? `User-agent: *\nDisallow: /admin/\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : `# Development site: keep search engines out.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
