// pages/about/about.js
Page({
  data: {
    platformName: 'π镜界',
    description: '专注医学技术学术分享的专业平台',
    features: [
      '技术科普文章',
      '线上手术直播',
      '学术活动公告',
      '专业医学内容'
    ],
    version: '1.0.0'
  },

  onLoad() {
    console.log('关于我们页面加载')
  },

  // 返回首页
  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})