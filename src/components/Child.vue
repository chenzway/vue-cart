<template>
  <div class="Child">
  child
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'child',
  data() {
    return {
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