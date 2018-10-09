//  Hier werden alle Routen festgelegt
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Reservierung from '@/components/Reservierung'
import Anfahrt from '@/components/Anfahrt'
import Speisekarte from '@/components/Speisekarte'
import Kontakt from '@/components/Kontakt'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Startseite',
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
