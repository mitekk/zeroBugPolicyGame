<template>
  <div class="waterfallItem-container" :style="{ 'background-color': item.color }" @click="onClick">
    <p class="waterfallItem">
      {{ item.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { type WaterfallItem } from '../../../stores/game'

const props = defineProps<{ item: WaterfallItem }>()

const emit = defineEmits<{
  click: [id: string]
}>()

const onClick = () => {
  emit('click', props.item.id)
}
</script>

<style scoped>
.waterfallItem-container {
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: aliceblue;
  border-radius: 25px;

  .waterfallItem {
    color: azure;
    user-select: none;
  }
}
</style>
