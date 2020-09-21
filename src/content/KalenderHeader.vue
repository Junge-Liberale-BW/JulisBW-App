<template>
  <div class="kalender-header">
    <h3 class="text-center">
      {{ month }} {{ year }}
    </h3>

    <i
      :class="get_icon_classes"
      @click="wechsel_ansicht"
    />
  </div>
</template>

<script>
  export default {
    name: 'KalenderHeader',

    props: [
      'month',
      'year',
    ],

    computed: {
      get_icon_classes () {
        return {
          'switch-icon': true,
          'clickable': true,
          'la': true,
          'la-2x': true,
          'la-list': this.$route.name === 'Kalender',
          'la-calendar': this.$route.name === 'Terminliste'
        }
      }
    },

    methods: {
      wechsel_ansicht () {

        if (this.$route.name === 'Kalender') {
          this.$store.dispatch('wechsel_seite', { 'name': 'Terminliste' })
        } else {
          this.$store.dispatch('wechsel_seite', { 'name': 'Kalender' })
        }
      }
    }
  }
</script>

<style scoped>

</style>
