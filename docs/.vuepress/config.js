module.exports = {
  title: 'Lenses',
  plugins: {'@vuepress/medium-zoom': true},
  themeConfig: {
    logo: '/ocl-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
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
	]
      }
    ] 
  }
}
