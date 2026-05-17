## Dashboard konfigurieren

Ein Dashboard in IOB Mobile ist simpel aufgebaut, du erstellst Seiten, wählst dann Datenpunkte aus deinem ioBroker und weist diese jeweils einer Seite zu. Um dein Dashboard zu konfigurieren öffne das Drawer Menü links und klicke auf Einstellungen, alternativ kannst du auch im Dashboard rechts oben auf das Einstellungs-Icon klicken. Dieses öffnet die Einstellungen und filtert die Datenpunkte bereits nach der aktuell angezeigten Seite.

### Ablauf

Der Ablauf um dein Dashboard zu erstellen ist simpel:

- Erstelle deine benötigten Seiten
- Wähle im Tab den gewünschten Adapter
- Füge einzelne Datenpunkte aus dem Adapter zu Seiten hinzu
- Jeder Datenpunkt kann konfiguriert werden und einer oder mehreren Seiten hinzugefügt werden
- Für jeden Datenpunkt wählst du den passenden Typ aus
- Schließe die Einstellungen um zu deinem Dashboard zu gelangen, die Seiten deines Dashboards werden als Liste im Drawer Menü angezeigt

<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/05-pages_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/07-adapters_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/08-adapter_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/09-editdatapoint_framed.png?raw=true" width="196" height="400">

Im Folgenden sind die einzelnen Schritte nochmal genauer erklärt.

### Schritt 1: Seiten erstellen

Der erste Schritt für dein Dashboard ist das Erstellen von Seiten, wechsle dazu zum Tab `Seiten` und füge über das `+` neue Seiten hinzu. Für jede Seite wählst du einen Namen und ein Icon aus. Die Reihenfolge, in der deine Seiten im Menü angezeigt werden, kannst du bearbeiten indem du lange auf eine Seite tippst und diese per Drag & Drop an die neue Position ziehst.

Eine Seite kann als Unterseite einer anderen Seite definiert werden. Unterseiten werden entweder so wie Fullscreen Widgets als Tab, oder wenn ausgewählt mit eigener Überschrift als Bereich auf der Hauptseite angezeigt. Eine Besonderheit bei Unterseiten ist, dass die Hauptseite nicht angezeigt wird wenn ihr keine Datenpunkte zugewiesen sind, das heißt man kann zum Beispiel eine Seite `Multimedia` als Hauptseite erstellen. `Multimedia` enthält jedoch keine Datenpunkte sondern nur Unterseiten für `Wohnzimmer`, `Schlafzimmer` und `Terrasse`. Im Menü hat man somit als Seite `Multimedia` zur Auswahl, öffnet man diese erhält man die Tabs für die Unterseiten, die leere Hauptseite wird nicht angezeigt. Enthält die Hauptseite ebenfalls Datenpunkte, wird diese natürlich wie gewohnt dargestellt.

Wichtig für den aktuellen Stand der App:

- Unterseiten können als Tabs oder als Abschnitte auf der Hauptseite verwendet werden
- Unterseiten als Abschnitte werden direkt in die Hauptseite eingeblendet
- Fullscreen HTML und Kamera-Fullscreen-Streams erzeugen ebenfalls eigene Tabs
- Seiten können zusätzlich `Elevated Cards` und ein `kompaktes Layout` verwenden

Jede Seite kann ihr Design selbst festlegen, um es etwas zu vereinfachen, kann das Design einer anderen Seite kopiert werden. Die verfügbaren Optionen sind:

- Hintergrundfarbe oder alternativ Hintergrundbild für die Seite
- Hintergrundbild kann weichgezeichnet und/oder abgedunkelt werden
- Kacheln können halbtransparent angezeigt werden
- Hintergrundfarbe für die Kacheln
- Vordergrundfarbe für die Kacheln
- optional: Rahmenfarbe und Rahmenstärke für die Kacheln
- optional: Karten mit leichtem Schatten (`Elevated Cards`)
- optional: kompaktes Layout für dichtere Darstellung

### Schritt 2: Datenpunkte hinzufügen

Als nächstes wechselst du zum Tab `Adapter`, dort siehst du eine Liste all deiner Adapter. Über das Suchfeld oben kannst du die Liste der Adapter filtern. Klicke auf einen Adapter um diesen zu öffnen und dessen Objekte und Datenpunkte anzuzeigen. Die Liste aus Objekten und Datenpunkten kannst du ebenfalls über das Suchfeld oben filtern.

Datenpunkte die bereits hinzugefügt wurden sind mit einem Haken gekennzeichnet. Klicke auf das `+` bei einem Datenpunkt um diesen hinzuzufügen. Im Popup kannst du den Datenpunkt für dein Dashboard beliebig umbenennen und einer oder mehrerer Seiten zuweisen. Unter dem Namensfeld werden anhand der Objekt-ID des Datenpunktes Vorschläge gemacht die du per Klick als Name übernehmen kannst. Tippe lange auf einen Vorschlag um diesen an den derzeitigen Namen hinten anzuhängen.

Die Größe bestimmt wie viel Platz die Karte des Datenpunktes einnimmt, für einzelne Werte eignet sich `1x1` sehr gut, für größere Widgets wie zum Beispiel Kamerastreams machen größere Karten durchaus Sinn. Auf Smartphones wird die Darstellung später automatisch an die verfügbare Breite angepasst.

Über den Typ des Datenpunktes legst du fest, wie dieser im Dashboard dargestellt wird, jeder Typ enthält auch direkt in der App eine Kurzbeschreibung:

- `Einzelwert`: ein einzelner Wert, zum Beispiel Temperatur. Einheit, Dezimalstellen, Faktor und Zeitstempel können festgelegt werden.
- `On/Off Button`: für Datenpunkte die zwischen `true` und `false` geschaltet werden, zum Beispiel der State eines Shelly 1L.
- `Taster`: für Taster-Datenpunkte, die per kurzem Trigger auf `true` auslösen.
- `Slider`: klassisch für Dimmer, zeigt einen Slider um den Dimmerwert zu ändern.
- `Popup Slider`: zeigt den aktuellen Wert in der Kachel, der Slider öffnet sich erst beim Tippen im Popup.
- `Dimmer Switch`: für Dimmer, wenn du diese wie einen On/Off Schalter steuern möchtest und nicht per Slider.
- `Homematic Rollladen`: wähle diesen Typ für den `LEVEL` Datenpunkt eines Homematic Rollladen-Aktors um einen Rollladen-Schalter mit hoch, runter und stopp anzuzeigen. Für neuere Geräte kann zusätzlich ein separater SET-Datenpunkt konfiguriert werden.
- `Shelly 2.5 Rollladen`: wie Homematic Rollladen jedoch für Shelly 2.5 Level-Datenpunkte zur Steuerung des Rollladens.
- `Rollladen`: allgemeiner Rollladentyp für andere Aktoren mit Stop-Datenpunkt, optionalem Lamellen-Datenpunkt und optional invertierter Laufrichtung.
- `Tür/Fensterkontakt`: selbsterklärend, ein Kontakt der offen oder geschlossen sein kann, Icon frei wählbar.
- `Boolean Wert`: ein beliebiger Status der als Boolean-Wert in ioBroker hinterlegt ist, die Anzeigewerte für `true` und `false` können frei gewählt werden, ein Beispiel: Online-Status deines Homeservers als Boolean-Status, Anzeige von `Online` oder `Offline`.
- `HTML`: für Datenpunkte in denen entweder ein HTML-String oder eine URL hinterlegt ist. Das kann zum Beispiel für Strompreisdiagramme, lokale HTML-Seiten oder E-Charts verwendet werden. Zudem können Datenpunkte des E-Charts Adapters mit dem Typ HTML angezeigt werden.
- `Full Screen HTML`: wie HTML, jedoch wird im Dashboard auf der gewählten Seite ein eigener Tab für die Fullscreen-Anzeige des HTML erzeugt. Die restlichen Datenpunkte der Seite liegen dann in einem anderen Tab. Dieser Typ kann dazu genutzt werden, um Dashboards wie Grafana, Flot, VIS oder E-Charts in IOB Mobile einzubinden.
- `Kamera Stream`: hinterlege in einem Datenpunkt die URL zu deinem Kamerastream und wähle diesen Datenpunkt mit Typ Kamera Stream um den Stream in deinem Dashboard einzubinden. Unterstützt werden MJPEG und RTSP Streams.
- `Kamera Fullscreen Stream`: wie Kamera Stream, aber wieder mit eigener Seite zur großen Darstellung wie bei Fullscreen HTML.
- `Text`: für Datenpunkte die Text enthalten, verhält sich ähnlich wie Einzelwert, jedoch wird der Text bis zu einer gewissen Größe runterskaliert um die Darstellung auf der Kachel zu gewährleisten.
- `Bild`: für Datenpunkte die den relativen Pfad zu einem Bild in ioBroker wie zum Beispiel Wetter-Icons oder eine URL zu einem Bild im Web oder Netzwerk enthalten. Relative Pfade werden über den ioBroker Web-Adapter unter Port `8082` geladen. Bilder können skaliert oder über die ganze Kachel dargestellt werden, der Name kann als Overlay erscheinen.
- `Eigenen Wert schreiben`: schreibt beim Klick der Kachel einen eigenen Wert in den jeweiligen Datenpunkt. Der Wert kann fix hinterlegt oder leer gelassen werden. Es kann entweder ein Wert hinterlegt werden, oder mehrere Werte mit Komma getrennt. Werden mehrere Werte hinterlegt, müssen zusätzlich Namen für die Werte in gleicher Reihenfolge angegeben werden. Beim Klick auf die Kachel wird ein einzelner Wert sofort gesendet, sind mehrere Werte hinterlegt, kommt ein Popup zur Auswahl. Ist der Wert leer, wird dieser beim Klick auf die Kachel eingegeben.
- `Mehrere Werte`: erlaubt die Anzeige der Werte von mehreren Datenpunkten in einer Kachel, inklusive eigener Namen, Einheiten und optionalem gemeinsamen Kartentitel.
- `JSON`: liest den JSON-Wert eines Datenpunktes und zeigt Key/Value-Paare an.
- `RGB`: Als Typ RGB muss der On/Off State der RGB-Lampe zur Konfiguration verwendet werden. Es kann dann ausgewählt werden, über welche Datenpunkte die Lampe gesteuert wird: Helligkeit und je nach RGB-Typ ein HEX-Farbwert, RGB oder HSV. Die RGB Kachel zeigt kombiniert einen On/Off Switch, einen Button für die Helligkeit und die aktuelle Farbe, die per Klick geändert werden kann.
- `LED Weiß`: für weiße Leuchtmittel, die über Helligkeit und optional Farbtemperatur gesteuert werden.
- `Szene`: zum Starten von Szenen des `Scenes` Adapters. Dieser Typ kann nur für passende Datenpunkte verwendet werden.
- `Mediensteuerung Sonos`: zur Steuerung der aktuellen Wiedergabe auf einem Sonos-Speaker.
- `Mediensteuerung Alexa`: zur Steuerung der aktuellen Wiedergabe auf einem Alexa-Speaker.
- `Homematic IP Thermostat`: für Homematic IP Thermostate, die benötigten Zusatzdatenpunkte werden automatisch aus dem Gerätepfad abgeleitet.
- `Homematic Thermostat (nicht IP)`: für klassische Homematic-Thermostate.
- `Thermostat`: generischer Thermostat-Typ bei dem die erforderlichen Datenpunkte manuell gewählt werden.
- `Gauge`: zeigt numerische Werte als Gauge, inklusive Min/Max und optionalen Segmenten.
- `aWATTar`: zeigt Strompreise auf Basis des Rawdata-Datenpunktes an, die Karte muss dafür mindestens 2 Spalten breit und mehr als 2 Zeilen hoch sein.

Für manche Typen kann noch ausgewählt werden:

- `Boolean Werte farbig`: Werte von Boolean-Datenpunkten können farbig dargestellt werden, die Farben für `true` und `false` können dabei selbst gewählt werden
- `Min/Max Werte (Slider)`: enthält der Datenpunkt in ioBroker Min/Max Werte, so werden diese beim Hinzufügen des Datenpunktes geladen. Wurde ein Slider vor dem Hinzufügen dieser Funktion erstellt kann dies über `Default Min/Max Werte wiederherstellen` nachgeholt werden. Definiert der Datenpunkt in ioBroker Min/Max Werte, so müssen die gewählten Min/Max Werte in diesem Bereich liegen.
- `Zeitpunkt der letzten Änderung anzeigen`: für On/Off, Taster, Einzelwert, Text, Szene, Popup Slider und weitere passende Typen
- `Werte anzeigen (Slider)`: zeigt zusätzlich den aktuellen Wert des Sliders sowie eine Beschriftung
- `Werte anzeigen (Eigenen Wert schreiben)`: auf der Kachel wird der aktuelle Wert des Datenpunktes angezeigt, ist dies deaktiviert, wird ein Icon angezeigt
- `Bild skaliert oder Kachel komplett ausfüllen (Bild)`: Darstellung vom Datenpunkt-Typ Bild
- `Dezimalstellen`: mit wie vielen Dezimalstellen soll ein Zahlenwert dargestellt werden. Diese Einstellung hat keine Auswirkung wenn in den allgemeinen Einstellungen der Konfiguration die Option `Zahlenwerte runden` aktiviert ist
- `Umrechnungsfaktor`: numerische Werte können vor der Anzeige durch einen Faktor geteilt werden, zum Beispiel `1000` für Wh nach kWh
- `Änderung schützen`: überall da, wo auch etwas gesteuert wird über eine Kachel, kann durch diese Option die Ausführung des Befehls durch vorherige Abfrage der Smartphone/Tablet Authentifizierung oder alternativ durch Eingabe des Konfigurations-PIN geschützt werden
- `Sub-Navigation`: erlaubt die Navigation zu anderen Seiten in der App oder zu einer URL die in einem Datenpunkt hinterlegt ist
- `Trigger Einstellungen`: manche DP-Typen erlauben es, einen anderen Datenpunkt als Triggerziel zu konfigurieren, so kann zum Beispiel der Status der Lampe angezeigt werden, tippt man auf die Kachel wird zum Schalten der Lampe jedoch ein anderer Datenpunkt verwendet
- `ACK Status anzeigen`: für geeignete Typen kann zusätzlich der Acknowledge-Status visualisiert werden
- `Wert kann null sein`: ist nützlich wenn ein Datenpunkt zeitweise `null` liefert und die Karte das nicht als Fehler behandeln soll

#### Typ-spezifische Hinweise aus der aktuellen App-Logik

- `RGB` unterstützt `HEX Farbwert`, `RGB` und `HSV`
- bei `HSV` gibt es zusätzlich die Option `Erweiterte Saturation`, dadurch wird Sättigung mit `0-255` statt `0-100` gesendet
- `LED Weiß` nutzt einen Helligkeitsdatenpunkt und optional einen separaten Farbtemperatur-Datenpunkt
- beim allgemeinen Rollladentyp gibt es `Stop Datenpunkt`, `Lamellen Datenpunkt (optional)`, `Laufrichtung umkehren` und `Aktuelle Position anzeigen`
- beim generischen `Thermostat` können zusätzlich Status, Status setzen, Zieltemperatur, Zieltemperatur setzen, Presets und Heizstatus konfiguriert werden
- `Gauge` unterstützt Segmente und optional einen steuerbaren Modus
- `aWATTar` kennt in der aktuellen App zusätzlich eine Steueroption für die Mehrwertsteuer

**Disclaimer:** die App wird laufend für die Wünsche der User erweitert, verzeih es bitte, wenn es mal Einstellungen gibt, die es noch nicht auf diese Hilfe-Seite geschafft haben. Nach bisheriger Erfahrung ist das ca. ständig so.

Speichere zum Schluss deinen Datenpunkt mit Klick auf `Speichern`.

Die Reihenfolge der Datenpunkte konnte früher per langem Tippen mit Drag & Drop angepasst werden, du kannst die Datenpunkte weiterhin sortieren, dies hat jedoch nur mehr Auswirkung auf die Liste in den Einstellungen. Die Sortierung der Datenpunkte auf den einzelnen Seiten kann nun individuell angepasst werden, mehr dazu weiter unten.

Über das Filter-Icon rechts oben, kannst du die Liste der Datenpunkte filtern um nur jene einer bestimmten Seite anzuzeigen. Wenn du die Einstellungen nicht über das Drawer Menü sondern über das Einstellungen-Icon rechts oben im Dashboard öffnest, wird die Liste der Datenpunkte automatisch für die zuletzt geöffnete Seite des Dashboards gefiltert, so kannst du schneller gezielt eine Seite bearbeiten.

### Schritt 3: Dashboard ansehen

Wenn du Seiten erstellt und deine ersten Datenpunkte hinzugefügt hast, verlasse die Einstellungen per Klick auf das Zurück-Icon links oben. Wenn du etwas geändert hast und mit einem IOB Mobile Account angemeldet bist, wirst du gefragt ob du deine gesamte App-Konfiguration im Account sichern möchtest. Du kommst direkt zum Dashboard mit deinen Seiten und Datenpunkten.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/12-dashboard_framed.png?raw=true" width="247" height="500">

Über das Sortier-Icon in der Navigationsleiste kannst du die Anordnung der Datenpunkte auf der aktuell sichtbaren Seite nach deinen Wünschen anpassen, sowie Trennlinien mit Bereichstiteln und eigene Kacheln die rein nur der Navigation dienen einfügen. Mehr dazu findest du bei der Erklärung zu den Darstellungsoptionen von Dashboard-Seiten.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/gif/23-page-datapoint-sort.gif?raw=true" width="247" height="500">

### Dashboard schließen

Wähle im Drawer Menü `Dashboard schließen` um das aktuelle Dashboard zu schließen und zurück zur Startseite zu gelangen. Wenn du die App öffnest und das zuletzt geöffnete Dashboard nicht erreichbar ist wird dieses automatisch geschlossen.
