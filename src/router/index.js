import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/city'
import outter from '@/pages/city/outter'
import inner from '@/pages/city/inner'
import detail from '@/pages/detail/detail'
import aa from "@/pages/a"
import bb from "@/pages/b"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aa',
      component: aa
    },{
      path: '/a',
      name: 'aa',
      component: aa
    },{
      path: '/b',
      name: 'bb',
      component: bb
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      children: [{
        path: 'outter',
        name: 'outter',
        component: outter,
      }, {
        path: 'inner',
        name: 'inner',
        component: inner,
      }]
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior(to, from, savePositon) {
    return {
      x: 0,
      y: 0
    }
  }
})
