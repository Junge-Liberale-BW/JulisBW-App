<template>
  <div>
    <Header />
    <div
      v-for="(k, index) in Object.keys(landesvorstand)"
      v-bind:key="index"
      class="landesvorstand-kacheln"
    >
      <PersonKachel
        class="landesvorstand-kachel"
        :id="index"
        :person="landesvorstand[k]"
        :position="k"
        :color="getColor(index)"
        :foldable="true"
        :folded="index !== activeId"
        v-on:childUnfold="childUnfold($event)"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PersonKachel from "../components/PersonKachel";

export default {
  name: "Landesvorstand",
  components: { Header, PersonKachel },
  computed: {
    landesvorstand() {
      console.log(this.$store.getters.landesvorstand);
      return this.$store.getters.landesvorstand;
    }
  },
  data() {
    return {
      activeId: undefined
    };
  },
  methods: {
    getColor(index) {
      let i = parseInt(index);
      if (i < 1) {
        return "magenta";
      } else if (i < 5) {
        return "blue";
      } else {
        return "yellow";
      }
    },
    childUnfold(id) {
      this.activeId = id;
    }
  }
};
</script>

<style scoped>
.landesvorstand-kacheln {
  margin: 1rem;
}
</style>
