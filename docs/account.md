## IOB Mobile Account

Ein IOB Mobile Account ist optional. Du kannst die App auch ohne Login verwenden. Das Konto ist vor allem für Cloud-Backups, Wiederherstellung über mehrere Geräte und für die kontoabhängigen PRO-Funktionen gedacht.

### Was der Account bringt

- Cloud-Backups deiner gesamten lokalen App-Konfiguration
- Wiederherstellung dieser Konfiguration auf anderen Geräten
- Vergleich verfügbarer Online-Backups mit deinem aktuellen lokalen Stand
- 30 Tage kostenloser PRO-Test nach der Registrierung
- kontoabhängige, plattformübergreifende PRO-Nutzung auf bis zu 5 Geräten - auch auf der jeweils anderen Plattform

### Registrierung und Anmeldung

- Registriert wird mit E-Mail-Adresse und Passwort.
- Nach der Registrierung wird eine Verifizierungs-E-Mail verschickt.
- Die Verifizierung muss auf einem Gerät geöffnet werden, auf dem IOB Mobile installiert ist.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/framed/01-start_framed.png?raw=true" width="247" height="500">

### E-Mail-Verifikation

Die Verifikation ist nicht nur formal wichtig, sie Voraussetzung dafür, dass plattformübergreifiges PRO-Sharing über den Account genutzt werden kann.

In den Account-Einstellungen siehst du:

- ob deine E-Mail verifiziert ist
- ob Cross-Platform-Abo-Sharing verfügbar ist
- auf wie vielen Geräten ein geteiltes Abo derzeit verwendet wird

### Passwort zurücksetzen

- Das Zurücksetzen wird per E-Mail-Link gestartet.
- Der Link muss auf einem Mobilgerät mit installierter IOB-Mobile-App geöffnet werden.

### Cloud-Backups

Wenn du mit einem Account angemeldet bist, kannst du die gesamte lokale App-Konfiguration sichern. Dazu gehören:

- alle Konfigurationen
- alle Seiten
- alle Datenpunkte
- MQTT-Einstellungen je Konfiguration

Die App speichert serverseitig die letzten 4 Backups pro Benutzerkonto. Beim Wiederherstellen wird die komplette lokale Konfiguration überschrieben.

### Backup prüfen und wiederherstellen

In den Account-Einstellungen findest du:

- `Backup prüfen`
- `Konfiguration sichern`
- `Backup wiederherstellen`

Beim Prüfen oder Wiederherstellen zeigt die App:

- Zeitpunkt des Backups
- enthaltene Konfigurationen
- Seiten und Datenpunkte je Konfiguration
- lokale und Online-Stände im Vergleich

### PRO über den Account

- 30 Tage Testzeitraum nach Registrierung
- Freigabe einer aktiven iOS- oder Android-PRO-Lizenz auf bis zu 5 Geräte, auch der jeweils anderen Plattform

Wichtig:

- Die App prüft das Gerätelimit, ist das Limit erreicht, kann kein weiteres Gerät die geteilte Lizenz nutzen, bis ein Gerät entfernt wird.
- Die Geräteverwaltung ist direkt in der App erreichbar.

### Account löschen

Beim Löschen des Accounts:

- werden Cloud-Backups entfernt
- geht Cross-Platform-Sharing verloren
- bleiben lokale Daten auf dem Gerät erhalten

Das Löschen eines Accounts kann **nicht** rückgängig gemacht werden.

### Verwandte Themen

- [IOB PRO](./iob-pro)
- [Einstellungen](./settings)
