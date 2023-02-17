<template>
	<div v-editable="blok" class="flex py-8 mb-6">
		<StoryblokComponent :blok="blok" />
	</div>
</template>

<script setup>
	defineProps({
		blok: {
			type: String,
			required: true,
		},
	})
</script>
