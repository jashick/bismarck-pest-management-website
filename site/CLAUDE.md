# Bismarck Pest Management website (bismarckpest.com)

Static Astro site built from Jeremy's website starter (GitHub jashick/website-starter). Pest control + fumigation
company in Port Moresby, Papua New Guinea. Deep teal + burnt orange brand, Barlow / Barlow Condensed.
Use the `local-seo-website` skill for how to work on it. GitHub repo is the source of truth.

## NAP (from GBP, copied 2026-11-25) — lives only in src/data/site.ts
- Bismarck Pest Management · 6 Mile Incubation Center & Open Market, Saraga St, Port Moresby 121 National Capital
  District, Papua New Guinea · +675 7654 3386
- GBP place_id ChIJbcp1Nz8xAmkRLyJzzhzDzDg, CID 4092860689863090735 · hours Mon–Sat 8:30am–4:30pm, Sun closed
  · 4.0 stars (4 reviews on Nov 25) · pin -9.4535731, 147.2093805
- Jeremy's request said "Bismarck Pest Services"; the GBP name is "Bismarck Pest Management" (used on the site).
- Second number 7320 2309 was listed somewhere (not on the GBP): NOT on the site. Confirm with Timothy.

## Business facts
- Owner: Timothy Thomas (Jeremy 2026-11-25; LinkedIn "Timothy T. Thomas" pg.linkedin.com/in/timothy-t-thomas-40089a1b2,
  used as Person sameAs on /about/).
- Email operations@bismarckpest.com (domain assumed bismarckpest.com from the email). Facebook
  facebook.com/fumigationpestcontrolmanagers. Phone doubles as WhatsApp (site.whatsapp → wa.me links).
- Services (Jeremy's GBP/Facebook summary): general pest control; fumigation (import/export commodities, shipping
  containers, artifacts, handicrafts); pre- and post-construction termite and soil treatment; fogging and misting;
  public health disinfection.
- Pests: cockroaches, ants, termites, rats/mice, mosquitoes, flies, bed bugs, fleas, ticks, wood borers, beetles,
  weevils, moths. Sectors: residential, commercial, industrial, warehouses, hotels, restaurants, shops, offices,
  agricultural storage. Coverage: Port Moresby (base), Mt. Hagen, Lae, nationwide.
- Year founded, license/registration, payment methods: unknown (fields empty).

## Structure map
Primary category: Pest control service → Home (/), "Pest Control & Fumigation in Port Moresby"
  Category page: /general-pest-control/ (gbp Pest control service)
    Service: /fogging-and-misting/
  Secondary: Fumigation service → /fumigation-services/
    Services: /container-fumigation/ (containers + import/export commodities), /artifact-handicraft-fumigation/
  Secondary: Termite control service → /termite-control/ (post-construction as a section)
    Service: /pre-construction-termite-treatment/
  Secondary: (VERIFY name, e.g. "Disinfecting service") → /disinfection-services/
  Situation: /commercial-pest-control/
  VERIFY every category name exists in GBP. Competitor categories NOT scraped yet (map pack for "pest control Port
  Moresby": ProPest Control Limited 4.8/33, Complete Pest Control 3.6/45, Universal Pest Control 4.1/13). Maps tests
  not run. ProPest's reviews are full of "fumigated our traditional items to fly to Brisbane/Japan": the artifact
  page is a real money page.
Areas (src/data/areas.ts, `province` field shows instead of NCD): lae (Morobe Province), mount-hagen (Western
  Highlands Province). 9 service sections each. Port Moresby = homepage.
Other: /about/ /get-a-quote/ /services/ /service-areas/ /faq/ /privacy/ /thank-you/ /404

## Starter changes made here (copy back to the starter when convenient)
- site.ts: country, countryCode (schema addressCountry), whatsapp + waLink() (topbar, footer, quote card, homepage)
- areas.ts: optional province per area; [area].astro uses it
- schema.ts default areaServed = site.serviceArea; ServiceCards cards--3 for 6/9 cards
- build.sh needs rsync (cloud workspace has none: run `npx astro build` + `python3 scripts/make_preview.py dist ../preview`)

## Photos
- None yet. Every hero/card is a placeholder (check.py: 38 errors, all placeholders).
- Logo: no logo file found; made a temporary wordmark (hexagon "B" + BISMARCK / PEST MANAGEMENT) in
  public/images/brand. Ask for the real logo.
- PHOTOS NEEDED: Timothy (headshot / in uniform), team, vehicle, a container under fumigation (tarped/sealed),
  carvings/bilums being prepared for fumigation, termite soil treatment on a slab site, fogging in a yard,
  a commercial job (warehouse/restaurant), the 6 Mile office front. Check owner-uploaded GBP and Facebook photos.

## Unconfirmed claims (confirm with Timothy before launch)
- Free quotes; WhatsApp on the main number; walk-in drop-off of handicrafts at the 6 Mile office
- Handicraft fumigation turnaround "at least a day or two"; that they treat single items for travellers
- Container fumigation of loaded containers at Lae port; whether jobs in Lae / Mt. Hagen are done by travelling
  from Port Moresby or local staff (copy says "covered from our Port Moresby base")
- Regular/ongoing commercial service; working outside trading hours
- Disinfection types (after illness, after rodent/cockroach contamination)
- Whether they provide treatment certificates for export (site does not claim it; worth adding if true)
- Area copy general facts: Lae = industrial/port city, very wet; Mt. Hagen = Highlands coffee/produce hub, Kagamuga
  airport, Highlands Highway. Neighbourhood lists kept general.

## Commands (run from this folder)
- npx astro build && python3 scripts/make_preview.py dist ../preview   (or ./build.sh --preview on the Mac)
- python3 scripts/check.py dist [--screens]
- ./publish.sh (staging) / ./publish.sh --live (only when approved)

## Log
- 2026-11-25: Built from the starter in a cloud session. 20 pages. check.py: 38 errors, all placeholder images,
  0 warnings. Screenshots 1280/390 reviewed.

## Open items
- Real photos + logo; GHL form embed → site.ts ghl.quoteForm (redirect /thank-you/); GA4 ID
- Domain/hosting (is bismarckpest.com live? on what host?), deploy.config.json + FTP creds; preview upload to
  preview.catapultlocal.com/BismarckPest/ from the Mac
- Competitor GBP categories + Maps tests; then GBP alignment (section 12 of the skill)
- Confirm the unconfirmed claims above
