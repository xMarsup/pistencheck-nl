"use strict";
// Eigene Bewertung anhand eurer Wünsche; Quellenstand 07.10.2026.
const DECISIONS = {
  amsterdam: {
    title:"Velsen / Amsterdam", label:"Meine Wahl für euren Stadturlaub", album:"amsterdam-city", photoLabel:"Amsterdam · Grachten und Stadt",
    verdict:"Die stärkste Region für Stadtbummel, Restaurants, Wasser und Coffeeshop-Auswahl.",
    pros:["Zwei echte Stadtziele: Haarlem für die gemütliche Altstadt, Amsterdam für einen ganzen Großstadttag.","Nordseestrand bei IJmuiden, Spaarnwoude und eine nahe Sauna. Viel Urlaub auch ohne Skitag.","Die größte Shop-Auswahl. Ausländische Gäste sind bei Siberië ausdrücklich willkommen; Haarlem bietet eine nahe Alternative."],
    cons:["Eure Basis liegt in Velsen-Zuid. Amsterdam ist ein Ausflug mit Anfahrt, Parken oder ÖPNV.","170-m-Hauptpiste: Für 4–6 Stunden viele Wiederholungen. Umbau voraussichtlich bis Mitte Oktober; vor Buchung prüfen."],
    city:"Haarlem 15–25 Min. · Amsterdam 30–45 Min. + Parken/ÖPNV · Nordseestrand 10–20 Min.",
    nature:"Spaarnwoude direkt im Gebiet; Dünen und Nordseestrand bei IJmuiden.",
    coffee:"Birdy 4,5/5 (16 Bewertungen); Siberië 4,8/5 (39). Gute Beispiele, keine Gesamtbewertung der Stadt.",
    hotelId:15358076,
    choose:"Wenn ihr am Ende wegen Stadt, Wasser und Urlaub hinfahrt, würde ich Velsen wählen. Wenn ein richtig guter langer Skitag fest dazugehört, ist Zoetermeer der stärkere Kompromiss.",
    sources:[{url:"https://www.snowworld.com/nl/amsterdam/skien-snowboarden",label:"Piste & Umbau"},{url:"https://www.iamsterdam.com/en/explore",label:"Amsterdam"},{url:"https://thecoffeeshops.com/pages/siberie",label:"Siberië: Touristen willkommen"}]
  },
  zoetermeer: {
    title:"Zoetermeer / Den Haag", label:"Beste Mischung mit langem Skitag", album:"denhaag", photoLabel:"Den Haag · Stadt-Ausflug ab Zoetermeer",
    verdict:"Mehr Skifahren, ein kurzer Spa-Weg und eine große Stadt mit Küste.",
    pros:["300-m-Hang plus zwei blaue 140-m-Pisten: deutlich mehr Abwechslung für 4–6 Stunden als in Velsen.","Elysium in ca. 10–15 Minuten. Den Haag bietet Altstadt, viele Restaurants und Scheveningen als Strandviertel.","Kostenloses Hallenparken und günstige Hotelbasis. Den Haag bietet 36 Coffeeshops im offiziellen Bestand 2024."],
    cons:["Zoetermeer ist vor allem eine moderne Wohn- und Einkaufsstadt. Das schönere Stadtziel ist Den Haag.","Die 300-m-Piste ist steil. Für Altstadt, besseren Shop und Meer braucht ihr Ausflüge."],
    city:"Den Haag ca. 20–30 Min. · Scheveningen ca. 25–40 Min.",
    nature:"Buytenpark direkt an der Halle; Dünen und Nordsee beim Den-Haag-Ausflug.",
    coffee:"Casa 2,7/5 (60 Bewertungen), Cremers 4,4/5 (85). Beide nennen Touristen-Zugang; Cremers' Club-Lounge ist Mo/Di zu.",
    hotelId:10329,
    choose:"Nehmt Zoetermeer, wenn Ski, Spa und Stadt ungefähr gleich wichtig sind. Den Haag gehört dann fest in euren Vier-Tage-Plan.",
    sources:[{url:"https://www.snowworld.com/nl/zoetermeer/skien-snowboarden",label:"Pisten"},{url:"https://elysium.nl/",label:"Elysium"},{url:"https://denhaag.com/nl/binnenstad-den-haag",label:"Stadt & Restaurants"}]
  },
  landgraaf: {
    title:"Landgraaf / Süd-Limburg", label:"Für Ski, Hügel und kleine Orte", album:"valkenburg", photoLabel:"Valkenburg · Altstadt bei Landgraaf",
    verdict:"Der beste Skitag und schönes Umland; für euren Stadturlaub die dritte Wahl.",
    pros:["400-m-Abfahrt mit roter und blauer Variante und 6er-Sessellift: mein Favorit für langes normales Skifahren.","Valkenburg mit Altstadt, Terrassen und Höhlen; Maastricht als größerer Stadt-Ausflug an der Maas.","Heide, Hügel, Thermae 2000, Mondo Verde und GaiaZOO: Die Grenznähe nimmt der Gegend nicht ihren Reiz."],
    cons:["Landgraaf selbst hat mehrere kleine Ortskerne. Für viel Stadtleben fahrt ihr nach Valkenburg oder Maastricht.","Keine nahe Küste; begrenztere Shop-Auswahl für Touristen. Maastricht und Heerlen verlangen niederländischen Wohnsitz."],
    city:"Valkenburg ca. 20–30 Min. · Maastricht ca. 35–45 Min. (Schätzung).",
    nature:"Brunssummerheide ca. 10–15 Min.; Hügel und Geuldal rund um Valkenburg.",
    coffee:"Landgraaf 0 Shops. Kerkrade 2 im Bestand 2024; Down Under 1,9/5 (18 Bewertungen), 5,6 km / 9 Min. ab Halle.",
    hotelId:11710,
    choose:"Landgraaf lohnt sich für den längsten Skitag, Natur und gemütliche Orte. Bei euren Wünschen nach Stadt, Wasser und vielen Shops würde ich es hinter die anderen setzen.",
    sources:[{url:"https://www.snowworld.com/nl/landgraaf/skien-snowboarden",label:"Pisten"},{url:"https://www.visitzuidlimburg.nl/omgeving/plaatsen/detail/valkenburg/138/",label:"Valkenburg"},{url:"https://www.visitmaastricht.com/en/doing/city-districts/city-center",label:"Maastricht"}]
  }
};
