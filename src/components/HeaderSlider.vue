<template>
  <div :key="key" id="header-slider">
      <img :src="gibBilder[0]">
      <div id="points">
          <div @click="changeImage(indexBilder)" v-bind:class="{point: true, active: (indexBilder === index)}" v-for="(each, indexBilder) in bilder" :key="indexBilder"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderSlider',
    data: function () {
      return {
        bilder: [],
        index: 0,
        key: 0
      }
    },
    computed: {
        gibBilder() {
            return this.bilder[this.index];
        }
    },
    methods: {
        changeImage: function (index) {
            this.index = index;
            this.key++;
        }
    },
    mounted: function () {
      this.bilder = this.$store.state.headerBilder[this.$route.name];
      this.index = 0;
      console.log(this.bilder)
    }
  }
</script>

<style>
#header-slider {
    position: relative;
}

img {
    width: 100vw;
    height: auto;
}

#points {
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
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