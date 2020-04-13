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
<<<<<<< HEAD
      'Home': [
        ['https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81346?width=2800&height=2800&c=145acf899061c984740d8d0c2b21e741&requesttoken=Ecw5l7aoNdzquNNRnCoHjcO2TxKcFWG0VzO7qq0pcK4%3D%3AIoVupcT5Up241qMAqH5F%2FY%2FkDmLGcgL7eEmP4J0bJ%2BM%3D&token=WJLQL9NkMyxCcfK', 'Terminliste'],
        ['https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png', 'Landesarbeitskreise'],
        ['https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81346?width=2800&height=2800&c=145acf899061c984740d8d0c2b21e741&requesttoken=Ecw5l7aoNdzquNNRnCoHjcO2TxKcFWG0VzO7qq0pcK4%3D%3AIoVupcT5Up241qMAqH5F%2FY%2FkDmLGcgL7eEmP4J0bJ%2BM%3D&token=WJLQL9NkMyxCcfK', 'Terminliste'],
        ['https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png', 'Landesarbeitskreise']
      ],
      'Landesarbeitskreise': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
=======
      'Home': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise': require('../assets/Header/landesarbeitskreise.png'),
      'LAK-anmelden': require('../assets/Header/landesarbeitskreise.png'),
>>>>>>> master
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
