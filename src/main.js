import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import App from './App.vue'
import router from './router'

// Components
import General from './components/General.vue'
import Heading from './components/Heading.vue'
import Page from './components/Page.vue'
import Body from './components/Body.vue'

import './assets/icons/storyblok_logo.png'
import './assets/icons/vue_logo.png'

import './assets/main.scss'

const app = createApp(App)
app.use(StoryblokVue, {
	accessToken: import.meta.env.VITE_PREVIEW_TOKEN,
	use: [apiPlugin],
})

app.use(router)
app.component('General', General)
app.component('Heading', Heading)
app.component('Page', Page)
app.component('Body', Body)

app.mount('#app')
