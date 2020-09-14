<template>
  <div>
    <Header />
    <div class="text-page">
      <h1 class="heading-magenta">Landesarbeitskreise</h1>
      <p class="text-content">
        Wir JuLis verstehen uns als programmatische Ideenschmiede und Vordenker eines ganzheitlichen Liberalismus. Viele Konzepte, die die Freien Demokraten in praktisches Regierungshandeln umgesetzt haben, sind bei uns entstanden.
        <br />Ein wesentlicher Teil unserer inhaltlichen Abeit findet dabei in unseren Landesarbeitskreisen (LAKs) statt. Diese sind quasi unsere Fachausschüsse zu bestimmten Politikbereichen und bestehen aus interessierten JuLis aus Baden-Württemberg. Geleitet werden sie von einem oder mehreren Vorsitzenden. Jedes Mitglied, welches Lust hat, sich in einem Landesarbeitskreis zu engangieren, ist willkommmen, an einer seiner Tagungen teilzunehmen und ist dort dann auch stimmberechtigt.
      </p>
      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="zuLandesarbeitskreise"
        >Zu den LAKs</button>
      </div>
      <h1 class="heading-magenta">Bundesarbeitskreise</h1>
      <p class="text-content">Nicht nur in den Landesarbeitskreisen können sich interessierte JuLis aus Baden-Württemberg einbringen, auch die Bundesarbeitskreise stehen jedem Mitglied offen. Sie bündeln deutschlandweit Kompetenzen und beraten den Bundesvorstand zu bestimmten Themengebieten und arbeiten ihrerseits politische Forderungen aus.</p>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Arbeitskreise",
  components: { Header },
  methods: {
    zuLandesarbeitskreise: function () {
      this.$store.dispatch("wechsel_seite", { name: "Landesarbeitskreise" });
    },
  },
};
</script>

<style scoped>
    .button-wrapper{
        margin-top: -.5rem;
        margin-bottom: 1.5rem;
    }
</style>