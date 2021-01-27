<template>
    <div class="container" id="app" v-cloak>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import { CountryCodes } from './data/CountryCodes'

export default defineComponent({
    name: 'App',
    components: {
        Header
    },
    created() {
        CountryCodes
            .map(it => it.countryName)
            .map(it => it.toLowerCase())
            .forEach(country => {
        import(`@/assets/content/en/faq/${country}.md`)
            .then((it) => {
                this.$store.commit('addMarkdown', { countryName: country, markdown: it.default})
            })
            })
    }
})
</script>

<style>
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }
</style>
