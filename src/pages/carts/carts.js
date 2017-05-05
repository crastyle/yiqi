export default {
  name: 'Carts',
  data () {
    return {
      msg: 'Welcome to Carts',
      carts: [{
        id: 'sdf',
        img: '/static/Bitmap.png',
        name: '冠成非洲花梨 三聚氰胺板 9mm厚芯单面',
        intro: '芯材：厚芯   纸张：色浆纸   表面处理：浮雕面',
        price: 190,
        count: 5,
        tag: '1',
        isActive: false
      }, {
        id: '12ds',
        img: '/Bitmap.png',
        name: '冠成非洲花梨 三聚氰胺板 9mm厚芯单面',
        intro: '芯材：厚芯   纸张：色浆纸   表面处理：浮雕面',
        price: 190,
        count: 3,
        tag: '1',
        isActive: false
      }, {
        id: 'sf132',
        img: '/static/Bitmap.png',
        name: '冠成非洲花梨 三聚氰胺板 9mm厚芯单面',
        intro: '芯材：厚芯  纸   表面处理：浮雕面',
        price: 290,
        count: 1,
        tag: '1',
        isActive: false
      }],

      //选中的ids
      chooseIds: [],

      // 全选状态
      allCheck: false,

      //是否允许结算按钮样式
      canCalc: false      
    }
  },
  created() {
   
  },
  methods: {
    choice(item) {
      console.log(item)
      if (item.isActive) {
        item.isActive = false
        this.chooseIds.splice(item.id, 1)
      } else {
        item.isActive = true
        this.chooseIds.push(item.id)
      }
    },
    allCheckActive() {
      if (this.allCheck) {
        this.allCheck = false
        this.chooseIds = []
        for (let i = 0; i < this.carts.length; i++) {
          this.carts[i].isActive = false
        }
      } else {
        this.allCheck = true
        this.chooseIds = []
        for (let i = 0; i < this.carts.length; i++) {
          this.carts[i].isActive = true
          this.chooseIds.push(this.carts[i]['id'])
        }
      }
    }
  },
  watch: {
    'chooseIds': function(v, o){
      if (v.length > 0) {
        this.canCalc = true
      } else {
        this.canCalc = false
      }
    }
  }
}