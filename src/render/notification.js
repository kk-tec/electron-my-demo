const notification = {
  title: '基本通知',
  options: {
    body: '通知一条短消息'
  }
}

const notificationBtn = document.getElementById('basic-noti')

notificationBtn.addEventListener('click', () => {
  const myNotification = new window.Notification(
    notification.title,
    notification.options
  )

  myNotification.onclick = () => {
    console.log('通知被点击')
  }
})
