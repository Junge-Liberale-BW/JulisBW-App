<template>
  <div :key="key" id="header-slider">
      <img :src="gibBild[0]" @click="$store.dispatch('wechsel_seite', gibBild[1])">
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
    computed: {
        gibBild() {
            if (this.image.length === 0) {
                this.getImages();
            }
            return this.image[this.index];
        }
    },
    methods: {
        changeImage: function (index) {
            this.index = index;
            this.key++;
            clearInterval(this.interval)
        },
        nextImage: function () {
            this.index++;
            if (this.index === this.image.length) {
                this.index = 0;
            }
            this.key++;
        },
        getImages: function () {
            this.image = this.$store.state.headerBilder[this.$route.name];
            this.index = 0;
        }
    },
    mounted: function () {
        this.interval = setInterval(() => {
            this.nextImage();
        }, 6000)
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