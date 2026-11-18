// Connects Books and Authors without storing anything twice:
// each author profile lists its books, and a book finds its author from that list.
import { getCollection } from 'astro:content';

export async function getBookAuthorLinks() {
  const authors = await getCollection('authors', ({ data }) => data.published);
  const young = await getCollection('youngAuthors', ({ data }) => data.published);
  const links = new Map<string, { name: string; href: string }>();
  for (const a of authors) {
    for (const bookId of a.data.books) links.set(bookId, { name: a.data.name, href: `/meet-our-authors/#${a.id}` });
  }
  for (const y of young) {
    if (!links.has(y.data.anthology)) links.set(y.data.anthology, { name: 'our young authors', href: '/meet-our-authors/#young-authors' });
  }
  return links;
}
