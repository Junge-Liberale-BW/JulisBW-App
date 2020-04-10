<template>
  <div>
    <KalenderHeader
      :month="get_current_month_mapped"
      :year="current_year"
    />

    <Calendar
      :attributes="attributes"
      is-expanded
      class="kalender"
      @dayclick="change_current_day"
      @update:to-page="change_month_and_year"
    />

    <KalenderVeranstaltungsVorschau
      :selected_day="current_day"
    />
  </div>
</template>

<script>

  import Calendar from 'v-calendar/lib/components/calendar.umd'
  import KalenderVeranstaltungsVorschau from '../content/KalenderVeranstaltungsVorschau'
  import KalenderHeader from '../content/KalenderHeader'

  export default {
    name: 'Kalender',

    components: {
      KalenderHeader,
      KalenderVeranstaltungsVorschau,
      Calendar
    },

    data () {
      return {
        'current_day': new Date(),
        'current_month': new Date().getMonth(),
        'current_year': new Date().getFullYear()
      }
    },

    computed: {
      attributes () {
        return [
          {
            key: 'heute',
            highlight: {
              color: "gray",
              fillMode: 'light',
              contentClass: 'italic',
            },
            dates: new Date(),
          },
          {
            key: 'event_tage',
            highlight: {
              color: 'pink'
            },
            dates: this.termine_tage,
          },
        ]
      },
      termine_data () {
        return this.$store.getters.termine
      },
      termine_tage () {
        let termin_tage = []
        for (let termin in this.termine_data) {
          termin = this.termine_data[termin]
          let current_date = new Date(termin.Datum)
          termin_tage.push(current_date)
        }

        return termin_tage
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

    methods: {
      change_current_day (payload) {
        this.current_day = new Date(payload.date)
      },
      change_month_and_year(payload){
        this.current_month = payload.month;
        this.current_year = payload.year;
      }
    }
  }
</script>

<style scoped>

  .kalender {
    border: 0
  }

</style>
