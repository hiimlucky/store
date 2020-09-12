import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Col, Row,Field, Icon,Tab, Tabs,Swipe, SwipeItem,
		Grid, GridItem,CountDown, Tabbar, TabbarItem, 
		Sidebar, SidebarItem, GoodsAction, GoodsActionIcon, GoodsActionButton,
		NavBar, Sku,Uploader  } from 'vant';

Vue.use(Button).use(Col).use(Row).use(Field).use(Icon)
		.use(Tab).use(Tabs).use(Swipe).use(SwipeItem)
		.use(Grid).use(GridItem).use(CountDown).use(Tabbar)
		.use(TabbarItem).use(Sidebar).use(SidebarItem).use(GoodsAction)
		.use(GoodsActionButton).use(GoodsActionIcon).use(NavBar).use(Sku)
		.use(Uploader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
