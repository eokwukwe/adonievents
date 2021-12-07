import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'

import '../css/app.css'

createInertiaApp({
  title: (title) => `${title} - Adoinertia`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      // .mixin({ methods: { route } })
      .component('Head', Head)
      .component('Link', Link)
      .mount(el)
  },
})

InertiaProgress.init({ color: '#2663eb', showSpinner: true })
