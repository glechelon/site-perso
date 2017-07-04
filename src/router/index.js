import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
