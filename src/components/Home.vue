<template>
  <div>
    <!--  <div class="home">
      <div class="bar">
        <div class="baz">
          <a href="#">1233</a>
        </div>
      </div>
    </div>
    <div class="test">test</div>-->
  </div>
</template>

<script>
let o = { c: 3 };
let o1 = { a: 1, b: 2 };
/* 

console.log(Object.length); 
console.log(Object.prototype);
console.log(Object.assign(o, o1)); */
let a = { a: "aa" };
let b = Object.create(a, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
console.log(b);
console.log(b.a);

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