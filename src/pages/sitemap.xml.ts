import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const routes = ['', 'research/', 'writing/', 'about/', 'immortal-machine/', ...posts.map((post) => `posts/${post.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>https://shivampr21.com/${route}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
