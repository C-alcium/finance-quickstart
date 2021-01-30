<template>
    <div class="flag-grid">
        <div class="columns" v-for="item in countryCodesChunked" :key="item.code">
            <flag-button v-for="index in 3" 
                         :key="index" 
                         :countryISO="item[index - 1]" 
                         :disabled="hasMarkdown(item[index - 1])"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { chunk } from 'lodash'
import { CountryCodes } from '@/data/CountryCodes'
import CountryISO from '@/types/CountryISO'
import FlagButton from './FlagButton.vue'

export default defineComponent({
    components: { FlagButton },
    name:'FlagGrid',
    setup() {
        return {
            countryCodesChunked: chunk(CountryCodes, 3)
        }
    },
    methods: {
        onFlagClick(item: CountryISO) {
            this.$emit('flagClick', item)
        },
        hasMarkdown(country: CountryISO): boolean {
            return this.$store.getters.hasFaq(country.countryName)
        }
    }
})
</script>

<style scoped>
.flag-grid {
    padding-top: 20px;
}
.columns {
    padding-top: 30px;
}
</style>