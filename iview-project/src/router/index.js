import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import temp from '@/components/temp'
import signup from '@/components/signup'
import login from '@/components/login'
import example from '@/components/example'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/temp',
      name: 'temp',
      component: temp
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
  ]
})
