<template>
  <markdown-container :markdown="content"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownContainer from '@/components/MarkdownContainer.vue';
import HomeContent from '@/assets/content/en/home.md';

export default defineComponent({
  components: { MarkdownContainer },
  name: 'Home',
  data() {
    return {
      content: HomeContent
    }
  }
});
</script>
