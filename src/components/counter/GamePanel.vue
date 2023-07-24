<script setup lang="ts">
import Controls from './Controls.vue'
import Display from './Display.vue'
</script>

<template>
  <div class="counter">
    <div class="left"><Controls /></div>
    <div class="right"><Display /></div>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex: 1;

  .left {
    display: flex;
    flex: 2;
  }
  .right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}
</style>
