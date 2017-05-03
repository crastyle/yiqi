<template>
    <div class="cartsPage">
        <ul class="cart-list">
            <li>
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
                        <span class="fl">&yen;190</span>
                        <span class="fr">x2</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    @import './carts.scss';
</style>
<script src="./carts"></script>