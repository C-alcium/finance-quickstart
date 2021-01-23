<template>
    <div class="flag-grid">
        <div class="columns" v-for="item in countryCodesChunked" :key="item.code">
            <div :class="`column is-third flag-icon flag-icon-squared flag-icon-${item[0].code}`">
                <span> {{ item[0].name }}</span>
            </div>
            <div :class="`column is-third flag-icon flag-icon-squared flag-icon-${item[1].code}`">
                <span> {{ item[1].name }}</span>
            </div>
            <div :class="`column is-third flag-icon flag-icon-squared flag-icon-${item[2].code}`">
                <span> {{ item[2].name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { chunk } from 'lodash';

export default defineComponent({
    name:'FlagGrid',
    data() {
        // define all of the EU country codes in just a normal fashion.
        // later, they will be diced up into thirds
        const countryCodes = [
                {
                    name: 'Ireland',
                    code: 'ie',
                },
                {
                    name: 'Belgium',
                    code: 'be',
                },
                {
                    name: 'Germany',
                    code: 'de',
                }
            ]
        return {
            countryCodesChunked: chunk(countryCodes, 3)
        }
    }
})
</script>

<style>
.flag-grid {
    padding-top: 20px
}
.flag-icon {
    background-size: contain;
    background-repeat: no-repeat;
}
</style>