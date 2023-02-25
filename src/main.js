import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import App from './App.vue'
import router from './router'

// Components
import Body from './components/Body.vue'
import FeatImage from './components/FeatImage.vue'
import Gallery from './components/Gallery.vue'
import GalleryImage from './components/GalleryImage.vue'
import General from './components/General.vue'
import Heading from './components/Heading.vue'
import Image from './components/Image.vue'
import Page from './components/Page.vue'
import Body from './components/Body.vue'
import Seo from './components/SEO.vue'
import Spacer from './components/Spacer.vue'
import Thumbnail from './components/Thumbnail.vue'

import './assets/icons/storyblok_logo.png'
import './assets/icons/vue_logo.png'

import './assets/main.scss'

const app = createApp(App)
app.use(StoryblokVue, {
	accessToken: import.meta.env.VITE_PREVIEW_TOKEN,
	use: [apiPlugin],
})

app.use(router)
app.component('Body', Body)
app.component('FeatImage', FeatImage)
app.component('Gallery', Gallery)
app.component('GalleryImage', GalleryImage)
app.component('General', General)
app.component('Heading', Heading)
app.component('Image', Image)
app.component('Page', Page)
app.component('Body', Body)
app.component('SEO', Seo)
app.component('Spacer', Spacer)
app.component('Thumbnail', Thumbnail)

app.mount('#app')
window.getPageSlug = getPageSlug// setBodySlug()setTimeout(() => {		// document.querySelector('a[href]').addEventListener('click', e => {	// 	console.log(e.target.tagName, document.querySelector('a[href]').tagName)	// 	if(e.target.href !== '#') {	// 		console.log('clicked!', e.target)	// 		setBodySlug()	// 	}	// })		if (document.querySelector('a[href="#"]') !== null) {		document.querySelector('a[href="#"]').addEventListener('click', function (e) {			e.preventDefault()		})	}	})const getPageSlug = (name) => {
	let url = name ?? window.location.href
	let s = url.match(/https?:\/\/[^\/]+\/(.+)\/?/)
	return s !== null ? s[1] : 'home'
}

// const setBodySlug = (name) => {
// 	document.querySelector('body').setAttribute('data-slug', getPageSlug(name))
// }
window.getPageSlug = getPageSlug// setBodySlug()setTimeout(() => {		// document.querySelector('a[href]').addEventListener('click', e => {	// 	console.log(e.target.tagName, document.querySelector('a[href]').tagName)	// 	if(e.target.href !== '#') {	// 		console.log('clicked!', e.target)	// 		setBodySlug()	// 	}	// })		if (document.querySelector('a[href="#"]') !== null) {		document.querySelector('a[href="#"]').addEventListener('click', function (e) {			e.preventDefault()		})	}	})