import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import VueGtag from 'vue-gtag';

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en, es },
  escapeParameterHtml: true
})

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueGtag, {
  config: {id: "G-7Q98LJ79GN"}
}, router)

app.mount('#app')
