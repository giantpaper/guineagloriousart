<template>
	<RouterLink :to="props.attr.full_slug" class="thumbnail"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" :data-src="attr.Image.filename + '/m/50x50/filters:focal(' +attr.Image.focus+ '):quality(10)'"
			style="filter: blur(10px)"
			:alt="attr.Image.alt"
			:title="attr.Image.Title"
			:data-srcset="
					attr.Image.filename + '/m/100x100/filters:focal(' +attr.Image.focus+ ') 100w,'
				+ attr.Image.filename + '/m/200x200/filters:focal(' +attr.Image.focus+ ') 200w,'
				+ attr.Image.filename + '/m/350x350/filters:focal(' +attr.Image.focus+ ') 350w,'
				+ attr.Image.filename + '/m/600x600/filters:focal(' +attr.Image.focus+ ') 600w'"
			width="100" height="100"
			:data-url="attr.Image.filename + '/m/1000x0/'"
		/>
	<span class="description hidden" v-html="description"></span></RouterLink>
</template>

<script setup>
	import { RouterLink } from 'vue-router'
	const props = defineProps({
		attr: {
			type: Object,
			required: true,
		},
	})
	let attr = props.attr.content
	
	import { computed } from "vue";
	import { renderRichText } from "@storyblok/vue";
	
	const description = computed(() => renderRichText(props.attr.Description));
	
	
	setTimeout(() => {
		
		document.querySelectorAll('img[data-src]').forEach(img => {
			let src = img.dataset.src
			img.src = src
		})
		document.querySelectorAll('img[data-srcset]').forEach(img => {
			let srcset = img.dataset.srcset
			img.srcset = srcset
		})
	})
</script>

<style lang="scss" scoped>
	a {
		display: block;
		padding: 0;
		position: relative;
		aspect-ratio: 1/1;
		&:after {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			filter: saturate(50%);
			background: var(--vt-c-green);
			opacity: 0;
			content: '';
			transition: opacity 0.05s;
		}
		img {
			width: 100%;
			filter: blur(0) !important;
		}
		&:hover {
			&:after {
				opacity: 0.9;
			}
		}
	}
</style>