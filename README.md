# JuLis-BW App

## App ausführen
- per Kommandozeile ins Verzeichnis navigieren
- `vue serve src/main.js` ausführen
- die App sollte im Webbrowser nun unter http://localhost:8080/ verfügbar sein

## Fehlende Pakete installieren 

- Die Datei `package.json` enthält eine Liste aller benötigten Fremdpakete.
-  Funktioniert die Anwendung nach einem `git pull` nicht mehr, kann das
daran liegen, dass benötigte  Fremdprodukte auf dem eigenen PC fehlen
- Diese können mit `npm install` installiert werden

## Verwendete weitere Frempakete 

- bootstrap (Styling) https://getbootstrap.com/
    - --> bevor man etwas selber stylt, erstmal in bootstrap gucken
- line-awesome (Iconpalette) https://icons8.com/line-awesome
    - alle Icons kann man anklicken und per dann erscheinenden HTML-Tag direkt einfügen
    - mit `la-XX` kann die Größe festgelegt werden:
        - lg
        - 2x
        - 4x
        - 8x
        - ...
## Ordnerstrutkur
- während der Entwicklung wird grundsätzlich im Verzeichnis `/src` gearbeitet

### assets
- img: Bilder
- sccs: Scss-Styledateien

### components
- wiederverwendbare vue-Komponenten

### router
- Dateien und Configurationen zum Frontend-Routing

### store 
- Dateien und Configurationen zum vuex-Store

### views
- Eigentliche Seiten in der App
- **hier sollte schon alles angelegt sein**
