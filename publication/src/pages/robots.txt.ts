import { PUBLICATION_ORIGIN } from '../../../src/lib/publication';
export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${PUBLICATION_ORIGIN}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
}
