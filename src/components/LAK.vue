<template>
  <div>
    <div class="lak-header">
      <i :class="'las la-4x la-' + lak.icon" />
      <h1 class="text-center text-uppercase">LAK {{ lak.title }}</h1>
    </div>

    <div class="text-page">
      <p class="text-content left">{{ lak.text1 }}</p>
      <p class="text-content left">{{ lak.text2 }}</p>

      <PersonKachel
        class="leiter-kachel"
        v-if="lak.leiter"
        :person="lak.leiter"
        :position="name+'Leitung'"
        :color="getColor"
        :foldable="false"
      />
      <PersonKachel
        class="leiter-kachel"
        v-if="lak.stellvertreter"
        :person="lak.stellvertreter"
        :position="name +'Stellvertretung'"
        :color="getColor"
      />
      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="lakMail"
        >LAK Leitung kontaktieren</button>
      </div>

      <p
        class="text-content center"
      >Du interessierst dich für das Thema {{ lak.title }} und möchtest dich im Landesarbeitskreis engagieren?</p>
      <p
        class="text-content center"
      >Dann trage dich jetzt in den Verteiler ein, um über alle Termine und Neuigkeiten informiert zu sein!</p>

      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="anmeldenZumLAK"
        >
          Jetzt zum LAK anmelden
          <i class="la la-external-link-alt la-lg external-link" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonKachel from "../components/PersonKachel";
export default {
  name: "LAK",
  components: { PersonKachel },
  props: ["name"],
  computed: {
    getColor() {
      return "magenta";
    },
    lak() {
      return this.$store.getters.laks[this.name];
    },
  },
  methods: {
    anmeldenZumLAK: function () {
      window.open(
        "https://www.julis-bw.de/inhalte/ideen-einbringen/landesarbeitskreise/",
        "_blank"
      );
    },
    lakMail() {
      window.open("mailto:" + this.lak.email + "@julis-bw.de", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.lak-header {
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  color: white;
  background-color: #e5007d;
  padding-top: 1rem;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;

  h1 {
    font-weight: 800;
    font-size: 1.25rem;
  }
}

.leiter-kachel {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.button-wrapper {
  margin-bottom: 0.75rem;
}
</style>
