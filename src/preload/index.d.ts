import { DragOpt } from './../main/dragWindow'
import { ElectronAPI } from '@electron-toolkit/preload'
import { ShapeOpt } from '../main/windowShape'
import { DragOpt } from '../main/dragWindow'

declare global {
  interface Window {
    electron: ElectronAPI
    api: TCustomApi
  }
}

type TCustomApi = {
  quit: () => void
  exit: () => void
  setWindowShape: (opt: ShapeOpt) => void
  dragWindow: (opt: DragOpt) => void
}
