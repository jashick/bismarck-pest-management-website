# Bismarck Pest Management website (https://www.bismarckpest.com)

Static Astro site built from Jeremy's website starter (GitHub jashick/website-starter). Pest control + fumigation
company in Port Moresby, Papua New Guinea. Navy + red brand (from their logo), Barlow / Barlow Condensed.
Repo: github.com/jashick/bismarck-pest-management-website. Preview: https://preview.catapultlocal.com/BismarckPest/
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
- Domain https://www.bismarckpest.com (Jeremy 2026-11-25: with www; the GBP website field also points there).
  Email operations@bismarckpest.com. Facebook
  facebook.com/fumigationpestcontrolmanagers. Phone doubles as WhatsApp (site.whatsapp → wa.me links).
- Services (Jeremy's GBP/Facebook summary): general pest control; fumigation (import/export commodities, shipping
  containers, artifacts, handicrafts); pre- and post-construction termite and soil treatment; fogging and misting;
  public health disinfection.
- Pests: cockroaches, ants, termites, rats/mice, mosquitoes, flies, bed bugs, fleas, ticks, wood borers, beetles,
  weevils, moths. Sectors: residential, commercial, industrial, warehouses, hotels, restaurants, shops, offices,
  agricultural storage. Coverage: Port Moresby (base), Mt. Hagen, Lae, nationwide.
- From the NAQIA Notice of Approval posted in the GBP photos (gbp-44.jpg, dated 28/07/2021): legal name Bismarck Pest
  Management Ltd; IPA registration 6-259410, registered 14 May 2021 (site.founded = 2021); approved 29 July 2021 to
  conduct Eco2fume phosphine fumigation for biosecurity and pre-shipment purposes; Eco2fume registration ECOPG0099
  (site.license); Cytec-accredited fumigators Timothy Thomas, Charlie Carlos, Paul Zamua (only Timothy named on site).
  The notice lists a different business location (Section 51, Allot 287, Geburi St, Morata 01) and PO Box 7923,
  Boroko 121, and email timothy.thomas@bismarckpest.com. Site uses the GBP address.
- The branded truck in the team photo shows another number (342 3542?). Not on the site.
- Payment methods: unknown.

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
- All 50 GBP "By owner" photos downloaded 2026-11-25 to _incoming/gbp/ (originals gitignored; sources.csv lists the
  URLs, photos.csv maps file → web name). 30 converted to public/images/photos (gbp-23 and gbp-31 rotated upright).
  Rest are promo flyers, the logo, and the NAQIA notice (not published as an image).
- Logo: real logo from the GBP (gbp-20.jpg, 745px JPEG on white). Low-res: ask for the original file. Footer shows it
  on a white card. Favicon = the red prohibition symbol from the logo.
- Still missing: artifact/handicraft fumigation photo (page uses the fumigator-with-cylinder shot), fogging photo,
  pre-construction soil treatment photo, the 6 Mile office front. (Timothy photo: _incoming/timothy-thomas.jpg, sent by Jeremy.)

## Unconfirmed claims (confirm with Timothy before launch)
- Free quotes; WhatsApp on the main number; walk-in drop-off of handicrafts at the 6 Mile office
- Handicraft fumigation turnaround "at least a day or two"; that they treat single items for travellers
- Container fumigation of loaded containers at Lae port; whether jobs in Lae / Mt. Hagen are done by travelling
  from Port Moresby or local staff (copy says "covered from our Port Moresby base")
- Regular/ongoing commercial service; working outside trading hours
- Disinfection types (after illness, after rodent/cockroach contamination)
- Whether they provide treatment certificates for export (site does not claim it; worth adding if true)
- NAQIA approval still current (notice is from July 2021); NAQIA is now the PNG Biosecurity Authority on some sites
- Area copy general facts: Lae = industrial/port city, very wet; Mt. Hagen = Highlands coffee/produce hub, Kagamuga
  airport, Highlands Highway. Neighbourhood lists kept general.

## Commands (run from this folder)
- npx astro build && python3 scripts/make_preview.py dist ../preview   (or ./build.sh --preview on the Mac)
- python3 scripts/check.py dist [--screens]
- ./publish.sh (staging) / ./publish.sh --live (only when approved)

## Log
- 2026-11-25: Domain back to https://www.bismarckpest.com (Jeremy). Timothy's photo (sent by Jeremy) on /about/ + Person schema.
- 2026-11-25: GBP photos pass. GBP owner photos + real logo added; colors
  switched to the logo's navy/red; NAQIA approval added (fumigation pages, About, FAQ, footer, schema hasCredential);
  footer link to catapultlocal.com/pest-control-marketing/. check.py 0 errors 0 warnings. Pushed to GitHub, deployed
  to preview.catapultlocal.com/BismarckPest/.
- 2026-11-25: Built from the starter in a cloud session. 20 pages. check.py: 38 errors, all placeholder images,
  0 warnings. Screenshots 1280/390 reviewed.

## Open items
- Missing photos above + original logo file; GHL form embed → site.ts ghl.quoteForm (redirect /thank-you/); GA4 ID
- Hosting for bismarckpest.com (is something live there now? any old URLs to 301?), deploy.config.json + FTP creds
- Competitor GBP categories + Maps tests; then GBP alignment (section 12 of the skill)
- Confirm the unconfirmed claims above
