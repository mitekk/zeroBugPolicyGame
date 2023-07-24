<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import WaterfallAnimation from './waterfall/WaterfallAnimation.vue'

const store = useGameStore()
const { items } = storeToRefs(store)
const { removeItem } = store

const onClickedItem = (id: string) => {
  removeItem(id)
}
</script>

<template>
  <div class="controls">
    <WaterfallAnimation :items="items" @onItemClick="onClickedItem" />
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  flex: 1;
}
</style>
