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
      'Julis-A-Z': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81266?width=2000&height=2000&c=0526ccfd17e86db49aeeb5e6055b8848&requesttoken=k61ZTe4qboSJmXnsTP02GrTU3K9IiKWweyhUyyA2eZA%3D%3Awd5uKaBuCt3h6Rq8CZUHafe9psYKp%2BjVKH0ZoW1XTd0%3D&token=WJLQL9NkMyxCcfK',
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
