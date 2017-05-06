<template>
    <div class="cartsPage">
    <header>
        <div class="title"></div>
    </header>
        <ul class="cart-list">
            <li v-for="item in carts">
                <div class="radio" @click="choice(item)">
                    <span class="mint-checkbox-core" v-bind:class="{'checked': item.isActive}"></span>
                </div>
                <div class="img-box">
                    <img :src="$preStatic + '/Bitmap.png'" alt="">
                </div>
                <div class="cart-info">
                    <div class="name">{{item.name}}</div>
                    <div class="intro">{{item.intro}}</div>
                    <div class="price">
                        <span class="fl cp">{{'￥' + item.price}}</span>
                        <span class="fr">{{'x'+ item.count}}</span>
                    </div>
                </div>
            </li>
           
        </ul>
        <div class="calculator-button">
            <div class="all-check" @click="allCheckActive">
                <span class="mint-checkbox-core" v-bind:class="{'checked': allCheck}"></span>全选
            </div>
            <div class="cart-prev">
                <p>合计：<span>&yen;89</span>元</p>
                <p>优惠：&yen;20.00</p>
            </div>
            <div class="button-sec">
                <a href="javascript:;" class="button full-button" v-bind:class="{'disabled': !canCalc}">结算</a>
            </div>
            
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import './carts.scss';
</style>
<script src="./carts"></script>