const { app, BrowserWindow } = require('electron').remote
const path = require('path')

const clearTaskBtn = document.getElementById('clear_task')
clearTaskBtn.onclick = () => {
  console.log('清空任务列表')
  app.setUserTasks([])
}

const clearThumbarBtn = document.getElementById('clear_thumbar')
clearThumbarBtn.onclick = () => {
  console.log('清空缩略图工具栏')
  const win = BrowserWindow.getFocusedWindow()
  win.setThumbarButtons([])
}

const flashBtn = document.getElementById('flash_btn')
flashBtn.onclick = () => {
  console.log('窗口闪烁')
  const win = BrowserWindow.getFocusedWindow()
  win.flashFrame(true)
}

const newWinBtn = document.getElementById('new_win')
newWinBtn.onclick = () => {
  console.log('新建叠加窗口')
  const win = new BrowserWindow()
  win.setOverlayIcon('src/assets/image/logo.png', 'overlay')
}
