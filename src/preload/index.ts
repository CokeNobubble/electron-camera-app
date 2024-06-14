import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { ShapeOpt } from '../main/windowShape'
import { DragOpt } from '../main/dragWindow'
// Custom APIs for renderer
const api = {
  // 右键退出
  quit: () => {
    // 向主进程发送退出事件
    ipcRenderer.send('quit')
  },
  // 点击关闭图标，退出应用
  exit: () => {
    // 向主进程发送退出事件
    ipcRenderer.send('exit')
  },
  // 设置窗口形状/尺寸
  setWindowShape: (opt: ShapeOpt) => {
    ipcRenderer.send('setWindowShape', opt)
  },
  // 拖拽窗口
  dragWindow: (opt: DragOpt) => {
    ipcRenderer.invoke('dragWindow', opt)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
