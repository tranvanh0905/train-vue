import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/DashBoard'
import ListCategory from '@/views/ListCategory'
import ListProduct from '@/views/ListProduct'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/list-category',
      name: 'ListCategory',
      component: ListCategory
    },
    {
      path: '/list-product',
      name: 'ListProduct',
      component: ListProduct
    }
  ]
})
