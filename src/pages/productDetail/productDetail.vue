<template>
    <div class="productDetailPage">
        <mt-header fixed title="商品详情" class="productHeader">
        	<mt-button v-link="'/'" icon="back" slot="left" class="back"></mt-button>
        	<mt-button icon="more" slot="right" class="more"></mt-button>
        </mt-header>
        <mt-swipe :auto="0" class="pic_gallery">
		  <mt-swipe-item v-for="item in goods.pic_gallery" :key="item.id">
		  	<img :src="item.src">
		  </mt-swipe-item>		  
		</mt-swipe>
		<div class="goodsPart">
			<div class="goodName">{{goods.name}}</div>
			<div class="goodPrice">
				<span>&yen;{{goods.price}}</span>
				<div class="starWrap">
					<div class="star star-48">
					  <span class="star-item on"></span>
					  <span class="star-item on"></span>
					  <span class="star-item on"></span>
					  <span class="star-item on"></span>
					  <span class="star-item off"></span>
					</div>
				</div>
			</div>
			<div class="goodSource">京东商城</div>
		</div>
		<div><mt-cell title="图文详情" label="(建议在WiFi环境下查看)" href="/" is-link class="goodCell"></mt-cell></div>		
		<div><mt-cell title="请选择相关的尺码、颜色" href="/" is-link class="goodCell"></mt-cell></div>
		<div>
			<mt-cell title="用户评价" label="(2111)" href="/" is-link class="goodCell comment"></mt-cell>
		</div>
		<div class="prod-comment">
			<div class="comment-list">
				<div class="content">发货很快，很不错！</div>
				<div class="info">
					<div class="comment-author">南非的我</div>
					<div class="comment-data">2015-02-15 15:20</div>
				</div>
			</div>
		</div>
		<div><mt-cell title="优惠套餐" href="/" is-link class="goodCell"></mt-cell></div>
		<div class="cart-concern-fixed">
			<div class="concern-cart">
				<a href="javascript:;">
					<i class="mintui mintui-more"></i>
					<span class="focus-info">收藏</span>
				</a>
				<a href="javascript:;">
					<i class="mintui mintui-more"></i>
					<span class="focus-info">收藏</span>
				</a>
				<a href="javascript:;">
					<i class="mintui mintui-more"></i>
					<span class="focus-info">收藏</span>
				</a>
			</div>
			<div class="action-list">
				<a class="add_cart">加入购物车</a>
				<a class="directorder">立即购买</a>
			</div>
		</div>
    </div>
</template>
<style scoped lang="scss">
    @import './productDetail.scss';
</style>
<script src="./productDetail"></script>
