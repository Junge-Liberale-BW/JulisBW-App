# JuLis-BW App
>> [ENGLISH VERSION](README_ENG.md) <<

## Informationen zur App

### Preview

Eine Browser Preview findet sich unter https://junge-liberale-bw.github.io/JulisBW-App/.

### Informationen zur Idee

Die App der Jungen Liberalen Baden-Württemberg.

Wir JuLis sind Baden-Württembergs liberale Jugendorganisation. Bei uns sind über 1.100 junge Menschen im Alter von 14 bis 35 Jahren Mitglied geworden, weil sie nicht länger zugucken, sondern anpacken und etwas bewegen wollen.

Mit dieser App wollen wir es Mitgliedern und Interessenten erleichten sich über den Verband zu informieren, unser Mitgliedermagazin 'Juliette' zu lesen oder unseren Podcast 'Freiheitsfunk' zu hören.

Die App ermöglicht einen einfachen und schnellen Zugriff auf alles rund um unseren Verband.

aktuell Verfügbare Funktionen:

- Vorstellung des Verbandes
- Vorstellung unserer Kernthemen
- Vorstellung unseres Landesvorstands
- Vorstellung unserer Landesarbeitskreise
- Erklärungen der Verbandsstrukturen
- Erklärung relevanter Begriffe und Abkürzungen
- Webversion unseres Mitgliedermagazins 'Juliette'
- Links zu relevanten Webseiten der JuLis BW (Merchshop, Newsletter, Podcast, LAK Anmeldung)

geplante Funktionen:

- Podcast
- Veranstaltungskalender

### Informationen zum Design

Die App orientiert sich grundsätzlich am Corporate Design der Jungen Liberalen.

#### Fonts

Aktuell beschränkt sich die App auf die Font Montserrat in Stärken von Regular bis Black.

#### Farben

Hauptsächlich weiß und magenta (#e5007d) mit Akzenten in cyan (#009ee3) und gelb (#ffed00) und leichten Abwandlungen dieser Farben umn Kontraste zu schaffen.

### Informationen für Entwickler

Das Projekt besteht aus zwei Teilen. Einer mit Vue erstellten Webversion ([siehe #Vue](#vue)) und der Übersetzung von Cordova in Android und iOS Apps([siehe #Cordova](#cordova)).

#### Verwendete Frempakete

- axios (http request)
- bootstrap (Styling) https://getbootstrap.com/
- line-awesome (Icons) https://icons8.com/line-awesome
- vue, vue-router, vue-touch, vuex

genauere Informationen in `package.json`

#### Ordnerstrutkur

- `/src`: Arbeitsverzeichnis während der Entwicklung
  - assets: Bilder, Fonts, style sheets, Textinhalte als `.json`
  - components: wiederverwendbare Vue-Komponenten
  - router: Konfiguration vom Frontend-Routing
  - store: Konfiguration vom Vuex-Store
  - views: Seiten der App
- `/dist`: die fertigen Dateien der vue-Web-Version (lokal, aktualisieren mit `npm run build`)
- `/src-cordova`: alle Datein für die Übersetzung zur App (lokal, [siehe Cordova](#cordova))

## Vue

### Vue Installation

1. repository clonen
2. node.js & npm installieren
3. `npm install` im geclonten repository ausführen. (Dieser Schritt sollte alle benötigten Pakete aus `package.json` installieren. [siehe #Fremdpakete](#verwendete-frempakete))

### Webversion im Browser ausführen

- `npm run serve` ausführen
- Die App sollte im Webbrowser nun unter http://localhost:8080/ verfügbar sein.

### Webversion über github-pages deployen

Mit Zugriff auf das repository lässt sich mit dem Skript `deploy.sh` der aktuell gebaute Stand aus `/dist` mit Hilfe von github-pages auf https://junge-liberale-bw.github.io/JulisBW-App/ deployen.

## Cordova

Mit Cordova können wir die Webversion in eine Android und iOS App übersetzen. Damit dies funktioniert muss zunächst das Vue Projekt installiert sein [siehe](#vue-installation).

Damit die Übersetzung von Cordova funktioniert ist wichtig, dass sich der Router der Webversion im Hash-Modus befindet.
In unserem Projektz sollte das bereits der Fall sein.

Bisher wurde nur die Übersetzung für Android getestet.

Beim bauen einer .apk ist wichtig, dass der publicPath in `vue.config.js` des Vue-Projekts `file:///android_asset/www/` ist, während er für die Ansicht im Browser oder das USB-Debuggen `/` sein sollte.

### Cordova Installation

1. Vue Command Line Interface installieren `npm install -g @vue/cli`
2. Cordova installieren `npm install -g cordova`
3. `vue add cordova` ausführen und das Cordova Verzeichnis (hier: `src-cordova`), die gewünschten Plattformen (hier: android und iOS), etc. angeben.

Alle folgenden Beschreibungen/Command-Line-Befehle bzgl. Cordova beziehen sich auf das Verzeichnis der Cordova-App (hier: `/src-cordova`).

### Auf Android-Gerät debuggen

1. Anleitung zum Einrichten eine Android-Geräts zum USB-Debugging befolgen.
2. `cordova run android`

### Debug .apk bauen

Mit `cordova build android --debug` baut cordova eine debug .apk die sich dann in `platforms/android/app/build/outputs/apk/debug/` findet.

### Release .apk bauen

Mit `cordova build android --release` baut cordova eine debug .apk die sich dann in `platforms/android/app/build/outputs/apk/release/` findet.

Um diese beim Google Play Store einreichen zu können, muss sie mit einem Entwicklerschlüssel signiert und (z.B. mit zipalign) aligned werden.

### iOS

Dieser Abschnitt wird zur  nachgetragen, sobald wir einen Workflow für das iOS Deployment gefunden haben.
