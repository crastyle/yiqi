<template>
    <div class="cart" :num="num" @click="cart">
        <span>{{num}}</span>
    </div>
</template>

<script>
    export default {
        name: 'cart',
        props: {
            num: Number
        },
        data() {
            return {

            }
        },
        methods: {
            cart() {
                console.log('xxx')
            }
        }
    }
</script>
<style  scoped lang="scss">
    @import '../styles/app.scss';
    .cart {
        width: 1.04rem;
        height: 1.02rem;
        border-radius: 4px;
        background: url(../static/icon-cart.png) no-repeat center rgba(0,0,0,.6);
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