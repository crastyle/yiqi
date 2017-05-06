<style lang="scss" scoped>
@import '../../styles/app.scss';
.header-warp {
  position: relative;
  .header {
    height: .88rem;
    font-size: .3rem;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
    .title {
      @extend .select-arrow;
      line-height: .88rem; // 修正
      &::after {
        width: 6px;
        height: 6px;
        margin-left: 5px;
        transform: translateY(-3px) rotate(45deg);
      }
      &.active {
        color: #666;
      }
    }
  }
  .type-list {
    z-index: 100;
    background: #fff;
    position: absolute;
    width: 100%;
  }
}

.cart {
  width: 1.04rem;
  height: 1.02rem;
  border-radius: 4px;
  background: url(../../static/icon-cart.png) no-repeat center rgba(0, 0, 0, .6);
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
    background: $activeColor;
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
    <div class="header-warp">
      <div class="header">
        <span class="fl">后退</span>
        <span class="fr">搜索</span>
        <span @click="titleClick" :class="['title', {'active': typeListShow}]">
          {{ '商品分类' }}
        </span>
      </div>
      <div v-show="typeListShow" class="type-list">
        123
      </div>
    </div>
    <select-sheet :tab-item="tabItem" @change="selectChange"></select-sheet>
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
  data() {
    return {
      prodList: null,
      sheetVisible: false,
      typeListShow: false,
      tabItem: [{
        title: '品牌', options: ['全部', '品牌1', '品牌2', '品牌3']
      }, {
        title: '专区', options: ['全部', '专区1', '专区2', '专区3', '专区4']
      }, {
        title: '排序', options: ['全部', '排序1', '排序2', '排序3', '排序4', '排序5']
      }, {
        title: '筛选', options: ['全部', '筛选1', '筛选2', '筛选3', '筛选4', '筛选5', '筛选6']
      }]
    }
  },
  methods: {
    titleClick() {
      this.typeListShow = !this.typeListShow
    },
    cartClick() {
      this.sheetVisible = true
    },
    selectChange(rs) {
      // 筛选结果
      console.log(
        rs.targetOption, // 击中项
        rs.targetTabTitle, // 击中项所属的 tab 类
        rs.tabsState // 所有 tab 状态
      )
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
