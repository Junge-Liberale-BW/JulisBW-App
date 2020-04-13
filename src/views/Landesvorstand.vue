<template>
  <div>
    <Header />
    <div
      v-for="(person, index) in landesvorstand"
      v-bind:key="person.name"
      class="landesvorstand-kacheln"
    >
      <PersonKachel
        class="landesvorstand-kachel"
        :id="index"
        :person="person"
        :color="getColor(index)"
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
      console.log(id);
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
