<template>
    <div class="flag-grid">
        <div class="columns" v-for="item in countryCodesChunked" :key="item.code">
            <flag-button :countryISO="item[0]"/>
            <flag-button :countryISO="item[1]"/>
            <flag-button :countryISO="item[2]"/>
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
    methods: {
        onFlagClick(item: CountryISO) {
            this.$emit('flagClick', item)
        }
    },
    data() {
        // define all of the EU country codes in just a normal fashion.
        // later, they will be diced up into thirds
        return {
            countryCodesChunked: chunk(CountryCodes, 3)
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