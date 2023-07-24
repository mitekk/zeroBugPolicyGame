import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { calculateColor, useInterval } from './game.util'
import { v4 as uuidv4 } from 'uuid'

export interface WaterfallItem {
  id: string
  name: string
  color: string
  onClick: () => void
}

interface Score {
  removed: number
  currentItems: number
  result: number
  color: string
  isPlaying: boolean
  isLost: boolean
  isWon: boolean
}

export const useGameStore = defineStore('game', () => {
  const initialScore: Score = {
    removed: 0,
    currentItems: 3,
    color: 'green',
    result: 3,
    isPlaying: true,
    isLost: false,
    isWon: false
  }

  const createNewItem = (): WaterfallItem => {
    const bugTicket = {
      name: 'Bug',
      color: 'red'
    }
    const taskTicket = {
      name: 'Task',
      color: 'blue'
    }
    const id = uuidv4()
    const randomNumber = Math.floor(Math.random() * 101)

    return {
      id,
      ...(randomNumber % 2 ? bugTicket : taskTicket),
      onClick: () => {
        removeItem(id)
      }
    }
  }

  const initialItems = Array.from(Array(initialScore.currentItems), (_, i) => i * 10).map(() =>
    createNewItem()
  )
  const score = ref<Score>({ ...initialScore })
  const items = ref<WaterfallItem[]>([...initialItems])

  const addItem = (item: WaterfallItem) => {
    if (score.value.isPlaying) items.value = [...items.value, item]
    score.value.currentItems = items.value.length
  }
  const removeItem = (id: string) => {
    if (score.value.isPlaying && items.value.length) {
      items.value = items.value.filter((item) => item.id !== id)
      score.value.removed++
    }
    score.value.currentItems = items.value.length
  }

  const reset = () => {
    score.value = { ...initialScore }
    items.value = [...initialItems]
    stop()
    start()
  }

  watch([() => score.value.removed, () => score.value.currentItems], ([removed, items]) => {
    const result = items - removed / 2
    score.value.color = calculateColor(result)
    score.value.result = result

    if (result <= 0) {
      score.value.isPlaying = false
      score.value.isWon = true
      console.log('You Won!')
    } else if (result >= 20) {
      score.value.isPlaying = false
      score.value.isLost = true
      console.log('You Lost!')
    }
  })

  watch(score.value, (isPlaying) => {
    if (isPlaying) {
      start()
    } else {
      stop()
    }
  })

  const { start, stop } = useInterval(() => {
    const newItem = createNewItem()
    addItem(newItem)
  }, 700)

  return { score, items, addItem, removeItem, reset, stop, start }
})
