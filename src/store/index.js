import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landesarbeitskreise: {
      'Arbeit & Soziales': {
        'icon': 'suitcase',
        'href': '/Arbeit und Soziales'
      },
      'Bildung & Forschung': {
        'icon': 'school',
        'href': '/Bildung und Forschung'
      },
      'Digitales & Medien': {
        'icon': 'server',
        'href': '/Digitales und Medien'
      },
      'Europa & Aussen': {
        'icon': 'globe',
        'href': '/Europa und Aussen'
      },
      'Finanzen & Struern': {
        'icon': 'money-bill',
        'href': '/Finanzen und Steuern'
      },
      'Gesellschaft & Kultur': {
        'icon': 'users',
        'href': '/Gesellschaft und Kultur'
      },
      'Umwelt und Verkehr': {
        'icon': 'road',
        'href': '/Umwelt und Verkehr'
      },
      'Verbandsentwicklung': {
        'icon': 'dna',
        'href': '/Verbandsentwicklung'
      },
      'Liberale Schüler': {
        'icon': 'graduation-cap',
        'href': '/Verbandsentwicklung'
      },
    },
    ausgewählterLAK: '',
    headerBilder: {
      'Home': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'LAK-anmelden': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81264?width=2800&height=2800&c=f5bdf834facbbb6c70c67df521b4a636&requesttoken=Ecw5l7aoNdzquNNRnCoHjcO2TxKcFWG0VzO7qq0pcK4%3D%3AIoVupcT5Up241qMAqH5F%2FY%2FkDmLGcgL7eEmP4J0bJ%2BM%3D&token=WJLQL9NkMyxCcfK',
      'Beschlusssammlung': false,
      'ProgrammatikLexikon': false,
      'WerWirSind': false,
      'Landesvorstand': false,
      'JulisABisZ': false,
      'Merch': false,
      'Kalender': false,
      'Podcast': false,
      'Newsletter': false,
      'Juliette': false
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
    lak: lak
  },
  getters: {
    termine: state => state.termine,
    currentDate: state => state.currentDate,
    landesarbeitskreise: state => state.lak.liste,
    ausgewählterLAK: state => state.ausgewählterLAK
  }
})
