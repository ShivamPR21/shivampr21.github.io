import { getCollection } from 'astro:content';
import { isPublicationPost, postPath, PUBLICATION_ORIGIN, sitemapResponse } from '../../../src/lib/publication';

export async function GET() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return sitemapResponse(PUBLICATION_ORIGIN, ['/', '/writing/', ...posts.filter(isPublicationPost).map(postPath)]);
}
