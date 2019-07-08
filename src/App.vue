<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/" tag="li">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/cart" tag="li">购物车</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/form" tag="li">自定义表单</router-link>
      </el-menu-item>
    </el-menu>
    
    <div class="line"></div>
    <router-view></router-view>
  </div>
  <!-- <cart :name="name"></cart> -->
</template>

<script>
import axios from 'axios';
import Cart from './components/Cart.vue';

export default {
  name: 'app',
  components: {
    Cart
  },
  data() {
    return {
      goods: [],
      activeIndex: '1'
    };
  },
  async created() {
    /* axios.get('/api/good').then(res => {
      console.log(res);
    }) */
    try {
      let res = await axios.get('/api/goods');
      this.goods = res.data.list;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  methods: {
    addGoods(i) {
      const good = this.goods[i];
      this.$bus.$emit('addCart', good);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>