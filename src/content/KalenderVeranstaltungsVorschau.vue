<template>
  <div>
    <div v-for="(kommende_veranstaltung, index) in gib_anstehende_veranstaltungen"
         v-bind:key="index"
    >
      <VeranstaltungsVorschauItem
        :veranstaltung="kommende_veranstaltung"
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

    computed: {

      veranstaltungen_liste () {
        return this.$store.getters.termine
      },

      gib_anstehende_veranstaltungen () {
        let verantstaltungen = []

        for (let veranstaltung in this.veranstaltungen_liste) {
          veranstaltung = this.veranstaltungen_liste[veranstaltung]
          let veranstaltung_datum = new Date(veranstaltung.Datum)

          if (veranstaltung_datum < this.selected_day || veranstaltung.length > 5) {
            continue
          }
          veranstaltung.Datum = veranstaltung_datum;
          verantstaltungen.push(veranstaltung)
        }

        return verantstaltungen
      }
    }
  }
</script>

<style scoped>

</style>
