module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TTLock Open Platform',
      description: 'TTLock Open Platform',
      keywords: 'TTLock Open Platform',
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', href: `/favicon.ico`, type: 'image/x-icon', media: 'screen' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#437CEE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#437CEE' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  ga:'UA-124736400-1',
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    logo: '/logo.png',
    repo: 'hanwenbo/ttlock-docs',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        languageDropdown: false,
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '文档',
            link: '/doc/',
          }
        ],
        sidebar: {
          '/doc/': genDocSidebarConfig('文档'),
        }
      }
    }
  }
}



function genDocSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'guide',
        'sdk-android',
        'sdk-ios',
        'oauth2',
        'api',
        'v3'
      ]
    }
  ]
}
