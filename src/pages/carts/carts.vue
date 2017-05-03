<template>
    <div class="cartsPage">
        <ul class="cart-list">
            <li v-for="item in carts">
                <div class="radio">
                    <span class="mint-checkbox-core"></span>
                </div>
                <div class="img-box">
                    <img :src="$preStatic + '/Bitmap.png'" alt="">
                </div>
                <div class="cart-info">
                    <div class="name">冠成非洲花梨 三聚氰胺板 9mm厚芯单面</div>
                    <div class="intro">芯材：厚芯   纸张：色浆纸   表面处理：浮雕面</div>
                    <div class="price">
                        <span class="fl cp">&yen;190</span>
                        <span class="fr">x2</span>
                    </div>
                </div>
            </li>
           
        </ul>
        <div class="calculator-button">
            <div class="all-check">
                <span class="mint-checkbox-core"></span>全选
            </div>
            <div class="cart-prev">
                <p>合计：<span>&yen;89</span>元</p>
                <p>优惠：&yen;20.00</p>
            </div>
            <div class="button-sec">
                <a href="javascript:;" class="button full-button">结算</a>
            </div>
            
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import './carts.scss';
</style>
<script src="./carts"></script>