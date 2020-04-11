import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste: {
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
  },
  mutations: {

  },
  actions: {
    },
  // modules: {
  //   lak: lak
  // },
  getters: {
  }
})
