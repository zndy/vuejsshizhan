import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      meta: {
        title: '介绍页'
      },
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/user/:id',
      meta: {
        title: '个人主页'
      },
      component: (resolve) => require(['./views/User.vue'], resolve)
    }, {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
