"use strict";
// Echte private Hot Tubs, Gartenjacuzzis und Zimmerpools: 12.–15.10.2026, zwei Erwachsene; geprüft 07.10.2026.
const WELLNESS_OFFERS = [
  {
    "id": "meerssen",
    "region": "landgraaf",
    "name": "Mooidal · Tinyhouse in Meerssen",
    "room": "Ganzes Tinyhouse · 36 m² · 2 Personen",
    "waterType": "hot-tub",
    "private": "Privater, elektrisch beheizter Hot Tub auf der eigenen Terrasse",
    "shared": "Das Becken gehört nur zu eurem Haus; unbegrenzt nutzbar. Andere Ferienhäuser stehen im Park: kein zugesagter vollständiger Sichtschutz.",
    "price": 516.3,
    "breakfast": false,
    "parking": 0,
    "parkingText": "Parken kostenlos",
    "availability": "available",
    "status": "Für 3 Nächte verfügbar",
    "rate": "Booking.com · inklusive Steuern & Gebühren",
    "terms": "Booking nicht stornierbar. Direkt: 524,70 €; optional fertig gefüllt / warm +16,95 € je Aufenthalt = 541,65 €. Ohne Service selbst füllen und heizen.",
    "comparison": {
      "price": 524.7,
      "label": "Mooidal direkt",
      "url": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
    },
    "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
    "booking": "https://www.booking.com/hotel/nl/tinyhouse-munt-met-hottub.html?checkin=2026-10-12&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=EUR",
    "warming": 16.95,
    "warmingBase": 524.7,
    "confirmation": {
      "quote": "je eigen privé hottub op het terras",
      "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
      "language": "nl",
      "scope": "Genau die genannte Unterkunftskategorie; Ausstattung durch Betreiberbeschreibung bestätigt."
    },
    "album": "wellness-meerssen",
    "checked": "2026-10-07",
    "mapKey": "landgraaf-13"
  },
  {
    "id": "bospod",
    "region": "landgraaf",
    "name": "De Bosrand · Bospod",
    "room": "Eigene Hütte · Doppelbett · 2 Personen",
    "waterType": "hot-tub",
    "private": "Privater Holz-Hot-Tub direkt auf eurer Terrasse",
    "shared": "Becken ausschließlich für den eigenen Bospod. Holz inklusive; ihr füllt und heizt selbst, meist 3–4 Stunden. Küche und eigenes Duschbad.",
    "price": 571.15,
    "breakfast": false,
    "parking": 0,
    "parkingText": "Parkplatz ca. 30 m; im geprüften Angebot kein Parkaufschlag",
    "availability": "available",
    "status": "Für 3 Nächte verfügbar",
    "rate": "Direkt · 477 € Unterkunft + 7,95 € Buchung + 45 € Reinigung + 25 € Bettwäsche + 16,20 € Ortstaxe",
    "terms": "Hot Tub und Holz inklusive. Handtücher oder Bademäntel optional: 5 € je Zweier-Set. Mindestens 2 Nächte; Recron-Stornobedingungen.",
    "comparison": null,
    "source": "https://campingdebosrand.nl/bospods/",
    "booking": "https://campingdebosrand.nl/zoek-en-boek/",
    "confirmation": {
      "quote": "Buiten geniet u van uw privé hottub, midden in de natuur.",
      "source": "https://campingdebosrand.nl/bospods/",
      "language": "nl",
      "scope": "Genau die genannte Unterkunftskategorie; Ausstattung durch Betreiberbeschreibung bestätigt."
    },
    "album": "wellness-bospod",
    "checked": "2026-10-07",
    "mapKey": "landgraaf-12"
  },
  {
    "id": "noordwijk",
    "region": "zoetermeer",
    "regionLabel": "Zoetermeer / Den Haag · auch Velsen",
    "name": "EuroParcs Noordwijkse Duinen",
    "room": "Appartement Deluxe Jacuzzi 4 · 2 Schlafzimmer",
    "waterType": "jacuzzi",
    "private": "Eigener Jacuzzi / Whirlpool im privaten Garten",
    "shared": "Jacuzzi gehört zum eigenen Appartement. Küche und Terrasse. Der saisonale Parkpool ist gemeinschaftlich und nicht euer Privatbecken.",
    "price": 767.88,
    "breakfast": false,
    "parking": null,
    "parkingText": "Stellplatz am Appartement; separate Parkgebühr nicht bestätigt",
    "availability": "available",
    "status": "Für 3 Nächte verfügbar",
    "rate": "Direkt · 725,40 € Miete + 27 € Bettwäsche + 15,48 € Ortstaxe; Reinigung / Buchung jeweils 0 €.",
    "terms": "Über eurem 500-€-Reisebudget. Einrichtung variiert je Appartement; Buchungs-/Stornobedingungen prüfen. Optional gewünschtes Appartement auswählen: +44 €.",
    "comparison": null,
    "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen",
    "booking": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen?guest_group%5Badults%5D=2&period%5Bend_date%5D=2026-10-15&period%5Bstart_date%5D=2026-10-12",
    "alternateRegions": [
      "amsterdam"
    ],
    "confirmation": {
      "quote": "Privé jacuzzi voor ultieme ontspanning",
      "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen",
      "language": "nl",
      "scope": "Genau die genannte Unterkunftskategorie; Ausstattung durch Betreiberbeschreibung bestätigt."
    },
    "album": "wellness-noordwijk",
    "checked": "2026-10-07",
    "mapKey": "zoetermeer-13"
  },
  {
    "id": "pool",
    "region": "amsterdam",
    "name": "Van der Valk Akersloot · Poolsuite",
    "room": "Poolsuite · 60 m² · 2 Erwachsene",
    "waterType": "pool",
    "private": "Echter Privatpool im Zimmer · 1,5 × 3 m",
    "shared": "Das kleine Becken liegt direkt am Schlafbereich und ist ausschließlich für eure Suite. Zusätzlich gibt es einen gemeinsamen Hotelpool.",
    "price": null,
    "breakfast": false,
    "parking": 0,
    "parkingText": "Parken kostenlos",
    "availability": "unavailable",
    "status": "12.–15.10. direkt nicht verfügbar",
    "rate": "Kein buchbares 3-Nächte-Angebot. Allgemeiner Ab-Preis 350 € / Nacht ist kein Preis für eure Termine.",
    "terms": "Ab 18 Jahren. Rückzahlbare Kaution 250 €. Frühstück extra: 21,50 € p. P. / Tag.",
    "comparison": null,
    "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/",
    "booking": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/boeken/",
    "confirmation": {
      "quote": "in dezelfde kamer uw eigen privé zwembad (1,5 x 3 meter)",
      "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/",
      "language": "nl",
      "scope": "Genau die genannte Unterkunftskategorie; Ausstattung durch Betreiberbeschreibung bestätigt."
    },
    "album": "wellness-pool",
    "checked": "2026-10-07",
    "mapKey": "amsterdam-12"
  }
];

const AMSTERDAM_PRIVATE_OPTIONS = [
  {
    "id": "istanbul",
    "region": "amsterdam",
    "name": "Spa Nova Hoofddorp · Istanbul",
    "category": "Private Jacuzzi-Unit 5 · maximal 2 Personen",
    "type": "private-access",
    "photoLabel": "Privater Jacuzzi mit Massagejets",
    "private": "Jacuzzi mit Massagejets, Sauna, Salzraum und Lounge gehören während eurer Buchung nur euch.",
    "confirmation": {
      "quote": "Deze privé-unit in Hoofddorp is volledig voor jou en je gezelschap alleen.",
      "language": "nl",
      "source": "https://spanova.nl/unit-hoofddorp-5/"
    },
    "source": "https://spanova.nl/unit-hoofddorp-5/",
    "booking": "https://spanova.nl/reserveren/?suite=hd5&arrangement=basis",
    "nightBooking": "https://spanova.nl/reserveren/?suite=hd5&arrangement=nachtverblijf",
    "price": 99.0,
    "pricePeriod": "2 Stunden · für euch beide",
    "date": "2026-10-14",
    "start": "10:30",
    "end": "12:30",
    "availability": "available",
    "rate": "Basis · 119 € online minus 20 € Daltarief = 99 €; Buchungsübersicht geprüft.",
    "night": {
      "price": 319.0,
      "checkin": "2026-10-14",
      "checkout": "2026-10-15",
      "start": "23:15",
      "end": "10:00",
      "availability": "available"
    },
    "conditions": "Separater privater Jacuzzi-Zugang, kein Pool. Übernachtung nur 23:15–10:00, kein durchgehend nutzbares Hotelzimmer für drei Nächte. Zwei Handtuch-/Slipper-Sets optional 20 €. Bis 48 h vorher Stornierung nur gegen Guthaben.",
    "parking": null,
    "parkingText": "Parkgebühr vor Ort nicht bestätigt",
    "album": "wellness-istanbul",
    "checked": "2026-10-07",
    "hotelId": 15358076,
    "mapKey": "amsterdam-16"
  },
  {
    "id": "spanova",
    "region": "amsterdam",
    "name": "Spa Nova Hoofddorp · Milano",
    "category": "Private Wellness-Unit 2 · eigener Pool + Jacuzzi",
    "type": "private-access",
    "photoLabel": "Privater Pool + separater Jacuzzi",
    "private": "Die ganze Unit mit Pool, Jacuzzi, Sauna und Dampfkabine ist nur für euch gebucht.",
    "confirmation": {
      "quote": "Deze privé-unit in Hoofddorp is volledig voor jou en je gezelschap alleen.",
      "language": "nl",
      "source": "https://spanova.nl/unit-hoofddorp-2/"
    },
    "source": "https://spanova.nl/unit-hoofddorp-2/",
    "booking": "https://spanova.nl/reserveren/?suite=hd2&arrangement=basis",
    "nightBooking": "https://spanova.nl/reserveren/?suite=hd2&arrangement=nachtverblijf",
    "price": 149.0,
    "pricePeriod": "2 Stunden · für euch beide",
    "date": "2026-10-14",
    "start": "10:45",
    "end": "12:45",
    "availability": "available",
    "rate": "Basis · Onlinepreis zum Daltarief; 149 € in der Buchungsübersicht bestätigt.",
    "night": {
      "price": 399.0,
      "checkin": "2026-10-14",
      "checkout": "2026-10-15",
      "start": "23:15",
      "end": "10:00",
      "availability": "available"
    },
    "conditions": "Übernachtung ist ausschließlich ein Nacht-Zeitfenster von 23:15 bis 10:00, kein durchgehend nutzbares Hotelzimmer für drei Nächte. Zwei Handtuch-/Slipper-Sets optional zusammen 20 €. Bis 48 h vorher Stornierung nur gegen Guthaben, keine Rückzahlung.",
    "parking": null,
    "parkingText": "Parkgebühr vor Ort nicht bestätigt",
    "album": "wellness-spanova",
    "checked": "2026-10-07",
    "hotelId": 15358076,
    "mapKey": "amsterdam-15"
  },
  {
    "id": "landmark",
    "region": "amsterdam",
    "name": "Inntel Amsterdam Landmark",
    "category": "Spa Room · 26 m² · 2 Personen",
    "type": "whirlpool-bath",
    "photoLabel": "Runde Whirlpoolwanne im Zimmer",
    "private": "Der runde Whirlpool steht direkt im eigenen Zimmer am Fenster.",
    "confirmation": {
      "quote": "The Spa Rooms feature the iconic round whirlpool baths",
      "language": "en",
      "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites"
    },
    "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites",
    "booking": "https://reservations.inntelhotels.nl/?adult=2&arrive=2026-10-12&chain=10315&child=0&currency=EUR&depart=2026-10-15&hotel=31833&locale=en-US&room=SPA&rooms=1",
    "price": 750.25,
    "pricePeriod": "3 Nächte · Zimmer für beide",
    "availability": "available",
    "rate": "Direkt · Prepay & Save · 680 € Zimmer + 70,25 € Steuern/Gebühren = 750,25 €; Frühstück extra 20 € p. P. / Tag.",
    "conditions": "Das ist eine runde Whirlpoolwanne (Bubbelbad), kein Swimmingpool und kein Outdoor-Hot-Tub. Der Hotelpool ist gemeinschaftlich; eine private Sauna gibt es erst im Wellness Room. Vorauszahlung; Stornobedingungen im Angebot prüfen.",
    "parking": null,
    "parkingText": "Parken kostenpflichtig: Q-Park Oostenburg / wenige Hotelplätze. Endpreis nicht bestätigt.",
    "parkingSource": "https://www.inntelhotels.nl/amsterdamlandmark/en/contact-location/",
    "album": "wellness-landmark",
    "checked": "2026-10-07",
    "mapKey": "amsterdam-14"
  }
];

const WELLNESS_MAP_POINTS = {
  "amsterdam": [
    {
      "key": "amsterdam-13",
      "number": "13",
      "kind": "hotel",
      "name": "EuroParcs Noordwijkse Duinen · privater Jacuzzi",
      "destination": "Kapelleboslaan 41, Noordwijk",
      "lat": 52.286482,
      "lon": 4.489841,
      "km": 29.7,
      "minutes": 37,
      "album": "wellness-noordwijk",
      "wellnessId": "noordwijk",
      "roomNote": "12.–15.10. · 767,88 € für zwei / 3 Nächte · Stellplatz am Appartement; separate Parkgebühr nicht bestätigt",
      "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen",
      "coordinateSource": "Booking.com property 402207; 07.10.2026",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.489841,52.286482?sources=0&annotations=duration,distance"
    },
    {
      "key": "amsterdam-12",
      "number": "12",
      "kind": "hotel",
      "name": "Van der Valk Akersloot · Poolsuite · Privatpool",
      "destination": "Geesterweg 1a, Akersloot",
      "lat": 52.5476,
      "lon": 4.721288,
      "km": 16.2,
      "minutes": 15,
      "album": "wellness-pool",
      "wellnessId": "pool",
      "roomNote": "12.–15.10. · 12.–15.10. direkt nicht verfügbar · Parken kostenlos",
      "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Van+der+Valk+Hotel+Akersloot&countrycodes=nl&format=jsonv2&limit=3",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.721288,52.5476?sources=0&annotations=duration,distance"
    },
    {
      "key": "amsterdam-16",
      "number": "16",
      "kind": "spa",
      "name": "Spa Nova Hoofddorp · Istanbul",
      "destination": "Paxlaan 10, 2131 PZ Hoofddorp, Netherlands",
      "lat": 52.3089912,
      "lon": 4.681882,
      "km": 23.2,
      "minutes": 22,
      "album": "wellness-istanbul",
      "privateOptionId": "istanbul",
      "roomNote": "14.10. · 10:30 · 2 h privater Jacuzzi für zwei: 99 €; Nacht 14.–15.10.: 319 €, 23:15–10:00",
      "source": "https://spanova.nl/unit-hoofddorp-5/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Paxlaan+10%2C+2131+PZ+Hoofddorp%2C+Netherlands&format=jsonv2&limit=3&addressdetails=1",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.681882,52.3089912;4.928435,52.37344?sources=0&destinations=1;2&annotations=distance,duration"
    },
    {
      "key": "amsterdam-15",
      "number": "15",
      "kind": "spa",
      "name": "Spa Nova Hoofddorp · Milano",
      "destination": "Paxlaan 10, 2131 PZ Hoofddorp, Netherlands",
      "lat": 52.3089912,
      "lon": 4.681882,
      "km": 23.2,
      "minutes": 22,
      "album": "wellness-spanova",
      "privateOptionId": "spanova",
      "roomNote": "14.10. · 10:45 · 2 h privat für zwei: 149 €; Nacht 14.–15.10.: 399 €, 23:15–10:00",
      "source": "https://spanova.nl/unit-hoofddorp-2/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Paxlaan+10%2C+2131+PZ+Hoofddorp%2C+Netherlands&format=jsonv2&limit=3&addressdetails=1",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.681882,52.3089912;4.928435,52.37344?sources=0&destinations=1;2&annotations=distance,duration"
    },
    {
      "key": "amsterdam-14",
      "number": "14",
      "kind": "hotel",
      "name": "Inntel Amsterdam Landmark",
      "destination": "Inntel Hotels Amsterdam Landmark, VOC-kade 600, Amsterdam",
      "lat": 52.37344,
      "lon": 4.928435,
      "km": 23.4,
      "minutes": 31,
      "album": "wellness-landmark",
      "privateOptionId": "landmark",
      "roomNote": "12.–15.10. · Spa Room mit privater runder Whirlpoolwanne: 750,25 € für zwei / 3 Nächte inkl. Steuern; Parken extra; Hotelpool gemeinschaftlich",
      "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites",
      "coordinateSource": "Booking.com accommodation ID 7060204, retrieved 07.10.2026",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.6794057,52.4488675;4.681882,52.3089912;4.928435,52.37344?sources=0&destinations=1;2&annotations=distance,duration"
    }
  ],
  "zoetermeer": [
    {
      "key": "zoetermeer-13",
      "number": "13",
      "kind": "hotel",
      "name": "EuroParcs Noordwijkse Duinen · privater Jacuzzi",
      "destination": "Kapelleboslaan 41, Noordwijk",
      "lat": 52.286482,
      "lon": 4.489841,
      "km": 34.9,
      "minutes": 39,
      "album": "wellness-noordwijk",
      "wellnessId": "noordwijk",
      "roomNote": "12.–15.10. · 767,88 € für zwei / 3 Nächte · Stellplatz am Appartement; separate Parkgebühr nicht bestätigt",
      "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen",
      "coordinateSource": "Booking.com property 402207; 07.10.2026",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/4.4572086,52.0707472;4.489841,52.286482?sources=0&annotations=duration,distance"
    }
  ],
  "landgraaf": [
    {
      "key": "landgraaf-13",
      "number": "13",
      "kind": "hotel",
      "name": "Mooidal · Tinyhouse in Meerssen · privater Hot Tub",
      "destination": "Houthemerweg 95, Meerssen",
      "lat": 50.878568,
      "lon": 5.771307,
      "km": 22.6,
      "minutes": 21,
      "album": "wellness-meerssen",
      "wellnessId": "meerssen",
      "roomNote": "12.–15.10. · 516,30 € für zwei / 3 Nächte · Parken kostenlos",
      "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
      "coordinateSource": "Booking.com property 12638542; 07.10.2026",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/6.0217946,50.874815;5.771307,50.878568?sources=0&annotations=distance,duration"
    },
    {
      "key": "landgraaf-12",
      "number": "12",
      "kind": "hotel",
      "name": "De Bosrand · Bospod · privater Hot Tub",
      "destination": "Moerslag 4, Sint Geertruid",
      "lat": 50.7849252,
      "lon": 5.7477648,
      "km": 37.4,
      "minutes": 34,
      "album": "wellness-bospod",
      "wellnessId": "bospod",
      "roomNote": "12.–15.10. · 571,15 € für zwei / 3 Nächte · Parkplatz ca. 30 m; im geprüften Angebot kein Parkaufschlag",
      "source": "https://campingdebosrand.nl/bospods/",
      "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Camping+De+Bosrand+Sint+Geertruid&countrycodes=nl&format=jsonv2&limit=3",
      "routeSource": "https://router.project-osrm.org/table/v1/driving/6.0217946,50.874815;5.9548519,50.8925528;5.7477648,50.7849252?sources=0&annotations=duration,distance"
    }
  ]
};

Object.assign(MEDIA_ALBUMS, {
  "wellness-meerssen": {
    "label": "Mooidal · Tinyhouse mit privatem Hot Tub",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-meerssen-v2-1.jpg",
        "thumb": "assets/media/wellness-meerssen-v2-1-thumb.jpg",
        "width": 1200,
        "height": 750,
        "title": "Privater Hot Tub bei Tageslicht",
        "caption": "Elektrisch beheizter Hot Tub auf der eigenen Terrasse; Betreiberfoto der 2-Personen-Tinyhouse-Kategorie.",
        "credit": "Mooidal / veröffentlichte Unterkunftsaufnahmen",
        "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-meerssen-v2-2.jpg",
        "thumb": "assets/media/wellness-meerssen-v2-2-thumb.jpg",
        "width": 1024,
        "height": 640,
        "title": "Privater Hot Tub am Abend",
        "caption": "Weitere veröffentlichte Aufnahme des privaten Hot Tubs bei Mooidal, am Abend.",
        "credit": "Mooidal / veröffentlichte Unterkunftsaufnahmen",
        "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
      },
      {
        "src": "assets/media/wellness-meerssen-v2-3.jpg",
        "thumb": "assets/media/wellness-meerssen-v2-3-thumb.jpg",
        "width": 1200,
        "height": 750,
        "title": "Eigenes Tinyhouse & Terrasse",
        "caption": "Außenansicht aus der Galerie der 2-Personen-Kategorie; einzelne Häuser und Einrichtungen können variieren.",
        "credit": "Mooidal / veröffentlichte Unterkunftsaufnahmen",
        "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
      },
      {
        "src": "assets/media/wellness-meerssen-v2-4.jpg",
        "thumb": "assets/media/wellness-meerssen-v2-4-thumb.jpg",
        "width": 750,
        "height": 600,
        "title": "Schlafzimmer",
        "caption": "Schlafzimmerbeispiel aus der gebuchten 2-Personen-Tinyhouse-Kategorie.",
        "credit": "Mooidal / veröffentlichte Unterkunftsaufnahmen",
        "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
      },
      {
        "src": "assets/media/wellness-meerssen-v2-5.jpg",
        "thumb": "assets/media/wellness-meerssen-v2-5-thumb.jpg",
        "width": 750,
        "height": 600,
        "title": "Küche & Wohnbereich",
        "caption": "Eigene Küche und Wohnbereich; Betreiberaufnahme der 2-Personen-Kategorie.",
        "credit": "Mooidal / veröffentlichte Unterkunftsaufnahmen",
        "source": "https://mooidal.nl/tiny-houses/tinyhouse-2-pers-met-hottub"
      }
    ]
  },
  "wellness-noordwijk": {
    "label": "Noordwijkse Duinen · Appartement Deluxe Jacuzzi",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-noordwijk-1.jpg",
        "thumb": "assets/media/wellness-noordwijk-1-thumb.jpg",
        "width": 1381,
        "height": 1000,
        "title": "Privater Gartenjacuzzi",
        "caption": "Der eigene Jacuzzi im Garten der Appartement-Deluxe-Jacuzzi-Kategorie; Betreiberaufnahme.",
        "credit": "EuroParcs Noordwijkse Duinen",
        "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-noordwijk-2.jpg",
        "thumb": "assets/media/wellness-noordwijk-2-thumb.jpg",
        "width": 1400,
        "height": 935,
        "title": "Wohnzimmer",
        "caption": "Wohnzimmerbeispiel der Appartement-Deluxe-Jacuzzi-Kategorie. Einrichtung kann je Appartement variieren.",
        "credit": "EuroParcs Noordwijkse Duinen",
        "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen"
      },
      {
        "src": "assets/media/wellness-noordwijk-3.jpg",
        "thumb": "assets/media/wellness-noordwijk-3-thumb.jpg",
        "width": 1400,
        "height": 972,
        "title": "Schlafzimmer",
        "caption": "Schlafzimmerbeispiel aus der Betreiber-Galerie dieser Kategorie.",
        "credit": "EuroParcs Noordwijkse Duinen",
        "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen"
      },
      {
        "src": "assets/media/wellness-noordwijk-4.jpg",
        "thumb": "assets/media/wellness-noordwijk-4-thumb.jpg",
        "width": 1400,
        "height": 935,
        "title": "Eigene Terrasse",
        "caption": "Die eigene Terrasse am Appartement; die Galerie zeigt Beispiele dieser Kategorie.",
        "credit": "EuroParcs Noordwijkse Duinen",
        "source": "https://www.europarcsnoordwijkseduinen.nl/vakantiehuizen/appartement-deluxe-jacuzzi-4-personen"
      }
    ]
  },
  "wellness-pool": {
    "label": "Akersloot · Poolsuite",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-pool-1.jpg",
        "thumb": "assets/media/wellness-pool-1-thumb.jpg",
        "width": 1400,
        "height": 933,
        "title": "Privater Pool im Zimmer",
        "caption": "Das private 1,5 × 3 m große Becken der 60-m²-Poolsuite; kein gemeinsamer Hotelpool.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-pool-2.jpg",
        "thumb": "assets/media/wellness-pool-2-thumb.jpg",
        "width": 1400,
        "height": 933,
        "title": "Suite & Privatpool",
        "caption": "Zweite Ansicht der Poolsuite: Schlafbereich und eigenes Becken nebeneinander.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/"
      },
      {
        "src": "assets/media/wellness-pool-3.jpg",
        "thumb": "assets/media/wellness-pool-3-thumb.jpg",
        "width": 1400,
        "height": 933,
        "title": "Poolsuite · Schlafbereich",
        "caption": "Schlafbereich der Poolsuite; Betreiberaufnahme genau dieser Zimmerkategorie.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/"
      },
      {
        "src": "assets/media/wellness-pool-4.jpg",
        "thumb": "assets/media/wellness-pool-4-thumb.jpg",
        "width": 1400,
        "height": 933,
        "title": "Bett & Einrichtung",
        "caption": "Detail aus der Poolsuite-Galerie des Betreibers.",
        "credit": "Van der Valk Hotel Akersloot",
        "source": "https://www.hotelakersloot.nl/kamers-suites/zwembad-suite/"
      }
    ]
  },
  "wellness-bospod": {
    "label": "De Bosrand · Bospod mit privatem Hot Tub",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-bospod-1.jpg",
        "thumb": "assets/media/wellness-bospod-1-thumb.jpg",
        "width": 1400,
        "height": 788,
        "title": "Privater Holz-Hot-Tub",
        "caption": "Der private, holzbeheizte Hot Tub direkt am eigenen Bospod; Betreiberaufnahme.",
        "credit": "Camping De Bosrand",
        "source": "https://campingdebosrand.nl/bospods/",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-bospod-2.jpg",
        "thumb": "assets/media/wellness-bospod-2-thumb.jpg",
        "width": 1400,
        "height": 788,
        "title": "Bospod & eigener Hot Tub",
        "caption": "Zweite Außenansicht: Hütte und eigenes Becken auf derselben Terrasse.",
        "credit": "Camping De Bosrand",
        "source": "https://campingdebosrand.nl/bospods/"
      },
      {
        "src": "assets/media/wellness-bospod-3.jpg",
        "thumb": "assets/media/wellness-bospod-3-thumb.jpg",
        "width": 1400,
        "height": 934,
        "title": "Hot Tub · weitere Ansicht",
        "caption": "Weitere Betreiberaufnahme des Holz-Hot-Tubs auf der eigenen Terrasse.",
        "credit": "Camping De Bosrand",
        "source": "https://campingdebosrand.nl/bospods/"
      },
      {
        "src": "assets/media/wellness-bospod-4.jpg",
        "thumb": "assets/media/wellness-bospod-4-thumb.jpg",
        "width": 1400,
        "height": 934,
        "title": "Schlafbereich",
        "caption": "Doppelbett und Innenraum der Bospod-Kategorie.",
        "credit": "Camping De Bosrand",
        "source": "https://campingdebosrand.nl/bospods/"
      },
      {
        "src": "assets/media/wellness-bospod-5.jpg",
        "thumb": "assets/media/wellness-bospod-5-thumb.jpg",
        "width": 1400,
        "height": 934,
        "title": "Innenraum & Sitzecke",
        "caption": "Innenraum mit Sitzecke; Küchenzeile und eigenes Duschbad gehören ebenfalls zur Unterkunft.",
        "credit": "Camping De Bosrand",
        "source": "https://campingdebosrand.nl/bospods/"
      }
    ]
  },
  "wellness-landmark": {
    "label": "Amsterdam Landmark · Spa Room mit rundem Whirlpool",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-landmark-1.jpg",
        "thumb": "assets/media/wellness-landmark-1-thumb.jpg",
        "width": 1500,
        "height": 1001,
        "title": "Runder Whirlpool im Spa Room",
        "caption": "Die private runde Whirlpoolwanne am Fenster des Spa Room; kein Swimmingpool und kein Outdoor-Hot-Tub.",
        "credit": "Inntel Hotels Amsterdam Landmark",
        "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-landmark-2.jpg",
        "thumb": "assets/media/wellness-landmark-2-thumb.jpg",
        "width": 1500,
        "height": 1001,
        "title": "Whirlpool & Stadtblick",
        "caption": "Weitere Betreiberaufnahme des privaten runden Whirlpools in dieser Zimmerkategorie.",
        "credit": "Inntel Hotels Amsterdam Landmark",
        "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites"
      },
      {
        "src": "assets/media/wellness-landmark-3.jpg",
        "thumb": "assets/media/wellness-landmark-3-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Spa Room · Schlafbereich",
        "caption": "King-Size-Bett und Einrichtung genau der Spa-Room-Kategorie.",
        "credit": "Inntel Hotels Amsterdam Landmark",
        "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites"
      },
      {
        "src": "assets/media/wellness-landmark-4.jpg",
        "thumb": "assets/media/wellness-landmark-4-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Ausblick aus dem Spa Room",
        "caption": "Veröffentlichte Aussicht aus der Galerie des Spa Room; Etage und Blick können variieren.",
        "credit": "Inntel Hotels Amsterdam Landmark",
        "source": "https://www.inntelhotels.nl/amsterdamlandmark/en/rooms-suites"
      }
    ]
  },
  "wellness-spanova": {
    "label": "Spa Nova Hoofddorp · Milano Unit 2",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-spanova-1.jpg",
        "thumb": "assets/media/wellness-spanova-1-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Eigener Pool der Milano-Unit",
        "caption": "Der echte Pool in Milano, Unit 2. Während eurer Buchung gehört die ganze Wellness-Unit nur zu eurem eigenen Kreis.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-2/",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-spanova-2.jpg",
        "thumb": "assets/media/wellness-spanova-2-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Separater privater Jacuzzi",
        "caption": "Der Jacuzzi zusätzlich zum Pool in genau dieser Unit; Betreiberfoto.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-2/"
      },
      {
        "src": "assets/media/wellness-spanova-3.jpg",
        "thumb": "assets/media/wellness-spanova-3-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Pool & Jacuzzi gemeinsam",
        "caption": "Beide Becken in derselben privaten Milano-Wellness-Unit.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-2/"
      },
      {
        "src": "assets/media/wellness-spanova-4.jpg",
        "thumb": "assets/media/wellness-spanova-4-thumb.jpg",
        "width": 1500,
        "height": 1000,
        "title": "Eigene Sauna",
        "caption": "Sauna im exklusiv gebuchten Wellnessbereich der Milano-Unit.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-2/"
      },
      {
        "src": "assets/media/wellness-spanova-5.jpg",
        "thumb": "assets/media/wellness-spanova-5-thumb.jpg",
        "width": 1080,
        "height": 720,
        "title": "Private Lounge",
        "caption": "Lounge auf der zweiten Ebene der Milano-Unit; kein reguläres Hotelzimmer.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-2/"
      }
    ]
  },
  "wellness-istanbul": {
    "label": "Spa Nova Hoofddorp · Istanbul Unit 5",
    "note": "Veröffentlichte Bilder genau dieser Unterkunftskategorie. Die Galerie beginnt mit dem privaten Becken; einzelne Häuser und Einrichtungen können variieren.",
    "photos": [
      {
        "src": "assets/media/wellness-istanbul-1.jpg",
        "thumb": "assets/media/wellness-istanbul-1-thumb.jpg",
        "width": 1125,
        "height": 1500,
        "title": "Privater Jacuzzi mit Massagejets",
        "caption": "Der Jacuzzi mit Massagejets in der ausschließlich für zwei Personen gebuchten Istanbul-Unit; Betreiberfoto mit sichtbaren Düsen.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-5/",
        "subject": "private-basin"
      },
      {
        "src": "assets/media/wellness-istanbul-2.jpg",
        "thumb": "assets/media/wellness-istanbul-2-thumb.jpg",
        "width": 844,
        "height": 1500,
        "title": "Jacuzzi bei Abendbeleuchtung",
        "caption": "Der private Jacuzzi in derselben Istanbul-Unit, mit blauer Beleuchtung.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-5/"
      },
      {
        "src": "assets/media/wellness-istanbul-3.jpg",
        "thumb": "assets/media/wellness-istanbul-3-thumb.jpg",
        "width": 1500,
        "height": 844,
        "title": "Eigene Wellness-Unit",
        "caption": "Übersicht mit Jacuzzi und exklusivem Innenraum; Sauna und Salzraum gehören ebenfalls zur Unit.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-5/"
      },
      {
        "src": "assets/media/wellness-istanbul-4.jpg",
        "thumb": "assets/media/wellness-istanbul-4-thumb.jpg",
        "width": 1125,
        "height": 1500,
        "title": "Lounge & Jacuzzi",
        "caption": "Lounge und Jacuzzi in der Istanbul-Unit; separat gebuchter privater Zugang, kein gewöhnliches Hotelzimmer.",
        "credit": "Spa Nova · Hoofddorp",
        "source": "https://spanova.nl/unit-hoofddorp-5/"
      }
    ]
  }
});
