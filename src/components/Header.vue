<template>
  <div>
      <img v-if="$store.state.headerBilder[$store.state.aktuelleSeite]" :src="$store.state.headerBilder[$store.state.aktuelleSeite]">
  </div>
</template>

<script>
export default {
    data: function () {
        return {

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