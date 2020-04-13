<template>
  <div class="lak-seite">
    <div class="lak-header">
      <i class="las la-sitemap la-8x"></i>
      <h1 class="text-center text-uppercase">LAK {{ lak.titel }}</h1>
    </div>

    <div class="container lak-content">
      <p>{{ lak.text1 }}</p>
      <p>{{ lak.text2 }}</p>

      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="lakMail"
        >LAK Leiter kontaktieren</button>
      </div>
      <PersonKachel
        class="leiter-kachel"
        :person="lak.leiter"
        :position="name+'Leitung'"
        :color="getColor"
        :foldable="false"
      />
      <PersonKachel
        class="leiter-kachel"
        :person="lak.stellvertreter"
        :position="name +'Stellvertretung'"
        :color="getColor"
      />

      <p>Du interessierst dich für das Thema Digitales & Medien und möchtest dich im Landesarbeitskreis engagieren?</p>
      <p>Dann trage dich jetzt in den Verteiler ein, um über alle Termine und Neuigkeiten informiert zu sein!</p>

      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="anmeldenZumLAK"
        >Jetzt zum LAK anmelden</button>
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
    }
  },
  methods: {
    anmeldenZumLAK: function() {
      this.$store.dispatch("LAK_anmelden", this.titel);
    },
    lakMail() {
      window.open("mailto:" + this.lak.email + "@julis-bw.de", "_blank");
    }
  }
};
</script>

<style scoped>
.leiter-kachel {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.lak-seite {
  font-weight: bold;
}

h1,
.la-sitemap {
  text-align: center;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.la-sitemap {
  padding-bottom: 1%;
  padding-top: 5%;
}
</style>
