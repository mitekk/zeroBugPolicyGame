<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const { start, stop, reset } = useGameStore()
</script>

<template>
  <div class="center">
    <button @click="() => reset()">Reset</button>
    <button @click="() => stop()">Stop</button>
    <button @click="() => start()">Start</button>
  </div>
</template>

<style scope>
.center {
  display: flex;
  justify-content: space-around;
  flex: 1;
}

button {
  background-color: #3333;
  color: azure;
  font-size: 1rem;
  font-family: monospace;
  border-style: solid;
  border-block-color: azure;
  border-radius: 30%;
  padding: 1rem;
}
</style>
