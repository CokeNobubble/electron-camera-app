import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: TCustomApi
  }
}

type TCustomApi = {
  quit: () => void
}
