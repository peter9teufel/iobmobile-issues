## ioBroker Setup
Um IOB Mobile nutzen zu können, musst du in deiner ioBroker Instanz den **simple-api** und den **socketio** Adapter installieren und jeweils eine Instanz hinzufügen. In den Einstellungen der beiden Adapter kannst du die Ports festlegen, diese benötigst du bei der Konfiguration von IOB Mobile. Die Standard Ports sind 8087 bei SimpleAPI und 8084 bei SocketIO.

Zusätzlich kannst du den MQTT Broker/Client Adapter hinzufügen. Wenn du MQTT nutzt, kannst du mit IOB Mobile Statusinformationen zum Akku deines Geräts via MQTT zu ioBroker senden, so kannst du beispielsweise einen Smartplug an dem dein Smarthome Tablet hängt abhängig vom Akkustand schalten um den Akku regelmäßig zu entladen. Zusätzlich ermöglicht die Nutzung von MQTT das Sichern deiner IOB Mobile Dashboards in ioBroker um diese auf anderen Geräten wiederherzustellen, immer wenn du etwas an einem deiner Dashboards änderst, wird ein Backup dieses Dashboards als Objekt der ersten MQTT Instanz (mqtt.0.*) gespeichert. Die Anzahl an MQTT Backups ist unbegrenzt, wenn du alte MQTT Backups deiner Dashboards löschen möchtest, kannst du das einfach im Objektbaum deiner ioBroker Instanz tun. In den Instanzeinstellungen des MQTT Adapters kannst du wieder den Port, sowie Username und Passwort zur Nutzung von MQTT festlegen. Der Standardport ist 1883.

Grundsätzlich empfehlen wir, die Standardports zu verwenden, du kannst natürlich auch andere Ports definieren, musst diese dann aber beim Setup von IOB Mobile entsprechend anpassen.

## IOB Mobile Konfiguration

Die Basis deiner Dashboards in IOB Mobile sind die Konfigurationen zum Verbinden mit deiner ioBroker Instanz. Tippe auf das "+" auf dem Startbildschirm um eine Konfiguration zu erstellen. Der Rest sollte selbsterklärend sein, wähle einen Namen für das Dashboard deiner neuen Konfiguration und trage die Einstellungen zum Verbinden mit deiner ioBroker Instanz ein. Die benötigten Ports und Einstellungen hast du vorhin in den simple-api, socketio und mqtt Instanzen festgelegt. Gib deinen Geräten eindeutige MQTT Namen, diese sind wichtig, wenn du Gerätedaten (Ladestand Akku, Status des Akkus, etc.) überträgst, da diese Infos in einem Unterordner im mqtt.0.* Objektbaum mit dem MQTT Namen des jeweiligen Gerätes abgelegt werden.

Speichere deine Konfiguration wenn alle Einstellungen vorgenommen wurden, die neue Konfiguration scheint nun auf der Startseite auf. Tippe auf eine Konfiguration um sie zu öffnen, tippe lange auf eine Konfiguration um sie zu bearbeiten, zu duplizieren oder zu löschen.

<img style="margin: 16px 32px 16px 16px" src="https://github.com/peter9teufel/iobmobile-issues/blob/main/screenshots/gif/03-config.gif?raw=true" width="247" height="500">

Du kannst für die gleiche ioBroker Instanz mehrere Konfigurationen anlegen um so verschiedene Dashboards für verschiedene Anwendungsfälle zu realisieren. Beispielsweise kannst du ein Dashboard für dein Smartphone erstellen welches eine umfangreiche Steuerung deines Smarthomes erlaubt und ein zweites Dashboard für ein Smarthome Tablet an der Wand, welches schnellen Zugriff auf die wichtigsten Daten und oft genutzte Funktionen oder Szenen bietet.


