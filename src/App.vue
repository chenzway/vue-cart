<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 条件语句 -->
    <p v-if="showName">{{name}}</p>
    <p>{{foo.abc}}</p>
    <input type="text" v-model="text">
    <button @click="addGoods">添加</button>
    <!-- 循环语句 -->
    <ul>
      <li v-for="(good, i) in goods" :key="good.text">
        {{good.text}}-￥{{good.price}}
        <button @click="addGoods(i)">加入</button>
      </li>
    </ul>
    <cart :name="name"></cart>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Cart
  },
  data() {
    return {
      name: "开课吧购物车",
      showName: false,
      goods: [],
      foo: {},
      text: ""
    };
  },
  async created() {
    setTimeout(() => {
      this.showName = true;
    }, 2000);

    /* axios.get('/api/good').then(res => {
      console.log(res);
    }) */
    try {
      let res = await axios.get("/api/goods");
      this.goods = res.data.list;
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      // vue在实例时是数据劫持，动态添加的数据要使用 $set
      this.$set(this.foo, "abc", "aa");
    }, 2000);
  },
  methods: {
    addGoods(i) {
      const good = this.goods[i];
      this.$bus.$emit("addCart", good);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
