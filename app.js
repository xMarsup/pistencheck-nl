"use strict";
const euro = value => new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(value);
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const shortNames = {zoetermeer:"Zoetermeer", landgraaf:"Landgraaf", amsterdam:"Velsen / Amsterdam"};
function link(url, label) {
  return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}<span class="sr-only"> (neuer Tab)</span></a>`;
}
function route(origin, destination, mode="driving") {
  return "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(origin) + "&destination=" + encodeURIComponent(destination) + "&travelmode=" + mode;
}
function quote(hall, mode, duration) {
  if (hall.direct[duration] === null) return null;
  const voucher = mode === "voucher" && !["montana", "uithof"].includes(hall.id);
  const entry = voucher ? (duration === 4 ? 31.95 : 34.95) : hall.direct[duration];
  const total = Math.round((entry + hall.gear) * 100) / 100;
  return {entry, gear:hall.gear, total, rate:total / duration, pair:Math.round((total * 2 + hall.parking) * 100) / 100, voucher};
}
function galleryMarkup(hall) {
  const photos = GALLERIES[hall.id].photos, p = photos[0];
  return `<figure class="gallery" data-gallery="${hall.id}">
    <p class="gallery-hint">${photos.length} echte Pistenfotos · Pfeile / Wischen · zum Vergrößern Bild antippen</p>
    <div class="gallery-frame" tabindex="0" role="group" aria-label="Pistenbilder ${escapeHTML(hall.name)}. Mit Pfeiltasten blättern.">
      <img class="gallery-image" src="${escapeHTML(p.src)}" alt="${escapeHTML(p.caption)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async" draggable="false">
      <button type="button" class="gallery-arrow prev" data-step="-1" aria-label="${escapeHTML(hall.name)}: vorheriges Bild">‹</button>
      <button type="button" class="gallery-arrow next" data-step="1" aria-label="${escapeHTML(hall.name)}: nächstes Bild">›</button>
      <button type="button" class="photo-enlarge gallery-enlarge" aria-label="Pistenfoto von ${escapeHTML(hall.name)} vergrößern">⤢ Vergrößern</button>
      <span class="gallery-counter" aria-live="polite" aria-atomic="true">1 / ${photos.length}</span>
    </div>
    <figcaption><div class="gallery-caption"><div><strong class="gallery-title">${escapeHTML(p.title)}</strong><p class="gallery-description">${escapeHTML(p.caption)}</p></div><div class="gallery-dots" role="group" aria-label="Foto auswählen">${photos.map((photo, i) => `<button type="button" class="gallery-dot" data-photo="${i}" aria-label="Bild ${i + 1}: ${escapeHTML(photo.title)}" aria-pressed="${i === 0}"></button>`).join("")}</div></div><p class="gallery-credit">${escapeHTML(p.credit)} · ${link(p.source, "Bildquelle")}</p></figcaption>
  </figure>`;
}
function photoCreditMarkup(photo) {
  return `${escapeHTML(photo.credit)} · ${link(photo.source, "Bildquelle")}${photo.licenseUrl ? ' · '+link(photo.licenseUrl, 'Lizenz') : ''}`;
}
function albumMarkup(key, label, type='Ort') {
  const photos = MEDIA_ALBUMS[key]?.photos;
  if (!photos?.length) throw new Error(`Bildergalerie fehlt: ${key || label}`);
  const p = photos[0];
  return `<figure class="gallery item-gallery" data-album="${escapeHTML(key)}">
    <p class="gallery-hint">${photos.length} Bilder · Pfeile / Wischen · antippen zum Vergrößern</p>
    <div class="gallery-frame" tabindex="0" role="group" aria-label="${escapeHTML(type+' '+label)}: Bilder. Mit Pfeiltasten blättern.">
      <img class="gallery-image" src="${escapeHTML(p.src)}" alt="${escapeHTML(p.caption)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async" draggable="false">
      <button type="button" class="gallery-arrow prev" data-step="-1" aria-label="${escapeHTML(label)}: vorheriges Bild">‹</button>
      <button type="button" class="gallery-arrow next" data-step="1" aria-label="${escapeHTML(label)}: nächstes Bild">›</button>
      <button type="button" class="photo-enlarge gallery-enlarge" aria-label="${escapeHTML(label)}: Bild vergrößern">⤢ Vergrößern</button>
      <span class="gallery-counter" aria-live="polite" aria-atomic="true">1 / ${photos.length}</span>
    </div>
    <figcaption><div class="gallery-thumbnails" role="group" aria-label="${escapeHTML(label)}: Foto auswählen">${photos.map((photo,i) => `<button type="button" data-photo="${i}" aria-label="${escapeHTML(label)}: Bild ${i+1}, ${escapeHTML(photo.title)}" aria-pressed="${i === 0}"><img src="${escapeHTML(photo.thumb || photo.src)}" alt="" width="90" height="60" loading="lazy" decoding="async" draggable="false"><span>${i+1}</span></button>`).join('')}</div><div class="gallery-caption"><div><strong class="gallery-title">${escapeHTML(p.title)}</strong><p class="gallery-description">${escapeHTML(p.caption)}</p></div></div><p class="gallery-credit">${photoCreditMarkup(p)}</p></figcaption>
    ${MEDIA_ALBUMS[key].note ? `<p class="album-note">${escapeHTML(MEDIA_ALBUMS[key].note)}</p>` : ''}
  </figure>`;
}
function pistesMarkup(hall) {
  const gallery = GALLERIES[hall.id], colors = {red:"var(--red)", blue:"var(--blue)", green:"var(--green)"};
  return `<section class="pistes-section" aria-labelledby="pistes-${hall.id}"><h3 id="pistes-${hall.id}">Pisten & Platz zum Fahren</h3><p class="small-note">${escapeHTML(hall.areas)} · gemeinsame 400-m-Skala</p><ul class="piste-list">${hall.pistes.map(p => `<li class="piste-item" style="--piste-color:${colors[p.color]}"><div class="piste-label"><span class="piste-dot" aria-hidden="true"></span>${escapeHTML(p.name)}<strong>${p.length === null ? 'Länge offen' : p.length + ' m'}</strong></div>${p.length === null ? '' : `<div class="piste-track"><span style="--length:${p.length / 4}%"></span></div>`}</li>`).join("")}</ul><p class="piste-notes">${escapeHTML(hall.terrainNote)}</p><div class="inline-links">${link(hall.source, "Pisten beim Betreiber")}</div>
    <section class="piste-map"><h4>Aufteilung in der Halle</h4>${gallery.map ? `<button type="button" class="map-enlarge" data-enlarge-map="${hall.id}" aria-label="Hallenplan von ${escapeHTML(hall.name)} vergrößern"><img src="${escapeHTML(gallery.map.src)}" alt="${escapeHTML(gallery.map.caption)}" width="${gallery.map.width}" height="${gallery.map.height}" loading="lazy"><span class="photo-enlarge">⤢ Plan vergrößern</span></button><p>${escapeHTML(gallery.map.credit)} · ${link(gallery.map.source, "Planquelle")}</p>` : '<p class="piste-notes">Kein belastbarer offizieller Pistenplan gefunden. Die Längenbalken vergleichen die Größe und bilden keinen Grundriss ab.</p>'}</section>
  </section>`;
}
function pricesMarkup(hall) {
  const voucher = !["montana", "uithof"].includes(hall.id);
  const direct = [4, 6].map(d => quote(hall, "direct", d));
  const discounted = [4, 6].map(d => quote(hall, "voucher", d));
  function priceRow(label, values, key, className="") {
    return `<tr class="${className}"><th scope="row">${label}</th>${values.map(q => `<td>${key === 'gear' && q[key] === 0 ? 'inklusive' : euro(q[key])}</td>`).join("")}</tr>`;
  }
  return `<section class="price-section" aria-labelledby="prices-${hall.id}"><div class="price-heading"><h3 id="prices-${hall.id}">4 oder 6 Stunden Ski</h3><span>inkl. Ski & Schuhe</span></div>
    ${direct[0] ? `<table class="price-table" aria-label="Alle Skipreise ${escapeHTML(hall.name)}"><thead><tr><th scope="col">Pro Person · 13.10.2026</th><th scope="col">4 Stunden</th><th scope="col">6 Stunden</th></tr></thead><tbody>
      ${priceRow('Direktpreis', direct, 'total', 'price-total')}
      ${priceRow('davon Eintritt', direct, 'entry', 'price-sub')}
      ${priceRow('davon Ski & Schuhe', direct, 'gear', 'price-sub')}
      ${priceRow('Je geplanter Stunde', direct, 'rate')}
      ${priceRow('2 Personen + Auto', direct, 'pair')}
      ${voucher ? priceRow('Mit Parool-Gutschein<small>Einlösung noch nicht bestätigt</small>', discounted, 'total', 'price-total voucher-total') + priceRow('Je geplanter Stunde', discounted, 'rate') + priceRow('2 Personen + Auto', discounted, 'pair') : ''}
    </tbody></table>` : '<div class="unavailable-price"><h4>4 und 6 Stunden: kein Pass bestätigt</h4><p>Bestätigte Alternative: <strong>2 Stunden für 46 € p. P.</strong> inklusive Ski & Schuhe; 23 € je Stunde und 92 € für zwei + kostenloses Parken.</p><p>31,50 € Eintritt + 8,50 € Ski + 6 € Schuhe. Mehrere Pässe zu kombinieren wurde nicht bestätigt.</p></div>'}
    <p class="small-note">${hall.id === 'montana' ? 'Beide Spalten nutzen den gleichen Tagespass mit Material. Die Halle ist kleiner; mehr Zeit bedeutet häufigere Wiederholungen.' : hall.id === 'uithof' ? 'Im Betreiber-Shop sind nur 1- und 2-Stunden-Einzelkarten bestätigt.' : '6 Stunden fahren = 8-Stunden-Pass kaufen. Gutschein: 31,95 € / 34,95 € Eintritt + jeweils 18,95 € Material.'}</p>
    ${voucher ? `<div class="voucher-note"><strong>Gutscheinbedingungen geprüft, tatsächliche Einlösung offen.</strong> Gilt für diese Halle und eure Oktoberwoche. Ohne gekauften Code sind Termin, Materialauswahl und Gutscheinplätze nicht prüfbar. Reguläre Verfügbarkeit ist keine Gutschein-Zusage.</div><div class="inline-links">${link(VOUCHER_URL, "Gutschein & Bedingungen")}${link("https://shop.snowworld.com/nl/voucher", "Offizielle Einlösung")}</div>` : `<p class="small-note"><strong>${hall.id === 'montana' ? 'Kein zusätzlicher aktuell einlösbarer Rabatt bestätigt.' : 'Parool gilt bei De Uithof nicht; anderer passender Gutschein nicht bestätigt.'}</strong>${hall.id === 'montana' ? ' Montanas „Voucher“ ist ein Geschenkgutschein. Der 17,50-€-Anschluss-Skipass gilt nur nach Unterricht am selben Tag und passt nicht zu eurem Plan. ' + link("https://www.montana-snowcenter.nl/vouchers/", "Voucher-Bedingungen") : ''}</p>`}
    <div class="inline-links">${link(hall.booking, "Reguläre Tickets")}</div>
    <div class="operating-note"><strong>Betrieb & Verfügbarkeit</strong><p>${escapeHTML(hall.hours)}. ${escapeHTML(hall.warning)}</p><p>${escapeHTML(hall.availability)} Regulärer Ticketcheck: 05.10.2026, keine Platzgarantie.</p></div>
  </section>`;
}
function sourceLinks(sources) {
  return `<p class="source-links"><strong>Regelquellen · geprüft 06.10.2026:</strong><br>${sources.map(s => link(s.url, s.label)).join(" ")}</p>`;
}
function coffeeMarkup(hall) {
  const r = REGIONS[hall.id], c = r.coffee;
  return `<section class="coffee-section" aria-labelledby="coffee-${hall.id}"><h3 id="coffee-${hall.id}">Coffeeshops: wo & Zugang für Touristen</h3><span class="access-status ${c.tone}">${escapeHTML(c.status)}</span><p class="coffee-rule">${escapeHTML(c.rule)}</p>
    ${c.shops.map(s => `<article class="shop-row" data-shop-name="${escapeHTML(s.name)}"><div class="shop-top"><div><p class="shop-city">${escapeHTML(s.city)}</p><h4>${escapeHTML(s.name)}</h4><p class="shop-address">${escapeHTML(s.address)}</p></div>${s.rating ? `<div class="shop-rating"><strong>${escapeHTML(s.rating)}</strong><span>${s.reviews} Bewertungen</span><span>Greenmeister</span></div>` : ''}</div><p class="shop-distance">${escapeHTML(s.time)} ab Skihalle <small>${s.measured ? '· Routencheck 05.10.' : '· Schätzung'}</small></p><p class="shop-access">${escapeHTML(s.access)}</p><p class="shop-note">${escapeHTML(s.note)}</p>${albumMarkup(MEDIA_SHOPS[s.name+'|'+s.city], s.name+' · '+s.city, 'Coffeeshop')}${s.rating ? '' : '<p class="shop-no-rating">Keine vergleichbare Bewertung in diesem Check erhoben.</p>'}<div class="inline-links">${link(route(r.address, s.address), "Route ab Skihalle")}${s.profile ? link(s.profile, "Shopprofil") : ''}${s.website ? link(s.website, "Betreiber") : ''}</div></article>`).join("")}
    <p class="small-note">18+ und gültiger Ausweis. ${escapeHTML(GREENMEISTER_NOTE)}</p>${sourceLinks(c.sources)}
  </section>`;
}
function areaMarkup(hall) {
  const r = REGIONS[hall.id];
  return `<section class="area-section" aria-labelledby="area-${hall.id}"><h3 id="area-${hall.id}">Spa, Stadt, Meer & Ausflüge</h3><div class="region-intro"><h4>${escapeHTML(r.headline)}</h4><p>${escapeHTML(r.summary)}</p><p class="tradeoff"><strong>Für euch abwägen:</strong> ${escapeHTML(r.tradeoff)}</p></div><p class="small-note">Zeiten ab Skihalle mit dem Auto, ohne Verkehr. Ausflüge sind Vorschläge; Öffnungstage und Eintritt beim jeweiligen Betreiber prüfen.</p>
    <div class="place-list">${[...r.places, ...TRAVEL[hall.id].activities].map(p => `<article class="place-row ${p.destination ? 'with-photos' : 'place-geography-note'}" ${p.destination ? `data-place-name="${escapeHTML(p.title)}"` : ''}><div class="place-information"><div class="place-heading"><div><span class="place-kind">${escapeHTML(p.kind)}</span><h4>${escapeHTML(p.title)}</h4></div><span class="place-time">${escapeHTML(p.time)}${p.time.startsWith('ca.') ? '<small>Schätzung</small>' : ''}</span></div><p>${escapeHTML(p.description)}</p><div class="inline-links">${p.url ? link(p.url, "Betreiber / Infos") : ''}${p.destination ? link(route(r.address, p.destination), "Route ab Skihalle") : ''}</div></div>${p.destination ? albumMarkup(MEDIA_PLACES[p.destination], p.title, p.kind) : ''}</article>`).join("")}</div>
  </section>`;
}
function travelMarkup(hall) {
  const r = REGIONS[hall.id], t = r.transport;
  return `<section class="travel" aria-labelledby="travel-${hall.id}"><h3 id="travel-${hall.id}">Anreise, Parken & Übernachten</h3><div class="travel-intro"><p><strong>Adresse:</strong> ${escapeHTML(r.address)}</p><p>${escapeHTML(r.arrival)}</p><div class="inline-links">${link(route("Löningen, Deutschland", r.address), "Auto ab Löningen")}${link(route("Löningen, Deutschland", r.address, "transit"), "Bahn / Bus ab Löningen")}</div></div>
    <section class="travel-section"><h4>Parken</h4><p>${escapeHTML(t.parking)}</p>${t.parkingUrl ? `<div class="inline-links">${link(t.parkingUrl, "P+R: Tarif & Bedingungen")}</div>` : ''}</section>
    <section class="travel-section"><h4>Bus & Bahn vor Ort · ${escapeHTML(t.name)}</h4><p class="transport-price">${escapeHTML(t.price)}</p><p>${escapeHTML(t.description)}</p><p class="small-note">Kein kostenloses allgemeines Touristenticket bestätigt. Für zwei verdoppeln sich die Personentarife. Gästeticket oder Hotel-Shuttle nur einrechnen, wenn die Unterkunft es ausdrücklich anbietet.</p><div class="inline-links">${link(t.url, "Tarif & Gültigkeit")}</div></section>
    <section class="travel-section"><h4>Übernachten: drei Nächte zu zweit</h4><p>Die ${TRAVEL[hall.id].hotels.length} Unterkunftsvorschläge stehen direkt unten. Bisherige Preise für 11.–14.10. bleiben erhalten; zusätzlich seht ihr 12.–15.10. bei Abfahrt am Montag. Beide Suchen: 06.10.2026.</p><p class="small-note">Euer Gesamtbudget: 1.000 € für zwei. Pflichtgebühren, Tarifbedingungen und Frühstück vor der Buchung im ausgewählten Angebot prüfen.</p></section>
    ${hall.id === 'montana' ? '<section class="travel-section"><h4>Center Parcs: Ferienpark</h4><p>De Kempervennen ist ein Ferienpark mit Ferienhäusern, Schwimmbad und Freizeitangeboten. Für Montana braucht ihr keine Unterkunft im Park. Aqua Mundo gehört nicht zum Skipass; es ist kein großer Achterbahn-Freizeitpark.</p><div class="inline-links">' + link("https://www.centerparcs.de/de-de/niederlande/fp_KV_ferienpark-de-kempervennen", "De Kempervennen") + '</div>' + albumMarkup('kempervennen', 'De Kempervennen', 'Ferienpark') + '</section>' : ''}
  </section>`;
}
function mapPoint(point) {
  return {x:36 + (point.lon - 2.8) * 112, y:32 + (53.65 - point.lat) * 190};
}
function countryMapMarkup(hall) {
  const origin = mapPoint(COUNTRY_MAP.origin);
  return `<svg class="country-map" viewBox="0 0 730 675" role="img" aria-labelledby="map-title-${hall.id} map-description-${hall.id}"><title id="map-title-${hall.id}">Lage von ${escapeHTML(hall.name)} in den Niederlanden</title><desc id="map-description-${hall.id}">${escapeHTML(TRAVEL[hall.id].province)}. Der große grüne Punkt zeigt diese Halle; kleine Punkte zeigen die übrigen Hallen. Löningen liegt östlich in Deutschland.</desc><rect width="730" height="675" fill="#edf3f2"/>${COUNTRY_MAP.paths.map(p => `<path d="${p.path}" class="map-land ${p.country === 'Netherlands' ? 'map-netherlands' : ''}"/>`).join('')}<text x="114" y="210" class="map-water-label">Nordsee</text><text x="327" y="269" class="map-country-label">Niederlande</text><text x="557" y="444" class="map-country-label">Deutschland</text><text x="245" y="625" class="map-country-label">Belgien</text>${halls.map((h, i) => {const p = mapPoint(TRAVEL[h.id].coordinates); return `<g class="map-hall ${h.id === hall.id ? 'map-active' : ''}"><circle cx="${p.x}" cy="${p.y}" r="${h.id === hall.id ? 19 : 11}"/><text x="${p.x}" y="${p.y + 1}">${i + 1}</text></g>`;}).join('')}<circle cx="${origin.x}" cy="${origin.y}" r="7" fill="#a77932"/><text x="${origin.x - 6}" y="${origin.y - 16}" text-anchor="end" class="map-origin">Start: Löningen</text><path d="M655 82v-36m0 0-7 14m7-14 7 14" fill="none" stroke="#66746f" stroke-width="2"/><text x="655" y="37" text-anchor="middle" class="map-north">N</text></svg>`;
}
function driveTime(way) {
  if (!way) return 'Nicht gemessen';
  if (way.minutes < 5) return 'ca. 5 Min.';
  const low = Math.floor(way.minutes / 5) * 5, high = low + 5;
  return `ca. ${low}–${high} Min.`;
}
function regionVisualsMarkup(hall) {
  const r = TRAVEL[hall.id], arrival = r.arrival;
  const hours = Math.floor(arrival.minutes / 60), minutes = arrival.minutes % 60;
  return `<section class="region-visuals" aria-labelledby="location-${hall.id}"><div class="location-layout"><div class="location-map">${countryMapMarkup(hall)}<p class="map-legend"><span class="map-selected-dot" aria-hidden="true"></span>Großer Punkt: ${escapeHTML(shortNames[hall.id])} · kleine Punkte: eure anderen Favoriten</p></div><div class="location-copy"><p class="eyebrow">Lage & Anreise</p><h3 id="location-${hall.id}">${escapeHTML(r.province)}</h3><p>${escapeHTML(r.context)}</p><p class="geo-arrival"><strong>Ab Löningen:</strong> rund ${Math.round(arrival.km)} km · ${hours} Std. ${minutes} Min. reine Fahrzeit</p><p class="small-note">OSRM-Routencheck 06.10. · ohne Verkehr und Pausen. Bilder der Orte stehen direkt bei den Ausflügen unten.</p><div class="inline-links">${link(route('Löningen, Deutschland', REGIONS[hall.id].address), 'Anfahrtsroute')}</div></div></div></section>`;
}
function tripBudget(hall, hotel, roomPrice=hotel.price) {
  const ski = hall.id === 'uithof' ? 92 : quote(hall, 'direct', 6).pair;
  const allowance = TRIP_ALLOWANCES.spa + TRIP_ALLOWANCES.car + TRIP_ALLOWANCES.food;
  const pair = Math.round((roomPrice + hotel.parking + ski + allowance) * 100) / 100;
  const perPerson = Math.round(pair * 50) / 100;
  return {ski, allowance, pair, perPerson, remaining:Math.round((TRIP_ALLOWANCES.budgetPerPerson - perPerson) * 100) / 100};
}
function priceDifference(value, reference, unit='für zwei') {
  const change = Math.round((value - reference) * 100) / 100;
  return change === 0 ? 'Gleicher Preis wie bisher' : `${change > 0 ? '+' : '−'}${euro(Math.abs(change))} ${unit} gegenüber 11.–14.10.`;
}
function hotelBudgetMarkup(hall, hotel, monday=false) {
  const price = monday ? MONDAY.hotels[hotel.id].price : hotel.price, b = tripBudget(hall, hotel, price);
  const over = b.remaining < 0, tight = b.remaining >= 0 && b.remaining < 25;
  const period = monday ? 'monday' : 'sunday';
  return `<div class="hotel-budget-quote ${monday ? 'monday-comparison' : ''} ${over ? 'over-budget' : tight ? 'tight' : ''}" data-trip-period="${period}"><span class="hotel-label">${monday ? 'Ab Montag · 12.–15.10.' : 'Bisher · 11.–14.10.'}</span><strong class="${monday ? 'monday-trip-price' : 'hotel-trip-price'}">ca. ${euro(b.perPerson)}</strong><p>pro Person · ${euro(b.pair)} für zwei</p><div class="budget-track" aria-hidden="true"><span style="width:${Math.min(100, b.perPerson / 5)}%"></span></div><p class="budget-rest">${over ? `${euro(Math.abs(b.remaining))} p. P. über Budget` : `${tight ? 'Knapp: ' : ''}${euro(b.remaining)} p. P. Restpuffer`}</p>${monday ? `<p class="hotel-price-delta">${priceDifference(b.perPerson, tripBudget(hall, hotel).perPerson, 'p. P.')}</p>` : ''}<p class="budget-formula">${euro(price)} Zimmer + ${euro(hotel.parking)} Parken + ${euro(b.ski)} Ski + ${euro(b.allowance)} Spa/Fahrt/Essen</p></div>`;
}
function hotelsMarkup(hall) {
  const r = TRAVEL[hall.id], spa = REGIONS[hall.id].places.find(p => p.kind === 'Spa');
  return `<section class="hotel-section" aria-labelledby="hotels-${hall.id}"><div class="section-heading"><div><p class="eyebrow">Je 3 Nächte · 2 Erwachsene · 1 Zimmer</p><h3 id="hotels-${hall.id}">${r.hotels.length} Unterkünfte: Sonntag & Montag im Vergleich</h3></div><span>Budget: 500 € pro Person</span></div><p class="hotel-intro"><strong>Bisher: 11.–14.10. · Eure zusätzliche Montag-Variante: 12.–15.10.2026.</strong> Die bisherigen Preise bleiben unverändert sichtbar. Montagpreise separat in der Booking-Suche am <strong>06.10.2026</strong> geprüft. Keine Reservierung; Preise und freie Zimmer können sich ändern. B&Bs sind als solche benannt; Frühstück nur nach ausgewähltem Tarif.</p>
    <div class="budget-basis"><strong>Rechnung für euch beide</strong><p>3 Nächte + Hotelparken + ${hall.id === 'uithof' ? 'bestätigter 2-Stunden-Skipass' : 'ein Skitag mit 6 Stunden'} inkl. Ski, Schuhe & Hallenparken + <strong>140 € Spa</strong> + <strong>130 € Fahrt</strong> + <strong>160 € Essen</strong>.</p><p class="small-note">Spa, Fahrt und Essen sind geschätzte Planungsansätze. Fahrbudget für euer eigenes Auto; keine Miete oder Fahrzeugabschreibung. Zusätzliche Pflichtabgaben, Stadtparkplätze und andere Eintritte können den Restpuffer verbrauchen.${hall.id === 'uithof' ? ' Kein bestätigter 4-/6-Stunden-Pass; daher hier nur 2 Stunden in der Budgetrechnung.' : ''}</p></div>
    <div class="hotel-rows">${r.hotels.map(hotel => {
      const monday = MONDAY.hotels[hotel.id];
      return `<article class="hotel-row" data-hotel-id="${hotel.id}">
        <div class="hotel-description"><span class="place-kind">${escapeHTML(hotel.kind)} · ${escapeHTML(hotel.address)}</span><h4>${escapeHTML(hotel.name)}</h4>${albumMarkup('hotel-'+hotel.id, hotel.name, hotel.kind)}${hotel.rating?.review_score ? `<p class="hotel-rating"><strong>${String(hotel.rating.review_score).replace('.', ',')} / 10</strong> · ${hotel.rating.number_of_reviews} Bewertungen bei Booking</p>` : ''}<p>${hotel.id === 11456 ? '<strong>Zur bisherigen Variante 11.–14.10.:</strong> ' : ''}${escapeHTML(hotel.note)}</p><div class="inline-links">${link(hotel.source, 'Angebot 11.–14.10.')}${link(monday.source, 'Ab Montag: 12.–15.10.')}${link('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(hotel.name+' '+hotel.address), 'Hotel auf der Karte')}</div></div>
        <div class="hotel-costs"><span class="hotel-label">Zimmer für 2 · alle 3 Nächte</span><div class="hotel-date-group" data-room-period="sunday"><span class="hotel-label">Bisher · So. 11.–Mi. 14.10.</span><strong class="hotel-stay-price">${euro(hotel.price)}</strong><p>${euro(hotel.price / 2)} pro Person</p><p>Mit Hotelparken: <strong>${euro(hotel.price + hotel.parking)}</strong></p></div><div class="hotel-date-group monday-comparison" data-room-period="monday"><span class="hotel-label">Ab Montag · Mo. 12.–Do. 15.10.</span><strong class="monday-stay-price">${euro(monday.price)}</strong><p>${euro(monday.price / 2)} pro Person</p><p>Mit Hotelparken: <strong>${euro(monday.price + hotel.parking)}</strong></p><p class="hotel-price-delta">${priceDifference(monday.price, hotel.price)}</p></div><span class="hotel-label">Hotelparkplatz · je 3 Nächte</span><strong>${hotel.parking === 0 ? 'Kostenlos' : euro(hotel.parking)}</strong><p class="small-note">${escapeHTML(hotel.parkingText)} · gleicher Ansatz in beiden Varianten</p></div>
        <div class="hotel-routes"><span class="hotel-label">Hotel → Skihalle</span><strong>${hotel.id === 11947 ? 'Direkt an der Halle' : driveTime(hotel.skiRoute)}</strong><p class="small-note">${hotel.id === 11947 ? 'Kein täglicher Auto-Skiweg nötig' : (hotel.skiRoute?.km ?? '—')+' km · Auto'}</p><span class="hotel-label">Hotel → ${escapeHTML(spa.title)}</span><strong>${hotel.spaRoute ? driveTime(hotel.spaRoute) : escapeHTML(hotel.spaEstimate)}</strong><p class="small-note">${hotel.spaRoute ? hotel.spaRoute.km+' km · Auto · Routencheck' : 'Nicht als Hotelroute gemessen'}</p></div>
        <div class="hotel-budget"><span class="hotel-label">Gesamte Reise · Planungswerte</span>${hotelBudgetMarkup(hall, hotel)}${hotelBudgetMarkup(hall, hotel, true)}<p class="small-note">Zzgl. ggf. separat erhobener Pflichtgebühren. Bei knappem Restpuffer kann das Budget dadurch überschritten werden.</p></div>
      </article>`;
    }).join('')}</div><p class="small-note hotel-route-note">Hotelwege: OSRM-Schätzung 06.10.2026, auf 5-Minuten-Spannen gerundet, ohne Verkehr. Kostenloses Parken gilt nach Unterkunftsangabe; keine Stellplatzreservierung. Preise sind Momentaufnahmen für die jeweils genannten Daten.</p>
    ${hall.id === 'terneuzen' ? '<p class="hotel-area-note"><strong>Für euch abwägen:</strong> Beim bisherigen Zeitraum 11.–14.10. kosteten City Hotel 492,90 € und Churchill 594,96 € nur für drei Nächte zu zweit. Die Vorschläge liegen deshalb in Middelburg. <strong>Ab Montag liegt Hotel Middelburg mit der gesamten Reise über 500 € p. P.; Sweet Dreams bleibt im Modell darunter.</strong> Der längere Skiweg ist oben sichtbar.</p>' : ''}
    ${hall.id === 'montana' ? '<p class="hotel-area-note"><strong>Parken im Preisvergleich:</strong> Bisher kostet de Statie + 36 € Parkreserve 272 €, ab Montag 283 €. Van Dinter kostet in beiden Zeiträumen 390 € mit Gratisparkplatz. Mit Parkgebühr spart de Statie somit 118 € beziehungsweise 107 € für euch beide.</p>' : ''}
  </section>`;
}
function tripPlansMarkup(hall) {
  const p = REGIONS[hall.id].plan;
  const dates = ['Mo. 12.10.', 'Di. 13.10.', 'Mi. 14.10.', 'Do. 15.10.'];
  return `<section class="four-day-plan" aria-labelledby="plan-${hall.id}"><h3 id="plan-${hall.id}">Euer Plan ab Montag · 12.–15.10.</h3><ol class="plan-days" data-plan-period="monday">${p.map((day,i) => `<li><span>Tag ${i + 1} · ${dates[i]}</span>${escapeHTML(day)}</li>`).join('')}</ol><p class="small-note">Ski am Dienstag, Spa am Mittwoch. Weitere Eintritte sind optional und nicht im Grundbudget. Textiltag und freie Spa-Termine im Kalender wählen.</p></section>`;
}
function hallMarkup(hall, index) {
  const r = REGIONS[hall.id], spa = r.places.find(p => p.kind === 'Spa'), shop = r.coffee.shops[0];
  return `<article class="hall-section" id="${hall.id}" aria-labelledby="title-${hall.id}"><header class="hall-heading"><div><p class="eyebrow">${String(index + 1).padStart(2, '0')} · ${escapeHTML(hall.region)}</p><h2 id="title-${hall.id}">${escapeHTML(hall.name)}</h2><span class="hall-badge ${hall.badgeType}">${escapeHTML(hall.badge)}</span></div><div class="hall-heading-copy"><p>${escapeHTML(hall.detail)}</p></div></header>
    <div class="hall-summary"><div class="summary-fact"><span>Längste Abfahrt</span><strong>${escapeHTML(hall.lengthLabel)}</strong><small>${escapeHTML(hall.areas)}</small></div><div class="summary-fact"><span>Spa in der Nähe</span><strong>${escapeHTML(spa.title)}</strong><small>${escapeHTML(spa.time)} ab Halle · Schätzung</small></div><div class="summary-fact"><span>Coffeeshop-Option</span><strong>${escapeHTML(shop.name)} · ${escapeHTML(shop.city)}</strong><small>${escapeHTML(shop.address)}</small><small>${escapeHTML(shop.time)} · ${escapeHTML(shop.access)}</small></div><div class="summary-fact"><span>Parken an der Halle</span><strong>${hall.parking ? euro(hall.parking) + ' / Auto' : 'Kostenlos'}</strong><small>${hall.parking ? '8 € online · vor Ort bis 9 €' : 'Hotel / Stadt separat prüfen'}</small></div></div>
    <div class="hall-main"><div>${galleryMarkup(hall)}${pistesMarkup(hall)}</div><div>${pricesMarkup(hall)}${coffeeMarkup(hall)}</div></div>
    ${regionVisualsMarkup(hall)}
    <div class="hall-lower">${areaMarkup(hall)}${travelMarkup(hall)}</div>
    ${hotelsMarkup(hall)}
    ${tripPlansMarkup(hall)}
  </article>`;
}
function renderOverview() {
  document.querySelector('#overview').innerHTML = `<div class="decision-grid">${halls.map(h => {
    const d = DECISIONS[h.id], spa = REGIONS[h.id].places.find(p => p.kind === 'Spa');
    const hotel = TRAVEL[h.id].hotels.find(x => x.id === d.hotelId), b = tripBudget(h, hotel, MONDAY.hotels[hotel.id].price);
    const a = TRAVEL[h.id].arrival;
    return `<article class="decision-option" data-decision="${h.id}"><p class="decision-label">${escapeHTML(d.label)}</p><h3>${escapeHTML(d.title)}</h3><p class="decision-verdict">${escapeHTML(d.verdict)}</p>${albumMarkup(d.album,d.photoLabel,'Umgebung')}<div class="decision-ski"><strong>${h.length} m</strong><span>längste Piste</span><p>4 h: <b>${euro(quote(h,'direct',4).total)}</b> · 6 h: <b>${euro(quote(h,'direct',6).total)}</b><small>pro Person inkl. Ski & Schuhe · regulär</small></p></div><div class="decision-pros"><h4>Vorteile</h4><ul>${d.pros.map(p => `<li>${escapeHTML(p)}</li>`).join('')}</ul></div><div class="decision-cons"><h4>Nachteile</h4><ul>${d.cons.map(p => `<li>${escapeHTML(p)}</li>`).join('')}</ul></div><dl class="decision-facts"><div><dt>Stadt & Meer</dt><dd>${escapeHTML(d.city)}</dd></div><div><dt>Landschaft</dt><dd>${escapeHTML(d.nature)}</dd></div><div><dt>Spa ab Halle</dt><dd>${escapeHTML(spa.title)} · ${escapeHTML(spa.time)}</dd></div><div><dt>Coffeeshop</dt><dd>${escapeHTML(d.coffee)}</dd></div><div><dt>Ab Löningen · Auto</dt><dd>ca. ${Math.round(a.km)} km · ${Math.floor(a.minutes/60)} Std. ${a.minutes%60} Min. ohne Verkehr</dd></div><div><dt>Hotel & Reise ab Montag</dt><dd><strong>ca. ${euro(b.perPerson)} p. P.</strong> gesamte Reise mit ${escapeHTML(hotel.name)}, 3 Nächte, 6 h Ski, Spa/Fahrt/Essen als Planungsansatz. Hotelparken ${hotel.parking === 0 ? 'kostenlos' : euro(hotel.parking)}.</dd></div></dl><p class="decision-choice">${escapeHTML(d.choose)}</p><div class="inline-links"><a href="#${h.id}">Pisten, Hotels & Ausflüge ↓</a></div><p class="source-links">${d.sources.map(s => link(s.url,s.label)).join(' · ')}</p></article>`;
  }).join('')}</div><p class="decision-bottom"><strong>Coffeeshops allein entscheiden die Reise nicht:</strong> In allen drei Gebieten gibt es eine belegte Touristen-Option in Reichweite. Amsterdam hat mehr Auswahl; für einen Besuch reichen auch Den Haag oder Haarlem. <strong>Meine Reihenfolge für eure Wünsche: Zoetermeer → Landgraaf → Velsen.</strong></p><p class="small-note">Fahrzeiten sind Planungswerte ab Halle. Reisebudgets enthalten die unveränderten Hotel- und Skiangebote plus Schätzungen; Stadtparken, zusätzliche Eintritte und separat erhobene Pflichtgebühren gehen vom Restpuffer ab. Hotelpreise beider Zeiträume stehen unten.</p>`;
}
function renderGermanComparison() {
  const total = p => Math.round((p.entry + p.gear)*100)/100;
  document.querySelector('#german-list').innerHTML = `<div class="german-grid">${GERMAN_HALLS.map(h => `<article class="german-hall" id="de-${h.id}"><p class="place-kind">${escapeHTML(h.region)} · ab Löningen ca. ${h.arrival.km} km / ${Math.floor(h.arrival.minutes/60)} Std. ${h.arrival.minutes%60} Min.</p><h3>${escapeHTML(h.name)}</h3>${albumMarkup(h.id,h.name,'Deutsche Skihalle')}<p class="german-length"><strong>${h.length} m</strong> längste Strecke</p><p class="german-terrain">${escapeHTML(h.terrain)}</p><table class="german-price-table" aria-label="Preise inklusive Ski und Schuhe für ${escapeHTML(h.name)}"><thead><tr><th>Pro Person</th><th>4 Stunden</th><th>6 Stunden</th></tr></thead><tbody><tr><th>Gesamt inkl. Material</th><td><strong>${h.from ? 'ab ' : ''}${euro(total(h.four))}</strong></td><td><strong>${h.from ? 'ab ' : ''}${euro(total(h.six))}</strong></td></tr><tr><th>Pro geplanter Stunde</th><td>${h.from ? 'ab ' : ''}${euro(total(h.four)/4)}</td><td>${h.from ? 'ab ' : ''}${euro(total(h.six)/6)}</td></tr></tbody></table><div class="german-ticket-notes"><p><strong>4 Stunden:</strong> ${escapeHTML(h.four.label)}. ${escapeHTML(h.four.note)}</p><p><strong>6 Stunden:</strong> ${escapeHTML(h.six.label)}. ${escapeHTML(h.six.note)}</p><p>${escapeHTML(h.includes)}</p><p><strong>Parken:</strong> ${escapeHTML(h.parkingText)}</p></div><p class="german-fit">${escapeHTML(h.fit)}</p><p class="small-note german-status">${escapeHTML(h.status)}</p><div class="inline-links">${h.sources.map(s=>link(s.url,s.label)).join('')}${link(route('Löningen, Deutschland',h.address),'Route ab Löningen')}</div></article>`).join('')}</div><p class="small-note">Recherche und OSRM-Anreisecheck: 06.10.2026, ohne Stau und Pausen. „ab“ ist kein bestätigter Endpreis für euren Tag. Die niederländischen Gutscheine gelten nicht automatisch für diese Hallen.</p>`;
}
function bindGallery(gallery) {
  const photos = gallery.dataset.album ? MEDIA_ALBUMS[gallery.dataset.album].photos : GALLERIES[gallery.dataset.gallery].photos, frame = gallery.querySelector('.gallery-frame'), image = gallery.querySelector('.gallery-image');
  let index = 0, gesture = null, ignoreClickUntil = 0;
  function show(requested) {
    index = (requested + photos.length) % photos.length;
    const p = photos[index];
    image.src = p.src; image.alt = p.caption; image.width = p.width; image.height = p.height;
    gallery.querySelector('.gallery-title').textContent = p.title;
    gallery.querySelector('.gallery-description').textContent = p.caption;
    gallery.querySelector('.gallery-credit').innerHTML = photoCreditMarkup(p);
    gallery.querySelector('.gallery-counter').textContent = `${index + 1} / ${photos.length}`;
    gallery.querySelectorAll('[data-photo]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.photo) === index)));
  }
  gallery.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => show(index + Number(b.dataset.step))));
  gallery.querySelectorAll('[data-photo]').forEach(b => b.addEventListener('click', () => show(Number(b.dataset.photo))));
  const enlarge = gallery.querySelector('.gallery-enlarge');
  enlarge.addEventListener('click', () => openPhotoViewer(photos, index, enlarge));
  frame.addEventListener('click', event => {
    if (event.target.closest('button') || Date.now() < ignoreClickUntil) return;
    openPhotoViewer(photos, index, frame);
  });
  frame.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); show(index + (event.key === 'ArrowRight' ? 1 : -1));}
    if (event.key === 'Home' || event.key === 'End') {event.preventDefault(); show(event.key === 'Home' ? 0 : photos.length - 1);}
    if ((event.key === 'Enter' || event.key === ' ') && event.target === frame) {event.preventDefault(); openPhotoViewer(photos, index, frame);}
  });
  frame.addEventListener('pointerdown', event => {
    if (event.target.closest('button') || !event.isPrimary || event.button !== 0) return;
    gesture = {x:event.clientX, y:event.clientY, pointer:event.pointerId, dx:0};
    if (event.pointerType !== 'mouse') frame.setPointerCapture(event.pointerId);
  });
  frame.addEventListener('pointermove', event => {
    if (!gesture || event.pointerId !== gesture.pointer) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      gesture.dx = dx; frame.classList.add('dragging'); image.style.transform = `translateX(${Math.max(-60, Math.min(60, dx * .22))}px)`;
    }
  });
  function endGesture(event) {
    if (!gesture || event.pointerId !== gesture.pointer) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) ignoreClickUntil = Date.now() + 450;
    if (event.type === 'pointerup' && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    if (frame.hasPointerCapture(event.pointerId)) frame.releasePointerCapture(event.pointerId);
    gesture = null; frame.classList.remove('dragging'); image.style.transform = '';
  }
  window.addEventListener('pointerup', endGesture);
  window.addEventListener('pointercancel', endGesture);
  frame.addEventListener('lostpointercapture', () => {gesture = null; frame.classList.remove('dragging'); image.style.transform = '';});
}
const photoViewer = document.querySelector('#image-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerStage = document.querySelector('#viewer-stage');
let viewerPhotos = [], viewerIndex = 0, viewerZoom = 1, viewerReturnFocus = null, viewerGesture = null, viewerIgnoreClickUntil = 0;
function fitViewerImage(center=false) {
  if (!photoViewer.open) return;
  const p = viewerPhotos[viewerIndex];
  const width = viewerImage.naturalWidth || p.width, height = viewerImage.naturalHeight || p.height;
  const fitWidth = Math.min(viewerStage.clientWidth - 24, (viewerStage.clientHeight - 24) * width / height);
  viewerImage.style.width = `${Math.max(1, fitWidth * viewerZoom)}px`;
  photoViewer.classList.toggle('viewer-zoomed', viewerZoom > 1);
  document.querySelector('#viewer-zoom-label').textContent = `${Math.round(viewerZoom * 100)} %`;
  document.querySelector('#viewer-minus').disabled = viewerZoom <= 1;
  document.querySelector('#viewer-plus').disabled = viewerZoom >= 4;
  if (center) {
    viewerStage.scrollLeft = (viewerStage.scrollWidth - viewerStage.clientWidth) / 2;
    viewerStage.scrollTop = (viewerStage.scrollHeight - viewerStage.clientHeight) / 2;
  }
}
function setViewerZoom(zoom) {
  viewerZoom = Math.max(1, Math.min(4, zoom));
  fitViewerImage(true);
}
function showViewerPhoto(requested) {
  viewerIndex = (requested + viewerPhotos.length) % viewerPhotos.length;
  viewerZoom = 1;
  const p = viewerPhotos[viewerIndex];
  viewerImage.src = p.src; viewerImage.alt = p.caption;
  viewerImage.width = p.width; viewerImage.height = p.height;
  document.querySelector('#viewer-title').textContent = p.title || 'Hallenplan';
  document.querySelector('#viewer-caption').textContent = p.caption;
  document.querySelector('#viewer-counter').textContent = `· ${viewerIndex + 1} / ${viewerPhotos.length}`;
  document.querySelector('#viewer-credit').innerHTML = photoCreditMarkup(p);
  document.querySelector('#viewer-prev').disabled = viewerPhotos.length < 2;
  document.querySelector('#viewer-next').disabled = viewerPhotos.length < 2;
  viewerStage.scrollTop = 0; viewerStage.scrollLeft = 0;
  fitViewerImage();
}
function openPhotoViewer(photos, index=0, trigger=null) {
  viewerReturnFocus = trigger || document.activeElement;
  viewerPhotos = photos;
  photoViewer.showModal();
  document.body.classList.add('photo-viewer-open');
  showViewerPhoto(index);
  document.querySelector('#viewer-close').focus();
}
viewerImage.addEventListener('load', () => fitViewerImage(true));
document.querySelector('#viewer-close').addEventListener('click', () => photoViewer.close());
photoViewer.addEventListener('close', () => {
  document.body.classList.remove('photo-viewer-open');
  viewerGesture = null;
  viewerReturnFocus?.focus({preventScroll:true});
});
document.querySelector('#viewer-prev').addEventListener('click', () => showViewerPhoto(viewerIndex - 1));
document.querySelector('#viewer-next').addEventListener('click', () => showViewerPhoto(viewerIndex + 1));
document.querySelector('#viewer-minus').addEventListener('click', () => setViewerZoom(viewerZoom - .5));
document.querySelector('#viewer-plus').addEventListener('click', () => setViewerZoom(viewerZoom + .5));
document.querySelector('#viewer-fit').addEventListener('click', () => setViewerZoom(1));
viewerImage.addEventListener('click', () => {if (Date.now() >= viewerIgnoreClickUntil) setViewerZoom(viewerZoom === 1 ? 2 : 1);});
photoViewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); showViewerPhoto(viewerIndex + (event.key === 'ArrowRight' ? 1 : -1));}
  if (event.key === '+' || event.key === '=') {event.preventDefault(); setViewerZoom(viewerZoom + .5);}
  if (event.key === '-') {event.preventDefault(); setViewerZoom(viewerZoom - .5);}
  if (event.key === '0') {event.preventDefault(); setViewerZoom(1);}
});
viewerStage.addEventListener('pointerdown', event => {
  if (viewerZoom !== 1 || !event.isPrimary || event.button !== 0) return;
  viewerGesture = {x:event.clientX, y:event.clientY, pointer:event.pointerId};
  if (event.pointerType !== 'mouse') viewerStage.setPointerCapture(event.pointerId);
});
function endViewerGesture(event) {
  if (!viewerGesture || event.pointerId !== viewerGesture.pointer) return;
  const dx = event.clientX - viewerGesture.x, dy = event.clientY - viewerGesture.y;
  if (Math.abs(dx) > 10 || Math.abs(dy) > 10) viewerIgnoreClickUntil = Date.now() + 450;
  if (event.type === 'pointerup' && Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) showViewerPhoto(viewerIndex + (dx < 0 ? 1 : -1));
  if (viewerStage.hasPointerCapture(event.pointerId)) viewerStage.releasePointerCapture(event.pointerId);
  viewerGesture = null;
}
window.addEventListener('pointerup', endViewerGesture);
window.addEventListener('pointercancel', endViewerGesture);
window.addEventListener('resize', () => fitViewerImage());
renderOverview();
renderGermanComparison();
document.querySelector('#hall-nav').innerHTML = '<a href="#entscheidung">Entscheidung</a>' + halls.map(h => `<a href="#${h.id}">${escapeHTML(shortNames[h.id])}</a>`).join("") + '<a href="#deutschland">Deutschland kurz</a>';
document.querySelector('#hall-list').innerHTML = halls.map(hallMarkup).join("");
document.querySelectorAll('[data-gallery], [data-album]').forEach(bindGallery);

document.querySelectorAll('[data-enlarge-map]').forEach(button => button.addEventListener('click', () => {
  const hall = halls.find(h => h.id === button.dataset.enlargeMap), map = GALLERIES[hall.id].map;
  openPhotoViewer([{...map, title:`Hallenplan · ${hall.name}`}], 0, button);
}));
document.querySelector('#share-app').addEventListener('click', async () => {
  const status = document.querySelector('#share-status');
  try {const url = new URL(location.href); url.hash = ''; await navigator.clipboard.writeText(url.href); status.textContent = 'Link kopiert – in Discord einfügen.';}
  catch {status.textContent = 'Zum Teilen die Adresse aus der Browserleiste kopieren.';}
});
function comparisonSnapshot() {
  return {date:"2026-10-13", pricesChecked:"2026-10-05", regionAndVoucherConditionsChecked:"2026-10-06", currency:"EUR", includes:["skipass", "ski", "ski-boots"], halls:halls.map(h => ({id:h.id, name:h.name, longestPisteMetres:h.length, fourHours:{direct:quote(h, 'direct', 4), voucher:!["montana", "uithof"].includes(h.id) ? quote(h, 'voucher', 4) : null}, sixHours:{direct:quote(h, 'direct', 6), voucher:!["montana", "uithof"].includes(h.id) ? quote(h, 'voucher', 6) : null}, voucherRedemptionVerified:false, photoCount:GALLERIES[h.id].photos.length, coffee:REGIONS[h.id].coffee, regionSummary:REGIONS[h.id].summary}))};
}
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  try {void Promise.resolve(document.modelContext.registerTool({name:"get_ski_comparison", title:"Skihallenvergleich lesen", description:"Read all four/six-hour direct and voucher prices, hall sizes, photo counts and coffee access caveats. Voucher redemption is unverified. No purchase or reservation.", inputSchema:{type:"object", properties:{}, additionalProperties:false}, annotations:{readOnlyHint:true, untrustedContentHint:false}, execute:() => comparisonSnapshot()}, {signal:lifecycle.signal})).catch(() => {});} catch {}
  window.addEventListener('pagehide', () => lifecycle.abort(), {once:true});
}
