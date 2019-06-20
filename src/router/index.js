import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/cart', name: 'cart', component: () => import('@/components/Cart') },
    { path: '/hello', name: 'hello', component: () => import('@/components/HelloWorld') },
    { path: '/', redirect: '/cart' }
  ]
});

export default router;
