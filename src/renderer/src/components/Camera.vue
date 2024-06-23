<script setup lang="ts">
import { CloseSmall, SettingTwo, Switch } from '@icon-park/vue-next'
import { useCameraSettingStore } from '@renderer/store/cameraSetting'
const cameraSettingStore = useCameraSettingStore()
const { config } = storeToRefs(cameraSettingStore)

// 点击关闭图标
const quit = () => {
  window.api.exit()
}
// 改变展示形状
const changeShape = () => {
  console.log(config)
  config.value.rounded = !config.value.rounded
  if (config.value.rounded) {
    // 圆角
    window.api.setWindowShape({ AspectRatio: 1, width: 300, height: 300 })
  } else {
    // 方形
    window.api.setWindowShape({ AspectRatio: 16 / 9, width: 500, height: 280 })
  }
}

// 跳转到设置页面
const goSettingPage = () => {
  window.api.setWindowShape({ width: 500, height: 280 })
  config.value.page = 'setting'
  config.value.rounded = false
}

onMounted(() => {
  console.log(config.value.deviceId,"🚀");
  
  const constraints = {
    audio: false,
    video: {
      deviceId: config.value.deviceId,
      width: 1920,
      height: 1080
    }
  } as MediaStreamConstraints

  const video = document.querySelector('video')!
  console.log(navigator)
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    console.log(stream, 'stream')
    video.srcObject = stream
    video?.play()
  })
})
</script>

<template>
  <div :class="['w-full h-full relative group']">
    <video
      class="object-cover h-full w-full"
      :class="config.rounded ? 'rounded-1/2' : ''"
      src=""
    ></video>
    <close-small
      class="absolute top-10px left-1/2 -translate-x-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition transition-delay-200"
      theme="outline"
      size="24"
      fill="#f6f6f6"
      @click="quit"
    />
    <div
      class="absolute bottom-10px left-1/2 -translate-x-1/2 gap-20px flex opacity-0 group-hover:opacity-100 transition transition-delay-200"
    >
      <setting-two
        class="cursor-pointer"
        @click="goSettingPage"
        theme="outline"
        size="20"
        fill="#f6f6f6"
      />
      <Switch
        @click="changeShape"
        class="cursor-pointer"
        theme="outline"
        size="20"
        fill="#f6f6f6"
      />
    </div>
  </div>
</template>
