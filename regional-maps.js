"use strict";

// Pins stay at their true coordinates. At regional zoom, crowded icons are
// displaced in pixels; thin lines connect each displaced icon to its location.
function initRegionalMaps() {
  const containers = [...document.querySelectorAll('[data-regional-map]')];
  if (!window.L) {
    containers.forEach(container => {
      container.innerHTML = '<p class="map-load-note">Die interaktive Karte konnte nicht geladen werden. Alle Orte und Entfernungen stehen daneben.</p>';
    });
    return;
  }
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loaded = new WeakSet();
  const instances = new WeakMap();
  function create(container) {
    if (loaded.has(container)) return;
    loaded.add(container);
    const id = container.dataset.regionalMap, data = REGIONAL_MAPS.regions[id];
    const section = container.closest('.region-visuals');
    const placeRows = [...document.querySelectorAll(`[data-map-for="${id}"][data-map-point]`)];
    const readout = section.querySelector('[data-map-readout]');
    container.replaceChildren();
    const map = L.map(container, {scrollWheelZoom:false, minZoom:8, maxZoom:18, zoomSnap:.5, zoomAnimation:!reducedMotion, fadeAnimation:!reducedMotion});
    const base = L.tileLayer(REGIONAL_MAPS.tileUrl, {
      maxZoom:19, keepBuffer:0,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    });
    const failedTiles = new Set();
    const tileStatus = section.querySelector('[data-tile-status]');
    base.on('tileerror', event => {
      failedTiles.add(event.tile); tileStatus.hidden=false;
    });
    base.on('tileload', event => {
      failedTiles.delete(event.tile);
      if (!failedTiles.size) tileStatus.hidden=true;
    });
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');
    L.control.scale({imperial:false, position:'bottomleft', maxWidth:90}).addTo(map);
    const bounds = L.latLngBounds(data.points.map(p => [p.lat,p.lon]));
    const leaders = L.layerGroup().addTo(map);
    const markers = new Map();
    let selectedKey = null;
    let viewMode = 'all';
    const origin = data.points[0];
    const defaultReadout = `H · ${origin.name} — Ausgangspunkt aller Kilometer`;
    readout.textContent = defaultReadout;
    function activate(point) {
      selectedKey = point.key;
      readout.textContent = `${point.number} · ${point.name} · ${mapDistance(point)}${point.kind==='ski'?'':` · ${mapMinutes(point)}`}`;
      placeRows.forEach(row => row.classList.toggle('map-row-active',row.dataset.mapPoint===point.key));
      for(const [key,marker] of markers) {
        marker.getElement()?.classList.toggle('map-marker-active',key===point.key);
        marker.setZIndexOffset(key===point.key?500:marker.options.baseZIndex);
      }
    }
    function resetSelection() {
      selectedKey=null;readout.textContent=defaultReadout;
      placeRows.forEach(row=>row.classList.remove('map-row-active'));
      for(const marker of markers.values()) {
        marker.getElement()?.classList.remove('map-marker-active');marker.setZIndexOffset(marker.options.baseZIndex);marker.closeTooltip();
      }
    }
    for(const point of data.points) {
      const marker = L.marker([point.lat,point.lon], {
        icon:mapIcon(point),title:`${point.number} · ${point.name} · ${mapDistance(point)}`,
        alt:`${REGIONAL_MAPS.categories[point.kind]||'Skihalle'}: ${point.name}`,
        keyboard:true,baseZIndex:point.kind==='ski'?200:0,zIndexOffset:point.kind==='ski'?200:0,riseOnHover:true
      }).addTo(map);
      marker.bindTooltip(`${escapeHTML(point.name)}<br><strong>${mapDistance(point)}${point.kind==='ski'?'':` · ${mapMinutes(point)}`}</strong>`,{direction:'top',offset:[0,-18],className:'regional-tooltip'});
      marker.on('mouseover',()=>activate(point));
      marker.on('click',()=>{activate(point);marker.openTooltip();});
      markers.set(point.key,marker);
      const el=marker.getElement();
      el?.addEventListener('focus',()=>{activate(point);marker.openTooltip();});
      el?.addEventListener('blur',()=>marker.closeTooltip());
    }
    function spreadPins() {
      leaders.clearLayers();
      const occupied=[];
      const size=map.getSize();
      for(const point of data.points) {
        const marker=markers.get(point.key),at=map.latLngToContainerPoint([point.lat,point.lon]);
        let offset=L.point(0,0),found=false;
        for(let radius=0;radius<=120&&!found;radius+=36) {
          const steps=radius===0?1:Math.ceil(2*Math.PI*radius/36);
          for(let i=0;i<steps;i++) {
            const angle=-Math.PI/2+2*Math.PI*i/steps;
            const candidate=L.point(at.x+Math.cos(angle)*radius,at.y+Math.sin(angle)*radius);
            if(candidate.x<20||candidate.y<23||candidate.x>size.x-20||candidate.y>size.y-25)continue;
            if(occupied.every(other=>candidate.distanceTo(other)>=37)) {
              occupied.push(candidate);offset=candidate.subtract(at);found=true;break;
            }
          }
        }
        marker.setIcon(mapIcon(point,offset));
        const el=marker.getElement();
        // setIcon can replace the DOM icon; focus handlers must follow it.
        if(el&&!el.dataset.focusBound) {
          el.dataset.focusBound='true';
          el.addEventListener('focus',()=>{activate(point);marker.openTooltip();});
          el.addEventListener('blur',()=>marker.closeTooltip());
        }
        el?.classList.toggle('map-marker-active',selectedKey===point.key);
        marker.getTooltip().options.offset=L.point(offset.x,offset.y-18);
        if(offset.distanceTo(L.point(0,0))>1) {
          L.polyline([[point.lat,point.lon],map.containerPointToLatLng(at.add(offset))],{color:'#637a71',weight:1.1,opacity:.85,interactive:false}).addTo(leaders);
          L.circleMarker([point.lat,point.lon],{radius:2.5,color:'#163e3b',weight:1,fillColor:'#fff',fillOpacity:1,interactive:false}).addTo(leaders);
        }
      }
    }
    map.on('zoomend moveend',spreadPins);
    function showAll() {viewMode='all';resetSelection();map.fitBounds(bounds,{padding:[48,46],maxZoom:13,animate:false});spreadPins();}
    section.querySelector('[data-map-reset]').addEventListener('click',showAll);
    section.querySelector('[data-map-nearby]').addEventListener('click',()=>{
      viewMode='detail';
      map.setView([origin.lat,origin.lon],14,{animate:!reducedMotion});activate(origin);
    });
    placeRows.forEach(row=>{
      const point=data.points.find(p=>p.key===row.dataset.mapPoint);
      row.addEventListener('mouseenter',()=>activate(point));
      row.addEventListener('focus',()=>activate(point));
      row.addEventListener('click',()=>{
        viewMode='detail';
        map.setView([point.lat,point.lon],point.kind==='stadt'?13:15,{animate:!reducedMotion});
        activate(point);markers.get(point.key).openTooltip();
        const box=container.getBoundingClientRect();
        if(box.top<70||box.bottom>innerHeight)container.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'});
      });
    });
    map.on('click',resetSelection);
    showAll();
    container.dataset.mapReady='true';
    const resize=new ResizeObserver(()=>{
      map.invalidateSize({pan:false});
      if(viewMode==='all')map.fitBounds(bounds,{padding:[48,46],maxZoom:13,animate:false});
      spreadPins();
    });
    resize.observe(container);
    instances.set(container,{map,base});
  }
  // Only visible maps request background tiles; the place lists are always there.
  const observer=new IntersectionObserver(entries=>{
    entries.filter(entry=>entry.isIntersecting).forEach(entry=>{const instance=instances.get(entry.target);instance.base.addTo(instance.map);observer.unobserve(entry.target);});
  });
  containers.forEach(container=>{create(container);observer.observe(container);});
}

function mapIcon(point,offset={x:0,y:0}) {
  const prefix={coffee:'C',spa:'S',hotel:'U'}[point.kind]||'';
  return L.divIcon({className:`regional-pin kind-${point.kind}`,html:`<span>${prefix}<b>${escapeHTML(point.number)}</b></span>`,iconSize:[32,32],iconAnchor:[16-offset.x,16-offset.y]});
}

initRegionalMaps();
