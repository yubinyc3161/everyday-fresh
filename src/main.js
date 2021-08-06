import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.less';
import Antd from 'ant-design-vue';
import VCharts from 'v-charts-v2'
import '@/styles/global.less'
import showMessage from '@/utils/showMessage'

Vue.prototype.$showMessage = showMessage

Vue.use(Antd)
Vue.use(VCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
