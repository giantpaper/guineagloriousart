<template>
	<div :class="'text prose mx-auto py-8 '+blok.ClassNames" v-html="text"></div>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			required: true,
		},
	})
	
	import { computed } from "vue";
	import { renderRichText } from "@storyblok/vue";
	
	const text = computed(() => renderRichText(props.blok.Text));
</script>
