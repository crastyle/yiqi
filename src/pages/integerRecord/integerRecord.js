import Vue from 'vue'
import { Navbar, TabItem,TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  name: 'IntegerRecord',
  data () {
    return {
      msg: 'Welcome to IntegerRecord',
      selected: "1"
    }
  }
}