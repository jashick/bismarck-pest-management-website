import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set `site` to the client's canonical domain (same as site.url in src/data/site.ts).
export default defineConfig({
  site: 'https://www.bismarckpest.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !/\/(thank-you|404)\/$/.test(page) }),
  ],
});
