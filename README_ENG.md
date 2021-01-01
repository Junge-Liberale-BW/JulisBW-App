# JuLis-BW App (translation WIP)
--> [GERMAN VERSION](README.md) <--

## Info

### Preview

A Browser Preview can be found at https://junge-liberale-bw.github.io/JulisBW-App/.

### Idea

App for the "Jungen Liberalen Baden-Württemberg".

The app should help our members and interested people to find information about our organisation, read our member magazine 'Juliette' or listen to our podcast 'Freiheitsfunk'.

current features:
- introduction to our organisation
- introduction to our main topics
- introduction to our board members
- introduction to our working groups (LAKs)
- explanation of the structure of our organisation
- explanation of relevant terms and abbrevations
- reader of our membermagazine 'Juliette'
- Links to relevant Websites (Merchshop, Newsletter, Podcast, LAK Anmeldung)

planned features:

- Podcast
- event calendar

### Design

The app design is oriented towards the Corporate Design of the "Jungen Liberale".

#### Fonts

currently Montserrat from Regular to Black.

#### Farben

- mainly white, magenta (#e5007d)
- accents in cyan (#009ee3), gelb (#ffed00)

### information for developers

The project consists of two parts. The Vue webversion ([see #Vue](#vue)) and the Cordova project fop Android and iOS apps([see #Cordova](#cordova)).

#### dependencies

- axios (http request)
- bootstrap (Styling) https://getbootstrap.com/
- line-awesome (Icons) https://icons8.com/line-awesome
- vue, vue-router, vue-touch, vuex

more in `package.json`

#### Directory structure

- `/src`: development directory
  - assets: images, Fonts, style sheets, text content as `.json`
  - components: reusable Vue components
  - router: config of frontend routing
  - store: config of vuex store
  - views: app pages
- `/dist`: buil directory of webversion (local, refresh with `npm run build`)
- `/src-cordova`: cordova project (local, [see Cordova](#cordova))

## Vue

### Vue installation

1. clone repository 
2. install node.js & npm
3. run `npm install` in cloned repository. (Dieser Schritt sollte alle benötigten Pakete aus `package.json` installieren. [siehe #Fremdpakete](#verwendete-frempakete))

### run webversion in browser

- run `npm run serve`
- app can be found at http://localhost:8080/ .

### Deploy webversion with github-pages

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

