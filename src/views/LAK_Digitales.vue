<template>
  <div>
    <LAK
      name="digitales"
    />
  </div>
</template>

<script>
  import LAK from '../components/LAK'

  export default {
    name: 'Verband',
    components: { LAK },
    data () {
      return {
        'zeige_details_leitung': false
      }
    },
    methods: {
      schalte_leitung_anzeigen_um () {
        this.zeige_details_leitung = !this.zeige_details_leitung
      }
    }
  }
</script>

<style scoped>

</style>
