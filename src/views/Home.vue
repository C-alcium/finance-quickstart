<template>
    <hero class="is-primary has-text-centered"
          title="Finance QuickStart"
          subtitle="A quick start guide to terms, services and differences for finance in the EU"
          />
    <div class="block"/>
    <under-construction-notice />
    <markdown-container :markdown="content"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MarkdownContainer from '@/components/MarkdownContainer.vue'
import HomeContent from '@/assets/content/en/home.md'
import Hero from '@/components/Hero.vue'
import UnderConstructionNotice from '@/components/UnderConstructionNotice.vue'

export default defineComponent({
  components: { MarkdownContainer, Hero, UnderConstructionNotice },
  name: 'Home',
  data() {
    return {
    content: HomeContent
    }
  }
})
</script>
