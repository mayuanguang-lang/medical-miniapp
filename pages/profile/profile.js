// pages/profile/profile.js
Page({
  data: {
    userInfo: {
      name: '医学同仁',
      role: '超声外科领域',
      avatar: '/images/default-avatar.png'
    },
    stats: { follow: 12, favorite: 8, learn: 36 },
    menuGroups: [
      [
        { icon: '📋', label: '我的学习记录' },
        { icon: '⭐', label: '我的收藏' },
        { icon: '📜', label: '我的报名' }
      ],
      [
        { icon: '🔔', label: '消息通知' },
        { icon: '⚙️', label: '设置' },
        { icon: '❓', label: '帮助与反馈' }
      ],
      [
        { icon: '🏠', label: '关于PiHub' }
      ]
    ]
  },

  onMenuTap(e) {
    const label = e.currentTarget.dataset.label
    wx.showToast({ title: label + ' 即将上线', icon: 'none' })
  }
})