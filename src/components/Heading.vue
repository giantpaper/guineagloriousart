<template>
	<header class="blok wide">
		<h1 v-if="blok.TagName==='h1'">{{ blok.Text }}</h1>
		<h2 v-if="blok.TagName==='h2'">{{ blok.Text }}</h2>
		<h3 v-if="blok.TagName==='h3'">{{ blok.Text }}</h3>
		<h4 v-if="blok.TagName==='h4'">{{ blok.Text }}</h4>
		<h5 v-if="blok.TagName==='h5'">{{ blok.Text }}</h5>
		<h6 v-if="blok.TagName==='h6'">{{ blok.Text }}</h6>
	</header>
</template>

<script setup>
defineProps({
	blok: {
		type: String,
		required: true,
	},
})
</script>