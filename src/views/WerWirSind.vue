<template>
  <div>
    <Header />
    <div class="text-page">
      <p
        class="text-content"
      >Wir JuLis sind Baden-Württembergs liberale Jugendorganisation. Bei uns sind über 1.000 junge Menschen im Alter von 14 bis 35 Jahren Mitglied geworden, weil sie nicht länger zugucken, sondern anpacken und etwas bewegen wollen.</p>
      <p
        class="text-content"
      >Weil sie nicht länger zusehen wollen, wie alte Menschen über die Zukunft unserer jungen Generation entscheiden. Und weil sie Ideen haben, die es wert sind, gehört und verbreitet zu werden.</p>
      <p class="text-content">Unser Motto ist deshalb klar:</p>
      <div>
        <div v-for="item in content" v-bind:key="item.heading">
          <FoldableSection :title="item.heading" :text="item.text" :heading_style="'heading-bold'" />
        </div>
      </div>

      <hr class="vertical-divider" />
      <p
        class="text-content center"
      >Du bist noch kein Mitglied, aber willst ein Teil der Jungen Liberalen sein?</p>
      <p
        class="text-content center"
      >Dann besuche jetzt unsere Website und beantrage jetzt deine persönliche Unabhängigkeitserklärung!</p>

      <div class="button-wrapper">
        <button
          type="button"
          class="btn btn-primary text-uppercase mx-auto"
          @click="mitgliedWerden"
        >Jetzt Mitglied werden</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FoldableSection from "../components/FoldableSection";

export default {
  name: "WerWirSind",
  components: { Header, FoldableSection },
  data: function () {
    return {
      content: [
        {
          heading:
            "Wir hören dir nicht nur zu, sondern geben dir und deinen Ideen eine Stimme.",
          text:
            "Wir sind eine bunte und vielfältige Gruppe, bestehend aus den unterschiedlichsten Persönlichkeiten. Schüler, Studenten, Auszubildende, Arbeitnehmer und alle anderen finden bei uns ein politisches Zuhause. Trotz all unserer Unterschiede vereint uns nämlich eins: Wir wollen gemeinsam dafür sorgen, dass Freiheit, Eigenverantwortung und Toleranz einen wichtigen Platz in unserer Gesellschaft einnehmen.",
        },
        {
          heading:
            "Wir glauben an den einzelnen Menschen und daran, dass es nichts erfüllenderes gibt, als ein persönliches Ziel aus eigener Kraft zu erreichen.",
          text:
            "Als Jugendorganisation der Freien Demokraten ist es auch unser Anspruch, unserer Mutterpartei programmatisch und personell voranzutreiben und so unsere Ideen und Vorstellungen nicht nur in der Theorie zu diskutieren, sondern auch in die Praxis umsetzen zu können. So wurde beispielsweise die Aussetzung der Wehrpflicht von einer Idee einiger Junger Liberalen zu einem im Bundestag verabschiedeten Gesetz und somit letzlich Realiät. Genauso war es bei der Einführung der Fernbuslinien. Wir Jungen Liberalen waren esm die das Bahnmonopol abschaffen und gerade jungen Menschen günstige Fernbusreisen ermöglichen wollte. Darüber haben wir erst intern diskutiert, dann in der FDP gestritten und es letzlich in der Bundesregierung umgesetzt.",
        },
        {
          heading:
            "Wir wollen die Freien Demokraten programmatisch und personell vorantreiben.",
          text:
            "Gleichzeitig sind wir als eingetragener Verein aber unabhängig, was uns die Freiheit gibt, manchmal auch andere Positionen zu vertreten als die Freien Demokraten. Dazu gehört, dass man als Mitglied der Jungen Liberalen nicht unbedingt Mitglied der FDP sein muss - oder umgekehrt. Da die Freien Demokraten aber frische Ideen zu schätzen wissen und es in der DNA unserer Mitglieder liegt, sich für unsere Überzeugungen zu engagieren und nicht locker zu lassen, übernehmen viele JuLis bereits Verantwortung in Parlamenten. Egal ob im Stadt- oder Gemeinderat, im Kreis- oder Landtag, fast überall wirst du junge Liberale treffen, die vor Ort für individuelle Freiheit, Chancengerechtigkeit und Generationengerechtigkeit kämpfen.",
        },
        {
          heading:
            "Wir stehen neuen Ideen offen gegenüber und diskutieren dann leidenschaftlich und gerne darüber, ob es eine noch bessere gibt.",
          text:
            "Unsere Debatten sind stets das, was wir uns auch für die politische Diskussion in Deutschland wünschen: Ein fairer Wettbewerb um die besten Ideen. Es gibt keine Denkverbote und keine blöden Blicke. Wir stehen neuen Ideen offen gegenüber und diskutieren dann leidenschaftlich und gerne darüber, ob es eine noch bessere gibt. Dabei ist es ganz egal, ob du für eine bessere Finanzpolitik, für eine demokratischere Eüropäische Union oder für mehr Rechte für Fußballfans streitest, jedes Thema und jeder Mensch ist bei uns willkommen.",
        },
      ]
    };
  },
  methods: {
    mitgliedWerden() {
      window.open(
        "https://www.julis-bw.de/service/mitmachen/mitglied-werden/",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
</style>