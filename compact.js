"use strict";

const COMPACT_ORDER = ['amsterdam','zoetermeer','landgraaf'];
const COMPACT_LABELS = {amsterdam:'Velsen / Amsterdam',zoetermeer:'Zoetermeer / Den Haag',landgraaf:'Landgraaf / Limburg'};
const FOCUSED_ALLOWANCES = {car:130,food:200,extras:90};
const FOCUSED_PLANS = {
  amsterdam:['Anreise & Hotel; Haarlem-Altstadt und Abendessen.','6 h SnowWorld; danach essen gehen.','Amsterdam: Grachten, Siberië & Restaurants. Optional vorher privater Jacuzzi in Hoofddorp.','Haarlem-Frühstück oder Strandrunde IJmuiden; Rückfahrt.'],
  zoetermeer:['Anreise & Hotel; Dorpsstraat oder Stadshart, Abendessen.','6 h SnowWorld; danach essen gehen.','Den Haag: Altstadt, Cremers & Restaurants. Club-Lounge vorher reservieren.','Scheveningen-Strand oder Stadtfrühstück; Rückfahrt.'],
  landgraaf:['Anreise & Hotel; Valkenburg, Terrassen und Abendessen.','6 h SnowWorld; danach essen gehen.','Valkenburg / Heide; ab 16 Uhr Down Under in Kerkrade und Abendessen.','Brunssummerheide oder entspannt frühstücken; Rückfahrt.']
};
function focusedTripBudget(hall,hotel,roomPrice=hotel.price) {
  const ski=quote(hall,'direct',6).pair,allowance=FOCUSED_ALLOWANCES.car+FOCUSED_ALLOWANCES.food+FOCUSED_ALLOWANCES.extras;
  const pair=Math.round((roomPrice+hotel.parking+ski+allowance)*100)/100,perPerson=Math.round(pair*50)/100;
  return {ski,allowance,pair,perPerson,remaining:Math.round((500-perPerson)*100)/100};
}
const COMPACT_CITY_COPY = {
  'Velsen / Velsen-Zuid':{feel:'Grüne Basis; Velsen-Zuid ist keine Großstadt.',shops:'IJmuiden: Alltagsläden & Ketten.',food:'Über 50 Essens-Adressen in der Gemeinde, auch Strandcafés.',access:'Velsen: Einlasspraxis nicht bestätigt.'},
  Haarlem:{feel:'Kompakte Altstadt, Spaarne & gemütlicher Abend.',shops:'Grote Houtstraat, Gouden Straatjes: Ketten & Boutiquen.',food:'Grote Markt, Botermarkt & Altstadtbars.',access:'Touristen laut Shopprofil; z. B. Birdy.'},
  Amsterdam:{feel:'Grachten, Großstadt, viele Viertel; einen Tag einplanen.',shops:'Kalverstraat, 9 Straatjes, Vintage & große Auswahl.',food:'Viele Küchen, Restaurants & Bars; oft voller.',access:'Touristen: bei Siberië vom Betreiber bestätigt.'},
  Zoetermeer:{feel:'Moderne Einkaufsstadt; praktisch, weniger Altstadtgefühl.',shops:'Stadshart: fast 200 Läden + Gastronomie; Dorpsstraat.',food:'Über 45 Gastronomiebetriebe im Stadshart.',access:'Touristen laut Profil bei Casa.'},
  'Den Haag':{feel:'Historische Großstadt mit Scheveningen als Strandviertel.',shops:'Grote Marktstraat, Passage, Hofkwartier & Boutiquen.',food:'Grote Markt, Plein, Chinatown: große Auswahl.',access:'Touristen laut Profil bei Cremers.'},
  Landgraaf:{feel:'Mehrere kleine Ortskerne; ruhiger, viel Grün.',shops:'Op de Kamp, Schaesberg, Waubach: normale Läden.',food:'Restaurants verteilt; für mehr Abendleben weiterfahren.',access:'Kein Shop im Ort; Alternative in Kerkrade.'},
  'Valkenburg aan de Geul':{feel:'Kleine historische Ferienstadt; Burg, Geul & Terrassen.',shops:'Kleine Läden, kompakte Mitte.',food:'Viele Terrassen & Restaurants für einen Urlaubsabend.',access:'Keine örtliche Shop-Option eingeplant.'},
  Maastricht:{feel:'Historische Stadt an der Maas; guter ganzer Stadt-Ausflug.',shops:'Innenstadt & Wyck: Marken, Boutiquen, Shoppingtag.',food:'Vrijthof, Markt, Wyck: Cafés & Restaurants.',access:'Nein ohne niederländischen Wohnsitz.'}
};
const COMPACT_SIGHT_NOTES = {
  elysium:'Badebekleidungstag im Kalender wählen; ab Bastion-Hotel nur 9,2 km.',
  thermae2000:'Thermalbecken & Saunen; Textil-/textilfreie Tage prüfen.',
  egmond:'Textilfrei, keine Badebekleidungstage. Tarif vor Buchung bestätigen.',
  ijmuiden:'Breiter Nordseestrand & Dünen; Strandparken extra.',
  scheveningen:'Nordsee, Pier & Strandcafés; Stadt-/Strandparken extra.',
  buytenpark:'Hügeliger Park direkt an der Halle; Spaziergang ohne Eintritt.',
  brunssummerheide:'Heide & Wald; roter Rundweg 5,6 km, ohne Eintritt.',
  spaarnwoude:'Grüne Wege & Wasser; Pin: Start bei Boerderij Zorgvrij.',
  duinrell:'Fahrgeschäfte; Tikibad separat. 13.10. Rides by Lights bis 21 Uhr.',
  mondoverde:'Gärten, Tiere & Fahrgeschäfte; Eintritt extra.',
  mauritshuis:'Kunstmuseum am Hofvijver; guter Regenplan.',
  teylers:'Kunst & Wissenschaft am Spaarne; mit Haarlem kombinieren.',
  fluweelengrot:'Geführte Höhlentour + Burgruine; Tourzeit reservieren.',
  gaiazoo:'Tierpark; für einen halben oder ganzen Tag.'
};
const compactNumber = value => new Intl.NumberFormat('de-DE',{maximumFractionDigits:2}).format(value);
const compactHall = id => halls.find(h=>h.id===id);
const compactPoints = id => [...REGIONAL_MAPS.regions[id].points,...WELLNESS_MAP_POINTS[id]];
const compactPoint = (id,kind) => compactPoints(id).find(p=>p.kind===kind);
function compactSection(id,title,body,note='') {
  return `<section class="compact-section" id="${id}" aria-labelledby="heading-${id}"><div class="compact-section-heading"><h2 id="heading-${id}">${title}</h2>${note?`<p>${note}</p>`:''}</div>${body}</section>`;
}
function compactScrollTable(table,label) {
  return `<p class="table-hint">Tabelle seitlich wischen ↔</p><div class="table-scroll" tabindex="0" role="region" aria-label="${escapeHTML(label)}">${table}</div>`;
}
function compactHeaders(first='Vergleich') {
  return `<thead><tr><th scope="col">${first}</th>${COMPACT_ORDER.map(id=>`<th scope="col"><span>${escapeHTML(COMPACT_LABELS[id])}</span></th>`).join('')}</tr></thead>`;
}
function compactMedia(key,label,hall=false) {
  const album=hall?GALLERIES[key]:MEDIA_ALBUMS[key],photos=album?.photos;
  if(!photos?.length)throw new Error('Missing compact gallery '+key);
  const p=photos[0];
  return `<figure class="gallery compact-gallery" ${hall?'data-gallery':'data-album'}="${escapeHTML(key)}"><div class="gallery-frame" tabindex="0" role="group" aria-label="${escapeHTML(label)}: mehrere Bilder, Pfeile oder Wischen"><img class="gallery-image" src="${escapeHTML(p.src)}" alt="${escapeHTML(p.caption)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async" draggable="false"><button type="button" class="gallery-arrow prev" data-step="-1" aria-label="${escapeHTML(label)}: vorheriges Bild">‹</button><button type="button" class="gallery-arrow next" data-step="1" aria-label="${escapeHTML(label)}: nächstes Bild">›</button><button type="button" class="photo-enlarge gallery-enlarge" aria-label="${escapeHTML(label)}: Bild vergrößern">⤢</button><span class="gallery-counter" aria-live="polite">1 / ${photos.length}</span></div><figcaption><strong class="gallery-title sr-only">${escapeHTML(p.title)}</strong><p class="gallery-description sr-only">${escapeHTML(p.caption)}</p><p class="gallery-credit">${photoCreditMarkup(p)}</p></figcaption></figure>`;
}
function compactPin(id,point,label=point?.name) {
  if(!point)return '';
  return `<button type="button" class="compact-pin-link" data-map-for="${id}" data-map-point="${point.key}" aria-label="${escapeHTML(label)} auf der Karte ${escapeHTML(COMPACT_LABELS[id])} zeigen"><span class="pin-number kind-${point.kind}">${point.number}</span><span>${escapeHTML(label)}</span></button>`;
}
function compactWay(point) {
  return `<span class="compact-distance">${mapDistance(point)} <small>· ${mapMinutes(point)}</small></span>`;
}
function compactOverview() {
  const row=(label,render,cls='')=>`<tr class="${cls}"><th scope="row">${label}</th>${COMPACT_ORDER.map(id=>`<td>${render(compactHall(id),id)}</td>`).join('')}</tr>`;
  const rows=[
    row('Pisten-<br>fotos',(h,id)=>compactMedia(id,h.name,true),'photo-row'),
    row('Passt am besten für',(_,id)=>({amsterdam:'Stadt, Coffeeshops & Essen',zoetermeer:'Ski & Den Haag',landgraaf:'Langer Skitag & Natur'}[id]),'choice-row'),
    row('Pisten',(h,id)=>`<strong class="key-number">${h.length} m</strong><small>${id==='amsterdam'?'Hauptpiste + 70 m Anfänger':id==='zoetermeer'?'+ 2 × 140 m blau + 30 m Kinder':'Rot/blau auf demselben Hang + 60 / 50 / 20 m'}</small><button type="button" class="compact-plan" data-enlarge-map="${id}" aria-label="Hallenplan ${escapeHTML(h.name)} vergrößern"><img src="${GALLERIES[id].map.src}" alt="Hallenplan ${escapeHTML(h.name)}" width="80" height="50" loading="lazy"><span>Hallenplan ⤢</span></button>`),
    row('4 h Ski · p. P.',h=>`<strong class="price-number">${euro(quote(h,'direct',4).total)}</strong><small>${euro(quote(h,'direct',4).rate)} je Stunde</small>`,'price-row'),
    row('6 h Ski · p. P.',h=>`<strong class="price-number">${euro(quote(h,'direct',6).total)}</strong><small>${euro(quote(h,'direct',6).rate)} je Stunde · 8-h-Pass</small><small>${link(h.booking,'Tickets')} · ${link(h.source,'Halle')}</small>`,'price-row'),
    row('Hallenparken',h=>h.parking?'8 € online<small>bis 9 € vor Ort · je Auto</small>':'Kostenlos'),
    row('Basisreise · p. P.',(h,id)=>{const hotel=TRAVEL[id].hotels.find(x=>x.id===DECISIONS[id].hotelId),b=focusedTripBudget(h,hotel,MONDAY.hotels[hotel.id].price);return `<strong class="price-number">ca. ${euro(b.perPerson)}</strong><small>Mit ${escapeHTML(hotel.name)}<br>12.–15.10. · 6 h Ski, Essen & Ausgehreserve<br>Jacuzzi optional</small>`;},'budget-row'),
    row('Ab Löningen',(_,id)=>{const a=TRAVEL[id].arrival;return `<b>${Math.round(a.km)} km</b><small>${Math.floor(a.minutes/60)} Std. ${a.minutes%60} Min. ohne Verkehr</small><small>${link(route('Löningen, Deutschland',REGIONS[id].address),'Route')}</small>`;}),
    row('Stadtziele',(_,id)=>compactPoints(id).filter(p=>p.kind==='stadt'&&p.number!=='1').map(p=>`<span>${escapeHTML(p.name.split(' · ')[0])}</span><small>${mapDistance(p)} · ${mapMinutes(p)}</small>`).join('')),
    row('Meer',(_,id)=>{const p=compactPoint(id,'kueste');return p?`${escapeHTML(p.name.split(' · ')[0])}<small>${mapDistance(p)} · ${mapMinutes(p)}</small>`:'Keine nahe Küste';}),
    row('Coffeeshop-Tipp',(_,id)=>{const shop=REGIONS[id].coffee.shops.find(s=>s.name===({amsterdam:'Siberië',zoetermeer:'Cremers',landgraaf:'Down Under'}[id])),p=compactPoints(id).find(p=>p.shop===shop.name);return `${compactPin(id,p,shop.name+' · '+shop.city)}<small>${mapDistance(p)} · ${mapMinutes(p)}</small><small>${id==='amsterdam'?'Touristen vom Betreiber bestätigt':'Touristen laut Shopprofil'}</small>`;}),
    row('Stärke',(_,id)=>({amsterdam:'Amsterdam, Haarlem, Grachten & Strand',zoetermeer:'Längere Piste, Den Haag & Strand',landgraaf:'400-m-Hang, Heide, Valkenburg & Maastricht'}[id])),
    row('Nachteil',(_,id)=>({amsterdam:'Kurze Piste; Lifte eingeschränkt; Stadt-Ausflüge nötig',zoetermeer:'Steiler Haupt­hang; Altstadt & Meer liegen in Den Haag',landgraaf:'Ruhige Basis; keine Küste; wenig Touristen-Shops'}[id])),
    row('ÖPNV · Tagespreis',(_,id)=>`${escapeHTML(REGIONS[id].transport.price)}<small>${link(REGIONS[id].transport.url,REGIONS[id].transport.name)}</small>`)
  ];
  return `<p class="wellness-summary"><b>Euer Fokus: Coffeeshop, Ski & Essen.</b> Meine Empfehlung: Amsterdam / Haarlem für Stadtleben und Auswahl. Zoetermeer / Den Haag ist der stärkere Ski-Kompromiss; Landgraaf lohnt sich vor allem für die längste Piste und Natur. Jacuzzi ist ein optionales Extra.</p><table class="compare-table overview-matrix">${compactHeaders('Euer Urlaub')}<tbody>${rows.join('')}</tbody></table><p class="compact-note">Basisreise: 3 Nächte + 6 h Ski + 130 € Auto + 200 € Essen + 90 € Coffeeshop-/ÖPNV-Reserve für beide; keine Spa-Pauschale. Hotel-/Skipreise unverändert, übrige Ansätze geschätzt. Ski inklusive Ski & Schuhe, ohne Unterricht. Reguläre Ticketpreise vom 05.10. für 13.10.; keine Reservierung. Tageskarten gelten jeweils nur im genannten Verkehrsnetz; kein kostenloses allgemeines Touristenticket bestätigt.</p><aside class="compact-status"><b>Velsen: Piste offen, Lifte eingeschränkt.</b> Rechter Schlepplift und Bandlift gesperrt; linker Lift und Zugang zur 70-m-Piste nicht ausdrücklich bestätigt. Mehr Wartezeit möglich. Betreiberstand 07.10.; Ende der Einschränkungen für 12.–15.10. offen. ${link('https://www.snowworld.com/nl/amsterdam/skien-snowboarden','Betreiber')}</aside><p class="compact-voucher"><b>Gutschein für alle drei Hallen:</b> 4 h ${euro(quote(halls[0],'voucher',4).total)} · 8 h ${euro(quote(halls[0],'voucher',6).total)} inkl. Material. <b>Einlösung und Gutscheinplätze unbestätigt;</b> Reisebudgets nutzen Direktpreise. ${link(VOUCHER_URL,'Parool')} · ${link('https://shop.snowworld.com/nl/voucher','Einlösung')}</p>`;
}
function compactMaps() {
  const maps=COMPACT_ORDER.map(id=>{const h=compactHall(id),p=TRAVEL[id],origin=compactPoints(id)[0];return `<section class="region-visuals compact-map-unit" id="${id}" aria-labelledby="map-heading-${id}"><header><div><h3 id="map-heading-${id}">${escapeHTML(COMPACT_LABELS[id])}</h3><p>${escapeHTML(p.province)}</p></div><div class="mini-country">${countryMapMarkup(h)}</div></header><div class="map-toolbar"><p><b>H</b> Skihalle</p><div><button type="button" data-map-reset>Alle Orte</button><button type="button" data-map-nearby>Bei Halle</button><button type="button" data-map-expand aria-label="Karte ${escapeHTML(COMPACT_LABELS[id])} vergrößern">Groß ⤢</button></div></div><div class="regional-map" id="region-map-${id}" data-regional-map="${id}" role="region" aria-label="Umgebungskarte ${escapeHTML(COMPACT_LABELS[id])}"></div><p class="map-readout" data-map-readout>H · ${escapeHTML(origin.name)}</p><p class="map-tile-status compact-note" data-tile-status hidden>Kartenhintergrund lädt nicht vollständig.</p></section>`;}).join('');
  return `<div class="compact-map-grid">${maps}</div><p class="compact-note">H = Halle · C = Coffeeshop · S = Spa · U = Unterkunft. Nummern stehen bei Orten, Shops und Hotels. Nahe Pins sind versetzt und mit dem echten Standort verbunden. <b>Alle Kilometer/Minuten ab Halle: Auto, OSRM 07.10., ohne Verkehr, Parkplatzsuche und Fußwege.</b> <b>Groß ⤢</b> öffnet die Karte mit Ortsnamen und Fotoliste. Über Pins fahren oder antippen: Foto & Entfernung.</p>`;
}
function compactSight(point,id) {
  const places=[...REGIONS[id].places,...TRAVEL[id].activities];
  const match=places.find(p=>p.destination===point.destination)||(point.kind==='natur'&&id==='amsterdam'?places.find(p=>p.destination==='Spaarnwoude, Velsen-Zuid'):null);
  const key=match?MEDIA_PLACES[match.destination]:null;
  if(!key)throw new Error('Missing destination album '+point.name);
  return `<div class="sight-cell"><div>${compactPin(id,point,match.title)}${compactWay(point)}<p>${escapeHTML(COMPACT_SIGHT_NOTES[key]||'Eintritt und Öffnung beim Betreiber prüfen.')}</p>${match.url?`<span class="tiny-source">${link(match.url,'Info & Termine')}</span>`:''}</div>${compactMedia(key,match.title)}</div>`;
}
function compactExcursions() {
  const kinds=[['Küste','kueste'],['Spazieren','natur'],['Freizeitpark','park'],['Museum','museum'],['Höhle / Burg','cave'],['Zoo','zoo'],['Spa optional','spa']];
  const subtype=p=>p.kind!=='aktivitaet'?p.kind:p.name.includes('Duinrell')||p.name.includes('Mondo')?'park':p.name.includes('Museum')||p.name.includes('Mauritshuis')?'museum':p.name.includes('Gaia')?'zoo':'cave';
  return compactScrollTable(`<table class="compare-table excursion-matrix">${compactHeaders('Ausflug')}<tbody>${kinds.map(([label,kind])=>`<tr><th scope="row">${label}</th>${COMPACT_ORDER.map(id=>{const found=compactPoints(id).filter(p=>!p.privateOptionId&&subtype(p)===kind);return `<td>${found.length?found.map(p=>compactSight(p,id)).join(''):kind==='kueste'?'Keine nahe Küste':'—'}</td>`;}).join('')}</tr>`).join('')}</tbody></table>`,'Ausflugsziele der drei Regionen vergleichen');
}
function compactHotels() {
  const rows=COMPACT_ORDER.flatMap(id=>TRAVEL[id].hotels.map(hotel=>{
    const h=compactHall(id),m=MONDAY.hotels[hotel.id],b=focusedTripBudget(h,hotel,m.price),old=focusedTripBudget(h,hotel),p=compactPoints(id).find(p=>p.hotelId===hotel.id);
    return `<tr id="hotel-${hotel.id}" data-hotel-id="${hotel.id}"><th scope="row">${compactPin(id,p,hotel.name)}<small>${escapeHTML(COMPACT_LABELS[id])}</small><span class="tiny-source">${link(hotel.source,'So.–Mi.')} · ${link(m.source,'Mo.–Do.')}</span>${hotel.rating?`<small>Booking ${compactNumber(hotel.rating.review_score)}/10 · ${hotel.rating.number_of_reviews} Bewertungen</small>`:''}</th><td class="photo-cell">${compactMedia('hotel-'+hotel.id,hotel.name)}${hotel.id===15358076?'<small>Außenbild: Visualisierung</small>':''}</td><td data-room-period="sunday"><b>${euro(hotel.price)}</b></td><td data-room-period="monday" class="chosen-period"><b>${euro(m.price)}</b></td><td>${hotel.parking===0?'<b>Frei</b>':`<b>${euro(hotel.parking)}</b><small>9 € / Nacht</small>`}${hotel.id===11947?'<small>+ 8 € Hallenparken vorsorglich im Reisebudget</small>':''}</td><td><b>${hotel.id===11947?'0 km · im Gebäude':compactNumber(hotel.skiRoute.km)+' km'}</b><small>Hotel → Halle${hotel.id===11947?'':' · '+hotel.skiRoute.minutes+' Min.'}</small><small>Hotel → Spa: ${compactNumber(hotel.spaRoute.km)} km · ${hotel.spaRoute.minutes} Min.</small></td><td data-trip-period="monday"><strong class="price-number">ca. ${euro(b.perPerson)}</strong><small>${euro(b.remaining)} Rest zum 500-€-Budget</small><small data-trip-period="sunday">Bisher: ca. ${euro(old.perPerson)}</small></td></tr>`;
  })).join('');
  return compactScrollTable(`<table class="data-table hotel-table"><thead><tr><th scope="col">Hotel & Region</th><th scope="col">Mehrere Fotos</th><th scope="col">11.–14.10.<small>Zimmer / 3 Nächte</small></th><th scope="col" class="chosen-period">12.–15.10.<small>Zimmer / 3 Nächte</small></th><th scope="col">Parken<small>alle 3 Nächte</small></th><th scope="col">Hotelwege<small>Auto</small></th><th scope="col">Reise p. P.<small>ab Montag</small></th></tr></thead><tbody>${rows}</tbody></table>`,'Sieben Hotels mit bisherigen und Montagpreisen vergleichen')+'<p class="compact-note"><b>Zimmerpreise für 2 Erwachsene, 1 Zimmer; beide Suchen vom 06.10.2026, keine Reservierung.</b> Basisbudget für zwei = Zimmer + Hotelparken + 6 h Ski mit Material/Hallenparken + 130 € Auto + 200 € Essen + 90 € Reserve für Coffeeshop, ÖPNV und kleine Extras. Auto, Essen und Reserve sind Schätzungen. Jacuzzi / Pool ist optional und zusätzlich. Frühstück, zusätzliche Eintritte, Stadtparken und separat erhobene Pflichtgebühren ggf. extra. Hotelwege vom 06.10.; Werte können je Fahrtrichtung abweichen.</p>';
}
function compactTownPoint(id,town) {
  const cities=compactPoints(id).filter(p=>p.kind==='stadt');
  return cities.find(p=>p.destination===town.destination)||cities.find(p=>p.name.startsWith(town.name.split(' / ')[0]))||cities[0];
}
function wellnessBudget(offer) {
  if (offer.price===null) return null;
  const pair=Math.round((offer.price+(offer.parking??0)+quote(compactHall(offer.region),'direct',6).pair+FOCUSED_ALLOWANCES.car+FOCUSED_ALLOWANCES.food+FOCUSED_ALLOWANCES.extras)*100)/100;
  const perPerson=Math.round(pair*50)/100;
  return {perPerson,withSpa:Math.round((pair+TRIP_ALLOWANCES.spa)*50)/100,withWarming:offer.warming?Math.round((pair-offer.price+offer.warmingBase+offer.warming)*50)/100:null};
}
function amsterdamPrivateBudget(option) {
  if (option.price===null) return null;
  const lodging=option.type==='private-access'?MONDAY.hotels[option.hotelId].price:option.price;
  const privateAccess=option.type==='private-access'?option.price:0;
  return Math.round((lodging+privateAccess+quote(compactHall('amsterdam'),'direct',6).pair+FOCUSED_ALLOWANCES.car+FOCUSED_ALLOWANCES.food+FOCUSED_ALLOWANCES.extras)*50)/100;
}
function compactAmsterdamPrivate() {
  const rows=AMSTERDAM_PRIVATE_OPTIONS.map(option=>{
    const p=compactPoints('amsterdam').find(p=>p.privateOptionId===option.id),budget=amsterdamPrivateBudget(option),spa=option.type==='private-access';
    const price=spa?`<strong class="price-number">${euro(option.price)}</strong><small><b>Mi. 14.10. · ${option.start}–${option.end}</b><br>2 h · beide Personen · verfügbar</small><small>${escapeHTML(option.rate)}</small><small><b>Privat übernachten: ${euro(option.night.price)}</b><br>14. auf 15.10. · ${option.night.start}–${option.night.end} · verfügbar<br>${link(option.nightBooking,'Nachtangebot')}</small>`:`<strong class="price-number">${euro(option.price)}</strong><small><b>Mo. 12. bis Do. 15.10.</b><br>3 Nächte · beide Personen · verfügbar</small><small>${escapeHTML(option.rate)}</small>`;
    return `<tr data-private-option-id="${option.id}"><th scope="row">${compactPin('amsterdam',p,option.name)}<small>${escapeHTML(option.category)}</small><small>${spa?'Hoofddorp · bei Haarlem / Schiphol':'Amsterdam · Oostenburg, am Wasser'}</small><span class="tiny-source">${link(option.source,'Betreiber & Fotos')} · ${link(option.booking,'Angebot prüfen')}</span></th><td class="photo-cell"><span class="wellness-photo-label">${escapeHTML(option.photoLabel)}</span>${compactMedia(option.album,option.name)}<small>Pfeile / Wischen · ⤢ vergrößern</small></td><td><b>${escapeHTML(option.private)}</b><p class="wellness-confirmation"><strong>Vom Betreiber bestätigt</strong><q lang="${option.confirmation.language}">${escapeHTML(option.confirmation.quote)}</q>${link(option.confirmation.source,'Originalbeschreibung')}</p><small>${escapeHTML(option.conditions)}</small></td><td>${price}</td><td>${compactWay(p)}<small>Ab Skihalle Velsen</small><small>${escapeHTML(option.parkingText)}${option.parkingSource?' '+link(option.parkingSource,'Parkinfo'):''}</small><strong class="price-number ${budget>500?'text-caution':''}">Reise ca. ${euro(budget)} p. P.</strong><small>${spa?'3 Nächte Spaarnwoude Park Hotel (316,44 € für beide) + 2 h private '+(option.id==='istanbul'?'Jacuzzi-Unit.':'Pool/Jacuzzi-Unit.'):'Mit Spa Room / Whirlpool; über eurem 500-€-Budget.'}</small><small>6 h Ski, Auto, Essen + 45 € Ausgehreserve p. P. enthalten · ggf. Parken / weitere Extras zusätzlich.</small></td></tr>`;
  }).join('');
  return `<h3 class="private-amsterdam-title">Optional für Amsterdam: privater Jacuzzi / Pool</h3><p class="compact-note">Ja, beides gibt es. Die Fotos zeigen die Becken: Istanbul hat einen privaten Jacuzzi mit Massagejets, Milano zusätzlich einen echten Pool. Beim Landmark ist es eine runde Whirlpoolwanne im Zimmer.</p>`+compactScrollTable(`<table class="data-table private-amsterdam-table"><thead><tr><th scope="col">Ort & genaue Kategorie</th><th scope="col">Echte Beckenfotos</th><th scope="col">Was ist wirklich privat?</th><th scope="col">Geprüfter Preis & Zeitraum<small>jeweils für beide</small></th><th scope="col">Ab Halle & Reisebudget</th></tr></thead><tbody>${rows}</tbody></table>`,'Private Wellness in Amsterdam und Hoofddorp vergleichen')+`<p class="compact-note"><b>Private Angebote geprüft 07.10.2026; Hotelpreis Spaarnwoude vom 06.10. unverändert übernommen.</b> Preise aus den konkreten Buchungsübersichten, keine Reservierung. Die Übernachtung bei Spa Nova ist ein Nachtaufenthalt; die 99 € / 149 € gelten jeweils für zwei Stunden. Reisebudgets enthalten 6 h Ski mit Material, 130 € Auto, 200 € Essen und 90 € Reserve für Coffeeshop / ÖPNV / kleine Extras für beide. Diese Ansätze sind Schätzungen; ggf. Parkgebühren und weitere Extras zusätzlich.</p>`;
}
function compactWellness() {
  const rows=WELLNESS_OFFERS.map(offer=>{
    const p=compactPoints(offer.region).find(p=>p.wellnessId===offer.id),b=wellnessBudget(offer);
    const price=offer.price===null?`<b class="text-caution">${offer.availability==='unavailable'?'Direkt nicht verfügbar':'Preis nicht bestätigt'}</b><small>${escapeHTML(offer.rate)}</small>`:`<strong class="price-number">${offer.priceApprox?'ca. ':''}${euro(offer.price)}</strong><small>${escapeHTML(offer.status)}</small><small>${escapeHTML(offer.rate)}</small>${offer.comparison?`<small>${link(offer.comparison.url,offer.comparison.label)}: ${euro(offer.comparison.price)}<br>Booking ${euro(offer.comparison.price-offer.price)} günstiger</small>`:''}`;
    const budget=b?`<strong class="price-number ${b.perPerson>500?'text-caution':''}">ca. ${euro(b.perPerson)}</strong><small>Mit eigenem Hot Tub / Jacuzzi; ohne Spa-Ausflug</small>${b.withWarming?`<small>Direkt + Aufwärmservice: <b>${euro(b.withWarming)}</b></small>`:''}<small>+ separater Spa-Tag: <b>${euro(b.withSpa)}</b>${b.withWarming?' beim Booking-Angebot':''}</small>${offer.priceApprox?'<small>Ggf. offene Pflichtgebühren extra.</small>':offer.parking===null?'<small>Ggf. Parkgebühren extra.</small>':''}`:'<span>Kein Reisebudget ohne buchbares Angebot.</span>';
    const extraWays=(offer.alternateRegions||[]).map(id=>{const other=compactPoints(id).find(p=>p.wellnessId===offer.id);return `<small>Auch ab ${escapeHTML(COMPACT_LABELS[id])}:</small>${compactWay(other)}`;}).join('');
    return `<tr data-wellness-id="${offer.id}"><th scope="row">${compactPin(offer.region,p,offer.name)}<small>${escapeHTML(offer.regionLabel||COMPACT_LABELS[offer.region])}</small><small>${escapeHTML(offer.room)}</small><span class="tiny-source">${link(offer.source,'Unterkunft & Becken')} · ${link(offer.booking,'Angebot prüfen')}</span></th><td class="photo-cell"><span class="wellness-photo-label">${offer.waterType==='pool'?'Privatpool im Zimmer':'Eigener '+(offer.waterType==='jacuzzi'?'Jacuzzi':'Hot Tub')}</span>${compactMedia(offer.album,offer.name)}<small>Becken zuerst · Pfeile / Wischen · ⤢ groß</small></td><td><b>${escapeHTML(offer.private)}</b><p class="wellness-confirmation"><strong>Vom Betreiber bestätigt</strong><q lang="nl">${escapeHTML(offer.confirmation.quote)}</q> ${link(offer.confirmation.source,'Originalbeschreibung')}</p><small>${escapeHTML(offer.shared)}</small></td><td>${price}</td><td>${compactWay(p)}<small>Ab ${escapeHTML(COMPACT_LABELS[offer.region])}</small>${extraWays}<small>${escapeHTML(offer.parkingText)}</small></td><td>${budget}</td><td>${offer.breakfast?'<b>Frühstück enthalten</b>':'<b>Frühstück extra / Selbstversorgung</b>'}<small>${escapeHTML(offer.terms)}</small></td></tr>`;
  }).join('');
  const best=WELLNESS_OFFERS.find(o=>o.id==='meerssen'),b=wellnessBudget(best);
  return compactAmsterdamPrivate()+`<h3 class="private-amsterdam-title">Weitere Unterkünfte mit eigenem Hot Tub / Pool</h3><p class="wellness-summary"><b>Becken direkt an der Unterkunft, mit eurer Ausgehreserve über 500 €:</b> Mooidal · echter privater Hot Tub auf der Terrasse · ${euro(best.price)} für beide / 3 Nächte · Reise ca. <b>${euro(b.perPerson)} p. P.</b> · 22,6 km / ca. 21 Min. ab Landgraaf. Direkt mit Aufwärmservice ca. ${euro(b.withWarming)} p. P.</p>`+compactScrollTable(`<table class="data-table wellness-table"><thead><tr><th scope="col">Unterkunft & Kategorie</th><th scope="col">Das private Becken<small>echte Betreiberfotos</small></th><th scope="col">Becken & Privatsphäre</th><th scope="col">12.–15.10.<small>3 Nächte · für beide</small></th><th scope="col">Ab Skihalle & Parken</th><th scope="col">Ganze Reise p. P.</th><th scope="col">Frühstück & Bedingungen</th></tr></thead><tbody>${rows}</tbody></table>`,'Echte private Hot Tubs, Gartenjacuzzis und Zimmerpools vergleichen')+`<p class="compact-note"><b>Geprüft 07.10.2026 · 2 Erwachsene.</b> Reise für zwei = Unterkunft + 6 h Ski mit Material/Hallenparken + 130 € Auto + 200 € Essen + 90 € Coffeeshop-/ÖPNV-Reserve. Ein separater Spa-Tag kostet im Plan zusätzlich 140 € für beide / 70 € p. P. Auto, Essen und Spa sind Schätzungen; weitere Eintritte und Stadtparken extra. Alte Hotelpreise bleiben oben erhalten. Fotos zeigen die beschriebene Kategorie; Einrichtung und Sichtschutz können je Einheit variieren. Keine Reservierung.</p>`;
}
function compactCities() {
  const rows=COMPACT_ORDER.flatMap(id=>CITY_LIFE[id].towns.map(town=>{
    const text=COMPACT_CITY_COPY[town.name],point=compactTownPoint(id,town);
    return `<tr data-city="${escapeHTML(town.name)}"><th scope="row">${compactPin(id,point,town.name)}<small>${escapeHTML(COMPACT_LABELS[id])}</small>${compactWay(point)}<span class="tiny-source">${town.sources.map(s=>link(s.url,s.label)).join(' · ')}</span></th><td class="photo-cell">${compactMedia(town.album,town.photoLabel||town.name)}</td><td><b>${compactNumber(town.population)}</b><small>Einwohner</small><small>${compactNumber(town.landArea)} km² Landfläche</small></td><td>${escapeHTML(text.feel)}<small>${escapeHTML(text.shops)}</small><small>${escapeHTML(text.food)}</small></td><td><b>${town.coffee.count} Shops</b><small class="${town.name==='Maastricht'?'text-caution':''}">${escapeHTML(text.access)}</small></td></tr>`;
  })).join('');
  return compactScrollTable(`<table class="data-table city-table"><thead><tr><th scope="col">Stadt & Weg ab Halle</th><th scope="col">Stadt / Umgebung</th><th scope="col">Größe</th><th scope="col">Atmosphäre, Läden & Restaurants</th><th scope="col">Coffeeshops / Touristen</th></tr></thead><tbody>${rows}</tbody></table>`,'Stadtgrößen, Shopping, Restaurants und Touristen-Zugang vergleichen')+'<p class="compact-note">Einwohner: ganze Gemeinde, CBS 01.01.2026; Landfläche 2025. Shop-Anzahl: WODC Ende 2024, keine Live-Zählung. In Maastricht und Heerlen ist niederländischer Wohnsitz erforderlich. Velsens aktuelle Einlasspraxis ist nicht bestätigt; dafür sind Haarlem/Amsterdam eingeplant. Stadtparken meist extra; Landgraafs kommunale Parkplätze kostenlos, blaue Zonen beachten.</p>';
}
function compactShops() {
  const notes={Casa:'Nahe Option, schwach bewertet.',Cremers:'Shop 09–01 Uhr; Club-Lounge Mo./Di. geschlossen.','Down Under':'Mo.–Fr. 16–23 Uhr; Sa./So. 13–23 Uhr. Schwach bewertet.',Birdy:'Mo.–Mi./So. 10–23 Uhr; Do.–Sa. bis 24 Uhr. Kleine Bewertungsbasis.','Siberië':'08–01 Uhr; ca. 40 Plätze. Getränk Pflicht, max. 2,5 h Aufenthalt.'};
  const rows=COMPACT_ORDER.flatMap(id=>REGIONS[id].coffee.shops.map(shop=>{
    const p=compactPoints(id).find(p=>p.shop===shop.name),key=MEDIA_SHOPS[shop.name+'|'+shop.city];
    return `<tr data-shop-name="${escapeHTML(shop.name)}"><th scope="row">${compactPin(id,p,shop.name+' · '+shop.city)}<small>${escapeHTML(shop.address)}</small><span class="tiny-source">${link(shop.profile,'Profil')}${shop.website?' · '+link(shop.website,'Betreiber'):''}</span></th><td class="photo-cell">${compactMedia(key,shop.name)}</td><td>${compactWay(p)}</td><td><b>${escapeHTML(shop.rating)}</b><small>${shop.reviews} Bewertungen</small></td><td>${escapeHTML(shop.name==='Siberië'?'Touristen vom Betreiber bestätigt':'Touristen laut Shopprofil')}<small>18+ · Originalausweis</small></td><td>${escapeHTML(notes[shop.name])}</td></tr>`;
  })).join('');
  return compactScrollTable(`<table class="data-table shop-table"><thead><tr><th scope="col">Coffeeshop</th><th scope="col">Mehrere Fotos</th><th scope="col">Ab Halle</th><th scope="col">Bewertung</th><th scope="col">Zugang als Tourist</th><th scope="col">Öffnung / Hinweis</th></tr></thead><tbody>${rows}</tbody></table>`,'Fünf ausgewählte Coffeeshops vergleichen')+'<p class="compact-note">Bewertungen und Hinweise vom 07.10.2026; teils kleine Stichproben. Profile sind keine individuelle Einlasszusage. Fahrer nüchtern; Cannabis nicht über die Grenze mitnehmen.</p>';
}
function compactEdibles() {
  const menus=['Cremers|Den Haag','Birdy|Haarlem','Siberië|Amsterdam'].map(key=>{
    const data=EDIBLES[key],name=key.split('|')[0];
    return `<section class="edibles-section"><h3>${escapeHTML(name)}</h3><p class="compact-note">${escapeHTML(data.menuDate)}</p><div class="table-scroll"><table class="edible-table data-table"><thead><tr><th scope="col">Produkt / Einheit</th><th scope="col">€</th><th scope="col">Stärke laut Karte</th></tr></thead><tbody>${data.items.map(i=>`<tr><th scope="row">${escapeHTML(i.name)}<small>${escapeHTML(i.unit)}</small></th><td>${euro(i.price)}</td><td>${escapeHTML(i.strength)}</td></tr>`).join('')}</tbody></table></div><p class="tiny-source">${data.sources.map(s=>link(s.url,s.label)).join(' · ')}</p></section>`;
  }).join('');
  return `<div class="compact-edible-grid">${menus}</div><p class="compact-note"><b>Casa & Down Under:</b> keine belastbare Edibles-Karte gefunden. Alle Karten am 07.10. gelesen; Lagerbestand und aktuelle Preise offen. Mg-Angaben sind Menüangaben, keine geprüfte THC-Dosis. Bei Birdy ist mg pro Portion/Gesamtmenge teils unklar. <b>Gramm Hash ≠ mg THC.</b> Bei Siberië stehen 50/66 mg bei Brownies, keine 500/650 mg.</p>`;
}
function compactPlan() {
  const days=['Mo. 12.10.','Di. 13.10.','Mi. 14.10.','Do. 15.10.'];
  return compactScrollTable(`<table class="compare-table plan-matrix">${compactHeaders('Tag')}<tbody>${days.map((day,i)=>`<tr><th scope="row">${day}</th>${COMPACT_ORDER.map(id=>`<td>${escapeHTML(FOCUSED_PLANS[id][i])}</td>`).join('')}</tr>`).join('')}</tbody></table>`,'Vier-Tage-Pläne der drei Regionen vergleichen')+'<p class="compact-note">Montag hin, Donnerstag zurück; 3 Nächte. Skifahren kommt vor dem Coffeeshop-Abend. Für den Rückweg vom Coffeeshop zu Fuß / ÖPNV einplanen und die Verbindung bei 9292.nl prüfen; Fahrer bleibt nüchtern. Jacuzzi nur optional: 14.10., 10:30–12:30 in Hoofddorp.</p>';
}
function renderCompactApp() {
  document.querySelector('#hall-nav').innerHTML=[['vergleich','Vergleich'],['umgebung','Karten'],['unterkuenfte','Hotels'],['stadt-shops','Städte & Shops'],['reiseplan','Plan'],['wellness','Jacuzzi optional'],['edibles','Edibles']].map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
  const comparison=compactSection('vergleich','Die drei Regionen im direkten Vergleich',compactOverview(),'12.–15.10.2026 · 2 Erwachsene · eigenes Auto · 500 € pro Person');
  const surroundings=compactSection('umgebung','Karten & Ausflüge',compactMaps()+compactExcursions(),'Alle Orte offen sichtbar; Nummern passen zu den Karten.');
  const hotels=compactSection('unterkuenfte','7 Hotels: Preise & ganze Reise',compactHotels(),'Ein Zimmer für zwei · je 3 Nächte · bisherige Preise bleiben erhalten.');
  const cities=compactSection('stadt-shops','Städte, Läden & Restaurants',compactCities())+compactSection('coffeeshops','5 Coffeeshop-Beispiele',compactShops());
  document.querySelector('#compact-content').innerHTML=comparison+surroundings+hotels+cities+compactSection('reiseplan','Vier Tage ab Montag',compactPlan())+compactSection('wellness','Jacuzzi / Hot Tub / Pool – optional',compactWellness(),'Euer Hauptplan: Coffeeshop, Skifahren & Essen. Private Becken nur als Extra.')+compactSection('edibles','Edibles: Preise & Kartenangaben',compactEdibles());
}
