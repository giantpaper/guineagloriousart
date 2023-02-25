<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('gallery/home', { version: 'draft' });
document.body.setAttribute('data-slug', 'gallery')
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
