<template>
	<div :class="'text prose mx-auto p-8 '+blok.ClassNames" v-html="text"></div>
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
