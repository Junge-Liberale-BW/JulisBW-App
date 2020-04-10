<template>
  <div>
    <Calendar
      :attributes="attributes"
      is-expanded
      class="kalender"
    />
  </div>
</template>

<script>

  import Calendar from 'v-calendar/lib/components/calendar.umd'

  export default {
    name: 'Kalender',

    components: {
      Calendar
    },

    computed: {
      attributes () {
        return [
          {
            key: 'heute',
            fillMode: 'none',
            highlight: 'gray',
            dates: new Date(),
          },
          {
            key: 'event_tage',
            highlight: true,
            dates: this.termine_tage,
          },
          // {
          //   key: 'event_tag_markiert',
          //   fillMode: 'none',
          //   highlight: 'pink',
          //   dates: this.termine_tage
          // }

        ]
      },
      termine_data(){
        return this.$store.getters.termine;
      },
      termine_tage(){
        let termin_tage = [];
        for(let termin in this.termine_data){
          termin = this.termine_data[termin];
          let current_date = new Date(termin.Datum);
          termin_tage.push(current_date);
        }

        return termin_tage;
      }
    }
  }
</script>

<style scoped>
  .kalender {
    border: 0
  }
</style>
