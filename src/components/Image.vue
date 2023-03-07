<template>
	<picture>
		<source :data-srcset="dataSrcSetWebp" v-if="dataSrcSetWebp!=''" type="image/webp" />
		<img :src="src" :alt="alt" :class="class"
			:data-srcset="dataSrcSet"
		/>
	</picture>
</template>

<script setup>
	defineProps({
		src: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: false,
		},
		alt: {
			type: String,
			required: true,
		},
		srcSet: {
			type: String,
			required: false,
		},
		dataSrcSet: {
			type: String,
			required: false,
		},
		dataSrcSetWebp: {
			type: String,
			required: false,
		},
	})
	setTimeout(() => {
		document.querySelectorAll('img[data-src],source[data-src]').forEach(img => {
			let src = img.dataset.src
			img.src = src
		})
		document.querySelectorAll('img[data-srcset],source[data-srcset]').forEach(img => {
			let srcset = img.dataset.srcset
			img.srcset = srcset
		})
	})
</script>