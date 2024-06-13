<script setup lang="ts">
// const ipcHandle = () => window.electron.ipcRenderer.send('ping')
// 退出
const quit = () => {
  window.api.quit()
}
</script>

<template>
  <Suspense>
    <div class="w-full h-full" @contextmenu="quit"></div>
  </Suspense>
</template>
