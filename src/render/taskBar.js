const { app } = require('electron').remote

const clearTaskBtn = document.getElementById('clear-task')
clearTaskBtn.onclick = () => {
  console.log('清空任务列表')
  app.setUserTasks([])
}
