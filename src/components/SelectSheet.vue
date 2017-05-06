<style lang="scss" scoped>
  .select-sheet {
    font-size: 12px;
    position: relative;
    .tab {
      height: .4rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e1e1e1;
      .tab-item {
        width: 100%;
        text-align: center;
        &:nth-child(-n+3) {
          border-right: 1px solid #e1e1e1;
        }
      }
      .tab-active {
        color: red;
        i {
          display: inline-block;
          transform: rotate(90deg);
          transition: all .3s linear;
        }
      }
    }
    .options-warp {
      width: 100%;
      background: #fff;
      position: absolute;
      top: .4rem;
      .option-active {
        &::after {
          content: '√';
          float: right;
          margin-right: .4rem;
          color: red;
        }
      }
      .mask {
        background: #000;
        opacity: .4;
      }
    }
  }
</style>

<template>
  <div class="select-sheet">
    <div class="tab">
      <div class="tab-item" v-for="(item, index) in tabItem" :key="index">
        <span @click="tabClick(item.title)" :class="{'tab-active': activeTabTitle === item.title}">
          {{ item.title }}
          <i>=</i>
        </span>
      </div>
    </div>
    <div class="options-warp">
      <ul class="tab-options" ref="options">
        <li v-for="(item, index) in activeOptions" :key="index"
          @click="optionClick(item)"
          :class="{'option-active': item === activeOptionsSelected.active}">
          {{ item }}
        </li>
      </ul>
      <div v-if="activeOptions.length" class="mask"
        :style="{'height': maskHeight + 'px'}"
        @click="closeOptions">
      </div>
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
      const activeTab =  this.tabItem.find(m => m.title === this.activeTabTitle)
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
        this.maskHeight = document.body.offsetHeight - this.$refs.options.getBoundingClientRect().bottom
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
