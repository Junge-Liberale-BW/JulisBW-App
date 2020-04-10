<template>
  <div>
      <img :src="$store.state.headerBilder[$route.name]">
  </div>
</template>

<style scoped>
img {
    width: 100vw;
    height: auto;
}
</style>