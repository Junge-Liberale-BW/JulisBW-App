<template>
  <div :key="key">
    <Header />
    <div class="text-page">
      <p
        class="text-content"
      >Auf Landeskongressen gibt es mehrere Mittel und Wege, dich in der Debatte einzubringen, Die wichtigsten Gesten und die damit verbundenen Optionen siehst du hier auf einen Blick.</p>
      <div>
        <div v-for="item in content" v-bind:key="item.heading">
          <img :src="item.img" />
          <FoldableSection
            :title="item.heading"
            :text="item.text"
            :heading_style="'heading-magenta'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FoldableSection from "../components/FoldableSection";
export default {
  name: "HowToLaKo",
  components: { Header, FoldableSection },
  data: function () {
    return {
      content: [
        {
          img: require("../assets/img/prisma-wortmeldung.png"),
          heading: "Ich möchte reden! Was muss ich tun?",
          text:
            "Alle Mitglieder des Verbandes haben die Möglichkeit, zur Debatte zu reden. Hab keine Angst! Alle Mitglieder haben mal ihren ersten Redebeitrag gehalten. Eine normale Wortmeldung signalisierst du im Präsidium durch Heben deiner Hand oder deiner Stimmkarte. Das Präsidium führt eine Redeliste und wird dich drauf setzen. Die Redner werden dann in der Reihenfolge ihrer Meldungen aufgerufen. Du darfst dich in einer Debatte auch mehrfach zu Wort melden. Oft wird beim Aufrufen des Redners auch schon der folgende Redner genannt. Wenn du der nächste Redner auf der Liste bistm ist es gerne gesehen, wenn du dich schon einmal in der Nähe des Rednerpults einfindest und bereithältst.",
        },
        {
          img: require("../assets/img/prisma-go.png"),
          heading: "Was mache ich, wenn mir eine Debatte zu lang wird?",
          text:
            'Wenn du das Gefühl hast, dass sich die Debatte im Kreis dreht, kannst du einen Geschäftsordnungsantrag (GO-Antrag) stellen, indem du beide Arme hebst. Dieser wird im Anschluss an den aktuellen Redebeitrag vom Präsidium zur Abstimmung gestellt.\n\nUnter anderem sind folgende GO-Anträge möglich:\n• Schluss der Redeliste\n• sofortige Abstimmung\n• Begrenzung der Redezeit\n• Nichtbefassung\n• Übergang zum nächsten Tagesordnungspunkt\n• Verweisung, etwa an einen Landesarbeitskreis\n• geheime Abstimmung\n• abschnittweise Abstimmung\n\nEine Wortmeldung „zur Geschäftsordnung" ist sofort nach dem aktuellen Redner zu behandeln.',
        },
        {
          img: require("../assets/img/prisma-zwischenfrage.png"),
          heading: "Ich habe eine Verständnisfrage zu einem Wortbeitrag.",
          text:
            'Wenn du dem aktuellen Redner eine Frage zu seinem Wortbeitrag stellen willst, signalisierst du dies, in dem du mit beiden Händen ein „Dach" über deinem Kopf formst.\n\nDas Präsidium fragt dann den Redner, ob er deine Frage zulassen will. Die Entscheidung trägt der Redner. Lässt er diese zu, kannst du deine Frage stellen. Es gilt als Höflichkeit, während des Vortragens der Frage und ihrer Beantwortung zu stehen. Achte dabei darauf, laut und deutlich zu sprechen. Nutze am besten die Saalmikrofone. Die Zwischenfrage dient dazu, Verständnisfragen zu klären. Bitte benutze sie nicht, um darin Meinungsäußerungen unterzubringen. Benutze hierbei bitte die reguläre Wortmeldung.',
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  height: 8rem;
  width: auto;
  margin: 0.5rem auto;
  display: block;
}
</style>