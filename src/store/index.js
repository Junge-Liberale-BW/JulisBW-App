import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'
import unsereThemen from './modules/unsereThemen'
import person from './modules/person'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ausgewählterLAK: '',
    headerBilder: {
      'Home': require('../assets/Header/startseite.png'),
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
      'Kongresse': require('../assets/Header/kongresse.png'),
      'Verbandsebenen': require('../assets/Header/verbandsebenen.png'),
      'Kürzel-ABC': require('../assets/Header/kürzelABC.png'),
      'How to LaKo': require('../assets/Header/howtolako.png'),
      'Juliette': require('../assets/Header/juliette.png'),
      'UnsereThemen': require('../assets/Header/unsereThemen.png'),
      'freiheitSelbstbestimmung': require('../assets/Header/freiheitSelbstbestimmung.png')
    },
    merchBilder: [
      require('../assets/img/merch/merchshop-1.png'),
      require('../assets/img/merch/merchshop-2.png'),
    ],
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
    setze_datum (state, neues_datum) {
      state.currentDate = neues_datum
    }
  },
  actions: {
    wechsel_seite (context, neue_seite) {
      router.push({name: neue_seite.name, params: neue_seite.params})
    },
    LAK_anmelden (store, LAK) {
      store.state.ausgewählterLAK = LAK;
      router.push('LAK-anmelden');
    }
  },
  modules: {
    lak: lak,
    unsereThemen: unsereThemen,
    person: person
  },
  getters: {
    termine: state => state.termine,
    currentDate: state => state.currentDate,
    landesarbeitskreise: state => state.lak.liste,
    unsereThemen: state => state.unsereThemen.liste,
    landesvorstand: state => state.person.landesvorstand,
    ausgewählterLAK: state => state.ausgewählterLAK,
    merchBilder: state => state.merchBilder
  }
})
