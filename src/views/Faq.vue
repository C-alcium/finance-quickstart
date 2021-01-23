<template>
    <hero class="is-primary has-text-centered"
          title="Per country FAQ"
          />

    <p class="has-text-centered"> 
        Below is a list of exclusively EU countries. 
    </p>
    <p class="has-text-centered"> 
        <b>Click</b> or <b>tap</b> on your country to view the FAQ for it.
    </p>
    <flag-grid v-on:flagClick="onFlagClick"/>
    <markdown-container :markdown="content"/>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import FlagGrid from "@/components/FlagGrid.vue";
import { defineComponent } from "vue";
import MarkdownContainer from "@/components/MarkdownContainer.vue";

export default defineComponent({
    components: { Hero, FlagGrid, MarkdownContainer },
    name: 'Faq',
    data() {
        return {
            content: ''
        }
    },
    methods: {
        onFlagClick(e: any) {
            console.log(e)
        }
    }
})
</script>
,
    MarkdownContainer
<style>

</style>