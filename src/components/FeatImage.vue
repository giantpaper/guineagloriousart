<template>
	<carousel class="carousel_container blok !p-0"
	v-editable="blok"
	:autoplay="4000"
	id="feat_image"
	:items-to-show="1"
	:wrap-around="true"
	>
		<slide v-for="story in data.stories"
			data-te-carousel-item
			><div class="inner">
			<IMG
				:src="story.content.Image.filename + '/m/400x300/filters:format(png)'"
				:dataSrcSetWebp="
						story.content.Image.filename + '/m/500x400/' + filtersListWebp + ' 500w,'
					+ story.content.Image.filename + '/m/768x400/' + filtersListWebp + ' 768w,'
					+ story.content.Image.filename + '/m/1024x500/' + filtersListWebp + ' 1024w,'
					+ story.content.Image.filename + '/m/1700x900/' + filtersListWebp + ' 1700w'"
				:dataSrcSet="
						story.content.Image.filename + '/m/500x400/' + filtersList + ' 500w,'
					+ story.content.Image.filename + '/m/768x400/' + filtersList + ' 768w,'
					+ story.content.Image.filename + '/m/1024x500/' + filtersList + ' 1024w,'
					+ story.content.Image.filename + '/m/1700x900/' + filtersList + ' 1700w'"
				:alt="story.content.Image.alt"
			/>
			<h2 class="h1 handwritten"><RouterLink :to="'/' + story.full_slug + '/'">{{ story.content.Title }}</RouterLink></h2>
		</div></slide>
		<template #addons>
			<Navigation />
			<Pagination />
		</template>
	</carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { RouterLink } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
	name: 'App',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
}
</script>

<script setup>
	import IMG from './Image.vue'
	import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";
	import Thumbnail from './Thumbnail.vue'
	const props = defineProps({
		blok: {
			type: Object,
			required: true,
		},
	})
	let uuids = props.blok.Images.join()
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get("cdn/stories", { version: "draft", by_uuids: uuids });
	let filtersList = window.filters({
		quality: 70,
	})
	let filtersListWebp = window.filters({
		quality: 70,
		format: 'webp'
	})
	
	window.htagClasses()
</script>

<style lang="scss">
	
	.carousel button.carousel {
		&__prev,
		&__next {
			cursor: pointer;
			@media (max-width: 1023px) {
				top: unset;
				bottom: 0;
				height: calc(3rem + 4rem);
			}
		}
	}
</style>

<style lang="scss" scoped>
	.carousel {
		margin: 0;
		h2 {
			margin: 0;
			@media (max-width: 1023px) {
				&:after {
					display: none;
				}
			}
			@media (min-width: 1024px) {
				backdrop-filter: blur(30px);
				background: transparentize(white, 0.7);
				margin: 0;
				color: var(--color-text);
				position: absolute;
					bottom: 1rem;
					right: 1rem;
				&:after {
					margin-top: 0;
				}
			}
		}
		a {
			color: currentcolor;
			display: block;
			padding: 2rem;
			img {
				display: block;
			}
			&:hover {
				background: none;
			}
		}
		&__slide {
			position: relative;
		}
	}
</style>