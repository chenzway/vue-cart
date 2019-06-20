import Vue from 'vue';
import App from './App.vue';
import router from '@/router';

Vue.config.productionTip = false;

// 修改Vue的原型， 总线模式传值
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
