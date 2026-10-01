export function GET() {
  return new Response('User-agent: *\nAllow: /\nSitemap: https://shivampr21.com/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain' } });
}
