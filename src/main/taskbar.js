//1. 任务栏列表
const { app } = require('electron')

app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: '新建窗口',
    description: '创建一个新窗口'
  }
])

//2. 缩略图工具栏
const path = require('path')

exports.setThumbar = function(win) {
  win.setThumbarButtons([
    {
      tooltip: 'left',
      icon: path.join(__dirname, '../assets/image/left.png'),
      click() {
        console.log('向左')
      }
    },
    {
      tooltip: 'right',
      icon: path.join(__dirname, '../assets/image/right.png'),
      // flags: ['enabled', 'dismissonclick'],  //加上就显示不出来按钮了
      click() {
        console.log('向右')
      }
    }
  ])
}
