import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'
import unsereThemen from './modules/unsereThemen'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ausgewählterLAK: '',
    landesvorstand: require('../assets/landesvorstand.json'),
    personBilder: {
      "landesvorsitzender": require('../assets/landesvorsitzender.jpg'),
      "stvFinanzen": require('../assets/stvFinanzen.jpg'),
      "stvOrga": require('../assets/stvOrga.jpg'),
      "stvPÖ": require('../assets/stvPÖ.jpg'),
      "stvProgrammatik": require('../assets/stvProgrammatik.jpg'),
      "beisitzerInternet": require('../assets/beisitzerInternet.jpg'),
      "beisitzerPublikationen": require('../assets/beisitzerPublikationen.jpg'),
      "beisitzerFinanzen": require('../assets/beisitzerFinanzen.jpg'),
      "beisitzerOrga": require('../assets/beisitzerOrga.jpg'),
      "beisitzerPÖ": require('../assets/beisitzerPÖ.jpg'),
      "beisitzerProgrammatik": require('../assets/beisitzerProgrammatik.jpg'),
      "digitalesLeitung": require('../assets/beisitzerProgrammatik.jpg'),
      "digitalesStellvertretung": require('../assets/beisitzerProgrammatik.jpg'),
    },
    laks: require('../assets/laks'),
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
      'freiheitSelbstbestimmung': require('../assets/Header/freiheitSelbstbestimmung.png')
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
  modules: {
    lak: lak,
    unsereThemen: unsereThemen
  },
  getters: {
    termine: state => state.termine,
    currentDate: state => state.currentDate,
    landesarbeitskreise: state => state.lak.liste,
    unsereThemen: state => state.unsereThemen.liste,
    ausgewählterLAK: state => state.ausgewählterLAK,
    landesvorstand: state => state.landesvorstand,
    laks: state => state.laks
  }
})
