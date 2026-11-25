import { site } from './site';

export const breadcrumbs = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', href: '/' }, ...items].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: new URL(c.href, site.url).href,
  })),
});

export const service = (name: string, description: string, href: string, areaServed: unknown = { '@type': 'Place', name: site.serviceArea }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType: name,
  description,
  url: new URL(href, site.url).href,
  provider: { '@id': `${site.url}/#business` },
  areaServed,
});
