<script setup lang="ts">
import useDrag from './composables/useDrag'
import { useCameraSettingStore } from '@renderer/store/cameraSetting'
const cameraSettingStore = useCameraSettingStore()
const { config } = storeToRefs(cameraSettingStore)
// 退出
const quit = () => {
  window.api.quit()
}

// 拖拽窗口
const { drag } = useDrag()
drag.run()
</script>

<template>
  <Suspense>
    <div
      class="w-full h-full box-border"
      :class="config.rounded ? 'rounded-1/2' : ''"
      @contextmenu="quit"
      :style="{ border: `${config.borderWidth}px solid ${config.borderColor}` }"
    >
      <Camera v-if="config.page === 'camera'"></Camera>
      <Setting v-else></Setting>
    </div>
  </Suspense>
</template>
