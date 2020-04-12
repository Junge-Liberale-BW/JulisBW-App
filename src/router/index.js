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
    path: '/Impresseum',
    name: 'Impresseum',
    component: () => import('../views/Impresseum.vue')
  },
  {
    path: '/Landesarbeitskreise',
    name: 'Landesarbeitskreise',
    component: () => import('../views/Landesarbeitskreise.vue')
  },
  {
    path: '/Digitales & Medien',
    name: 'Digitales & Medien',
    component: () => import('../views/LAK_Digitales.vue')
  },
  {
    path: '/Juliette',
    name: 'Juliette',
    component: () => import('../views/Juliette.vue')
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
    path: '/Merch',
    name: 'Merch',
    component: () => import('../views/Merch-Shop.vue')
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
    path: '/freiheitSelbstbestimmung',
    name: 'freiheitSelbstbestimmung',
    component: () => import('../views/freiheitSelbstbestimmung.vue')
  },
  {
    path: '/Verband',
    name: 'Verband',
    component: () => import('../views/Verband.vue')
  },
  {
    path: '/Julis-A-Z',
    name: 'Julis-A-Z',
    component: () => import('../views/Julis-A-Z.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
