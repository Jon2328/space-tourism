import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2bedb41f = () => interopDefault(import('..\\pages\\crew.vue' /* webpackChunkName: "pages/crew" */))
const _08511e40 = () => interopDefault(import('..\\pages\\dest.vue' /* webpackChunkName: "pages/dest" */))
const _5df39ad4 = () => interopDefault(import('..\\pages\\tech.vue' /* webpackChunkName: "pages/tech" */))
const _479952f8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/crew",
    component: _2bedb41f,
    name: "crew"
  }, {
    path: "/dest",
    component: _08511e40,
    name: "dest"
  }, {
    path: "/tech",
    component: _5df39ad4,
    name: "tech"
  }, {
    path: "/",
    component: _479952f8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
