# Widgets – Funktionsweise & Hinweise

Widgets ermöglichen es, ausgewählte ioBroker-Datenpunkte direkt auf dem Home-Screen anzuzeigen – ohne die App öffnen zu müssen.  
Je nach Plattform (iOS / Android) unterscheiden sich Funktionsweise und Konfigurationsmöglichkeiten leicht.

---

## Aktuelle Einschränkungen (IOB Widgets v1)

- iOS: **1 Widget pro Größe**
- Android: **1 einzelnes Widget**
- Widget-Konfiguration ist **lokal auf dem Gerät gespeichert**
- Die Aktualisierungsfrequenz kann **nicht garantiert** werden
- Aktualisierungen erfolgen **nur**, wenn ioBroker lokal erreichbar ist

Diese Einschränkungen sind technisch bedingt und werden – wo möglich – in zukünftigen Versionen weiter verbessert.

## Geplante Erweiterung (IOB Widgets v2)

- Datenpunkte, die in Widgets konfiguriert sind, sollen im User Account hinterlegt werden
- Geräte, die sich im lokalen Netzwerk von ioBroker befinden (zB. Smarthome Tablet) aktualisieren die Datenpunkte im User Account
- Das Widget am Smartphone lädt die neuesten Werte aus dem User Account, wenn ioBroker lokal nicht erreichbar ist
- Dadurch könnten auch unterwegs (außerhalb des Heimnetzwerks) die Daten im Widget aktualisiert werden

### Hinweis zur geplanten v2

Für die Umsetzung eines solchen Relay Caches über den IOB User Account ist noch eine umfassende Erweiterung erforderlich. Diese ist für das erste Halbjahr 2026 eingeplant, ich bitte euch daher, bis zur Umsetzung dieser Erweiterung von separaten Issues zu Widget-Updates außerhalb des Heimnetzwerks abzusehen.

---

## Widget-Konfiguration in der App

Die Widget-Einstellungen findest du in der App im Dashboard-Menü unter **„Widgets“**.

Dort legst du fest:
- **welche Datenpunkte** im Widget angezeigt werden
- **in welcher Reihenfolge** sie erscheinen
- **für welche Widget-Größe** sie gelten

Die Konfiguration ist **geräteabhängig** und wird aktuell **nicht synchronisiert**.

---

## iOS Widgets

### Verfügbare Widget-Größen
Unter iOS gibt es **drei feste Widget-Größen**:

| Widget-Größe | Anzahl Datenpunkte |
|--------------|--------------------|
| Klein        | 1                  |
| Mittel       | 1–4                |
| Groß         | 1–8                |

Für **jede Größe** kann eine eigene Auswahl an Datenpunkten hinterlegt werden.

### Anzeige-Logik
- Das **kleine Widget** zeigt genau **einen** Datenpunkt
- Das **mittlere Widget** zeigt bis zu **vier** Datenpunkte
- Das **große Widget** zeigt bis zu **acht** Datenpunkte
- Sind weniger Datenpunkte konfiguriert als Platz vorhanden ist, werden nur diese angezeigt

Aktuell gibt es **genau ein Widget pro Größe** (ein kleines, ein mittleres, ein großes).

---

## Android Widgets

### Flexible Widget-Größe
Unter Android gibt es **ein einzelnes Widget**, dessen Größe frei verändert werden kann.

- Es können **1–9 Datenpunkte** konfiguriert werden
- Das Widget passt sich dynamisch an die verfügbare Fläche an (bis zu **3×3 Layout**)

### Anzeige-Logik (wichtig!)
Die **Reihenfolge der Datenpunkte ist entscheidend**:

- Ist das Widget klein → **nur der erste Datenpunkt** wird angezeigt
- Wird es größer → die **ersten 2, 3, 4, … Datenpunkte** werden angezeigt
- Maximal werden **9 Datenpunkte** dargestellt

👉 Tipp: Lege die Datenpunkte in der Reihenfolge an, in der sie dir am wichtigsten sind. Die Reihenfolge in der Widget-Konfiguration entspricht exakt der Anzeige-Reihenfolge im Widget.

---

## Aktualisierung der Widgets (wichtig zu wissen)

### Grundsätzliches
Widgets werden **nicht permanent aktualisiert**.  
Die Aktualisierung hängt stark vom Betriebssystem ab und kann **nicht zuverlässig erzwungen** werden.

### iOS
- iOS entscheidet selbst, **wann und wie oft** Widgets aktualisiert werden
- Hintergrund-Aktualisierungen können **verzögert oder ausgelassen** werden
- Das ist eine **Systemeinschränkung von iOS** und kein Fehler der App

Es kann daher vorkommen, dass sich Widgets über längere Zeit nicht sichtbar aktualisieren,
obwohl die App korrekt funktioniert. **Vor allem zum Beginn der Nutzung von Widgets kann es auch bis zu 24 Stunden dauern, bis iOS die Aktualisierungen einreiht.**

**Was hilft:**
- Beim Öffnen oder Wiederaufnehmen der App werden die Widget-Daten aktualisiert
- Widgets zeigen immer den **zuletzt erfolgreich geladenen Stand**
- Ein Zeitstempel im Widget zeigt, wann die Daten zuletzt aktualisiert wurden

### Android
- Android erlaubt häufigere und zuverlässigere Aktualisierungen
- Trotzdem kann auch hier das System Updates verzögern (z. B. bei Energiesparmodi)

---

## Offline- oder Verbindungsprobleme

- Ist der ioBroker **nicht erreichbar**, wird das Widget **nicht aktualisiert**
- Bereits geladene Daten bleiben sichtbar
- Die Widget-Konfiguration geht **nicht verloren**, auch wenn:
  - die App geschlossen wird
  - das Dashboard geschlossen wird
  - der ioBroker vorübergehend nicht erreichbar ist

Sobald wieder eine Verbindung möglich ist, werden die Widgets wieder automatisch aktualisiert.

---

## Zusammenfassung

- Widgets zeigen ausgewählte ioBroker-Datenpunkte direkt auf dem Home-Screen
- Die Konfiguration erfolgt in der App unter **Dashboard → Widgets**
- iOS nutzt feste Größen, Android ein flexibles Layout
- Die Reihenfolge der Datenpunkte ist besonders unter Android wichtig
- Die Aktualisierung wird vom Betriebssystem gesteuert und ist nicht erzwingbar

Widgets sind für **schnelle Statusübersichten** gedacht – nicht als Ersatz für das vollständige Dashboard.
