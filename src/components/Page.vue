<template>
	<section v-editable="blok" class="page py-4 blok flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
		<StoryblokComponent
			v-for="blok in blok.body"
			:blok="blok"
			:key="blok._uid"
		/>
	</section>
</template>

<script setup>
defineProps({
	blok: {
		type: Object,
		required: true,
	}
});
</script>
