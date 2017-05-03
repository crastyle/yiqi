<template>
    <div class="goods-item" :data="data">
        <div class="list" v-for="item in data">
            <div class="img-box">
                <img :src="item.img" alt="">
            </div>
            <div class="item-info">
                <div class="name">
                    {{item.name}}
                </div>
                <div class="count">
                    <span class="s-price fl">市场价：&yen;{{item.sprice}}</span>
                    <span class="s-count fr">{{item.num}}份</span>
                </div>
                <div class="active">
                    <price :price="item.price" class="fl"></price>
                    <timer :value="item.timer" class="fr"></timer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import price from './price.vue'
    import timer from './timer.vue'
    export default {
        name: 'goods-item',
        props: {
            data: Array
        },
        components: {
            price,
            timer
        },
        mounted() {
            console.log(this.$parent.data)
        }
    }
</script>

<style scope lang="scss">
    .list {
        overflow: hidden;
        margin-left: .25rem;
        border-bottom: 1px solid #e1e1e1;
        height: 2rem;
        padding-right: .2rem;
        .img-box {
            width: 3rem;
            text-align: center;
            float: left;
            img {
                width: 1.68rem;
                height: 1.68rem;
                margin: .16rem auto;
            }
        }
        .item-info {
            .name {
                font-size: .28rem;
                color: #333;
                margin-top: .3rem;
            }
            .count {
                font-size: .24rem;
                color: #666;
                margin: .1rem 0;
                overflow: hidden;
            }
        }
        .active {
            overflow: hidden;
        }
    }
</style>