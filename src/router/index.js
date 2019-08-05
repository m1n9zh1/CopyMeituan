import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Blank from '@/components/blank'
import Index from '@/components/page/index'
import ChangeCity from '@/page/ChangeCity'
import goodsList from '@/page/goodsList.vue'
import login from '@/page/login'
import register from '@/page/register'
import detail from '@/components/products/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      redirect: '/index',
      component: DefaultPage,
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },
      {
        path: '/detail',
        name: 'detail',
        component: detail
      }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank,
      children: [{
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/register',
        name: 'register',
        component: register
      }]
    },
    {
      path: '/s/:name',
      name: 'search',
      component: Blank
    },
    {
      path: '/hotPlace/:name',
      name: 'hotPlace',
      component: Blank
    }
  ]
})
