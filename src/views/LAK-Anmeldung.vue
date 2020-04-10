<template>
  <div id="LAK-Anmeldung">
      <p>Du möchtest die inhaltliche Arbeit der Jungen Liberalen vorantreiben und deine Ideen einbringen?</p>
      <h2>Zum Landesarbeitskreis anmelden:</h2>

      <div>
          <label>Name: </label>
          <br>
          <input v-model="inputData.name" type="text">
      </div>
      <div>
          <label>E-Mail-Adresse: </label>
          <br>
          <input v-model="inputData.email" type="text">
      </div>
      <div>
          <label>Kreisverband: </label>
          <br>
          <select v-model="inputData.kreisverband">
            <option v-for="(each, index) in kreisverbände" v-bind:key="index" :value="each">{{ each }}</option>
          </select>
      </div>
      <br><br>
      <p>
          Ich Interessiere mich für folgende Landesarbeitskreise:
      </p>
      <div v-for="(each, index) in LAKs" v-bind:key="index">
          <input type="checkbox" :value="each"  v-model="inputData.LKAs">
          <label>{{ each }}</label>
      </div>
      <p class="error" v-if="error">
          {{ error }}
      </p>
      <div>
          <button class="enroll-btn" @click="enrollLAK">Jetzt zum LAK anmelden</button>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            inputData: {
                name: '',
                email: '',
                kreisverband: '',
                LKAs: []
            },
            kreisverbände: [
                'Baden-Baden',
                'Calw',
                'Freudenstadt',
                'Heidelberg',
                'Karlsruhe-Land',
                'Karlsruhe-Stadt',
                'Mannheim',
                'Neckar-Odenwald',
                'Pforzheim',
                'Rastatt',
                'Rhein-Neckar',
                'Böblingen',
                'Esslingen',
                'Göppingen',
                'Heidenheim',
                'Heilbronn',
                'Hohenlohe',
                'Ludwigsburg',
                'Main-Tauber',
                'Ostalb',
                'Rems-Murr',
                'Schwäbisch-Hall',
                'Stuttgart',
                'Freiburg',
                'Konstanz',
                'Lörrach/Waldshut',
                'Ortenau/Offenburg',
                'Rottweil',
                'Schwarzwald-Baar',
                'Tuttlingen',
                'Ravensburg / Bodensee',
                'Reutlingen',
                'Sigmaringen-Zollernalb',
                'Tübingen',
                'Ulm-Biberbach'
            ],
            LAKs: [
                "Arbeit & Soziales",
                "Bildung & Forschung",
                "Digitalisierung und Medien",
                "Europa, Außen & Verteidigung",
                "Finanzen & Steuern",
                "Gesellschaft & Kultur",
                "Gesundheit",
                "Handwerk & Wirtschaft",
                "Innen & Recht",
                "Kommunales",
                "Umwelt & Verkehr",
                "Verbandsentwicklung",
                "Liberale Schüler"
            ],
            error: false
        }
    },
    methods: {
        enrollLAK: function () {
            if (this.inputData.name.length === 0) {
                this.error = "Trage bitte einen Namen ein.";
                return;
            }

            let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
            if (!emailRegex.test(this.inputData.email)) {
                this.error = 'Trage bitte eine korrekte E-Mail ein.';
                return;
            }

            if (this.inputData.kreisverband.length === 0) {
                this.error = "Wähle bitte einen Kreisverband aus";
                return;
            }

            console.log(this.inputData)
        }
    }
}
</script>

<style scoped>
#LAK-Anmeldung {
    padding: 20px;
    font-weight: bold;
}

p {
    text-align: center;
}

h2 {
    text-align: center;
    color: #E5007D;
}

input, select {
    width: 100%;
    border: 2px solid black;
    padding: 5px;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #aeaeae;
    display: inline-block;
    margin: 0 20px;
    position: relative;
}


input[type="checkbox"]:checked::after {
	content: 'x';
	font-size: 20px;
    position: absolute;
    top: -10px;
    left: 3px;
}

input[type="checkbox"]:checked {
    background-color: #FFED00;
    border: 2px solid #009EE3;
}

label {
    margin-bottom: 0px;
}

input:active, input:hover, input:focus, select:active, select:hover, select:focus {
    border: 2px solid #009EE3;
    outline: none;
}

.enroll-btn {
    width: 100%;
    height: 50px;
    margin: 30px 0;
    background-color: #009EE3;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    border-radius: 20px;
    border: none;
}

.enroll-btn:active, .enroll-btn:hover, .enroll-btn:focus {
    background-color: #E5007D;
    outline: none;
}

.error {
    width: 100%;
    padding: 15px;
    margin: 50px 0 0;
    border: 2px dashed #E5007D;
}
</style>