"use strict";

function mapPlacePhotos(id, point) {
  let album;
  if (point.album) album = MEDIA_ALBUMS[point.album];
  else if (point.kind === 'ski') album = GALLERIES[id];
  else if (point.hotelId) album = MEDIA_ALBUMS['hotel-'+point.hotelId];
  else if (point.shop) album = MEDIA_ALBUMS[MEDIA_SHOPS[point.shop+'|'+point.city]];
  else {
    const town = CITY_LIFE[id].towns.find(t=>compactTownPoint(id,t).key===point.key);
    const key = MEDIA_PLACES[point.destination] || (id==='amsterdam'&&point.kind==='natur'?'spaarnwoude':null);
    album = MEDIA_ALBUMS[town?.album || key];
  }
  return album?.photos || [];
}
function mapPlacePhoto(id, point) {
  return mapPlacePhotos(id,point)[0];
}
function mapPlaceNote(id,point) {
  if (point.roomNote) return point.roomNote;
  if (point.hotelId) {
    const hotel=TRAVEL[id].hotels.find(h=>h.id===point.hotelId);
    if(hotel)return `12.–15.10. · Zimmer für zwei: ${euro(MONDAY.hotels[hotel.id].price)} · ${hotel.parking===0?'Parken frei':'Parken '+euro(hotel.parking)}`;
  }
  if(point.shop)return point.shop==='Siberië'?'18+ · Touristen vom Betreiber bestätigt':'18+ · Touristen laut Shopprofil';
  return point.kind==='ski'?'Ausgangspunkt aller Kilometer':REGIONAL_MAPS.categories[point.kind];
}
function mapPreviewMarkup(id,point,small=false) {
  const photo=mapPlacePhoto(id,point);
  const img=photo?`<img src="${escapeHTML(small?(photo.thumb||photo.src):photo.src)}" width="${photo.width}" height="${photo.height}" alt="${escapeHTML(photo.caption)}" decoding="async">`:'';
  return `<div class="map-place-preview ${small?'map-place-preview-small':''}">${!small&&photo?`<button type="button" class="map-preview-photo" data-map-photo="${point.key}" aria-label="Fotos von ${escapeHTML(point.name)} vergrößern">${img}<span>Fotos ⤢</span></button>`:img}<div><span class="map-preview-kind">${escapeHTML(REGIONAL_MAPS.categories[point.kind]||'Skihalle')} · ${escapeHTML(point.number)}</span><strong>${escapeHTML(point.name)}</strong><p>${mapDistance(point)}${point.kind==='ski'?'':' · '+mapMinutes(point)} ab Halle</p><p class="map-preview-note">${escapeHTML(mapPlaceNote(id,point))}</p></div>${!small&&photo?`<p class="map-preview-credit">${photoCreditMarkup(photo)}</p>`:''}</div>`;
}

function initRegionalMaps() {
  const containers=[...document.querySelectorAll('[data-regional-map]')];
  if(!window.L){containers.forEach(c=>c.innerHTML='<p class="map-load-note">Karte nicht geladen. Alle Orte stehen in den Tabellen.</p>');return;}
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const instances=new Map(),dialog=document.querySelector('#map-viewer');
  const stage=document.querySelector('#map-viewer-stage'),placeList=document.querySelector('#map-viewer-places');
  const filter=document.querySelector('#map-viewer-filter'),names=document.querySelector('#map-viewer-names');
  let active=null,placeholder=null,returnFocus=null;
  document.querySelector('#map-viewer-preview').addEventListener('click',e=>{
    const button=e.target.closest('[data-map-photo]');
    if(!button||!active)return;
    const point=active.points.find(p=>p.key===button.dataset.mapPhoto);
    openPhotoViewer(mapPlacePhotos(active.id,point),0,button);
  });
  function create(container) {
    const id=container.dataset.regionalMap,points=compactPoints(id),section=container.closest('.region-visuals');
    const rows=[...document.querySelectorAll(`[data-map-for="${id}"][data-map-point]`)];
    const readout=section.querySelector('[data-map-readout]');
    container.replaceChildren();
    const map=L.map(container,{scrollWheelZoom:false,minZoom:8,maxZoom:18,zoomSnap:.5,zoomAnimation:!reducedMotion,fadeAnimation:!reducedMotion});
    const base=L.tileLayer(REGIONAL_MAPS.tileUrl,{maxZoom:19,keepBuffer:0,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'});
    const failed=new Set(),status=section.querySelector('[data-tile-status]');
    base.on('tileerror',e=>{failed.add(e.tile);status.hidden=false;});
    base.on('tileload',e=>{failed.delete(e.tile);if(!failed.size)status.hidden=true;});
    base.on('tileunload',e=>{failed.delete(e.tile);if(!failed.size)status.hidden=true;});
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');
    L.control.scale({imperial:false,position:'bottomleft',maxWidth:90}).addTo(map);
    const leaders=L.layerGroup().addTo(map),markers=new Map(),origin=points[0];
    const defaultReadout=`H · ${origin.name} — Ausgangspunkt aller Kilometer`;
    let selected=null,viewMode='all',category='all';
    const instance={id,map,base,container,section,points,markers,get selected(){return selected;}};
    const visiblePoints=()=>points.filter(p=>category==='all'||p.kind==='ski'||p.kind===category);
    function activate(point) {
      selected=point;readout.textContent=`${point.number} · ${point.name} · ${mapDistance(point)}${point.kind==='ski'?'':' · '+mapMinutes(point)}`;
      rows.forEach(row=>row.classList.toggle('map-row-active',row.dataset.mapPoint===point.key));
      for(const [key,marker]of markers){marker.getElement()?.classList.toggle('map-marker-active',key===point.key);marker.setZIndexOffset(key===point.key?600:marker.options.baseZIndex);}
      if(active===instance){document.querySelector('#map-viewer-preview').innerHTML=mapPreviewMarkup(id,point);placeList.querySelectorAll('[data-large-map-point]').forEach(b=>b.classList.toggle('is-selected',b.dataset.largeMapPoint===point.key));}
    }
    function reset() {
      selected=null;readout.textContent=defaultReadout;rows.forEach(r=>r.classList.remove('map-row-active'));
      for(const m of markers.values()){m.getElement()?.classList.remove('map-marker-active');m.setZIndexOffset(m.options.baseZIndex);m.closeTooltip();}
      if(active===instance){document.querySelector('#map-viewer-preview').innerHTML=mapPreviewMarkup(id,origin);placeList.querySelectorAll('[data-large-map-point]').forEach(b=>b.classList.remove('is-selected'));}
    }
    function preview(point) {
      const marker=markers.get(point.key),off=marker.options.displayOffset||L.point(0,0);activate(point);
      marker.getTooltip().options.offset=L.point(off.x,off.y-23);marker.openTooltip();
      const tooltip=marker.getTooltip(),el=tooltip.getElement(),box=map.getContainer().getBoundingClientRect();
      if(!el)return;
      const b=el.getBoundingClientRect();
      const dx=b.left<box.left+6?box.left+6-b.left:b.right>box.right-6?box.right-6-b.right:0;
      const dy=b.top<box.top+6?box.top+6-b.top:b.bottom>box.bottom-6?box.bottom-6-b.bottom:0;
      tooltip.options.offset=L.point(off.x+dx,off.y-23+dy);tooltip.update();
    }
    function spreadPins() {
      leaders.clearLayers();const occupied=[],displayed=[],size=map.getSize(),labelled=container.dataset.mapNames==='true';
      const overlaps=(rect,other)=>!(rect.left>other.right+4||rect.right<other.left-4||rect.top>other.bottom+4||rect.bottom<other.top-4);
      const width=42,height=42;
      for(const p of visiblePoints()) {
        const marker=markers.get(p.key),at=map.latLngToContainerPoint([p.lat,p.lon]);let offset=L.point(0,0),found=false;
        for(let radius=0;radius<=170&&!found;radius+=42){
          const steps=radius?Math.ceil(2*Math.PI*radius/42):1;
          for(let i=0;i<steps;i++){
            const a=-Math.PI/2+2*Math.PI*i/steps,c=L.point(at.x+Math.cos(a)*radius,at.y+Math.sin(a)*radius);
            const rect={left:c.x-width/2,right:c.x+width/2,top:c.y-21,bottom:c.y+height-21};
            if(rect.left<6||rect.right>size.x-6||rect.top<6||rect.bottom>size.y-6)continue;
            if(occupied.every(o=>!overlaps(rect,o))){occupied.push(rect);offset=c.subtract(at);found=true;break;}
          }
        }
        marker.options.displayOffset=offset;marker.setIcon(mapIcon(p,offset));
        const el=marker.getElement();el?.classList.toggle('map-marker-active',selected?.key===p.key);
        displayed.push({el,at:at.add(offset)});
        if(el)el.dataset.mapPoint=p.key;
        marker.getTooltip().options.offset=L.point(offset.x,offset.y-23);
        if(offset.distanceTo(L.point(0,0))>1){L.polyline([[p.lat,p.lon],map.containerPointToLatLng(at.add(offset))],{color:'#526d61',weight:1.2,opacity:.9,interactive:false}).addTo(leaders);L.circleMarker([p.lat,p.lon],{radius:2.3,color:'#163e3b',weight:1,fillColor:'#fff',fillOpacity:1,interactive:false}).addTo(leaders);}
      }
      const labelBoxes=[];
      for(const {el,at}of displayed){
        const label=el?.querySelector('.map-place-label');if(!label)continue;
        label.style.display='';label.style.left='-52px';label.style.top='42px';
        if(!labelled)continue;
        const h=label.offsetHeight,w=142;
        const positions=[[-52,46],[-52,-h-8],[46,19-h/2],[-w-8,19-h/2],[-52,66],[-52,-h-32],[46,-h-8],[-w-8,-h-8]];
        const position=positions.find(([x,y])=>{
          const rect={left:at.x-19+x,right:at.x-19+x+w,top:at.y-19+y,bottom:at.y-19+y+h};
          if(rect.left<6||rect.right>size.x-6||rect.top<6||rect.bottom>size.y-6||[...occupied,...labelBoxes].some(b=>overlaps(rect,b)))return false;
          labelBoxes.push(rect);return true;
        });
        if(position){label.style.left=position[0]+'px';label.style.top=position[1]+'px';}else label.style.display='none';
      }
    }
    function fit() {map.fitBounds(L.latLngBounds(visiblePoints().map(p=>[p.lat,p.lon])),{padding:container.dataset.mapNames==='true'?[88,82]:[46,48],maxZoom:13,animate:false});spreadPins();}
    function showAll(){viewMode='all';reset();fit();}
    function nearby(){viewMode='detail';map.setView([origin.lat,origin.lon],14,{animate:!reducedMotion});activate(origin);}
    function select(point,zoom=true){if(category!=='all'&&point.kind!=='ski'&&point.kind!==category)setCategory('all');if(zoom){viewMode='detail';map.setView([point.lat,point.lon],point.kind==='stadt'?13:15,{animate:!reducedMotion});}preview(point);}
    function setCategory(value){category=value;for(const p of points){const marker=markers.get(p.key),show=value==='all'||p.kind==='ski'||p.kind===value;if(show&&!map.hasLayer(marker))marker.addTo(map);if(!show&&map.hasLayer(marker))map.removeLayer(marker);}if(active===instance){filter.value=value;placeList.querySelectorAll('[data-large-map-point]').forEach(b=>b.hidden=value!=='all'&&b.dataset.kind!=='ski'&&b.dataset.kind!==value);}viewMode='all';reset();fit();}
    for(const p of points){
      const m=L.marker([p.lat,p.lon],{icon:mapIcon(p),title:`${p.number} · ${p.name} · ${mapDistance(p)}`,alt:`${REGIONAL_MAPS.categories[p.kind]||'Skihalle'}: ${p.name}`,keyboard:true,baseZIndex:p.kind==='ski'?200:0,zIndexOffset:p.kind==='ski'?200:0,riseOnHover:true}).addTo(map);
      m.bindTooltip(mapPreviewMarkup(id,p,true),{direction:'top',offset:[0,-23],className:'map-photo-tooltip',opacity:1});m.on('mouseover',()=>preview(p));m.on('click',()=>preview(p));markers.set(p.key,m);
    }
    container.addEventListener('focusin',e=>{const key=e.target.closest('.regional-pin')?.dataset.mapPoint,point=points.find(p=>p.key===key);if(point)preview(point);});
    container.addEventListener('focusout',e=>{const key=e.target.closest('.regional-pin')?.dataset.mapPoint;markers.get(key)?.closeTooltip();});
    map.on('zoomend moveend',spreadPins);map.on('click',reset);
    section.querySelector('[data-map-reset]').addEventListener('click',()=>{setCategory('all');showAll();});
    section.querySelector('[data-map-nearby]').addEventListener('click',nearby);
    section.querySelector('[data-map-expand]').addEventListener('click',e=>open(instance,e.currentTarget));
    rows.forEach(row=>{const p=points.find(p=>p.key===row.dataset.mapPoint);row.addEventListener('mouseenter',()=>activate(p));row.addEventListener('focus',()=>activate(p));row.addEventListener('click',()=>{select(p);const b=container.getBoundingClientRect();if(b.top<70||b.bottom>innerHeight)container.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'});});});
    Object.assign(instance,{showAll,nearby,setCategory,select,spreadPins});instances.set(container,instance);
    showAll();container.dataset.mapReady='true';
    new ResizeObserver(()=>{map.invalidateSize({pan:false});if(viewMode==='all')fit();else spreadPins();}).observe(container);
  }
  function open(instance,trigger) {
    active=instance;returnFocus=trigger;placeholder=document.createElement('div');placeholder.className='map-inline-placeholder';placeholder.style.height=instance.container.getBoundingClientRect().height+'px';instance.container.before(placeholder);
    document.querySelector('#map-viewer-title').textContent=COMPACT_LABELS[instance.id];
    filter.innerHTML='<option value="all">Alle Orte</option>'+Object.entries(REGIONAL_MAPS.categories).filter(([kind])=>instance.points.some(p=>p.kind===kind)).map(([kind,label])=>`<option value="${kind}">${escapeHTML(label)}</option>`).join('');
    filter.value='all';names.checked=innerWidth>600;instance.container.dataset.mapNames=String(names.checked);
    placeList.innerHTML=instance.points.map(p=>{const photo=mapPlacePhoto(instance.id,p);return `<button type="button" data-large-map-point="${p.key}" data-kind="${p.kind}">${photo?`<img src="${escapeHTML(photo.thumb||photo.src)}" alt="" width="38" height="32" loading="lazy">`:''}<span><b>${escapeHTML(p.number)} · ${escapeHTML(p.name)}</b><small>${mapDistance(p)}${p.kind==='ski'?'':' · '+mapMinutes(p)}</small></span></button>`;}).join('');
    placeList.querySelectorAll('[data-large-map-point]').forEach(b=>{const p=instance.points.find(p=>p.key===b.dataset.largeMapPoint);b.addEventListener('mouseenter',()=>instance.select(p,false));b.addEventListener('focus',()=>instance.select(p,false));b.addEventListener('click',()=>instance.select(p));});
    dialog.showModal();document.body.classList.add('map-viewer-open');stage.append(instance.container);instance.base.addTo(instance.map);instance.map.invalidateSize({pan:false});instance.setCategory('all');document.querySelector('#map-viewer-preview').innerHTML=mapPreviewMarkup(instance.id,instance.points[0]);document.querySelector('#map-viewer-close').focus();
  }
  document.querySelector('#map-viewer-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{if(!active)return;const current=active;current.container.dataset.mapNames='false';placeholder.replaceWith(current.container);active=null;document.body.classList.remove('map-viewer-open');current.setCategory('all');current.map.invalidateSize({pan:false});current.spreadPins();stage.replaceChildren();returnFocus?.focus({preventScroll:true});});
  document.querySelector('#map-viewer-all').addEventListener('click',()=>{active?.setCategory('all');active?.showAll();});
  document.querySelector('#map-viewer-nearby').addEventListener('click',()=>active?.nearby());
  filter.addEventListener('change',()=>active?.setCategory(filter.value));names.addEventListener('change',()=>{if(active){active.container.dataset.mapNames=String(names.checked);active.spreadPins();}});
  containers.forEach(create);
  const observer=new IntersectionObserver(entries=>entries.filter(e=>e.isIntersecting).forEach(e=>{const i=instances.get(e.target);i.base.addTo(i.map);observer.unobserve(e.target);}));containers.forEach(c=>observer.observe(c));
}
function mapIcon(point,offset={x:0,y:0}) {
  const prefix={coffee:'C',spa:'S',hotel:'U'}[point.kind]||'';
  return L.divIcon({className:`regional-pin kind-${point.kind}`,html:`<span>${prefix}<b>${escapeHTML(point.number)}</b></span><span class="map-place-label">${escapeHTML(point.name.split(' · ')[0])}</span>`,iconSize:[38,38],iconAnchor:[19-offset.x,19-offset.y]});
}
initRegionalMaps();
