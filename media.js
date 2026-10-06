"use strict";
// Veröffentlichte Aufnahmen, keine Live-Bilder. Bildnachweise: assets/media/credits.json.
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
  "hotel-10321": {
    "label": "Bastion Hotel Roosendaal",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10321-1.jpg",
        "thumb": "assets/media/hotel-10321-1-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Zimmerbeispiel",
        "caption": "Bastion Hotel Roosendaal: veröffentlichtes Zimmerfoto.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-roosendaal"
      },
      {
        "src": "assets/media/hotel-10321-2.jpg",
        "thumb": "assets/media/hotel-10321-2-thumb.jpg",
        "width": 754,
        "height": 540,
        "title": "Badbeispiel",
        "caption": "Bastion Hotel Roosendaal: Beispiel eines Badezimmers.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-roosendaal"
      },
      {
        "src": "assets/media/hotel-10321-3.jpg",
        "thumb": "assets/media/hotel-10321-3-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Außenansicht",
        "caption": "Bastion Hotel Roosendaal: das Hotel von außen.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-roosendaal"
      }
    ]
  },
  "hotel-10309": {
    "label": "Bastion Hotel Breda",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10309-1.jpg",
        "thumb": "assets/media/hotel-10309-1-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Zimmerbeispiel",
        "caption": "Bastion Hotel Breda: veröffentlichtes Zimmerfoto.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-breda"
      },
      {
        "src": "assets/media/hotel-10309-2.jpg",
        "thumb": "assets/media/hotel-10309-2-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Badbeispiel",
        "caption": "Bastion Hotel Breda: Beispiel eines Badezimmers.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-breda"
      },
      {
        "src": "assets/media/hotel-10309-3.jpg",
        "thumb": "assets/media/hotel-10309-3-thumb.jpg",
        "width": 780,
        "height": 520,
        "title": "Außenansicht",
        "caption": "Bastion Hotel Breda: das Hotel von außen.",
        "credit": "Bastion Hotels",
        "source": "https://www.bastionhotels.com/en-gb/hotels/hotel-breda"
      }
    ]
  },
  "hotel-4238772": {
    "label": "Hotel Hoevevoorde",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-4238772-1.jpg",
        "thumb": "assets/media/hotel-4238772-1-thumb.jpg",
        "width": 624,
        "height": 408,
        "title": "Comfort-Zimmer",
        "caption": "Zimmerbeispiel im Hotel Hoevevoorde.",
        "credit": "Hotel Hoevevoorde",
        "source": "https://hotelhoevevoorde.nl/"
      },
      {
        "src": "assets/media/hotel-4238772-2.jpg",
        "thumb": "assets/media/hotel-4238772-2-thumb.jpg",
        "width": 1100,
        "height": 535,
        "title": "Hotelgebäude",
        "caption": "Das Hotel in der grünen Umgebung von Rijswijk.",
        "credit": "Hotel Hoevevoorde",
        "source": "https://hotelhoevevoorde.nl/"
      },
      {
        "src": "assets/media/hotel-4238772-3.jpg",
        "thumb": "assets/media/hotel-4238772-3-thumb.jpg",
        "width": 624,
        "height": 408,
        "title": "Luxury-Zimmer als Beispiel",
        "caption": "Beispiel einer höheren Zimmerkategorie; diese Kategorie ist zum angezeigten Preis nicht bestätigt.",
        "credit": "Hotel Hoevevoorde",
        "source": "https://hotelhoevevoorde.nl/"
      }
    ]
  },
  "hotel-10967": {
    "label": "PLAZA Premium Grand Winston",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-10967-1.jpg",
        "thumb": "assets/media/hotel-10967-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Zimmerbeispiel",
        "caption": "Veröffentlichtes Doppelzimmerfoto im Grand Winston.",
        "credit": "PLAZA Hotelgroup",
        "source": "https://plazahotels.de/en/hotels/hotel-den-haag"
      },
      {
        "src": "assets/media/hotel-10967-2.jpg",
        "thumb": "assets/media/hotel-10967-2-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Lobby",
        "caption": "Innenbereich des Hotels in Rijswijk.",
        "credit": "PLAZA Hotelgroup",
        "source": "https://plazahotels.de/en/hotels/hotel-den-haag"
      },
      {
        "src": "assets/media/hotel-10967-3.jpg",
        "thumb": "assets/media/hotel-10967-3-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Zimmer & Bad",
        "caption": "Weitere Ansicht eines Gästezimmers mit Bad.",
        "credit": "PLAZA Hotelgroup",
        "source": "https://plazahotels.de/en/hotels/hotel-den-haag"
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
  "hotel-11456": {
    "label": "Hotel Middelburg",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-11456-1.jpg",
        "thumb": "assets/media/hotel-11456-1-thumb.jpg",
        "width": 680,
        "height": 383,
        "title": "Zimmerbeispiel",
        "caption": "Zimmerfoto des Hotels Middelburg.",
        "credit": "Hotel Middelburg",
        "source": "https://www.hotelmiddelburg.nl/"
      },
      {
        "src": "assets/media/hotel-11456-2.jpg",
        "thumb": "assets/media/hotel-11456-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Außenansicht",
        "caption": "Das Hotel Middelburg von außen.",
        "credit": "Hotel Middelburg",
        "source": "https://www.hotelmiddelburg.nl/"
      },
      {
        "src": "assets/media/hotel-11456-3.jpg",
        "thumb": "assets/media/hotel-11456-3-thumb.jpg",
        "width": 680,
        "height": 383,
        "title": "Weiteres Zimmerbeispiel",
        "caption": "Weitere Gästezimmeransicht; Kategorie im Angebot prüfen.",
        "credit": "Hotel Middelburg",
        "source": "https://www.hotelmiddelburg.nl/"
      }
    ]
  },
  "hotel-14274728": {
    "label": "Sweet Dreams B&B",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-14274728-1.jpg",
        "thumb": "assets/media/hotel-14274728-1-thumb.jpg",
        "width": 576,
        "height": 768,
        "title": "Zimmerbeispiel",
        "caption": "Gästezimmer im Sweet Dreams B&B in Middelburg.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/sweetdream.html"
      },
      {
        "src": "assets/media/hotel-14274728-2.jpg",
        "thumb": "assets/media/hotel-14274728-2-thumb.jpg",
        "width": 500,
        "height": 233,
        "title": "Blick ins Zimmer",
        "caption": "Weitere Ansicht des Gästezimmers.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/sweetdream.html"
      },
      {
        "src": "assets/media/hotel-14274728-3.jpg",
        "thumb": "assets/media/hotel-14274728-3-thumb.jpg",
        "width": 300,
        "height": 225,
        "title": "Küchenbereich",
        "caption": "Veröffentlichter Küchenbereich der Unterkunft; Ausstattung im Angebot prüfen.",
        "credit": "Unterkunft / Booking.com",
        "source": "https://www.booking.com/hotel/nl/sweetdream.html"
      }
    ]
  },
  "hotel-11542": {
    "label": "Boutique Hotel de Statie",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-11542-1.jpg",
        "thumb": "assets/media/hotel-11542-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Zimmerbeispiel",
        "caption": "Zimmer mit Wandmotiv im Hotel de Statie in Valkenswaard.",
        "credit": "Hotel de Statie",
        "source": "https://www.hoteldestatie.nl/"
      },
      {
        "src": "assets/media/hotel-11542-2.jpg",
        "thumb": "assets/media/hotel-11542-2-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Badbeispiel",
        "caption": "Veröffentlichtes Badezimmerfoto.",
        "credit": "Hotel de Statie",
        "source": "https://www.hoteldestatie.nl/"
      },
      {
        "src": "assets/media/hotel-11542-3.jpg",
        "thumb": "assets/media/hotel-11542-3-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Empfangsbereich",
        "caption": "Innenbereich des Boutique-Hotels.",
        "credit": "Hotel de Statie",
        "source": "https://www.hoteldestatie.nl/"
      }
    ]
  },
  "hotel-1718578": {
    "label": "B&B van Dinter",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-1718578-1.jpg",
        "thumb": "assets/media/hotel-1718578-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Zimmerbeispiel",
        "caption": "Zimmerbeispiel",
        "credit": "B&B van Dinter / Bedandbreakfast.nl",
        "source": "https://www.bedandbreakfast.nl/en/a/OUCD5wPQOwCY/bb-van-dinter"
      },
      {
        "src": "assets/media/hotel-1718578-2.jpg",
        "thumb": "assets/media/hotel-1718578-2-thumb.jpg",
        "width": 1100,
        "height": 731,
        "title": "Unterkunft im Grünen",
        "caption": "Das Gebäude mit Terrasse im Garten.",
        "credit": "B&B van Dinter / Bedandbreakfast.nl",
        "source": "https://www.bedandbreakfast.nl/en/a/OUCD5wPQOwCY/bb-van-dinter"
      },
      {
        "src": "assets/media/hotel-1718578-3.jpg",
        "thumb": "assets/media/hotel-1718578-3-thumb.jpg",
        "width": 1100,
        "height": 671,
        "title": "Frühstücksbereich",
        "caption": "Gemeinschaftlicher Innenbereich des B&Bs.",
        "credit": "B&B van Dinter / Bedandbreakfast.nl",
        "source": "https://www.bedandbreakfast.nl/en/a/OUCD5wPQOwCY/bb-van-dinter"
      }
    ]
  },
  "hotel-15650975": {
    "label": "Eighty One Horse Boulevard B&B",
    "note": "Zimmerbeispiele der Unterkunft. Welche Zimmerkategorie zum angezeigten Preis buchbar ist, steht im verlinkten Angebot.",
    "photos": [
      {
        "src": "assets/media/hotel-15650975-1.jpg",
        "thumb": "assets/media/hotel-15650975-1-thumb.jpg",
        "width": 632,
        "height": 850,
        "title": "Zimmerbeispiel",
        "caption": "Gästezimmer im B&B in Valkenswaard.",
        "credit": "Unterkunft / Visit Valkenswaard",
        "source": "https://www.visitvalkenswaard.nl/nl/locaties/3569856544/bed-breakfast-eighty-one-horse-boulevard"
      },
      {
        "src": "assets/media/hotel-15650975-2.jpg",
        "thumb": "assets/media/hotel-15650975-2-thumb.jpg",
        "width": 703,
        "height": 850,
        "title": "Sitzbereich",
        "caption": "Innenbereich der Unterkunft.",
        "credit": "Unterkunft / Visit Valkenswaard",
        "source": "https://www.visitvalkenswaard.nl/nl/locaties/3569856544/bed-breakfast-eighty-one-horse-boulevard"
      },
      {
        "src": "assets/media/hotel-15650975-3.jpg",
        "thumb": "assets/media/hotel-15650975-3-thumb.jpg",
        "width": 598,
        "height": 850,
        "title": "Badbeispiel",
        "caption": "Badezimmer der Unterkunft als Beispiel.",
        "credit": "Unterkunft / Visit Valkenswaard",
        "source": "https://www.visitvalkenswaard.nl/nl/locaties/3569856544/bed-breakfast-eighty-one-horse-boulevard"
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
  "spavarin": {
    "label": "Cityspa Spavarin",
    "note": "",
    "photos": [
      {
        "src": "assets/media/spavarin-1.jpg",
        "thumb": "assets/media/spavarin-1-thumb.jpg",
        "width": 1100,
        "height": 734,
        "title": "Innenpool",
        "caption": "Poolbereich im Cityspa Spavarin.",
        "credit": "Spavarin / Marieke Zelisse Photography",
        "source": "https://savarin.nl/faciliteiten/"
      },
      {
        "src": "assets/media/spavarin-2.jpg",
        "thumb": "assets/media/spavarin-2-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Außensauna",
        "caption": "Fasssauna im Garten des Spas.",
        "credit": "Spavarin / Marieke Zelisse Photography",
        "source": "https://savarin.nl/faciliteiten/"
      },
      {
        "src": "assets/media/spavarin-3.jpg",
        "thumb": "assets/media/spavarin-3-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Wellnessbereich",
        "caption": "Veröffentlichte Aufnahme im Wellnessbereich.",
        "credit": "Spavarin / Marieke Zelisse Photography",
        "source": "https://savarin.nl/faciliteiten/"
      }
    ]
  },
  "vitae": {
    "label": "Vitae Wellnessresort Goes",
    "note": "",
    "photos": [
      {
        "src": "assets/media/vitae-1.jpg",
        "thumb": "assets/media/vitae-1-thumb.jpg",
        "width": 838,
        "height": 850,
        "title": "Außenpool",
        "caption": "Pool und Garten im Vitae Wellnessresort Goes.",
        "credit": "Vitae Wellnessresort",
        "source": "https://vitaewellnessresortgoes.nl/"
      },
      {
        "src": "assets/media/vitae-2.jpg",
        "thumb": "assets/media/vitae-2-thumb.jpg",
        "width": 838,
        "height": 850,
        "title": "Pool & Liegebereich",
        "caption": "Weitere veröffentlichte Ansicht des Außenbereichs.",
        "credit": "Vitae Wellnessresort",
        "source": "https://vitaewellnessresortgoes.nl/"
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
  "spaone": {
    "label": "Spa One",
    "note": "",
    "photos": [
      {
        "src": "assets/media/spaone-1.jpg",
        "thumb": "assets/media/spaone-1-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Poolbereich",
        "caption": "Veröffentlichtes Foto im Spa One bei Oosterhout.",
        "credit": "Spa One",
        "source": "https://www.spaone.nl/"
      },
      {
        "src": "assets/media/spaone-2.jpg",
        "thumb": "assets/media/spaone-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Sauna",
        "caption": "Saunabereich des Resorts.",
        "credit": "Spa One",
        "source": "https://www.spaone.nl/"
      },
      {
        "src": "assets/media/spaone-3.jpg",
        "thumb": "assets/media/spaone-3-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Ruheraum",
        "caption": "Liege- und Entspannungsbereich im Spa One.",
        "credit": "Spa One",
        "source": "https://www.spaone.nl/"
      }
    ]
  },
  "spasense": {
    "label": "SpaSense",
    "note": "",
    "photos": [
      {
        "src": "assets/media/spasense-1.jpg",
        "thumb": "assets/media/spasense-1-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Innenpool",
        "caption": "Pool im SpaSense in Geldrop.",
        "credit": "SpaSense",
        "source": "https://spasense.nl/faciliteiten"
      },
      {
        "src": "assets/media/spasense-2.jpg",
        "thumb": "assets/media/spasense-2-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Sauna",
        "caption": "Saunabereich mit Salzsteinwand.",
        "credit": "SpaSense",
        "source": "https://spasense.nl/faciliteiten"
      },
      {
        "src": "assets/media/spasense-3.jpg",
        "thumb": "assets/media/spasense-3-thumb.jpg",
        "width": 720,
        "height": 450,
        "title": "Ruhebereich",
        "caption": "Lounge und Ruheraum des Resorts.",
        "credit": "SpaSense",
        "source": "https://spasense.nl/faciliteiten"
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
  "drievliet": {
    "label": "Drievliet",
    "note": "",
    "photos": [
      {
        "src": "assets/media/drievliet-1.jpg",
        "thumb": "assets/media/drievliet-1-thumb.jpg",
        "width": 800,
        "height": 600,
        "title": "Stoomcycloon",
        "caption": "Veröffentlichtes Foto des Fahrgeschäfts in Drievliet.",
        "credit": "Drievliet",
        "source": "https://www.drievliet.nl/"
      },
      {
        "src": "assets/media/drievliet-2.jpg",
        "thumb": "assets/media/drievliet-2-thumb.jpg",
        "width": 500,
        "height": 500,
        "title": "Fahrgeschäft",
        "caption": "Weitere Attraktion im Familienpark bei Den Haag.",
        "credit": "Drievliet",
        "source": "https://www.drievliet.nl/"
      },
      {
        "src": "assets/media/drievliet-3.jpg",
        "thumb": "assets/media/drievliet-3-thumb.jpg",
        "width": 500,
        "height": 500,
        "title": "Parkbahn",
        "caption": "Familienbahn im Freizeitpark.",
        "credit": "Drievliet",
        "source": "https://www.drievliet.nl/"
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
  "minimundi": {
    "label": "Mini Mundi",
    "note": "",
    "photos": [
      {
        "src": "assets/media/minimundi-1.jpg",
        "thumb": "assets/media/minimundi-1-thumb.jpg",
        "width": 1100,
        "height": 347,
        "title": "Miniaturpark",
        "caption": "Miniatur einer Stadtlandschaft in Mini Mundi.",
        "credit": "Mini Mundi",
        "source": "https://minimundi.nl/"
      },
      {
        "src": "assets/media/minimundi-2.jpg",
        "thumb": "assets/media/minimundi-2-thumb.jpg",
        "width": 1100,
        "height": 347,
        "title": "Indoor-Spielbereich",
        "caption": "Innenbereich des Familienparks in Middelburg.",
        "credit": "Mini Mundi",
        "source": "https://minimundi.nl/"
      },
      {
        "src": "assets/media/minimundi-3.jpg",
        "thumb": "assets/media/minimundi-3-thumb.jpg",
        "width": 1100,
        "height": 347,
        "title": "Parkbahn",
        "caption": "Bahn im Freizeitbereich von Mini Mundi.",
        "credit": "Mini Mundi",
        "source": "https://minimundi.nl/"
      }
    ]
  },
  "portaal": {
    "label": "Portaal van Vlaanderen",
    "note": "",
    "photos": [
      {
        "src": "assets/media/portaal-1.jpg",
        "thumb": "assets/media/portaal-1-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Bootstour",
        "caption": "Veröffentlichte Aufnahme einer Tour am Hafen.",
        "credit": "Portaal van Vlaanderen",
        "source": "https://www.portaalvanvlaanderen.nl/individuele-activiteiten/"
      },
      {
        "src": "assets/media/portaal-2.jpg",
        "thumb": "assets/media/portaal-2-thumb.jpg",
        "width": 589,
        "height": 350,
        "title": "Schleusenbesichtigung",
        "caption": "Besuch am Schleusenkomplex von Terneuzen.",
        "credit": "Portaal van Vlaanderen",
        "source": "https://www.portaalvanvlaanderen.nl/individuele-activiteiten/"
      },
      {
        "src": "assets/media/portaal-3.jpg",
        "thumb": "assets/media/portaal-3-thumb.jpg",
        "width": 1100,
        "height": 778,
        "title": "Schleusen aus der Luft",
        "caption": "Archivaufnahme des Schleusenkomplexes während der Bauarbeiten 2022; heutiger Zustand kann abweichen.",
        "credit": "Portaal van Vlaanderen",
        "source": "https://www.portaalvanvlaanderen.nl/individuele-activiteiten/"
      }
    ]
  },
  "linnaeushof": {
    "label": "Linnaeushof",
    "note": "",
    "photos": [
      {
        "src": "assets/media/linnaeushof-1.jpg",
        "thumb": "assets/media/linnaeushof-1-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Spielattraktionen",
        "caption": "Rutschen und Spielangebote im Linnaeushof.",
        "credit": "Linnaeushof",
        "source": "https://www.linnaeushof.nl/"
      },
      {
        "src": "assets/media/linnaeushof-2.jpg",
        "thumb": "assets/media/linnaeushof-2-thumb.jpg",
        "width": 1100,
        "height": 321,
        "title": "Eingangsbereich",
        "caption": "Der Park in Bennebroek von außen.",
        "credit": "Linnaeushof",
        "source": "https://www.linnaeushof.nl/"
      },
      {
        "src": "assets/media/linnaeushof-3.jpg",
        "thumb": "assets/media/linnaeushof-3-thumb.jpg",
        "width": 689,
        "height": 850,
        "title": "Wasserspielbereich",
        "caption": "Sommeraufnahme des Wasserspielbereichs; Betrieb im Oktober nicht zugesagt.",
        "credit": "Linnaeushof",
        "source": "https://www.linnaeushof.nl/"
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
  "efteling": {
    "label": "Efteling",
    "note": "",
    "photos": [
      {
        "src": "assets/media/efteling-1.jpg",
        "thumb": "assets/media/efteling-1-thumb.jpg",
        "width": 1023,
        "height": 768,
        "title": "Joris en de Draak",
        "caption": "Veröffentlichtes Foto der Holzachterbahn in Efteling.",
        "credit": "Efteling",
        "source": "https://www.efteling.com/en/park"
      },
      {
        "src": "assets/media/efteling-2.jpg",
        "thumb": "assets/media/efteling-2-thumb.jpg",
        "width": 626,
        "height": 470,
        "title": "Aquanura",
        "caption": "Wassershow im Freizeitpark bei Kaatsheuvel.",
        "credit": "Efteling",
        "source": "https://www.efteling.com/en/park"
      },
      {
        "src": "assets/media/efteling-3.jpg",
        "thumb": "assets/media/efteling-3-thumb.jpg",
        "width": 626,
        "height": 470,
        "title": "Vogel Rok",
        "caption": "Eingangsbereich der Indoor-Achterbahn.",
        "credit": "Efteling",
        "source": "https://www.efteling.com/en/park"
      }
    ]
  },
  "vanabbe": {
    "label": "Van Abbemuseum",
    "note": "",
    "photos": [
      {
        "src": "assets/media/vanabbe-1.jpg",
        "thumb": "assets/media/vanabbe-1-thumb.jpg",
        "width": 480,
        "height": 320,
        "title": "Ausstellungsräume",
        "caption": "Veröffentlichter Einblick ins Van Abbemuseum in Eindhoven.",
        "credit": "Van Abbemuseum",
        "source": "https://vanabbemuseum.nl/en/plan-your-visit"
      },
      {
        "src": "assets/media/vanabbe-2.jpg",
        "thumb": "assets/media/vanabbe-2-thumb.jpg",
        "width": 480,
        "height": 320,
        "title": "Kunst im Museum",
        "caption": "Weitere Aufnahme einer Ausstellung; gezeigte Werke können wechseln.",
        "credit": "Van Abbemuseum",
        "source": "https://vanabbemuseum.nl/en/plan-your-visit"
      },
      {
        "src": "assets/media/vanabbe-3.jpg",
        "thumb": "assets/media/vanabbe-3-thumb.jpg",
        "width": 480,
        "height": 320,
        "title": "Vermittlung & Workshops",
        "caption": "Veröffentlichtes Workshopfoto; Workshops sind kein zugesagter Bestandteil des Eintritts.",
        "credit": "Van Abbemuseum",
        "source": "https://vanabbemuseum.nl/en/plan-your-visit"
      }
    ]
  },
  "aquamundo": {
    "label": "Aqua Mundo De Kempervennen",
    "note": "Die Bilder zeigen das Schwimmbad in De Kempervennen. Eintritte und Zeitfenster separat prüfen.",
    "photos": [
      {
        "src": "assets/media/aquamundo-1.jpg",
        "thumb": "assets/media/aquamundo-1-thumb.jpg",
        "width": 400,
        "height": 400,
        "title": "Badebereich",
        "caption": "Veröffentlichtes Aqua-Mundo-Foto von Center Parcs De Kempervennen.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
      },
      {
        "src": "assets/media/aquamundo-2.jpg",
        "thumb": "assets/media/aquamundo-2-thumb.jpg",
        "width": 500,
        "height": 500,
        "title": "Aqua Racer & Aqua Loop",
        "caption": "Die Wasserrutschen des Aqua Mundo in De Kempervennen.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
      }
    ]
  },
  "kempervennen": {
    "label": "De Kempervennen",
    "note": "",
    "photos": [
      {
        "src": "assets/media/kempervennen-1.jpg",
        "thumb": "assets/media/kempervennen-1-thumb.jpg",
        "width": 1100,
        "height": 303,
        "title": "See & Ferienpark",
        "caption": "Der Ferienpark De Kempervennen am Wasser.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
      },
      {
        "src": "assets/media/kempervennen-2.jpg",
        "thumb": "assets/media/kempervennen-2-thumb.jpg",
        "width": 400,
        "height": 400,
        "title": "Parklandschaft",
        "caption": "Weitere veröffentlichte Ansicht des Sees.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
      },
      {
        "src": "assets/media/kempervennen-3.jpg",
        "thumb": "assets/media/kempervennen-3-thumb.jpg",
        "width": 500,
        "height": 500,
        "title": "Wassersport",
        "caption": "Veröffentlichte Aufnahme einer Wassersportaktivität; saisonaler Betrieb und Preis separat prüfen.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
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
  "galaxy": {
    "label": "Galaxy · Den Haag",
    "note": "Statische Betreiberbilder, keine laufende Webcam.",
    "photos": [
      {
        "src": "assets/media/galaxy-1.jpg",
        "thumb": "assets/media/galaxy-1-thumb.jpg",
        "width": 350,
        "height": 183,
        "title": "Eingangsbereich",
        "caption": "Veröffentlichtes statisches Vorschaubild aus dem Galaxy-Profil.",
        "credit": "Galaxy",
        "source": "https://coffeeshopgalaxy.nl/en"
      },
      {
        "src": "assets/media/galaxy-2.jpg",
        "thumb": "assets/media/galaxy-2-thumb.jpg",
        "width": 350,
        "height": 183,
        "title": "Lounge",
        "caption": "Statisches Vorschaubild des Innenbereichs.",
        "credit": "Galaxy",
        "source": "https://coffeeshopgalaxy.nl/en"
      },
      {
        "src": "assets/media/galaxy-3.jpg",
        "thumb": "assets/media/galaxy-3-thumb.jpg",
        "width": 350,
        "height": 183,
        "title": "Freizeitbereich",
        "caption": "Weitere veröffentlichte Innenansicht; kein Live-Bild.",
        "credit": "Galaxy",
        "source": "https://coffeeshopgalaxy.nl/en"
      }
    ]
  },
  "highlife": {
    "label": "High Life · Goes",
    "note": "",
    "photos": [
      {
        "src": "assets/media/highlife-1.jpg",
        "thumb": "assets/media/highlife-1-thumb.jpg",
        "width": 140,
        "height": 140,
        "title": "Innenbereich",
        "caption": "Veröffentlichtes Foto des High Life in Goes.",
        "credit": "High Life",
        "source": "https://highlife.net/en"
      },
      {
        "src": "assets/media/highlife-2.jpg",
        "thumb": "assets/media/highlife-2-thumb.jpg",
        "width": 140,
        "height": 140,
        "title": "Lounge",
        "caption": "Weitere Betreiberaufnahme des Innenbereichs.",
        "credit": "High Life",
        "source": "https://highlife.net/en"
      },
      {
        "src": "assets/media/highlife-3.jpg",
        "thumb": "assets/media/highlife-3-thumb.jpg",
        "width": 900,
        "height": 675,
        "title": "Thekenbereich",
        "caption": "Veröffentlichtes Foto des Coffeeshops.",
        "credit": "High Life",
        "source": "https://highlife.net/en"
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
  "toermalijn": {
    "label": "Toermalijn · Tilburg",
    "note": "",
    "photos": [
      {
        "src": "assets/media/toermalijn-1.jpg",
        "thumb": "assets/media/toermalijn-1-thumb.jpg",
        "width": 800,
        "height": 850,
        "title": "Shopfront",
        "caption": "Veröffentlichte Außenaufnahme des Toermalijn.",
        "credit": "Toermalijn",
        "source": "https://www.toermalijn.com/gallery"
      },
      {
        "src": "assets/media/toermalijn-2.jpg",
        "thumb": "assets/media/toermalijn-2-thumb.jpg",
        "width": 847,
        "height": 850,
        "title": "Innenbereich",
        "caption": "Betreiberfoto des Auswahlbereichs; aktuelles Sortiment nicht zugesagt.",
        "credit": "Toermalijn",
        "source": "https://www.toermalijn.com/gallery"
      },
      {
        "src": "assets/media/toermalijn-3.jpg",
        "thumb": "assets/media/toermalijn-3-thumb.jpg",
        "width": 847,
        "height": 850,
        "title": "Garten",
        "caption": "Veröffentlichtes Foto des Gartens beim Coffeeshop.",
        "credit": "Toermalijn",
        "source": "https://www.toermalijn.com/gallery"
      }
    ]
  },
  "thepink": {
    "label": "The Pink · Eindhoven",
    "note": "",
    "photos": [
      {
        "src": "assets/media/thepink-1.jpg",
        "thumb": "assets/media/thepink-1-thumb.jpg",
        "width": 767,
        "height": 550,
        "title": "Shopfront",
        "caption": "Öffentliche Außenaufnahme des The Pink in Eindhoven.",
        "credit": "Greenmeister / The Pink",
        "source": "https://greenmeister.com/coffeeshop/the-pink-eindhoven"
      },
      {
        "src": "assets/media/thepink-2.jpg",
        "thumb": "assets/media/thepink-2-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Innenbereich",
        "caption": "Veröffentlichtes Innenfoto im Profil des lokalen Coffeeshopverbands.",
        "credit": "Lokaler Coffeeshopverband Eindhoven / The Pink",
        "source": "https://coffeeshopeindhoven.nl/details.html?id=pink"
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
  "kijkduin": {
    "label": "Kijkduin",
    "note": "",
    "photos": [
      {
        "src": "assets/media/kijkduin-1.jpg",
        "thumb": "assets/media/kijkduin-1-thumb.jpg",
        "width": 1062,
        "height": 850,
        "title": "Nordseestrand",
        "caption": "Strand und Meer bei Kijkduin.",
        "credit": "Edo de Roo · CC BY 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Strand_Kijkduin_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
      },
      {
        "src": "assets/media/kijkduin-2.jpg",
        "thumb": "assets/media/kijkduin-2-thumb.jpg",
        "width": 1100,
        "height": 733,
        "title": "Dünen am Abend",
        "caption": "Abendlicht über den Dünen am Strand.",
        "credit": "Smiley.toerist · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Strand_bij_Kijkduin_2022_2.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/kijkduin-3.jpg",
        "thumb": "assets/media/kijkduin-3-thumb.jpg",
        "width": 1100,
        "height": 670,
        "title": "Spaziergang am Meer",
        "caption": "Weitere Strandaufnahme; Wetter und Jahreszeit können abweichen.",
        "credit": "Nanda Sluijsmans from Den Haag, Nederland · CC BY-SA 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Kijkduin_strand_(51094230923).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
      }
    ]
  },
  "westduinpark": {
    "label": "Westduinpark",
    "note": "",
    "photos": [
      {
        "src": "assets/media/westduinpark-1.jpg",
        "thumb": "assets/media/westduinpark-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Dünen & Stadtblick",
        "caption": "Dünenlandschaft im Westduinpark mit Den Haag im Hintergrund.",
        "credit": "Tukka · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:The_Hague_skyline_from_Westduinpark_2020.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/westduinpark-2.jpg",
        "thumb": "assets/media/westduinpark-2-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Wasser im Dünenpark",
        "caption": "Grüne Wege und Wasserflächen im Naturgebiet.",
        "credit": "Tukka · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Lake_Westduinpark_The_Hague_2020.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/westduinpark-3.jpg",
        "thumb": "assets/media/westduinpark-3-thumb.jpg",
        "width": 1100,
        "height": 796,
        "title": "Tiere im Park",
        "caption": "Archivaufnahme eines Hochlandrinds im Westduinpark; Sichtung nicht garantiert.",
        "credit": "Trougnouf (Benoit Brummer) · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Scottish_Highland_cow_in_Westduinpark,_The_Hague_(DSCF1446).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
      }
    ]
  },
  "terneuzen": {
    "label": "Terneuzen & Schelde",
    "note": "",
    "photos": [
      {
        "src": "assets/media/terneuzen-1.jpg",
        "thumb": "assets/media/terneuzen-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Spaziergang an der Schelde",
        "caption": "Uferweg, Deich und Schiffsverkehr bei Terneuzen.",
        "credit": "Michiel1972 · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Terneuzen_Westerschelde.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/terneuzen-2.jpg",
        "thumb": "assets/media/terneuzen-2-thumb.jpg",
        "width": 1100,
        "height": 639,
        "title": "Schelde aus der Luft",
        "caption": "Die Lage von Terneuzen an der Westerschelde aus der Luft.",
        "credit": "Milliped · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_Terneuzen-Westerschelde22OCT2022.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/terneuzen-3.jpg",
        "thumb": "assets/media/terneuzen-3-thumb.jpg",
        "width": 512,
        "height": 384,
        "title": "Scheldeboulevard · Archiv",
        "caption": "Ältere Aufnahme der Bebauung am Scheldeboulevard; heutige Details können abweichen.",
        "credit": "Nlm15 at Dutch Wikipedia · Public domain",
        "source": "https://commons.wikimedia.org/wiki/File:Terneuzen_-_Skyline_langs_de_Westerschelde.jpg"
      }
    ]
  },
  "breskens": {
    "label": "Breskens",
    "note": "",
    "photos": [
      {
        "src": "assets/media/breskens-1.jpg",
        "thumb": "assets/media/breskens-1-thumb.jpg",
        "width": 1024,
        "height": 768,
        "title": "Strand & Dünen",
        "caption": "Blick über die Dünen zum Strand bei Breskens.",
        "credit": "Petra de Boevere · CC BY 2.0",
        "source": "https://commons.wikimedia.org/wiki/File:Breskens_strand.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
      },
      {
        "src": "assets/media/breskens-2.jpg",
        "thumb": "assets/media/breskens-2-thumb.jpg",
        "width": 1100,
        "height": 731,
        "title": "Meer & Buhnen",
        "caption": "Nordseeküste bei Breskens.",
        "credit": "spiecim · CC BY 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Strand_bei_Breskens_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
      },
      {
        "src": "assets/media/breskens-3.jpg",
        "thumb": "assets/media/breskens-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Breiter Strand",
        "caption": "Weitere Strandansicht; Archivaufnahme.",
        "credit": "Dozent · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Breskens_Strand.JPG",
        "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/"
      }
    ]
  },
  "goes-middelburg": {
    "label": "Goes & Middelburg",
    "note": "",
    "photos": [
      {
        "src": "assets/media/goes-middelburg-1.jpg",
        "thumb": "assets/media/goes-middelburg-1-thumb.jpg",
        "width": 1100,
        "height": 278,
        "title": "Goes · Hafen am Abend",
        "caption": "Der historische Hafen von Goes am Abend.",
        "credit": "Sorin Lingureanu · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:City_harbor_of_Goes,_the_Netherlands.jpg",
        "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/"
      },
      {
        "src": "assets/media/goes-middelburg-2.jpg",
        "thumb": "assets/media/goes-middelburg-2-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Goes · Altstadt am Wasser",
        "caption": "Häuser und Boote am Stadthafen.",
        "credit": "Tukka · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:City_Harbor_of_Goes_2020.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/goes-middelburg-3.jpg",
        "thumb": "assets/media/goes-middelburg-3-thumb.jpg",
        "width": 1100,
        "height": 657,
        "title": "Middelburg · Markt",
        "caption": "Das historische Rathaus und der Markt von Middelburg.",
        "credit": "Marc Ryckaert · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Middelburg_Markt_R01.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
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
  "rucphensebossen": {
    "label": "Rucphense Bossen",
    "note": "",
    "photos": [
      {
        "src": "assets/media/rucphensebossen-1.jpg",
        "thumb": "assets/media/rucphensebossen-1-thumb.jpg",
        "width": 1100,
        "height": 595,
        "title": "Spazierwege im Wald",
        "caption": "Waldweg im Naturgebiet Rucphense Bossen.",
        "credit": "Natuurmonumenten",
        "source": "https://www.natuurmonumenten.nl/node/985"
      },
      {
        "src": "assets/media/rucphensebossen-2.jpg",
        "thumb": "assets/media/rucphensebossen-2-thumb.jpg",
        "width": 800,
        "height": 480,
        "title": "Waldlandschaft",
        "caption": "Grüner Wald und Unterwuchs im Naturgebiet.",
        "credit": "Natuurmonumenten",
        "source": "https://www.natuurmonumenten.nl/node/985"
      },
      {
        "src": "assets/media/rucphensebossen-3.jpg",
        "thumb": "assets/media/rucphensebossen-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Heideflächen",
        "caption": "Heide und sandiger Weg zwischen den Waldflächen.",
        "credit": "Jan Benoist / West Brabantse Vogelwerkgroep",
        "source": "https://www.westbrabantsevwg.nl/gebiedsbeschrijvingen/westen-rucphense-bossen/"
      }
    ]
  },
  "breda": {
    "label": "Breda",
    "note": "",
    "photos": [
      {
        "src": "assets/media/breda-1.jpg",
        "thumb": "assets/media/breda-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Grote Markt",
        "caption": "Terrassen und die Grote Kerk im Zentrum von Breda.",
        "credit": "G.Lanting · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:P1030216_copyGrote_Markt_Breda.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      {
        "src": "assets/media/breda-2.jpg",
        "thumb": "assets/media/breda-2-thumb.jpg",
        "width": 1062,
        "height": 850,
        "title": "Altstadtstraße",
        "caption": "Spaziergang durch die Innenstadt.",
        "credit": "Renée Kools · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Breda_Sint_Janstraat_zicht_op_de_Grote_Markt_2024-09-20.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
      },
      {
        "src": "assets/media/breda-3.jpg",
        "thumb": "assets/media/breda-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Cafés am Markt",
        "caption": "Weitere Ansicht am Grote Markt; Archivaufnahme.",
        "credit": "G.Lanting · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Horeca_Grote_Markt_Breda_DSCF8391.JPG",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "mastbos": {
    "label": "Mastbos",
    "note": "",
    "photos": [
      {
        "src": "assets/media/mastbos-1.jpg",
        "thumb": "assets/media/mastbos-1-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Waldallee",
        "caption": "Breiter Spazierweg im Mastbos südlich von Breda.",
        "credit": "Renée Kools · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mastbos_Torendreef_2024-05-01-3.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
      },
      {
        "src": "assets/media/mastbos-2.jpg",
        "thumb": "assets/media/mastbos-2-thumb.jpg",
        "width": 1064,
        "height": 850,
        "title": "Waldlandschaft",
        "caption": "Wald und grüne Wege im Naturgebiet.",
        "credit": "Renée Kools · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mastbos_2024-05-01-4.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
      },
      {
        "src": "assets/media/mastbos-3.jpg",
        "thumb": "assets/media/mastbos-3-thumb.jpg",
        "width": 1100,
        "height": 825,
        "title": "Schmale Waldwege",
        "caption": "Ruhiger Weg zwischen Bäumen; Archivaufnahme.",
        "credit": "Renée Kools · CC BY 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Mastbos_2024-05-01-2.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
      }
    ]
  },
  "malpie": {
    "label": "De Malpie",
    "note": "",
    "photos": [
      {
        "src": "assets/media/malpie-1.jpg",
        "thumb": "assets/media/malpie-1-thumb.jpg",
        "width": 640,
        "height": 480,
        "title": "Heidelandschaft",
        "caption": "Veröffentlichtes Bild der Malpie bei Valkenswaard.",
        "credit": "Center Parcs / De Kempervennen",
        "source": "https://www.centerparcs.nl/nl-nl/nederland/fp_KV_vakantiepark-de-kempervennen"
      },
      {
        "src": "assets/media/malpie-2.jpg",
        "thumb": "assets/media/malpie-2-thumb.jpg",
        "width": 1100,
        "height": 731,
        "title": "Wasser & Heide",
        "caption": "Wasserflächen und Vegetation im Naturgebiet.",
        "credit": "Hikerbiker · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:De_Malpie.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      },
      {
        "src": "assets/media/malpie-3.jpg",
        "thumb": "assets/media/malpie-3-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "Spaziergang im Naturgebiet",
        "caption": "Archivaufnahme einer Wasserfläche zwischen Bäumen; Winterstimmung.",
        "credit": "Dennal/Dennis Klein · CC BY-SA 4.0",
        "source": "https://commons.wikimedia.org/wiki/File:Een_van_de_vele_vennen_in_de_malpie.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
      }
    ]
  },
  "eindhoven": {
    "label": "Eindhoven",
    "note": "",
    "photos": [
      {
        "src": "assets/media/eindhoven-1.jpg",
        "thumb": "assets/media/eindhoven-1-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "De Blob im Zentrum",
        "caption": "Moderne Architektur und Einkaufsstraßen in Eindhoven.",
        "credit": "Ralph van Roosmalen · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Eindhoven,_city_center_-_panoramio.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      {
        "src": "assets/media/eindhoven-2.jpg",
        "thumb": "assets/media/eindhoven-2-thumb.jpg",
        "width": 637,
        "height": 850,
        "title": "Innenstadt",
        "caption": "Weitere Ansicht des Stadtzentrums.",
        "credit": "Ralph van Roosmalen · CC BY-SA 3.0",
        "source": "https://commons.wikimedia.org/wiki/File:Eindhoven,_city_center_-_panoramio_(1).jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      {
        "src": "assets/media/eindhoven-3.jpg",
        "thumb": "assets/media/eindhoven-3-thumb.jpg",
        "width": 1100,
        "height": 619,
        "title": "De Witte Dame",
        "caption": "Architekturdetail und Durchgang im Zentrum von Eindhoven.",
        "credit": "Romaine · CC0",
        "source": "https://commons.wikimedia.org/wiki/File:Eindhoven-Witte_Dame_(5).jpg",
        "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
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
  "Drievliet, Den Haag": "drievliet",
  "Mauritshuis Den Haag": "mauritshuis",
  "Kijkduin Strand, Den Haag": "kijkduin",
  "Westduinpark, Den Haag": "westduinpark",
  "Cityspa Spavarin, Rijswijk": "spavarin",
  "Scheldeboulevard, Terneuzen": "terneuzen",
  "Breskens Strand": "breskens",
  "Goes Centrum": "goes-middelburg",
  "Vitae Wellnessresort Goes": "vitae",
  "Mini Mundi, Middelburg": "minimundi",
  "Portaal van Vlaanderen Terneuzen": "portaal",
  "Grote Markt, Haarlem": "haarlem",
  "IJmuiden Strand": "ijmuiden",
  "Spaarnwoude, Velsen-Zuid": "spaarnwoude",
  "Sauna van Egmond, Haarlem": "egmond",
  "Linnaeushof, Bennebroek": "linnaeushof",
  "Teylers Museum Haarlem": "teylers",
  "Rucphense Bossen, Postbaan, Rucphen": "rucphensebossen",
  "Grote Markt, Breda": "breda",
  "Spa One, Oosterhout": "spaone",
  "Efteling, Kaatsheuvel": "efteling",
  "Mastbos Breda": "mastbos",
  "Malpie, Valkenswaard": "malpie",
  "Eindhoven Centrum": "eindhoven",
  "SpaSense, Geldrop": "spasense",
  "Aqua Mundo De Kempervennen": "aquamundo",
  "Van Abbemuseum Eindhoven": "vanabbe"
};
const MEDIA_SHOPS = {
  "Down Under|Kerkrade": "downunder",
  "Casa|Zoetermeer": "casa",
  "Cremers|Den Haag": "cremers",
  "Galaxy|Den Haag": "galaxy",
  "High Life|Goes": "highlife",
  "Birdy|Haarlem": "birdy",
  "Toermalijn|Tilburg": "toermalijn",
  "The Pink|Eindhoven": "thepink"
};
const MEDIA_REGIONS = {
  "Valkenburg": "valkenburg",
  "Brunssummerheide": "brunssummerheide",
  "Den Haag": "denhaag",
  "Buytenpark · Zoetermeer": "buytenpark",
  "Scheveningen": "scheveningen",
  "Terneuzen": "terneuzen",
  "Breskens": "breskens",
  "Haarlem": "haarlem",
  "IJmuiden": "ijmuiden",
  "Breda": "breda",
  "Mastbos · Breda": "mastbos",
  "Eindhoven": "eindhoven",
  "De Malpie · Valkenswaard": "malpie"
};
