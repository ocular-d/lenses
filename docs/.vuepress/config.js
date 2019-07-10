module.exports = {
  title: 'Lenses',
  plugins: {'@vuepress/medium-zoom': true},
  themeConfig: {
    logo: '/ocl-logo.png',
    nav: [
      { text: 'GitHub', link: 'https://github.com/ocular-d/lenses' },
    ],
    sidebar: [
      {
        title: 'Checks',   // required
        collapsable: false, // optional, defaults to true
        children: [
          '/checks/linkcheck',
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
