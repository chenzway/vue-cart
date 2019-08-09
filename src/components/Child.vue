<template>
  <div class="Child">
  child:{{child}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'child',
  data() {
    return {
      child:'abcd'
    };
  },
  created () {
    this.$root.$on('rootEmit', val => {
      console.log('child:' + val)
    });
    
  },
};
</script>

<style scoped lang="stylus">

</style>