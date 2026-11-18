// Reads the site-wide settings edited in the dashboard (Site settings).
import { getEntry } from 'astro:content';

export async function getSettings() {
  const entry = await getEntry('settings', 'site');
  const s = entry?.data ?? ({} as Record<string, string>);
  const startHref = s.startProjectUrl || (s.contactEmail ? `mailto:${s.contactEmail}` : '#');
  return { ...s, startHref };
}
