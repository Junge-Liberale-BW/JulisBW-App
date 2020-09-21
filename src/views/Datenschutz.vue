<template>
  <div>
    <Header />
    <div class="text-page">
      <div>
        <div
          v-for="item in content"
          :key="item.heading"
        >
          <h1 class="heading-magenta">
            {{ item.heading }}
          </h1>
          <div class="text-content">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Impressum",
  components: { Header },
  data: function () {
    return {
      content: [
        {
          heading: "INFORMATION ÜBER DIE ERHEBUNG PERSONENBEZOGENER DATEN",
          text:
            "Im Folgenden informieren wir über Art, Umfang und Zwecke der Erhebung und Verarbeitung personenbezogener Daten bei Nutzung unserer Website.\n\nVerantwortlicher für die Datenverarbeitung gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist: \nJunge Liberale Baden-Württemberg e.V.\nRosensteinstraße 22\n70191 Stuttgart\nE-Mail: info@julis-bw.de\nTelefon: +49(0)711 66618-22\n\nRegistergericht: Amtsgericht Stuttgart\nRegisternummer: 720369\nVertretungsberechtigter Vorstand (Anschrift wie oben):\nValentin Christian Abel (abel@julis-bw.de)\n\nDatenschutzbeauftragter (Anschrift wie oben):\nMoritz Klammler (datenschutz@julis-bw.de)\n\nGemeinsam Mitverantwortliche:\nJunge Liberale e.V.\nReinhardtstraße 14\n10117 Berlin\n\nE-Mail: info@julis.de\nTelefon: +49 (0)30 68078550\n\nRegistergericht: Amtsgericht Berlin-Charlottenburg\nRegisternummer: 19305\n\nVertretungsberechtigter Vorstand (Anschrift wie oben):\nRia Schröder (ria.schroeder@julis.de)\n\nDatenschutzbeauftragter (Anschrift wie oben):\nPhilippe Hintzen (philippe.hintzen@julis.de)",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
