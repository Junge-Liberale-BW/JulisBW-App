<template>
  <div :key="key" id="merch-slider">
      <a target="_blank" href="https://shop.spreadshirt.de/julis-bw">
        <img :src="image[index]">
      </a>
      <div id="points">
        <div @click="changeImage(indexBilder)" v-bind:class="{point: true, active: (indexBilder === index)}" v-for="(each, indexBilder) in image" v-bind:key="indexBilder"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderSlider',
    data: function () {
      return {
        image: [],
        index: 0,
        key: 0,
        interval: undefined
      }
    },
    methods: {
        changeImage: function (index) {
            this.index = index;
            this.key++;
        },
    },
    mounted: function () {
        this.image = this.$store.getters.merchBilder
    }
  }
</script>

<style scoped>
#merch-slider {
    position: relative;
    margin: 20px 10vw;
}

img {
    width: 100%;
    height: auto;
}

#points {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 0;
}

.point {
    width: 10px;
    height: 10px;
    background-color: grey;
    border-radius: 50%;
    margin: 0 5px;
}

.point.active {
    background: white;
    border: 1px solid black;
}
</style>