<template>
  <div class="emit">
    <el-button type="primary" @click="click">$parent$emit</el-button>
    <el-button type="success" @click="click1">emit</el-button>
    <el-button type="warning" @click="click2">$root$emit</el-button>
    
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'emit',
  data() {
    return {
    };
  },
  methods: {
    click() {
      this.$parent.$emit('fromTest', 'aaa');
    },
    click1() {
      this.$emit('fromTestEmit', 'fromTestEmit')
    },
    click2() {
      this.$root.$emit('rootEmit', 'rootEmit')
    }
  },
};
</script>

<style scoped lang="stylus">

</style>