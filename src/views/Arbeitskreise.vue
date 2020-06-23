<template>
  <div>
      <Header />
      <h2>Landesarbeitskreise</h2>
      <p>
          Wir JuLis verstehen uns als programmatische Ideenschmiede und Vordenker eines ganzheitlichen Liberalismus. Viele Konzepte, die die Freien Demokraten in praktisches Regierungshandeln umgesetzt haben, sind bei uns entstanden.<br />Ein wesentlicher Teil unserer inhaltlichen Abeit findet dabei in unseren Landesarbeitskreisen (LAKs) statt. Diese sind quasi unsere Fachausschüsse zu bestimmten Politikbereichen und bestehen aus interessierten JuLis aus Baden-Württemberg. Geleitet werden sie von einem oder mehreren Vorsitzenden. Jedes Mitglied, welches Lust hat, sich in einem Landesarbeitskreis zu engangieren, ist willkommmen, an einer seiner Tagungen teilzunehmen und ist dort dann auch stimmberechtigt.
      </p>
      <a @click="zuLandesarbeitskreise" class="button_big">Zu den LAKs</a>
      <h2>Bundesarbeitskreise</h2>
      <p>Nicht nur in den Landesarbeitskreisen können sich interessierte JuLis aus Baden-Württemberg einbringen, auch die Bundesarbeitskreise stehen jedem Mitglied offen. Sie bündeln deutschlandweit Kompetenzen und beraten den Bundesvorstand zu bestimmten Themengebieten und arbeiten ihrerseits politische Forderungen aus.</p>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'Arbeitskreise',
    components: { Header },
    methods: {
        zuLandesarbeitskreise: function () {
            this.$store.dispatch("wechsel_seite", {'name': 'Landesarbeitskreise'});
        }
    }
}
</script>

<style scoped>
h2 {
    color: #e5007d;
    font-weight: bold;
    padding: 10px 20px;
}

p {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
}
</style>