<template>
  <div class="col-lg-6">
    <div class="card mt-4 lak-leiter-kachel">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            :src="leiter.Bild"
            class="card-img"
            alt="Timo Breuninger"
          >
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-uppercase">
              Leitung
            </h5>
            <h5 class="card-title2 text-uppercase">
              {{ leiter.Name }}
            </h5>
            <p class="card-text">
              {{ leiter.Beruf }}
            </p>

            <div class="text-center">
              <a
                class="btn-link clickable"
                @click="schalte_leitung_anzeigen_um"
                @touchmove="schalte_leitung_anzeigen_um"
              >
                <i class="las la-angle-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="zeige_details_leitung === true"
        class="col-12 lak-zusatzinhalt"
      >
        {{ leiter.Zusatztext }}
        <hr>
        <a :mailto="leiter.Email">
          <i class="las la-envelope la-2x " />
          <span class="ml-3"> NACHRICHT SCHREIBEN</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LakLeiterKachel',

    props:[
      'leiter'
    ],

    data () {
      return {
        'zeige_details_leitung': false
      }
    },

    methods: {
      schalte_leitung_anzeigen_um () {
        this.zeige_details_leitung = !this.zeige_details_leitung
      }
    }
  }
</script>

<style scoped>


  h1 {
    font-size: 150%;
    font-weight: bolder;
    padding-bottom: 7%;
  }


  .card-title {
    font-weight: bold;
    color: black;
  }

  .card-title2 {
    font-weight: bolder;
    color: #e5007d;
  }

  .card-text {
    font-weight: bold;
    color: #e5007d;
    margin-top: -3%;
  }

  #zusatzinhalt-leitung a:link {
    color: white;
  }

  .la-envelope {
    vertical-align: middle;
  }
</style>
