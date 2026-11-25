// llms.txt: a plain-text summary of the business for AI assistants, generated from the data files
// so it always matches the site. Add extra sections (pricing, guides) if the client has them.
import { site } from '../data/site';
import { services } from '../data/services';
import { areas } from '../data/areas';
import { faqs } from '../data/faqs';
export const GET = () => {
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> ${site.description}

- Phone: ${site.phone}
${site.email ? `- Email: ${site.email}` : ''}
- Based in: ${site.city}, ${site.regionName}
- Service area: ${site.serviceArea}
- Hours: ${site.hours}
${site.founded ? `- In business since: ${site.founded}` : ''}${site.license ? `\n- License: ${site.license}` : ''}

## Get help
- [${site.ctaLabel}](${u(site.quoteUrl)})

## Services
${services.map((s) => `- [${s.navName}](${u(`/${s.slug}/`)}): ${s.blurb}`).join('\n')}

## Service areas
${areas.map((a) => `- [${a.name}](${u(`/service-areas/${a.slug}/`)})`).join('\n')}

## Common questions
${faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## More
- [About](${u('/about/')})
- [FAQ](${u('/faq/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
