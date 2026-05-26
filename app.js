// app.js - 小程序入口文件
App({
  onLaunch() {
    // 小程序启动时执行
    console.log('医疗技术平台小程序启动')
  },

  globalData: {
    // 本地测试地址（域名备案后修改为正式域名）
    websiteUrl: 'http://localhost:8080/index.html'
  }
})
