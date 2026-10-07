"use strict";
// Zusätzliche private Sprudelbäder: 12.–15.10.2026, zwei Erwachsene; geprüft 07.10.2026.
const WELLNESS_OFFERS = [
  {
    "id": "akersloot",
    "region": "amsterdam",
    "name": "Van der Valk Akersloot",
    "room": "Standaard Deluxe · 30 m²",
    "private": "Sprudelwanne im eigenen Badezimmer",
    "shared": "Hotelpool, Sauna & Fitness gemeinsam; im Tarif enthalten.",
    "price": 578.27,
    "breakfast": true,
    "parking": 0,
    "status": "Als 3=2-Angebot verfügbar",
    "rate": "3=2 direkt · 3 × Frühstück für zwei",
    "terms": "Kostenlos stornierbar bis 24 h vor Ankunft. Unter 25: 150 € rückzahlbare Kaution.",
    "comparison": null,
    "source": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/",
    "booking": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/boeken/",
    "album": "wellness-akersloot",
    "mapKey": "amsterdam-12",
    "checked": "2026-10-07"
  },
  {
    "id": "nootdorp",
    "region": "zoetermeer",
    "name": "Van der Valk Den Haag–Nootdorp",
    "room": "Luxe Twin · 36 m²",
    "private": "Sprudelwanne im eigenen Badezimmer",
    "shared": "Hotelpool, Wellness & Fitness gemeinsam.",
    "price": null,
    "breakfast": false,
    "parking": 0,
    "status": "12.–15.10. direkt nicht verfügbar",
    "rate": "Kein bestätigter Preis für diese Zimmerkategorie und alle 3 Nächte.",
    "terms": "Auch die Kingsize-Variante war für alle drei Nächte nicht verfügbar.",
    "comparison": null,
    "source": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/",
    "booking": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/boek-nu/",
    "album": "wellness-nootdorp",
    "mapKey": "zoetermeer-13",
    "checked": "2026-10-07"
  },
  {
    "id": "meerssen",
    "region": "landgraaf",
    "name": "Mooidal · Tinyhouse in Meerssen",
    "room": "Ganzes Ferienhaus · 36 m² · 1 Schlafzimmer",
    "private": "Eigener elektrisch beheizter Hot Tub auf der Terrasse",
    "shared": "Nur für euch. Weitere Ferienhäuser im Park; Küche und Terrasse gehören zum eigenen Haus.",
    "price": 516.3,
    "breakfast": false,
    "parking": 0,
    "status": "Für 3 Nächte verfügbar",
    "rate": "Booking.com · inklusive Steuern & Gebühren",
    "terms": "Booking-Tarif nicht stornierbar. Direkt optional Vorfüll-/Aufwärmservice: 16,95 €; Direktpreis mit Service 541,65 € für beide. Ohne Service füllt und heizt ihr selbst.",
    "comparison": {
      "price": 524.7,
      "label": "Direkt bei Mooidal",
      "url": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
    },
    "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
    "booking": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html?checkin=2026-10-12&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=EUR",
    "warming": 16.95,
    "warmingBase": 524.7,
    "album": "wellness-meerssen",
    "mapKey": "landgraaf-13",
    "checked": "2026-10-07"
  },
  {
    "id": "heerlen",
    "region": "landgraaf",
    "name": "Van der Valk Heerlen",
    "room": "Superior Twin · 38 m²",
    "private": "Sprudelwanne im eigenen, halb offenen Badezimmer",
    "shared": "Hotelpool & Fitness gemeinsam. Sauna-/Wellnesstarif separat prüfen.",
    "price": 687.0,
    "breakfast": true,
    "parking": 0,
    "status": "3=2-Angebot; wenige Zimmer verfügbar",
    "rate": "3=2 direkt · 3 × Frühstück für zwei",
    "terms": "Flexibler Arrangement-Tarif; die genaue Stornofrist im Angebot prüfen.",
    "comparison": null,
    "source": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/",
    "booking": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/",
    "album": "wellness-heerlen",
    "mapKey": "landgraaf-12",
    "checked": "2026-10-07"
  }
];

const WELLNESS_MAP_POINTS = {
  "amsterdam": [
    {
      "key": "amsterdam-12",
      "number": "12",
      "kind": "hotel",
      "name": "Van der Valk Akersloot · Sprudelbad",
      "destination": "Geesterweg 1a, Akersloot",
      "lat": 52.5476,
      "lon": 4.721288,
      "km": 16.2,
      "minutes": 15,
      "album": "wellness-akersloot",
      "wellnessId": "akersloot",
      "roomNote": "12.–15.10. · 578,27 € für zwei / 3 Nächte · Parken frei",
      "source": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Van+der+Valk+Hotel+Akersloot&countrycodes=nl&format=jsonv2&limit=3",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.721288,52.5476?sources=0&annotations=duration,distance"
    }
  ],
  "zoetermeer": [
    {
      "key": "zoetermeer-13",
      "number": "13",
      "kind": "hotel",
      "name": "Van der Valk Den Haag–Nootdorp · Sprudelbad",
      "destination": "Gildeweg 1, Nootdorp",
      "lat": 52.0524192,
      "lon": 4.4016109,
      "km": 10.2,
      "minutes": 13,
      "album": "wellness-nootdorp",
      "wellnessId": "nootdorp",
      "roomNote": "12.–15.10. · Zimmerkategorie direkt nicht verfügbar · Parken frei",
      "source": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Van+der+Valk+Hotel+Nootdorp&countrycodes=nl&format=jsonv2&limit=3",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.4572086,52.0707472;4.4016109,52.0524192;4.4497842,52.1592177?sources=0&annotations=duration,distance"
    }
  ],
  "landgraaf": [
    {
      "key": "landgraaf-13",
      "number": "13",
      "kind": "hotel",
      "name": "Mooidal · Tinyhouse in Meerssen · Hot Tub",
      "destination": "Houthemerweg 95, Meerssen",
      "lat": 50.878568,
      "lon": 5.771307,
      "km": 22.6,
      "minutes": 21,
      "album": "wellness-meerssen",
      "wellnessId": "meerssen",
      "roomNote": "12.–15.10. · 516,30 € für zwei / 3 Nächte · Parken frei",
      "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
      "coordinateSource": "Booking.com property 12638542; 07.10.2026",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/6.0217946,50.874815;5.771307,50.878568?sources=0&annotations=distance,duration"
    },
    {
      "key": "landgraaf-12",
      "number": "12",
      "kind": "hotel",
      "name": "Van der Valk Heerlen · Sprudelbad",
      "destination": "Terworm 10, Heerlen",
      "lat": 50.8925528,
      "lon": 5.9548519,
      "km": 9.2,
      "minutes": 11,
      "album": "wellness-heerlen",
      "wellnessId": "heerlen",
      "roomNote": "12.–15.10. · 687,00 € für zwei / 3 Nächte · Parken frei",
      "source": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Van+der+Valk+Hotel+Heerlen&countrycodes=nl&format=jsonv2&limit=3",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/6.0217946,50.874815;5.9548519,50.8925528;5.7477648,50.7849252?sources=0&annotations=duration,distance"
    }
  ]
};

Object.assign(MEDIA_ALBUMS, {
  "wellness-akersloot": {
    "label": "Akersloot · Standaard Deluxe",
    "note": "Veröffentlichte Zimmer- und Unterkunftsbeispiele. Die beschriebene Kategorie gehört zum Angebot; Einrichtung und Haus können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-akersloot-1.jpg",
        "thumb": "assets/media/wellness-akersloot-1-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Deluxe-Zimmer",
        "caption": "Betreiberaufnahme der Standaard-Deluxe-Kategorie in Akersloot.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/"
      },
      {
        "src": "assets/media/wellness-akersloot-2.jpg",
        "thumb": "assets/media/wellness-akersloot-2-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Sitzecke & Zimmer",
        "caption": "Weitere Ansicht derselben Zimmerkategorie; das eigene Sprudelbad ist auf diesem Foto nicht zu sehen.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/"
      },
      {
        "src": "assets/media/wellness-akersloot-3.jpg",
        "thumb": "assets/media/wellness-akersloot-3-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Bett & Einrichtung",
        "caption": "Detail der Einrichtung in der Standaard-Deluxe-Kategorie.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/standaard-deluxe-kamer/"
      }
    ]
  },
  "wellness-nootdorp": {
    "label": "Nootdorp · Luxe Twin",
    "note": "Veröffentlichte Zimmer- und Unterkunftsbeispiele. Die beschriebene Kategorie gehört zum Angebot; Einrichtung und Haus können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-nootdorp-1.jpg",
        "thumb": "assets/media/wellness-nootdorp-1-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Luxe-Twin-Zimmer",
        "caption": "Betreiberaufnahme der Luxe-Twin-Kategorie in Nootdorp.",
        "credit": "Van der Valk Den Haag–Nootdorp",
        "source": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/"
      },
      {
        "src": "assets/media/wellness-nootdorp-2.jpg",
        "thumb": "assets/media/wellness-nootdorp-2-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Eigenes Bad & Sprudelwanne",
        "caption": "Die private Badewanne der Luxe-Twin-Kategorie; das Bad gehört zum eigenen Zimmer.",
        "credit": "Van der Valk Den Haag–Nootdorp",
        "source": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/"
      },
      {
        "src": "assets/media/wellness-nootdorp-3.jpg",
        "thumb": "assets/media/wellness-nootdorp-3-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Bad & Dusche",
        "caption": "Weitere Betreiberaufnahme des eigenen Badezimmers.",
        "credit": "Van der Valk Den Haag–Nootdorp",
        "source": "https://www.hoteldenhaag.nl/kamers-suites/luxe-kamer-twin/"
      }
    ]
  },
  "wellness-heerlen": {
    "label": "Heerlen · Superior Twin",
    "note": "Veröffentlichte Zimmer- und Unterkunftsbeispiele. Die beschriebene Kategorie gehört zum Angebot; Einrichtung und Haus können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-heerlen-1.jpg",
        "thumb": "assets/media/wellness-heerlen-1-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Superior-Twin-Zimmer",
        "caption": "Betreiberaufnahme der Superior-Twin-Kategorie in Heerlen.",
        "credit": "Van der Valk Hotel Heerlen",
        "source": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/"
      },
      {
        "src": "assets/media/wellness-heerlen-2.jpg",
        "thumb": "assets/media/wellness-heerlen-2-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Eigenes Badezimmer",
        "caption": "Waschbecken und Dusche im eigenen Bad der Superior-Twin-Kategorie.",
        "credit": "Van der Valk Hotel Heerlen",
        "source": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/"
      },
      {
        "src": "assets/media/wellness-heerlen-3.jpg",
        "thumb": "assets/media/wellness-heerlen-3-thumb.jpg",
        "width": 1200,
        "height": 800,
        "title": "Zimmer & Sitzecke",
        "caption": "Weitere Ansicht der Superior-Twin-Kategorie mit Fernseher und Sitzecke.",
        "credit": "Van der Valk Hotel Heerlen",
        "source": "https://www.hotelheerlen.nl/kamers-suites/superior-kamer-twin/boeken/"
      }
    ]
  },
  "wellness-meerssen": {
    "label": "Mooidal · Tinyhouse mit privatem Hot Tub",
    "note": "Veröffentlichte Zimmer- und Unterkunftsbeispiele. Die beschriebene Kategorie gehört zum Angebot; Einrichtung und Haus können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-meerssen-1.jpg",
        "thumb": "assets/media/wellness-meerssen-1-thumb.jpg",
        "width": 1024,
        "height": 640,
        "title": "Privater Hot Tub",
        "caption": "Veröffentlichte Unterkunftsaufnahme des privaten Hot Tubs auf einer eigenen Terrasse bei Mooidal.",
        "credit": "Mooidal / Unterkunft auf Booking.com",
        "source": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html"
      },
      {
        "src": "assets/media/wellness-meerssen-2.jpg",
        "thumb": "assets/media/wellness-meerssen-2-thumb.jpg",
        "width": 1024,
        "height": 683,
        "title": "Schlafzimmer",
        "caption": "Veröffentlichtes Schlafzimmerbeispiel des Tinyhouses; die konkrete Einrichtung kann je Haus variieren.",
        "credit": "Mooidal / Unterkunft auf Booking.com",
        "source": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html"
      },
      {
        "src": "assets/media/wellness-meerssen-3.jpg",
        "thumb": "assets/media/wellness-meerssen-3-thumb.jpg",
        "width": 1024,
        "height": 683,
        "title": "Küche & Wohnbereich",
        "caption": "Kleine Küche und Wohnbereich der Unterkunft.",
        "credit": "Mooidal / Unterkunft auf Booking.com",
        "source": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html"
      },
      {
        "src": "assets/media/wellness-meerssen-4.jpg",
        "thumb": "assets/media/wellness-meerssen-4-thumb.jpg",
        "width": 1024,
        "height": 640,
        "title": "Anlage am Abend",
        "caption": "Die Mooidal-Anlage mit mehreren Ferienhäusern am Abend; ihr bucht ein eigenes Tinyhouse.",
        "credit": "Mooidal / Unterkunft auf Booking.com",
        "source": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html"
      }
    ]
  }
});
