<template>
  <div>
    <KalenderHeader
      :year="current_year"
      :month="get_current_month_mapped"
    />

    <KalenderVeranstaltungsVorschau
        :selected_day="new Date()"
        :max_items="9999"
    />
  </div>
</template>

<script>
  import KalenderHeader from '../content/KalenderHeader'
  import KalenderVeranstaltungsVorschau from '../content/KalenderVeranstaltungsVorschau'

  export default {
    name: 'Terminliste',
    components: {
      KalenderHeader,
      KalenderVeranstaltungsVorschau
    },

    computed:{
      current_date () {
        return this.$store.getters.currentDate
      },
      current_day () {
        return this.current_date.getDate()
      },
      current_month () {
        return this.current_date.getMonth()
      },
      current_year () {
        return this.current_date.getFullYear()
      },

      get_current_month_mapped(){
        switch (this.current_month) {
          case 1: return 'Januar';
          case 2: return 'Februar';
          case 3: return 'März';
          case 4: return 'April';
          case 5: return 'Mai';
          case 6: return 'Juni';
          case 7: return 'Juli';
          case 8: return 'August';
          case 9: return 'September';
          case 10: return 'Oktober';
          case 11: return 'November';
          case 12: return 'Dezember';
          default: return '';
        }
      }
    },

  }
</script>

<style scoped>

</style>
