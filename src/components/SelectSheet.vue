<style lang="scss" scoped>
@import '../styles/app.scss';
.select-sheet {
  font-size: .28rem;
  position: relative;
  .tab {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    .tab-item {
      width: 100%;
      height: .4rem;
      line-height: .4rem;
      margin: .2rem 0;
      text-align: center;
      color: #666;
      &:nth-child(-n+3) {
        border-right: 1px solid #e1e1e1;
      }
      span {
        @extend .select-arrow;
      }
    }
  }
  .options-warp {
    width: 100%;
    background: #fff;
    position: absolute;
    top: .8rem;
    .tab-options {
      li {
        height: .88rem;
        line-height: .88rem;
        padding-left: .42rem;
        border-top: 1px solid #e1e1e1;
      }
    }
    .option-active {
      color: $activeColor;
      &::after {
        content: " ";
        width: 4px;
        height: 8px;
        float: right;
        margin: .28rem .4rem 0 0;
        border: 2px solid $activeColor;
        border-left: 0;
        border-top: 0;
        transform: rotate(45deg);
      }
    }
  }
  .mask {
    position: absolute;
    width: 100%;
    background: #000;
    opacity: .2;
  }
}
</style>

<template>
  <div class="select-sheet">
    <div class="tab" ref="tab">
      <div class="tab-item" v-for="(item, index) in tabItem" :key="index">
        <span @click="tabClick(item.title)" :class="{'active': activeTabTitle === item.title}">
          {{ item.title }}
          <!--<i>=</i>-->
        </span>
      </div>
    </div>
    <div class="options-warp" ref="options">
      <ul class="tab-options">
        <li v-for="(item, index) in activeOptions" :key="index" @click="optionClick(item)" :class="{'option-active': item === activeOptionsSelected.active}">
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-if="activeOptions.length" class="mask" :style="{'top': maskTop + 'px', 'height': maskHeight + 'px'}" @click="closeOptions">
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-sheet',
  props: {
    tabItem: Array
  },
  data() {
    return {
      // 为空时 收起选项列表
      activeTabTitle: '',
      maskHeight: 0,
      maskTop: 0,
      selectState: null
    }
  },
  created() {
    // 初始化选择结果
    this.selectState = this.tabItem.map(x => ({ tabTitle: x.title, active: '全部' }))
  },
  computed: {
    // 展示的选项
    activeOptions() {
      const activeTab = this.tabItem.find(m => m.title === this.activeTabTitle)
      return activeTab ? activeTab.options : []
    },
    // 展示的选项里被选中的项
    activeOptionsSelected() {
      return this.selectState.find(x => x.tabTitle === this.activeTabTitle)
    }
  },
  methods: {
    tabClick(title) {
      if (this.activeTabTitle === title) {
        this.closeOptions()
      } else {
        this.activeTabTitle = title
      }
      // 计算遮罩高度
      this.$nextTick(() => {
        const tabRect = this.$refs.tab.getBoundingClientRect()
        const optionsRect = this.$refs.options.getBoundingClientRect()
        this.maskTop = tabRect.height + optionsRect.height
        this.maskHeight = document.body.offsetHeight - optionsRect.bottom
      })
    },
    optionClick(target) {
      this.activeOptionsSelected.active = target
      // this.closeOptions()
      this.$emit('change', {
        targetOption: target,
        targetTabTitle: this.activeTabTitle,
        tabsState: this.selectState
      })
    },
    closeOptions() {
      this.activeTabTitle = '' // 收起选项列表
    }
  }
}
</script>
