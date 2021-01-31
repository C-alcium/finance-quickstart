<template>
    <hero class="is-primary has-text-centered"
          title="Per country FAQ"
    />
    <under-construction-notice />
    <p class="has-text-centered"> 
        Below is a list of exclusively EU countries. 
    </p>
    <p class="has-text-centered"> 
        <b>Select</b> your country to view the FAQ for it.
    </p>
    <flag-grid v-on:flagClick="onFlagClick"/>
    <markdown-container :markdown="markdown"/>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue'
import FlagGrid from '@/components/FlagGrid.vue'
import CountryISO from '@/types/CountryISO'
import { defineComponent } from 'vue'
import MarkdownContainer from '@/components/MarkdownContainer.vue'
import UnderConstructionNotice from '@/components/UnderConstructionNotice.vue'

export default defineComponent({
    components: { Hero, FlagGrid, MarkdownContainer, UnderConstructionNotice },
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
        onFlagClick(country: CountryISO) {
            const res = this.$store.getters.getCountryFaq(country.countryName)

            if(res) {
                this.markdown = res
            } else {
                this.markdown = `# An FAQ for ${country.countryName} is not available yet`
            }
        }
    },
})
</script>

<style>

</style>