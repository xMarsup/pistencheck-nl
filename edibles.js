"use strict";
// Öffentlich sichtbare Karten am 07.10.2026 gelesen. Keine Live-Bestandsprüfung.
// Mg im Produktnamen ist als Menüangabe dokumentiert, kein gemessener THC-Befund.
const EDIBLES = {
  "Casa|Zoetermeer": {
    status:"Keine belastbare Edibles-Karte gefunden: Preis, THC und Angebot unbekannt.",
    menuDate:"Kein belegtes Edibles-Menü", items:[],
    note:"Das veröffentlichte Menüfoto und das Shopprofil führen in diesem Check keine Edibles auf. Das beweist nicht, dass vor Ort keine verkauft werden. Cannabis-Sorten namens Cookies sind keine essbaren Cookies.",
    sources:[{url:"https://greenmeister.com/coffeeshop/casa-zoetermeer",label:"Profil & Menüfoto"}]
  },
  "Cremers|Den Haag": {
    status:"Preisbeispiele aus einem echten Menüfoto vom 29.08.2026. Aktueller Bestand und THC pro Portion nicht bestätigt.",
    menuDate:"Menüfoto: 29.08.2026 · Preise je aufgeführter Einheit",
    items:[
      {name:"Cremers Cookie",unit:"angebotener Cookie",price:2.50,strength:"THC im Menüfoto nicht genannt"},
      {name:"Mango Jango",unit:"angebotene Einheit",price:11,strength:"THC nicht genannt"},
      {name:"Choco Chip Cookies",unit:"4 Stück · 0,15-Gram-Version",price:11.50,strength:"0,15 g im Namen; keine mg-THC-Angabe"},
      {name:"Spaceculaas",unit:"angebotene Einheit",price:13,strength:"THC im Menüfoto nicht genannt"},
      {name:"Double Trouble",unit:"angebotene Einheit",price:13,strength:"THC nicht genannt"},
      {name:"Choco Chip Cookies",unit:"4 Stück · 0,30-Gram-Version",price:14,strength:"0,30 g im Namen; keine mg-THC-Angabe"},
      {name:"Vegan / Oreo / Salted Caramel Cookies",unit:"je 4 Stück, je Sorte",price:14,strength:"THC nicht genannt"},
      {name:"Forbidden Cones",unit:"angebotene Einheit",price:15,strength:"THC nicht genannt"},
      {name:"Salted Caramel Bites",unit:"Fudge This · angebotene Einheit",price:16,strength:"THC nicht genannt"}
    ],
    note:"Das ältere Greenmeister-Menü (21.01.2024) nennt unter anderem „Cookie 40mg“, „Choco Chip 52mg“ und „Spaceculaas 180mg“. Diese Werte stehen nicht auf dem neuen Foto; aktuelle Zusammensetzung, THC-Bezug und Portionsgröße sind damit nicht bestätigt. Grammangaben nicht in THC umrechnen.",
    sources:[{url:"https://www.coffeeshopmenus.org/0-denHaag-/Cremers/Menus/290826j.jpg",label:"Original-Menüfoto, 29.08.2026"},{url:"https://greenmeister.com/coffeeshop/caf-cremers-den-haag",label:"Älteres Profilmenü"}]
  },
  "Birdy|Haarlem": {
    status:"Karte direkt vom Betreiber. Mg stehen neben „THC-oil“; kein datierter Laborbericht oder aktueller Lagerbestand belegt.",
    menuDate:"Betreiberkarte ohne sichtbares Datum · abgerufen 07.10.2026",
    items:[
      {name:"Brownie",unit:"angebotener Brownie",price:10,strength:"0,50 g Hash · THC in mg unbekannt"},
      {name:"Stroopwafel",unit:"angebotene Waffel",price:10,strength:"100 mg · THC-oil laut Karte"},
      {name:"Cookie Bites",unit:"angebotene Einheit; Stückzahl offen",price:10,strength:"50 mg · THC-oil laut Karte"},
      {name:"Chocolate",unit:"2 × 10-mg-Version",price:5,strength:"2 × 10 mg · THC-oil laut Karte"},
      {name:"Chocolate",unit:"75-mg-Version",price:10,strength:"75 mg · THC-oil laut Karte"},
      {name:"Honey",unit:"25-g-Glas · 25-mg-Version",price:12,strength:"25 mg genannt; Portion/Gesamt unklar"},
      {name:"Honey",unit:"25-g-Glas · 50-mg-Version",price:17.50,strength:"50 mg genannt; Portion/Gesamt unklar"},
      {name:"Honey",unit:"150-g-Glas · 50-mg-Version",price:80,strength:"50 mg genannt; Portion/Gesamt unklar"},
      {name:"Jelly Rocks",unit:"angebotene Einheit; Stückzahl offen",price:10,strength:"75 mg · THC-oil laut Karte"},
      {name:"Gummies",unit:"1 Stück",price:6,strength:"50 mg · THC-oil laut Karte"},
      {name:"Gummies",unit:"6 Stück als Packung",price:31,strength:"50-mg-Version · Karte ohne separate Gesamtangabe"}
    ],
    note:"Die Karte nennt mg und THC-oil, erläutert aber keinen gemessenen THC-Gehalt. Bei mehrteiligen Produkten sind mg pro Stück und Gesamtmenge nicht überall eindeutig. Vor Ort das Etikett und die Portionsgröße prüfen; aus den Symbolen auf der Karte keine THC-Menge berechnen.",
    sources:[{url:"https://coffeeshopbirdy.com/edibles",label:"Betreiber: Edibles-Karte"}]
  },
  "Siberië|Amsterdam": {
    status:"Preis- und Stärkeangaben aus einem echten Menüfoto vom 19.07.2026; Verfügbarkeit am Reisetag offen.",
    menuDate:"Menüfoto: 19.07.2026 · Preis je angebotenem Produkt",
    items:[
      {name:"Cupcakes",unit:"angebotener Cupcake",price:10,strength:"100 mg im Menünamen"},
      {name:"Conerz",unit:"angebotene Einheit",price:10,strength:"100 mg im Menünamen"},
      {name:"Lemon Drizzle Cake",unit:"angebotener Kuchen",price:10,strength:"100 mg im Menünamen"},
      {name:"Salted Caramel Fudge",unit:"angebotene Einheit",price:8.50,strength:"THC in mg nicht genannt"},
      {name:"Sativa Brownie",unit:"angebotener Brownie",price:8.50,strength:"50 mg im Menünamen"},
      {name:"Indica Brownie",unit:"angebotener Brownie",price:8,strength:"50 mg im Menünamen"},
      {name:"Vegan Brownie",unit:"angebotener Brownie",price:8,strength:"66 mg im Menünamen"}
    ],
    note:"Auf dem Original stehen 50 mg bzw. 66 mg bei den Brownies; manche automatisch erstellten Menüs lesen fälschlich 500/650 mg. Übernommen ist das Foto. Der THC-Bezug, mg pro Portion und Laboranalyse sind darin nicht separat erklärt; deshalb keine analytisch bestätigte Stärke angegeben.",
    sources:[{url:"https://www.coffeeshopmenus.org/Siberie/Menus/190726.jpg",label:"Original-Menüfoto, 19.07.2026"},{url:"https://www.coffeeshopmenus.org/Siberie/Menus/Siberie.html",label:"Archiv & Fotodatum"}]
  },
  "Down Under|Kerkrade": {
    status:"Kein belastbares Edibles-Angebot, Preis oder THC-Gehalt veröffentlicht gefunden.",
    menuDate:"Kein belegtes Edibles-Menü", items:[],
    note:"Das Profilmenü (Update 02.08.2026) zeigt Cannabis und Hash. „Wedding Cake“ und „Ice Cream Cake“ sind dort Sortennamen, keine belegten Kuchen zum Essen. Edibles-Verkauf vor Ort bleibt offen.",
    sources:[{url:"https://greenmeister.com/coffeeshop/down-under-kerkrade",label:"Shopprofil & Kategorien"}]
  }
};
