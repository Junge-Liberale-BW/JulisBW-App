import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste: {
      landesvorstand:{
        'Landesvorsitzender': {
          'name': 'Valentin Christian Abel',
          'tasks': 'Aufgaben: alles',
          'email': 'abel',
          'facebook': 'TheRealVCA',
          'twitter': 'Valentin_C_Abel',
          'instagram': 'valentin_christian_abel'
        }
      },
      lakleiter:{

      }
    },
  },
  mutations: {

  },
  actions: {
    },
  getters: {
  }
})
