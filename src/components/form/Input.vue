<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputHandler" />
  </div>
</template>

<script>
export default {
  name: 'kinput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      //单向数据流原则： 组件内不能修改 props 的属性
      inputValue: this.value
    };
  },
  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
      // 通知父组件更新 input 的值
      this.$emit('input', this.inputValue);

      // 通知父组件做校验
      this.$parent.$emit('validate', this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>