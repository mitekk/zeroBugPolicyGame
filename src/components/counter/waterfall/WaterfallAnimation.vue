<template>
  <div class="waterfall-container">
    <transition-group name="waterfall">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="waterfall-item"
        :style="{
          animationDelay: index * animationDelay + 's',
          left: dispositionX(),
          top: dispositionY()
        }"
      >
        <WaterfallItemComponent :item="item" @click="onItemClick"></WaterfallItemComponent>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import WaterfallItemComponent from './WaterfallItem.vue'
import { type WaterfallItem } from '../../../stores/game'

withDefaults(
  defineProps<{
    items: WaterfallItem[]
    animationDelay?: number
  }>(),
  {
    items: () => [],
    animationDelay: 0.5
  }
)

const dispositionX = () => `${Math.floor(Math.random() * 80)}%`
const dispositionY = () => `${Math.floor(Math.random() * 80)}%`

const emit = defineEmits<{
  itemDismiss: []
  onItemClick: [id: string]
}>()

const onItemClick = (id: string) => {
  emit('onItemClick', id)
}
</script>

<style>
.waterfall-container {
  flex: 1;
  display: flex;
  position: relative;
}

.waterfall-item {
  position: absolute;
}

.waterfall-enter-active,
.waterfall-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.waterfall-enter,
.waterfall-leave-to {
  opacity: 0;
}
</style>
