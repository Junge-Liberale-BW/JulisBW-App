import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ausgewählterLAK: '',
    landesvorstand: require('../assets/landesvorstand.json'),
    laks: require('../assets/laks.json'),
    unsereThemen: require('../assets/themen.json'),
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
      "digitalesLeitung": 'http://s.julisbw.de/app/person/digitalesLeitung.jpg',
      "digitalesStellvertretung": 'http://s.julisbw.de/app/person/digitalesStellvertretung.jpg',
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
      'bildung': require('../assets/Header/bildungForschung.png')
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
    landesarbeitskreise: state => state.laks,
    unsereThemen: state => state.unsereThemen,
    ausgewählterLAK: state => state.ausgewählterLAK,
    landesvorstand: state => state.landesvorstand,
    laks: state => state.laks
  }
})
