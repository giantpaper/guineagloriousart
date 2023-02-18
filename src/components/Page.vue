<template>
	<section v-editable="blok" class="page py-8 blok">
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
})
</script>
