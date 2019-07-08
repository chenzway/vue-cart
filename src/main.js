import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

// 修改Vue的原型， 总线模式传值
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
