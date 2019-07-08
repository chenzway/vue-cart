<template>
  <div class="home">
    <!-- 条件语句 -->
    <p v-if="showName">v-if两秒后出现的：{{name}}</p>
    <p>this.$set动态添加的数据：{{foo.abc}}</p>
    <input type="text" v-model="text" />
    <p>v-model双向绑定：{{text}}</p>
    <p>
      事件绑定@:
      <el-button type="primary" @click="modify">修改</el-button>
    </p>
    <br />

    <h3>Vuex</h3>
    <p>{{count}}</p>
    <p>这是全局state中的hello的值：{{hello}}</p>
    <el-button type="primary" @click="actionCount">修改State</el-button>
    <el-button type="primary" @click="commitCount">commitState</el-button>
    <el-button type="primary" @click="ampActionCount">ampActionState</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      name: 'vue测试主页',
      showName: false,
      foo: {},
      text: ''
    };
  },
  computed: {
    // ...mapGetters(['count', 'hello']),
    // count: state => state.count,
    ...mapState(['count']),
    ...mapGetters(['hello'])
  },
  created() {
    setTimeout(() => {
      this.showName = true;
    }, 2000);

    setTimeout(() => {
      // vue在实例时是数据劫持，动态添加的数据要使用 $set
      this.$set(this.foo, 'abc', 'aa');
    }, 2000);
  },
  methods: {
    ...mapActions({ adda: 'count' }),
    ...mapMutations(['COUNT']),
    modify() {
      this.text = '修改双向绑定测试';
    },
    actionCount() {
      this.$store.dispatch('count', 2);
    },
    commitCount() {
      this.$store.commit('COUNT');
      this.COUNT(10);
    },
    ampActionCount() {
      this.adda(5);
    }
  }
};
</script>

<style lang="stylus" scoped></style>