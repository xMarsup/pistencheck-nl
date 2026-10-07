"use strict";

const COMPACT_ORDER = ['amsterdam','zoetermeer','landgraaf'];
const COMPACT_LABELS = {amsterdam:'Velsen / Amsterdam',zoetermeer:'Zoetermeer / Den Haag',landgraaf:'Landgraaf / Limburg'};
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
const compactPoints = id => REGIONAL_MAPS.regions[id].points;
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
    row('Passt am besten für',(_,id)=>({amsterdam:'Stadt & Meer',zoetermeer:'Ski, Spa & Meer',landgraaf:'Langer Skitag & Hügel'}[id]),'choice-row'),
    row('Pisten',(h,id)=>`<strong class="key-number">${h.length} m</strong><small>${id==='amsterdam'?'Hauptpiste + 70 m Anfänger':id==='zoetermeer'?'+ 2 × 140 m blau + 30 m Kinder':'Rot/blau auf demselben Hang + 60 / 50 / 20 m'}</small><button type="button" class="compact-plan" data-enlarge-map="${id}" aria-label="Hallenplan ${escapeHTML(h.name)} vergrößern"><img src="${GALLERIES[id].map.src}" alt="Hallenplan ${escapeHTML(h.name)}" width="80" height="50" loading="lazy"><span>Hallenplan ⤢</span></button>`),
    row('4 h Ski · p. P.',h=>`<strong class="price-number">${euro(quote(h,'direct',4).total)}</strong><small>${euro(quote(h,'direct',4).rate)} je Stunde</small>`,'price-row'),
    row('6 h Ski · p. P.',h=>`<strong class="price-number">${euro(quote(h,'direct',6).total)}</strong><small>${euro(quote(h,'direct',6).rate)} je Stunde · 8-h-Pass</small><small>${link(h.booking,'Tickets')} · ${link(h.source,'Halle')}</small>`,'price-row'),
    row('Hallenparken',h=>h.parking?'8 € online<small>bis 9 € vor Ort · je Auto</small>':'Kostenlos'),
    row('Ganze Reise · p. P.',(h,id)=>{const hotel=TRAVEL[id].hotels.find(x=>x.id===DECISIONS[id].hotelId),b=tripBudget(h,hotel,MONDAY.hotels[hotel.id].price);return `<strong class="price-number">ca. ${euro(b.perPerson)}</strong><small>Mit ${escapeHTML(hotel.name)}<br>12.–15.10. · Modell inkl. 6 h Ski</small>`;},'budget-row'),
    row('Ab Löningen',(_,id)=>{const a=TRAVEL[id].arrival;return `<b>${Math.round(a.km)} km</b><small>${Math.floor(a.minutes/60)} Std. ${a.minutes%60} Min. ohne Verkehr</small><small>${link(route('Löningen, Deutschland',REGIONS[id].address),'Route')}</small>`;}),
    row('Stadtziele',(_,id)=>compactPoints(id).filter(p=>p.kind==='stadt'&&p.number!=='1').map(p=>`<span>${escapeHTML(p.name.split(' · ')[0])}</span><small>${mapDistance(p)} · ${mapMinutes(p)}</small>`).join('')),
    row('Meer',(_,id)=>{const p=compactPoint(id,'kueste');return p?`${escapeHTML(p.name.split(' · ')[0])}<small>${mapDistance(p)} · ${mapMinutes(p)}</small>`:'Keine nahe Küste';}),
    row('Spa ab Halle',(_,id)=>{const p=compactPoint(id,'spa');return `${escapeHTML(p.name.split(' · ')[0])}<small>${mapDistance(p)} · ${mapMinutes(p)}</small>`;}),
    row('Stärke',(_,id)=>({amsterdam:'Amsterdam, Haarlem, Grachten & Strand',zoetermeer:'Längere Piste, Den Haag & Strand',landgraaf:'400-m-Hang, Heide, Valkenburg & Maastricht'}[id])),
    row('Nachteil',(_,id)=>({amsterdam:'Kurze Piste; Lifte eingeschränkt; Stadt-Ausflüge nötig',zoetermeer:'Steiler Haupt­hang; Altstadt & Meer liegen in Den Haag',landgraaf:'Ruhige Basis; keine Küste; wenig Touristen-Shops'}[id])),
    row('ÖPNV · Tagespreis',(_,id)=>`${escapeHTML(REGIONS[id].transport.price)}<small>${link(REGIONS[id].transport.url,REGIONS[id].transport.name)}</small>`)
  ];
  return `<table class="compare-table overview-matrix">${compactHeaders('Euer Urlaub')}<tbody>${rows.join('')}</tbody></table><p class="compact-note">Ski inklusive Ski & Schuhe, ohne Unterricht. Reguläre Ticketpreise vom 05.10. für 13.10.; keine Reservierung. Tageskarten gelten jeweils nur im genannten Verkehrsnetz; kein kostenloses allgemeines Touristenticket bestätigt.</p><aside class="compact-status"><b>Velsen: Piste offen, Lifte eingeschränkt.</b> Rechter Schlepplift und Bandlift gesperrt; linker Lift und Zugang zur 70-m-Piste nicht ausdrücklich bestätigt. Mehr Wartezeit möglich. Betreiberstand 07.10.; Ende der Einschränkungen für 12.–15.10. offen. ${link('https://www.snowworld.com/nl/amsterdam/skien-snowboarden','Betreiber')}</aside><p class="compact-voucher"><b>Gutschein für alle drei Hallen:</b> 4 h ${euro(quote(halls[0],'voucher',4).total)} · 8 h ${euro(quote(halls[0],'voucher',6).total)} inkl. Material. <b>Einlösung und Gutscheinplätze unbestätigt;</b> Reisebudgets nutzen Direktpreise. ${link(VOUCHER_URL,'Parool')} · ${link('https://shop.snowworld.com/nl/voucher','Einlösung')}</p>`;
}
function compactMaps() {
  const maps=COMPACT_ORDER.map(id=>{const h=compactHall(id),p=TRAVEL[id],origin=compactPoints(id)[0];return `<section class="region-visuals compact-map-unit" id="${id}" aria-labelledby="map-heading-${id}"><header><div><h3 id="map-heading-${id}">${escapeHTML(COMPACT_LABELS[id])}</h3><p>${escapeHTML(p.province)}</p></div><div class="mini-country">${countryMapMarkup(h)}</div></header><div class="map-toolbar"><p><b>H</b> Skihalle</p><div><button type="button" data-map-reset>Alle Orte</button><button type="button" data-map-nearby>Bei Halle</button></div></div><div class="regional-map" id="region-map-${id}" data-regional-map="${id}" role="region" aria-label="Umgebungskarte ${escapeHTML(COMPACT_LABELS[id])}"></div><p class="map-readout" data-map-readout>H · ${escapeHTML(origin.name)}</p><p class="map-tile-status compact-note" data-tile-status hidden>Kartenhintergrund lädt nicht vollständig.</p></section>`;}).join('');
  return `<div class="compact-map-grid">${maps}</div><p class="compact-note">H = Halle · C = Coffeeshop · S = Spa · U = Unterkunft. Nummern stehen bei Orten, Shops und Hotels. Nahe Pins sind versetzt und mit dem echten Standort verbunden. <b>Alle Kilometer/Minuten ab Halle: Auto, OSRM 07.10., ohne Verkehr, Parkplatzsuche und Fußwege.</b> Ortsnamen anklicken zum Heranzoomen; alle Infos bleiben offen.</p>`;
}
function compactSight(point,id) {
  const places=[...REGIONS[id].places,...TRAVEL[id].activities];
  const match=places.find(p=>p.destination===point.destination)||(point.kind==='natur'&&id==='amsterdam'?places.find(p=>p.destination==='Spaarnwoude, Velsen-Zuid'):null);
  const key=match?MEDIA_PLACES[match.destination]:null;
  if(!key)throw new Error('Missing destination album '+point.name);
  return `<div class="sight-cell"><div>${compactPin(id,point,match.title)}${compactWay(point)}<p>${escapeHTML(COMPACT_SIGHT_NOTES[key]||'Eintritt und Öffnung beim Betreiber prüfen.')}</p>${match.url?`<span class="tiny-source">${link(match.url,'Info & Termine')}</span>`:''}</div>${compactMedia(key,match.title)}</div>`;
}
function compactExcursions() {
  const kinds=[['Spa','spa'],['Küste','kueste'],['Spazieren','natur'],['Freizeitpark','park'],['Museum','museum'],['Höhle / Burg','cave'],['Zoo','zoo']];
  const subtype=p=>p.kind!=='aktivitaet'?p.kind:p.name.includes('Duinrell')||p.name.includes('Mondo')?'park':p.name.includes('Museum')||p.name.includes('Mauritshuis')?'museum':p.name.includes('Gaia')?'zoo':'cave';
  return compactScrollTable(`<table class="compare-table excursion-matrix">${compactHeaders('Ausflug')}<tbody>${kinds.map(([label,kind])=>`<tr><th scope="row">${label}</th>${COMPACT_ORDER.map(id=>{const found=compactPoints(id).filter(p=>subtype(p)===kind);return `<td>${found.length?found.map(p=>compactSight(p,id)).join(''):kind==='kueste'?'Keine nahe Küste':'—'}</td>`;}).join('')}</tr>`).join('')}</tbody></table>`,'Ausflugsziele der drei Regionen vergleichen');
}
function compactHotels() {
  const rows=COMPACT_ORDER.flatMap(id=>TRAVEL[id].hotels.map(hotel=>{
    const h=compactHall(id),m=MONDAY.hotels[hotel.id],b=tripBudget(h,hotel,m.price),old=tripBudget(h,hotel),p=compactPoints(id).find(p=>p.hotelId===hotel.id);
    return `<tr id="hotel-${hotel.id}" data-hotel-id="${hotel.id}"><th scope="row">${compactPin(id,p,hotel.name)}<small>${escapeHTML(COMPACT_LABELS[id])}</small><span class="tiny-source">${link(hotel.source,'So.–Mi.')} · ${link(m.source,'Mo.–Do.')}</span>${hotel.rating?`<small>Booking ${compactNumber(hotel.rating.review_score)}/10 · ${hotel.rating.number_of_reviews} Bewertungen</small>`:''}</th><td class="photo-cell">${compactMedia('hotel-'+hotel.id,hotel.name)}${hotel.id===15358076?'<small>Außenbild: Visualisierung</small>':''}</td><td data-room-period="sunday"><b>${euro(hotel.price)}</b></td><td data-room-period="monday" class="chosen-period"><b>${euro(m.price)}</b></td><td>${hotel.parking===0?'<b>Frei</b>':`<b>${euro(hotel.parking)}</b><small>9 € / Nacht</small>`}${hotel.id===11947?'<small>+ 8 € Hallenparken vorsorglich im Reisebudget</small>':''}</td><td><b>${hotel.id===11947?'0 km · im Gebäude':compactNumber(hotel.skiRoute.km)+' km'}</b><small>Hotel → Halle${hotel.id===11947?'':' · '+hotel.skiRoute.minutes+' Min.'}</small><small>Hotel → Spa: ${compactNumber(hotel.spaRoute.km)} km · ${hotel.spaRoute.minutes} Min.</small></td><td data-trip-period="monday"><strong class="price-number">ca. ${euro(b.perPerson)}</strong><small>${euro(b.remaining)} Rest zum 500-€-Budget</small><small data-trip-period="sunday">Bisher: ca. ${euro(old.perPerson)}</small></td></tr>`;
  })).join('');
  return compactScrollTable(`<table class="data-table hotel-table"><thead><tr><th scope="col">Hotel & Region</th><th scope="col">Mehrere Fotos</th><th scope="col">11.–14.10.<small>Zimmer / 3 Nächte</small></th><th scope="col" class="chosen-period">12.–15.10.<small>Zimmer / 3 Nächte</small></th><th scope="col">Parken<small>alle 3 Nächte</small></th><th scope="col">Hotelwege<small>Auto</small></th><th scope="col">Reise p. P.<small>ab Montag</small></th></tr></thead><tbody>${rows}</tbody></table>`,'Sieben Hotels mit bisherigen und Montagpreisen vergleichen')+'<p class="compact-note"><b>Zimmerpreise für 2 Erwachsene, 1 Zimmer; beide Suchen vom 06.10.2026, keine Reservierung.</b> Reisebudget für zwei = Zimmer + Hotelparken + 6 h Ski mit Material/Hallenparken + 140 € Spa + 130 € Auto + 160 € Essen. Die letzten drei Werte sind Schätzungen. Frühstück, zusätzliche Eintritte, Stadtparken und separat erhobene Pflichtgebühren ggf. extra. Hotelwege vom 06.10.; Werte können je Fahrtrichtung abweichen.</p>';
}
function compactTownPoint(id,town) {
  const cities=compactPoints(id).filter(p=>p.kind==='stadt');
  return cities.find(p=>p.destination===town.destination)||cities.find(p=>p.name.startsWith(town.name.split(' / ')[0]))||cities[0];
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
  return compactScrollTable(`<table class="compare-table plan-matrix">${compactHeaders('Tag')}<tbody>${days.map((day,i)=>`<tr><th scope="row">${day}</th>${COMPACT_ORDER.map(id=>`<td>${escapeHTML(REGIONS[id].plan[i])}</td>`).join('')}</tr>`).join('')}</tbody></table>`,'Vier-Tage-Pläne der drei Regionen vergleichen')+'<p class="compact-note">Montag hin, Donnerstag zurück; 3 Nächte. Spa-Termin und Badebekleidungstag vor Buchung prüfen. Weitere Eintritte sind optional.</p>';
}
function renderCompactApp() {
  document.querySelector('#hall-nav').innerHTML=[['vergleich','Vergleich'],['umgebung','Karten & Ausflüge'],['unterkuenfte','Hotels'],['stadt-shops','Städte & Shops'],['edibles','Edibles'],['reiseplan','Plan']].map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
  const comparison=compactSection('vergleich','Die drei Regionen im direkten Vergleich',compactOverview(),'12.–15.10.2026 · 2 Erwachsene · eigenes Auto · 500 € pro Person');
  const surroundings=compactSection('umgebung','Karten & Ausflüge',compactMaps()+compactExcursions(),'Alle Orte offen sichtbar; Nummern passen zu den Karten.');
  const hotels=compactSection('unterkuenfte','7 Hotels: Preise & ganze Reise',compactHotels(),'Ein Zimmer für zwei · je 3 Nächte · bisherige Preise bleiben erhalten.');
  const cities=compactSection('stadt-shops','Städte, Läden & Restaurants',compactCities())+compactSection('coffeeshops','5 Coffeeshop-Beispiele',compactShops());
  document.querySelector('#compact-content').innerHTML=comparison+surroundings+hotels+cities+compactSection('edibles','Edibles: Preise & Kartenangaben',compactEdibles())+compactSection('reiseplan','Vier Tage ab Montag',compactPlan());
}
