<script setup>
	import { RouterLink } from 'vue-router'
	import Github from '../assets/icons/Github.vue'
	import Logo from '../assets/icons/Logo.vue'
	
	setTimeout(() => {
		let btn = document.querySelector('button#mainnav_btn')
		
		btn.addEventListener('click', function () {
			if (!this.className.match(/clicked/)) {
				this.classList.add('clicked')
				document.querySelector('body').classList.add('menu_open')
			}
			else {
				this.classList.remove('clicked')
				document.querySelector('body').classList.remove('menu_open')
			}
			document.querySelectorAll('#mainnav a').forEach(a => {
				a.addEventListener('click', function(){
					document.querySelector('#mainnav_btn').click()
				})
			})
		})
	})
</script>
<template>
	<header class="flex justify-between lg:flex-end lg:block">
		<span class="block p-4 md:p-8"><RouterLink class="logo w-full max-w-full block" to="/"><Logo class="w-full max-w-full block" id="logo" fill="currentcolor" /></RouterLink></span>
		<button id="mainnav_btn" class="lg:!hidden mr-8"><i></i><span class="sr-only">Toggle Mobile Menu</span></button>
		<nav id="mainnav" class="hidden lg:block">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/gallery">Gallery</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>
</template>
<style lang="scss" scoped>
	#mainnav_btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem;
		z-index: 10;
		position: relative;
		z-index: 1000;
		aspect-ratio: 1/1;
		&:before,
		&:after {
			background: currentcolor;
			width: 1rem;
			height: 2px;
			display: block;
			content: '';
			will-change: transform;
			transition: transform 0.2s;
		}
		i {
			@apply sr-only;
		}
		&.clicked {
			&:before {
				transform: rotate(-45deg) translateY(0.25rem);
			}
			&:after {
				transform: rotate(45deg) translateY(-0.25rem);
			}
		}
	}
	header {
		background: #eee;
		line-height: 1.5;
		margin-left: auto;
		@media (min-width: 1024px) {
			max-width: 600px;
		}
		@media (min-width: 1280px) {
			display: grid;
			grid-template-columns: 66.6666% auto;
		}
		a {
			gap: 0.25rem;
			color: currentcolor;
			text-transform: uppercase;
			font-weight: bold;
			padding-bottom: 3px;
			&:hover {
				background: none;
				&:after {
					width: 100%;
				}
			}
		}
		.logo {
			max-width: 175px;
			transform: translateY(-15%);
			@media (min-width: 1024px) {
				max-width: 300px;
				transform: translateY(0);
				margin-left: auto;
			}
		}
	}
	#mainnav {
		background: rgb(228,228,228);
		padding: 8rem 2rem 2rem;
		text-align: right;
		width: 0;
		max-width: 400px;
		overflow: hidden;
		transition: width 0.3s;
		@media (min-width: 1024px) {
			overflow: auto;
			background: none;
			width: auto;
			margin-left: auto;
			padding-top: 4rem;
			padding-right: 3rem;
		}
		@media (min-width: 1280px) {
			padding: 2rem 5rem;
			text-align: left;
			background: rgb(228,228,228);
			min-height: 100%;
			padding: 2rem;
		}
		a {
			margin-bottom: 1rem;
			display: block;
			&.router-link-active {
				opacity: 0.5;
				&:after {
					content: '+';
					width: 1em;
					display: block;
					float: right;
					margin-right: -1em;
					margin-top: -0.0625rem;
					@media (min-width: 1280px) {
						float: left;
						margin-left: -1em;
						margin-right: 0;
					}
				}
			}
		}
		@at-root {
			body.menu_open & {
				@media (max-width: 1023px) {
					display: block;
					position: fixed;
					width: 90%;
					top: 0;
					bottom: 0;
					right: 0;
					z-index: 999;
				}
			}
		}
	}
</style>