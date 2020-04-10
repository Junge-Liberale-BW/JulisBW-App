<template>
  <div>
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
      'selected_day'
    ],

    watch:{
        'selected_day': function () {
          this.gib_anstehende_veranstaltungen();
        }
    },

    mounted () {
      this.gib_anstehende_veranstaltungen();
    },

    data(){
      return {
        'anstehende_veranstaltungen': this.veranstaltungen_liste
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

          if (veranstaltung_datum < this.selected_day || veranstaltung.length > 5) {
            continue
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
