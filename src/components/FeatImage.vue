<template>
	<carousel class="carousel_container blok !p-0"
	v-editable="blok"
	:autoplay="4000"
	:items-to-show="1"
	:wrap-around="true"
	id="feat_image"
	>
		<slide v-for="story in data.stories"
			data-te-carousel-item
			><div class="inner">
			<Image
				:src="story.content.Image.filename + '/m/400x300/filters:format(png)'"
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
	// let filtersListWebp = window.filters({
	// 	quality: 70,
	// 	format: 'webp'
	// })

	window.htagClasses()
</script>

<style lang="scss">
	
	.carousel {
		--vc-pgn-width: 0.5rem;
		--vc-pgn-height: var(--vc-pgn-width);
		--vc-pgn-border-radius: var(--vc-pgn-width);
		--vc-pgn-background-color: var(--vt-c-white);
		--vc-pgn-active-color: var(--color-text);
		--vc-pgn-margin: 2px;
		--vc-nav-color-hover: currentcolor;
		margin: 0;
		&__prev,
		&__next {
			cursor: pointer;
			transition: all 0.3s;
			@media (max-width: 1023px) {
				top: unset;
				bottom: 0;
				height: calc(3rem + 4rem);
			}
			&:hover {
				border-radius: 100px;
				backdrop-filter: blur(10px);
				background: transparentize(white, 0.75);
				box-shadow: 0 0 1rem transparentize(black, 0.75);
			}
		}
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
			padding: 1rem 1rem 0;
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
		&__pagination {
			margin: 2rem 0;
			gap: var(--vc-pgn-margin);
			@media (min-width: 1024px) {
				flex-direction: column;
				position: absolute;
				justify-content: center;
				align-items: center;
				bottom: 0;
				left: 2rem;
			}
			&-button {
				border-radius: 100px;
				border: 1px transparent solid;
				transition: border-color 0.3s;
				&:after {
					box-shadow: 0 0 1.5rem transparentize(black, 0.5);
				}
				&--active {
					border-color: var(--vc-pgn-active-color);
				}
			}
		}
	}
</style>