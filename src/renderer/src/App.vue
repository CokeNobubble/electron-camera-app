<script setup lang="ts">

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div>1234</div>
</template>
