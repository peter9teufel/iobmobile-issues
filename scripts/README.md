# Skriptsammlung
Hier sollen in Zukunft Skripte gesammelt werden, mit denen die Daten eines Adapters so aufbereitet werden, damit diese gut in IOB Mobile eingebunden werden können. Ein erstes Beispiel dafür ist das "trashschedule" Skript für den gleichnamigen Adapter, dieses bereitet die nächsten Abfuhrtermine anhand der Einstellungen im Skript auf und speichert ein formatiertes JSON im Userdata Ordner unter .iobmobile.trashschedule.trashschedule_events welches mit dem DP Typ JSON verwendet werden kann.

# Nutzung
Die Skripte sind so aufgebaut, dass zu Beginn des Skriptes (wenn passend) einzelne Parameter angepasst werden können, um das Verhalten des Skriptes an die eigenen Wünsche anzupassen. Die Skripte sind Javascript Dateien (*.js), um diese in ioBroker zu nutzen, kann der Inhalt eines Skriptes einfach in ein neues Javascript in ioBroker kopiert werden. Die für das Skript nötigen Ordner und Datenpunkte im Userdata Ordner werden immer automatisch vom Skript selbst geprüft und angelegt.

# Skript hinzufügen
Wenn du ein Skript für einen bestimmten Anwendungsfall geschrieben hast und denkst, dass dieses auch anderen Nutzern helfen könnte, dann eröffne am einfachsten ein Issue und stell das Skript rein. Ich überprüfe die Skripte dann, passe diese an, damit der Aufbau und das Format möglichst einheitlich bleibt und stelle sie letztendlich im Ordner 'scripts' hier zur Verfügung.
