"use strict";
const GREENMEISTER_NOTE = "Greenmeister, am 07.10.2026 im Browser geprüft. Bewertungen stammen von Nutzern; außer Cremers und Siberië sind die hier genannten Profile nicht vom Betreiber verifiziert. Kleine Bewertungszahlen beachten. Zugangshinweise sind keine persönliche Einlassgarantie.";
const REGIONS = {
  "zoetermeer": {
    "headline": "Ski, Spa, Stadt & Strand",
    "summary": "300-m-Piste, Elysium ganz nah und Den Haag als Ausflug. Der vielseitigste Kompromiss für euch.",
    "bestFor": "Ski, Spa und Den Haag",
    "tradeoff": "Die längste Piste ist steiler; Strand und gute Shop-Lounge brauchen eine kurze Autofahrt.",
    "address": "SnowWorld Zoetermeer, Buytenparklaan 30, Zoetermeer",
    "arrival": "Ab Löningen rund 278 km / 3 Std. 37 Min. reine Autofahrt. OSRM-Routencheck 06.10.2026; Verkehr, Pausen und Parkplatzsuche zusätzlich.",
    "coffee": {
      "status": "Touristen werden bedient",
      "tone": "good",
      "rule": "Zoetermeer setzt das Wohnsitzkriterium laut geltender Richtlinie nicht konkret durch (Beschluss vom 07.03.2014). Casa ist die lokale Option. Für den besser bewerteten Cremers könnt ihr Den Haag mit eurem Stadtbesuch verbinden. Deutsche Touristen werden dort laut Shopprofil bedient.",
      "shops": [
        {
          "name": "Casa",
          "city": "Zoetermeer",
          "address": "Amerikaweg 145, Zoetermeer",
          "time": "ca. 5–10 Min.",
          "rating": "2,7 / 5",
          "reviews": 60,
          "profile": "https://greenmeister.com/coffeeshop/casa-zoetermeer",
          "access": "Touristen laut Shopprofil zugelassen",
          "note": "Nahe Option ohne Fahrt nach Den Haag, aber deutlich schwächer bewertet als Cremers. Aktuelle Öffnungszeiten im Profil prüfen."
        },
        {
          "name": "Cremers",
          "city": "Den Haag",
          "address": "Prinsestraat 84, Den Haag",
          "rating": "4,4 / 5",
          "reviews": 85,
          "profile": "https://greenmeister.com/coffeeshop/caf-cremers-den-haag",
          "website": "https://cafecremers.nl/pages/club-cremers",
          "access": "Touristen im Shopprofil zugelassen",
          "note": "Shop täglich 09:00–01:00. Die separate Club-Lounge ist montags und dienstags geschlossen. An anderen Tagen für Gäste ohne Gold Card reservieren.",
          "time": "18,2 km · 22 Min.",
          "measured": true
        }
      ],
      "sources": [
        {
          "label": "Coffeeshopbeleid Zoetermeer",
          "url": "https://lokaleregelgeving.overheid.nl/CVDR698659/"
        },
        {
          "label": "Galaxy: Zugang für Touristen",
          "url": "https://coffeeshopgalaxy.nl/en/information"
        },
        {
          "label": "Kommunale Praxis: CCV",
          "url": "https://hetccv.nl/themas/georganiseerde-criminaliteit-en-ondermijning/drugstoerisme/ervaringen-ingezetenencriterium/"
        }
      ]
    },
    "places": [
      {
        "kind": "Spa",
        "title": "Elysium · Bleiswijk",
        "time": "ca. 20 Min. ab Halle",
        "description": "Großes Wellnessresort: ab Halle 15,2 km / ca. 19 Minuten ohne Verkehr, gemessen am 07.10.2026. Ab Bastion Hotel Zoetermeer wurden 9,2 km / 12 Minuten geprüft. Badebekleidungstage und Termin vor dem Kauf im Spa-Kalender wählen.",
        "url": "https://elysium.nl/",
        "destination": "Elysium, Bleiswijk"
      },
      {
        "kind": "Stadt",
        "title": "Den Haag",
        "time": "ca. 20–30 Min.",
        "description": "Altstadt, Binnenhof-Umgebung, Museen und Cafés. Stadtbesuch und Cremers passen in denselben Ausflug; die separate Lounge ist am Montag und Dienstag geschlossen.",
        "url": "https://denhaag.com/de",
        "destination": "Den Haag Centrum"
      },
      {
        "kind": "Spazieren",
        "title": "Buytenpark",
        "time": "Direkt an der Halle",
        "description": "Hügelige Parklandschaft für eine Runde vor oder nach dem Skifahren. Ein Spaziergang kostet keinen Eintritt.",
        "url": "https://www.buytenpark.nl/over-het-buytenpark",
        "destination": "Buytenpark, Zoetermeer"
      },
      {
        "kind": "Meer",
        "title": "Scheveningen & die Dünen",
        "time": "ca. 25–40 Min.",
        "description": "Breiter Nordseestrand für Wind, Wellen und Strandcafés. Im Oktober als Spaziergang planen. Strandparkplätze und Garagen kosten zusätzlich.",
        "url": "https://denhaag.com/de/scheveningen",
        "destination": "Scheveningen Strand"
      },
      {
        "kind": "Freizeitpark",
        "title": "Duinrell · Wassenaar",
        "time": "ca. 25–35 Min.",
        "description": "Fahrgeschäfte und optional Tikibad mit eigenem Ticket. Laut Betreiber täglich bis 08.11.2026 geöffnet. Am Dienstag 13.10. gibt es Rides by Lights bis 21 Uhr; passende Eintrittsart beachten.",
        "url": "https://www.duinrell.nl/winter-avond",
        "destination": "Duinrell, Wassenaar"
      }
    ],
    "transport": {
      "name": "HTM · Den Haag & RandstadRail",
      "price": "8,60 € p. P. / Tag",
      "description": "HTM-Tageskarte für HTM-Busse und -Bahnen; 2 Stunden 4,85 €, 3 Tage 22 €. EBS-Busse und NS-Züge sind nicht automatisch dabei. Ein EBS-Bustagesticket für Haaglanden kostet 14,50 €. Für wenige Fahrten kann OVpay günstiger sein.",
      "url": "https://www.htm.nl/reisproducten/producten-tarieven/",
      "parking": "An SnowWorld kostenlos. Den Haag und Strand: häufig gebührenpflichtig. Für die gemeinsame Fahrt nach Bleiswijk und zum Strand ist das Auto flexibel; in der Innenstadt kann sich Tram statt Parkhaus lohnen."
    },
    "plan": [
      "Ankommen und Buytenpark",
      "6 Stunden SnowWorld, danach entspannt essen",
      "Elysium und abends entspannt essen",
      "Den Haag oder Strand, dann Rückfahrt"
    ]
  },
  "landgraaf": {
    "headline": "Lange Abfahrten & das hügelige Limburg",
    "summary": "400-m-Hang, Valkenburg und Thermae 2000. Ein Coffeeshop ist in Kerkrade nah, das Meer liegt weit weg.",
    "bestFor": "Euer stärkster Skitag",
    "tradeoff": "Kostenpflichtiger Hallenparkplatz; keine Küste in der Nähe.",
    "address": "SnowWorld Landgraaf, Witte Wereld 1, Landgraaf",
    "arrival": "Ab Löningen rund 312 km / 3 Std. 19 Min. reine Autofahrt. OSRM-Routencheck 06.10.2026; Verkehr, Pausen und Parkplatzsuche zusätzlich.",
    "coffee": {
      "status": "Nah: Kerkrade",
      "tone": "good",
      "rule": "Landgraaf selbst hat keine Coffeeshops. In Kerkrade werden Nichtansässige nach den geprüften Hinweisen bedient. Down Under kennzeichnet Touristen als zugelassen. Für Heerlen und Maastricht gilt dagegen die Wohnsitzpflicht: Ein deutscher Ausweis allein reicht dort nicht.",
      "shops": [
        {
          "name": "Down Under",
          "city": "Kerkrade",
          "address": "Hammolenweg 15, Kerkrade",
          "time": "5,6 km · 9 Min.",
          "measured": true,
          "rating": "1,9 / 5",
          "reviews": 18,
          "profile": "https://greenmeister.com/coffeeshop/down-under-kerkrade",
          "website": "https://www.coffeeshopdownunder.nl/",
          "access": "Touristen laut Shopprofil zugelassen",
          "note": "Mo–Fr 16:00–23:00; Sa–So 13:00–23:00. Sehr nah, aber schwache Nutzerbewertung. Die Nähe allein ist kein Grund, dafür dieses Gebiet zu wählen."
        }
      ],
      "sources": [
        {
          "label": "Landgraaf: Null-Politik",
          "url": "https://landgraaf.bestuurlijkeinformatie.nl/Document/View/0ade9e37-0f13-447b-958f-e040e0831161"
        },
        {
          "label": "Heerlen: Zugang in Kerkrade",
          "url": "https://heerlen.bestuurlijkeinformatie.nl/Document/View/c15797aa-7b4f-4fbe-a021-a2e474e9e93b"
        },
        {
          "label": "Aktive Wohnsitzpflicht: CCV",
          "url": "https://hetccv.nl/themas/georganiseerde-criminaliteit-en-ondermijning/drugstoerisme/ervaringen-ingezetenencriterium/"
        }
      ]
    },
    "places": [
      {
        "kind": "Spa",
        "title": "Thermae 2000 · Valkenburg",
        "time": "ca. 20–30 Min.",
        "description": "Thermalbecken und Saunen am Cauberg bei Valkenburg. Ab Halle etwa 20–30 Minuten mit dem Auto. Badebekleidungs- und textilfreie Tage im Spa-Kalender beachten.",
        "url": "https://www.thermae2000.de/ueber-thermae/preise/",
        "destination": "Thermae 2000, Valkenburg"
      },
      {
        "kind": "Stadt",
        "title": "Valkenburg & das Geuldal",
        "time": "ca. 20–30 Min.",
        "description": "Historisches Zentrum mit Cafés, Burgruine, Höhlen und hügeligen Wegen entlang der Geul. Ein schöner Tagesausflug ab Landgraaf.",
        "url": "https://www.visitzuidlimburg.nl/te-doen-in-zuid-limburg/routes-in-zuid-limburg/detail/kastelen-in-het-geuldal-valkenburg-aan-de-geul/59841/",
        "destination": "Valkenburg aan de Geul"
      },
      {
        "kind": "Spazieren",
        "title": "Brunssummerheide",
        "time": "ca. 10–15 Min.",
        "description": "Heide, Wald und kleine Hügel. Der markierte rote Rundweg ist 5,6 km lang; ungefähr 1,5 Stunden entspannt gehen. Wandern ohne Eintritt.",
        "url": "https://www.natuurmonumenten.nl/natuurgebieden/brunssummerheide/route/wandelroute-brunssummerheide-over-heuvels-en-heide-rood",
        "destination": "Brunssummerheide, Toeristenweg, Landgraaf"
      },
      {
        "kind": "Freizeitpark",
        "title": "Mondo Verde",
        "time": "ca. 5–10 Min.",
        "description": "Gärten, Tiere und Fahrgeschäfte in Landgraaf. Für einen ruhigen Ausflug passend; für große Achterbahnen ist es weniger stark als Efteling. Öffnungszeiten und Eintritt beim Betreiber.",
        "url": "https://www.wereldtuinenmondoverde.nl/nl/prijzen-info/",
        "destination": "Mondo Verde, Landgraaf"
      },
      {
        "kind": "Meer",
        "title": "Keine Küste in der Nähe",
        "time": "Kein kurzer Strandabstecher",
        "description": "Limburg punktet mit Hügeln und Orten. Wenn Meer zu eurem Urlaub gehört, passen Zoetermeer, Den Haag oder Velsen besser."
      }
    ],
    "transport": {
      "name": "Arriva Limburg",
      "price": "8,70 € p. P. / Tag",
      "description": "Bus-Tageskarte außerhalb der Hauptverkehrszeit. Bus ganztags: 11,70 €. Für Bus + Bahn in Zuid-Limburg kostet die Tageskarte außerhalb der Hauptverkehrszeit 15,95 €. Gültigkeit und Startzeit je Ticket beachten.",
      "url": "https://www.arriva.nl/en/tickets-subscriptions/tickets/buy-a-day-ticket/?regio=Limburg",
      "parking": "SnowWorld: 8 € pro Auto online, vor Ort bis zu 9 €. Für einen Skitag werden die 8 € bereits beim Paarpreis eingerechnet. Stadt- und Spa-Parkplätze separat prüfen."
    },
    "plan": [
      "Ankommen, Valkenburg und Geuldal",
      "6 Stunden SnowWorld, danach entspannt essen",
      "Thermae 2000 und kurzer Spaziergang",
      "Brunssummerheide, dann Rückfahrt"
    ]
  },
  "amsterdam": {
    "headline": "Amsterdam, Haarlem & Nordsee",
    "summary": "Velsen-Zuid verbindet eine grüne Hotelbasis mit Küste, Haarlem und einem Amsterdam-Ausflug. Die Skihalle ist deutlich kleiner als eure anderen Favoriten.",
    "bestFor": "Haarlem & Küste",
    "tradeoff": "Umbau bis voraussichtlich Mitte Oktober 2026.",
    "address": "SnowWorld Amsterdam, Heuvelweg 6-8, Velsen-Zuid",
    "arrival": "Ab Löningen rund 262 km / 3 Std. 26 Min. reine Autofahrt. OSRM-Routencheck 06.10.2026; Verkehr, Pausen und Parkplatzsuche zusätzlich.",
    "coffee": {
      "status": "Option: Haarlem",
      "tone": "caution",
      "rule": "Velsen hat ein formales Wohnsitzkriterium im Coffeeshopbeleid. Für euch ist Haarlem mit Birdy die besser belegte nahe Option: Touristen laut Shopprofil zugelassen. Auch in Amsterdam werden Touristen laut aktueller Besucherinfo bedient; 18+ und Ausweis, individuelle Hausregeln beachten. Für touristischen Zugang müsst ihr also nicht zwingend Amsterdam wählen.",
      "shops": [
        {
          "name": "Birdy",
          "city": "Haarlem",
          "address": "Schoterweg 19, Haarlem",
          "time": "ca. 15–25 Min.",
          "rating": "4,5 / 5",
          "reviews": 16,
          "profile": "https://greenmeister.com/coffeeshop/birdy-haarlem",
          "website": "https://coffeeshopbirdy.com/",
          "access": "Touristen laut Shopprofil zugelassen",
          "note": "Mo–Mi und So 10:00–23:00; Do–Sa 10:00–24:00 laut Betreiber. Lounge-Option für einen Haarlem-Ausflug. Bewertung hat eine kleine Stichprobe."
        },
        {
          "name": "Siberië",
          "city": "Amsterdam",
          "address": "Brouwersgracht 11, Amsterdam",
          "time": "ca. 30–45 Min. + Stadtparken / ÖPNV",
          "rating": "4,8 / 5",
          "reviews": 39,
          "profile": "https://greenmeister.com/coffeeshop/siberie-amsterdam",
          "website": "https://thecoffeeshops.com/pages/siberie",
          "access": "Betreiber bestätigt ausländische Gäste: 18+ mit Original-Pass oder EU-Ausweis",
          "note": "Täglich 08:00–01:00 laut Betreiber. Etwa 40 Sitzplätze an der Gracht; von Centraal zu Fuß erreichbar. Bei Aufenthalt ist ein Getränk Pflicht, maximal 2,5 Stunden. Kleine Bewertungsbasis."
        }
      ],
      "sources": [
        {
          "label": "Velsen: Coffeeshopbeleid 2022",
          "url": "https://lokaleregelgeving.overheid.nl/CVDR667228/"
        },
        {
          "label": "Zugangspraxis: Branchenübersicht",
          "url": "https://coffeeshopbond.nl/publicaties/factsheet-i-criterium"
        },
        {
          "label": "Siberië: ausländische Gäste & Hausregeln",
          "url": "https://thecoffeeshops.com/pages/siberie"
        },
        {
          "label": "Ministerium: Praxis Amsterdam",
          "url": "https://www.rijksoverheid.nl/binaries/rijksoverheid/documenten/kamerstukken/2023/07/05/tk-drugstoerisme/tk-drugstoerisme.pdf"
        }
      ]
    },
    "places": [
      {
        "kind": "Stadt",
        "title": "Amsterdam · Grachten & Zentrum",
        "time": "ca. 30–45 Min.",
        "description": "Grachten, Gassen, Museen, Cafés und viel Großstadtleben. Die Routenmessung ab Halle ergibt ohne Verkehr ca. 25 Minuten; für den Stadtbesuch mehr Zeit plus Parken oder ÖPNV einplanen. Amsterdam ist ein eigener Ausflug ab Velsen.",
        "url": "https://www.iamsterdam.com/en/explore",
        "destination": "Amsterdam Centraal, Amsterdam"
      },
      {
        "kind": "Stadt",
        "title": "Haarlem",
        "time": "ca. 15–25 Min.",
        "description": "Historisches Zentrum, Grote Markt, Gassen und die Spaarne. Für euren kurzen Urlaub leichter mit Velsen zu verbinden als Amsterdam-Zentrum.",
        "url": "https://www.snowworld.com/nl/amsterdam/omgeving",
        "destination": "Grote Markt, Haarlem"
      },
      {
        "kind": "Meer",
        "title": "IJmuiden Strand",
        "time": "ca. 10–20 Min.",
        "description": "Nordsee, breiter Strand und Dünen. Ein passender Küstenausflug ab Velsen; aktuelle Strandparkgebühren vor Ort prüfen.",
        "url": "https://www.snowworld.com/nl/amsterdam/omgeving",
        "destination": "IJmuiden Strand"
      },
      {
        "kind": "Spazieren",
        "title": "Spaarnwoude",
        "time": "Direkt im Gebiet",
        "description": "Grüne Wege und Wasser rund um das Freizeitgebiet der Halle. Ihr müsst für eine kurze Runde nicht erst in die Stadt fahren.",
        "url": "https://www.snowworld.com/nl/amsterdam/omgeving",
        "destination": "Spaarnwoude, Velsen-Zuid"
      },
      {
        "kind": "Spa",
        "title": "Sauna van Egmond · Haarlem",
        "time": "ca. 10–20 Min.",
        "description": "Stadtsauna mit Pool und Themenräumen. Textilfrei, auch keine Badebekleidungstage. Kostenloses Parken in der umliegenden Wohngegend; reservieren. Betreiber-FAQ und Tarifseite nennen unterschiedliche Preise: erst bestätigen lassen.",
        "url": "https://www.saunavanegmond.nl/faq",
        "destination": "Sauna van Egmond, Haarlem"
      }
    ],
    "transport": {
      "name": "Connexxion · Haarlem–IJmond",
      "price": "15,50 € p. P. / Tag",
      "description": "Regionale Tageskarte nur auf den aufgeführten Linien, unter anderem 2–15, 71–84, 382 und 385. Keine pauschale Gültigkeit für Amsterdamer Trams oder NS. Für einen einzelnen Stadttrip kann OVpay günstiger sein.",
      "url": "https://www.connexxion.nl/en/shop/e-tickets/day-ticket-haarlem-ijmond",
      "parking": "Skihalle und beide ausgewählten Hotels: kostenlos. Für Amsterdam-Zentrum P+R Sloterdijk erwägen: 6 € / 24 h ab 10 Uhr, vorher 13 € für die ersten 24 h. ÖPNV extra; Rückfahrt aus dem definierten Zentrumgebiet und die P+R-Zahlungsbedingungen sind Voraussetzung. Keine Stellplatzreservierung.",
      "parkingUrl": "https://www.amsterdam.nl/parkeren/parkeren-reizen/plaatsen-binnen-stad/pr-sloterdijk/"
    },
    "plan": [
      "Ankommen, Haarlem oder Amsterdam-Ausflug",
      "Skifahren nach bestätigtem Umbau-Check; kürzere Piste einplanen",
      "Sauna van Egmond und ruhiger Abend",
      "IJmuiden-Strand, dann Rückfahrt"
    ]
  }
};
