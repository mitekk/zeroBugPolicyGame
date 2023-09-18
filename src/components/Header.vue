<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { score } = storeToRefs(store)
</script>

<template>
  <div class="header">
    <div v-if="score.isWon">You Won</div>
    <div v-else-if="score.isLost">You Lost</div>
  </div>
</template>

<style scoped>
.header {
  font-size: x-large;
  font-family: sans-serif;
}
</style>
