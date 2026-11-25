// robots.txt, generated from site.url so it never points at the wrong domain. AI crawlers are welcome.
import { site } from '../data/site';
export const GET = () => new Response(`User-agent: *
Allow: /
Disallow: /thank-you/

# AI search and assistant crawlers are welcome
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: Bingbot
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
