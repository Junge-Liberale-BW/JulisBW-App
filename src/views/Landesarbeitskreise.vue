<template>
  <div>

    <Header/>

    <div class="col-12">
      <div class="row justify-content-center kachel-wrapper">
        <div v-for="(properties, titel) in lak_liste" v-bind:key="titel"
             class="col-6 col-sm-3 col-lg-2 lak-kachel-wrapper"
        >
          <div class="lak-kachel"
               @click="wechsel_seite(titel)"
          >
            <i :class=" 'las la-4x la-' + properties.icon"></i>
            <br>
            {{properties.title}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'

  export default {
    name: 'Landesarbeitksreise',
    components: { Header },
    computed: {
      lak_liste () {
        return this.$store.getters.laks
      }
    },

    methods: {
      wechsel_seite (titel) {
        this.$store.dispatch('wechsel_seite', {'name': "lak/" + titel})
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
