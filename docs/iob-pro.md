## IOB PRO Abo
Mit einem IOB PRO Abo unterstützt du die Weiterentwicklung von IOB Mobile und erhältst Zugriff auf alle Funktionen der App.

Die gratis Version der App enthält:
* 1 Dashboard Konfiguration
* max. 3 Seiten
* bis zu 20 Datenpunkte für dein Dashboard
* die meisten Typen von Datenpunkten für dein Dashboard

Mit einem IOB PRO Abo erhältst du:
* beliebig viele Dashboard Konfigurationen
* beliebig viele Dashboards für die gleiche ioBroker Instanz
* Erstellen beliebiger Dashboards für mehrere ioBroker Instanzen
* alle Typen von Datenpunkten inkl. Kamera-Streams und Mediensteuerung für Alexa und Sonos
* Backup/Restore der gesamten App Konfiguration über deinen IOB Mobile Account
* Backup/Restore deiner Dashboard Konfiguration direkt über ioBroker, entweder als einzelnes Dashboard über den manuell erstellten Datenpunkt **0_userdata.0.iobmobile.configurations** oder mehrere Dashboards wenn du MQTT nutzt
* Zugriff auf alle zukünftigen Erweiterungen und Funktionen von IOB Mobile

### Ein Abo für Allest
Es gibt genau **ein** IOB PRO Abo welches alle Funktionen freischaltet, daran wird sich auch in Zukunft nichts ändern. Dieses Abo bietet dir uneingeschränkten Zugriff auf alle zukünftigen Erweiterungen. Außerdem kannst du jederzeit über unseren Issue Tracker Wünsche für Erweiterungen einreichen, dabei werden die Wünsche von IOB PRO Abo Nutzern höher priorisiert.

## Fehler, Bugs und Wünsche für Erweiterungen
Wenn du Fehler in der App findest, eine Idee für eine Erweiterung der App hast oder ein spezielles Gerät hast, welches noch nicht optimal unterstützt wird (zB. eine andere Art von Rollladen Aktor), dann öffne gern ein neues Issue in unserem Issuetracker. Wir finden natürlich nicht alle Fehler selbst und so mancher Nutzer kommt auf Ideen die wir selbst noch nicht hatten. So haben wir eure Ideen, Wünsche und Bugreports an einem Punkt gesammelt und können uns bestmöglich darum kümmern. Für Wünsche zu Erweiterungen und neuen Geräten geben wir hier IOB PRO Abonennten höhere Prioriät, da diese die Entwicklung aktiv unterstützen. Bei Fehlern gilt dies natürlich nicht.

## Skripte
Es macht nicht immer Sinn jeden Adapter oder Gerätetyp direkt zu unterstützen, oft lassen sich die gewünschten Daten problemlos mit einem Skript in Userdata Datenpunkten ioBroker aufbereiten, damit
diese dann in der App eingebunden und angezeigt werden können. Wenn du für einen Adapter ein solches Skript geschrieben hast, lass es uns gerne zukommen. Hier im Issue Repo gibt es einen Ordner
"scripts", in diesem sollen, nach Adaptern sortiert, Skripte gesammelt werden. So finden andere IOB Mobile Nutzer schneller ans Ziel. Die Skripte werden gegebenenfalls noch etwas angepasst, damit
diese möglichst einheitlich sind und sich über ein paar Variablen am Beginn des Skriptes konfigurieren lassen.

Ein erstes Beispiel dafür gibt es bereits für den Trashschedule Adapter.


## Warum ist IOB Mobile nicht Open Source?
Über diese Entscheidung wurde lange nachgedacht, um eine native App für iOS zu veröffentlichen wird ein kostenpflichter Developer Account benötigt, das Backend für die Accountverwaltung verursacht ebenfalls Kosten und gerade in der Startphase der App ist mir die Kontrolle über die Weiterentwicklung sehr wichtig. Daher fiel die Entscheidung, die App als Closed Source zu betreiben. Durch die Unterstützung durch treue Nutzer soll die Weiterentwicklung sichergestellt werden, wobei der einzelne Nutzer nur einen minimalen Beitrag leistet, 99 Cent pro Monat erschienen hier als fair. Zudem ermöglicht dieser Weg ein kontrolliertes Wachstum, ist das Interesse groß und die Nutzerzahlen steigen, ermöglicht uns das kontrolliert Entwickler ins Boot zu holen um die Entwicklung weiter voran zu treiben.

## Gibt es eine Lifetime Lizenz?
Grundsätzlich nicht, wobei es technisch schon mal vorbereitet ist. Es ist durchaus möglich, dass zukünftig zusätzlich zum monatlichen Abo noch Optionen für ein jährliches Abo und eine Lifetime Lizenz hinzu kommen. Lifetime Lizenzen für Apps die auch Cloudfeatures über einen User Account anbieten sind immer etwas schwierig in der Preisgestaltung, da schlicht und einfach der laufende Betrieb Kosten verursacht.

