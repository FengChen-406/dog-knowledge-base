import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: '养狗知识库',
  description: '您的科学养宠指南',
  base: '/dog-knowledge-base/',
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '基础知识', link: '/basics/' },
      { text: '喂养营养', link: '/feeding/' },
      { text: '健康医疗', link: '/health/' },
      { text: '护理清洁', link: '/care/' },
      { text: '行为训练', link: '/training/' },
      { text: '高级养护', link: '/advanced/' },
      { text: '推荐资源', link: '/resources/' },
      { text: '关于我们', link: '/about/' }
    ],
    sidebar: 'auto',
    repo: 'FengChen-406/dog-knowledge-base',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['页面不存在'],
    backToHome: '返回首页',
    toggleColorMode: '切换颜色模式',
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
    backToTopPlugin(),
  ],
}) 