import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landesvorstand: require('../assets/landesvorstand.json'),
    laks: require('../assets/laks.json'),
    unsereThemen: require('../assets/themen.json'),
    kuerzel: require('../assets/kuerzel.json'),
    personBilder: {
      "landesvorsitzender": require('../assets/img/person/landesvorsitzender.jpg'),
      "stvFinanzen": require('../assets/img/person/stvFinanzen.jpg'),
      "stvOrga": require('../assets/img/person/stvOrga.jpg'),
      "stvPO": require('../assets/img/person/stvPO.jpg'),
      "stvProgrammatik": require('../assets/img/person/stvProgrammatik.jpg'),
      "beisitzerInternet": require('../assets/img/person/beisitzerInternet.jpg'),
      "beisitzerPublikationen": require('../assets/img/person/beisitzerPublikationen.jpg'),
      "beisitzerFinanzen": require('../assets/img/person/beisitzerFinanzen.jpg'),
      "beisitzerOrga": require('../assets/img/person/beisitzerOrga.jpg'),
      "beisitzerPO": require('../assets/img/person/beisitzerPO.jpg'),
      "beisitzerProgrammatik": require('../assets/img/person/beisitzerProgrammatik.jpg'),
      "sozialesLeitung": require('../assets/img/person/sozialesLeitung.jpg'),
      "sozialesStellvertretung": require('../assets/img/person/sozialesStellvertretung.jpg'),
      "bildungLeitung": require('../assets/img/person/bildungLeitung.jpg'),
      "bildungStellvertretung": require('../assets/img/person/bildungStellvertretung.jpg'),
      "digitalesLeitung": require('../assets/img/person/digitalesLeitung.jpg'),
      "digitalesStellvertretung": require('../assets/img/person/digitalesStellvertretung.jpg'),
      "aussenLeitung": require('../assets/img/person/aussenLeitung.jpg'),
      "aussenStellvertretung": require('../assets/img/person/aussenStellvertretung.jpg'),
      "finanzenLeitung": require('../assets/img/person/finanzenLeitung.jpg'),
      "finanzenStellvertretung": require('../assets/img/person/finanzenStellvertretung.jpg'),
      "gesellschaftLeitung": require('../assets/img/person/gesellschaftLeitung.jpg'),
      "gesellschaftStellvertretung": require('../assets/img/person/gesellschaftStellvertretung.jpg'),
      "gesundheitLeitung": require('../assets/img/person/gesundheitLeitung.jpg'),
      "gesundheitStellvertretung": require('../assets/img/person/gesundheitStellvertretung.jpg'),
      "wirtschaftLeitung": require('../assets/img/person/wirtschaftLeitung.jpg'),
      "wirtschaftStellvertretung": require('../assets/img/person/wirtschaftStellvertretung.jpg'),
      "innenLeitung": require('../assets/img/person/innenLeitung.jpg'),
      "innenStellvertretung": require('../assets/img/person/innenStellvertretung.jpg'),
      "laendlichesLeitung": require('../assets/img/person/laendlichesLeitung.jpg'),
      "laendlichesStellvertretung": require('../assets/img/person/laendlichesStellvertretung.jpg'),
      "umweltLeitung": require('../assets/img/person/umweltLeitung.jpg'),
      "umweltStellvertretung": require('../assets/img/person/umweltStellvertretung.jpg'),
      "strukturLeitung": require('../assets/img/person/strukturLeitung.jpg'),
      "strukturStellvertretung": require('../assets/img/person/strukturStellvertretung.jpg'),
      "schuelerLeitung": require('../assets/img/person/schuelerLeitung.jpg'),
      "schuelerStellvertretung": require('../assets/img/person/schuelerStellvertretung.jpg'),
    },
    headerBilder: {
      'Home': require('./../assets/Header/startseite.jpg'),
      'Landesarbeitskreise': require('../assets/Header/landesarbeitskreise.jpg'),
      'LAK-anmelden': require('../assets/Header/landesarbeitskreise.jpg'),
      'WerWirSind': require('../assets/Header/werwirsind.jpg'),
      'Landesvorstand': require('../assets/Header/landesvorstand.jpg'),
      'Julis-A-Z': require('../assets/Header/julisaz.jpg'),
      'Podcast': require('../assets/Header/podcast.jpg'),
      'Arbeitskreise': require('../assets/Header/arbeitskreise.jpg'),
      'Kongresse': require('../assets/Header/kongresse.jpg'),
      'Verbandsebenen': require('../assets/Header/verbandsebenen.jpg'),
      'Kürzel-ABC': require('../assets/Header/kürzelABC.jpg'),
      'How to LaKo': require('../assets/Header/howtolako.jpg'),
      'Juliette': require('../assets/Header/juliette.jpg'),
      'UnsereThemen': require('../assets/Header/unsereThemen.jpg'),
      'freiheit': require('../assets/Header/freiheitSelbstbestimmung.jpg'),
      'bildung': require('../assets/Header/bildungForschung.jpg'),
      'wirtschaft': require('../assets/Header/wirtschaftGründergeist.jpg'),
      'umwelt': require('../assets/Header/umweltNachhaltigkeit.jpg'),
      'europa': require('../assets/Header/deutschlandEuropa.jpg'),
      'partizipation': require('../assets/Header/demokratiePartizipation.jpg'),
    },
    merchBilder: [
      require('../assets/img/merch/merchshop-1.png'),
      require('../assets/img/merch/merchshop-2.png'),
    ],
    currentDate: new Date(),
  },
  mutations: {
    setze_datum(state, neues_datum) {
      state.currentDate = neues_datum
    }
  },
  actions: {
    wechsel_seite(context, neue_seite) {
      router.push({ name: neue_seite.name, params: neue_seite.params })
      window.scrollTo(0, 0)
    },
  },
  getters: {
    currentDate: state => state.currentDate,
    landesarbeitskreise: state => state.lak.liste,
    landesvorstand: state => state.landesvorstand,
    laks: state => state.laks,
    unsereThemen: state => state.unsereThemen,
    kuerzel: state => state.kuerzel,
    merchBilder: state => state.merchBilder
  }
})
