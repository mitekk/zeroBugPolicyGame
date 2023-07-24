<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const { score } = useGameStore()
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
