<template>
    <div class="content" v-html="content"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default defineComponent({
    name: 'MarkdownContainer',
    props: {
        markdown: {
            type: String,
            required: true,
        } 
    },
    computed: {
        content(): string {
            return md.render(this.markdown)
        }
    }
})
</script>