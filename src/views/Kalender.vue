<template>
  <div>
    <Calendar
      :attributes="attributes"
      is-expanded
      class="kalender"
      @dayclick="change_current_day"
    />

    <KalenderVeranstaltungsVorschau
      :selected_day="current_day"
    />
  </div>
</template>

<script>

  import Calendar from 'v-calendar/lib/components/calendar.umd'
  import KalenderVeranstaltungsVorschau from '../content/KalenderVeranstaltungsVorschau'

  export default {
    name: 'Kalender',

    components: {
      KalenderVeranstaltungsVorschau,
      Calendar
    },

    data () {
      return {
        'current_day': new Date()
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
      }
    },

    methods: {
      change_current_day (payload) {
        this.current_day = new Date(payload.date)
      }
    }
  }
</script>

<style scoped>

  .kalender {
    border: 0
  }

</style>
