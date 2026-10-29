import type { CollectionEntry } from 'astro:content';

export const PERSONAL_ORIGIN = 'https://shivampr21.com';
export const PUBLICATION_ORIGIN = import.meta.env.PUBLIC_PUBLICATION_ORIGIN || 'https://immortal-machine.github.io';
export const PUBLICATION_GITHUB = 'https://github.com/Immortal-Machine';
export const publicationActive = import.meta.env.PUBLIC_PUBLICATION_ACTIVE === 'true';

export type SiteTarget = 'personal' | 'publication';
export type WritingPost = CollectionEntry<'writing'>;

export function isPublicationPost(post: WritingPost) {
  return post.data.publication === 'immortal-machine';
}

export function isPublicationListing(post: WritingPost) {
  return isPublicationPost(post) || post.data.series === 'KERNELIZED';
}

export function postPath(post: WritingPost) {
  return `/posts/${post.id}/`;
}

export function postUrl(post: WritingPost, target: SiteTarget = 'personal') {
  const origin = isPublicationPost(post) && (target === 'publication' || publicationActive)
    ? PUBLICATION_ORIGIN
    : PERSONAL_ORIGIN;
  return new URL(postPath(post), origin).href;
}

export function postHref(post: WritingPost, target: SiteTarget = 'personal') {
  const url = new URL(postUrl(post, target));
  const localOrigin = target === 'publication' ? PUBLICATION_ORIGIN : PERSONAL_ORIGIN;
  return url.origin === localOrigin ? url.pathname : url.href;
}

export function publicationHomeHref() {
  return publicationActive ? `${PUBLICATION_ORIGIN}/` : '/immortal-machine/';
}

export function newestFirst(a: WritingPost, b: WritingPost) {
  return b.data.date.valueOf() - a.data.date.valueOf()
    || (b.data.seriesOrder ?? 0) - (a.data.seriesOrder ?? 0);
}

export function sitemapResponse(origin: string | URL, routes: string[]) {
  const urls = routes.map((route) => new URL(route, origin).href);
  const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${escapeXml(url)}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
