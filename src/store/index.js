import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landesvorstand: require('../assets/landesvorstand.json'), // hol von da "http://s.julisbw.de/app/landesvorstand.json"
    laks: require('../assets/laks.json'), // hol von da "http://s.julisbw.de/app/laks.json"
    unsereThemen: require('../assets/themen.json'), // hol von da "http://s.julisbw.de/app/themen.json"
    kuerzel: require('../assets/kuerzel.json'),
    personBilder: {
      "landesvorsitzender": 'http://s.julisbw.de/app/person/landesvorsitzender.jpg',
      "stvFinanzen": 'http://s.julisbw.de/app/person/stvFinanzen.jpg',
      "stvOrga": 'http://s.julisbw.de/app/person/stvOrga.jpg',
      "stvPO": 'http://s.julisbw.de/app/person/stvPO.jpg',
      "stvProgrammatik": 'http://s.julisbw.de/app/person/stvProgrammatik.jpg',
      "beisitzerInternet": 'http://s.julisbw.de/app/person/beisitzerInternet.jpg',
      "beisitzerPublikationen": 'http://s.julisbw.de/app/person/beisitzerPublikationen.jpg',
      "beisitzerFinanzen": 'http://s.julisbw.de/app/person/beisitzerFinanzen.jpg',
      "beisitzerOrga": 'http://s.julisbw.de/app/person/beisitzerOrga.jpg',
      "beisitzerPO": 'http://s.julisbw.de/app/person/beisitzerPO.jpg',
      "beisitzerProgrammatik": 'http://s.julisbw.de/app/person/beisitzerProgrammatik.jpg',
      "sozialesLeitung": 'http://s.julisbw.de/app/person/sozialesLeitung.jpg',
      "sozialesStellvertretung": 'http://s.julisbw.de/app/person/sozialesStellvertretung.jpg',
      "bildungLeitung": 'http://s.julisbw.de/app/person/bildungLeitung.jpg',
      "bildungStellvertretung": 'http://s.julisbw.de/app/person/bildungStellvertretung.jpg',
      "digitalesLeitung": 'http://s.julisbw.de/app/person/digitalesLeitung.jpg',
      "digitalesStellvertretung": 'http://s.julisbw.de/app/person/digitalesStellvertretung.jpg',
      "aussenLeitung": 'http://s.julisbw.de/app/person/aussenLeitung.jpg',
      "aussenStellvertretung": 'http://s.julisbw.de/app/person/aussenStellvertretung.jpg',
      "finanzenLeitung": 'http://s.julisbw.de/app/person/finanzenLeitung.jpg',
      "finanzenStellvertretung": 'http://s.julisbw.de/app/person/finanzenStellvertretung.jpg',
      "gesellschaftLeitung": 'http://s.julisbw.de/app/person/gesellschaftLeitung.jpg',
      "gesellschaftStellvertretung": 'http://s.julisbw.de/app/person/gesellschaftStellvertretung.jpg',
      "gesundheitLeitung": 'http://s.julisbw.de/app/person/gesundheitLeitung.jpg',
      "gesundheitStellvertretung": 'http://s.julisbw.de/app/person/gesundheitStellvertretung.jpg',
      "wirtschaftLeitung": 'http://s.julisbw.de/app/person/wirtschaftLeitung.jpg',
      "wirtschaftStellvertretung": 'http://s.julisbw.de/app/person/wirtschaftStellvertretung.jpg',
      "innenLeitung": 'http://s.julisbw.de/app/person/innenLeitung.jpg',
      "innenStellvertretung": 'http://s.julisbw.de/app/person/innenStellvertretung.jpg',
      "laendlichesLeitung": 'http://s.julisbw.de/app/person/laendlichesLeitung.jpg',
      "laendlichesStellvertretung": 'http://s.julisbw.de/app/person/laendlichesStellvertretung.jpg',
      "umweltLeitung": 'http://s.julisbw.de/app/person/umweltLeitung.jpg',
      "umweltStellvertretung": 'http://s.julisbw.de/app/person/umweltStellvertretung.jpg',
      "strukturLeitung": 'http://s.julisbw.de/app/person/strukturLeitung.jpg',
      "strukturStellvertretung": 'http://s.julisbw.de/app/person/strukturStellvertretung.jpg',
      "schuelerLeitung": 'http://s.julisbw.de/app/person/schuelerLeitung.jpg',
      "schuelerStellvertretung": 'http://s.julisbw.de/app/person/schuelerStellvertretung.jpg',
    },
    headerBilder: {
      'Home': require('./../assets/Header/startseite.png'),
      'Landesarbeitskreise': require('../assets/Header/landesarbeitskreise.png'),
      'LAK-anmelden': require('../assets/Header/landesarbeitskreise.png'),
      'WerWirSind': require('../assets/Header/werwirsind.png'),
      'Landesvorstand': require('../assets/Header/landesvorstand.png'),
      'Julis-A-Z': require('../assets/Header/julisaz.png'),
      'Podcast': require('../assets/Header/podcast.png'),
      'Arbeitskreise': require('../assets/Header/arbeitskreise.png'),
      'Kongresse': require('../assets/Header/kongresse.png'),
      'Verbandsebenen': require('../assets/Header/verbandsebenen.png'),
      'Kürzel-ABC': require('../assets/Header/kürzelABC.png'),
      'How to LaKo': require('../assets/Header/howtolako.png'),
      'Juliette': require('../assets/Header/juliette.png'),
      'UnsereThemen': require('../assets/Header/unsereThemen.png'),
      'freiheit': require('../assets/Header/freiheitSelbstbestimmung.png'),
      'bildung': require('../assets/Header/bildungForschung.png'),
      'wirtschaft': require('../assets/Header/wirtschaftGründergeist.png'),
      'umwelt': require('../assets/Header/umweltNachhaltigkeit.png'),
      'europa': require('../assets/Header/deutschlandEuropa.png'),
      'partizipation': require('../assets/Header/demokratiePartizipation.png'),
      'Impressum': require('../assets/Header/startseite.png'),
      'Datenschutz': require('../assets/Header/startseite.png'),
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
