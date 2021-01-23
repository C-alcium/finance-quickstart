<template>
  <div class="content" v-html="content"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownIt from 'markdown-it';
import HomeContent from '@/assets/content/en/home.md';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      content: new MarkdownIt().render(HomeContent)
    }
  },
});
</script>
