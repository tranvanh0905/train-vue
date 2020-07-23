import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/DashBoard'
import ListCategory from '@/views/ListCategory'
import ListProduct from '@/views/ListProduct'
import ViewCategory from '@/views/ViewCategory'
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
    },
    {
      path: '/category/:id',
      name: 'ViewCategory',
      component: ViewCategory
    },
  ]
})
