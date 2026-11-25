// Single source of truth for the business. Every page, the schema and llms.txt read from here.
// Replace every value marked TODO before launch (`python3 check.py` lists any that are left).
// Keep NAP (name, address, phone) identical to the Google Business Profile.

export const site = {
  // NAP copied verbatim from the Google Business Profile on 2026-11-25 (see CLAUDE.md). Do not edit without the GBP.
  name: 'Bismarck Pest Management',
  shortName: 'Bismarck Pest Management',
  url: 'https://www.bismarckpest.com',
  phone: '+675 7654 3386',
  phoneIntl: '+675-7654-3386',
  whatsapp: '67576543386',                 // wa.me number (digits only); empty = no WhatsApp links
  email: 'operations@bismarckpest.com',
  city: 'Port Moresby',
  region: 'National Capital District',
  regionName: 'National Capital District',
  postalCode: '121',
  streetAddress: '6 Mile Incubation Center & Open Market, Saraga St',
  country: 'Papua New Guinea',
  countryCode: 'PG',
  founded: '',
  geo: { lat: -9.4535731, lng: 147.2093805 } as undefined | { lat: number; lng: number },
  owner: 'Timothy Thomas',
  schemaType: 'LocalBusiness',
  additionalType: 'https://en.wikipedia.org/wiki/Pest_control',
  description:
    'Bismarck Pest Management is a pest control and fumigation company based at 6 Mile in Port Moresby, Papua New Guinea. We handle general pest control, fumigation of shipping containers, export goods, artifacts and handicrafts, termite and soil treatment, fogging and misting, and disinfection for homes and businesses in Port Moresby, Lae, Mt. Hagen and across PNG.',
  tagline: 'Pest control & fumigation in Port Moresby, Lae, Mt. Hagen and across PNG',
  serviceArea: 'Port Moresby, Lae, Mt. Hagen and nationwide across Papua New Guinea',
  hours: 'Mon–Sat 8:30am–4:30pm',
  openingHours: ['Mo-Sa 08:30-16:30'],
  priceRange: 'Free quotes',
  license: '',
  licenseName: '',
  licenseBy: '',
  payments: '',
  social: {
    facebook: 'https://www.facebook.com/fumigationpestcontrolmanagers/',
    instagram: '',
    youtube: '',
    google: 'https://www.google.com/maps?cid=4092860689863090735',
  } as Record<string, string>,
  quoteUrl: '/get-a-quote/',
  ctaLabel: 'Get a Free Quote',
  ctaShort: 'Get a Quote',
  ga4: '',
};

export const waLink = (text = 'Hi Bismarck Pest Management, I would like a quote for') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : '';

// GoHighLevel quote form. Paste the form's iframe src (e.g. https://api.leadconnectorhq.com/widget/form/XXXX
// or the white-label domain version). Empty = a "call us" card shows instead of the form.
// In GHL, set the form's on-submit redirect to <site.url>/thank-you/ for clean conversion tracking.
export const ghl = {
  embedScript: 'https://link.msgsndr.com/js/form_embed.js',
  quoteForm: '',
  quoteFormHeight: 900,
};

// Photos live in public/images/photos/<name>.webp plus <name>-800w.webp (python3 scripts/convert_photos.py).
export const img = (name: string) => `/images/photos/${name}.webp`;
export const img800 = (name: string) => `/images/photos/${name}-800w.webp`;

// Videos (Loom or YouTube embed URL). Vertical clips: ratio '9/16'; landscape: '16/9'.
export type VideoInfo = { title: string; description: string; caption: string; embedUrl: string; thumbnail: string; uploadDate: string; duration: string; ratio: string };
export const videos: Record<string, VideoInfo> = {
  // promo: { title: '', description: '', caption: '', embedUrl: 'https://www.loom.com/embed/ID', thumbnail: '', uploadDate: '2026-01-01', duration: 'PT30S', ratio: '16/9' },
};
