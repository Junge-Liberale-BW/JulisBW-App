<template>
  <div class="kalender-header">
    <h3 class="text-center">
      {{ month }} {{ year }}
    </h3>

    <i class="switch-icon la la-list la-2x clickable"
       @click="zeige_liste"
    ></i>
  </div>
</template>

<script>
  export default {
    name: 'KalenderHeader',

    props: [
      'month',
      'year'
    ],

    methods: {
      zeige_liste () {
        this.$store.dispatch('wechsel_seite', {'name':'Terminliste'})
      }
    }
  }
</script>

<style scoped>

</style>
