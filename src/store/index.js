import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ausgewählterLAK: '',
    landesvorstand: require('../assets/landesvorstand.json'), // hol von da "http://s.julisbw.de/app/landesvorstand.json"
    laks: require('../assets/laks.json'), // hol von da "http://s.julisbw.de/app/laks.json"
    unsereThemen: require('../assets/themen.json'), // hol von da "http://s.julisbw.de/app/themen.json"
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
      'Home': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise': require('../assets/Header/landesarbeitskreise.png'),
      'LAK-anmelden': require('../assets/Header/landesarbeitskreise.png'),
      'Beschlusssammlung': false,
      'ProgrammatikLexikon': false,
      'WerWirSind': false,
      'Landesvorstand': require('../assets/Header/landesvorstand.png'),
      'Julis-A-Z': require('../assets/Header/julisaz.png'),
      'Merch': false,
      'Kalender': false,
      'Podcast': require('../assets/Header/podcast.png'),
      'Newsletter': false,
      'Juliette': require('../assets/Header/juliette.png'),
      'UnsereThemen': require('../assets/Header/unsereThemen.png'),
      'freiheit': require('../assets/Header/freiheitSelbstbestimmung.png'),
      'bildung': require('../assets/Header/bildungForschung.png'),
      'wirtschaft': require('../assets/Header/wirtschaftGründergeist.png'),
      'umwelt': require('../assets/Header/umweltNachhaltigkeit.png'),
      'europa': require('../assets/Header/deutschlandEuropa.png'),
      'partizipation': require('../assets/Header/demokratiePartizipation.png'),
    },
    termine: [
      {
        'Titel': 'Go-Live Hackathon TI',
        'Datum': '2020-04-14T14:00:00',
        'Ort': 'WebEx'
      },
      {
        'Titel': 'Landeskongress',
        'Datum': '2020-04-22T10:00:00',
        'Ort': 'Stuttgart'
      }
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
      router.push(neue_seite)
    },
    LAK_anmelden(store, LAK) {
      store.state.ausgewählterLAK = LAK;
      router.push('LAK-anmelden');
    }
  },
  getters: {
    termine: state => state.termine,
    currentDate: state => state.currentDate,
    unsereThemen: state => state.unsereThemen,
    ausgewählterLAK: state => state.ausgewählterLAK,
    landesvorstand: state => state.landesvorstand,
    laks: state => state.laks
  }
})
