import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerBilder: {
      'Home': false,
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
      'Finanzen & Raub': {
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
    }
  },
  mutations: {},
  actions: {
    wechsel_seite (context, neue_seite) {
      router.push(neue_seite);
    }
  },
  modules: {},
  getters: {
    landesarbeitskreise: state => state.landesarbeitskreise
  }
})
