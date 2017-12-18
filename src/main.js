// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import FastClick from 'fastclick'
import Storage from 'store'
import Config from './config/index'
import store from './store/'
import './config/rem'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: Config.routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 模拟登录TOKEN
  let cookies = Storage.get(Config.cookie)
  const currentToken = (new Date()).getTime()
  if (to.meta.login && to.path !== Config.route.login && (!cookies || !cookies.token || (cookies && cookies.token && currentToken - cookies.token > 7200000))) {
    if (cookies && cookies.token) delete cookies.token
    Storage.set(Config.cookie, cookies)
    next({
      path: Config.route.login,
      query: {
        from: to.path
      }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
