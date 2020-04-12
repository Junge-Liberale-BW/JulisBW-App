<template>
  <div>
    <Header/>
    <div v-for="(person, index) in landesvorstand" v-bind:key="person.name"
             class="landesvorstand-kacheln">
        <PersonKachel class="landesvorstand-kachel" :person="person" :color="getColor(index)"/>
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
      }
    },
    methods:{
        getColor(index){
            let i = parseInt(index)
            if (i < 1){
                return "magenta";
            }else if (i < 5 ){
                return "blue";
            }else {
                return "yellow";
            }
        }
    }

  }
</script>

<style scoped>
    .landesvorstand-kacheln{
        margin: 1rem;
    }

</style>
