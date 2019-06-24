import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'test',
  linkExactActiveClass: 'blue',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home')
    },
    { path: '/cart', name: 'cart', component: () => import('@/components/Cart') },
    { path: '/hello', name: 'hello', component: () => import('@/components/HelloWorld') }
  ]
});

export default router;
