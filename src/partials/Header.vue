<script setup>
	import Github from '../assets/icons/Github.vue'
	import Logo from '../assets/icons/Logo.vue'
</script>
<template>
	<header class="md:pt-12">
		<Logo id="logo" fill="currentcolor" />
		<a href="https://github.com/giantpaper/wantlist" class="mt-3" target="_blank" rel="noopener">
			<Github class="fa" /><span class="hidden md:block"> View on Github</span>
		</a>
	</header>
</template>
<style lang="scss" scoped>
	header {
		display: flex;
		padding-right: 0;
		justify-content: space-between;
		flex-wrap: wrap;
		&:after {
			background: var(--color-text);
			width: 100%;
			height: 5px;
			content: '';
			display: block;
			margin-top: 1rem;
		}
	}
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>