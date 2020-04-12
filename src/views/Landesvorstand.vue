<template>
  <div>
    <Header :sticky="true"/>
    <div v-for="person in landesvorstand" v-bind:key="person.name"
             class="landesvorstand-kacheln">
        <PersonKachel class="landesvorstand-kachel" :person="person" :color="magenta"/>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import PersonKachel from '../components/PersonKachel'

  export default {
    name: 'Landesvorstand',
    components: { Header, PersonKachel },
    //methods: {
    //  schalte_leitung_anzeigen_um () {
    //    this.zeige_details_leitung = !this.zeige_details_leitung
    //  }
    //}
    computed: {
      landesvorstand () {
        return this.$store.getters.landesvorstand
      },
      magenta(){
          return "yellow";
      }
    },

  }
</script>

<style scoped>
    .landesvorstand-kacheln{
        margin: 1rem;
    }

</style>
