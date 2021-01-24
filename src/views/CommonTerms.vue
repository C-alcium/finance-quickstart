<template>
    <div class="common-terms">
        <hero class="is-primary has-centered-text"
              title="Common Terms"
              subtitle="Finance comes with a lot of jargon, here you can find some of the most common terms clearly defined"
              />
        <div class="block"/>
        <markdown-container :markdown="content"/>
    </div>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue'
import MarkdownContainer from '@/components/MarkdownContainer.vue'
import { defineComponent } from 'vue'
import Terms from '@/assets/content/en/terms.md'

export default defineComponent({
  components: { Hero, MarkdownContainer },
    name: 'CommonTerms',
    data() {
        return {
            content: Terms
        }
    }
})
</script>

<style scoped>

</style>