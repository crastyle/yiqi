<style lang="scss" scoped>
    @import '../../styles/app.scss';
    .cart {
        width: 1.04rem;
        height: 1.02rem;
        border-radius: 4px;
        background: url(../../static/icon-cart.png) no-repeat center rgba(0,0,0,.6);
        background-size: .61rem .51rem;
        position: fixed;
        bottom: 1rem;
        right: .5rem;
        span {
            width: .33rem;
            height: .33rem;
            position: absolute;
            right: .1rem;
            top: .1rem;
            background:$activeColor;
            color: #fff;
            text-align: center;
            line-height: .33rem;
            border-radius: 50%;
            font-size: .24rem;
        }
    }    
</style>

<template>
    <div class="productListPage">
        <div class="header">
            123 <br>
        </div>
        <select-sheet :tab-item="tabItem"></select-sheet>
        <product :data="prodList"></product>
        <div class="cart" @click="cartClick">
            <span>{{ 5 }}</span>
        </div>
    </div>
</template>

<script>
    import product from '../../components/goods-item'
    import SelectSheet from '../../components/SelectSheet'

    export default {
      name: 'ProductList',
      data () {
        return {
          prodList: null,
          sheetVisible: false,
          tabItem: [{
              title: 'aaa', options: ['a1', 'a2', 'a3']
          },{
              title: 'bbb', options: ['b1', 'b2', 'b3', 'b4']
          },{
              title: 'ccc', options: ['c1', 'c2', 'c3', 'c4', 'c5']
          },{
              title: 'ddd', options: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
          }]
        }
      },
      methods: {
        cartClick() {
            this.sheetVisible = true
        }
      },
      created() {
        this.$http.get('/static/prodList.json').then(res => {
            this.prodList = res.data
        })
      },
      components: {
        product,
        SelectSheet
      }
    }
</script>
