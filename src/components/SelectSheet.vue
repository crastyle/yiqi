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
    .tab-options {
      width: 100%;
      background: #fff;
      position: absolute;
      top: .4rem;
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
    <ul class="tab-options">
      <li v-for="(item, index) in activeOps" :key="index">{{ item }}</li>
    </ul>
    <div class="mask"></div>
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
      activeTabTitle: ''
    }
  },
  computed: {
    activeOps() {
      const activeTab =  this.tabItem.find(m => m.title === this.activeTabTitle)
      return activeTab ? activeTab.options : []
    }
  },
  methods: {
    tabClick(title) {
      if (this.activeTabTitle === title) {
        this.activeTabTitle = ''
      } else {
        this.activeTabTitle = title
      }
    }
  }
}
</script>
