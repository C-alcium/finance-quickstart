<template>
    <div class="flag-grid">
        <div class="columns" v-for="item in countryCodesChunked" :key="item.code">
            <div @click="onFlagClick(item[0])" :class="`column is-third flag-icon flag-icon-${item[0].code}`">
                <span> {{ item[0].name }}</span>
            </div>
            <div @click="onFlagClick(item[1])" :class="`column is-third flag-icon flag-icon-${item[1].code}`">
                <span> {{ item[1].name }}</span>
            </div>
            <div @click="onFlagClick(item[2])" :class="`column is-third flag-icon flag-icon-${item[2].code}`">
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
    methods: {
        onFlagClick(item: any) {
            // propagate flag click up the stack
            const event = {
                name: item.name as string,
                code: item.code as string
            }
            this.$emit('flagClick', event)
        }
    },
    data() {
        // define all of the EU country codes in just a normal fashion.
        // later, they will be diced up into thirds
        const countryCodes = [
                {
                    name: 'Belgium',
                    code: 'be',
                },
                {
                    name: 'Bulgaria',
                    code: 'bg',
                },
                {
                    name: 'Czechia',
                    code: 'cz',
                },
                {
                    name: 'Denmark',
                    code: 'dk',
                },
                {
                    name: 'Germany',
                    code: 'de',
                },
                {
                    name: 'Estonia',
                    code: 'ee',
                },
                {
                    name: 'Ireland',
                    code: 'ie',
                },
                {
                    name: 'Greece',
                    code: 'gr',
                },
                {
                    name: 'Spain',
                    code: 'es',
                },
                {
                    name: 'France',
                    code: 'fr',
                },
                {
                    name: 'Croatia',
                    code: 'hr',
                },
                {
                    name: 'Italy',
                    code: 'it',
                },
                {
                    name: 'Cyprus',
                    code: 'cy',
                },
                {
                    name: 'Latvia',
                    code: 'lv',
                },
                {
                    name: 'Lithuania',
                    code: 'lt',
                },
                {
                    name: 'Luxembourg',
                    code: 'lu',
                },
                {
                    name: 'Hungary',
                    code: 'hu',
                },
                {
                    name: 'Malta',
                    code: 'mt',
                },
                {
                    name: 'Netherlands',
                    code: 'nl',
                },
                {
                    name: 'Austria',
                    code: 'at',
                },
                {
                    name: 'Poland',
                    code: 'pl',
                },
                {
                    name: 'Portugal',
                    code: 'pt',
                },
                {
                    name: 'Romania',
                    code: 'ro',
                },
                {
                    name: 'Slovenia',
                    code: 'sl',
                },
                {
                    name: 'Slovakia',
                    code: 'sk',
                },
                {
                    name: 'Finland',
                    code: 'fi',
                },
                {
                    name: 'Sweden',
                    code: 'se',
                },
            ]
        return {
            countryCodesChunked: chunk(countryCodes, 3)
        }
    }
})
</script>

<style>
.flag-grid {
    padding-top: 20px;
}
.columns {
    padding-top: 30px;
}
.flag-icon {
    background-size: contain;
    background-repeat: no-repeat;
}
</style>