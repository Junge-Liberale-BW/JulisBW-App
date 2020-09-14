import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/Datenschutz',
    name: 'Datenschutz',
    component: () => import('../views/Datenschutz.vue')
  },
  {
    path: '/Landesarbeitskreise',
    name: 'Landesarbeitskreise',
    component: () => import('../views/Landesarbeitskreise.vue')
  },
  {
    path: '/lak/:id',
    name: 'LAK-Ansicht',
    component: () => import('../views/LAK-Ansicht.vue')
  },
  {
    path: '/Juliette',
    name: 'Juliette',
    component: () => import('../views/Juliette.vue')
  }, {
    path: '/Juliette/issue/:id',
    component: () => import('../content/juliette/JulietteIssue.vue')
  }, {
    path: '/Juliette/article/:id',
    component: () => import('../content/juliette/JulietteArticle.vue')

  },
  {
    path: '/Kalender',
    name: 'Kalender',
    component: () => import('../views/Kalender.vue')
  },
  {
    path: '/Terminliste',
    name: 'Terminliste',
    component: () => import('../views/Terminliste.vue')
  },
  {
    path: '/Podcast',
    name: 'Podcast',
    component: () => import('../views/Podcast.vue')
  },
  {
    path: '/UnsereThemen',
    name: 'UnsereThemen',
    component: () => import('../views/UnsereThemen.vue')
  },
  {
    path: '/themen/:id',
    name: 'Themen-Ansicht',
    component: () => import('../views/Themen-Ansicht.vue')
  },
  {
    path: '/Verband',
    name: 'Verband',
    component: () => import('../views/Verband.vue')
  },
  {
    path: '/Landesvorstand',
    name: 'Landesvorstand',
    component: () => import('../views/Landesvorstand.vue')
  },
  {
    path: '/LAK-anmelden',
    name: 'LAK-anmelden',
    component: () => import('../views/LAK-Anmeldung')
  },
  {
    path: '/Julis-A-Z',
    name: 'Julis-A-Z',
    component: () => import('../views/Julis-A-Z.vue')
  },
  {

    path: '/WerWirSind',
    name: 'WerWirSind',
    component: () => import('../views/WerWirSind.vue')
  },
  {
    path: '/Kongresse',
    name: 'Kongresse',
    component: () => import('../views/Kongresse.vue')
  },
  {
    path: '/Verbandsebenen',
    name: 'Verbandsebenen',
    component: () => import('../views/Verbandsebenen.vue')
  },
  {
    path: '/Kürzel-ABC',
    name: 'Kürzel-ABC',
    component: () => import('../views/Kürzel-ABC.vue')
  },
  {
    path: '/How-To-LaKo',
    name: 'How to LaKo',
    component: () => import('../views/HowToLaKo.vue')
  },
  {
    path: '/Arbeitskreise',
    name: 'Arbeitskreise',
    component: () => import('../views/Arbeitskreise.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
