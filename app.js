"use strict";
const euro = value => new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(value);
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const shortNames = {landgraaf:"Landgraaf", zoetermeer:"Zoetermeer", uithof:"De Uithof", terneuzen:"Terneuzen", amsterdam:"Velsen / Amsterdam", rucphen:"Rucphen-Breda", montana:"Montana"};
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
    <p class="gallery-hint">${photos.length} echte Pistenfotos · Pfeile am Bild oder nach links / rechts wischen</p>
    <div class="gallery-frame" tabindex="0" role="group" aria-label="Pistenbilder ${escapeHTML(hall.name)}. Mit Pfeiltasten blättern.">
      <img class="gallery-image" src="${escapeHTML(p.src)}" alt="${escapeHTML(p.caption)}" width="${p.width}" height="${p.height}" loading="${hall.id === 'landgraaf' ? 'eager' : 'lazy'}" ${hall.id === 'landgraaf' ? 'fetchpriority="high"' : ''} draggable="false">
      <button type="button" class="gallery-arrow prev" data-step="-1" aria-label="${escapeHTML(hall.name)}: vorheriges Bild">‹</button>
      <button type="button" class="gallery-arrow next" data-step="1" aria-label="${escapeHTML(hall.name)}: nächstes Bild">›</button>
      <span class="gallery-counter" aria-live="polite" aria-atomic="true">1 / ${photos.length}</span>
    </div>
    <figcaption><div class="gallery-caption"><div><strong class="gallery-title">${escapeHTML(p.title)}</strong><p class="gallery-description">${escapeHTML(p.caption)}</p></div><div class="gallery-dots" role="group" aria-label="Foto auswählen">${photos.map((photo, i) => `<button type="button" class="gallery-dot" data-photo="${i}" aria-label="Bild ${i + 1}: ${escapeHTML(photo.title)}" aria-pressed="${i === 0}"></button>`).join("")}</div></div><p class="gallery-credit">${escapeHTML(p.credit)} · ${link(p.source, "Bildquelle")}</p></figcaption>
  </figure>`;
}
function pistesMarkup(hall) {
  const gallery = GALLERIES[hall.id], colors = {red:"var(--red)", blue:"var(--blue)", green:"var(--green)"};
  return `<section class="pistes-section" aria-labelledby="pistes-${hall.id}"><h3 id="pistes-${hall.id}">Pisten & Platz zum Fahren</h3><p class="small-note">${escapeHTML(hall.areas)} · gemeinsame 400-m-Skala</p><ul class="piste-list">${hall.pistes.map(p => `<li class="piste-item" style="--piste-color:${colors[p.color]}"><div class="piste-label"><span class="piste-dot" aria-hidden="true"></span>${escapeHTML(p.name)}<strong>${p.length === null ? 'Länge offen' : p.length + ' m'}</strong></div>${p.length === null ? '' : `<div class="piste-track"><span style="--length:${p.length / 4}%"></span></div>`}</li>`).join("")}</ul><p class="piste-notes">${escapeHTML(hall.terrainNote)}</p><div class="inline-links">${link(hall.source, "Pisten beim Betreiber")}</div>
    <section class="piste-map"><h4>Aufteilung in der Halle</h4>${gallery.map ? `<img src="${escapeHTML(gallery.map.src)}" alt="${escapeHTML(gallery.map.caption)}" width="${gallery.map.width}" height="${gallery.map.height}" loading="lazy"><p>${escapeHTML(gallery.map.credit)} · ${link(gallery.map.source, "Planquelle")} · ${link(gallery.map.src, "Plan in voller Größe")}</p>` : '<p class="piste-notes">Kein belastbarer offizieller Pistenplan gefunden. Die Längenbalken vergleichen die Größe und bilden keinen Grundriss ab.</p>'}</section>
    <section class="coverage-notes"><h4>Welche Pisten zeigen die Fotos?</h4><ul>${gallery.photos.map(p => `<li><strong>${escapeHTML(p.title)}:</strong> ${escapeHTML(p.piste)}. ${escapeHTML(p.currentness)} ${link(p.source, "Quelle")}</li>`).join("")}</ul>${gallery.gaps.map(g => `<p>${escapeHTML(g)}</p>`).join("")}</section>
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
    ${c.shops.map(s => `<article class="shop-row"><div class="shop-top"><div><p class="shop-city">${escapeHTML(s.city)}</p><h4>${escapeHTML(s.name)}</h4><p class="shop-address">${escapeHTML(s.address)}</p></div>${s.rating ? `<div class="shop-rating"><strong>${escapeHTML(s.rating)}</strong><span>${s.reviews} Bewertungen</span><span>Greenmeister</span></div>` : ''}</div><p class="shop-distance">${escapeHTML(s.time)} ab Skihalle <small>${s.measured ? '· Routencheck 05.10.' : '· Schätzung'}</small></p><p class="shop-access">${escapeHTML(s.access)}</p><p class="shop-note">${escapeHTML(s.note)}</p>${s.rating ? '' : '<p class="shop-no-rating">Keine vergleichbare Bewertung in diesem Check erhoben.</p>'}<div class="inline-links">${link(route(r.address, s.address), "Route ab Skihalle")}${s.profile ? link(s.profile, "Shopprofil") : ''}${s.website ? link(s.website, "Betreiber") : ''}</div></article>`).join("")}
    <p class="small-note">18+ und gültiger Ausweis. ${escapeHTML(GREENMEISTER_NOTE)}</p>${sourceLinks(c.sources)}
  </section>`;
}
function areaMarkup(hall) {
  const r = REGIONS[hall.id];
  return `<section class="area-section" aria-labelledby="area-${hall.id}"><h3 id="area-${hall.id}">Spa, Stadt, Meer & Ausflüge</h3><div class="region-intro"><h4>${escapeHTML(r.headline)}</h4><p>${escapeHTML(r.summary)}</p><p class="tradeoff"><strong>Für euch abwägen:</strong> ${escapeHTML(r.tradeoff)}</p></div><p class="small-note">Zeiten ab Skihalle mit dem Auto, ohne Verkehr. Ausflüge sind Vorschläge; Öffnungstage und Eintritt beim jeweiligen Betreiber prüfen.</p>
    ${r.places.map(p => `<article class="place-row"><div><span class="place-kind">${escapeHTML(p.kind)}</span><h4>${escapeHTML(p.title)}</h4></div><span class="place-time">${escapeHTML(p.time)}${p.time.startsWith('ca.') ? '<small>Schätzung</small>' : ''}</span><p>${escapeHTML(p.description)}</p><div class="inline-links">${p.url ? link(p.url, "Betreiber / Infos") : ''}${p.destination ? link(route(r.address, p.destination), "Route ab Skihalle") : ''}</div></article>`).join("")}
  </section>`;
}
function travelMarkup(hall) {
  const r = REGIONS[hall.id], t = r.transport;
  return `<section class="travel" aria-labelledby="travel-${hall.id}"><h3 id="travel-${hall.id}">Anreise, Parken & Übernachten</h3><div class="travel-intro"><p><strong>Adresse:</strong> ${escapeHTML(r.address)}</p><p>${escapeHTML(r.arrival)}</p><div class="inline-links">${link(route("Löningen, Deutschland", r.address), "Auto ab Löningen")}${link(route("Löningen, Deutschland", r.address, "transit"), "Bahn / Bus ab Löningen")}</div></div>
    <section class="travel-section"><h4>Parken</h4><p>${escapeHTML(t.parking)}</p>${t.extraUrl ? `<div class="inline-links">${link(t.extraUrl, "Tunnel: aktuelle Regeln")}</div>` : ''}</section>
    <section class="travel-section"><h4>Bus & Bahn vor Ort · ${escapeHTML(t.name)}</h4><p class="transport-price">${escapeHTML(t.price)}</p><p>${escapeHTML(t.description)}</p><p class="small-note">Kein kostenloses allgemeines Touristenticket bestätigt. Für zwei verdoppeln sich die Personentarife. Gästeticket oder Hotel-Shuttle nur einrechnen, wenn die Unterkunft es ausdrücklich anbietet.</p><div class="inline-links">${link(t.url, "Tarif & Gültigkeit")}</div></section>
    <section class="travel-section"><h4>${escapeHTML(r.stay.title)}</h4><p>${escapeHTML(r.stay.description)}</p><p class="small-note">Für drei Nächte Zimmer + Parkplatz + Pflichtgebühren vergleichen. Euer Gesamtbudget: 1.000 € für zwei inklusive Fahrt, Ski, Spa und Essen. Keine neue Hotelreservierung.</p><div class="inline-links">${link("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(r.stay.destination), "Hotels im Gebiet")}</div></section>
    ${hall.id === 'montana' ? '<section class="travel-section"><h4>Center Parcs: Ferienpark</h4><p>De Kempervennen ist ein Ferienpark mit Ferienhäusern, Schwimmbad und Freizeitangeboten. Für Montana braucht ihr keine Unterkunft im Park. Aqua Mundo gehört nicht zum Skipass; es ist kein großer Achterbahn-Freizeitpark.</p><div class="inline-links">' + link("https://www.centerparcs.de/de-de/niederlande/fp_KV_ferienpark-de-kempervennen", "De Kempervennen") + '</div></section>' : ''}
  </section>`;
}
function hallMarkup(hall, index) {
  const r = REGIONS[hall.id], spa = r.places.find(p => p.kind === 'Spa'), shop = r.coffee.shops[0];
  return `<article class="hall-section" id="${hall.id}" aria-labelledby="title-${hall.id}"><header class="hall-heading"><div><p class="eyebrow">${String(index + 1).padStart(2, '0')} · ${escapeHTML(hall.region)}</p><h2 id="title-${hall.id}">${escapeHTML(hall.name)}</h2><span class="hall-badge ${hall.badgeType}">${escapeHTML(hall.badge)}</span></div><div class="hall-heading-copy"><p>${escapeHTML(hall.detail)}</p></div></header>
    <div class="hall-summary"><div class="summary-fact"><span>Längste Abfahrt</span><strong>${escapeHTML(hall.lengthLabel)}</strong><small>${escapeHTML(hall.areas)}</small></div><div class="summary-fact"><span>Spa in der Nähe</span><strong>${escapeHTML(spa.title)}</strong><small>${escapeHTML(spa.time)} ab Halle · Schätzung</small></div><div class="summary-fact"><span>Coffeeshop-Option</span><strong>${escapeHTML(shop.name)} · ${escapeHTML(shop.city)}</strong><small>${escapeHTML(shop.address)}</small><small>${escapeHTML(shop.time)} · ${escapeHTML(shop.access)}</small></div><div class="summary-fact"><span>Parken an der Halle</span><strong>${hall.parking ? euro(hall.parking) + ' / Auto' : 'Kostenlos'}</strong><small>${hall.parking ? '8 € online · vor Ort bis 9 €' : 'Hotel / Stadt separat prüfen'}</small></div></div>
    <div class="hall-main"><div>${galleryMarkup(hall)}${pistesMarkup(hall)}</div><div>${pricesMarkup(hall)}${coffeeMarkup(hall)}</div></div>
    <div class="hall-lower">${areaMarkup(hall)}${travelMarkup(hall)}</div>
    <section class="four-day-plan" aria-labelledby="plan-${hall.id}"><h3 id="plan-${hall.id}">Vier Tage in diesem Gebiet</h3><ol class="plan-days">${r.plan.map((p, i) => `<li><span>Tag ${i + 1}</span>${escapeHTML(p)}</li>`).join("")}</ol><p class="small-note">Freizeitpark optional statt eines anderen Ausflugs. Ski, Spa und Hotel für dieselben Reisetage abstimmen.</p></section>
  </article>`;
}
function renderOverview() {
  document.querySelector('#overview').innerHTML = `<table class="overview-table" aria-label="Skihallen, Preise, Spa und Coffeeshops auf einen Blick"><thead><tr><th scope="col">Halle & längste Piste</th><th scope="col">6 h mit Material</th><th scope="col">Spa ab Halle</th><th scope="col">Coffeeshop ab Halle</th></tr></thead><tbody>${halls.map(h => {const r = REGIONS[h.id], spa = r.places.find(p => p.kind === 'Spa'), shop = r.coffee.shops[0], q = quote(h, 'voucher', 6); return `<tr><td><a href="#${h.id}">${escapeHTML(shortNames[h.id])}</a><small>${escapeHTML(h.lengthLabel)}</small></td><td><span class="overview-label">6 h inkl. Ski & Schuhe</span>${q ? `<strong>${euro(q.total)}</strong><small>${q.voucher ? 'mit Gutschein · Einlösung offen' : 'regulärer Tagespass'}</small>` : '<strong>Kein Pass bestätigt</strong><small>2 h: 46 €</small>'}</td><td><span class="overview-label">Spa ab Halle</span>${escapeHTML(spa.title)}<small>${escapeHTML(spa.time)}</small></td><td><span class="overview-label">Coffeeshop ab Halle</span>${escapeHTML(shop.name)} · ${escapeHTML(shop.city)}<small>${escapeHTML(shop.time)} · ${escapeHTML(r.coffee.status)}</small></td></tr>`;}).join("")}</tbody></table>`;
}
function bindGallery(gallery) {
  const photos = GALLERIES[gallery.dataset.gallery].photos, frame = gallery.querySelector('.gallery-frame'), image = gallery.querySelector('.gallery-image');
  let index = 0, gesture = null;
  function show(requested) {
    index = (requested + photos.length) % photos.length;
    const p = photos[index];
    image.src = p.src; image.alt = p.caption; image.width = p.width; image.height = p.height;
    gallery.querySelector('.gallery-title').textContent = p.title;
    gallery.querySelector('.gallery-description').textContent = p.caption;
    gallery.querySelector('.gallery-credit').innerHTML = `${escapeHTML(p.credit)} · ${link(p.source, "Bildquelle")}`;
    gallery.querySelector('.gallery-counter').textContent = `${index + 1} / ${photos.length}`;
    gallery.querySelectorAll('[data-photo]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.photo) === index)));
  }
  gallery.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => show(index + Number(b.dataset.step))));
  gallery.querySelectorAll('[data-photo]').forEach(b => b.addEventListener('click', () => show(Number(b.dataset.photo))));
  frame.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); show(index + (event.key === 'ArrowRight' ? 1 : -1));}
    if (event.key === 'Home' || event.key === 'End') {event.preventDefault(); show(event.key === 'Home' ? 0 : photos.length - 1);}
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
    if (event.type === 'pointerup' && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    if (frame.hasPointerCapture(event.pointerId)) frame.releasePointerCapture(event.pointerId);
    gesture = null; frame.classList.remove('dragging'); image.style.transform = '';
  }
  window.addEventListener('pointerup', endGesture);
  window.addEventListener('pointercancel', endGesture);
  frame.addEventListener('lostpointercapture', () => {gesture = null; frame.classList.remove('dragging'); image.style.transform = '';});
}
renderOverview();
document.querySelector('#hall-nav').innerHTML = halls.map(h => `<a href="#${h.id}">${escapeHTML(shortNames[h.id])}</a>`).join("");
document.querySelector('#hall-list').innerHTML = halls.map(hallMarkup).join("");
document.querySelectorAll('[data-gallery]').forEach(bindGallery);
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
