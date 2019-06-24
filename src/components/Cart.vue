<template>
  <div>
    <p>{{name}}</p>
    <table border="1">
      <tr>
        <th>#</th>
        <th>课程名</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
      </tr>
      <tr v-for="(c,i) in cart" :key="c.id" :class="{active: c.active}">
        <td>
          <input type="checkbox" v-model="c.active">
        </td>
        <td>{{c.text}}</td>
        <td>￥{{c.price}}</td>
        <td>
          <button @click="minus(i)">-</button>
          {{c.count}}
          <button @click="add(i)">+</button>
        </td>
        <td>{{c.price * c.count}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{actionCount}}/{{count}}</td>
        <td colspan="2">{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      cart: []
    };
  },
  props: ["name"],
  methods: {
    add(i) {
      this.cart[i].count += 1;
    },
    minus(i) {
      const count = this.cart[i].count;
      if (count > 1) {
        this.cart[i].count -= 1;
      } else {
        this.remove(i);
      }
    },
    remove(i) {
      if (window.confirm("确定删除?")) {
        this.cart.splice(i, 1);
      }
    }
  },
  watch: {
    cart: {
      handler(val, oldval) {
        window.localStorage.setItem('cart', JSON.stringify(val));
      },
      deep: true
    }
  },
  // 对 data 的数据进行额外的加工的时候就要使用到计算属性
  computed: {
    actionCount() {
      return this.cart.filter(v => v.active).length;
    },
    count() {
      return this.cart.length;
    },
    total() {
      let num = 0;
      this.cart.forEach(v => {
        if (v.active) {
          num += v.count * v.price;
        }
      });
      return num;
    }
  },
  created() {
    this.cart = JSON.parse(window.localStorage.getItem('cart')) || [];
    // 数据交互，派发事件 
    this.$bus.$on("addCart", good => {
      const ret = this.cart.find(v => v.id === good.id);
      if (ret) {
        ret.count += 1;
      } else {
        this.cart.push({
          ...good,
          count: 1,
          active: true
        });
      }
    });
  }
};
</script>

<style>
.active {
  color: green;
}
</style>