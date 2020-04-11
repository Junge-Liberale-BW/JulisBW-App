<template>
  <div id="julis-a-z" :key="key">
      
    <div v-for="(letter, letterIndex) in content" v-bind:key="letterIndex">
        <h2>{{ letterIndex }}</h2>

        <div v-for="(topic, topicIndex) in letter" :key="content[letterIndex][topicIndex][2]">
            <h3>{{ topicIndex }}</h3>
            <p>
                {{ topic[0] }}
                <span v-if="content[letterIndex][topicIndex][2] % 2 === 0">{{ topic[1] }}</span>
                <br>
                <a v-if="content[letterIndex][topicIndex][2] % 2 !== 0" @click="changeStateofContentLength(letterIndex, topicIndex)">Mehr anzeigen</a>
                <a v-if="content[letterIndex][topicIndex][2] % 2 === 0" @click="changeStateofContentLength(letterIndex, topicIndex)">Weniger anzeigen</a>
            </p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            content: {
                "B": {
                    "Bezirksmitgliederversammlung": ["Die Bezirksmitgliederversammlung findet ebenfalls jährlich statt.",  "Auch hier haben alle anwesenden Mitglieder ein Stimmrecht. Hier wird der Bezirksvorstand gewählt, zudem die Delegierten für den erweiterten Landesvorstand und die Delegierten, welche auf dem Landeskongress stimmberechtigt sind.",  11],
                    "Bezirksverband": ["Die vier Baden- Württembergische Bezirksverbände - Nordbaden, Nordwürttemberg, Südbaden und Südwürttemberg-Hohenzollern – haben die Aufgabe",  "die einzelnen Kreisverbände zu unterstützen und koordinieren. Zudem veranstalten sie eigene programmatische Veranstaltungen.", 31],
                    "Bundesarbeitskreise": ["Nicht nur in den Landesarbeitskreisen können sich interessierte JuLis aus Baden-Württemberg einbringen, auch die Bundesarbeitskreise stehen jedem Mitglied offen.", "Sie bündeln deutschlandweit Kompetenzen und beraten den Bundesvorstand zu bestimmten Themengebieten und arbeiten ihrerseits politische Forderungen aus.", 51],
                    "Bundeskongresse": ["Der Bundeskongress ist das oberste Beschlussgremium der Jungen Liberalen. Er findet wie der Landeskongress zwei Mal im Jahr öffentlich statt",  "und setzt sich aus 200 Delegierten aus den Landesverbänden zusammen. Auf einem Bundeskongress können die Satzung des Verbandes und die Geschäftsordnung des Kongresses geändert werden. Besonders wichtig ist ein Bundeskongress auch, um Anträge zu beschließen und somit die Beschlusslage des Verbandes zu verändern.", 71],
                    "Bundesverband": ["Deutschlandweit haben wir JuLis fast 10 000 Mitglieder. Gemeinsam bilden sie alle unseren Bundesverband.", "Er ist ein unabhängiger und eingetragener Verein dessen Ziel es ist, liberal denkende junge Menschen zusammen zu bringen.Unser Bundesverband ist föderal gegliedert. Das bedeutet, dass entsprechend der Landesgrenzen der deutschen Bundesländer Landesverbände der Jungen Liberalen existieren.", 91]
                },
                "I": {
                    "Internationale Verbände": ["Wir JuLis sehen uns nicht nur in Deutschland und Europa, sondern auch im weltweiten Maßstab", "als Vertreter unserer Generation. In unseren multinationalen Dachverbänden LYMEC (European Liberal Youth; Jugendorganisation der ALDE-Partei) und IFLRY (International Federation of Liberal and Radical Youth) treffen wir JuLis unsere Partnerorganisationen aus Europa und der ganzen Welt. Gemeinsam mit ihnen bestimmen wir unsere außenpolitische Agenda und über sie tragen wir unsere Positionen in die jeweils internationalen Mutterorganisationen. Sie organisieren jährliche Kongresse, spannende Seminare und programmatische Arbeitsgruppen.", 111],
                },
                "K": {
                    "Kreismitgliederversammlung": ["Bei den jährlichen, öffentlich abgehaltenen Kreismitgliederversammlungen haben alle anwesenden Mitglieder ein Stimmrecht.", "Auf diesen Versammlungen wird der Kreisvorstand gewählt.", 131],
                    "Kreisverband": ["Die Kreisverbände sind die kleinsten Einheiten bei den JuLis. Sie sind dementsprechend auch am nächsten am einzelnen Mitglied.", "Sie sind häufig auf lokaler Ebene im Ring politischer Jungend oder (Jugend-) Gemeinderäten aktiv und veranstalten Stammtische oder Themenabende. Wenn du neu bei uns bist, findest du hier meist deine ersten Ansprechpartner.", 151]
                },
                "L": {
                    "Landesarbeitskreise": ["Wir JuLis verstehen uns als programmatische Ideenschmiede und Vordenker eines ganzheitlichen Liberalismus.", "Viele Konzepte, die die Freien Demokraten in praktisches Regierungshandeln umgesetzt haben, sind bei uns entstanden. Ein wesentlicher Teil unserer inhaltlichen Arbeit findet dabei in unseren Landesarbeitskreisen (LAKs) statt. Diese sind quasi unsere Fachausschüsse zu bestimmten Politikbereichen und bestehen aus interessierten JuLis aus Baden-Württemberg. Geleitet werden sie von einem oder mehreren Vorsitzenden. Jedes Mitglied, welches Lust hat, sich in einem Landesarbeitskreis zu engagieren, ist willkommen, an einer seiner Tagungen teilzunehmen und ist dort dann auch stimmberechtigt.", 171],
                    "Landeskongresse": ["In Baden-Württemberg findet zweimal jährlich ein Landeskongress statt.  Auf dem Landeskongress wählen wir", "für jeweils ein Jahr unseren Vorstand, debattieren Anträge zur Weiterentwicklung unserer Beschlusslage und wählen unsere Delegierte zum Bundeskongress.", 191],
                    "Landesverband": ["Baden-Württemberg ist demnach einer von 16 Landesverbänden der JuLis. Er ist ebenfalls ein unabhängiger eingetragener Verein.", "Der Landesverband kümmert sich in erster Linie um jene Themen, die Baden-Württemberg von anderen Bundesländern unterscheiden. Inhaltlich ist das zum Beispiel die Bildungs- oder Wirtschaftspolitik, die in weiten Teilen in Stuttgart entschieden wird und an der wir naturgemäß näher dran sind als der Bundesverband. Aber auch organisatorisch kann ein Landesverband deutlich mehr Aktionen und Veranstaltungen im jeweiligen Bundesland stemmen, als dies ein Bundesverband je könnte. Wir ergänzen uns also und helfen einander wo immer möglich.", 212]
                }
            },
            key: 300
        }
    },
    methods: {
        changeStateofContentLength: function (letter, topic) {
            this.content[letter][topic][2]++;
            this.key++;
        }
    }
}
</script>

<style scoped>
#julis-a-z {
    padding: 20px;
}

h2 {
    color: #E5007D;
}

h3 {
    color: #009EE3;
    font-size: 20px;
}

a {
    color: blue;
}

p {
    margin-bottom: 50px;
}
</style>