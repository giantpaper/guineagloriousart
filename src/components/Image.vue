<template>
	<ul>
		<li v-for="image in blok.Images">
			<img :src="image.filename + '/m/440x0/'" :alt="image.alt" :class="imgOrientation + ' mx-auto'"
				:srcset="image.filename + '/m/880x0/ 2x'"
			/></li>
	</ul>
</template>

<script setup>
	defineProps({
		blok: {
			type: Array,
			required: true,
		}
	})
</script>