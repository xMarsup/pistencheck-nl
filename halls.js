"use strict";
const PHOTO_DATA = {
  "zoetermeer": {
    "src": "assets/zoetermeer-piste.webp",
    "width": 2000,
    "height": 1500,
    "alt": "Die lange, steile Hauptpiste von SnowWorld Zoetermeer mit Skifahrern und SnowWorld-Bannern.",
    "credit": "Snowplaza",
    "source": "https://www.snowplaza.nl/skihallen/snowworld-zoetermeer/"
  },
  "landgraaf": {
    "src": "assets/landgraaf-piste.jpg",
    "width": 952,
    "height": 700,
    "alt": "Blick über die breite Hauptabfahrt von SnowWorld Landgraaf unter dem hohen Hallendach.",
    "credit": "Skiresort",
    "source": "https://www.skiresort.de/skigebiet/snowworld-landgraaf/pistenangebot/"
  },
  "amsterdam": {
    "src": "assets/amsterdam-piste.jpg",
    "width": 2000,
    "height": 1333,
    "alt": "Die zwei Pisten von SnowWorld Amsterdam in Velsen-Zuid, mit Bergpanoramen an den Hallenwänden.",
    "credit": "Visit Haarlemmermeer",
    "source": "https://visithaarlemmermeer.nl/zien-doen/actief-natuur/snowworld-amsterdam-wintersportplezier-dicht-bij-haarlemmermeer"
  }
};
const SNOWWORLD = "https://www.snowworld.com/nl/";
const VOUCHER_URL = "https://webwinkel.parool.nl/products/snowworld-ski";
const halls = [
  {
    "id": "zoetermeer",
    "name": "SnowWorld Zoetermeer",
    "region": "Zuid-Holland · Zoetermeer",
    "length": 300,
    "lengthLabel": "300 m",
    "badge": "Meine Empfehlung für euch",
    "badgeType": "",
    "areas": "4 Pisten · 2 × 140 m zusätzlich",
    "note": "Langer, steiler Hang plus zwei blaue Pisten.",
    "direct": {
      "4": 56.95,
      "6": 61.95
    },
    "gear": 18.95,
    "parking": 0,
    "parkingText": "Parken kostenlos",
    "source": "https://www.snowworld.com/nl/zoetermeer/skien-snowboarden",
    "booking": "https://shop.snowworld.com/nl",
    "pistes": [
      {
        "name": "Lange rote Piste",
        "length": 300,
        "color": "red"
      },
      {
        "name": "Blaue Piste 1",
        "length": 140,
        "color": "blue"
      },
      {
        "name": "Blaue Piste 2",
        "length": 140,
        "color": "blue"
      },
      {
        "name": "Kinderpiste",
        "length": 30,
        "color": "green"
      }
    ],
    "terrainNote": "Die lange Piste ist mit über 20° relativ steil. Die zwei blauen 140-m-Pisten geben euch weitere Möglichkeiten zum Fahren.",
    "detail": "300-m-Hang und zwei blaue 140-m-Pisten. Elysium liegt nah, Den Haag und Strand sind passende Ausflüge.",
    "warning": "Die lange Piste ist steil. Den aktuellen Betriebsstand vor dem Ticketkauf beim Betreiber ansehen.",
    "hours": "Am Vergleichstag 09:00–22:00 Uhr",
    "availability": "4-Stunden- und 8-Stunden-Pass für den 13.10. im Betreiber-Shop geprüft."
  },
  {
    "id": "landgraaf",
    "name": "SnowWorld Landgraaf",
    "region": "Zuid-Limburg · Landgraaf",
    "length": 400,
    "lengthLabel": "400 m",
    "badge": "Für einen langen Skitag",
    "badgeType": "",
    "areas": "5 Pistenbereiche · Sessellift",
    "note": "Zwei lange Varianten auf demselben Haupthang, dazu kurze Übungshänge.",
    "direct": {
      "4": 49.95,
      "6": 61.95
    },
    "gear": 18.95,
    "parking": 8,
    "parkingText": "Parken 8 € / Auto",
    "source": "https://www.snowworld.com/nl/landgraaf/skien-snowboarden",
    "booking": "https://shop.snowworld.com/nl",
    "pistes": [
      {
        "name": "Rote Variante",
        "length": 400,
        "color": "red"
      },
      {
        "name": "Blaue Variante",
        "length": 400,
        "color": "blue"
      },
      {
        "name": "Übungshang",
        "length": 60,
        "color": "green"
      },
      {
        "name": "Kurze blaue Piste",
        "length": 50,
        "color": "blue"
      },
      {
        "name": "Kinderpiste",
        "length": 20,
        "color": "green"
      }
    ],
    "terrainNote": "Die beiden 400-m-Varianten teilen dieselbe lange Abfahrt. Die Zahl bezeichnet fünf Pistenbereiche, nicht fünf unabhängige lange Pisten.",
    "detail": "400-m-Abfahrt mit roter und blauer Variante, dazu kurze Hänge und ein 6er-Sessellift. Meine stärkste Wahl für euren langen Skitag.",
    "warning": "Parken: 8 € vorab online, vor Ort bis zu 9 € pro Tag. Die Rechnung für euch beide nutzt 8 € für ein Auto.",
    "hours": "Am Vergleichstag 09:00–22:00 Uhr",
    "availability": "4-Stunden- und Tagespass für den 13.10. im Betreiber-Shop geprüft."
  },
  {
    "id": "amsterdam",
    "name": "SnowWorld Amsterdam",
    "region": "Noord-Holland · Velsen-Zuid",
    "length": 170,
    "lengthLabel": "170 m",
    "badge": "Umbau bis Mitte Oktober",
    "badgeType": "warn",
    "areas": "2 Pisten · 170 m & 70 m",
    "note": "Trotz des Namens in Velsen-Zuid. Kürzerer Haupthang, aktuell mit Bauarbeiten.",
    "direct": {
      "4": 56.95,
      "6": 61.95
    },
    "gear": 18.95,
    "parking": 0,
    "parkingText": "Parken kostenlos",
    "source": "https://www.snowworld.com/nl/amsterdam/skien-snowboarden",
    "booking": "https://shop.snowworld.com/nl",
    "pistes": [
      {
        "name": "Hauptpiste",
        "length": 170,
        "color": "blue"
      },
      {
        "name": "Anfängerpiste",
        "length": 70,
        "color": "green"
      }
    ],
    "terrainNote": "Der Betreiber nennt derzeit 170 m und 70 m. Ältere externe Angaben mit 230 m werden für diesen Vergleich nicht verwendet.",
    "detail": "Der Name ist Amsterdam, die Halle liegt in Velsen-Zuid. Für einen langen Skitag sind Landgraaf und Zoetermeer wegen der längeren Abfahrten die bessere Wahl.",
    "warning": "Umbau vom 01.04. bis voraussichtlich Mitte Oktober 2026: rechter Schlepplift außer Betrieb, auch am Förderband Einschränkungen. Eure Reise 12.–15.10. kann noch betroffen sein; Abschluss nicht bestätigt.",
    "hours": "Am Vergleichstag regulär 09:00–22:00 Uhr",
    "availability": "4-Stunden- und Tagespass für den 13.10. im Shop geprüft; der Umbau kann den Betrieb einschränken."
  }
];
