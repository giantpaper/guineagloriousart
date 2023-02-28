<template>
	<img :src="src" :alt="alt" :class="class"
		:data-srcset="dataSrcSet"
	/>
</template>

<script setup>
	defineProps({
		src: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		srcSet: {
			type: String,
			required: true,
		},
		dataSrcSet: {
			type: String,
			required: true,
		},
	})
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