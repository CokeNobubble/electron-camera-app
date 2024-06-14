import { BrowserWindow, ipcMain } from 'electron'

export type DragOpt = {
  x: number
  y: number
  width: number
  height: number
}
export default (win: BrowserWindow) => {
  ipcMain.handle('dragWindow', (_event, opt: DragOpt) => {
    // 通过event也能获取窗口对象
    // 1.通过win对象获取当前位置
    const [x, y] = win.getPosition()
    // 2.设置窗口位置
    win.setBounds({
      x: x + opt.x,
      y: y + opt.y,
      width: opt.width,
      height: opt.height
    })
  })
}
