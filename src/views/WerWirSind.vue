<template>
  <div>
    <Header />
    <p>
        Wir JuLis sind Baden-Württembergs liberale Jugendorganisation. Bei uns sind über 1.000 junge Menschen im Alter von 14 bis 35 Jahren Mitglied geworden, weil sie nicht länger zugucken, sondern anpacken und etwas bewegen wollen.
    </p>
    <p>
        Weil sie nicht länger zusehen wollen, wie alte Menschen über die Zukunft unserer jungen Generation entscheiden. Und weil sie Ideen haben, die es wert sind, gehört und verbreitet zu werden.
    </p>
    <p>
        Unser Motto ist deshalb klar:
    </p>
    <div :key="key">
        <section v-for="(each, index) in content" :key="index">
            <h2>{{ each.heading }}</h2>
            <div class="unfoldButton" @click="unfold[index] = !unfold[index]; key++">
                <i v-if="unfold[index]" class="las la-4x la-angle-up"></i>
                <i v-if="!unfold[index]" class="las la-4x la-angle-down"></i>
            </div>
            <div v-if="unfold[index]" v-html="each.text"></div>
        </section>
    </div>
    <hr>
    <p class="alignCenter">
        Du bist noch kein Mitglied, aber willst ein Teil der Jungen Liberalen sein?
    </p>
    <p class="alignCenter">
        Dann besuche jetzt unsere Website und beantrage jetzt deine persönliche Unabhängigkeitserklärung!
    </p>
    <a href="https://www.julis-bw.de/service/mitmachen/mitglied-werden/" target="_blank" class="button_big">Jetzt Mitglied werden</a>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
    name: 'WerWirSind',
    components: { Header },
    data: function () {
        return {
            content: [
                {
                    heading: 'Wir hören dir nicht nur zu, sondern geben dir und deinen Ideen eine Stimme.',
                    text: '<p>Wir sind eine bunte und vielfältige Gruppe, bestehend aus den unterschiedlichsten Persönlichkeiten. Schüler, Studenten, Auszubildende, Arbeitnehmer und alle anderen finden bei uns ein politisches Zuhause.</p><p>Trotz all unserer Unterschiede vereint uns nämlich eins: Wir wollen gemeinsam dafür sorgen, dass Freiheit, Eigenverantwortung und Toleranz einen wichtigen Platz in unserer Gesellschaft einnehmen.</p>'
                },
                {
                    heading: 'Wir glauben an den einzelnen Menschen und daran, dass es nichts erfüllenderes gibt, als ein persönliches Ziel aus eigener Kraft zu erreichen.',
                    text: '<p>Als Jugendorganisation der Freien Demokraten ist es auch unser Anspruch, unserer Mutterpartei programmatisch und personell voranzutreiben und so unsere Ideen und Vorstellungen nicht nur in der Theorie zu diskutieren, sondern auch in die Praxis umsetzen zu können.</p><p>So wurde beispielsweise die Aussetzung der Wehrpflicht von einer Idee einiger Junger Liberalen zu einem im Bundestag verabschiedeten Gesetz und somit letzlich Realiät. Genauso war es bei der Einführung der Fernbuslinien. Wir Jungen Liberalen waren esm die das Bahnmonopol abschaffen und gerade jungen Menschen günstige Fernbusreisen ermöglichen wollte. Darüber haben wir erst intern diskutiert, dann in der FDP gestritten und es letzlich in der Bundesregierung umgesetzt.</p>'
                },
                {
                    heading: 'Wir wollen die Freien Demokraten programmatisch und personell vorantreiben.',
                    text: '<p>Gleichzeitig sind wir als eingetragener Verein aber unabhängig, was uns die Freiheit gibt, manchmal auch andere Positionen zu vertreten als die Freien Demokraten. Dazu gehört, dass man als Mitglied der Jungen Liberalen nicht unbedingt Mitglied der FDP sein muss - oder umgekehrt. Da die Freien Demokraten aber frische Ideen zu schätzen wissen und es in der DNA unserer Mitglieder liegt, sich für unsere Überzeugungen zu engagieren und nicht locker zu lassen, übernehmen viele JuLis bereits Verantwortung in Parlamenten.</p><p>Egal ob im Stadt- oder Gemeinderat, im Kreis- oder Landtag, fast überall wirst du junge Liberale treffen, die vor Ort für individuelle Freiheit, Chancengerechtigkeit und Generationengerechtigkeit kämpfen.</p>'
                },
                {
                    heading: 'Wir stehen neuen Ideen offen gegenüber und diskutieren dann leidenschaftlich und gerne darüber, ob es eine noch bessere gibt.',
                    text: '<p>Unsere Debatten sind stets das, was wir uns auch für die politische Diskussion in Deutschland wünschen: Ein fairer Wettbewerb um die besten Ideen. Es gibt keine Denkverbote und keine blöden Blicke. Wir stehen neuen Ideen offen gegenüber und diskutieren dann leidenschaftlich und gerne darüber, ob es eine noch bessere gibt. Dabei ist es ganz egal, ob du für eine bessere Finanzpolitik, für eine demokratischere Eüropäische Union oder für mehr Rechte für Fußballfans streitest, jedes Thema und jeder Mensch ist bei uns willkommen.</p>'
                }
            ],
            unfold: [
                false,
                false,
                false,
                false
            ],
            key: 0
        }
    }
}
</script>

<style scoped>

p, section {
    padding: 10px 20px;
    font-weight: bold !important;
}

h2 {
    font-size: 20px;
    color: #e5007d;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
}

.alignCenter, .unfoldButton {
    text-align: center;
}

hr {
    margin: 10px 25px;
    border: none;
    border-bottom: 3px solid grey;
}

a:active, a:focus, a:hover {
    text-decoration: none;
}

</style>