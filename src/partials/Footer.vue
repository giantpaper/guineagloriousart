<script setup>
	const date = new Date()
</script>

<template>
	<footer class="pb-8 text-center">
		<div class="md:flex md:justify-between">
			<div class="md:text-left">Made by me!</div>
			<div class="md:text-right flex items-center gap-3 made_with_love">
				<span class="label">Made with love using</span>
				<ul class="flex links gap-3">
					<li class="storyblok"><a href="https://www.storyblok.com/" target="_blank" rel="noopener">Storyblok</a></li>
					<li class="vue"><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue</a></li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	footer {
		font-size: 0.8em;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 0.1rem;
		* {
			font-weight: inherit;
		}
	}
	.links {
		li {
			position: relative;
			&:before {
				border-radius: 1000px;
				content: '';
				background: #ddd;
				display: block;
				aspect-ratio: 1/1;
				width: 2.25rem;
			}
			a {
				&:before {
					display: block;
					width: 100%;
					aspect-ratio: 1/1;
					content: '';
					background: no-repeat center / 50%;
				}
				border-radius: 1000px;
				position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				aspect-ratio: inherit;
				display: block;
				overflow: hidden;
			}
			&.storyblok a:before {
				background-image: url('../assets/icons/storyblok_logo.png');
			}
			&.vue a:before {
				background-image: url('../assets/icons/vue_logo.png');
			}
		}
	}
	.label {
		&:after {
			content: '\2192';
			display: inline-block;
			padding-left: 0.25rem;
		}
	}
	.made_with_love {
		&:hover {
			.label {
				&:after {
					animation: 0.35s infinite alternate bounce;
					animation-timing-function: linear;
				}
			}
		}
	}
	@keyframes bounce {
		to {
			transform: translateX(0.2rem);
		}
		from {
			transform: translateX(0);
		}
	}
</style>