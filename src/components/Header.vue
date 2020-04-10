<template>
  <div>
      <img :src="gib_bild">
  </div>
</template>

<script>
  export default {
    name: 'Header',

    computed:{
      gib_bild(){
        return this.$store.state.headerBilder[this.$route.name];
      }
    }
  }
</script>

<style scoped>
img {
    width: 100vw;
    height: auto;
}
</style>
