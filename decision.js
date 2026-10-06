"use strict";
// Eigene Bewertung anhand eurer Wünsche. Betreiberangaben und Routen: 06.10.2026.
const DECISIONS = {
  zoetermeer: {
    title:"Zoetermeer", label:"Meine Empfehlung für euch", album:"scheveningen", photoLabel:"Scheveningen · Meer bei Zoetermeer",
    verdict:"Der beste Kompromiss für Ski, Spa, Stadt und Meer.",
    pros:["300-m-Hang plus zwei blaue 140-m-Pisten: gut für euren langen Skitag.","Elysium nah; Den Haag und Scheveningen lassen sich als Ausflug verbinden.","Touristen-Option direkt in Zoetermeer, besser bewerteter Shop in Den Haag."],
    cons:["Zoetermeer selbst ist eine moderne Wohnstadt. Für Altstadt und Großstadtgefühl fahrt ihr nach Den Haag.","Die lange Piste ist steil. Meer und Innenstadt liegen nicht direkt vor der Hallentür."],
    city:"Den Haag ca. 20–30 Min. · Scheveningen ca. 25–40 Min.",
    nature:"Buytenpark direkt an der Halle; Dünen und Nordsee beim Den-Haag-Ausflug.",
    coffee:"Casa ca. 5–10 Min. (2,7/5); Cremers in Den Haag ca. 22 Min. (4,4/5). Touristen laut Profil zugelassen.",
    hotelId:10329, choose:"Nehmt Zoetermeer, wenn ihr von allem etwas wollt und der Spa-Weg kurz sein soll.",
    sources:[{url:"https://www.snowworld.com/nl/zoetermeer/skien-snowboarden",label:"Pisten"},{url:"https://elysium.nl/",label:"Elysium"},{url:"https://denhaag.com/de/scheveningen",label:"Stadt & Küste"}]
  },
  landgraaf: {
    title:"Landgraaf", label:"Beste Wahl fürs Skifahren", album:"brunssummerheide", photoLabel:"Brunssummerheide · Natur bei Landgraaf",
    verdict:"Längere Abfahrten und ein schönes, hügeliges Umland.",
    pros:["400-m-Abfahrt mit roter und blauer Variante und 6er-Sessellift: mein Favorit für 4–6 Stunden normales Skifahren.","Brunssummerheide zum Wandern; Valkenburg mit Altstadt, Burg und Höhlen. Die Grenznähe macht die Gegend nicht unattraktiv.","Thermae 2000, Mondo Verde und GaiaZOO geben euch genug Auswahl für vier Tage."],
    cons:["Keine Küste in der Nähe und weniger Großstadtgefühl als Amsterdam oder Den Haag.","Hallenparken kostet 8 € online. Coffeeshop-Auswahl für Touristen ist eingeschränkter; Heerlen und Maastricht verlangen Wohnsitz."],
    city:"Valkenburg ca. 20–30 Min. · historische Kleinstadt statt Großstadt.",
    nature:"Brunssummerheide ca. 10–15 Min.: Wald, Heide und Hügel. Geuldal bei Valkenburg.",
    coffee:"Down Under in Kerkrade: 5,6 km / 9 Min., Touristen laut Profil zugelassen. Schwache Bewertung: 1,9/5.",
    hotelId:11710, choose:"Nehmt Landgraaf, wenn der Skitag euer Höhepunkt sein soll und Hügel, kleine Orte und Therme reichen.",
    sources:[{url:"https://www.snowworld.com/nl/landgraaf/skien-snowboarden",label:"Pisten"},{url:"https://www.natuurmonumenten.nl/natuurgebieden/brunssummerheide",label:"Heide & Wanderwege"},{url:"https://www.visitzuidlimburg.com/",label:"Süd-Limburg"}]
  },
  amsterdam: {
    title:"Velsen / Amsterdam", label:"Beste Wahl für Stadt & Meer", album:"amsterdam-city", photoLabel:"Amsterdam · Grachten und Stadt",
    verdict:"Amsterdam ist der stärkste Stadttrip; die Skihalle ist der Kompromiss.",
    pros:["Amsterdam bietet euch am meisten Großstadt, Grachten, Museen und Auswahl bei Coffeeshops.","IJmuiden-Strand liegt nur ca. 10–20 Min. ab Halle entfernt; Haarlem ist ebenfalls nah.","Grüne Basis in Spaarnwoude, kostenloses Hallenparken und zwei Hotels mit Gratisparkplatz."],
    cons:["SnowWorld Amsterdam liegt in Velsen-Zuid. Für Amsterdam-Zentrum ca. 30–45 Min. Auto einplanen, plus Parken oder ÖPNV.","Nur 170 m Hauptpiste + 70 m Anfängerhang. Bei 6 Stunden viele Wiederholungen; Umbau läuft voraussichtlich bis Mitte Oktober."],
    city:"Amsterdam ca. 30–45 Min. · Haarlem ca. 15–25 Min. · IJmuiden-Strand ca. 10–20 Min.",
    nature:"Spaarnwoude direkt im Gebiet; Dünen und echter Nordseestrand bei IJmuiden.",
    coffee:"Birdy in Haarlem ca. 15–25 Min. (4,5/5), Touristen laut Profil zugelassen. Auch Amsterdam bedient Touristen; Velsen separat beachten.",
    hotelId:15358076, choose:"Nehmt Velsen, wenn ihr eigentlich einen Stadt- und Küstenurlaub mit etwas Ski sucht. Für euren gewünschten langen Skitag würde ich es hinter die anderen setzen.",
    sources:[{url:"https://www.snowworld.com/nl/amsterdam/skien-snowboarden",label:"170-m-Piste & Umbau"},{url:"https://www.iamsterdam.com/en/explore",label:"Amsterdam"},{url:"https://amsterdam.org/en/coffeeshops.php",label:"Touristenzugang Amsterdam"}]
  }
};
const GERMAN_HALLS = [
  {
    id:"bottrop", name:"alpincenter Bottrop", region:"Nordrhein-Westfalen", length:640,
    address:"alpincenter Bottrop, Prosperstraße 299-301, Bottrop", arrival:{km:175,minutes:122},
    terrain:"640 m durch eine Kurve, rund 30 m breit. Eine lange durchgehende Strecke; nicht mit einem 640-m-geraden breiten Hang gleichsetzen.",
    fit:"Für einen günstigen langen Skitag ohne Hotel mein Favorit. Landgraaf ist für breite Abfahrten und den Sessellift reizvoller.",
    four:{entry:54,gear:0,label:"Feierabendticket · 15–20 Uhr · ab-Preis",note:"Vier Stunden geplant; bei Schließung um 20 Uhr sind fünf möglich."},
    six:{entry:64,gear:0,label:"Mittagsticket · 12–18 Uhr · ab-Preis",note:"Sechs Stunden nur in diesem Fenster. Für z. B. 10–16 Uhr: Tageskarte ab 74 €."},
    from:true,
    includes:"Ski, Schuhe und Stöcke sowie Buffet und Getränke enthalten. Kleidung und Helm extra.",
    parking:6, parkingText:"Oben am Eingang maximal 6 € je Auto/Tag; erste Stunde frei.",
    status:"Veröffentlichte ab-Preise für 01.10.2026–30.04.2027. Betreiberkalender: sowohl Mo. 12.10. als auch Di. 13.10. 10–20 Uhr. Endpreis und freie Plätze am 13.10. nicht im Shop bestätigt.",
    sources:[{url:"https://alpincenter.com/bottrop/skihalle/oeffnungszeiten-preise",label:"Preise & Zeitfenster"},{url:"https://alpincenter.com/bottrop/skihalle",label:"Piste"},{url:"https://alpincenter.com/bottrop/skihalle/anfahrt-und-parken",label:"Parken"}]
  },
  {
    id:"bispingen", name:"SnowWorld Bispingen", region:"Niedersachsen", length:300,
    address:"SnowWorld Bispingen, Horstfeldweg 9, Bispingen", arrival:{km:201,minutes:124},
    terrain:"300 m Hauptpiste, bis zu 100 m breit; 23.000 m² Schneefläche. 6er-Sessellift und Schlepplift; Liftbetrieb richtet sich nach dem Betreiberplan.",
    fit:"Kurze Anreise und viel Platz. Gut als Tagesausflug; für euren gewünschten niederländischen Stadt- und Küstenurlaub weniger passend.",
    four:{entry:43.95,gear:19.90,label:"4-Stunden-Ticket · ab-Preis",note:"43,95 € Eintritt + 9,95 € Ski + 9,95 € Schuhe."},
    six:{entry:48.95,gear:19.90,label:"Tagespass für 6 Stunden · ab-Preis",note:"48,95 € Eintritt + 9,95 € Ski + 9,95 € Schuhe."},
    from:true, includes:"Ski und Schuhe eingerechnet. Helm, Kleidung und Essen zusätzlich.",
    parking:null, parkingText:"Parkgebühr in diesem Check nicht belastbar bestätigt; kein Gratisparkplatz eingerechnet.",
    status:"Öffnungsplan: in Niedersachsens Herbstferien 09–20 Uhr. Betreiber nennt saisonabhängige ab-Preise; der Shop lieferte beim Termincheck einen Fehler. Endpreis und freie Plätze für 13.10. sind offen.",
    sources:[{url:"https://bispingen.snowworld.com/ticketsundpreise.html",label:"Preise & Material"},{url:"https://bispingen.snowworld.com/piste.html",label:"Piste"},{url:"https://www.snowworld.com/de/bispingen",label:"Öffnung & Ticketshop"}]
  },
  {
    id:"neuss", name:"SnowWorld Neuss", region:"Nordrhein-Westfalen", length:300,
    address:"SnowWorld Neuss, An der Skihalle 1, Neuss", arrival:{km:236,minutes:156},
    terrain:"300 m Hauptpiste, bis zu 100 m breit. Ein Teil ist aktuell für Skiclub-Training abgesteckt; der Großteil bleibt frei.",
    fit:"Breite Piste und Düsseldorf als Stadt-Ausflug. Teurer als Bottrop; am Dienstag reicht das Öffnungsfenster genau für sechs Stunden.",
    four:{entry:51.95,gear:25,label:"4-Stunden-Ticket · 13.10.",note:"51,95 € Eintritt + 12,50 € Ski + 12,50 € Schuhe."},
    six:{entry:56.95,gear:25,label:"Tagespass · 13.10. ab 14 Uhr",note:"56,95 € Eintritt + 12,50 € Ski + 12,50 € Schuhe. Sechs Stunden: 14–20 Uhr."},
    includes:"Ski und Schuhe nach veröffentlichtem Verleihtarif eingerechnet. Helm, Kleidung und Essen zusätzlich.",
    parking:6, parkingText:"6 € je Auto ab 3,5 Stunden Parkzeit.",
    status:"Eintrittspreise und 14-Uhr-Termin am 13.10. im offiziellen Shop geprüft. Material: veröffentlichter Tarif der Pisten-Seite; nicht als kompletter Warenkorb bestätigt. Keine Platzgarantie.",
    sources:[{url:"https://tickets.snowworld.com/de/tickets/ski/2026-10-13",label:"Terminpreise 13.10."},{url:"https://neuss.snowworld.com/piste.html",label:"Piste & Verleih"},{url:"https://www.snowworld.com/en/neuss/opening-hours",label:"Öffnung & Parken"}]
  }
];
