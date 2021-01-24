<template>
  <div class="container">
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
</style>
