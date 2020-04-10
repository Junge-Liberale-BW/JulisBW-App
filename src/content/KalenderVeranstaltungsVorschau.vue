<template>
  <div>

    <div v-if="!mindestens_eine_veranstaltung" class="col-12 mb-3">
      <div class="row veranstaltungs-vorschau-item">
        <div class="datum-tag keine-veranstaltungen">
          {{selected_day.getDate()}}
        </div>

        <div class="info-text keine-veranstaltungen-text">
          An diesem Tag finden leider keine <br> Veranstaltungen statt
        </div>

      </div>
    </div>

    <div v-for="(kommende_veranstaltung, index) in anstehende_veranstaltungen"
         v-bind:key="index"
    >
      <VeranstaltungsVorschauItem
        :veranstaltung="kommende_veranstaltung"
        :gewaehlter_tag="selected_day"
      />
    </div>
  </div>
</template>

<script>

  import VeranstaltungsVorschauItem from '../components/VeranstaltungsVorschauItem'

  export default {
    name: 'KalenderVeranstaltungsVorschau',

    components: {
      VeranstaltungsVorschauItem
    },

    props: [
      'selected_day',
      'max_items'
    ],

    watch:{
        'selected_day': function () {
          this.gib_anstehende_veranstaltungen();
          this.$forceUpdate();
        }
    },

    mounted () {
      this.gib_anstehende_veranstaltungen();
    },

    data(){
      return {
        'anstehende_veranstaltungen': this.veranstaltungen_liste,
        'mindestens_eine_veranstaltung': false
      }
    },

    computed: {

      veranstaltungen_liste () {
        return this.$store.getters.termine
      },


    },
    methods:{
      gib_anstehende_veranstaltungen () {
        this.anstehende_veranstaltungen = [];
        for (let veranstaltung in this.veranstaltungen_liste) {
          veranstaltung = this.veranstaltungen_liste[veranstaltung]
          let veranstaltung_datum = new Date(veranstaltung.Datum)

          if (veranstaltung_datum.getTime() < this.selected_day.getTime() || this.anstehende_veranstaltungen.length > this.max_items) {
            continue
          }
          if(veranstaltung_datum.getTime() === this.selected_day.getTime()){
            this.mindestens_eine_veranstaltung = true;
          }
          veranstaltung.Datum = veranstaltung_datum;
          this.anstehende_veranstaltungen.push(veranstaltung)
        }

      },
    }
  }
</script>

<style scoped>

</style>
