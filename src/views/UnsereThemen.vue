<template>
  <div>
    <Header />
    <div class="kachel-wrapper">
      <div
        v-for="(properties, titel) in themen_liste"
        v-bind:key="titel"
        class="wide-kachel-wrapper"
      >
        <div class="wide-kachel" @click="wechsel_seite(titel)">
          <i :class=" 'las la-4x la-' + properties.icon + ' wide-kachel-i'"></i>
          <br />
          {{properties.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";

export default {
  name: "UnsereThemen",
  components: { Header },
  computed: {
    themen_liste() {
      return this.$store.getters.unsereThemen;
    }
  },

  methods: {
    wechsel_seite(titel) {
      this.$store.dispatch("wechsel_seite", { name: "Themen-Ansicht" , params: {id:titel} });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
