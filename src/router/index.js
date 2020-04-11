import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Juliette from "../views/juliette/Juliette";
import JulietteIssue from "../views/juliette/JulietteIssue";
import JulietteArticle from "../views/juliette/JulietteArticle";

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
    component: Juliette,
  }, {
    path: '/Juliette/issue/:id',
    component: JulietteIssue
  }, {
    path: '/Juliette/article/:id',
    component: JulietteArticle

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
    path: '/Verband',
    name: 'Verband',
    component: () => import('../views/Verband.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
