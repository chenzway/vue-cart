import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'test',
  linkExactActiveClass: 'blue',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/components/form/Index')
    },
    { path: '/cart', name: 'cart', component: () => import('@/components/cart/Index') },
    { path: '/test', test: 'cart', component: () => import('@/components/Test') }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log(to), next();
});

router.afterEach((to, from) => {});

export default router;
