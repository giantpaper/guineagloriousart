<template>
	<div v-editable="blok" class="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 py-8 mb-6 gap-16 gallery">
		<Thumbnail v-for="story in data.stories" :attr="story" />
	</div>
</template>

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
</script><style lang="scss" scoped>	.gallery {		position: relative;		.modal {			position: fixed;				top: 0;				left: 0;				right: 0;				bottom: 0;			background: white;			z-index: 900;			header {				position: static;				.title {					margin: 0;				}				.close {					display: flex;					flex-direction: column;					justify-content: center;					align-items: center;					gap: 0.25rem;					padding: 0.5rem;					z-index: 10;					position: relative;					aspect-ratio: 1/1;				}				.close {					position: absolute;					top: 1rem;					right: 1rem;					&:before,					&:after {						background: currentcolor;						width: 1rem;						height: 2px;						display: block;						content: '';						will-change: transform;						transition: transform 0.2s;					}					&:before {						transform: rotate(-45deg) translateY(0.25rem);					}					&:after {						transform: rotate(45deg) translateY(-0.25rem);					}				}			}		}	}</style>