<template>
	<header class="pt-8">
		<p class="subtitle text-center h4">Gallery</p>
		<h1>{{ blok.Title }}</h1>
	</header>
	
	<figure class="pb-8">
		<IMG :src="blok.Image.filename + '/m/1000x0/'" class="mx-auto" :alt="blok.Image.alt" />
	</figure>
	
	<div class="info table mx-auto mb-16 p-8">
		<div class="text prose mx-auto mb-8" v-if="description!=='<p></p>'" v-html="description"></div>
		
		<table v-if="blok.Specs.tbody" class="specs w-full display">
			<tr v-for="row in blok.Specs.tbody" class="grid grid-cols-2">
				<th>{{ row.body[0].value }}</th>
				<td>{{ row.body[1].value }}</td>
			</tr>
		</table>
	</div>
</template>
<style lang="scss" scoped>
	.specs {
		border-collapse: collapse;
		@media (min-width: 768px) {
			width: 300px;
		}
		@media (min-width: 1024px) {
			width: 450px;
		}
		td,th {
			padding: 0.25rem 0.5rem;
		}
		th {
			text-align: right;
			font-weight: bold;
		}
	}
	.info {
		position: relative;
		& > * {
			position: relative;
			z-index: 1;
		}
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 0;
		}
		&:before {
			box-shadow: 0 0.5rem 1rem transparentize(black, 0.9);
			transform: scaleX(96%);
		}
		&:after {
			background: #fff;
		}
	}
</style>
<script setup>
	import IMG from './Image.vue';
	
	import { computed } from "vue"
	import { renderRichText } from "@storyblok/vue"
	
	let props = defineProps({
		blok: {
			type: Object,
			required: true,
		},
	})
	
	const description = computed(() => renderRichText(props.blok.Description))
	
	window.htagClasses()
</script>