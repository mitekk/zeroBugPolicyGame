<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { score } = storeToRefs(store)
</script>

<template>
  <div class="result-container">
    <div class="profile" :style="{ borderColor: score.color }">
      <div class="score">{{ score.result }}</div>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  .profile {
    min-width: 7rem;
    min-height: 7rem;
    background-size: cover;
    border-radius: 25px;
    border-style: solid;
    border-width: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .score {
    font-size: 26px;
    font-family: system-ui;
  }
}
</style>
