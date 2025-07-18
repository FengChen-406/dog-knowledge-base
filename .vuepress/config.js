module.exports = {
  title: '养狗知识库',
  description: '您的科学养宠指南',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础知识', link: '/basics/' },
      { text: '喂养营养', link: '/feeding/' },
      { text: '健康医疗', link: '/health/' },
      { text: '护理清洁', link: '/care/' },
      { text: '行为训练', link: '/training/' },
      { text: '高级养护', link: '/advanced/' },
      { text: '推荐资源', link: '/resources/' }
    ],
    sidebar: 'auto',
    searchMaxSuggestions: 10
  },
  plugins: [
    '@vuepress/plugin-search',
    '@vuepress/plugin-back-to-top'
  ]
}

