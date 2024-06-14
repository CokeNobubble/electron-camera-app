import { ipcMain, app, Menu } from 'electron'

ipcMain.on('quit', () => {
  const template = [
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})

// 点击关闭图标，退出应用
ipcMain.on('exit', () => {
  app.quit()
})
