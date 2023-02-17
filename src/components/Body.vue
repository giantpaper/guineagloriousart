<template>
	<div v-editable="blok" class="flex py-8 mb-6">
		<StoryblokComponent :blok="blok" />
	</div>BODY
</template>

<script setup>
	defineProps({
		blok: {
			type: String,
			required: true,
		},
	})
</script>
