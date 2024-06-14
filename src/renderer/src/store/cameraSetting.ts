type IConfig = {
  deviceId: string
  page: 'camera' | 'setting'
  borderWidth: number
  borderColor: string
  rounded: boolean
}
export const useCameraSettingStore = defineStore(
  'cameraSetting',
  () => {
    const config = ref<IConfig>({
      deviceId: '', // 摄像头ID
      page: 'setting', // 摄像头页面
      borderWidth: 0, // 边框宽度
      borderColor: '#fff', // 边框颜色
      rounded: false // 窗口形状 -->圆角/方形 true/false 默认方形/false
    })

    const setConfig = <T extends keyof IConfig, K extends IConfig[T]>(key: T, value: K): void => {
      console.log(key, value)
      config.value[key] = value
    }

    return { config, setConfig }
  },
  {
    persist: true // 开启数据持久化
  }
)
