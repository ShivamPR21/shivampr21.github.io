import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isPublicationPost, newestFirst, postUrl, PUBLICATION_ORIGIN } from '../../../src/lib/publication';

export async function GET() {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).filter(isPublicationPost).sort(newestFirst);
  return rss({
    title: 'Immortal Machine — Writing',
    description: 'Mathematical foundations, learning systems, and research engineering by Shivam Pandey.',
    site: PUBLICATION_ORIGIN,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post, 'publication'),
      categories: post.data.categories,
    })),
    customData: '<language>en-gb</language>',
  });
}
