<script setup lang="ts">
import { CameraFive } from '@icon-park/vue-next'
import { useCameraSettingStore } from '@renderer/store/cameraSetting'
const cameraSettingStore = useCameraSettingStore()
const { config } = storeToRefs(cameraSettingStore)
const deviceValue = ref('')

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((item) => item.kind.includes('video'))
console.log(cameras, '过滤出的所有相机设备')


const selectCamera = (id:string)=>{
  config.value.deviceId = id
}
</script>

<template>
  <div
    class="w-full h-full bg-#1A1B26 flex flex-col items-center box-border justify-between gap-10px p-10px"
  >
    <div
      class="flex flex-col justify-center items-center gap-5px cursor-pointer"
      @click="config.page = 'camera'"
    >
      <camera-five theme="outline" size="24" fill="#f6f6f6" />
      <span class="c-#f6f6f6 text-14px">参数设置</span>
    </div>
    <div class="w-full flex-1 flex flex-col gap-15px">
      <el-select v-model="deviceValue" placeholder="请选择摄像头" @change="selectCamera">
        <el-option
          v-for="item in cameras"
          :key="item.deviceId"
          :label="item.label"
          :value="item.deviceId"
        />
      </el-select>
      <div class="flex gap-10px items-center">
        <span class="c-#fff">边框宽度</span>
        <el-input-number v-model="config.borderWidth" :min="0" :max="99" />
      </div>
      <div class="flex gap-10px items-center">
        <span class="c-#fff">边框颜色</span>
        <el-color-picker v-model="config.borderColor" />
      </div>
    </div>
    <div class="c-#46C3FF">Author : Lee</div>
  </div>
</template>
