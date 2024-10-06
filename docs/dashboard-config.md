## Dashboard konfigurieren
Ein Dashboard in IOB Mobile ist simpel aufgebaut, du erstellst Seiten, wählst dann Datenpunkte aus deinem ioBroker und weist diese jeweils einer Seite zu. Um dein Dashboard zu konfigurieren öffne das Drawer Menü links und klicke auf Einstellungen, alternativ kannst du auch im Dashboard rechts oben auf das Einstellungs Icon klicken, dieses öffnet die Einstellungen und filtert die Datenpunkte bereits nach der aktuell angezeigten Seite.

### Ablauf
Der Ablauf um dein Dashboard zu erstellen ist simpel:
* Erstelle deine benötigten Seiten
* Wähle im Tab den gewünschten Adapter
* Füge einzelne Datenpunkte aus dem Adapter zu Seiten hinzu
* Jeder Datenpunkt kann konfiguriert werden und einer oder mehreren Seiten hinzugefügt werden
* Für jeden Datenpunkt wählst du den passenden Typ aus
* Schließe die Einstellungen um zu deinem Dashboard zu gelangen, die Seiten deines Dashboards werden als Liste im Drawer Menü angezeigt
 
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/05-pages_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/07-adapters_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/08-adapter_framed.png?raw=true" width="196" height="400">
<img style="margin: 16px 16px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/09-editdatapoint_framed.png?raw=true" width="196" height="400">

Im Folgenden sind die einzelnen Schritte nochmal genauer erklärt.

### Schritt 1: Seiten erstellen
Der erste Schritt für dein Dashboard ist das Erstellen von Seiten, wechsle dazu zum Tab "Seiten" und füge über das "+" neue Seiten hinzu. Für jede Seite wählst du einen Namen und ein Icon aus. Die Reihenfolge, in der deine Seiten im Menü angezeigt werden, kannst du bearbeiten indem du lange auf eine Seite tippst und diese per Drag & Drop an die neue Position ziehst.

Eine Seite kann als Unterseite einer anderen Seite definiert werden, Unterseiten werden entweder so wie Fullscreen Widgets als Tab, oder wenn ausgewählt mit eigener Überschrift als Bereich auf der Hauptseite angezeigt. Eine Besonderheit bei Unterseiten ist, dass die Hauptseite nicht angezeigt wird wenn ihr keine Datenpunkte zugewiesen sind, d.h. man kann zB. eine Seite "Multimedia" als Hauptseite erstellen. "Multimedia" enthält jedoch keine Datenpunkte sondern nur Unterseiten für "Wohnzimmer", "Schlafzimmer" und "Terrasse". Im Menü hat man somit als Seite "Multimedia" zur Auswahl, öffnet man diese erhält man die Tabs für die Unterseiten, die leere Hauptseite wird nicht angezeigt. Enthält die Hauptseite ebenfalls Datenpunkte, wird diese natürlich wie gewohnt dargestellt.

Jede Seite kann ihr Design selbst festlegen, um es etwas zu vereinfachen, kann das Design einer anderen Seite kopiert werden. Die verfügbaren Optionen sind:
* Hintergrundfarbe oder alternativ Hintergrundbild für die Seite
* Hintergrundbild kann weichgezeichnet und/oder abgedunkelt werden
* Kacheln können halbtransparent angezeigt werden
* Hintergrundfarbe für die Kacheln
* Vordergrundfarbe für die Kacheln
* optional: Rahmenfarbe und Rahmenstärke für die Kacheln

### Schritt 2: Datenpunkte hinzufügen
Als nächstes wechselst du zum Tab "Adapter", dort siehst du eine Liste all deiner Adapter. Über das Suchfeld oben kannst du die Liste der Adapter filtern. Klicke auf einen Adapter um diesen zu öffnen und dessen Objekte und Datenpunkte anzuzeigen. Die Liste aus Objekten und Datenpunkten kannst du ebenfalls über das Suchfeld oben filtern. Datenpunkte die bereits hinzugefügt wurden sind mit einem Haken gekennzeichnet. Klicke auf das "+" bei einem Datenpunkt um diesen hinzuzufügen. Im Popup kannst du den Datenpunkt für dein Dashboard beliebig umbenennen und einer oder mehrerer Seiten zuweisen. Unter dem Namensfeld werden anhand der Objekt ID des Datenpunktes Vorschläge gemacht die du per Klick als Name übernehmen kannst. Tippe lange auf einen Vorschlag um diesen an den derzeitigen Namen hinten anzuhängen. Die Größe bestimmt wie viel Platz die Karte des Datenpunktes einnimmt, für einzelne Werte eignet sich 1x1 sehr gut, für größere Widgets wie zum Beispiel Kamerastreams machen größere Karten durchaus Sinn. Auf Smartphones wird die Größe automatisch angepasst, da hier nur eine maximale Breite von 2 möglich ist. Über den Typ des Datenpunktes legst du fest, wie dieser im Dashboard dargestellt wird, jeder Typ enthält auch direkt in der App eine Kurzbeschreibung:
* Einzelwert: ein einzelner Wert (zB. Temperatur), die Einheit (zB. °C etc.) kann festgelegt werden
* On/Off Button: für Datenpunkte die zwischen *true* und *false* geschalten werden, zB. der State eines Shelly 1L
* Taster: für Taster Datenpunkte, die per kurzem Trigger auf *true* auslösen
* Slider: klassisch für Dimmer, zeigt einen Slider um den Dimmerwert zu ändern
* Dimmer Switch: für Dimmer, wenn du diese wie einen On/Off Schalter steuern möchtest und nicht per Slider
* Homematic Rollladen: wähle diesen Typ für den *LEVEL* Datenpunkt eines Homematic Rollladen Aktors um einen Rollladen Schalter (hoch, runter, stopp) anzuzeigen
* Shelly 2.5 Rollladen: wie Homematic Rollladen jedoch für Shelly 2.5 Level Datenpunktes zur Steuerung des Rollladens
* Tür/Fensterkontakt: selbsterklärend, ein Kontakt der offen oder geschlossen sein kann, Icon frei wählbar
* Boolean Wert: ein beliebiger Status der als boolean Wert in ioBroker hinterlegt ist, die Anzeigewerte für *true* und *false* können frei gewählt werden, ein Beispiel: online Status deines Homeservers als boolean Status --> Anzeige von *Online* oder *Offline*
* HTML: für Datenpunkte in denen entweder ein HTML String oder eine URL hinterlegt ist, ich nutze das beispielsweise, um mir ein Strompreisdiagramm für aWATTar per Skript zu hinterlegen und dann anzuzeigen. Zudem können Datenpunkte des E-Charts Adapters mit dem Typ HTML (bzw. Full Screen HTML) angezeigt werden
* Full Screen HTML: wie HTML jedoch wird im Dashboard auf der gewählten Seite ein eigener Tab für die Fullscreen Anzeige des HTML erzeugt, die restlichen Datenpunkte der Seite (sofern welche vorhanden sind) liegen in einem zweiten Tab. Dieser Typ kann dazu genutzt werden, um Dashboards (Grafana, Flot, VIS, etc.) in IOB Mobile einzubinden, zudem können E-Charts Datenpunkte damit konfiguriert werden
* Kamera Stream: hinterlege in einem Datenpunkt die URL zu deinem Kamerastream und wähle diesen Datenpunkt mit Typ Kamera Stream um den Stream in deinem Dashboard einzubinden. Unterstützt werden sowohl MJPEG (zB. MotionEye, viele IP Kameras) als auch RTSP Streams
* Kamera Fullscreen Stream: wie Kamera Stream doch wieder mit eigener Seite zur großen Darstellung wie bei Fullscreen HTML
* Text: für Datenpunkte die Text enthalten, verhält sich ähnlich wie Einzelwert, jedoch wird der Text bis zu einer gewissen Größe runterskaliert um die Darstellung auf der Kachel zu gewährleisten.
* Bild: für Datenpunkte die den relativen Pfad zu einem Bild in ioBroker wie zB. Icon vom Adapter dasWetter (wird über den Web Adapter per http://<ip-iobroker>:8082<pfad-zum-bild> geladen) oder eine URL zu einem Bild im Web/Netzwerk (URL im Datenpunkt startet mit http:// bzw. https://). Bild kann skaliert werden oder die Kachel komplett ausfüllen, der Name des Datenpunktes kann als Overlay angezeigt werden.
* Eigenen Wert schreiben: schreibt beim Klick der Kachel einen eigenen Wert in den jeweiligen Datenpunkt, der Wert kann entweder fix in der Konfiguration des Datenpunktes hinterlegt werden oder leer gelassen werden. Es kann entweder ein Wert hinterlegt werden, oder mehrere Werte mit Komma getrennt. Werden mehrere Werte hinterlegt, müssen zusätzlich Namen für die Werte (ebenfalls mit Komma getrennt) angegeben werden. Beim Klick auf die Kachel wird ein einzelner Wert sofort gesendet, sind mehrere Werte hinterlegt, kommt ein Popup, in welchem man auswählt, welcher der vordefinierten Werte gesendet werden soll. Ist der Wert leer, wird dieser beim Klick auf die Kachel eingegeben, somit kann bei jedem Klick ein anderer Wert gesendet werden
* Mehrere Werte: erlaubt die Anzeige der Werte von mehreren Datenpunkten in einer Kachel
* RGB: Als Typ RGB muss der On/Off State der RGB Lampe zur Konfiguration verwendet werden, es kann dann ausgewählt werden, über welche Datenpunkte die Lampe gesteuert wird (Helligkeit und Datenpunkte je nach RGB Typ: HEX Farbwert, HSV, RGB). Die RGB Kachel zeigt dann in einer Kachel kombiniert einen On/Off Switch, einen Button um ein Popup mit Helligkeits-Slider zu öffnen sowie die aktuelle Farbe welche per Klick eine Farbauswahl öffnet.
* Mediensteuerung Sonos/Alexa: zur Steuerung der aktuellen Wiedergabe auf einem Sonos- oder Alexa Speaker.
* Homematic IP Thermostat

Für manche Typen kann noch ausgewählt werden:
* Boolean Werte farbig: Werte von Boolean Datenpunkten können farbig dargestellt werden, die Farben für true/false können dabei selbst gewählt werden
* Min/Max Werte (Slider) --> enthält der Datenpunkt in ioBroker Min/Max Werte, so werden diese beim Hinzufügen des Datenpunktes geladen. Wurde ein Slider vor dem Hinzufügen dieser Funktion erstellt kann dies über "Default Min/Max Werte wiederherstellen" nachgeholt werden. Definiert der Datenpunkt in ioBroker Min/Max Werte, so müssen die gewählten Min/Max Werte in diesem Bereich liegen.
* Zeitpunkt der letzten Änderung anzeigen (On/Off, Taster, Einzelwert, Text)
* Werte anzeigen (Slider) --> zeigt zusätzlich den aktuellen Wert des Sliders sowie eine Beschriftung.
* Werte anzeigen (Eigenen Wert schreiben) --> auf der Kachel wird der aktuelle Wert des Datenpunktes angezeigt, ist dies deaktiviert, wird ein Icon angezeigt (analog zum Typ Taster)
* Bild skaliert oder Kachel komplett ausfüllen (Bild) --> Darstellung vom Datenpunkt Typ Bild
* Dezimalstellen (Einzelwert) --> mit wie vielen Dezimalstellen soll ein Zahlenwert dargestellt werden, diese Einstellung hat keine Auswirkung wenn in den allgemeinen Einstellungen der Konfiguration die Option "Zahlenwerte runden" aktiviert ist
* Änderung schützen --> überall da, wo auch was gesteuert wird über eine Kachel (On/Off Button, Taster, usw.) kann durch diese Option die Ausführung des Befehls durch vorherige Abfrage der Smartphone/Tablet Authentifizierung (Face/Touch ID bzw. Fingerprint) oder alternativ durch Eingabe des Konfigurations-PIN (muss im Tab "Konfiguration" --> PIN Schutz aktiviert sein) geschützt werden. Dies dient einerseits der Sicherheit, andererseits kann man so das versehentliche Auslösen von sensiblen Aktionen vermeiden
* Sub-Navigation erlaubt die Navigation zu anderen Seiten in der App oder einer URL die in einem DP hinterlegt ist
* Trigger Einstellungen: manche DP Typen erlauben es, einen anderen Datenpunkt als Triggerziel zu konfigurieren, so kann zB. der Status der Lampe angezeigt werden, tippt man auf die Kachel wird zuum
Schalten der Lampe jedoch ein anderer Datenpunkt verwendet.

**Disclaimer: **die App wird laufend für die Wünsche der User erweitert, verzeiht es mir also bitte, wenn es also mal Einstellungen gibt, die es noch nicht auf die Wiki Seite geschafft haben. Nach
bisheriger Erfahrung ist das ca. ständig so 😄 

Speichere zum Schluss deinen Datenpunkt mit Klick auf "Speichern".

Die Reihenfolge der Datenpunkte konnte früher per langem Tippen mit Drag & Drop angepasst werden, du kannst die Datenpunkte weiterhin sortieren, dies hat jedoch nur mehr Auswirkung auf die Liste in den Einstellungen. Die Sortierung der Datenpunkte auf den einzelnen Seiten kann nun individuell angepasst werden, mehr dazu weiter unten.

Über das Filter-Icon rechts oben, kannst du Liste der Datenpunkte filtern um nur jene einer bestimmten Seite anzuzeigen. Wenn du die Einstellungen nicht über das Drawer Menü sondern über das Einstellungen Icon rechts oben im Dashboard öffnest, wird die Liste der Datenpunkte automatisch für die zuletzt geöffnete Seite des Dashboards gefiltert, so kannst du schneller gezielt eine Seite bearbeiten.

### Schritt 3: Dashboard ansehen

Wenn du Seiten erstellt und deine ersten Datenpunkte hinzugefügt hast, verlasse die Einstellungen per Klick auf das Zurück-Icon links oben. Wenn du etwas geändert hast und mit einem IOB Mobile Account angemeldet bist, wirst du gefragt ob du deine gesamte App Konfiguration im Account sichern möchtest. Du kommst direkt zum Dashboard mit deinen Seiten und Datenpunkten.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/12-dashboard_framed.png?raw=true" width="247" height="500">

Über das Sortier-Icon in der Navigationsleiste kannst du die Anordnung der Datenpunkte auf der aktuell sichtbaren Seite nach deinen Wünschen anpassen, sowie Trennlinien mit Bereichstiteln und eigene
Kacheln die rein nur der Navigation dienen einfügen. Mehr dazu findest du bei der Erklärung zu den Darstellungs Optionen von Dashbaord Seiten.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/gif/23-page-datapoint-sort.gif?raw=true" width="247" height="500">

### Dashboard schließen
Wähle im Drawer Menü *Dashboard schließen* um das aktuelle Dashboard zu schließen und zurück zur Startseite zu gelangen. Wenn du die App öffnest und das zuletzt geöffnete Dashboard nicht erreichbar ist wird dieses automatisch geschlossen.


