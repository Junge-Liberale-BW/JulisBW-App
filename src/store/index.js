import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import lak from './modules/lak'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerBilder: {
      'Home': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81346?width=2800&height=2800&c=145acf899061c984740d8d0c2b21e741&requesttoken=Ecw5l7aoNdzquNNRnCoHjcO2TxKcFWG0VzO7qq0pcK4%3D%3AIoVupcT5Up241qMAqH5F%2FY%2FkDmLGcgL7eEmP4J0bJ%2BM%3D&token=WJLQL9NkMyxCcfK',
      'Landesarbeitskreise': 'https://cdn.discordapp.com/attachments/697877107841302553/698112102111379456/landesarbeitskreise.png',
      'Juliette': 'https://wolke.julis-bw.de/index.php/apps/gallery/preview.public/81299?width=2800&height=2800&c=3afde0b74d27be2fcde439a61aff87a7&requesttoken=HwXu9cgsDzCVUdLh2GOrSu01qxmKPLPsfH7X4BLIK18%3D%3ALEy5x7p9aHHHP6Kw7DfpOqFn6mnQW9CjUwTjqiL6fBI%3D&token=WJLQL9NkMyxCcfK'
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
