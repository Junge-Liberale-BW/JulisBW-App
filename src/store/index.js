import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'
import unsereThemen from './modules/unsereThemen'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ausgewählterLAK: '',
    headerBilder: {
      'Home': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'LAK-anmelden': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81264?width=2800&height=2800&c=f5bdf834facbbb6c70c67df521b4a636&requesttoken=Ecw5l7aoNdzquNNRnCoHjcO2TxKcFWG0VzO7qq0pcK4%3D%3AIoVupcT5Up241qMAqH5F%2FY%2FkDmLGcgL7eEmP4J0bJ%2BM%3D&token=WJLQL9NkMyxCcfK',
      'Beschlusssammlung': false,
      'ProgrammatikLexikon': false,
      'WerWirSind': false,
      'Landesvorstand': false,
      'Julis-A-Z': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81266?width=2000&height=2000&c=0526ccfd17e86db49aeeb5e6055b8848&requesttoken=k61ZTe4qboSJmXnsTP02GrTU3K9IiKWweyhUyyA2eZA%3D%3Awd5uKaBuCt3h6Rq8CZUHafe9psYKp%2BjVKH0ZoW1XTd0%3D&token=WJLQL9NkMyxCcfK',
      'Merch': false,
      'Kalender': false,
      'Podcast': false,
      'Newsletter': false,
      'Juliette': false,
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
    setze_datum (state, neues_datum) {
      state.currentDate = neues_datum
    }
  },
  actions: {
    wechsel_seite (context, neue_seite) {
      router.push(neue_seite)
    },
    LAK_anmelden (store, LAK) {
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
    unsereThemen: state => state.unsereThemen.liste
    ausgewählterLAK: state => state.ausgewählterLAK
  }
})
