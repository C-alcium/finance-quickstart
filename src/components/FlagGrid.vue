<template>
    <div class="flag-grid">
        <div class="columns is-multiline is-centered is-mobile">
            <flag-button v-for="country in countries" :key="country.code"
                         class="column is-1"
                         :countryISO="country" 
                         :disabled="hasMarkdown(country)"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CountryCodes } from '@/data/CountryCodes'
import CountryISO from '@/types/CountryISO'
import FlagButton from './FlagButton.vue'

export default defineComponent({
    components: { FlagButton },
    name:'FlagGrid',
    setup() {
        return {
            countries: CountryCodes
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