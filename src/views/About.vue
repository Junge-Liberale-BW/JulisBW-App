<template>
  <div class="center">
    <img src="../assets/img/julisBW-banner.png">
    <div class="text-page about-text">
      <h1 class="heading-about">
        JuLis BW App
      </h1>
      <div>
        <div
          v-for="item in content"
          :key="item.heading"
        >
          <h1 class="title">
            {{ item.title }}
          </h1>
          <div
            v-for="name in item.names"
            :key="name"
          >
            <div class="name">
              {{ name }}
            </div>
          </div>
        </div>
      </div>
      <div class="version-info">
        App-Version: 1.0
        <br>Copyright © 2020
        <br>
        <br>
        <a @click="openWebsite">https://www.julis-bw.de</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      content: [
        {
          title: "Projektleitung",
          names: ["Linus Molin"],
        },
        {
          title: "Designleitung",
          names: ["Pascal Schejnoha"],
        },
        {
          title: "Programmierleitung",
          names: ["Marvin Wank"],
        },
        {
          title: "Mitwirkende",
          names: [
            "Philip Brozé",
            "Daniel Götz",
            "Finn-Jannik Mundinger",
            "David Müller",
            "Gesa Höferer",
            "Nils",
            "Hanna Damaschke",
            "Fabian Karl",
            "Sebastian Weiss",
          ],
        },
      ],
    };
  },
  methods: {
    openWebsite() {
      window.open("https://www.julis-bw.de/", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  height: 100%;
}
.heading-about {
  font-weight: 700;
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}
.title {
  font-weight: 700;
  font-size: 1.35rem;
  margin-top: 1rem;
}
.name {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2rem;
}
.version-info {
  font-size: 0.75rem;
  margin-top: 1.5rem;
}
</style>
