<script setup lang="ts">
import { useCameraSettingStroe } from '@renderer/store/cameraSetting';
import { storeToRefs } from 'pinia';


const ipcHandle = () => window.electron.ipcRenderer.send('ping')
const cameraSettingStore = useCameraSettingStroe()
const { count } = storeToRefs(cameraSettingStore)
const { increment } = cameraSettingStore
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">加法</button>
  </div>
</template>
