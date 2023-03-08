<template>
	<header v-editable="blok" class="blok wide">
		<h1 v-if="blok.TagName==='h1'" v-html="blok.Text" v-cloak></h1>
		<h2 v-if="blok.TagName==='h2'" v-html="blok.Text" v-cloak></h2>
		<h3 v-if="blok.TagName==='h3'" v-html="blok.Text" v-cloak></h3>
		<h4 v-if="blok.TagName==='h4'" v-html="blok.Text" v-cloak></h4>
		<h5 v-if="blok.TagName==='h5'" v-html="blok.Text" v-cloak></h5>
		<h6 v-if="blok.TagName==='h6'" v-html="blok.Text" v-cloak></h6>
	</header>
</template>

<style lang="scss">
	.h1,.h2,.h3,.h4,.h5,.h6 {
		font-family: Poppins, sans-serif;
		font-weight: 500;
		text-align: center;
		margin-top: 1rem;
		.subtitle {
			display: block;
			font-size: 0.75em;
			text-transform: uppercase;
		}
	}
	.h1 {
		font: bold 3rem 'playfair-display', serif;
		&:after {
			background: currentcolor;
			content: '';
			display: block;
			width: 40px;
			height: 1px;
			margin: 2rem auto;
		}
		@at-root body[data-slug="home"] {
			main header:first-of-type {
				.h1 {
					font-weight: bold;
					font-size: 1.5rem;
					margin-top: 0;
					letter-spacing: 0.1rem;
					text-transform: uppercase;
					&:after {
						display: none;
					}
				}
			}
		}
		@at-root body[data-slug="gallery-image"] {
			.h1 {
				font-size: 3.4rem;
				font-family: 'lindsey-signature', cursive;
			}
		}
	}
	.h2 {
		font-size: 1.2rem;
		letter-spacing: 0.125rem;
	}
	.h3 {
		font-size: 1.5rem;
	}
</style>

<script setup>
const props = defineProps({
	blok: {
		type: String,
		required: true,
	},
})

props.blok.Text = props.blok.Text.replace(/\*([^\*]+)\*/, '<span class="subtitle">$1</span>')

window.htagClasses()
</script>