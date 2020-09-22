import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/Impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/Datenschutz',
    name: 'Datenschutz',
    component: () => import('../views/Datenschutz.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/Landesarbeitskreise',
    name: 'Landesarbeitskreise',
    component: () => import('../views/Landesarbeitskreise.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/lak/:id',
    name: 'LAK-Ansicht',
    component: () => import('../views/LAK-Ansicht.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Juliette',
    name: 'Juliette',
    component: () => import('../views/Juliette.vue'),
    props: {
      isPrimary: true,
    }
  }, {
    path: '/Juliette/issue/:id',
    component: () => import('../content/juliette/JulietteIssue.vue'),
    props: {
      isPrimary: false,
    }
  }, {
    path: '/Juliette/article/:id',
    component: () => import('../content/juliette/JulietteArticle.vue'),
    props: {
      isPrimary: false,
    }

  },
  {
    path: '/UnsereThemen',
    name: 'UnsereThemen',
    component: () => import('../views/UnsereThemen.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/themen/:id',
    name: 'Themen-Ansicht',
    component: () => import('../views/Themen-Ansicht.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Landesvorstand',
    name: 'Landesvorstand',
    component: () => import('../views/Landesvorstand.vue'),
    props: {
      isPrimary: true,
    }
  },
  {
    path: '/Julis-A-Z',
    name: 'Julis-A-Z',
    component: () => import('../views/Julis-A-Z.vue'),
    props: {
      isPrimary: true,
    }
  },
  {

    path: '/WerWirSind',
    name: 'WerWirSind',
    component: () => import('../views/WerWirSind.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Kongresse',
    name: 'Kongresse',
    component: () => import('../views/Kongresse.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Verbandsebenen',
    name: 'Verbandsebenen',
    component: () => import('../views/Verbandsebenen.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Kürzel-ABC',
    name: 'Kürzel-ABC',
    component: () => import('../views/Kürzel-ABC.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/How-To-LaKo',
    name: 'How to LaKo',
    component: () => import('../views/HowToLaKo.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '/Arbeitskreise',
    name: 'Arbeitskreise',
    component: () => import('../views/Arbeitskreise.vue'),
    props: {
      isPrimary: false,
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
