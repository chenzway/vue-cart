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

</template>

<script>


export default {
  name: 'app',

  data() {
    return {
      activeIndex: '1'
    };
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