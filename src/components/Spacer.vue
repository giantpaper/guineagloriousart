<template>
	<div class="spacer" :style="'height:' + blok.Height + 'px;'"></div>
</template>
<script setup>
	defineProps({
		blok: {
			type: Object,
			required: true,
		}
	})
</script>