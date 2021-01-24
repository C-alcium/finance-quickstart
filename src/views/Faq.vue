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
    <markdown-container :markdown="markdown"/>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import FlagGrid from "@/components/FlagGrid.vue";
import CountryISO from '@/types/CountryISO';
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
    computed: {
        markdown: {
            get(): string {
                return this.content
            },
            set(a: string) {
                this.content = a
            }
        }
    },
    methods: {
        onFlagClick(e: CountryISO) {
            const res = this.$store.getters.getCountryFaq(e.countryName)

            if(res) {
                this.markdown = res
            } else {
                this.markdown = 'An FAQ for this country is not yet available'
            }
        }
    },
})
</script>

<style>

</style>