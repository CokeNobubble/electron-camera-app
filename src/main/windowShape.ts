import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

// 定义获取win对象的方法
const getWin = (event) => {
  return BrowserWindow.fromWebContents(event.sender)
}

ipcMain.on('setWindowShape', (event: IpcMainEvent, opt: ShapeOpt) => {
  // 1.获取win对象
  const win = getWin(event)
  // 2.设置窗口宽高比例
  if (opt.AspectRatio) win?.setAspectRatio(opt.AspectRatio)
  // 3.设置窗口宽高
  win?.setBounds({ width: opt.width, height: opt.height })
})

export type ShapeOpt = {
  AspectRatio?: number // 宽高比
  width?: number
  height?: number
}
