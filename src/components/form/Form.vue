<template>
  <div>
    <!-- 匿名插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kform',
  provide() {
    return {
      // 传递数据给后代，单向数据流
      test: 'kform',
      // 将表单实例传递给后代
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  created() {
    // 缓存需要校验的表单项
    this.fields = [];
    this.$on('formItemAdd', item => this.fields.push(item));
    // 调用父组件中的方法
    this.$parent.say();
  },
  methods: {
    hello() {
      console.log('hello, world');
    },
    test() {
      console.log('test, world');
    },
    async validate(callback) {
      // 将FormItem数组转换为validate()返回的promise数组
      const tasks = this.fields.map(item => item.validate());
      console.log(tasks);

      // 获取所有结果统一处理
      const results = await Promise.all(tasks);
      let ret = true;
      results.forEach(valid => {
        if (!valid) {
          ret = false; // 只要一个失败就失败
        }
      });
      callback(ret);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>