// Reads the site-wide settings edited in the dashboard (Site settings).
import { getEntry } from 'astro:content';

export async function getSettings() {
  const entry = await getEntry('settings', 'site');
  const s = entry?.data ?? ({} as Record<string, string>);
  // Start buttons go to the Start a Project page unless a different link is set in Site settings.
  const startHref = s.startProjectUrl || '/start-your-project/';
  return { ...s, startHref };
}
