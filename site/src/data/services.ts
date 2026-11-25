// One entry per service landing page, rendered by src/pages/[service].astro at /<slug>/.
// Write each page from scratch for the client: its own answer, problems, process and FAQs.
// Never reuse the same paragraphs across services (thin/duplicate content hurts SEO and AEO).
// Hierarchy mirrors the category research (CLAUDE.md structure map): kind 'category' = one page per GBP
// category; kind 'service' = a distinct service with parent = its category slug; 'situation' = emergency/audience pages.

export type Service = {
  slug: string;
  kind: 'category' | 'service' | 'situation';
  parent?: string;            // slug of the parent category page (service pages only)
  gbpCategory?: string;       // the GBP category this page mirrors (category pages)
  navName: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  blurb: string;
  answer: string;
  intro: string[];
  includes: string[];
  signs: string[];
  why: { t: string; d: string }[];
  sections?: { id?: string; h: string; p: string[]; list?: string[] }[];   // extra long-form sections
  photos: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
  emergency?: boolean;        // styles the page with the "heat" accent
};

const PH = 'placeholder';

export const services: Service[] = [
  {
    slug: 'general-pest-control',
    kind: 'category',
    gbpCategory: 'Pest control service',
    navName: 'General Pest Control',
    title: 'General Pest Control in Port Moresby | Bismarck Pest',
    description: 'Cockroach, ant, rat, mosquito, bed bug and flea control for homes and businesses in Port Moresby and across PNG. Call Bismarck Pest Management on +675 7654 3386.',
    h1: 'General Pest Control in Port Moresby',
    sub: 'Cockroaches, ants, rats, mosquitoes, flies, bed bugs, fleas and ticks, treated properly and safely.',
    blurb: 'Cockroaches, ants, rats and mice, mosquitoes, flies, bed bugs, fleas and ticks.',
    answer: 'Bismarck Pest Management provides general pest control in Port Moresby, Lae, Mt. Hagen and across Papua New Guinea. We treat cockroaches, ants, rats and mice, mosquitoes, flies, bed bugs, fleas and ticks in houses, flats, offices, shops, restaurants, hotels and warehouses. Call +675 7654 3386 for a free quote.',
    intro: [
      'Most of the calls we get start the same way: the cockroaches are back, the ants have found the kitchen, or something is moving in the ceiling at night. Store-bought sprays knock a few down, but the nest, the eggs and the hiding places are still there.',
      'A proper general treatment works on where pests live and breed, not just where you see them. We look at the property first, find how pests are getting in and where they are sheltering, then treat inside and outside so the problem actually stops.',
    ],
    includes: [
      'Cockroach treatment for kitchens, bathrooms, drains and roof spaces',
      'Ant treatment, including nests outside the house',
      'Rat and mouse control with baiting and advice on blocking entry points',
      'Mosquito and fly treatment around the house or premises',
      'Bed bug, flea and tick treatment for bedrooms, furniture and pet areas',
      'Treatment for stored-product pests: weevils, beetles and moths',
    ],
    signs: [
      'You see cockroaches during the day (usually means a large population)',
      'Rat droppings, chewed packaging or scratching in the ceiling',
      'Trails of ants into the kitchen or pantry',
      'Itchy bites after sleeping, or small blood spots on the sheets',
      'Fleas on pets or on your ankles after walking through the house',
      'Weevils or moths in rice, flour or stored goods',
    ],
    why: [
      { t: 'Treat the source', d: 'We look for nests, breeding spots and entry points before we spray, so the treatment lasts longer than a can from the shop.' },
      { t: 'Homes and businesses', d: 'From a single flat to a hotel, restaurant or warehouse, the same team handles residential, commercial and industrial jobs.' },
      { t: 'Port Moresby based', d: 'Our office is at the 6 Mile Incubation Center on Saraga St, and we also cover Lae, Mt. Hagen and jobs nationwide.' },
    ],
    sections: [
      {
        h: 'Pests we treat',
        p: ['PNG’s warm, humid climate means pests breed all year. These are the ones we deal with most:'],
        list: [
          'Cockroaches: the most common call. They spread bacteria over food and benches and hide in drains, cupboards and appliances.',
          'Ants: from small kitchen ants to ants nesting in walls and garden beds.',
          'Rats and mice: they chew wiring, contaminate food and carry disease.',
          'Mosquitoes and flies: mosquitoes in PNG can carry malaria and dengue, so reducing them around the home matters.',
          'Bed bugs, fleas and ticks: biting pests that spread between rooms, furniture and pets.',
          'Wood borers and beetles, weevils and moths: pests of timber, furniture and stored food.',
        ],
      },
    ],
    photos: [{ src: PH, alt: 'Bismarck Pest Management technician treating a home in Port Moresby' }],
    faqs: [
      { q: 'How much does pest control cost in Port Moresby?', a: 'It depends on the size of the property, which pests you have and how bad the problem is. We give free quotes: call +675 7654 3386 or message us on WhatsApp with what you are seeing and the size of the place.' },
      { q: 'Do I need to leave the house during treatment?', a: 'For most general treatments you only need to stay out of the treated rooms for a few hours. We will tell you exactly what to do before we start, including covering food and keeping children and pets away until it is dry.' },
      { q: 'How do I get rid of cockroaches for good?', a: 'Cockroaches come back when the treatment only hits the ones you can see. We treat where they hide and breed (drains, cupboards, roof spaces, behind appliances) and give you advice on food and water sources so they do not return.' },
      { q: 'Do you treat bed bugs?', a: 'Yes. Bed bugs hide in mattresses, bed frames and furniture joints, so we treat bedrooms thoroughly and tell you how to prepare bedding and clothing beforehand.' },
    ],
  },
  {
    slug: 'fumigation-services',
    kind: 'category',
    gbpCategory: 'Fumigation service',
    navName: 'Fumigation Services',
    title: 'Fumigation Services in Port Moresby, PNG | Bismarck Pest',
    description: 'Fumigation of shipping containers, import and export commodities, artifacts and handicrafts in Port Moresby and across PNG. Free quotes on +675 7654 3386.',
    h1: 'Fumigation Services in Port Moresby',
    sub: 'Containers, import and export commodities, artifacts and handicrafts, and stored goods.',
    blurb: 'Shipping containers, import/export commodities, artifacts and handicrafts.',
    answer: 'Bismarck Pest Management provides fumigation services in Port Moresby and across Papua New Guinea: shipping containers, import and export commodities, artifacts and handicrafts, and stored goods in warehouses. Call +675 7654 3386 to book a fumigation or get a quote.',
    intro: [
      'Fumigation reaches pests that sprays cannot: insects deep inside bags of produce, timber, carvings and packed containers. It is how goods are cleared of pests before they cross a border, and how infested stock is saved instead of thrown away.',
      'We fumigate for exporters, importers, businesses and individuals. Whether you have a full container leaving port or a few carvings to take overseas, tell us what the goods are and where they are going, and we will work out the right treatment.',
    ],
    includes: [
      'Shipping container fumigation (import and export)',
      'Fumigation of import and export commodities',
      'Artifact and handicraft fumigation for travel and export',
      'Stored-product pest treatment for warehouses and agricultural storage',
      'Treatment of goods infested with weevils, beetles, moths and wood borers',
    ],
    signs: [
      'Your buyer, shipping line or the destination country requires treated goods',
      'You are taking carvings, bilums or other handicrafts overseas',
      'Stored produce or goods show weevils, beetles or moths',
      'Timber items show borer holes or fine powder (frass)',
    ],
    why: [
      { t: 'Containers to carvings', d: 'We handle everything from a full shipping container to a single box of handicrafts.' },
      { t: 'Exporters and importers', d: 'Fumigation of import and export commodities is a core part of what we do, not an add-on.' },
      { t: 'Clear advice', d: 'Tell us what the goods are and where they are going, and we will tell you what treatment is needed and how long it takes.' },
    ],
    photos: [{ src: PH, alt: 'Shipping container under fumigation in Port Moresby by Bismarck Pest Management' }],
    faqs: [
      { q: 'How long does fumigation take?', a: 'It depends on the goods, the volume and the treatment required. Many treatments need the goods sealed for a full day or longer, plus time to air out afterwards. Tell us your shipping or travel date and we will plan around it.' },
      { q: 'Is fumigation safe?', a: 'Fumigants are toxic while the treatment is running, which is why fumigation is done by trained people with the area sealed and secured. Goods are aired out before they are released.' },
      { q: 'Can you fumigate goods for export?', a: 'Yes. We fumigate shipping containers and import and export commodities. Check your buyer’s and the destination country’s requirements and share them with us so the treatment matches.' },
    ],
  },
  {
    slug: 'container-fumigation',
    kind: 'service',
    parent: 'fumigation-services',
    navName: 'Container Fumigation',
    title: 'Shipping Container Fumigation in PNG | Bismarck Pest',
    description: 'Shipping container and commodity fumigation for importers and exporters in Port Moresby, Lae and across PNG. Call Bismarck Pest Management on +675 7654 3386.',
    h1: 'Shipping Container Fumigation',
    sub: 'Fumigation of containers and import and export commodities for traders across PNG.',
    blurb: 'Import and export containers and commodities, treated before they ship or after they land.',
    answer: 'Bismarck Pest Management fumigates shipping containers and import and export commodities in Port Moresby and across Papua New Guinea. We treat full and loaded containers and the goods inside them so they are free of insects before shipping or release. Call +675 7654 3386 to book.',
    intro: [
      'A container can sit loaded for weeks, and insects in one bag of produce or one wooden pallet can spread through the whole load. Many buyers and destination countries require goods to be treated before they arrive, and a rejected container costs far more than the fumigation.',
      'We fumigate loaded containers and commodities for importers and exporters. Tell us what is in the container, where it is going and when it ships, and we will book the treatment around your schedule.',
    ],
    includes: [
      'Fumigation of loaded export containers',
      'Treatment of imported containers and goods',
      'Commodity fumigation: produce, bagged goods and stored products',
      'Timber and wood packaging infested with borers or beetles',
      'Planning around your shipping date',
    ],
    signs: [
      'Your buyer or the importing country requires fumigated goods',
      'Insects found in a container or in goods on arrival',
      'Bagged produce or stored commodities waiting for shipment',
      'Wooden crates, pallets or timber in the load',
    ],
    why: [
      { t: 'Built for traders', d: 'Container and commodity fumigation is one of the main services we offer, for both import and export.' },
      { t: 'Port Moresby and Lae', d: 'We are based in Port Moresby and also cover Lae, PNG’s busiest cargo port, plus jobs nationwide.' },
      { t: 'On your timeline', d: 'Fumigation needs sealed time and airing time. Book early and we will schedule it so your container makes its sailing.' },
    ],
    photos: [{ src: PH, alt: 'Loaded shipping container being fumigated for export in Papua New Guinea' }],
    faqs: [
      { q: 'How far ahead should I book container fumigation?', a: 'As early as you can, ideally as soon as you know your shipping date. The treatment itself takes time and the goods need to air out before release, so a few days’ notice makes it much easier to meet your sailing.' },
      { q: 'Can you fumigate a container that is already packed?', a: 'Yes. Most container fumigation is done on loaded containers so the goods and the packaging are treated together.' },
      { q: 'What goods can be fumigated in a container?', a: 'Produce, bagged commodities, timber and wooden items, handicrafts and general cargo are commonly treated. Tell us what is in the load and we will confirm the right treatment.' },
    ],
  },
  {
    slug: 'artifact-handicraft-fumigation',
    kind: 'service',
    parent: 'fumigation-services',
    navName: 'Artifact & Handicraft Fumigation',
    title: 'Artifact & Handicraft Fumigation, Port Moresby',
    description: 'Fumigation of carvings, masks, bilums, woven baskets and other PNG artifacts and handicrafts before travel or export. Call +675 7654 3386.',
    h1: 'Artifact & Handicraft Fumigation',
    sub: 'Carvings, masks, bilums and woven pieces treated before they leave PNG.',
    blurb: 'Carvings, masks, bilums and woven pieces treated before travel or export.',
    answer: 'Bismarck Pest Management fumigates artifacts and handicrafts in Port Moresby, including wooden carvings, masks, bilums, woven baskets and mats, for travellers, vendors and exporters taking them out of Papua New Guinea. Call +675 7654 3386 or WhatsApp us with your items and travel date.',
    intro: [
      'PNG carvings, masks, bilums and woven pieces are made from natural materials: timber, fibre, shell, seeds and feathers. Those materials can carry borers, beetles and other insects, which is why countries like Australia and New Zealand are strict about letting them in untreated.',
      'Fumigating your pieces before you travel or ship them protects the items and gives you the best chance of getting them through biosecurity at the other end. Bring them in to our office at 6 Mile, tell us when you fly or ship, and we will treat them in time.',
    ],
    includes: [
      'Wooden carvings, masks, storyboards and statues',
      'Bilums, woven baskets, mats and fans',
      'Pieces with shell, seeds, feathers or natural fibre',
      'Single items for travellers through to vendor and export lots',
      'Advice on packing treated items so they stay clean',
    ],
    signs: [
      'You are flying out with carvings or handicrafts as gifts or souvenirs',
      'You sell handicrafts to buyers overseas',
      'You are shipping traditional items for an event, exhibition or museum',
      'A carving shows small holes or fine wood powder',
    ],
    why: [
      { t: 'Protect the piece', d: 'Borers and beetles can keep damaging a carving long after it is bought. Fumigation stops them.' },
      { t: 'Smoother biosecurity', d: 'Untreated natural items are often held or refused overseas. Treating them first gives you the best chance of keeping them.' },
      { t: 'Plan around your flight', d: 'Tell us your travel date when you drop off the items and we will schedule the treatment so they are ready before you leave.' },
    ],
    sections: [
      {
        h: 'Before you bring your items in',
        p: ['A few things make the treatment quicker and more reliable:'],
        list: [
          'Bring them in as early as you can. Fumigation needs sealed time plus time to air out.',
          'Remove plastic wrapping so the treatment can reach the item.',
          'Check the rules of the country you are taking them to. Some items (for example certain animal products or seeds) may not be allowed in even after treatment.',
          'Tell us your flight or shipping date and how many pieces you have.',
        ],
      },
    ],
    photos: [{ src: PH, alt: 'PNG wooden carvings and bilums prepared for fumigation at Bismarck Pest Management, Port Moresby' }],
    faqs: [
      { q: 'Do I need to fumigate carvings before taking them to Australia?', a: 'Australia inspects wooden and woven items closely at the border and can hold, treat or refuse items that show pests or are not treated. Fumigating your pieces in PNG before you travel gives them the best chance of getting through. Always check the Australian biosecurity rules for your specific items.' },
      { q: 'How long does handicraft fumigation take?', a: 'Allow at least a day or two for the treatment and airing out. Bring the items in well before your flight, and tell us your travel date so we can plan it.' },
      { q: 'Can I bring just one or two carvings?', a: 'Yes. We treat everything from a single carving for a traveller to larger lots for vendors and exporters.' },
      { q: 'Will fumigation damage my carving or bilum?', a: 'Fumigation is a gas treatment, so it reaches into the item without scrubbing or soaking it. If you have a delicate or very valuable piece, mention it when you bring it in.' },
    ],
  },
  {
    slug: 'termite-control',
    kind: 'category',
    gbpCategory: 'Termite control service',
    navName: 'Termite Control',
    title: 'Termite Control in Port Moresby, PNG | Bismarck Pest',
    description: 'Termite treatment for existing homes and buildings, plus pre-construction soil treatment, in Port Moresby and across PNG. Call +675 7654 3386.',
    h1: 'Termite Control in Port Moresby',
    sub: 'Post-construction termite treatment for existing buildings and soil treatment for new builds.',
    blurb: 'Treatment for existing buildings and soil treatment before you build.',
    answer: 'Bismarck Pest Management provides termite control in Port Moresby, Lae, Mt. Hagen and across Papua New Guinea. We treat termites in existing houses and buildings (post-construction) and treat the soil before new slabs and foundations are laid (pre-construction). Call +675 7654 3386 for a quote.',
    intro: [
      'Termites eat timber from the inside, so most people only find them once the damage is done: a door frame that sounds hollow, a soft floorboard, or mud tubes running up a wall or post. In PNG’s warm, humid climate they are active all year.',
      'We treat termites in two ways. For existing buildings, we treat the soil and structure around the building to stop termites getting in and to deal with active colonies. For new buildings, we treat the ground before the concrete is poured, which is the cheapest time to protect a building for the long term.',
    ],
    includes: [
      'Post-construction termite treatment for houses and buildings',
      'Soil treatment around footings, posts and slab edges',
      'Treatment of active termite workings',
      'Pre-construction soil treatment for new builds',
      'Advice on reducing termite risk around your property',
    ],
    signs: [
      'Mud tubes on walls, posts, stumps or foundations',
      'Timber that sounds hollow or crumbles when pressed',
      'Swarms of winged insects around lights, especially after rain',
      'Doors and windows that suddenly stick',
      'You are about to pour a slab or build footings',
    ],
    why: [
      { t: 'Before and after building', d: 'We handle both pre-construction soil treatment and post-construction treatment, so one company covers the life of the building.' },
      { t: 'Homes and commercial sites', d: 'Houses, offices, shops, warehouses and industrial buildings all get the same careful treatment.' },
      { t: 'Straight answers', d: 'If we find termites we will show you where, explain the treatment, and give you a clear quote before we start.' },
    ],
    sections: [
      {
        id: 'post-construction',
        h: 'Post-construction termite treatment',
        p: [
          'For a building that is already standing, termites usually come up from the soil and into timber through footings, posts, slab edges and cracks. Treatment focuses on creating a treated zone in the soil around the building and dealing with any active workings we find.',
          'Every building is different (raised house on posts, slab, block walls, timber frame), so we inspect first and then explain what treatment suits your building.',
        ],
      },
    ],
    photos: [{ src: PH, alt: 'Termite treatment around the footings of a house in Port Moresby' }],
    faqs: [
      { q: 'How do I know if I have termites?', a: 'Look for mud tubes on walls, posts or foundations, timber that sounds hollow, sticking doors and windows, and winged insects swarming around lights after rain. If you see any of these, call us for an inspection.' },
      { q: 'How much does termite treatment cost?', a: 'It depends on the size and type of building and how much treatment it needs. We inspect first and give you a clear quote before starting.' },
      { q: 'Can you treat termites in a house that is already built?', a: 'Yes. That is post-construction termite treatment: we treat the soil and structure around the building and deal with any active termites we find.' },
    ],
  },
  {
    slug: 'pre-construction-termite-treatment',
    kind: 'service',
    parent: 'termite-control',
    navName: 'Pre-Construction Termite Treatment',
    title: 'Pre-Construction Termite & Soil Treatment, PNG',
    description: 'Pre-construction termite soil treatment for new houses and buildings in Port Moresby and across PNG, before the slab is poured. Call Bismarck Pest on +675 7654 3386.',
    h1: 'Pre-Construction Termite & Soil Treatment',
    sub: 'Treat the ground before the concrete goes down: the cheapest time to protect a building.',
    blurb: 'Soil treatment before slabs and footings are poured on new builds.',
    answer: 'Bismarck Pest Management provides pre-construction termite and soil treatment in Port Moresby and across Papua New Guinea. We treat the soil under and around new slabs and footings before the concrete is poured, for builders, developers and owners building homes, offices and commercial buildings. Call +675 7654 3386 to book.',
    intro: [
      'Once a slab is poured, the soil under it can never be reached again. Treating the ground before the concrete goes down puts a protective barrier exactly where termites would come up into the building.',
      'We work with builders, contractors and owners. Tell us when the site will be prepared and when the pour is booked, and we will time the soil treatment so it fits between the two without holding up the job.',
    ],
    includes: [
      'Soil treatment of the slab and footing area before the pour',
      'Treatment around service penetrations (pipes and conduits)',
      'Treatment of trenches for footings and perimeter beams',
      'Scheduling around your site preparation and pour date',
      'Houses, offices, commercial and industrial buildings',
    ],
    signs: [
      'You have a new house or building about to start',
      'Your slab or footings are being prepared',
      'Your builder or financier asks for termite treatment',
      'You are extending an existing building with a new slab',
    ],
    why: [
      { t: 'Right time, right place', d: 'Treating the soil before the pour protects the area that is hardest to reach later.' },
      { t: 'Fits your build', d: 'We schedule around your site works and pour date so the treatment does not hold up the job.' },
      { t: 'One company for later', d: 'We also do post-construction termite treatment, so you have someone to call for the life of the building.' },
    ],
    photos: [{ src: PH, alt: 'Pre-construction termite soil treatment on a building site in Papua New Guinea' }],
    faqs: [
      { q: 'When should pre-construction termite treatment be done?', a: 'After the ground is prepared and the footing trenches and plumbing are in, and before the concrete is poured. Tell us your pour date and we will plan the treatment for just before it.' },
      { q: 'Do I still need termite treatment later?', a: 'Pre-construction treatment protects the ground under the slab. It is still worth having the building checked over the years, especially for timber added later, such as stairs, decks and fences.' },
      { q: 'Do you treat commercial building sites?', a: 'Yes. We treat sites for houses, offices, commercial and industrial buildings.' },
    ],
  },
  {
    slug: 'fogging-and-misting',
    kind: 'service',
    parent: 'general-pest-control',
    navName: 'Fogging & Misting',
    title: 'Mosquito Fogging & Misting in Port Moresby | Bismarck',
    description: 'Fogging and misting for mosquitoes and flies around homes, businesses, hotels and work sites in Port Moresby and across PNG. Call Bismarck Pest on +675 7654 3386.',
    h1: 'Fogging & Misting in Port Moresby',
    sub: 'Knock down mosquitoes and flies around homes, businesses and work sites.',
    blurb: 'Mosquito and fly fogging and misting for yards, premises and sites.',
    answer: 'Bismarck Pest Management provides fogging and misting in Port Moresby, Lae, Mt. Hagen and across Papua New Guinea to reduce mosquitoes and flies around homes, compounds, hotels, restaurants, offices and work sites. Call +675 7654 3386 to book a treatment.',
    intro: [
      'Mosquitoes are more than a nuisance in PNG: they can carry malaria and dengue. Fogging and misting put a fine treatment through the air and into vegetation, drains and dark corners where mosquitoes and flies rest during the day.',
      'We fog and mist yards, compounds, hotel and resort grounds, restaurants, offices, warehouses and work camps. For the best result we also point out standing water and breeding spots on the property, because removing those keeps numbers down between treatments.',
    ],
    includes: [
      'Mosquito fogging for yards, compounds and grounds',
      'Misting of vegetation, drains and resting areas',
      'Fly treatment around kitchens, bins and waste areas',
      'Treatment ahead of events and functions',
      'Advice on removing standing water and breeding sites',
    ],
    signs: [
      'Mosquitoes biting at dusk and in the evening',
      'Flies around kitchens, bins or waste areas',
      'Standing water, blocked drains or overgrown areas on the property',
      'You have an event, function or guests coming',
    ],
    why: [
      { t: 'Health first', d: 'Reducing mosquitoes around where people live and work lowers the chance of bites from disease-carrying mosquitoes.' },
      { t: 'Any size of site', d: 'From a house yard to hotel grounds, warehouses and work camps.' },
      { t: 'Lasting advice', d: 'We show you the breeding spots on your property so you can keep numbers down between treatments.' },
    ],
    photos: [{ src: PH, alt: 'Technician fogging for mosquitoes around a property in Port Moresby' }],
    faqs: [
      { q: 'Does fogging get rid of mosquitoes?', a: 'Fogging quickly knocks down adult mosquitoes in the treated area. Because new mosquitoes keep breeding in standing water, the best results come from fogging combined with removing breeding sites and repeat treatments when needed.' },
      { q: 'What is the difference between fogging and misting?', a: 'Both spread a fine treatment through the air. Fogging produces a very fine fog that drifts through an area, while misting uses slightly larger droplets that settle on vegetation and surfaces where insects rest. We use whichever suits the site.' },
      { q: 'Can you fog before an event?', a: 'Yes. Tell us the date and the venue, and we will schedule the treatment close to the event so it has the most effect.' },
    ],
  },
  {
    slug: 'disinfection-services',
    kind: 'category',
    gbpCategory: 'VERIFY: disinfection category name in GBP',
    navName: 'Disinfection Services',
    title: 'Disinfection Services in Port Moresby | Bismarck Pest',
    description: 'Public health disinfection for offices, shops, hotels, restaurants, warehouses and homes in Port Moresby and across PNG. Call +675 7654 3386.',
    h1: 'Disinfection Services in Port Moresby',
    sub: 'Public health disinfection for workplaces, public areas and homes.',
    blurb: 'Public health disinfection for offices, shops, hotels and homes.',
    answer: 'Bismarck Pest Management provides public health disinfection in Port Moresby and across Papua New Guinea for offices, shops, hotels, restaurants, warehouses, public areas and homes. Call +675 7654 3386 to arrange a disinfection.',
    intro: [
      'Disinfection is about people’s health: treating the surfaces and spaces people share so germs do not spread. It is common after an illness in the workplace, after a pest infestation, or as a regular part of keeping a busy site clean.',
      'We disinfect offices, shops, restaurants, hotels, warehouses and homes. Tell us the size of the area and what has happened, and we will plan a treatment that fits around your opening hours.',
    ],
    includes: [
      'Office and workplace disinfection',
      'Shops, restaurants and food areas',
      'Hotels, guest rooms and common areas',
      'Warehouses and industrial sites',
      'Homes, including after an illness or a pest infestation',
    ],
    signs: [
      'Illness has spread through a workplace or household',
      'Rats or cockroaches have contaminated an area',
      'A space needs to be cleaned and disinfected before reopening',
      'You want regular disinfection of a busy public area',
    ],
    why: [
      { t: 'Public health focus', d: 'Disinfection sits alongside our pest control and fumigation work, all aimed at keeping people healthy.' },
      { t: 'Works around you', d: 'We schedule around your trading hours to keep disruption low.' },
      { t: 'One call', d: 'If pests caused the problem, we can treat the pests and disinfect the area on the same job.' },
    ],
    photos: [{ src: PH, alt: 'Disinfection of an office in Port Moresby by Bismarck Pest Management' }],
    faqs: [
      { q: 'How long does disinfection take?', a: 'It depends on the size of the area. Most rooms and offices can be treated in a single visit. Tell us the size of the space and we will give you a time estimate with your quote.' },
      { q: 'Can you disinfect after rats or cockroaches?', a: 'Yes. Rats and cockroaches contaminate surfaces where they travel, so we can treat the pests and disinfect the affected areas together.' },
      { q: 'Do you disinfect homes as well as businesses?', a: 'Yes. We disinfect homes, offices, shops, hotels, restaurants and warehouses.' },
    ],
  },
  {
    slug: 'commercial-pest-control',
    kind: 'situation',
    navName: 'Commercial Pest Control',
    title: 'Commercial Pest Control in Port Moresby | Bismarck',
    description: 'Pest control and fumigation for hotels, restaurants, shops, offices, warehouses, industrial sites and agricultural storage in PNG. Call +675 7654 3386.',
    h1: 'Commercial Pest Control in Port Moresby',
    sub: 'For hotels, restaurants, shops, offices, warehouses, industrial sites and agricultural storage.',
    blurb: 'Hotels, restaurants, shops, offices, warehouses and industrial sites.',
    answer: 'Bismarck Pest Management provides commercial pest control in Port Moresby, Lae, Mt. Hagen and across Papua New Guinea for hotels, restaurants, shops, offices, warehouses, industrial sites and agricultural storage. We cover general pest control, termites, fumigation, fogging and disinfection. Call +675 7654 3386.',
    intro: [
      'For a business, one cockroach in a dining room or one rat in a storeroom can cost customers and stock. Pests in food areas, guest rooms and warehouses need to be controlled consistently, not just when someone complains.',
      'We work with hotels, restaurants, shops, offices, warehouses, industrial sites and agricultural storage. Because we also do fumigation, termite treatment, fogging and disinfection, one company can look after every pest problem on your site.',
    ],
    includes: [
      'Cockroach, ant, rodent and fly control for food businesses',
      'Bed bug and pest treatment for hotels and guest rooms',
      'Rodent and stored-product pest control for warehouses',
      'Fumigation of stored goods and agricultural storage',
      'Termite treatment for commercial buildings',
      'Fogging, misting and disinfection of premises',
    ],
    signs: [
      'Customers or staff have seen cockroaches or rats',
      'Stock in the warehouse has been chewed, contaminated or infested',
      'Guests have reported bites',
      'You want a regular pest control service for your premises',
    ],
    why: [
      { t: 'Every pest, one company', d: 'General pest control, fumigation, termite treatment, fogging and disinfection all from one team.' },
      { t: 'Built around trading hours', d: 'We plan treatments to keep disruption to your customers and staff low.' },
      { t: 'Nationwide reach', d: 'Based in Port Moresby, covering Lae, Mt. Hagen and sites across PNG.' },
    ],
    photos: [{ src: PH, alt: 'Commercial pest control in a warehouse in Port Moresby' }],
    faqs: [
      { q: 'Do you offer regular pest control for businesses?', a: 'Yes. Tell us about your premises and we will recommend how often it should be treated and give you a quote.' },
      { q: 'Can you treat a restaurant without closing it?', a: 'In most cases we schedule treatment outside trading hours or in sections so you can keep operating. We will tell you what preparation is needed beforehand.' },
      { q: 'Do you work outside Port Moresby?', a: 'Yes. We also cover Lae, Mt. Hagen and commercial sites across Papua New Guinea. Call us with the location and the job.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
export const categories = services.filter((s) => s.kind === 'category');
export const childrenOf = (slug: string) => services.filter((s) => s.parent === slug);
