import 'uno.css'
// import 'primevue/resources/primevue.min.css'
// import 'primeicons/primeicons.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css'

import type { App } from 'vue'
import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

export default (app: App) => {
  app.use(pinia)
  app.use(primeVuePlugin, primeVueConfig)
}
