import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}
export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/reservierung',
    name: 'Reservierung',
    component: loadView('Reservierung')
  },
  {
    path: '/anfahrt',
    name: 'Anfahrt',
    component: loadView('Anfahrt')
  },
  {
    path: '/speisekarte',
    name: 'Speisekarte',
    component: loadView('Speisekarte')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: loadView('Kontakt')
  }
  ]
})
