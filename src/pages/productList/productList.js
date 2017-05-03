import product from '../../components/goods-item'
import cart from '../../components/cart-large'
export default {
  name: 'ProductList',
  data () {
    return {
      msg: 'Welcome to ProductList',
      data: [{
        id: 'asdasfq3ws',
        img: '/src/static/Bitmap.png',
        name: '我的文化？',
        sprice: 1300,
        num: 50,
        price: 100,
        timer: 10
      }, {
        id: 'asdasfq3ws',
        img: '/src/static/Bitmap.png',
        name: '我的文化？',
        sprice: 1300,
        num: 50,
        price: 100,
        timer: 10
      }, {
        id: 'asdasfq3ws',
        img: '/src/static/Bitmap.png',
        name: '我的文化？',
        sprice: 1300,
        num: 50,
        price: 1000000,
        timer: 10
      }]
    }
  },
  components: {
    product,
    cart
  },
  mounted () {
    console.log('xx')
  }
}