<template>
  <div>
    <Header />
    <div class="text-page">
      <section
        v-for="(each, index) in content"
        :key="index"
      >
        <h1 class="heading-magenta">
          {{ index }}
        </h1>
        <p class="text-content">
          {{ each }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Verbandsebenen",
  components: { Header },
  data: function () {
    return {
      content: {
        "Internationale Verbände":
          "Wir JuLis sehen uns nicht nur in Deutschland und Europa, sondern auch im weltweiten Maßstab als Vertreter unserer Generation. In unseren multinationalen Dachverbänden LYMEC (European Liberal Youth; Jugendorganisation der ALDE-Partei) und IFLRY (International Federation of Liberal and Radical Youth) treffen wir JuLis unsere Partnerorganisationen aus Europa und der ganzen Welt. Gemeinsam mit ihnen bestimmen wir unsere außenpolitische Agenda und über sie tragen wir unsere Positionen in die jeweils internationalen Mutterorganisationen. Sie organisieren jährliche Kongresse, spannende Seminare und programmatische Arbeitsgruppen.",
        Bundesverband:
          "Deutschlandweit haben wir JuLis fast 10 000 Mitglieder. Gemeinsam bilden sie alle unseren Bundesverband. Er ist ein unabhängiger und eingetragener Verein dessen Ziel es ist, liberal denkende junge Menschen zusammen zu bringen.Unser Bundesverband ist föderal gegliedert. Das bedeutet, dass entsprechend der Landesgrenzen der deutschen Bundesländer Landesverbände der Jungen Liberalen existieren.",
        Landesverband:
          "Baden-Württemberg ist demnach einer von 16 Landesverbänden der JuLis. Er ist ebenfalls ein unabhängiger eingetragener Verein. Der Landesverband kümmert sich in erster Linie um jene Themen, die Baden-Württemberg von anderen Bundesländern unterscheiden. Inhaltlich ist das zum Beispiel die Bildungs- oder Wirtschaftspolitik, die in weiten Teilen in Stuttgart entschieden wird und an der wir naturgemäß näher dran sind als der Bundesverband. Aber auch organisatorisch kann ein Landesverband deutlich mehr Aktionen und Veranstaltungen im jeweiligen Bundesland stemmen, als dies ein Bundesverband je könnte. Wir ergänzen uns also und helfen einander wo immer möglich.",
        Bezirksverband:
          "Die vier Baden- Württembergische Bezirksverbände - Nordbaden, Nordwürttemberg, Südbaden und Südwürttemberg-Hohenzollern – haben die Aufgabe die einzelnen Kreisverbände zu unterstützen und koordinieren. Zudem veranstalten sie eigene programmatische Veranstaltungen.",
        Kreisverband:
          "Die Kreisverbände sind die kleinsten Einheiten bei den JuLis. Sie sind dementsprechend auch am nächsten am einzelnen Mitglied. Sie sind häufig auf lokaler Ebene im Ring politischer Jungend oder (Jugend-) Gemeinderäten aktiv und veranstalten Stammtische oder Themenabende. Wenn du neu bei uns bist, findest du hier meist deine ersten Ansprechpartner.",
      },
    };
  },
};
</script>

<style scoped>
</style>