import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Reservierung from '@/components/Reservierung'
import Anfahrt from '@/components/Anfahrt'
import Speisekarte from '@/components/Speisekarte'
import Kontakt from '@/components/Kontakt'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservierung',
    name: 'Reservierung',
    component: Reservierung
  },
  {
    path: '/anfahrt',
    name: 'Anfahrt',
    component: Anfahrt
  },
  {
    path: '/speisekarte',
    name: 'Speisekarte',
    component: Speisekarte
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
  ]
})
