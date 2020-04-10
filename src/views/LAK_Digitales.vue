<template>
  <div>
    <div id="lakbackground">
      <i class="las la-sitemap la-8x"></i>
      <h1>LAK DIGITALES & MEDIEN</h1>
    </div>
    <div class="container">
      <p>IT ist ein essentieller Bestandteil unseres Lebensalltags.
      Sie kann individuelle Freiheit beflügeln und Innovation fördern, aber auch Menschen unterdrücken und wenigen Akteuren überproportional viel Macht über unsere gesellschaft verleihen.</p>
      Dieser LAK befasst sich mit der Frage was Politik tun oder lassen sollte,
      um IT zum Wohle der Gesellschaft und nicht zu ihrem Schaden zu gebrauchen.<br>
      <div class="text-center">
        <button type="button" class="button-cyan">JETZT ZUM LAK ANMELDEN</button>
      </div>

       <div class="card mb-3 border-custom mx-auto">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/50" class="card-img" alt="Timo Breuninger">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">LEITUNG</h5>
              <h5 class="card-title2">TIMO BREUNINGER</h5>
              <p class="card-text">Elektroingenieur</p>

            <div class="text-center">
              <a class="btn-link clickable"
                @click="schalte_leitung_anzeigen_um"
                @touchmove="schalte_leitung_anzeigen_um"
              >
                <i class="las la-angle-down"></i>
              </a>
             </div> 
             
            </div>
          </div>
        </div>
      </div>

              <div v-if="zeige_details_leitung === true"
                id="zusatzinhalt-leitung"
              >
                <ul class="mt-4">
                  <li>er ist zuständig für die Organisation von Vernastaltungen Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt </li><hr>
                  <li><a href="mailto:max.m@example.com"><i class="las la-envelope la-2x"></i>NACHRICHT SCHREIBEN</a></li>
                </ul>
              </div>

      <div class="card mb-3 border-custom mx-auto">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/50" class="card-img" alt="Mirjam Aron">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">STELLVERTRETERIN</h5>
              <h5 class="card-title2">MIRJAM ARON</h5>
              <p class="card-text">Studentin der Rechtswissenschaft</p>
            </div>
          </div>
        </div>
      </div>
      <p>Du interessierst dich für das Thema Digitales & Medien und möchtest dich im Landesarbeitskreis engagieren?</p>
      <p>Dann trage dich jetzt in den Verteiler ein, um über alle Termine und Neuigkeiten informiert zu sein!</p>
      <div class="text-center">
        <button type="button" class="button-cyan">JETZT ZUM LAK ANMELDEN</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Verband',

    data(){
      return {
        'zeige_details_leitung': false
      }
    },

    methods:{
      schalte_leitung_anzeigen_um(){
        this.zeige_details_leitung = !this.zeige_details_leitung;
      }
    }

  }
</script>

<style scoped>

.container{
  font-weight: bold; padding: 5% 8% -5% 8%;
}
h1, .la-sitemap{
  text-align: center;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#lakbackground{
  width: 100%; background-color: #e5007d;
}
.la-sitemap{
  padding-bottom: 1%;
  padding-top: 5%;
}
h1{
  font-size: 150%;
  font-weight: bolder;
  padding-bottom: 7%;
}
.button-cyan{
  background-color: #009EE3;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin:7% auto;
  cursor: pointer;
  border-radius: 8px;
}
.button-cyan:hover{
  background-color: #008b8b;
}
.card-title{
  font-weight: bold;
  color: black;
}
.card-title2{
  font-weight:bolder;
  color: #e5007d;
}
.card-text{
 font-weight:bold;
 color: #e5007d;
 margin-top: -3%;
}
.border-custom{
  border-color: #e5007d;
  border-width: medium;
}
#zusatzinhalt-leitung{
  background-color: #e5007d;
  margin-top: -7% !important;
  padding-bottom: 2px;
  padding-right: 2%;
  color: white;
}
#zusatzinhalt-leitung a:link{
  color:white;
}
.la-envelope{
  vertical-align: middle;
}
</style>
