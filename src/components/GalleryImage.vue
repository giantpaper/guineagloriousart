<template>
	<header class="pt-8">
		<p class="subtitle text-center h4">Gallery</p>
		<h1>{{ blok.Title }}</h1>
	</header>
	
	<figure class="pb-8">
		<img :src="blok.Image.filename + '/m/1000x0/'" class="mx-auto" :alt="blok.Image.alt" />
	</figure>
	
	<div class="text prose mx-auto" v-if="description!==''" v-html="description"></div>
	
	<table v-if="blok.Specs.tbody" class="mt-8 specs w-full display mb-12">
		<tr v-for="row in blok.Specs.tbody" class="grid grid-cols-2">
			<th>{{ row.body[0].value }}</th>
			<td>{{ row.body[1].value }}</td>
		</tr>
	</table>
</template>
<style lang="scss" scoped>
	.specs {
		border-collapse: collapse;
		td,th {
			padding: 0.25rem 0.5rem;
		}
		th {
			text-align: right;
			font-weight: bold;
		}
	}
</style>
<script setup>
	let props = defineProps({
		blok: {
			type: Object,
			required: true,
		},
	})
	
	import { computed } from "vue"
	import { renderRichText } from "@storyblok/vue"
	
	const description = computed(() => renderRichText(props.blok.Description))
	
	window.htagClasses()
</script>