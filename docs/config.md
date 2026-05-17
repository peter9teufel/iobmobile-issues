## ioBroker-Konfiguration

Damit IOB Mobile mit deiner ioBroker-Instanz arbeiten kann, müssen die passenden Adapter erreichbar sein.

### Pflichtadapter

Mindestens erforderlich sind:

- `simple-api`
- `socketio`

Für beide Adapter muss jeweils eine Instanz laufen.

Typische Standardports:

- `simple-api`: `8087`
- `socketio`: `8084`

### Optionaler MQTT-Support

Optional kannst du zusätzlich den Adapter `MQTT Broker/Client` verwenden.

MQTT wird in IOB Mobile für diese Funktionen genutzt:

- automatische Dashboard-Backups in ioBroker
- Anzeige und Wiederherstellung mehrerer MQTT-Backups
- Übertragung von Gerätestatus wie Akkustand und Ladezustand

Typischer Standardport:

- MQTT: `1883`

### Host, Protokoll und Authentifizierung

Beim Erstellen einer Konfiguration gibst du im Host-Feld nur den Hostnamen oder die IP-Adresse deiner ioBroker-Instanz an.

- kein `http://`
- kein `https://`
- kein Port

Beispiele:

- richtig: `192.168.1.200`
- richtig: `iobroker.local`
- falsch: `http://192.168.1.200:8081`

Die App ergänzt Protokoll und Ports selbst.

Zusätzliche Optionen pro Konfiguration:

- Authentifizierung für `simple-api` und `socketio`
- HTTPS für `simple-api` und `socketio`
- MQTT aktivieren
- MQTT-Benutzername und Passwort
- Gerätename für MQTT
- Gerätestatus regelmäßig per MQTT senden

### Neue Konfiguration anlegen

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/gif/03-config.gif?raw=true" width="247" height="500">

Der Assistent in der App führt in mehreren Schritten durch:

1. Namen und Host festlegen
2. SimpleAPI- und SocketIO-Port eintragen
3. optional Authentifizierung und HTTPS aktivieren
4. optional MQTT aktivieren
5. optional MQTT-Login hinterlegen
6. optional Gerätestatus per MQTT einschalten

Beim ersten Speichern legt die App automatisch eine erste Seite `Home` an.

### Mehrere Konfigurationen

Du kannst mehrere Konfigurationen anlegen, auch für dieselbe ioBroker-Instanz. Das ist sinnvoll, wenn du verschiedene Dashboards getrennt pflegen willst, zum Beispiel:

- ein kompaktes Smartphone-Dashboard
- ein Wandtablet-Dashboard
- ein separates Dashboard für Gäste oder einzelne Räume

Auf dem Startbildschirm kannst du Konfigurationen:

- öffnen
- bearbeiten
- duplizieren
- löschen

### Verbindungsprüfung

Beim Öffnen einer Konfiguration testet die App die Verbindung gegen `simple-api`. Schlägt der Test fehl, bleibt die Konfiguration zwar lokal vorhanden, das Dashboard kann aber nicht geladen werden.

### MQTT-Besonderheiten

- Für automatische MQTT-Backups verwendet die App die erste MQTT-Instanz, also praktisch `mqtt.0`.
- Verwende pro Gerät einen eindeutigen MQTT-Gerätenamen.
- Dieser Name wird auch für Gerätestatus-Themen verwendet.

### Typische Fehlerquellen

- Host mit Protokoll oder Port eingetragen
- `simple-api` oder `socketio` nicht installiert oder nicht gestartet
- falsche Ports
- HTTPS in der App aktiviert, aber nicht in ioBroker eingerichtet
- Authentifizierung in der App aktiviert, aber Zugangsdaten passen nicht
- MQTT aktiviert, aber Broker oder Zugangsdaten sind falsch

### Verwandte Themen

- [Dashboard konfigurieren](./dashboard-config)
- [Einstellungen](./settings)
