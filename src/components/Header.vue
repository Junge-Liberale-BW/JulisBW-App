<template>
  <div class="header-wrapper" :class=" sticky && 'header-sticky'">
    <img :src="getImg" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["sticky"],
  data() {
    return {
      name: this.$route.params.id,
    };
  },
  computed: {
    getImg() {
      if (this.$route.name === "Themen-Ansicht") {
        console.log(this.$store.state.headerBilder);
        return this.$store.state.headerBilder[this.$route.params.id];
      } else {
        return this.$store.state.headerBilder[this.$route.name];
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  height: auto;
}
</style>
