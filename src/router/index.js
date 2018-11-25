import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: Top
    },
    {
      path: '/a',
      name: 'test',
      component: test
    }
  ]
})
