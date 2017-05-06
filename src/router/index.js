import Vue from 'vue'
import Router from 'vue-router'

import Product from '../components/goods-item'
import ProductList from '../pages/productList/productList.vue'
import Carts from '../pages/carts/carts.vue'
import Integer from '../pages/integer/integer.vue'
import IntegerRecord from '../pages/integerRecord/integerRecord.vue'
import ProductDetail from '../pages/productDetail/productDetail.vue'
//@import
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'Product',component: Product},
    {path: '/productList',name: 'ProductList',component: ProductList},
    {path: '/carts',name: 'Carts',component: Carts},
    {path: '/integer',name: 'Integer',component: Integer},
    {path: '/integerRecord',name: 'IntegerRecord',component: IntegerRecord},
    {path: '/productDetail',name: 'ProductDetail',component: ProductDetail}//@register
  ]
})
