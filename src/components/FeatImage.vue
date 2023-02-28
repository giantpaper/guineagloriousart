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
			>
			<RouterLink :to="'/' + story.full_slug + '/'"><IMG
				:src="story.content.Image.filename + '/m/400x300/'"
				:dataSrcSet="
						story.content.Image.filename + '/m/400x300/ 400w,'
					+ story.content.Image.filename + '/m/500x400/ 500w,'
					+ story.content.Image.filename + '/m/768x400/ 768w,'
					+ story.content.Image.filename + '/m/1024x500/ 1024w,'
					+ story.content.Image.filename + '/m/1280x800/ 1280w,'
					+ story.content.Image.filename + '/m/1500x900/ 1500w,'
					+ story.content.Image.filename + '/m/1700x900/ 1700w'"
			:alt="story.content.Image.alt" />
				<h2 class="h1">{{ story.content.Title }}</h2>
			</RouterLink>
		</slide>
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
	
	window.htagClasses()
</script>

<style lang="scss" scoped>
	.carousel {
		margin: 0;
		&__slide {
			position: relative;
		}
		&__viewport {
			a {
				display: block;
				padding: 0;
				img {
					display: block;
				}
				&:hover {
					background: none;
				}
				h2 {
					backdrop-filter: blur(30px);
					padding: 2rem;
					margin: 0;
					color: var(--color-text);
					position: absolute;
						bottom: 1rem;
						right: 1rem;
					&:after {
						margin-top: 1rem;
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>