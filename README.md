# Pistencheck · Niederlande

Statische Web-App zum Vergleichen der sieben niederländischen Skihallen mit echtem Schnee. Die App zeigt Preise für vier und sechs Stunden einschließlich Ski und Schuhen, 27 Pistenfotos mit Swipe-Galerien, fünf Betreiberpläne, sieben geografische Karten und 17 datumsgenaue Unterkunftsvorschläge. Zusätzlich stehen 183 Bilder in 63 Galerien für sämtliche Unterkünfte, Spas, Coffeeshops, Städte, Landschaften, Freizeitparks und weitere Ausflugsziele bereit. Wiederkehrende Orte verwenden dasselbe Album; auf der Seite erscheinen 85 zusätzliche Galerien. Jede hat mindestens zwei verschiedene Bilder. Nahverkehr und Parken stehen direkt beim jeweiligen Gebiet.

Alle Halleninformationen stehen direkt auf der Seite. Preisarten und Fahrdauern werden gleichzeitig angezeigt; Coffeeshop-Adressen, Zugangsregeln, Umgebung, Hotels und Reiseplanung sind ohne aufklappbare Bereiche sichtbar. Jede Galerie hat Pfeile direkt am Bild sowie Wisch- und Tastaturbedienung. Neue Orts- und Hotelgalerien haben außerdem anklickbare Vorschaubilder. Ausschließlich Fotos und Hallenpläne öffnen eine Großansicht mit Bildpfeilen, Zoom, Escape und Fokus-Rückgabe. Die Bilddateien werden lokal ausgeliefert und außerhalb des sichtbaren Bereichs verzögert geladen.

Unterkünfte: Die bisherigen Preise für 11.–14.10.2026 bleiben unverändert. Zusätzlich stehen separat recherchierte Preise für Abfahrt am Montag, 12.–15.10.2026, direkt daneben. Je drei Nächte, ein Zimmer, zwei Erwachsene; alle 17 Unterkunftsvorschläge wurden für beide Zeiträume gefunden (16 eindeutige Hotels/B&Bs, Rijswijk erscheint bei zwei Hallen). Beide Vier-Tage-Pläne und der Preisunterschied pro Unterkunft sind sichtbar. Skifahren ist in beiden Varianten am Dienstag, 13.10.; die Skipreise bleiben unverändert.

Die Reiseplanung pro Hotel verwendet reguläre Skipreise einschließlich Material und Hallenparkplatz, Hotelparkplatz sowie 140 € Spa, 130 € Autofahrt und 160 € Essen für beide. Die letzten drei Beträge sind Schätzungen und in beiden Varianten gleich; nicht aufgeschlüsselte Pflichtabgaben und andere Extras kommen gegebenenfalls hinzu. B&Bs, knappe Restbudgets und Überschreitungen sind gekennzeichnet. Bei De Uithof ist nur der bestätigte 2-Stunden-Pass eingerechnet.

## Ausführen und veröffentlichen

Die App besteht aus HTML, CSS und JavaScript und benötigt keinen Build. Für eine lokale Vorschau den Ordner mit einem beliebigen statischen Webserver bereitstellen.

GitHub Pages veröffentlicht den Stammordner des Branches `main`. Die Datei `.nojekyll` sorgt dafür, dass die Dateien ohne Jekyll-Verarbeitung ausgeliefert werden. Änderungen werden nach einem Push auf `main` veröffentlicht.

## Datenstand

- Ski-Direktpreise und reguläre Verfügbarkeit: 5. Oktober 2026.
- Gutscheinbedingungen, Shopprofile und Regionsrecherche: 6. Oktober 2026.
- Datumsgenaue Booking-Unterkunftssuche und Hotelrouten: 6. Oktober 2026.
- Zusätzliche Booking-Suche für Montag–Donnerstag, 12.–15.10.2026: 6. Oktober 2026. Der bisherige Datensatz in `travel.js` wurde beibehalten; die neuen Preise stehen in `monday.js`.
- Vergleichstag: 13. Oktober 2026.

Gutscheinbedingungen und die offizielle Eingabemaske wurden geprüft. Eine tatsächliche Einlösung und freie Gutscheinplätze sind ohne gekauften Code nicht bestätigt. Fotos sind keine Live-Aufnahmen; Pistenaufbau und Preise können sich ändern. Die Quellen stehen direkt bei den jeweiligen Angaben und Bildern.

## Bilder und Schrift

Die Bildrechte liegen bei den in der App genannten Urhebern. Metadaten der neuen Galerien einschließlich Quelle, Originaldatei, Bearbeitung und gegebenenfalls freier Lizenz stehen in [`assets/media/credits.json`](assets/media/credits.json). Die frei lizenzierten Umgebungsmotive behalten ihre jeweilige Lizenz. Frühere Umgebungsmotive sind in [`assets/regions/credits.json`](assets/regions/credits.json) dokumentiert. Das Repository erteilt keine zusätzliche Lizenz für fremde Betreiber- und Venue-Fotos oder Pläne. Hotelzimmer sind Beispiele; höhere Kategorien werden ausdrücklich bezeichnet. Die Außenansicht des Spaarnwoude Park Hotels ist eine veröffentlichte Visualisierung und entsprechend beschriftet. Die Schrift Manrope ist mit ihrer Lizenz in [`assets/manrope-OFL.txt`](assets/manrope-OFL.txt) enthalten.

Kartenkonturen: Natural Earth, Public Domain. Hallen- und Spa-Standorte: © OpenStreetMap-Mitwirkende; Unterkunftskoordinaten aus Booking-Suchergebnissen. Hotelwege und Anreise: OSRM, ohne Verkehr und Pausen. Die Karten zeigen Standorte, keine Straßenrouten. Die Quellen und Bildnachweise sind in der App sichtbar.
