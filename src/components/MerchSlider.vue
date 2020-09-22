<template>
  <div id="merch-slider" :key="key">
    <v-touch
      :swipe-options="{ threshold: 20 }"
      @swipeleft="changeImage((index + 1)%image.length)"
      @swiperight="changeImage((image.length + index - 1)%image.length)"
    >
      <a target="_blank" href="https://shop.spreadshirt.de/julis-bw">
        <img :src="image[index]" />
      </a>
    </v-touch>
    <div id="points">
      <div
        v-for="(each, indexBilder) in image"
        :key="indexBilder"
        :class="{point: true, active: (indexBilder === index)}"
        @click="changeImage(indexBilder)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSlider",
  data: function () {
    return {
      image: [],
      index: 0,
      key: 0,
      interval: undefined,
    };
  },
  mounted: function () {
    this.image = this.$store.getters.merchBilder;
  },
  methods: {
    changeImage: function (index) {
      this.index = index;
      this.key++;
    },
    swipeleft: function (index) {
      alert(index);
    },
  },
};
</script>

<style scoped>
#merch-slider {
  width: 90vw;
  position: relative;
  margin: 20px auto;
  margin-bottom: 3rem;
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
  bottom: -18px;
  left: 0;
}

.point {
  width: 8px;
  height: 8px;
  background-color: #aeaeae;
  border-radius: 50%;
  margin: 0 5px;
}

.point.active {
  background: #5f5f5f;
  border: 0px solid black;
}
</style>