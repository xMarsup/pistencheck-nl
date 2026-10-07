"use strict";
// CBS 70072ned: Einwohner am 01.01.2026, Landfläche 2025; abgerufen 07.10.2026.
// Shopbestände: WODC-Monitor, 31.12.2024. Keine Live-Zählung geöffneter Shops.
const CITY_SOURCES = {
  statistics: "https://www.cbs.nl/nl-nl/cijfers/detail/70072ned",
  coffeeCounts: "https://www.rijksoverheid.nl/documenten/2025/10/02/tk-bijlage-1-rapport-coffeeshops-in-nederland-2024"
};
const CITY_LIFE = {
  zoetermeer: {
    population: "Zoetermeer 130.836 · Den Haag 569.468 Einwohner",
    shopping: "Stadshart: fast 200 Läden und Gastronomiebetriebe zusammen. Mehr Altstadt und Auswahl in Den Haag.",
    dining: "Über 45 Gastronomiebetriebe im Stadshart; für einen schönen Abend nach Den Haag an Grote Markt oder Plein.",
    coffeeCount: "Zoetermeer 1 · Den Haag 36",
    coffeeVerdict: "Cremers 4,4/5 (85 Bewertungen), Casa 2,7/5 (60). Den Haag ist für euch die stärkere Shop-Option.",
    tourist: "Ja in der Praxis: Casa und Cremers nennen Touristen-Zugang. 18+ und Original-Ausweis.",
    towns: [
      {
        name:"Zoetermeer", role:"Eure Basis · moderne Stadt", population:130836, landArea:34.43,
        album:"zoetermeer-city", destination:"Stadshart Zoetermeer", time:"ca. 10–15 Min.",
        character:"Große Wohnstadt mit moderner Einkaufsmitte und älterer Dorpsstraat. Praktisch zum Essen und Einkaufen; weniger historische Urlaubsatmosphäre als Haarlem oder Den Haag.",
        shopping:"Stadshart: fast 200 Läden und Gastronomiebetriebe zusammen, darunter Mode, Schuhe, Sport und Supermärkte. Dorpsstraat für kleinere Geschäfte.",
        dining:"Über 45 Gastronomiebetriebe allein im Stadshart: Cafés, Lunch, Fast Food und Restaurants. Die Zahl umfasst mehr als klassische Restaurants.",
        evening:"Stadhuisplein und Dorpsstraat für Essen und einen Bummel. Montag öffnen die Stadshart-Läden überwiegend erst um 12 Uhr; dienstags bis donnerstags meist bis 17:30 Uhr.",
        coffee:{count:1,access:"Ja, in der Praxis",note:"Ein örtlicher Shop: Casa. Touristen laut aktuellem Profil zugelassen; die Kommune setzt das Wohnsitzkriterium laut Richtlinie nicht konkret durch."},
        sources:[{url:"https://stadshart.nl/",label:"Läden, Gastronomie & Öffnung"},{url:"https://www.zoetermeerisdeplek.nl/vrijetijd/winkelen",label:"Dorpsstraat"},{url:"https://lokaleregelgeving.overheid.nl/CVDR698659/",label:"Zugangspraxis"}]
      },
      {
        name:"Den Haag", role:"Euer großer Stadt-Ausflug", population:569468, landArea:82.44,
        album:"denhaag", destination:"Binnenhof, Den Haag", time:"ca. 20–30 Min.",
        character:"Eine echte Großstadt mit historischer Mitte, Museen und Scheveningen als Strandviertel. Für Stadt plus Meer ein sehr überzeugendes Urlaubsziel.",
        shopping:"Grote Marktstraat und die Passage für große Läden; Hofkwartier und Noordeinde für Boutiquen. Viel mehr Stadtbummel als direkt in Zoetermeer.",
        dining:"Restaurants und Bars am Grote Markt, Plein und in Chinatown. Große Auswahl von unkompliziertem Essen bis zu einem besonderen Abendessen.",
        evening:"Stadtbummel, Essen und Strand kombinieren. Die Küste ist ein weiterer Weg innerhalb Den Haags; nicht alles liegt fußläufig zusammen. Stadtparken kostet zusätzlich.",
        coffee:{count:36,access:"Ja, in der Praxis",note:"Cremers ist euer bewertetes Beispiel. Der Den-Haag-Betreiber Galaxy bestätigt internationale Gäste ausdrücklich. Cremers' separate Club-Lounge ist Mo/Di geschlossen."},
        sources:[{url:"https://denhaag.com/nl/binnenstad-den-haag",label:"Innenstadt"},{url:"https://denhaag.com/nl/grote-marktstraat",label:"Einkaufen"},{url:"https://coffeeshopgalaxy.nl/en/information",label:"Touristen willkommen"}]
      }
    ]
  },
  landgraaf: {
    population:"Landgraaf 36.844 · Valkenburg 16.481 · Maastricht 126.026 Einwohner",
    shopping:"Drei lokale Einkaufsbereiche. Größerer Stadtbummel in Maastricht; hübsche kleine Mitte in Valkenburg.",
    dining:"Lokale Restaurants sind vorhanden. Für den Urlaubsabend ist Valkenburg schöner; Maastricht bietet deutlich mehr Stadtleben.",
    coffeeCount:"Landgraaf 0 · Kerkrade 2 · Maastricht 14, dort Wohnsitz nötig",
    coffeeVerdict:"Down Under 1,9/5 (18 Bewertungen). Nur dieses Beispiel bewertet; daraus folgt keine Note für alle Shops in Kerkrade.",
    tourist:"Kerkrade: Down Under nennt Touristen-Zugang. Heerlen und Maastricht verlangen Wohnsitz in den Niederlanden.",
    towns:[
      {
        name:"Landgraaf", role:"Eure Basis · mehrere kleine Ortszentren", population:36844,landArea:24.58,
        album:"landgraaf-city",destination:"Markt, Schaesberg, Landgraaf",time:"ca. 5–10 Min.",
        character:"Landgraaf besteht aus mehreren gewachsenen Ortskernen. Ihr bekommt Alltag, Einkaufsbereiche und grüne Ausflugswege, aber keine große zusammenhängende Altstadt wie in Haarlem.",
        shopping:"Op de Kamp, Schaesberg und Waubach sind die drei Einkaufsbereiche. Gut für Lebensmittel und normale Läden; für einen ausgedehnten Shoppingtag eher Maastricht.",
        dining:"Restaurants und Cafés verteilen sich über die Ortsteile und Hotels. Für vier Tage reicht das Angebot, als reiner Stadttrip wäre es für euch meine schwächste Wahl.",
        evening:"Ruhiger als die anderen Regionen. Am Donnerstag ist Markt bei Op de Kamp, 08–15 Uhr. Kommunale Parkplätze sind kostenlos; blaue Zonen beachten. SnowWorld berechnet separat Parkgebühren.",
        coffee:{count:0,access:"Kein Shop im Ort",note:"Landgraaf hat ein Nullbeleid. Die belegte Touristen-Option ist Down Under in Kerkrade: 5,6 km / rund 9 Minuten ab Halle. Kerkrade hat 2 Shops im WODC-Bestand."},
        sources:[{url:"https://www.landgraaf.nl/winkelen",label:"Läden & Markt"},{url:"https://www.landgraaf.nl/bereikbaarheid-en-parkeren",label:"Gratis Stadtparken"},{url:"https://landgraaf.bestuurlijkeinformatie.nl/Document/View/0ade9e37-0f13-447b-958f-e040e0831161",label:"Coffeeshop-Nullbeleid"}]
      },
      {
        name:"Valkenburg aan de Geul",role:"Euer gemütlicher Urlaubsabend",population:16481,landArea:36.73,
        album:"valkenburg",destination:"Valkenburg aan de Geul centrum",time:"ca. 20–30 Min.",
        character:"Kleine historische Touristenstadt mit Geul, Burg, Höhlen und vielen Terrassen. Für euch deutlich mehr Urlaubsgefühl als Landgraafs Einkaufszentren.",
        shopping:"Kompakte Mitte mit kleinen Läden. Schön zum Schlendern, aber kein Ersatz für einen großen Shoppingtag in Amsterdam oder Den Haag.",
        dining:"Für die kleine Einwohnerzahl ein lebendiger Ferienort: viele Terrassen und Restaurants im historischen Zentrum. Gut für einen gemeinsamen Abend nach der Therme.",
        evening:"Altstadt, Höhlen oder ein Spaziergang und anschließend essen. Thermae 2000 liegt am Cauberg; eure Basis-Hotels bleiben in Landgraaf, also Rückfahrt einplanen.",
        coffee:{count:0,access:"Keine örtliche Option eingeplant",note:"Kein Coffeeshop im kommunalen WODC-Bestand 2024. Nicht mit Kerkrades Zugangspraxis gleichsetzen."},
        sources:[{url:"https://www.visitzuidlimburg.nl/omgeving/plaatsen/detail/valkenburg/138/",label:"Altstadt, Gastronomie & Ausflüge"}]
      },
      {
        name:"Maastricht",role:"Euer größerer Stadt-Ausflug",population:126026,landArea:55.79,
        album:"maastricht-city",destination:"Vrijthof, Maastricht",time:"ca. 35–45 Min.",
        character:"Historische Stadt an der Maas mit schönen Plätzen und viel Stadtleben. Die wichtigste Ergänzung, wenn ihr Landgraaf wegen Ski mögt, aber auch einen richtigen Stadtbummel wollt.",
        shopping:"Innenstadt und Wyck bieten große Marken, Boutiquen und kleinere Geschäfte. Maastricht ist das stärkere Shoppingziel dieser Region.",
        dining:"Restaurants und Cafés rund um Vrijthof, Markt und in Wyck. Ein ganzer Stadt- und Restauranttag lohnt sich; er braucht mehr Anfahrt als Valkenburg.",
        evening:"Altstadt und Maas statt Meer. Kosten für Stadtparken und mögliche Eintritte zusätzlich einplanen. Die Autofahrzeit ist eine Schätzung.",
        coffee:{count:14,access:"Nein ohne niederländischen Wohnsitz",note:"Die Gemeinde setzt das Wohnsitzkriterium durch. Ein deutscher Personalausweis allein genügt nicht, auch wenn ihr als Touristen problemlos Stadt, Läden und Restaurants besuchen könnt."},
        sources:[{url:"https://www.visitmaastricht.com/en/doing/shopping/shopping-in-wyck",label:"Shopping"},{url:"https://www.visitmaastricht.com/en/doing/city-districts/city-center",label:"Essen & Stadt"},{url:"https://hetccv.nl/themas/georganiseerde-criminaliteit-en-ondermijning/drugstoerisme/ervaringen-ingezetenencriterium/",label:"Wohnsitzkriterium"}]
      }
    ]
  },
  amsterdam:{
    population:"Velsen 70.361 (Gemeinde) · Haarlem 168.898 · Amsterdam 941.927 Einwohner",
    shopping:"Amsterdam: große Ketten, Vintage und 9 Straatjes. Haarlem: kompakte Altstadt mit Gouden Straatjes.",
    dining:"Die breiteste Auswahl dieser Reisevarianten: Haarlem für einen gemütlichen Abend, Amsterdam für Großstadt und viele verschiedene Viertel.",
    coffeeCount:"Velsen 2 · Haarlem 16 · Amsterdam 167",
    coffeeVerdict:"Siberië 4,8/5 (39 Bewertungen), Birdy 4,5/5 (16). Gute Beispiele, keine pauschale Bewertung der ganzen Stadt.",
    tourist:"Amsterdam/Haarlem: Ja in der Praxis, 18+ mit Ausweis. Velsens eigene Shops haben keine belegte Zugangszusage in diesem Check.",
    towns:[
      {
        name:"Velsen / Velsen-Zuid",role:"Eure Basis · die Halle liegt hier",population:70361,landArea:45.03,
        album:"spaarnwoude",photoLabel:"Spaarnwoude · grüne Basis in der Gemeinde Velsen",destination:"SnowWorld Amsterdam, Velsen-Zuid",time:"direkt im Hallengebiet",
        character:"70.361 Einwohner meint die ganze Gemeinde, darunter IJmuiden und Velserbroek. Velsen-Zuid an der Skihalle ist keine Großstadt und gehört nicht zu Amsterdam. Die Hotels liegen im grünen Umfeld.",
        shopping:"In IJmuiden rund um Lange Nieuwstraat, Plein 1945 und Marktplein normale Ketten und Alltagsläden. Für schöne Altstadt und ausgiebiges Shopping fahrt ihr nach Haarlem oder Amsterdam.",
        dining:"Der Tourismusverband nennt über 50 Essens-Adressen im ganzen Velsen-Gebiet, einschließlich Strandlokalen und Cafés. Restaurants an Hafen und Strand; nicht alle liegen bei der Halle.",
        evening:"Gut für einen ruhigen Start, Spaarnwoude und einen Strandabend bei IJmuiden. Der eigentliche Stadturlaub findet an euren Ausflugstagen statt.",
        coffee:{count:2,access:"Zugang hier nicht bestätigt",note:"Velsens Regelwerk enthält das Wohnsitzkriterium. Daraus allein folgt keine verifizierte aktuelle Einlasspraxis. Für euren Plan nutze ich die bestätigten Optionen in Haarlem und Amsterdam."},
        sources:[{url:"https://www.ijmuiden.nl/winkelen/",label:"Lokale Läden"},{url:"https://www.ijmuiden.nl/de/essen-trinken/",label:"Über 50 Essens-Adressen"},{url:"https://lokaleregelgeving.overheid.nl/CVDR667228/",label:"Velsens Regelwerk"}]
      },
      {
        name:"Haarlem",role:"Eure nahe Altstadt",population:168898,landArea:29.21,
        album:"haarlem",destination:"Grote Markt, Haarlem",time:"ca. 15–25 Min.",
        character:"Große, aber überschaubare historische Stadt mit Grote Markt, kleinen Straßen und Spaarne. Mein Tipp für euren gemütlichen Abend in dieser Region.",
        shopping:"Grote Houtstraat für bekannte Läden, sieben Gouden Straatjes für Boutiquen und Fachgeschäfte. Viel Atmosphäre auf einer kompakten Runde.",
        dining:"Cafés und Restaurants an Grote Markt, Botermarkt und in den kleinen Altstadtstraßen. Gute Auswahl für Lunch, Abendessen und Bars ohne einen zweiten Amsterdam-Tag zu brauchen.",
        evening:"Altstadt zu Fuß, am Spaarne spazieren und essen. Weniger Großstadthektik als Amsterdam; Anfahrt und Stadtparken bleiben zusätzlich zum Hotelparkplatz.",
        coffee:{count:16,access:"Ja, in der Praxis",note:"Birdy nennt im aktuellen Profil Touristen-Zugang. Ein weiterer Haarlem-Betreiber bestätigt ausdrücklich Touristen. Birdy: 4,5/5 aus 16 Bewertungen, daher kleine Bewertungsbasis."},
        sources:[{url:"https://www.visithaarlem.com/en/local-story/blog-artikel-1/",label:"Shopping, Gastronomie & Stadt"},{url:"https://www.coffeeshophaarlem.nl/menukaart",label:"Betreiber: Touristen willkommen"},{url:"https://greenmeister.com/coffeeshop/birdy-haarlem",label:"Birdy: Bewertung & Zugang"}]
      },
      {
        name:"Amsterdam",role:"Euer großer Stadt-Ausflug",population:941927,landArea:188.12,
        album:"amsterdam-city",destination:"Amsterdam Centraal, Amsterdam",time:"ca. 30–45 Min. + Parken / ÖPNV",
        character:"Mit Abstand die größte Stadt hier. Grachten, viele Viertel, Museen und lange Stadtbummel machen Amsterdam auch ohne Ski zu einem vollwertigen Reiseziel.",
        shopping:"Kalverstraat und Nieuwendijk für Ketten; 9 Straatjes und Haarlemmerstraat für Boutiquen, Vintage und Cafés. Die größte Auswahl der drei Urlaubsregionen.",
        dining:"Viele Küchen und Preisklassen, Restaurants und Bars in mehreren Vierteln. Für euren Stadt-Ausflug passen Grachtenviertel und Jordaan; häufig voller als Haarlem.",
        evening:"Einen ganzen Tag einplanen. Grachten sind Wasser in der Stadt; der echte Nordseestrand liegt bei IJmuiden. P+R plus ÖPNV begrenzt Parkkosten nur bei erfüllten Bedingungen.",
        coffee:{count:167,access:"Ja, in der Praxis",note:"Siberië bestätigt ausländische Gäste ausdrücklich: 18+ mit Original-Pass oder EU-Ausweis. 4,8/5 aus 39 Bewertungen; ungefähr 40 Sitzplätze. Größte Auswahl, aber nicht automatisch jeder Shop gut."},
        sources:[{url:"https://www.iamsterdam.com/en/see-and-do/shopping-and-markets/shopping-areas-in-amsterdam",label:"Shoppingviertel"},{url:"https://www.iamsterdam.com/en/explore/neighbourhoods/centrum/restaurants-and-bars",label:"Restaurants & Bars"},{url:"https://thecoffeeshops.com/pages/siberie",label:"Siberië: ausländische Gäste"}]
      }
    ]
  }
};
