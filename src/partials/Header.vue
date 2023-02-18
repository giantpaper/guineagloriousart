<script setup>
	import { RouterLink } from 'vue-router'
	import Github from '../assets/icons/Github.vue'
	import Logo from '../assets/icons/Logo.vue'
</script>
<template>
	<header class="md:pt-12">
		<Logo id="logo" fill="currentcolor" />
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>
</template>
<style lang="scss" scoped>
	header {
		display: flex;
		padding-right: 0;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: flex-end;
		&:after {
			background: var(--color-text);
			width: 100%;
			height: 5px;
			content: '';
			display: block;
			margin-top: 1rem;
		}
		a {
			display: inline-flex;
			align-items: center;
			gap: 0.25rem;
			color: currentcolor;
			text-transform: uppercase;
			font-weight: bold;
			padding-bottom: 3px;
			position: relative;
			&:after {
				background: currentcolor;
				content: '';
				display: block;
				width: 0;
				height: 3px;
				position: absolute;
				bottom: 0;
				left: 0;
				transition: width 0.1s;
			}
			&:hover {
				background: none;
				&:after {
					width: 100%;
				}
			}
		}
	}
</style>