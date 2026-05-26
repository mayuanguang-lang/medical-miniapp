# 📱 医疗技术平台小程序

WebView 嵌入版微信小程序，快速体验微信生态。

---

## 🚀 快速开始

### 1. 下载微信开发者工具

访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

选择 Windows 版本下载并安装。

### 2. 导入项目

1. 打开微信开发者工具
2. 选择"小程序" → "导入项目"
3. 目录选择：`medical-miniapp` 文件夹
4. AppID：填写你的小程序 AppID（或使用测试号）
5. 点击"导入"

### 3. 修改网站地址

打开 `app.js`，修改 `websiteUrl` 为你的正式域名：

```javascript
globalData: {
  websiteUrl: 'https://your-domain.com'  // 改为你的域名
}
```

### 4. 配置业务域名

⚠️ **重要：** WebView 加载的域名必须在微信小程序后台配置：

1. 登录 https://mp.weixin.qq.com
2. 开发 → 开发管理 → 开发设置 → 业务域名
3. 点击"添加"
4. 下载校验文件（如 `xxx.txt`）
5. 将文件放到网站根目录
6. 在小程序后台填入域名
7. 点击保存

### 5. 预览和发布

- 点击"预览"生成二维码，手机扫码体验
- 点击"上传"提交代码到微信后台
- 在微信后台提交审核，通过后发布

---

## 📁 项目结构

```
medical-miniapp/
├── app.js              # 小程序入口
├── app.json            # 全局配置
├── app.wxss            # 全局样式
├── pages/
│   └── index/
│       ├── index.wxml  # WebView 页面
│       ├── index.wxss  # 页面样式
│       ├── index.js    # 页面逻辑
│       └── index.json  # 页面配置
├── project.config.json # 项目配置
├── sitemap.json        # 站点地图
└── README.md           # 使用说明
```

---

## ⚙️ 配置说明

### 修改 AppID

打开 `project.config.json`，修改 `appid` 字段：

```json
{
  "appid": "你的小程序AppID"
}
```

### 修改网站地址

打开 `app.js`，修改 `globalData.websiteUrl`：

```javascript
globalData: {
  websiteUrl: 'https://your-domain.com'
}
```

### 修改小程序名称

打开 `app.json`，修改 `window.navigationBarTitleText`：

```json
{
  "window": {
    "navigationBarTitleText": "你的小程序名称"
  }
}
```

---

## 📋 使用前提

1. ✅ 已注册微信小程序账号
2. ✅ 已购买域名并完成 ICP 备案
3. ✅ 域名已绑定到 Vercel（或其他服务器）
4. ✅ 在小程序后台配置了业务域名

---

## 🛠️ 常见问题

### Q: WebView 白屏怎么办？

**A:** 检查：
1. 域名是否已在小程序后台配置
2. 域名是否已完成 ICP 备案
3. 网站是否能正常访问

### Q: 如何调试？

**A:**
1. 在微信开发者工具中打开控制台
2. 查看 Console 日志
3. 查看 Network 请求

### Q: 如何更新内容？

**A:** 直接更新网站内容即可，小程序会自动同步，无需重新提交审核。

---

## 📞 技术支持

如有问题，请在 QClaw 中反馈。
