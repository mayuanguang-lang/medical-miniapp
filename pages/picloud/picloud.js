// pages/picloud/picloud.js
Page({
  data: {
    features: [
      { icon: '☁️', title: '云笔记', desc: '随时记录学术灵感', color: '#EFF6FF' },
      { icon: '📂', title: '资料库', desc: '文献资料云端存储', color: '#F0FDF4' },
      { icon: '🤝', title: '学术圈', desc: '连接领域专家同行', color: '#FFF7ED' },
      { icon: '📊', title: '数据看板', desc: '平台数据可视化', color: '#FAF5FF' }
    ],
    recentDocs: [
      { title: '超声吸引系统操作规范V2', time: '2小时前', type: '文档' },
      { title: '2026年Q1学术会议纪要', time: '昨天', type: '文档' },
      { title: '微创手术并发症分析报告', time: '3天前', type: '表格' }
    ]
  },
  onFeatureTap() { wx.showToast({ title: '即将上线', icon: 'none' }) },
  onDocTap() { wx.showToast({ title: '即将上线', icon: 'none' }) }
})