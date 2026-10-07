"use strict";
const euro = value => new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(value);
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
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
function photoCreditMarkup(photo) {
  return `${escapeHTML(photo.credit)} · ${link(photo.source, "Bildquelle")}${photo.licenseUrl ? ' · '+link(photo.licenseUrl, 'Lizenz') : ''}`;
}
function mapPoint(point) {
  return {x:36 + (point.lon - 2.8) * 112, y:32 + (53.65 - point.lat) * 190};
}
function countryMapMarkup(hall) {
  const origin = mapPoint(COUNTRY_MAP.origin);
  return `<svg class="country-map" viewBox="0 0 730 675" role="img" aria-labelledby="map-title-${hall.id} map-description-${hall.id}"><title id="map-title-${hall.id}">Lage von ${escapeHTML(hall.name)} in den Niederlanden</title><desc id="map-description-${hall.id}">${escapeHTML(TRAVEL[hall.id].province)}. Der große grüne Punkt zeigt diese Halle; kleine Punkte zeigen die übrigen Hallen. Löningen liegt östlich in Deutschland.</desc><rect width="730" height="675" fill="#edf3f2"/>${COUNTRY_MAP.paths.map(p => `<path d="${p.path}" class="map-land ${p.country === 'Netherlands' ? 'map-netherlands' : ''}"/>`).join('')}<text x="114" y="210" class="map-water-label">Nordsee</text><text x="327" y="269" class="map-country-label">Niederlande</text><text x="557" y="444" class="map-country-label">Deutschland</text><text x="245" y="625" class="map-country-label">Belgien</text>${halls.map((h, i) => {const p = mapPoint(TRAVEL[h.id].coordinates); return `<g class="map-hall ${h.id === hall.id ? 'map-active' : ''}"><circle cx="${p.x}" cy="${p.y}" r="${h.id === hall.id ? 19 : 11}"/><text x="${p.x}" y="${p.y + 1}">${i + 1}</text></g>`;}).join('')}<circle cx="${origin.x}" cy="${origin.y}" r="7" fill="#a77932"/><text x="${origin.x - 6}" y="${origin.y - 16}" text-anchor="end" class="map-origin">Start: Löningen</text><path d="M655 82v-36m0 0-7 14m7-14 7 14" fill="none" stroke="#66746f" stroke-width="2"/><text x="655" y="37" text-anchor="middle" class="map-north">N</text></svg>`;
}
function mapDistance(point) {
  if (point.kind === 'ski') return '0 km';
  if (point.access === 'walk') return '0 km · direkt';
  if (point.hotelId === 11947) return '0 km · vor Ort';
  return `${new Intl.NumberFormat('de-DE',{maximumFractionDigits:1}).format(point.km)} km`;
}
function mapMinutes(point) {
  if (point.access === 'walk') return 'zu Fuß';
  if (point.hotelId === 11947) return 'keine Autofahrt';
  return `ca. ${Math.max(1,point.minutes)} Min.`;
}
function tripBudget(hall, hotel, roomPrice=hotel.price) {
  const ski = hall.id === 'uithof' ? 92 : quote(hall, 'direct', 6).pair;
  const allowance = TRIP_ALLOWANCES.spa + TRIP_ALLOWANCES.car + TRIP_ALLOWANCES.food;
  const pair = Math.round((roomPrice + hotel.parking + ski + allowance) * 100) / 100;
  const perPerson = Math.round(pair * 50) / 100;
  return {ski, allowance, pair, perPerson, remaining:Math.round((TRIP_ALLOWANCES.budgetPerPerson - perPerson) * 100) / 100};
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
renderCompactApp();
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
  return {date:"2026-10-13", pricesChecked:"2026-10-05", regionAndVoucherConditionsChecked:"2026-10-06", cityAndEdiblesChecked:"2026-10-07", mapsAndOperatingStatusChecked:"2026-10-07", regionalMaps:Object.fromEntries(COMPACT_ORDER.map(id=>[id,{...REGIONAL_MAPS.regions[id],points:compactPoints(id)}])), wellness:{checked:'2026-10-07',offers:WELLNESS_OFFERS.map(o=>({...o,budget:wellnessBudget(o)})),amsterdamPrivateOptions:AMSTERDAM_PRIVATE_OPTIONS.map(o=>({...o,budget:amsterdamPrivateBudget(o)}))}, travelFocus:{main:["Coffeeshops","Skifahren","Essen gehen"],jacuzzi:"optional",allowancesForTwo:FOCUSED_ALLOWANCES,plans:FOCUSED_PLANS}, currency:"EUR", includes:["skipass", "ski", "ski-boots"], halls:halls.map(h => ({id:h.id, name:h.name, longestPisteMetres:h.length, fourHours:{direct:quote(h, 'direct', 4), voucher:!["montana", "uithof"].includes(h.id) ? quote(h, 'voucher', 4) : null}, sixHours:{direct:quote(h, 'direct', 6), voucher:!["montana", "uithof"].includes(h.id) ? quote(h, 'voucher', 6) : null}, voucherRedemptionVerified:false, photoCount:GALLERIES[h.id].photos.length, coffee:REGIONS[h.id].coffee, cityLife:CITY_LIFE[h.id], edibles:REGIONS[h.id].coffee.shops.map(shop=>({shop:shop.name,...EDIBLES[shop.name+"|"+shop.city]})), regionSummary:REGIONS[h.id].summary}))};
}
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  try {void Promise.resolve(document.modelContext.registerTool({name:"get_ski_comparison", title:"Skihallenvergleich lesen", description:"Read all four/six-hour direct and voucher prices, hall sizes, photo counts and coffee access caveats. Voucher redemption is unverified. No purchase or reservation.", inputSchema:{type:"object", properties:{}, additionalProperties:false}, annotations:{readOnlyHint:true, untrustedContentHint:false}, execute:() => comparisonSnapshot()}, {signal:lifecycle.signal})).catch(() => {});} catch {}
  window.addEventListener('pagehide', () => lifecycle.abort(), {once:true});
}
