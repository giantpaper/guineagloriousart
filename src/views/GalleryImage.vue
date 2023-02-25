<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok(window.getPageSlug(), { version: 'draft' });
document.body.setAttribute('data-slug', 'gallery-image')
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
