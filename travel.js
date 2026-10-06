"use strict";
const TRIP_ALLOWANCES = Object.freeze({spa:140, car:130, food:160, budgetPerPerson:500});
const TRAVEL = {
  "landgraaf": {
    "province": "Limburg · Südosten",
    "context": "Bei Heerlen und Kerkrade, nahe der deutschen Grenze zu Aachen. Hügeliges Süd-Limburg; kein Meer in der Nähe.",
    "character": "Hügel, Heide & historische Orte",
    "coordinates": {
      "key": "landgraaf",
      "lat": 50.874815,
      "lon": 6.0217946
    },
    "arrival": {
      "minutes": 199,
      "km": 311.5
    },
    "photos": [
      {
        "src": "assets/regions/valkenburg.jpg",
        "width": 1280,
        "height": 960,
        "title": "Valkenburg",
        "kind": "Stadt",
        "time": "ca. 20–25 Min.",
        "caption": "Grotestraat im historischen Zentrum: Cafés, kleine Straßen und der Burgberg in der Umgebung.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Valkenburg-Grotestraat_(2).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        "taken": "2024-04-21 21:49:57"
      },
      {
        "src": "assets/regions/brunssummerheide.jpg",
        "width": 1280,
        "height": 442,
        "title": "Brunssummerheide",
        "kind": "Landschaft",
        "time": "ca. 10–15 Min.",
        "caption": "Offene Heide, sandige Wege und Wald bei Heerlen. Gut für einen ruhigen Spaziergang.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Heerlen-Brunssummerheide_(14).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        "taken": "2019-11-27 09:46:48"
      }
    ],
    "hotels": [
      {
        "id": 11710,
        "name": "Carré1749",
        "kind": "Hotel",
        "address": "Overstehofweg 14, Landgraaf",
        "price": 315.69,
        "rating": {
          "number_of_reviews": 446,
          "review_score": 7.4,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/landgoed-overste-hof.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Ehemals Landgoed Overste Hof. Nah an der Halle und im Grünen; längerer Weg nach Valkenburg als vom Stadtzentrum.",
        "skiRoute": {
          "minutes": 2,
          "km": 0.9
        },
        "spaRoute": {
          "minutes": 23,
          "km": 20.7
        },
        "spaEstimate": null
      },
      {
        "id": 11947,
        "name": "Alpine Hotel by SnowWorld",
        "kind": "Hotel",
        "address": "Witte Wereld 1, Landgraaf",
        "price": 328.95,
        "rating": null,
        "parking": 27,
        "parkingText": "9 € / Nacht · 27 € für 3 Nächte",
        "source": "https://www.booking.com/hotel/nl/sporthotel-snowworld-landgraaf.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Direkt bei SnowWorld. 27 € Hotelparkplatz für drei Nächte eingerechnet; zusätzlich konservativ 8 € Hallenparken, solange die Anrechnung ungeklärt ist.",
        "skiRoute": {
          "minutes": 0,
          "km": 0.0
        },
        "spaRoute": {
          "minutes": 21,
          "km": 20.4
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Höhle & Burg",
        "title": "Fluweelengrot & Kasteelruïne",
        "time": "ca. 20–25 Min.",
        "description": "Geführte Höhlentour unter Valkenburg und die Burgruine als weiterer Ausflug. Eintritt extra; Tourzeit beim Betreiber wählen.",
        "url": "https://www.kasteelvalkenburg.nl/ontdek-onze-locaties/fluweelengrot/",
        "destination": "Fluweelengrot Valkenburg"
      },
      {
        "kind": "Zoo",
        "title": "GaiaZOO · Kerkrade",
        "time": "ca. 10–15 Min.",
        "description": "Tierpark als Alternative zu einem weiteren Skitag. Eintritt extra; sinnvoll, wenn ihr einen halben oder ganzen Tag dafür einplant.",
        "url": "https://www.gaiazoo.nl/",
        "destination": "GaiaZOO Kerkrade"
      }
    ]
  },
  "zoetermeer": {
    "province": "Zuid-Holland · Westen",
    "context": "Zwischen Den Haag und Rotterdam. Gut für die Mischung aus langer Skipiste, Spa, Stadt und einem Tagesausflug an die Nordsee.",
    "character": "Stadt, Park & Nordseeausflug",
    "coordinates": {
      "key": "zoetermeer",
      "lat": 52.0707472,
      "lon": 4.4572086
    },
    "arrival": {
      "minutes": 217,
      "km": 278.1
    },
    "photos": [
      {
        "src": "assets/regions/den-haag.jpg",
        "width": 1280,
        "height": 847,
        "title": "Den Haag",
        "kind": "Stadt",
        "time": "ca. 20–30 Min.",
        "caption": "Hofvijver und Binnenhof in der Innenstadt. Museen und Stadtbummel als Ausflug von Zoetermeer.",
        "credit": "Txllxt TxllxT · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag_-_Lange_Vijverberg_-_View_on_Hofvijver_%26_Binnenhof_2.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "taken": "2018-08-17 16:37:34"
      },
      {
        "src": "assets/regions/buytenpark.jpg",
        "width": 1280,
        "height": 960,
        "title": "Buytenpark · Zoetermeer",
        "kind": "Landschaft",
        "time": "Direkt an der Halle",
        "caption": "Wege, Wiesen und Hügel rund um SnowWorld. Ohne weitere Autofahrt kurz ins Grüne.",
        "credit": "FaceMePLS from The Hague, The Netherlands · CC BY 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Buytenpark_Zoetermeer_(37064476225).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "taken": "2017-09-06 14:29"
      },
      {
        "src": "assets/regions/scheveningen.jpg",
        "width": 1280,
        "height": 960,
        "title": "Scheveningen",
        "kind": "Meer",
        "time": "ca. 30–40 Min.",
        "caption": "Breiter Nordseestrand und die Seebrücke. Ein eigener Küstenausflug, kein Strand direkt an der Halle.",
        "credit": "Thomas Wolf, www.foto-tw.de · CC BY-SA 3.0 de",
        "source": "https://commons.wikimedia.org/wiki/File:Pier_Scheveningen_2024.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
        "taken": "2024-04-29"
      }
    ],
    "hotels": [
      {
        "id": 10329,
        "name": "Bastion Hotel Zoetermeer",
        "kind": "Hotel",
        "address": "Zilverstraat 6, Zoetermeer",
        "price": 271.87,
        "rating": {
          "number_of_reviews": 1285,
          "review_score": 7.4,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastionzoetermeer.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Meine Basis für Zoetermeer: kostenlose Hotelparkplätze und kurze Wege zu Ski und Elysium. Frühstück beim Betreiber 18,25 € p. P. extra; nicht im Plan enthalten.",
        "skiRoute": {
          "minutes": 10,
          "km": 5.7
        },
        "spaRoute": {
          "minutes": 11,
          "km": 9.2
        },
        "spaEstimate": null
      },
      {
        "id": 10311,
        "name": "Bastion Hotel Den Haag Rijswijk",
        "kind": "Hotel",
        "address": "Polakweg 12, Rijswijk",
        "price": 264.2,
        "rating": {
          "number_of_reviews": 1845,
          "review_score": 7.5,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastionrijswijk.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Günstige Basis in Rijswijk zwischen Den Haag und Zoetermeer. Für De Uithof besonders praktisch; für SnowWorld Zoetermeer längere Anfahrt.",
        "skiRoute": {
          "minutes": 15,
          "km": 13.1
        },
        "spaRoute": {
          "minutes": 20,
          "km": 22.0
        },
        "spaEstimate": null
      },
      {
        "id": 11742,
        "name": "Bastion Hotel Rotterdam Alexander",
        "kind": "Hotel",
        "address": "Hoofdweg 40, Rotterdam",
        "price": 270.81,
        "rating": {
          "number_of_reviews": 1931,
          "review_score": 7.5,
          "stars": 4,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastion-deluxe-rotterdam-terbregseplein.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Ausweichhotel am Rand von Rotterdam. Ähnlicher Zimmerpreis, aber mehr Fahrerei zur Halle; interessant, wenn ihr auch Rotterdam sehen wollt.",
        "skiRoute": {
          "minutes": 25,
          "km": 22.2
        },
        "spaRoute": {
          "minutes": 13,
          "km": 11.4
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Museum · Regenplan",
        "title": "Mauritshuis · Den Haag",
        "time": "ca. 20–30 Min.",
        "description": "Kunstmuseum direkt am Hofvijver. Lässt sich mit dem Innenstadtbummel verbinden; Museumseintritt zusätzlich.",
        "url": "https://www.mauritshuis.nl/",
        "destination": "Mauritshuis Den Haag"
      }
    ]
  },
  "uithof": {
    "province": "Zuid-Holland · Westen",
    "context": "Im Südwesten von Den Haag. Von allen Hallen besonders praktisch für die Küste; längere Skipässe sind hier noch nicht bestätigt.",
    "character": "Küste & Großstadt",
    "coordinates": {
      "key": "uithof",
      "lat": 52.038528,
      "lon": 4.2405895
    },
    "arrival": {
      "minutes": 229,
      "km": 295.1
    },
    "photos": [
      {
        "src": "assets/regions/den-haag.jpg",
        "width": 1280,
        "height": 847,
        "title": "Den Haag",
        "kind": "Stadt",
        "time": "ca. 15–25 Min.",
        "caption": "Die Skihalle liegt im Südwesten von Den Haag; Hofvijver und Zentrum erreicht ihr mit einem kurzen Stadttrip.",
        "credit": "Txllxt TxllxT · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag_-_Lange_Vijverberg_-_View_on_Hofvijver_%26_Binnenhof_2.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "taken": "2018-08-17 16:37:34"
      },
      {
        "src": "assets/regions/scheveningen.jpg",
        "width": 1280,
        "height": 960,
        "title": "Scheveningen",
        "kind": "Meer",
        "time": "ca. 25–35 Min.",
        "caption": "Nordseestrand und Pier als Alternative zum näheren Kijkduin. Das Foto zeigt Scheveningen.",
        "credit": "Thomas Wolf, www.foto-tw.de · CC BY-SA 3.0 de",
        "source": "https://commons.wikimedia.org/wiki/File:Pier_Scheveningen_2024.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
        "taken": "2024-04-29"
      }
    ],
    "hotels": [
      {
        "id": 10311,
        "name": "Bastion Hotel Den Haag Rijswijk",
        "kind": "Hotel",
        "address": "Polakweg 12, Rijswijk",
        "price": 264.2,
        "rating": {
          "number_of_reviews": 1845,
          "review_score": 7.5,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastionrijswijk.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Günstige Basis in Rijswijk zwischen Den Haag und Zoetermeer. Für De Uithof besonders praktisch; für SnowWorld Zoetermeer längere Anfahrt.",
        "skiRoute": {
          "minutes": 13,
          "km": 10.5
        },
        "spaRoute": {
          "minutes": 3,
          "km": 2.6
        },
        "spaEstimate": null
      },
      {
        "id": 4238772,
        "name": "Hotel Hoevevoorde",
        "kind": "Hotel",
        "address": "van vredenburchweg 170, Rijswijk",
        "price": 333,
        "rating": {
          "number_of_reviews": 2161,
          "review_score": 7.3,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/hoevevoorde.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Unterkunft am Park in Rijswijk. Geeignet, wenn ihr nach dem Skitag ruhig spazieren möchtet.",
        "skiRoute": {
          "minutes": 11,
          "km": 6.0
        },
        "spaRoute": {
          "minutes": 10,
          "km": 6.7
        },
        "spaEstimate": null
      },
      {
        "id": 10967,
        "name": "PLAZA Premium Grand Winston",
        "kind": "Hotel",
        "address": "Generaal Eisenhowerplein 1, Rijswijk",
        "price": 330.34,
        "rating": {
          "number_of_reviews": 1721,
          "review_score": 7.3,
          "stars": 4,
          "stars_type": "estimated_by_accommodation"
        },
        "parking": 27,
        "parkingText": "9 € / Nacht · 27 € für 3 Nächte",
        "source": "https://www.booking.com/hotel/nl/thegrandwinstonhotel.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Hotel nahe dem Bahnhof Rijswijk. 9 € Parken pro Nacht eingerechnet; trotz Parkgebühr günstiger als manche Hotels mit Gratisparkplatz.",
        "skiRoute": {
          "minutes": 14,
          "km": 8.0
        },
        "spaRoute": {
          "minutes": 6,
          "km": 3.7
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Museum · Regenplan",
        "title": "Mauritshuis · Den Haag",
        "time": "ca. 15–25 Min.",
        "description": "Kunstmuseum am Hofvijver als Ausflug bei Regen. Innenstadt und Museum an einem Tag verbinden; Eintritt zusätzlich.",
        "url": "https://www.mauritshuis.nl/",
        "destination": "Mauritshuis Den Haag"
      }
    ]
  },
  "amsterdam": {
    "province": "Noord-Holland · Nordwesten",
    "context": "Velsen-Zuid im Erholungsgebiet Spaarnwoude, bei Haarlem und IJmuiden. Der Name „Amsterdam“ bezeichnet nicht die Lage im Stadtzentrum.",
    "character": "Dünen, Meer & Haarlem",
    "coordinates": {
      "key": "amsterdam",
      "lat": 52.4488675,
      "lon": 4.6794057
    },
    "arrival": {
      "minutes": 206,
      "km": 262.4
    },
    "photos": [
      {
        "src": "assets/regions/haarlem.jpg",
        "width": 1280,
        "height": 960,
        "title": "Haarlem",
        "kind": "Stadt",
        "time": "ca. 15–25 Min.",
        "caption": "Grote Markt, Grote Kerk und Altstadtgassen. SnowWorld liegt in Velsen-Zuid, nicht in Amsterdam-Zentrum.",
        "credit": "Fryslan0109 at English Wikipedia · Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Grote_Markt,_Haarlem.jpg",
        "licenseUrl": null,
        "taken": "2 December 2007 (original upload date)"
      },
      {
        "src": "assets/regions/ijmuiden.jpg",
        "width": 1280,
        "height": 960,
        "title": "IJmuiden",
        "kind": "Meer & Dünen",
        "time": "ca. 15–25 Min.",
        "caption": "Nordseestrand und Dünen für einen Spaziergang. Spaarnwoude liegt als grüne Umgebung direkt beim Skigebiet.",
        "credit": "Quahadi Añtó 07:27, 4 June 2020 (UTC) · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:IJmuiden_strand_091302.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "taken": "2020-05-20 09:13:03"
      }
    ],
    "hotels": [
      {
        "id": 15358076,
        "name": "Spaarnwoude Park Hotel",
        "kind": "Hotel",
        "address": "Het Hoge Land 9, Velsen-Zuid",
        "price": 316.44,
        "rating": {
          "number_of_reviews": 158,
          "review_score": 8.4,
          "stars": 4,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/spaarnwoude-park.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Nahe an SnowWorld und der grünen Umgebung von Spaarnwoude. Hotel-Wellness oder Frühstück nur nutzen, wenn euer gebuchter Tarif sie einschließt.",
        "skiRoute": {
          "minutes": 5,
          "km": 3.4
        },
        "spaRoute": {
          "minutes": 15,
          "km": 12.0
        },
        "spaEstimate": null
      },
      {
        "id": 10576,
        "name": "Fletcher Hotel - Resort Spaarnwoude",
        "kind": "Hotel",
        "address": "Oostbroekerweg 17, Velsen-Zuid",
        "price": 350,
        "rating": {
          "number_of_reviews": 812,
          "review_score": 7.5,
          "stars": 4,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/fletcher-spaarnwoude.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Hotel im Erholungsgebiet Spaarnwoude. Nähe zur Natur und zur Halle; Schwimmbad und Wellness nicht pauschal als kostenlos vorausgesetzt.",
        "skiRoute": {
          "minutes": 5,
          "km": 3.2
        },
        "spaRoute": {
          "minutes": 12,
          "km": 8.8
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Museum · Regenplan",
        "title": "Teylers Museum · Haarlem",
        "time": "ca. 15–25 Min.",
        "description": "Kunst- und Wissenschaftsmuseum am Spaarne. Mit der Haarlemer Altstadt kombinieren; Eintritt zusätzlich.",
        "url": "https://teylersmuseum.nl/en",
        "destination": "Teylers Museum Haarlem"
      }
    ]
  },
  "rucphen": {
    "province": "Noord-Brabant · Südwesten",
    "context": "Zwischen Breda und Roosendaal, nördlich der belgischen Grenze. Waldspaziergänge und Breda stehen im Vordergrund; Meer ist weiter entfernt.",
    "character": "Wald & Brabanter Altstadt",
    "coordinates": {
      "key": "rucphen",
      "lat": 51.5387705,
      "lon": 4.5718048
    },
    "arrival": {
      "minutes": 240,
      "km": 308.2
    },
    "photos": [
      {
        "src": "assets/regions/breda.jpg",
        "width": 1280,
        "height": 1024,
        "title": "Breda",
        "kind": "Stadt",
        "time": "ca. 20–30 Min.",
        "caption": "Sint Janstraat mit Blick Richtung Grote Markt: Altstadt, Cafés und Terrassen.",
        "credit": "Renée Kools · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Breda_Sint_Janstraat_zicht_op_de_Grote_Markt_2024-09-20.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
        "taken": "2024-09-20 13:28:26"
      },
      {
        "src": "assets/regions/mastbos.jpg",
        "width": 480,
        "height": 360,
        "title": "Mastbos · Breda",
        "kind": "Landschaft",
        "time": "ca. 25–35 Min.",
        "caption": "Wald und kleine Gewässer südlich von Breda. Dieses Archivfoto entstand im Winter; Rucphense Bossen liegt näher an der Halle.",
        "credit": "Davpronk at English Wikipedia · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mastbos_forest,_Holland_-_3.jpg",
        "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
        "taken": "20 January 2006 (original upload date)"
      }
    ],
    "hotels": [
      {
        "id": 10321,
        "name": "Bastion Hotel Roosendaal",
        "kind": "Hotel",
        "address": "Bovendonk 23, Roosendaal",
        "price": 266.48,
        "rating": {
          "number_of_reviews": 1259,
          "review_score": 7.8,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastionroosendaal.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Preiswerte Basis in Roosendaal, westlich von Rucphen. Für Spa One ist die Anfahrt länger als ab einem Hotel in Breda.",
        "skiRoute": {
          "minutes": 15,
          "km": 12.5
        },
        "spaRoute": {
          "minutes": 31,
          "km": 32.5
        },
        "spaEstimate": null
      },
      {
        "id": 10309,
        "name": "Bastion Hotel Breda",
        "kind": "Hotel",
        "address": "Lage Mosten 4, Breda",
        "price": 295.7,
        "rating": {
          "number_of_reviews": 1302,
          "review_score": 7.3,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/bastionbreda.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Basis in Breda für Stadtbesuch und Spa One. Der Weg zur Skihalle ist etwas länger als von Roosendaal.",
        "skiRoute": {
          "minutes": 18,
          "km": 16.7
        },
        "spaRoute": {
          "minutes": 13,
          "km": 9.2
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Spaziergang · kostenlos",
        "title": "Mastbos · Breda",
        "time": "ca. 25–35 Min.",
        "description": "Wald, alte Bäume und Gewässer südlich von Breda. Eine ausgeschilderte Naturroute führt rund 5,5 km durch das Gebiet; Spaziergang ohne Eintritt.",
        "url": "https://www.visitbrabant.com/nl/routeoverzicht/2844619346/top-natuur-wandelroute-mastbos",
        "destination": "Mastbos Breda"
      }
    ]
  },
  "terneuzen": {
    "province": "Zeeland · Südwesten",
    "context": "In Zeeuws-Vlaanderen südlich der Westerschelde. Belgien liegt nah; Middelburg und Goes erreicht ihr durch den Westerscheldetunnel.",
    "character": "Wasser, Deiche & weite Küste",
    "coordinates": {
      "key": "terneuzen",
      "lat": 51.2963567,
      "lon": 3.8504155
    },
    "arrival": {
      "minutes": 287,
      "km": 427.1
    },
    "photos": [
      {
        "src": "assets/regions/terneuzen.jpg",
        "width": 1280,
        "height": 960,
        "title": "Terneuzen",
        "kind": "Stadt am Wasser",
        "time": "ca. 10–15 Min.",
        "caption": "Deich und Ufer an der Westerschelde mit Blick auf die Schifffahrt. Das ist die Flussmündung, kein offener Nordseestrand.",
        "credit": "Michiel1972 · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Terneuzen_Westerschelde.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "taken": ""
      },
      {
        "src": "assets/regions/breskens.jpg",
        "width": 1280,
        "height": 720,
        "title": "Breskens",
        "kind": "Meer",
        "time": "ca. 30–40 Min.",
        "caption": "Strand an der Mündung zur Nordsee für Wind, Weite und einen längeren Spaziergang.",
        "credit": "E v Schoonhoven · CC BY 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Strand_van_Breskens_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
        "taken": "Taken on 18 June 2011"
      }
    ],
    "hotels": [
      {
        "id": 11456,
        "name": "Hotel Middelburg",
        "kind": "Hotel",
        "address": "Bosschaartsweg 2, Middelburg",
        "price": 412,
        "rating": {
          "number_of_reviews": 2006,
          "review_score": 8,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/middelburg.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "In Middelburg statt Terneuzen: günstigere Gesamtkombination und schöne Stadt, dafür längerer Skiweg durch den Tunnel. Nur 2,10 € p. P. Puffer vor möglichen zusätzlichen Pflichtgebühren.",
        "skiRoute": {
          "minutes": 29,
          "km": 34.3
        },
        "spaRoute": null,
        "spaEstimate": "ca. 20–30 Min. · Schätzung"
      },
      {
        "id": 14274728,
        "name": "Sweet Dreams",
        "kind": "Bed & Breakfast",
        "address": "Jazzroute 111, Middelburg",
        "price": 390,
        "rating": {
          "number_of_reviews": 60,
          "review_score": 8.8,
          "stars": 3,
          "stars_type": "estimated_by_booking"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/sweetdream.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Bed & Breakfast in Middelburg, kein klassisches Hotel. Eigenes Bad und Küche laut Unterkunftsseite; gute Alternative für ein knappes Essensbudget.",
        "skiRoute": {
          "minutes": 30,
          "km": 36.2
        },
        "spaRoute": null,
        "spaEstimate": "ca. 20–30 Min. · Schätzung"
      }
    ],
    "activities": [
      {
        "kind": "Hafen & Technik",
        "title": "Portaal van Vlaanderen",
        "time": "ca. 10–15 Min.",
        "description": "Schleusenkomplex und Schifffahrt aus der Nähe erleben. Führungen beziehungsweise Rundfahrten vorab prüfen; kostenpflichtige Angebote zusätzlich.",
        "url": "https://www.portaalvanvlaanderen.nl/individuele-activiteiten/",
        "destination": "Portaal van Vlaanderen Terneuzen"
      }
    ]
  },
  "montana": {
    "province": "Noord-Brabant · Süden",
    "context": "In Westerhoven bei Valkenswaard, südlich von Eindhoven. Die Halle liegt im Ferienpark De Kempervennen, nahe der belgischen Grenze.",
    "character": "Heide, Moorseen & Eindhoven",
    "coordinates": {
      "key": "montana",
      "lat": 51.3332489,
      "lon": 5.4216416
    },
    "arrival": {
      "minutes": 204,
      "km": 302.2
    },
    "photos": [
      {
        "src": "assets/regions/eindhoven.jpg",
        "width": 1280,
        "height": 1707,
        "title": "Eindhoven",
        "kind": "Stadt",
        "time": "ca. 25–35 Min.",
        "caption": "Moderne Innenstadt mit dem markanten Gebäude De Blob. Stadtbesuch und Coffeeshop lassen sich verbinden.",
        "credit": "Ralph van Roosmalen · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Eindhoven,_city_center_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "taken": "5 January 2014 (original upload date)"
      },
      {
        "src": "assets/regions/malpie.jpg",
        "width": 1280,
        "height": 720,
        "title": "De Malpie · Valkenswaard",
        "kind": "Landschaft",
        "time": "ca. 10–20 Min.",
        "caption": "Heide, Wald und kleine Moorseen südlich von Valkenswaard. Das Archivfoto zeigt einen winterlichen Blick auf ein Gewässer.",
        "credit": "Dennal/Dennis Klein · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Een_van_de_vele_vennen_in_de_malpie.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "taken": "2016-01-29 15:50:23"
      }
    ],
    "hotels": [
      {
        "id": 11542,
        "name": "Boutique Hotel de Statie",
        "kind": "Hotel",
        "address": "Frans van Beststraat 1, Valkenswaard",
        "price": 236,
        "rating": {
          "number_of_reviews": 225,
          "review_score": 8.3,
          "stars": 3,
          "stars_type": "official"
        },
        "parking": 36,
        "parkingText": "0,50 € / Stunde laut Auskunft · 36 € Reserve für 72 Stunden; Abrechnungszeiten und Tageshöchstpreis nicht bestätigt",
        "source": "https://www.booking.com/hotel/nl/de-valk.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Günstigster Treffer in diesem Gebiet. Auch mit 36 € Parkreserve bleibt das Übernachten deutlich günstiger als die B&Bs mit Gratisparkplatz.",
        "skiRoute": {
          "minutes": 9,
          "km": 6.1
        },
        "spaRoute": {
          "minutes": 17,
          "km": 13.6
        },
        "spaEstimate": null
      },
      {
        "id": 1718578,
        "name": "B&B van Dinter",
        "kind": "Bed & Breakfast",
        "address": "Luikerweg 58, Valkenswaard",
        "price": 390,
        "rating": {
          "number_of_reviews": 193,
          "review_score": 9.6,
          "stars": 3,
          "stars_type": "estimated_by_booking"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/b-amp-b-van-dinter.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Bed & Breakfast in Valkenswaard, kein klassisches Hotel. Sehr gute Booking-Bewertung und kostenloser Privatparkplatz.",
        "skiRoute": {
          "minutes": 6,
          "km": 4.6
        },
        "spaRoute": {
          "minutes": 19,
          "km": 14.6
        },
        "spaEstimate": null
      },
      {
        "id": 15650975,
        "name": "Eighty One Horse Boulevard",
        "kind": "Bed & Breakfast",
        "address": "Kluizerdijk 81, Valkenswaard",
        "price": 405,
        "rating": {
          "number_of_reviews": 47,
          "review_score": 9.5,
          "stars": 3,
          "stars_type": "estimated_by_booking"
        },
        "parking": 0,
        "parkingText": "Kostenloser Hotelparkplatz laut Unterkunft",
        "source": "https://www.booking.com/hotel/nl/eighty-one-horse-boulevard.html?aid=2438770&checkin=2026-10-11&checkout=2026-10-14&no_rooms=1&group_adults=2&selected_currency=EUR",
        "dates": "11.–14.10.2026",
        "status": "Datumsgenauer Suchtreffer · geprüft 06.10.2026",
        "note": "Bed & Breakfast am Rand von Valkenswaard, kein klassisches Hotel. Ruhigere Lage und kostenloses Parken; gegenüber de Statie höhere Zimmerkosten.",
        "skiRoute": {
          "minutes": 9,
          "km": 6.7
        },
        "spaRoute": {
          "minutes": 22,
          "km": 20.4
        },
        "spaEstimate": null
      }
    ],
    "activities": [
      {
        "kind": "Museum · Regenplan",
        "title": "Van Abbemuseum · Eindhoven",
        "time": "ca. 25–35 Min.",
        "description": "Museum für moderne und zeitgenössische Kunst. Ergänzt einen Stadtbesuch in Eindhoven; Eintritt zusätzlich.",
        "url": "https://vanabbemuseum.nl/en/plan-your-visit",
        "destination": "Van Abbemuseum Eindhoven"
      }
    ]
  }
};
const COUNTRY_MAP = {"paths":[{"country":"Netherlands","path":"M393.7,582.9 L382.4,582.5 L371.7,582.1 L366.1,581.2 L360.1,578.3 L360.1,578.3 L357.3,572.4 L354.0,565.2 L354.9,560.8 L364.9,548.4 L366.4,545.0 L365.4,543.1 L366.4,537.6 L374.0,519.1 L375.0,511.6 L371.6,506.4 L366.7,503.3 L350.6,497.8 L342.9,490.0 L339.4,483.2 L335.8,481.3 L330.5,483.6 L317.2,486.2 L306.4,482.5 L293.6,469.7 L290.6,458.2 L289.1,449.4 L285.9,446.4 L281.6,450.9 L276.1,458.0 L265.4,458.9 L262.3,457.2 L261.8,453.3 L261.2,449.5 L258.2,444.8 L255.0,442.2 L241.4,455.4 L236.3,455.3 L229.9,450.3 L226.8,445.3 L219.8,448.1 L213.5,454.3 L215.6,465.8 L212.3,467.9 L204.5,466.8 L195.7,462.1 L186.0,459.2 L171.1,451.3 L150.5,457.7 L136.1,450.0 L124.1,449.3 L116.7,443.1 L108.7,432.8 L114.4,425.9 L119.8,423.6 L141.7,422.3 L157.6,426.4 L186.2,448.9 L193.4,448.7 L201.1,445.9 L197.2,439.8 L190.1,436.8 L179.4,430.8 L170.9,422.3 L190.9,419.5 L188.1,415.1 L185.5,407.6 L164.5,381.5 L168.0,374.4 L173.3,359.2 L179.9,346.6 L185.2,343.2 L193.8,334.3 L212.5,308.1 L224.5,286.8 L233.4,261.4 L246.4,191.6 L250.2,179.8 L256.5,166.7 L264.4,169.1 L269.9,172.9 L289.3,163.0 L322.5,137.2 L332.4,114.8 L342.0,104.4 L380.2,84.2 L401.4,78.2 L434.0,76.6 L457.5,73.0 L485.8,71.7 L496.6,84.2 L502.8,93.3 L512.9,98.4 L528.5,101.9 L527.6,119.9 L527.7,155.6 L526.5,161.9 L519.5,177.0 L512.1,204.0 L510.1,221.7 L507.9,225.1 L478.2,225.0 L474.0,228.1 L473.4,231.9 L474.9,236.5 L474.2,241.1 L471.9,244.8 L473.1,250.6 L478.3,257.3 L487.6,261.5 L497.7,261.8 L502.8,261.1 L506.6,265.9 L510.3,273.3 L510.1,282.5 L508.6,295.0 L503.9,306.5 L490.2,319.7 L484.0,324.4 L478.3,326.8 L475.5,330.3 L474.3,334.7 L474.6,338.6 L484.3,349.3 L484.0,351.7 L481.2,357.2 L477.5,362.4 L452.4,373.2 L442.0,372.4 L436.1,377.8 L434.2,378.8 L427.7,373.9 L413.0,368.2 L407.5,370.1 L404.5,373.2 L395.3,377.0 L388.7,383.0 L388.6,390.6 L400.3,410.4 L404.4,414.3 L404.6,421.7 L410.3,431.0 L416.0,442.6 L416.7,450.0 L416.0,457.5 L413.0,468.1 L402.9,492.9 L402.8,497.7 L403.6,501.3 L407.1,502.3 L409.7,504.2 L409.0,507.5 L390.0,524.7 L387.6,527.7 L379.7,526.9 L378.4,529.8 L379.5,534.4 L382.6,538.5 L389.4,540.6 L395.2,545.0 L399.8,553.6 L393.7,582.9 Z M195.7,462.1 L194.1,469.2 L189.7,477.2 L174.9,488.6 L159.4,496.0 L151.4,495.1 L146.0,491.2 L143.0,487.1 L134.8,483.1 L123.4,481.1 L116.3,485.4 L111.3,489.5 L106.8,488.8 L103.5,485.4 L101.0,480.2 L97.6,463.7 L106.1,460.7 L124.4,459.6 L138.6,465.4 L157.3,468.1 L171.6,460.3 L182.9,467.0 L195.7,462.1 Z M431.7,58.5 L416.0,64.9 L412.2,63.6 L413.2,61.7 L427.0,57.7 L431.7,58.5 Z M386.5,68.3 L364.4,71.4 L356.9,69.1 L355.7,66.9 L361.7,65.6 L380.5,65.2 L386.4,67.2 L386.5,68.3 Z M294.6,97.0 L273.9,110.9 L272.1,108.7 L285.4,96.6 L294.6,97.0 Z M318.9,82.2 L308.5,83.7 L303.7,81.1 L328.9,73.5 L344.8,71.2 L347.7,72.3 L318.9,82.2 Z M269.6,142.1 L258.6,155.5 L251.8,151.8 L249.8,148.7 L253.3,138.2 L269.7,120.7 L269.6,142.1 Z M164.7,395.0 L175.6,405.4 L178.0,408.7 L178.8,412.2 L164.9,416.4 L150.1,403.6 L140.4,406.6 L136.7,400.6 L136.6,396.9 L146.8,393.7 L164.7,395.0 Z M476.7,44.8 L466.3,45.5 L469.3,40.4 L478.9,36.7 L484.1,36.7 L476.7,44.8 Z"},{"country":"Germany","path":"M789.1,1195.9 L769.6,1181.7 L750.9,1168.1 L744.7,1168.1 L717.1,1170.8 L716.3,1169.6 L711.5,1161.8 L707.2,1159.4 L704.7,1160.6 L702.9,1162.9 L700.0,1162.5 L687.6,1149.9 L682.5,1148.1 L675.5,1149.8 L667.2,1156.5 L663.6,1164.8 L664.7,1169.6 L669.0,1171.7 L680.3,1170.3 L681.9,1171.6 L682.3,1174.3 L681.1,1176.9 L671.9,1179.1 L669.2,1182.2 L666.6,1183.0 L664.9,1183.5 L655.1,1180.2 L640.6,1180.2 L628.9,1186.0 L610.2,1188.4 L584.6,1187.2 L575.4,1182.9 L569.7,1180.3 L565.7,1167.5 L566.7,1148.5 L572.8,1123.4 L574.6,1105.0 L571.8,1093.3 L575.5,1075.7 L585.4,1052.3 L592.1,1027.6 L595.4,1001.6 L600.3,984.7 L609.7,972.8 L632.3,939.6 L634.1,937.1 L633.5,920.5 L627.4,918.2 L618.5,913.4 L595.9,907.5 L574.8,903.8 L565.3,899.1 L556.9,886.6 L551.7,886.4 L541.5,890.9 L528.8,893.9 L519.5,891.3 L513.8,891.8 L510.5,894.1 L508.9,892.0 L506.6,881.3 L501.7,878.5 L494.2,876.1 L489.5,877.1 L486.3,882.5 L481.3,886.2 L476.8,885.0 L462.5,860.2 L458.8,854.8 L457.8,849.7 L454.2,840.5 L445.7,831.4 L437.2,828.5 L433.0,829.5 L433.4,818.1 L436.8,801.6 L440.0,793.0 L444.2,785.9 L448.7,781.0 L449.7,772.2 L449.0,763.8 L443.8,762.5 L430.8,756.3 L423.1,749.8 L417.3,741.6 L409.9,730.4 L406.7,719.0 L406.5,707.6 L407.4,702.5 L408.0,699.0 L414.0,681.3 L435.2,665.4 L432.9,649.5 L432.6,639.7 L427.4,633.3 L417.1,630.7 L414.4,626.2 L413.3,621.9 L420.8,612.1 L411.7,604.4 L407.8,596.4 L395.1,586.4 L393.7,582.9 L399.8,553.6 L395.2,545.0 L389.4,540.6 L382.6,538.5 L379.5,534.4 L378.4,529.8 L379.7,526.9 L387.6,527.7 L390.0,524.7 L409.0,507.5 L409.7,504.2 L407.1,502.3 L403.6,501.3 L402.8,497.7 L402.9,492.9 L413.0,468.1 L416.0,457.5 L416.7,450.0 L416.0,442.6 L410.3,431.0 L404.6,421.7 L404.4,414.3 L400.3,410.4 L388.6,390.6 L388.7,383.0 L395.3,377.0 L404.5,373.2 L407.5,370.1 L413.0,368.2 L427.7,373.9 L434.2,378.8 L436.1,377.8 L442.0,372.4 L452.4,373.2 L477.5,362.4 L481.2,357.2 L484.0,351.7 L484.3,349.3 L474.6,338.6 L474.3,334.7 L475.5,330.3 L478.3,326.8 L484.0,324.4 L490.2,319.7 L503.9,306.5 L508.6,295.0 L510.1,282.5 L510.3,273.3 L506.6,265.9 L502.8,261.1 L497.7,261.8 L487.6,261.5 L478.3,257.3 L473.1,250.6 L471.9,244.8 L474.2,241.1 L474.9,236.5 L473.4,231.9 L474.0,228.1 L478.2,225.0 L507.9,225.1 L510.1,221.7 L512.1,204.0 L519.5,177.0 L526.5,161.9 L527.7,155.6 L527.6,119.9 L528.5,101.9 L523.4,93.4 L512.4,84.1 L514.7,64.7 L518.4,49.7 L529.5,31.1 L538.3,26.0 L576.9,23.0 L619.4,24.3 L637.1,52.3 L630.6,66.6 L640.9,73.3 L645.9,70.9 L649.6,58.4 L652.2,44.5 L655.8,40.3 L669.0,50.7 L673.6,57.8 L673.9,80.6 L678.7,49.7 L675.1,28.1 L677.6,7.1 L682.9,-3.8 L687.7,-10.8 L718.9,-3.3 L753.4,-7.1 L766.5,0.9 L796.0,41.4 L805.8,48.0 L818.2,50.1 L801.1,41.5 L765.3,-7.7 L754.6,-13.8 L738.2,-15.7 L728.0,-20.5 L721.5,-27.9 L719.6,-34.6 L719.9,-84.1 L713.8,-91.4 L705.8,-94.0 L700.8,-90.6 L690.6,-90.5 L688.5,-101.8 L691.0,-110.1 L711.5,-115.7 L725.0,-123.3 L725.6,-136.8 L717.1,-147.3 L706.8,-166.7 L694.8,-185.0 L693.5,-206.1 L693.5,-206.1 L714.4,-205.7 L719.5,-204.9 L751.2,-195.0 L759.0,-188.0 L768.7,-187.7 L786.3,-194.2 L799.4,-197.0 L804.5,-193.0 L811.6,-191.4 L813.3,-191.4 L813.9,-187.9 L830.3,-182.8 L837.2,-174.8 L844.9,-162.5 L845.6,-144.9 L835.8,-132.3 L827.7,-124.3 L858.5,-127.3 L861.5,-120.0 L866.2,-112.2 L882.8,-117.8 L924.3,-94.6 L949.5,-105.9 L955.9,-106.5 L961.6,-87.8 L955.4,-68.9 L933.2,-48.8 L938.1,-36.4 L945.2,-33.6 L966.1,-36.2 L999.2,-24.0 L1006.0,-27.8 L1032.9,-56.1 L1043.6,-62.1 L1078.9,-66.5 L1085.3,-77.4 L1099.6,-88.4 L1108.8,-100.4 L1130.8,-123.3 L1153.7,-119.2 L1167.0,-114.8 L1181.6,-112.6 L1194.9,-88.2 L1228.6,-61.3 L1259.5,-63.6 L1270.5,-38.1 L1275.3,-6.6 L1284.8,3.2 L1293.2,9.7 L1318.4,16.4 L1319.4,16.9 L1320.2,21.1 L1321.7,36.8 L1323.9,49.8 L1336.8,101.6 L1336.6,114.3 L1336.4,117.7 L1331.7,135.4 L1323.2,150.4 L1312.1,158.9 L1306.0,168.3 L1304.8,178.6 L1318.8,196.8 L1348.0,222.8 L1359.8,245.1 L1354.2,263.6 L1352.5,277.2 L1354.7,285.8 L1359.4,292.7 L1366.5,298.0 L1369.4,306.1 L1367.9,317.0 L1369.3,324.6 L1374.7,330.0 L1374.2,332.0 L1371.6,339.6 L1368.0,353.5 L1366.0,363.6 L1357.8,377.3 L1360.3,389.0 L1366.7,402.8 L1371.6,409.8 L1373.1,416.3 L1370.0,432.0 L1371.6,436.0 L1391.9,447.5 L1395.2,452.8 L1397.1,463.8 L1404.3,487.5 L1398.4,517.4 L1393.2,533.8 L1381.6,559.9 L1381.0,562.3 L1379.7,565.5 L1376.2,570.0 L1371.4,570.7 L1364.1,567.3 L1359.1,562.9 L1360.3,551.7 L1357.1,551.0 L1353.1,544.1 L1351.5,536.7 L1347.2,533.6 L1331.5,530.5 L1326.2,528.3 L1322.1,529.9 L1319.1,535.1 L1321.0,539.9 L1323.9,544.5 L1332.6,551.8 L1331.7,554.7 L1313.0,561.9 L1301.2,569.2 L1290.2,573.3 L1279.0,580.9 L1257.0,589.4 L1240.8,591.6 L1237.4,593.9 L1231.3,608.3 L1227.2,611.3 L1223.3,609.7 L1220.4,607.4 L1216.6,609.3 L1212.7,614.1 L1208.6,616.0 L1205.0,615.9 L1198.7,628.5 L1180.2,632.3 L1178.1,638.8 L1174.7,646.4 L1172.0,648.3 L1163.6,645.3 L1152.1,643.6 L1145.5,647.8 L1137.6,650.1 L1127.9,650.8 L1117.1,659.0 L1106.6,673.6 L1100.6,686.4 L1097.5,691.0 L1092.3,679.0 L1086.0,670.7 L1081.5,666.4 L1077.5,666.4 L1076.5,668.2 L1076.5,674.5 L1080.7,684.9 L1086.0,692.1 L1086.8,697.4 L1089.7,707.0 L1097.4,717.5 L1109.4,725.8 L1117.7,734.0 L1123.7,745.3 L1123.8,748.8 L1122.1,753.4 L1119.2,757.8 L1116.8,763.5 L1110.1,775.0 L1112.1,780.0 L1117.6,786.3 L1122.4,794.0 L1128.6,806.3 L1137.2,827.9 L1142.7,836.7 L1150.2,845.9 L1157.5,852.9 L1169.1,852.7 L1181.1,866.1 L1194.1,885.4 L1203.9,894.3 L1210.7,897.0 L1216.4,903.9 L1221.4,914.0 L1223.3,919.8 L1227.8,923.9 L1239.7,923.2 L1255.1,938.9 L1264.6,950.5 L1269.7,959.8 L1268.3,963.5 L1267.7,975.1 L1267.9,987.4 L1266.4,993.9 L1259.5,1002.4 L1255.9,1004.3 L1254.0,1006.1 L1232.9,995.0 L1231.2,996.9 L1229.9,998.2 L1224.2,1030.6 L1220.4,1036.8 L1214.6,1042.6 L1202.5,1048.1 L1194.1,1050.4 L1187.6,1053.2 L1166.9,1066.8 L1157.6,1074.9 L1151.6,1085.2 L1151.5,1091.1 L1161.6,1108.4 L1173.2,1126.3 L1173.3,1142.0 L1168.1,1153.8 L1166.9,1158.3 L1170.4,1160.1 L1176.8,1160.7 L1182.2,1162.7 L1184.5,1171.0 L1183.8,1185.5 L1181.9,1199.0 L1180.0,1204.7 L1174.8,1205.1 L1164.8,1199.3 L1157.0,1192.5 L1154.1,1188.3 L1153.9,1183.3 L1155.6,1180.2 L1152.8,1174.0 L1143.2,1168.3 L1133.0,1170.8 L1125.4,1174.6 L1120.5,1174.4 L1115.2,1168.9 L1107.1,1164.7 L1096.5,1162.0 L1089.8,1159.0 L1088.5,1160.8 L1089.2,1172.6 L1087.2,1177.8 L1034.7,1184.6 L1018.7,1191.0 L1007.0,1199.3 L998.4,1202.9 L996.3,1208.1 L987.8,1214.8 L978.1,1216.9 L975.8,1214.7 L969.6,1217.8 L959.1,1220.8 L952.3,1219.9 L949.0,1214.4 L942.5,1206.1 L939.9,1200.4 L940.2,1196.7 L925.5,1195.9 L916.2,1191.5 L896.5,1192.6 L891.6,1190.7 L890.6,1192.7 L887.6,1216.3 L883.7,1225.9 L877.4,1235.9 L869.4,1241.5 L862.9,1242.5 L863.2,1235.2 L864.8,1226.4 L860.2,1224.4 L853.2,1223.4 L849.8,1220.8 L850.7,1214.1 L849.1,1210.2 L846.2,1205.5 L839.2,1199.5 L824.4,1190.6 L814.3,1186.1 L810.5,1190.9 L803.3,1195.6 L791.9,1194.0 L789.1,1195.9 Z"},{"country":"Belgium","path":"M195.7,462.1 L204.5,466.8 L212.3,467.9 L215.6,465.8 L213.5,454.3 L219.8,448.1 L226.8,445.3 L229.9,450.3 L236.3,455.3 L241.4,455.4 L255.0,442.2 L258.2,444.8 L261.2,449.5 L261.8,453.3 L262.3,457.2 L265.4,458.9 L276.1,458.0 L281.6,450.9 L285.9,446.4 L289.1,449.4 L290.6,458.2 L293.6,469.7 L306.4,482.5 L317.2,486.2 L330.5,483.6 L335.8,481.3 L339.4,483.2 L342.9,490.0 L350.6,497.8 L366.7,503.3 L371.6,506.4 L375.0,511.6 L374.0,519.1 L366.4,537.6 L365.4,543.1 L366.4,545.0 L364.9,548.4 L354.9,560.8 L354.0,565.2 L357.3,572.4 L360.1,578.3 L360.1,578.3 L366.1,581.2 L371.7,582.1 L382.4,582.5 L393.7,582.9 L395.1,586.4 L407.8,596.4 L411.7,604.4 L420.8,612.1 L413.3,621.9 L414.4,626.2 L417.1,630.7 L427.4,633.3 L432.6,639.7 L432.9,649.5 L435.2,665.4 L414.0,681.3 L408.0,699.0 L407.4,702.5 L406.7,702.0 L404.4,696.1 L400.5,696.2 L391.7,693.7 L379.5,709.8 L373.9,723.1 L370.7,732.9 L365.7,740.8 L364.7,749.1 L365.4,752.6 L363.7,757.2 L363.6,761.9 L370.7,771.3 L372.4,776.4 L381.0,793.0 L378.3,799.1 L376.2,805.6 L373.7,810.3 L370.9,813.2 L362.0,813.1 L350.7,815.1 L343.1,818.4 L339.2,818.4 L331.1,810.1 L322.0,797.7 L316.2,791.8 L313.6,786.7 L306.5,784.5 L296.3,778.4 L289.2,771.8 L283.2,767.6 L274.6,765.5 L267.6,765.8 L265.5,754.5 L264.6,741.7 L258.9,733.2 L266.8,699.7 L262.1,696.4 L257.0,699.1 L249.5,707.1 L246.0,716.6 L243.9,725.0 L231.4,733.1 L211.7,736.0 L190.1,733.1 L187.1,730.9 L185.7,728.5 L185.7,725.5 L187.2,721.0 L191.0,715.5 L191.9,707.6 L188.1,700.8 L185.5,698.2 L186.5,691.6 L189.4,683.4 L190.0,678.7 L175.3,664.4 L164.8,661.7 L154.5,661.2 L146.7,659.6 L142.2,660.2 L138.9,664.4 L135.6,667.3 L133.1,663.8 L128.6,638.6 L125.1,634.8 L111.8,630.6 L93.8,629.1 L89.0,624.5 L86.4,613.2 L84.7,599.5 L78.8,586.5 L75.7,583.2 L70.4,577.4 L61.0,579.8 L49.7,587.4 L43.0,589.5 L40.5,590.3 L31.5,582.9 L21.3,571.3 L13.2,559.1 L11.3,552.3 L13.8,544.0 L10.8,537.7 L6.4,526.1 L5.2,517.0 L53.9,485.1 L83.6,468.7 L97.6,463.7 L101.0,480.2 L103.5,485.4 L106.8,488.8 L111.3,489.5 L116.3,485.4 L123.4,481.1 L134.8,483.1 L143.0,487.1 L146.0,491.2 L151.4,495.1 L159.4,496.0 L174.9,488.6 L189.7,477.2 L194.1,469.2 L195.7,462.1 Z"}],"origin":{"key":"loningen","lat":52.7363493,"lon":7.7570655}};
