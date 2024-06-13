import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCameraSettingStroe = defineStore(
  'cameraSetting',
  () => {
    const count = ref<number>(0)
    function increment() {
      count.value++
    }
    return { count, increment }
  },
  {
    persist: true // 开启数据持久化
  }
)
