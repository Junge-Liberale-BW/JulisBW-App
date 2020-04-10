import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerBilder: {
      'Home':  'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise':  'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
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
      'Finanzen & Steuern': {
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
      'Verbands - entwicklung': {
        'icon': 'dna',
        'href': '/Verbandsentwicklung'
      },
      'Liberale Schüler': {
        'icon': 'graduation-cap',
        'href': '/Verbandsentwicklung'
      },
    },
    termine:[
      {
        "Titel": "Go-Live Hackathon TI",
        "Datum": "2020-04-14T14:00:00",
        "Ort": "WebEx"
      },
      {
        "Titel": "Landeskongress",
        "Datum": "2020-04-22T10:00:00",
        "Ort": "Stuttgart"
      }
    ],
    currentDate: new Date()
  },
  mutations: {
      setze_datum(state, neues_datum){
        state.currentDate = neues_datum;
      }
  },
  actions: {
    wechsel_seite (context, neue_seite) {
      router.push(neue_seite);
    }
  },
  modules: {},
  getters: {
    landesarbeitskreise: state => state.landesarbeitskreise,
    termine: state => state.termine,
    currentDate: state => state.currentDate
  }
})
