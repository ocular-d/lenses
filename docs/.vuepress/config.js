module.exports = {
  title: 'Lenses',
  description: 'Container based checks for quality assurance of (API) documentation',
  plugins: {'@vuepress/medium-zoom': true},
  themeConfig: {
    logo: '/ocl-logo.png',
    nav: [
      { text: 'Guide', link: '/checks/'},
      { text: 'GitHub', link: 'https://github.com/ocular-d/lenses' },
    ],
    sidebar: [
      {
        title: 'Checks',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/checks/linkcheck',
          '/checks/remark',
        ]
      },
      {
        title: 'About',
	      collapsable: false,
        children: [
          '/glossary',
          '/contributing',
	      ]
      }
    ]
  }
}
