<template>
  <div>
    <div class="blank-header">
      <i :class="'las la-4x la-server'" />
      <h1 class="text-center text-uppercase">Datenschutz</h1>
    </div>
    <div class="text-page">
      <div>
        <div v-for="item in content" :key="item.heading">
          <h1 class="heading-magenta">{{ item.heading }}</h1>
          <div class="text-content">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impressum",
  components: {},
  data: function () {
    return {
      content: [
        {
          heading: null,
          text:
            "Die JuLis-BW App verarbeitet keine personenbezogenen Daten von Dir. Alle dargestellten Inhalte werden aus lokal gespeicherten statischen Daten erzeugt und Deine Interaktion mit der App wird nicht protokolliert.\nEs werden außerhalb des regulären Update-Prozess' Deines Betriebssystems für die App selbst keine externen Daten nachgeladen. Wenn Du einer der gekennzeichneten Weiterleitungen in der App zu externen Inhalten folgst, öffnet sich die entsprechende Webseite in Deiner Browser-App, die hierfür einen HTTP-Request über eine verschlüsselte Verbindung an den jeweiligen Server stellen wird.\nFür den Umgang mit potentiell personenbezogenen Daten, die beim Besuch unserer Webseite (www.julis-bw.de) und der Nutzung der darauf angebotenen Funktionen anfallen, oder wenn Du über eine der angegebenen Möglichkeiten direkt mit uns in Kontakt trittst, gilt unsere allgemeine Datenschutzerklärung(https://www.julis-bw.de/datenschutz/).",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blank-header {
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
</style>
