<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'draft' });
document.body.setAttribute('data-slug', 'home')
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
