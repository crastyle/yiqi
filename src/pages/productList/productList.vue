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
        <product :data="prodList"></product>
        <div class="cart" @click="cartClick">
            <span>{{ 5 }}</span>
        </div>
    </div>
</template>

<script>
    import product from '../../components/goods-item'

    export default {
      name: 'ProductList',
      data () {
        return {
          prodList: null
        }
      },
      methods: {
        cartClick() {
            console.log('xxx')
        }
      },
      created() {
        this.$http.get('/static/prodList.json').then(res => {
            this.prodList = res.data
        })
      },
      components: {
        product
      }
    }
</script>