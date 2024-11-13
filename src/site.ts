// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Vue Designer',
  description: 'Vue Designer Astro PrimeVue - Quick start template',
  // logo: 'i-emojione-rocket',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-astro-primevue.netlify.app',
  github: 'https://github.com/pinegrow/pg-astro-primevue',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
    { text: 'About', link: '/about' },
  ],
}
