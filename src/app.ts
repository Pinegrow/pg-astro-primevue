import 'uno.css'

import type { App } from 'vue'
import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

export default (app: App) => {
  app.use(pinia)
  app.use(primeVuePlugin, primeVueConfig)
}
