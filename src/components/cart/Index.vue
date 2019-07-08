<template>
  <div>
    <!-- 循环语句 -->
    <ul>
      <li v-for="(good, i) in goods" :key="good.text">
        {{good.text}}-￥{{good.price}}
        <button @click="addGoods(i)">加入</button>
      </li>
    </ul>
    <cart></cart>
  </div>
</template>

<script>
import axios from 'axios';
import Cart from './Cart';

export default {
  name: 'cartIndex',
  data() {
    return {
      goods: []
    };
  },
  components: {
    Cart
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>