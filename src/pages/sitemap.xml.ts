import { getCollection } from 'astro:content';
import { isPublicationPost, publicationActive, postPath, PERSONAL_ORIGIN, sitemapResponse } from '../lib/publication';

export async function GET() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const localPosts = posts.filter((post) => !publicationActive || !isPublicationPost(post));
  const routes = ['/', '/research/', '/writing/', '/about/', ...(!publicationActive ? ['/immortal-machine/'] : []), ...localPosts.map(postPath)];
  return sitemapResponse(PERSONAL_ORIGIN, routes);
}
