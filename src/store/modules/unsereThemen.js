import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste: {
      'Freiheit & Selbstbestimmung': {
        'icon': 'dove',
        'href': '/freiheitSelbstbestimmung'
      },
      'Bildung & Forschung': {
        'icon': 'school',
        'href': '/bildungForschung'
      },
      'Wirtschaft & Gründergeist': {
        'icon': 'chart-line',
        'href': '/wirtschaftGründergeist'
      },
      'Umwelt & Nachhaltigkeit': {
        'icon': 'tree',
        'href': '/umweltNachhaltigkeit'
      },
      'Deutschland & Europa': {
        'icon': 'globe',
        'href': '/deutschlandEuropa'
      },
      'Demokratie & Partizipation': {
        'icon': 'vote-yea',
        'href': '/demokratiePartizipation'
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
