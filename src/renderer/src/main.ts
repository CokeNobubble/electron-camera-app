// import './assets/main.css'
import 'virtual:uno.css'
import 'reset-css'
import './assets/main.css'

// pinia
import { createPinia } from 'pinia'
// pinia 数据持久化
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(
  createPersistedState({
    storage: localStorage // 存储方式
  })
)

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(pinia)

app.mount('#app')
