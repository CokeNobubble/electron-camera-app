<script setup lang="ts">


const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div>

  </div>
</template>
