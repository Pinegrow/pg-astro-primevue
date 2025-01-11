// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Vue Designer',
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

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Quick Start',
        icon: 'i-mdi-home',
        to: '/quick-start/index',
      },
    ],
    secondary: [
      {
        title: 'Subscribe',
        icon: 'i-mdi-home',
        to: '/subscribe',
      },
    ],
  },
}
