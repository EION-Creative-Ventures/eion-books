// One switch for launch. While false, every page tells search engines not to index it
// and robots.txt blocks crawling. Flip to true (and set `site` in astro.config.mjs to the
// real domain) only when Paula approves going live. Also remove the X-Robots-Tag
// header in netlify.toml at that time.
export const SITE_IS_LIVE = false;
