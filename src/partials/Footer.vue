<script setup>
	const date = new Date()
</script>

<template>
	<footer class="pb-8 text-center">
		<div class="flex flex-col md:flex-row md:justify-between gap-4">
			<div class="md:text-left flex items-center justify-center md:justify-start gap-2">
				Made by me!
				|
				<ul class="flex socials icons gap-3">
					<li class="mastodon"><a href="https://mas.to/@giantpaper" title="Mastodon" target="_blank" rel="noopener me"><span>I'm on Mastodon!</span></a></li>
					<li class="github"><a href="https://github.com/giantpaper/guineagloriousart" title="Github" target="_blank" rel="noopener me"><span>View on Github!</span></a></li>
				</ul>
			</div>
			<div class="md:text-right flex items-center justify-center md:justify-end gap-3 made_with_love">
				<span class="label">Made with love using</span>
				<ul class="flex links icons gap-3">
					<li class="storyblok"><a href="https://www.storyblok.com/" title="Storyblok" target="_blank" rel="noopener"><span>Storyblok</span></a></li>
					<li class="vue"><a href="https://vuejs.org/" title="Vue" target="_blank" rel="noopener"><span>Vue</span></a></li>
					<li class="tailwind"><a href="https://tailwindcss.com/" title="Tailwind" target="_blank" rel="noopener"><span>Tailwind</span></a></li>
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
		padding: 0.5rem 2rem;
		letter-spacing: 0.1rem;
		* {
			font-weight: inherit;
		}
		&:before {
			background: var(--color-text);
			width: calc(100% + 4rem);
			height: 5px;
			content: '';
			display: block;
			margin: 0 -2rem;
			transform: translateY(-0.5rem);
		}
	}
	.icons {
		li {
			position: relative;
			background: #ddd;
			aspect-ratio: 1/1;
			border-radius: 1000px;
			height: 2.25rem;
			a {
				border-radius: 1000px;
				display: flex;
				padding: 0;
				&:before {
					display: block;
					width: 2.25rem;
					height: 2.25rem;
					aspect-ratio: 1/1;
					content: '';
					background: no-repeat center / 50%;
				}
				span {
					width: 0;
					height: 2.25rem;
					display: flex;
					align-items: center;
					white-space: nowrap;
					overflow: hidden;
					opacity: 0;
				}
			}
			&.storyblok a:before {
				background-image: url('../assets/icons/storyblok_logo.png');
			}
			&.vue a:before {
				background-image: url('../assets/icons/vue_logo.png');
			}
			&.mastodon a:before {
				background-image: url('../assets/icons/Mastodon_logo.svg');
			}
			&.github a:before {
				background-image: url('../assets/icons/Github_logo.png');
			}
			&.tailwind a:before {
				background-image: url('../assets/icons/Tailwind_logo.svg');
				background-size: 75%;
			}
		}
		&.socials {
			li {
				a {
					&:hover {
						color: #008273;
						span {
							animation: socialIcons 0.3s normal forwards;
						}
					}
					&:not(:hover) {
						span {
							animation: socialIconsOut 0.3s normal forwards;
						}
					}
				}
			}
		}
	}
	@keyframes socialIcons {
		0% {
			width: 0;
			opacity: 0;
			padding: 0;
		}
		50% {
			width: 19ch;
		}
		100% {
			opacity: 1;
			width: 19ch;
			padding-right: 1rem;
		}
	}
	@keyframes socialIconsOut {
		0% {
			opacity: 1;
			width: 19ch;
			padding-right: 1rem;
		}
		50% {
			width: 19ch;
		}
		100% {
			width: 0;
			opacity: 0;
			padding: 0;
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
