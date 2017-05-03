<template>
    <span class="price" :price="price">
        {{price}}
    </span>
</template>

<script>
    export default {
        name: 'price',
        props: {
            price: Number
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/app.scss';
        span.price {
            font-size: .32rem;
            color: $activeColor;
            background: url(../static/icon-price.png) no-repeat left center;
            background-size: .26rem;
            padding-left: .3rem;
    }
</style>