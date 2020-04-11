import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerBilder: {
      'Home': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Landesarbeitskreise': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
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
    }
  },
  modules: {
    lak: lak
  },
  getters: {
    termine: state => state.termine,
    currentDate: state => state.currentDate,
    landesarbeitskreise: state => state.lak.liste
  }
})
