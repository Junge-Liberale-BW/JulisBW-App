<template>
  <div>
    <Calendar
      :attributes="attributes"
      color="red"
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


    computed:{
      attributes(){
        return [

          {
            key: 'today',
            fillMode: 'light',
            highlight: 'gray',
            dates: new Date(),
          }

        ]
      }
    }
  }
</script>

<style scoped>
  .kalender{
    border: 0
  }
</style>
