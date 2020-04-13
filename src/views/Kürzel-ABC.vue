<template>
  <div>
    <Header />

    <div id="ABC" v-for="(each, index) in content" :key="index">
        <h2>{{ index }}</h2>
        <table>
            <tr v-for="(each2, index2) in each" :key="index2">
                <td>{{ index2 }}</td>
                <td>{{ each2 }}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'Kürzel-ABC',
    components: { Header },
    data: function () {
        return {
            content: {
                A: {
                    AK: 'Arbeitskreis'
                },
                B: {
                    BAK: 'Bundesarbeitskreis',
                    BFA: 'Bundesfachausschuss der FDP',
                    BGSt: 'Bundesgeschäftsstelle',
                    BMV: 'Bezirksmitgliederversammlung',
                    BuKo: 'Bundeskongress',
                    BuVo: 'Bundesvorstand',
                    BV: 'Bezirksverband'
                },
                E: {
                    eBuVo: 'erweiterter Bundesvorstand',
                    eLaVo: 'erweiterter Landesvorstand',
                },
                F: {
                    FDP: "Seniorenorganisation ;-)",
                    FNF: 'Friedrich-Naumann-Stiftung für die Freiheit'
                },
                G: {
                    GO: 'Geschäftsordnung',
                },
                J: {
                    'J&L': 'Jung & Liberal'
                },
                K: {
                    KJR: 'Kreisjugendring',
                    KMV: 'Kreismitgliederversammlung',
                    KV: 'Kreisverband',
                },
                L: {
                    LAK: 'Landesarbeitskreis',
                    LaKo: 'Landeskongress',
                    LaVo: 'Landesvorstand',
                    LFA: 'Landesfachausschuss der FDP',
                    LGSt: 'Landesgeschäftsstelle',
                    LHG: 'Liberale Hochschulgruppe',
                    LiF: 'Liberale Frauen',
                    LiM: 'Liberaler Mittelstand',
                    LiS: 'Liberale Senioren',
                    LiSL: 'Liberale Schwulen und Lesben',
                    LS: 'Liberale Schüler',
                    LPW: 'Landesprogrammatisches Wochenende',
                    LV: 'Landesverband'
                },
                M: {
                    MdL: 'Mitglied des Landtages',
                    MdB: 'Mitglied des Bundestages',
                    MdEP: 'Mitglied des EU-Parlaments'
                },
                O: {
                    OV: 'Ortsverband'
                },
                P: {
                    PPW: 'Politisch Programmatische Wochenende der Friedrich-Naumann-Stiftung'
                },
                R: {
                    RPJ: 'Ring politischer Jugend'
                },
                V: {
                    VLK: 'Vereinigung Liberaler Kommunalpolitiker'
                }
            }
        }
    }
}
</script>

<style scoped>
#ABC {
    padding: 20px;
}

h2 {
    color: #e5007d;
    font-size: 25px;
    font-weight: bold;
}

table {
    font-size: 16px;
    font-weight: bold;
}

table tr>td:first-child {
    width: 70px;
}
</style>