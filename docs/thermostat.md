# Datenpunkt Typ "Thermostat"
DP Typ "Thermostat", konfiguriert wird der Datenpunkt mit der aktuellen Temperatur. Zusätzlich müssen angegeben werden:

- Aktueller Status --> Boolean ob die Heizung an oder aus ist, wenn hier ein Datenpunkt gesetzt wird der "null" zurückgibt, geht die Kachel davon aus, dass an/aus nicht angezeigt und gesteuert werden kann und blendet es aus
- Status setzen --> Datenpunkt um an/aus zu setzen, kann identisch zum DP für den aktuellen Status sein oder aber auch unterschiedlich. Wenn der Wert von Aktueller Status null ist, wird Status setzen nicht verwendet
- Aktuelle Zieltemperatur --> die aktuell gesetzte Zieltemperatur
- Zieltemperatur setzen --> DP um die Zieltemperatur zu setzen, kann identisch zu Aktuelle Zieltemperatur sein oder unterschiedlich, je nachdem wie es benötigt wird

Der letzte DP der konfiguriert werden kann ist für die Presets, dieser ist optional. Der Datenpunkt für die Presets muss ein gültiges JSON Objekt zurückliefern, entweder mit den DP Typ String (Zeichenkette) oder JSON im ioBroker. Der Inhalt muss folgendermaßen aufgebaut sein:

```
{
  "presetId": "0_userdata.0.thermostat.active_preset",
  "setPresetId": "0_userdata.0.thermostat.active_preset",
  "presets": [
    {
      "name": "Auto",
      "value": 0
    },
    {
      "name": "Absenkung",
      "value": 1
    },
    {
      "name": "Party",
      "value": 2
    },
    {
      "name": "PV Auto-Modus",
      "value": 3
    }
  ]
}
```

- presetId: Datenpunkt, der das aktuell aktive Preset zurückgibt
- setPresetId: Datenpunkt zum Setzen eines Presets, kann identisch sein zu presetId oder unterschiedlich, je nach Bedarf
- presets: Liste mit Presets, jedes Preset hat:
- - name: Anzeigename
- - value: Wert der in setPresetId geschrieben werden muss, um das Preset auszuwählen

In der DP Konfiguration sieht das folgendermaßen aus:

---

<img width="1170" height="2532" alt="Image" src="https://github.com/user-attachments/assets/86fb54f2-50cd-4fe8-b64b-00ce0731a280" />

---

in der UI wird es dann als Thermostat Kachel angezeigt:

---

<img width="1170" height="2532" alt="Image" src="https://github.com/user-attachments/assets/070fc299-ebbb-4d9a-b795-7fad7f39b272" />

---

Das Preset kann dann gewechselt werden, dabei wird der Wert in "value" in den DP der in "setPresetId" angegeben ist geschrieben.

---

<img width="1170" height="2532" alt="Image" src="https://github.com/user-attachments/assets/07e73764-7c67-482b-bb2e-43fe6ccfde59" />

## Zusammengefasst kann die Kachel also:

- Anzeige der aktuellen Temperatur (+ Modus, wenn Presets konfiguriert sind)
- wenn der Status DP einen boolean liefert ob die Heizung an/aus ist, kann über die Kachel die Heizung an/aus gemacht werden
- Zieltemperatur anzeigen und setzen
- wenn Presets konfiguriert sind: Anzeige aktive Preset und Wechsel zu einem anderen Preset
