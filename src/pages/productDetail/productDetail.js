import Vue from 'vue'
import { Header, Swipe, SwipeItem, Cell  } from 'mint-ui'
import resource from '../../resource'
import base from '../../base'
import { bus } from '../../bus'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell);
export default {
  name: 'ProductDetail',
  data () {
    return {
      msg: 'Welcome to ProductDetail',
      goods:{
      	name:'樱桃小包',
      	price:'500.0',
      	source:'京东商城',
      	pic_gallery:[
      		{ src:'//gw.alicdn.com/imgextra/i3/178189248/TB2fhjGl30kpuFjSspdXXX4YXXa_!!178189248.jpg_760x760q50s150.jpg_.webp'},
      		{ src:'//gw.alicdn.com/imgextra/i3/178189248/TB2fhjGl30kpuFjSspdXXX4YXXa_!!178189248.jpg_760x760q50s150.jpg_.webp'},
      		{ src:'//gw.alicdn.com/imgextra/i3/178189248/TB2fhjGl30kpuFjSspdXXX4YXXa_!!178189248.jpg_760x760q50s150.jpg_.webp'}
      	],
      },
    }
  }
}