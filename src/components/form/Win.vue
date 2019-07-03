<template>
  <div>
    <div class="head">
      <slot name="head"></slot>
    </div>
    <slot></slot>
    <slot name="foot"></slot>
  </div>
</template>

<script>
  export default {
    name: 'win'
  }
</script>
