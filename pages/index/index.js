// pages/index/index.js
Page({
  data: {
    banners: [
      { id: 1, image: '/images/banner-1.png', title: '聚焦超声外科前沿技术' },
      { id: 2, image: '/images/banner-2.png', title: '2026微创技术研讨会' }
    ],
    categories: [
      { key: 'spine', label: '脊柱', icon: '/images/icon-spine.svg', color: '#E0F2FE' },
      { key: 'joint', label: '关节', icon: '/images/icon-joint.svg', color: '#DCFCE7' },
      { key: 'sports', label: '运动医学', icon: '/images/icon-sports.svg', color: '#FEF3C7' },
      { key: 'trauma', label: '创伤', icon: '/images/icon-trauma.svg', color: '#FCE7F3' }
    ],
    announcements: [
      { id: 1, title: '超声外科吸引系统临床应用培训班', date: '2026-06-15', tag: '报名中', tagType: 'primary' },
      { id: 2, title: '第三期微创超声外科技术研讨会', date: '2026-07-01', tag: '即将开始', tagType: 'warning' },
      { id: 3, title: 'PiHub平台2.0版本更新公告', date: '2026-05-26', tag: '公告', tagType: 'default' }
    ],
    liveRecords: [
      { id: 1, cover: '', title: '超声引导下精准穿刺技术', speaker: '伊立 主任', views: 2836, duration: '45:20' },
      { id: 2, cover: '', title: '微创手术中的超声应用', speaker: '王教授', views: 1923, duration: '62:10' }
    ]
  },

  onSearchTap() {
    wx.showToast({ title: '搜索即将上线', icon: 'none' })
  },

  onCategoryTap(e) {
    const key = e.currentTarget.dataset.key
    wx.showToast({ title: '即将上线', icon: 'none' })
  },

  onAnnouncementTap(e) {
    wx.showToast({ title: '即将上线', icon: 'none' })
  },

  onLiveRecordTap(e) {
    wx.showToast({ title: '即将上线', icon: 'none' })
  },

  onBannerTap(e) {
    wx.showToast({ title: '即将上线', icon: 'none' })
  }
})