<template>
  <div>
    <div class="home">
      <div class="bar">
        <div class="baz">
          <a href="#">1233</a>
        </div>
      </div>
    </div>
    <div class="test">test</div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="stylus" scoped>
h = 100px
w = 200px
b = 1px solid red
bb()
  width 100px
  height 100px
  border 1px solid yellow
  border-radius 10px
border-radius()
  border-radius arguments
.home, .test
  bb()
.home .bar .baz > a
  height 10px
  width 10px
  border 1px solid red
</style>