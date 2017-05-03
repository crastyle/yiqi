import product from '../../components/goods-item'
import cart from '../../components/cart-large'

const baseUrl = 'http://localhost:8080/static'

export default {
  name: 'ProductList',
  data () {
    return {
      msg: 'Welcome to ProductList',
      data: [{
        id: 'asdasfq3ws',
        img: baseUrl + '/Bitmap.png',
        name: '我的文化？',
        sprice: 1300,
        num: 50,
        price: 100,
        timer: 10
      }, {
        id: 'asdasfq3ws',
        img: baseUrl + '/Bitmap.png',
        name: '我的文化？',
        sprice: 1300,
        num: 50,
        price: 100,
        timer: 10
      }, {
        id: 'asdasfq3ws',
        img: baseUrl + '/Bitmap.png',
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