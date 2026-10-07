"use strict";
// Veröffentlichte Aufnahmen. Nachweise in assets/media/credits.json.
const MEDIA_ALBUMS = {
  "hotel-11710": {
    "label": "Carré1749",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-11710-1.jpg",
        "thumb": "assets/media/hotel-11710-1-thumb.jpg",
        "width": 768,
        "height": 512,
        "title": "Zimmerbeispiel",
        "caption": "Helles Gästezimmer im Carré1749, dem ehemaligen Overste Hof.",
        "credit": "Carré1749",
        "source": "https://en.carre1749.com/hotel/"
      },
      {
        "src": "assets/media/hotel-11710-2.jpg",
        "thumb": "assets/media/hotel-11710-2-thumb.jpg",
        "width": 1100,
        "height": 654,
        "title": "Hotel & Innenhof",
        "caption": "Betreiberaufnahme des historischen Hofs und seiner Lage am Wasser.",
        "credit": "Carré1749",
        "source": "https://en.carre1749.com/"
      },
      {
        "src": "assets/media/hotel-11710-3.jpg",
        "thumb": "assets/media/hotel-11710-3-thumb.jpg",
        "width": 1100,
        "height": 691,
        "title": "Terrasse im Innenhof",
        "caption": "Der Innenhof bei einer Veranstaltung; Dekoration und Bestuhlung können abweichen.",
        "credit": "Carré1749",
        "source": "https://en.carre1749.com/"
      },
      {
        "src": "assets/media/hotel-11710-4.jpg",
        "thumb": "assets/media/hotel-11710-4-thumb.jpg",
        "width": 768,
        "height": 512,
        "title": "Weiteres Zimmerbeispiel",
        "caption": "Weitere Zimmeransicht des Hotels. Zimmerkategorie im Angebot prüfen.",
        "credit": "Carré1749",
        "source": "https://en.carre1749.com/hotel/"
      }
    ]
  },
  "hotel-11947": {
    "label": "Alpine Hotel by SnowWorld",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-11947-1.jpg",
        "thumb": "assets/media/hotel-11947-1-thumb.jpg",
        "width": 800,
        "height": 450,
        "title": "Zimmerbeispiel",
        "caption": "Veröffentlichtes Zimmerfoto des Alpine Hotels mit Blick ins Grüne.",
        "credit": "SnowWorld / Alpine Hotel",
        "source": "https://www.snowworld.com/de/hotel"
      },
      {
        "src": "assets/media/hotel-11947-2.jpg",
        "thumb": "assets/media/hotel-11947-2-thumb.jpg",
        "width": 800,
        "height": 450,
        "title": "Familienzimmer als Beispiel",
        "caption": "Veröffentlichtes Zimmerfoto mit Etagenbetten; diese Kategorie ist zum angezeigten Preis nicht bestätigt.",
        "credit": "SnowWorld / Alpine Hotel",
        "source": "https://www.snowworld.com/de/hotel"
      },
      {
        "src": "assets/media/hotel-11947-3.jpg",
        "thumb": "assets/media/hotel-11947-3-thumb.jpg",
        "width": 800,
        "height": 450,
        "title": "Gastronomie",
        "caption": "Veröffentlichtes Foto im Gastronomiebereich bei SnowWorld; Essen separat prüfen.",
        "credit": "SnowWorld / Alpine Hotel",
        "source": "https://www.snowworld.com/de/hotel"
      }
    ]
  },
  "hotel-10329": {
    "label": "Bastion Hotel Zoetermeer",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10329-1.jpg",
        "thumb": "assets/media/hotel-10329-1-thumb.jpg",
        "width": 780,
        "height": 517,
        "title": "Zimmerbeispiel",
        "caption": "Bastion Hotel Zoetermeer: veröffentlichtes Zimmerfoto.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-zoetermeer"
      },
      {
        "src": "assets/media/hotel-10329-2.jpg",
        "thumb": "assets/media/hotel-10329-2-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Badbeispiel",
        "caption": "Bastion Hotel Zoetermeer: Beispiel eines Badezimmers.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-zoetermeer"
      },
      {
        "src": "assets/media/hotel-10329-3.jpg",
        "thumb": "assets/media/hotel-10329-3-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Außenansicht",
        "caption": "Bastion Hotel Zoetermeer: das Hotel von außen.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-zoetermeer"
      }
    ]
  },
  "hotel-10311": {
    "label": "Bastion Hotel Den Haag Rijswijk",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10311-1.jpg",
        "thumb": "assets/media/hotel-10311-1-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Zimmerbeispiel",
        "caption": "Bastion Hotel Den Haag Rijswijk: veröffentlichtes Zimmerfoto.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rijswijk"
      },
      {
        "src": "assets/media/hotel-10311-2.jpg",
        "thumb": "assets/media/hotel-10311-2-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Badbeispiel",
        "caption": "Bastion Hotel Den Haag Rijswijk: Beispiel eines Badezimmers.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rijswijk"
      },
      {
        "src": "assets/media/hotel-10311-3.jpg",
        "thumb": "assets/media/hotel-10311-3-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Außenansicht",
        "caption": "Bastion Hotel Den Haag Rijswijk: das Hotel von außen.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rijswijk"
      }
    ]
  },
  "hotel-11742": {
    "label": "Bastion Hotel Rotterdam Alexander",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-11742-1.jpg",
        "thumb": "assets/media/hotel-11742-1-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Zimmerbeispiel",
        "caption": "Bastion Hotel Rotterdam Alexander: veröffentlichtes Zimmerfoto.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rotterdam-alexander"
      },
      {
        "src": "assets/media/hotel-11742-2.jpg",
        "thumb": "assets/media/hotel-11742-2-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Badbeispiel",
        "caption": "Bastion Hotel Rotterdam Alexander: Beispiel eines Badezimmers.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rotterdam-alexander"
      },
      {
        "src": "assets/media/hotel-11742-3.jpg",
        "thumb": "assets/media/hotel-11742-3-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Außenansicht",
        "caption": "Bastion Hotel Rotterdam Alexander: das Hotel von außen.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-rotterdam-alexander"
      }
    ]
  },
  "hotel-15358076": {
    "label": "Spaarnwoude Park Hotel",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot. Die Außenansicht ist eine veröffentlichte Visualisierung.",
    "photos": [
      {
        "src": "assets/media/hotel-15358076-1.jpg",
        "thumb": "assets/media/hotel-15358076-1-thumb.jpg",
        "width": 333,
        "height": 500,
        "title": "Zimmerbeispiel",
        "caption": "Veröffentlichtes Zimmerbild im Unterkunftsprofil.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/spaarnwoude-park.html"
      },
      {
        "src": "assets/media/hotel-15358076-2.jpg",
        "thumb": "assets/media/hotel-15358076-2-thumb.jpg",
        "width": 333,
        "height": 500,
        "title": "Badbeispiel",
        "caption": "Veröffentlichtes Badezimmerbild im Unterkunftsprofil.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/spaarnwoude-park.html"
      },
      {
        "src": "assets/media/hotel-15358076-3.jpg",
        "thumb": "assets/media/hotel-15358076-3-thumb.jpg",
        "width": 1024,
        "height": 576,
        "title": "Außenansicht · Visualisierung",
        "caption": "Darstellung des Hotelgebäudes im Unterkunftsprofil; keine bestätigte Außenaufnahme.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/spaarnwoude-park.html"
      }
    ]
  },
  "hotel-10576": {
    "label": "Fletcher Hotel Spaarnwoude",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10576-1.jpg",
        "thumb": "assets/media/hotel-10576-1-thumb.jpg",
        "width": 997,
        "height": 570,
        "title": "Zimmerbeispiel",
        "caption": "Zimmerfoto des Fletcher Hotels in Spaarnwoude.",
        "credit": "Fletcher Hotels",
        "source": "https://www.fletcherhotelspaarnwoude.nl/en/rooms"
      },
      {
        "src": "assets/media/hotel-10576-2.jpg",
        "thumb": "assets/media/hotel-10576-2-thumb.jpg",
        "width": 997,
        "height": 570,
        "title": "Badbeispiel",
        "caption": "Dusche und Badezimmer als Zimmerbeispiel.",
        "credit": "Fletcher Hotels",
        "source": "https://www.fletcherhotelspaarnwoude.nl/en/rooms"
      },
      {
        "src": "assets/media/hotel-10576-3.jpg",
        "thumb": "assets/media/hotel-10576-3-thumb.jpg",
        "width": 332,
        "height": 220,
        "title": "Hotel von außen",
        "caption": "Das Hotelgebäude am Wasser.",
        "credit": "Fletcher Hotels",
        "source": "https://www.fletcherhotelspaarnwoude.nl/en/"
      },
      {
        "src": "assets/media/hotel-10576-4.jpg",
        "thumb": "assets/media/hotel-10576-4-thumb.jpg",
        "width": 360,
        "height": 200,
        "title": "Hotelpool",
        "caption": "Veröffentlichtes Foto des Hotelpools; Nutzung und Öffnung im Angebot prüfen.",
        "credit": "Fletcher Hotels",
        "source": "https://www.fletcherhotelspaarnwoude.nl/en/"
      }
    ]
  },
  "thermae2000": {
    "label": "Thermae 2000",
    "note": "",
    "photos": [
      {
        "src": "assets/media/thermae2000-1.jpg",
        "thumb": "assets/media/thermae2000-1-thumb.jpg",
        "width": 1100,
        "height": 371,
        "title": "Thermalbecken",
        "caption": "Veröffentlichtes Bild der Thermalbecken in Valkenburg.",
        "credit": "Thermae 2000",
        "source": "https://www.thermae2000.de/wellness/thermalbaeder/"
      },
      {
        "src": "assets/media/thermae2000-2.jpg",
        "thumb": "assets/media/thermae2000-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Spa am Cauberg",
        "caption": "Das Resort und seine grüne, hügelige Umgebung aus der Luft.",
        "credit": "Thermae 2000",
        "source": "https://www.thermae2000.de/"
      },
      {
        "src": "assets/media/thermae2000-3.jpg",
        "thumb": "assets/media/thermae2000-3-thumb.jpg",
        "width": 500,
        "height": 500,
        "title": "Außenbereich",
        "caption": "Liegebereich draußen; Wetter und Saison können abweichen.",
        "credit": "Thermae 2000",
        "source": "https://www.thermae2000.de/"
      }
    ]
  },
  "elysium": {
    "label": "Elysium",
    "note": "",
    "photos": [
      {
        "src": "assets/media/elysium-1.jpg",
        "thumb": "assets/media/elysium-1-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Außenbecken",
        "caption": "1001-Nacht-Bad im Wellnessresort Elysium.",
        "credit": "Elysium",
        "source": "https://elysium.nl/faciliteiten"
      },
      {
        "src": "assets/media/elysium-2.jpg",
        "thumb": "assets/media/elysium-2-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Sauna im Garten",
        "caption": "Veröffentlichtes Bild einer Außensauna.",
        "credit": "Elysium",
        "source": "https://elysium.nl/faciliteiten"
      },
      {
        "src": "assets/media/elysium-3.jpg",
        "thumb": "assets/media/elysium-3-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Ruhebereich",
        "caption": "Ruheraum im Resort in Bleiswijk.",
        "credit": "Elysium",
        "source": "https://elysium.nl/faciliteiten"
      }
    ]
  },
  "egmond": {
    "label": "Sauna van Egmond",
    "note": "",
    "photos": [
      {
        "src": "assets/media/egmond-1.jpg",
        "thumb": "assets/media/egmond-1-thumb.jpg",
        "width": 1100,
        "height": 606,
        "title": "Pool",
        "caption": "Innenpool in der Sauna van Egmond in Haarlem.",
        "credit": "Sauna van Egmond",
        "source": "https://www.saunavanegmond.nl/home"
      },
      {
        "src": "assets/media/egmond-2.jpg",
        "thumb": "assets/media/egmond-2-thumb.jpg",
        "width": 630,
        "height": 420,
        "title": "Saunabereich",
        "caption": "Veröffentlichtes Foto einer Holzsauna.",
        "credit": "Sauna van Egmond",
        "source": "https://www.saunavanegmond.nl/home"
      },
      {
        "src": "assets/media/egmond-3.jpg",
        "thumb": "assets/media/egmond-3-thumb.jpg",
        "width": 630,
        "height": 368,
        "title": "Terrasse",
        "caption": "Außenbereich des Wellnessbetriebs; Archivaufnahme.",
        "credit": "Sauna van Egmond",
        "source": "https://www.saunavanegmond.nl/home"
      }
    ]
  },
  "mondoverde": {
    "label": "Mondo Verde",
    "note": "",
    "photos": [
      {
        "src": "assets/media/mondoverde-1.jpg",
        "thumb": "assets/media/mondoverde-1-thumb.jpg",
        "width": 600,
        "height": 600,
        "title": "Gärten",
        "caption": "Veröffentlichtes Gartenmotiv aus Mondo Verde in Landgraaf.",
        "credit": "Mondo Verde",
        "source": "https://www.wereldtuinenmondoverde.nl/nl/"
      },
      {
        "src": "assets/media/mondoverde-2.jpg",
        "thumb": "assets/media/mondoverde-2-thumb.jpg",
        "width": 285,
        "height": 366,
        "title": "Tierbereich",
        "caption": "Lemur im Tierbereich des Parks.",
        "credit": "Mondo Verde",
        "source": "https://www.wereldtuinenmondoverde.nl/nl/"
      },
      {
        "src": "assets/media/mondoverde-3.jpg",
        "thumb": "assets/media/mondoverde-3-thumb.jpg",
        "width": 285,
        "height": 366,
        "title": "Fahrgeschäfte",
        "caption": "Veröffentlichte Aufnahme einer Parkattraktion.",
        "credit": "Mondo Verde",
        "source": "https://www.wereldtuinenmondoverde.nl/nl/"
      }
    ]
  },
  "fluweelengrot": {
    "label": "Fluweelengrot & Kasteelruïne",
    "note": "",
    "photos": [
      {
        "src": "assets/media/fluweelengrot-1.jpg",
        "thumb": "assets/media/fluweelengrot-1-thumb.jpg",
        "width": 1100,
        "height": 506,
        "title": "Tour durch die Fluweelengrot",
        "caption": "Geführte Besichtigung in der Höhle unter Valkenburg.",
        "credit": "Kasteel Valkenburg",
        "source": "https://www.kasteelvalkenburg.nl/ontdek-onze-locaties/fluweelengrot/"
      },
      {
        "src": "assets/media/fluweelengrot-2.jpg",
        "thumb": "assets/media/fluweelengrot-2-thumb.jpg",
        "width": 768,
        "height": 400,
        "title": "Burgruine",
        "caption": "Außenansicht der Kasteelruïne in Valkenburg.",
        "credit": "Kasteel Valkenburg",
        "source": "https://www.kasteelvalkenburg.nl/ontdek-onze-locaties/fluweelengrot/"
      },
      {
        "src": "assets/media/fluweelengrot-3.jpg",
        "thumb": "assets/media/fluweelengrot-3-thumb.jpg",
        "width": 768,
        "height": 400,
        "title": "Burgberg & Zugang",
        "caption": "Weitere Ansicht der Burgruine und ihres Zugangs.",
        "credit": "Kasteel Valkenburg",
        "source": "https://www.kasteelvalkenburg.nl/ontdek-onze-locaties/fluweelengrot/"
      }
    ]
  },
  "gaiazoo": {
    "label": "GaiaZOO",
    "note": "",
    "photos": [
      {
        "src": "assets/media/gaiazoo-1.jpg",
        "thumb": "assets/media/gaiazoo-1-thumb.jpg",
        "width": 1100,
        "height": 734,
        "title": "Giraffen",
        "caption": "Archivaufnahme der Giraffen im GaiaZOO in Kerkrade.",
        "credit": "Donarreiskoffer · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Animals_in_GaiaPark_Kerkrade_Zoo_05.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/gaiazoo-2.jpg",
        "thumb": "assets/media/gaiazoo-2-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Affen",
        "caption": "Tieraufnahme im GaiaZOO; Archivbild.",
        "credit": "Donarreiskoffer · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Animals_in_GaiaPark_Kerkrade_Zoo_17.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/gaiazoo-3.jpg",
        "thumb": "assets/media/gaiazoo-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Nashorn & Zebra",
        "caption": "Weitere Aufnahme der Tieranlagen im GaiaZOO.",
        "credit": "Donarreiskoffer · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Animals_in_GaiaPark_Kerkrade_Zoo_26.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "duinrell": {
    "label": "Duinrell & Tikibad",
    "note": "Freizeitpark und Tikibad können getrennte Tickets oder Zeitfenster benötigen.",
    "photos": [
      {
        "src": "assets/media/duinrell-1.jpg",
        "thumb": "assets/media/duinrell-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Falcon-Achterbahn",
        "caption": "Veröffentlichtes Foto der Achterbahn in Duinrell.",
        "credit": "Duinrell",
        "source": "https://www.duinrell.nl/"
      },
      {
        "src": "assets/media/duinrell-2.jpg",
        "thumb": "assets/media/duinrell-2-thumb.jpg",
        "width": 600,
        "height": 800,
        "title": "Tikibad",
        "caption": "Wasserrutschen im Tikibad.",
        "credit": "Duinrell",
        "source": "https://www.duinrell.nl/"
      },
      {
        "src": "assets/media/duinrell-3.jpg",
        "thumb": "assets/media/duinrell-3-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Rutschen im Tikibad",
        "caption": "Weitere veröffentlichte Aufnahme einer Wasserrutsche.",
        "credit": "Duinrell",
        "source": "https://www.duinrell.nl/"
      }
    ]
  },
  "mauritshuis": {
    "label": "Mauritshuis",
    "note": "",
    "photos": [
      {
        "src": "assets/media/mauritshuis-1.jpg",
        "thumb": "assets/media/mauritshuis-1-thumb.jpg",
        "width": 1100,
        "height": 758,
        "title": "Museum am Hofvijver",
        "caption": "Das Mauritshuis von der Wasserseite.",
        "credit": "Michielverbeek · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag,_het_Mauritshuis_RM17650_foto5_2015-08-05_19.06.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/mauritshuis-2.jpg",
        "thumb": "assets/media/mauritshuis-2-thumb.jpg",
        "width": 1100,
        "height": 636,
        "title": "Außenansicht",
        "caption": "Das Museumsgebäude im Zentrum von Den Haag.",
        "credit": "Hubertl · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mauritshuis_-_Den_Haag_1776.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/mauritshuis-3.jpg",
        "thumb": "assets/media/mauritshuis-3-thumb.jpg",
        "width": 1100,
        "height": 747,
        "title": "Museumseingang",
        "caption": "Der Eingangsbereich des Mauritshuis; Archivaufnahme.",
        "credit": "Hubertl · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mauritshuis_-_Den_Haag-1780.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "teylers": {
    "label": "Teylers Museum",
    "note": "",
    "photos": [
      {
        "src": "assets/media/teylers-1.jpg",
        "thumb": "assets/media/teylers-1-thumb.jpg",
        "width": 1100,
        "height": 731,
        "title": "Ovaler Saal",
        "caption": "Historischer Ausstellungsraum im Teylers Museum in Haarlem.",
        "credit": "Hnapel · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Teylers_Oval_Room_01.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/teylers-2.jpg",
        "thumb": "assets/media/teylers-2-thumb.jpg",
        "width": 563,
        "height": 850,
        "title": "Blick in den Ovalen Saal",
        "caption": "Weitere Ansicht des historischen Museumsraums.",
        "credit": "Steven Lek · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Teylers_Oval_Room_Haarlem_2019_1.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/teylers-3.jpg",
        "thumb": "assets/media/teylers-3-thumb.jpg",
        "width": 1100,
        "height": 729,
        "title": "Ausstellung & Architektur",
        "caption": "Detailansicht des Ovalen Saals; Archivaufnahme.",
        "credit": "Steven Lek · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Teylers_Oval_Room_Haarlem_2019_2.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "downunder": {
    "label": "Down Under · Kerkrade",
    "note": "",
    "photos": [
      {
        "src": "assets/media/downunder-1.jpg",
        "thumb": "assets/media/downunder-1-thumb.jpg",
        "width": 1100,
        "height": 816,
        "title": "Außenansicht",
        "caption": "Veröffentlichtes Bild des Coffeeshops Down Under in Kerkrade.",
        "credit": "Venue-Aufnahmen / Coffeeshopfinder",
        "source": "https://coffeeshopfinder.nl/coffeeshops/kerkrade/down-under-kerkrade"
      },
      {
        "src": "assets/media/downunder-2.jpg",
        "thumb": "assets/media/downunder-2-thumb.jpg",
        "width": 478,
        "height": 850,
        "title": "Innenbereich",
        "caption": "Öffentliche Aufnahme im Venue-Profil.",
        "credit": "Venue-Aufnahmen / Coffeeshopfinder",
        "source": "https://coffeeshopfinder.nl/coffeeshops/kerkrade/down-under-kerkrade"
      },
      {
        "src": "assets/media/downunder-3.jpg",
        "thumb": "assets/media/downunder-3-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Weiterer Innenbereich",
        "caption": "Weitere veröffentlichte Ansicht des Shops.",
        "credit": "Venue-Aufnahmen / Coffeeshopfinder",
        "source": "https://coffeeshopfinder.nl/coffeeshops/kerkrade/down-under-kerkrade"
      }
    ]
  },
  "casa": {
    "label": "Casa · Zoetermeer",
    "note": "",
    "photos": [
      {
        "src": "assets/media/casa-1.jpg",
        "thumb": "assets/media/casa-1-thumb.jpg",
        "width": 548,
        "height": 645,
        "title": "Außenansicht",
        "caption": "Coffeeshop Casa am Amerikaweg in Zoetermeer; Foto aus dem Venue-Profil.",
        "credit": "Venue-Aufnahmen / Restaurant Guru",
        "source": "https://restaurantguru.com/Coffeeshop-Casa-Zoetermeer"
      },
      {
        "src": "assets/media/casa-2.jpg",
        "thumb": "assets/media/casa-2-thumb.jpg",
        "width": 968,
        "height": 645,
        "title": "Shopfront",
        "caption": "Weitere veröffentlichte Außenaufnahme des Shops.",
        "credit": "Venue-Aufnahmen / Restaurant Guru",
        "source": "https://restaurantguru.com/Coffeeshop-Casa-Zoetermeer"
      }
    ]
  },
  "cremers": {
    "label": "Cremers · Den Haag",
    "note": "Die Bilder zeigen die separate Club-Lounge. Sie ist montags und dienstags geschlossen; Shopverkauf separat.",
    "photos": [
      {
        "src": "assets/media/cremers-1.jpg",
        "thumb": "assets/media/cremers-1-thumb.jpg",
        "width": 1100,
        "height": 732,
        "title": "Club-Lounge",
        "caption": "Betreiberfoto der separaten Club-Lounge bei Cremers.",
        "credit": "Cremers",
        "source": "https://cafecremers.nl/pages/club-cremers"
      },
      {
        "src": "assets/media/cremers-2.jpg",
        "thumb": "assets/media/cremers-2-thumb.jpg",
        "width": 1100,
        "height": 734,
        "title": "Innenbereich der Lounge",
        "caption": "Weitere veröffentlichte Ansicht der Club-Lounge.",
        "credit": "Cremers",
        "source": "https://cafecremers.nl/pages/club-cremers"
      },
      {
        "src": "assets/media/cremers-3.jpg",
        "thumb": "assets/media/cremers-3-thumb.jpg",
        "width": 1100,
        "height": 734,
        "title": "Atmosphäre im Club",
        "caption": "Veröffentlichtes Clubfoto; Programm und Einrichtung können wechseln.",
        "credit": "Cremers",
        "source": "https://cafecremers.nl/pages/club-cremers"
      }
    ]
  },
  "birdy": {
    "label": "Birdy · Haarlem",
    "note": "",
    "photos": [
      {
        "src": "assets/media/birdy-1.jpg",
        "thumb": "assets/media/birdy-1-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Außenansicht",
        "caption": "Der Coffeeshop Birdy in Haarlem von außen.",
        "credit": "Wegwijs in Haarlem",
        "source": "https://wegwijshaarlem.nl/gids/cafes-in-haarlem"
      },
      {
        "src": "assets/media/birdy-2.jpg",
        "thumb": "assets/media/birdy-2-thumb.jpg",
        "width": 768,
        "height": 679,
        "title": "Innenbereich",
        "caption": "Betreiberfoto mit Sitzplätzen und Billardtischen.",
        "credit": "Birdy",
        "source": "https://coffeeshopbirdy.com/"
      }
    ]
  },
  "valkenburg": {
    "label": "Valkenburg",
    "note": "",
    "photos": [
      {
        "src": "assets/media/valkenburg-1.jpg",
        "thumb": "assets/media/valkenburg-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Grotestraat am Abend",
        "caption": "Cafés und Straßen im historischen Zentrum von Valkenburg.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Valkenburg-Grotestraat_(2).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
      },
      {
        "src": "assets/media/valkenburg-2.jpg",
        "thumb": "assets/media/valkenburg-2-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Abendstimmung im Zentrum",
        "caption": "Weitere Ansicht der Grotestraat; Archivaufnahme.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Valkenburg-Grotestraat_(1).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
      }
    ]
  },
  "brunssummerheide": {
    "label": "Brunssummerheide",
    "note": "",
    "photos": [
      {
        "src": "assets/media/brunssummerheide-1.jpg",
        "thumb": "assets/media/brunssummerheide-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Offene Heide",
        "caption": "Heide und kleine Wasserfläche in der Brunssummerheide.",
        "credit": "Ladislaus Hoffner · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Brunssumer_Heide_2016b.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/brunssummerheide-2.jpg",
        "thumb": "assets/media/brunssummerheide-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Wege & Hügellandschaft",
        "caption": "Spazierweg zwischen Heide und Wald; Archivaufnahme.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Heerlen-Brunssummerheide_(8).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
      }
    ]
  },
  "denhaag": {
    "label": "Den Haag",
    "note": "",
    "photos": [
      {
        "src": "assets/media/denhaag-1.jpg",
        "thumb": "assets/media/denhaag-1-thumb.jpg",
        "width": 1100,
        "height": 466,
        "title": "Hofvijver & Zentrum",
        "caption": "Wasser, historische Gebäude und Spazierwege im Zentrum von Den Haag.",
        "credit": "Txllxt TxllxT · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag_-_Lange_Vijverberg_-_View_on_Hofvijver,_Mauritshuis_%26_Binnenhof.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/denhaag-2.jpg",
        "thumb": "assets/media/denhaag-2-thumb.jpg",
        "width": 1100,
        "height": 728,
        "title": "Spaziergang am Hofvijver",
        "caption": "Weitere Ansicht am Wasser.",
        "credit": "Txllxt TxllxT · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag_-_Lange_Vijverberg_-_View_on_Hofvijver_%26_Binnenhof_1.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/denhaag-3.jpg",
        "thumb": "assets/media/denhaag-3-thumb.jpg",
        "width": 1100,
        "height": 728,
        "title": "Stadtzentrum",
        "caption": "Straßenbild im Zentrum; Archivaufnahme.",
        "credit": "Txllxt TxllxT · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Den_Haag_-_Buitenhof_-_View_on_Hofvijver_%26_Binnenhof.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "buytenpark": {
    "label": "Buytenpark · Zoetermeer",
    "note": "",
    "photos": [
      {
        "src": "assets/media/buytenpark-1.jpg",
        "thumb": "assets/media/buytenpark-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Parkwege",
        "caption": "Wege und Grünflächen im Buytenpark bei der Skihalle.",
        "credit": "FaceMePLS from The Hague, The Netherlands · CC BY 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Buytenpark_Zoetermeer_(37064476225).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
      },
      {
        "src": "assets/media/buytenpark-2.jpg",
        "thumb": "assets/media/buytenpark-2-thumb.jpg",
        "width": 1024,
        "height": 681,
        "title": "Brücke im Park",
        "caption": "Spazierweg über eine Holzbrücke.",
        "credit": "FaceMePLS from The Hague, The Netherlands · CC BY 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Natuurgebied_Buytenpark_Zoetermeer_(4141612322).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
      },
      {
        "src": "assets/media/buytenpark-3.jpg",
        "thumb": "assets/media/buytenpark-3-thumb.jpg",
        "width": 1024,
        "height": 681,
        "title": "Grünes Zoetermeer",
        "caption": "Landschaft und offene Grünflächen im Park.",
        "credit": "FaceMePLS from The Hague, The Netherlands · CC BY 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Natuurgebied_Buytenpark_Zoetermeer_(4141613228).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
      }
    ]
  },
  "scheveningen": {
    "label": "Scheveningen",
    "note": "",
    "photos": [
      {
        "src": "assets/media/scheveningen-1.jpg",
        "thumb": "assets/media/scheveningen-1-thumb.jpg",
        "width": 1100,
        "height": 604,
        "title": "Strand & Pier",
        "caption": "Der breite Nordseestrand von Scheveningen.",
        "credit": "Chris06 · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:2017_Scheveningen_Strand_(1).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/scheveningen-2.jpg",
        "thumb": "assets/media/scheveningen-2-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Blick auf die Pier",
        "caption": "Weitere Ansicht vom Strand aus.",
        "credit": "W. Bulach · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:.00_1091_Seebad_Scheveningen_-_Niederlande.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/scheveningen-3.jpg",
        "thumb": "assets/media/scheveningen-3-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Strandpromenade",
        "caption": "Promenade und Gebäude hinter dem Strand; Archivaufnahme.",
        "credit": "W. Bulach · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:00_8650_Seebad_Scheveningen_-_Den_Haag_(NL).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "haarlem": {
    "label": "Haarlem",
    "note": "",
    "photos": [
      {
        "src": "assets/media/haarlem-1.jpg",
        "thumb": "assets/media/haarlem-1-thumb.jpg",
        "width": 1100,
        "height": 730,
        "title": "Spaarne & Altstadt",
        "caption": "Historische Häuser und Boote an der Spaarne in Haarlem.",
        "credit": "Henk Monster · CC BY 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Overvieww_of_Spaarne_with_the_Teylershouse_at_6_Februari_2015_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
      },
      {
        "src": "assets/media/haarlem-2.jpg",
        "thumb": "assets/media/haarlem-2-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Häuser an der Spaarne",
        "caption": "Typische Altstadtfassade am Wasser; Archivaufnahme.",
        "credit": "Rudolphous (talk) · CC BY-SA 3.0 nl",
        "source": "https://commons.wikimedia.org/wiki/File:Haarlem_-_Spaarne_6.JPG",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/nl/deed.en"
      }
    ]
  },
  "ijmuiden": {
    "label": "IJmuiden",
    "note": "",
    "photos": [
      {
        "src": "assets/media/ijmuiden-1.jpg",
        "thumb": "assets/media/ijmuiden-1-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Nordseestrand",
        "caption": "Breiter Strand und Nordsee bei IJmuiden.",
        "credit": "Quahadi Añtó 07:27, 4 June 2020 (UTC) · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:IJmuiden_strand_085826.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/ijmuiden-2.jpg",
        "thumb": "assets/media/ijmuiden-2-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Küste & Meer",
        "caption": "Weitere Ansicht der Küste.",
        "credit": "Quahadi Añtó 07:27, 4 June 2020 (UTC) · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:IJmuiden_strand_085708.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/ijmuiden-3.jpg",
        "thumb": "assets/media/ijmuiden-3-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Strandstimmung",
        "caption": "Archivaufnahme am Strand; Wetter und Saison können abweichen.",
        "credit": "Quahadi Añtó 07:27, 4 June 2020 (UTC) · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:IJmuiden_strand_090929.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "spaarnwoude": {
    "label": "Spaarnwoude Park",
    "note": "",
    "photos": [
      {
        "src": "assets/media/spaarnwoude-1.jpg",
        "thumb": "assets/media/spaarnwoude-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Polder & Wege",
        "caption": "Wiesen, Wasser und Wege im Spaarnwoude Park.",
        "credit": "Visit Haarlemmermeer",
        "source": "https://visithaarlemmermeer.nl/zien-doen/actief-natuur/spaarnwoude-park"
      },
      {
        "src": "assets/media/spaarnwoude-2.jpg",
        "thumb": "assets/media/spaarnwoude-2-thumb.jpg",
        "width": 960,
        "height": 720,
        "title": "Park aus der Luft",
        "caption": "Luftaufnahme der grünen Landschaft.",
        "credit": "Visit Haarlemmermeer",
        "source": "https://visithaarlemmermeer.nl/zien-doen/actief-natuur/spaarnwoude-park"
      },
      {
        "src": "assets/media/spaarnwoude-3.jpg",
        "thumb": "assets/media/spaarnwoude-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Freizeitlandschaft",
        "caption": "Golf- und Grünflächen im Erholungsgebiet Spaarnwoude.",
        "credit": "MarketingGolfbaanSpaarnwoude · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Golfbaan_Spaarnwoude_.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "amsterdam-city": {
    "label": "Amsterdam · Grachten",
    "note": "Archivaufnahmen, keine Live-Bilder. Der heutige Betrieb kann abweichen.",
    "photos": [
      {
        "src": "assets/media/amsterdam-city-1.jpg",
        "thumb": "assets/media/amsterdam-city-1-thumb.jpg",
        "width": 1100,
        "height": 663,
        "title": "Grachten & Altstadthäuser",
        "caption": "Prinsengracht in Amsterdam. Archivaufnahme; Wetter und Jahreszeit können abweichen.",
        "credit": "Zairon",
        "source": "https://commons.wikimedia.org/wiki/File:Amsterdam_Prinsengracht_29.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/amsterdam-city-2.jpg",
        "thumb": "assets/media/amsterdam-city-2-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Abend an der Gracht",
        "caption": "Blick auf die Prinsengracht in der Abenddämmerung; Archivfoto.",
        "credit": "Aforaseem",
        "source": "https://commons.wikimedia.org/wiki/File:Prinsengracht_Amsterdam.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "zoetermeer-city": {
    "label": "Zoetermeer · Stadshart",
    "note": "Archivaufnahmen, keine Live-Bilder. Wetter, Läden und Einrichtung können heute abweichen.",
    "photos": [
      {
        "src": "assets/media/zoetermeer-city-1.jpg",
        "thumb": "assets/media/zoetermeer-city-1-thumb.jpg",
        "width": 1100,
        "height": 827,
        "title": "Stadhuisplein & Passage",
        "caption": "Das moderne Stadshart in Zoetermeer; Archivfoto vom 08.05.2008.",
        "credit": "S.J. de Waard",
        "source": "https://commons.wikimedia.org/wiki/File:Zoetermeer_Stadhuisplein_met_ingang_Stadshart_Passage.jpg",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
      },
      {
        "src": "assets/media/zoetermeer-city-2.jpg",
        "thumb": "assets/media/zoetermeer-city-2-thumb.jpg",
        "width": 1100,
        "height": 827,
        "title": "Spazio im Stadshart",
        "caption": "Einkaufsgebäude im Zentrum von Zoetermeer; Archivaufnahme.",
        "credit": "S.J. de Waard",
        "source": "https://commons.wikimedia.org/wiki/File:Zoetermeer_Stadshart_Spazio.JPG",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
      }
    ]
  },
  "landgraaf-city": {
    "label": "Landgraaf · Schaesberg",
    "note": "Archivaufnahmen, keine Live-Bilder. Wetter, Läden und Einrichtung können heute abweichen.",
    "photos": [
      {
        "src": "assets/media/landgraaf-city-1.jpg",
        "thumb": "assets/media/landgraaf-city-1-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Ortskern Schaesberg",
        "caption": "Kirche und Straßen im Ortsteil Schaesberg; ein kleiner Ortskern von Landgraaf.",
        "credit": "Romaine",
        "source": "https://commons.wikimedia.org/wiki/File:Schaesberg-Sint-Petrus_en_Pauluskerk_(1).jpg",
        "license": "CC0",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
      },
      {
        "src": "assets/media/landgraaf-city-2.jpg",
        "thumb": "assets/media/landgraaf-city-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Blick durch Schaesberg",
        "caption": "Zweite Perspektive im selben Ortskern; Archivaufnahme, kein Bild einer Großstadt.",
        "credit": "Romaine",
        "source": "https://commons.wikimedia.org/wiki/File:Schaesberg-Sint-Petrus_en_Pauluskerk_(4).jpg",
        "license": "CC0",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
      }
    ]
  },
  "maastricht-city": {
    "label": "Maastricht · Altstadt",
    "note": "Archivaufnahmen, keine Live-Bilder. Wetter, Läden und Einrichtung können heute abweichen.",
    "photos": [
      {
        "src": "assets/media/maastricht-city-1.jpg",
        "thumb": "assets/media/maastricht-city-1-thumb.jpg",
        "width": 1100,
        "height": 817,
        "title": "Straße am Vrijthof",
        "caption": "Altstadtstraße mit Terrassen nahe Vrijthof; Archivfoto vom 19.08.2017.",
        "credit": "Berthold Werner",
        "source": "https://commons.wikimedia.org/wiki/File:Maastricht_Vrijthof_15_BW_2017-08-19_12-06-24.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/maastricht-city-2.jpg",
        "thumb": "assets/media/maastricht-city-2-thumb.jpg",
        "width": 1100,
        "height": 277,
        "title": "Vrijthof als Panorama",
        "caption": "Weiter Blick über Vrijthof, früh morgens am 18.06.2006 aufgenommen; tagsüber ist der Platz belebter.",
        "credit": "Arne Hückelheim",
        "source": "https://commons.wikimedia.org/wiki/File:VrijthofMaastricht.JPG",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
      }
    ]
  },
  "siberie": {
    "label": "Siberië · Amsterdam",
    "note": "Archivaufnahmen, keine Live-Bilder. Wetter, Läden und Einrichtung können heute abweichen.",
    "photos": [
      {
        "src": "assets/media/siberie-1.jpg",
        "thumb": "assets/media/siberie-1-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Shop an der Brouwersgracht",
        "caption": "Veröffentlichte Außenansicht des Siberië an der Brouwersgracht in Amsterdam.",
        "credit": "Shopprofil Greenmeister",
        "source": "https://greenmeister.com/coffeeshop/siberie-amsterdam"
      },
      {
        "src": "assets/media/siberie-2.jpg",
        "thumb": "assets/media/siberie-2-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Innenraum & Theke",
        "caption": "Veröffentlichte Innenaufnahme von Siberië; Einrichtung kann sich ändern.",
        "credit": "Shopprofil Greenmeister",
        "source": "https://greenmeister.com/coffeeshop/siberie-amsterdam"
      }
    ]
  }
};
const MEDIA_PLACES = {
  "Thermae 2000, Valkenburg": "thermae2000",
  "Valkenburg aan de Geul": "valkenburg",
  "Brunssummerheide, Toeristenweg, Landgraaf": "brunssummerheide",
  "Mondo Verde, Landgraaf": "mondoverde",
  "Fluweelengrot Valkenburg": "fluweelengrot",
  "GaiaZOO Kerkrade": "gaiazoo",
  "Elysium, Bleiswijk": "elysium",
  "Den Haag Centrum": "denhaag",
  "Buytenpark, Zoetermeer": "buytenpark",
  "Scheveningen Strand": "scheveningen",
  "Duinrell, Wassenaar": "duinrell",
  "Mauritshuis Den Haag": "mauritshuis",
  "Grote Markt, Haarlem": "haarlem",
  "IJmuiden Strand": "ijmuiden",
  "Spaarnwoude, Velsen-Zuid": "spaarnwoude",
  "Sauna van Egmond, Haarlem": "egmond",
  "Teylers Museum Haarlem": "teylers",
  "Amsterdam Centraal, Amsterdam": "amsterdam-city",
  "Stadshart Zoetermeer": "zoetermeer-city",
  "Markt, Schaesberg, Landgraaf": "landgraaf-city",
  "Vrijthof, Maastricht": "maastricht-city"
};
const MEDIA_SHOPS = {
  "Down Under|Kerkrade": "downunder",
  "Casa|Zoetermeer": "casa",
  "Cremers|Den Haag": "cremers",
  "Birdy|Haarlem": "birdy",
  "Siberië|Amsterdam": "siberie"
};
