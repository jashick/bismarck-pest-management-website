// Service-area pages at /service-areas/<slug>/. Only build pages for places the client really serves,
// and give each one real local substance (neighborhoods, housing stock, climate, permits, drive time).
// Never make swap-the-city-name pages: write every paragraph for that one city (aim 1,000+ words per page).
// Photos in `gallery` (names from src/data/gallery.ts) must not be captioned with a city unless they were taken there.

export type Area = {
  slug: string;
  name: string;
  province?: string;                                // shown instead of site.region when the town is in another province/state
  title: string;
  description: string;
  h1: string;
  sub: string;
  answer: string;
  local: string[];                                  // 2-3 intro paragraphs about this place
  services: Record<string, string>;                 // REQUIRED: one paragraph per service slug, written for this city (build fails if any is missing)
  places: { name: string; d: string }[];            // 4-6 neighborhoods / nearby towns, each described
  build: { t: string; d: string }[];                // 4 things to know about doing this work here
  nearby: string[];                                 // short tag list for the sidebar
  distance: string;
  photo: string;
  gallery: string[];
  faqs: { q: string; a: string }[];
};

export const areas: Area[] = [
  {
    slug: 'lae',
    name: 'Lae',
    province: 'Morobe Province',
    title: 'Pest Control & Fumigation in Lae, PNG | Bismarck Pest',
    description: 'Pest control, container fumigation, termite treatment, fogging and disinfection in Lae, Morobe Province. Call Bismarck Pest Management on +675 7654 3386.',
    h1: 'Pest Control & Fumigation in Lae',
    sub: 'General pest control, container fumigation, termites, fogging and disinfection for Lae homes and businesses.',
    answer: 'Bismarck Pest Management provides pest control and fumigation in Lae, Morobe Province, including container and commodity fumigation, general pest control, termite treatment, fogging and misting, and disinfection for homes, warehouses, factories and businesses. Call +675 7654 3386 to book a job in Lae.',
    local: [
      'Lae is PNG’s industrial and shipping centre. The port moves a huge share of the country’s cargo, and the industrial areas around town are full of warehouses, factories and depots. That makes container fumigation and stored-product pest control a bigger part of the work here than almost anywhere else in the country.',
      'Lae is also hot and very wet, with rain through much of the year. Wet ground and warm air are exactly what termites, mosquitoes and cockroaches like, so homes and buildings in Lae need pest control that holds up through the rain.',
    ],
    services: {
      'general-pest-control': 'Lae’s rain keeps cockroaches, ants and rats busy all year, and they move between drains, gardens and kitchens. For Lae homes and flats we treat inside and out, paying extra attention to drains and wet areas where cockroaches breed.',
      'fumigation-services': 'With the port and so many warehouses in town, fumigation in Lae is mostly about goods: containers, bagged commodities and stored stock that need to be free of insects before they ship or go on sale.',
      'container-fumigation': 'If your container is leaving through Lae port, we can fumigate it before it sails. Exporters and importers in Lae should book as soon as they know the shipping date, so the treatment and airing time fit before the container is due at the wharf.',
      'artifact-handicraft-fumigation': 'Carvings, bilums and woven pieces bought in Lae or brought down the Highlands Highway can be treated before you fly out or ship them. Tell us how many pieces you have and your travel date.',
      'termite-control': 'Lae’s heat and heavy rain make it hard country for timber. Raised houses on posts, older timber homes and buildings with wet ground around the footings are all worth checking for termite mud tubes and damage.',
      'pre-construction-termite-treatment': 'For new houses, warehouses and industrial buildings going up in Lae, soil treatment before the slab is poured is the best protection against termites in such wet ground. We time the treatment around your pour date.',
      'fogging-and-misting': 'Lae’s rainfall leaves standing water in drains, yards and work sites, which means plenty of mosquitoes. Fogging and misting around homes, compounds and work sites cuts numbers down, and we point out the breeding spots to fix.',
      'disinfection-services': 'For Lae offices, factories, warehouses and food businesses, we provide public health disinfection, including after an illness on site or after rats or cockroaches have contaminated an area.',
      'commercial-pest-control': 'Lae’s warehouses, factories, depots, shops and restaurants deal with rodents and stored-product pests as much as cockroaches. We combine general pest control with fumigation of stored goods, so one company covers the whole site.',
    },
    places: [
      { name: 'Lae Port and the industrial areas', d: 'Warehouses, depots and factories where container fumigation, rodent control and stored-product pest treatment matter most.' },
      { name: 'Top Town and the town centre', d: 'Shops, offices, restaurants and hotels that need consistent pest control without disrupting trade.' },
      { name: 'Residential suburbs', d: 'Family homes and flats dealing with cockroaches, ants, rats, mosquitoes and termites through the wet months.' },
      { name: 'Highlands Highway corridor', d: 'The road out of Lae towards the Highlands carries goods and produce that often need treatment before storage or shipping.' },
    ],
    build: [
      { t: 'Wet all year', d: 'Lae’s heavy rainfall keeps the ground damp, which suits termites and mosquitoes. Treatments need to hold up in the rain.' },
      { t: 'Cargo city', d: 'As PNG’s busiest port, Lae has more containers and stored goods needing fumigation than most places.' },
      { t: 'Industrial sites', d: 'Large warehouses and factories need rodent control and stored-product pest treatment, not just a spray.' },
      { t: 'Book ahead', d: 'Tell us your shipping date or preferred day early so we can schedule the job in Lae.' },
    ],
    nearby: ['Lae Port', 'Top Town', 'Industrial areas', 'Highlands Highway', 'Morobe Province'],
    distance: 'Covered from our Port Moresby base. Call to book a job in Lae.',
    photo: 'placeholder',
    gallery: [],
    faqs: [
      { q: 'Do you do pest control in Lae?', a: 'Yes. Bismarck Pest Management covers Lae and Morobe Province for general pest control, container and commodity fumigation, termite treatment, fogging and misting, and disinfection.' },
      { q: 'Can you fumigate a container at Lae port?', a: 'Yes. Call us with the container details and your shipping date and we will book the fumigation so it is done and aired out before the container sails.' },
      { q: 'How do I book a job in Lae?', a: 'Call +675 7654 3386 or message us on WhatsApp with the address, what you need treated and your preferred dates.' },
    ],
  },
  {
    slug: 'mount-hagen',
    name: 'Mt. Hagen',
    province: 'Western Highlands Province',
    title: 'Pest Control & Fumigation in Mt. Hagen | Bismarck Pest',
    description: 'Pest control, fumigation of produce and handicrafts, termite treatment and disinfection in Mt. Hagen, Western Highlands. Call +675 7654 3386.',
    h1: 'Pest Control & Fumigation in Mt. Hagen',
    sub: 'Pest control, fumigation, termites, fogging and disinfection for Mt. Hagen homes, businesses and storage.',
    answer: 'Bismarck Pest Management provides pest control and fumigation in Mt. Hagen, Western Highlands Province, including general pest control, fumigation of stored produce, export commodities and handicrafts, termite treatment, fogging and misting, and disinfection. Call +675 7654 3386 to book a job in Mt. Hagen.',
    local: [
      'Mt. Hagen is the main town of the Western Highlands and a trading hub for the region’s coffee and fresh produce. Goods that are bagged, stored and trucked down the Highlands Highway attract weevils, beetles, moths and rats, so stored-product pest control and fumigation are important here.',
      'The Highlands are cooler than the coast, but pests do not disappear. Rats move into stores and homes, cockroaches live in kitchens and markets, and termites still work through timber houses and fences. Highland homes also have more timber in them than many coastal buildings, which is worth protecting.',
    ],
    services: {
      'general-pest-control': 'In Mt. Hagen, rats and mice are often the biggest problem, especially in homes near stores, markets and gardens. We combine rodent baiting with cockroach and ant treatment so the whole house is covered.',
      'fumigation-services': 'With so much coffee and produce stored and moved through Mt. Hagen, fumigation here is often about protecting stored goods from weevils, beetles and moths before they spoil or are shipped.',
      'container-fumigation': 'Exporters in the Highlands often load goods in or near Mt. Hagen before they travel to port. We fumigate commodities and containers so they are treated before the long trip down the Highlands Highway and onto a ship.',
      'artifact-handicraft-fumigation': 'The Highlands are known for their handicrafts and traditional items. If you are taking pieces from Mt. Hagen overseas, have them fumigated before you travel so they have the best chance of clearing biosecurity at the other end.',
      'termite-control': 'Highland houses often use plenty of timber in floors, walls and posts. We inspect for termite mud tubes and damage and treat existing buildings so the timber lasts.',
      'pre-construction-termite-treatment': 'If you are building a new house, store or office in Mt. Hagen, treat the soil before the slab or footings are poured. We schedule the treatment around your build.',
      'fogging-and-misting': 'Mt. Hagen’s cooler climate means fewer mosquitoes than the coast, but flies around markets, kitchens and waste areas are a constant problem. Fogging and misting knocks down flies and mosquitoes around businesses and compounds.',
      'disinfection-services': 'We disinfect Mt. Hagen offices, stores, guesthouses and homes, including areas contaminated by rats or after illness has spread through a workplace.',
      'commercial-pest-control': 'Stores, warehouses, guesthouses, hotels and food businesses in Mt. Hagen need steady rodent and stored-product pest control. We combine general pest control with fumigation of stored goods.',
    },
    places: [
      { name: 'Mt. Hagen town centre', d: 'Stores, offices, markets and food businesses where rodents, cockroaches and flies are the main problems.' },
      { name: 'Coffee and produce storage', d: 'Warehouses and stores holding coffee and fresh produce that need protection from weevils, beetles, moths and rats.' },
      { name: 'Kagamuga and the airport area', d: 'Businesses and homes on the airport side of town.' },
      { name: 'Highlands Highway', d: 'The main road linking Mt. Hagen to Lae, used to move goods that may need treatment before storage or export.' },
    ],
    build: [
      { t: 'Cooler, not pest-free', d: 'The Highlands climate is milder than the coast, but rats, cockroaches, flies and termites are still active.' },
      { t: 'Stored goods', d: 'Coffee and produce in storage attract stored-product pests and rodents, which fumigation and rodent control deal with.' },
      { t: 'Timber homes', d: 'Highland homes often contain more timber, which makes termite checks worthwhile.' },
      { t: 'Book ahead', d: 'Call early with your preferred dates so we can schedule the job in Mt. Hagen.' },
    ],
    nearby: ['Town centre', 'Kagamuga', 'Highlands Highway', 'Western Highlands Province'],
    distance: 'Covered from our Port Moresby base. Call to book a job in Mt. Hagen.',
    photo: 'placeholder',
    gallery: [],
    faqs: [
      { q: 'Do you do pest control in Mt. Hagen?', a: 'Yes. Bismarck Pest Management covers Mt. Hagen and the Western Highlands for general pest control, fumigation, termite treatment, fogging and misting, and disinfection.' },
      { q: 'Can you fumigate stored coffee or produce in Mt. Hagen?', a: 'Yes. We fumigate stored goods and commodities infested with weevils, beetles and moths. Call with the type and amount of produce and where it is stored.' },
      { q: 'How do I book a job in Mt. Hagen?', a: 'Call +675 7654 3386 or message us on WhatsApp with the location, what you need treated and your preferred dates.' },
    ],
  },
];
