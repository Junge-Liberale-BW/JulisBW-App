<template>
  <div class="header-wrapper" :class=" sticky && 'header-sticky'">
      <img :src="gib_bild">
  </div>
</template>

<script>
  export default {
    name: 'Header',
    computed:{
      gib_bild(){
        console.log(this.$route.name);
        return this.$store.state.headerBilder[this.$route.name];
      }
    },
    props: [
      'sticky'
    ],
  }
</script>

<style scoped>
img {
    width: 100vw;
    height: auto;
}
</style>
