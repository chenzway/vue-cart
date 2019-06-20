### [vue-router](https://router.vuejs.org/zh/guide/#html)
```javascript
// 1. 安装
cnpm i vue-vouter -S

router.js
// 2. 引入并注册
import Vue from 'vue',
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 实例化路由并进行配置
const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/cart', name: 'cart', component: () => import('@/components/Cart') },
    { path: '/hello', name: 'hello', component: () => import('@/components/HelloWorld') },
    { path: '/', redirect: '/cart' }
  ]
});

// 导出路由
export default router;

// app.vue
<router-view></router-view>
```

