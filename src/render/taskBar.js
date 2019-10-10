const { app, BrowserWindow } = require('electron').remote
const path = require('path')

const clearTaskBtn = document.getElementById('clear-task')
clearTaskBtn.onclick = () => {
  console.log('清空任务列表')
  app.setUserTasks([])
}

const clearThumbarBtn = document.getElementById('clear-thumbar')
clearThumbarBtn.onclick = () => {
  console.log('清空缩略图工具栏')
  const win = BrowserWindow.getFocusedWindow()
  win.setThumbarButtons([])
}

const flashBtn = document.getElementById('flash-btn')
flashBtn.onclick = () => {
  console.log('窗口闪烁')
  const win = BrowserWindow.getFocusedWindow()
  win.flashFrame(true)
}
