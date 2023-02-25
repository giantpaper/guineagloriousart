<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('about', { version: 'draft' });

document.body.setAttribute('data-slug', 'about')
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
