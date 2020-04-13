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
        'Ort': 'WebEx',
        'Text': ' 12 files changed, 406 insertions(+), 50 deletions(-)\n' +
          ' create mode 100644 src/assets/Header/juliette.png\n' +
          ' create mode 100644 src/assets/Header/julisaz.png\n' +
          ' create mode 100644 src/assets/Header/podcast.png\n' +
          ' create mode 100644 src/components/TerminKarte.vue\n' +
          ' create mode 100644 src/views/LAK-Anmeldung.vue\n'
      },
      {
        'Titel': 'Landeskongress',
        'Datum': '2020-04-22T10:00:00',
        'Ort': 'Stuttgart',
        'Text': 'Failed to compile.\n' +
          '\n' +
          './src/store/index.js\n' +
          'Module Error (from /usr/lib/node_modules/@vue/cli-service-global/node_modules/eslint-loader/index.js):\n'
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
    ausgewählterLAK: state => state.ausgewählterLAK
  }
})
