// pages/contact/contact.js
Page({
  data: {
    contacts: [
      { label: '平台名称', value: 'π镜界' },
      { label: '邮箱', value: 'contact@paijingjie.com' },
      { label: '微信', value: 'PiJingJie_Med' },
      { label: '工作时间', value: '周一至周五 9:00-18:00' }
    ],
    qrCodeTip: '扫描下方二维码关注公众号获取最新学术资讯'
  },

  onLoad() {
    console.log('联系方式页面加载')
  },

  copyText(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success() {
        wx.showToast({ title: '已复制', icon: 'success' })
      }
    })
  },

  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})