<template>
    <div class="flag-grid">
        <div class="columns" v-for="item in countryCodesChunked" :key="item.code">
            <button @click="onFlagClick(item[0])" :class="`column button is-third flag-icon flag-icon-${item[0].code}`">
                {{ item[0].countryName }}
            </button>
            <button @click="onFlagClick(item[1])" :class="`column button is-third flag-icon flag-icon-${item[1].code}`">
                <span> {{ item[1].countryName }}</span>
            </button>
            <button @click="onFlagClick(item[2])" :class="`column button is-third flag-icon flag-icon-${item[2].code}`">
                <span> {{ item[2].countryName }}</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { chunk } from 'lodash';
import FlagEvent from "@/types/FlagEvent";

export default defineComponent({
    name:'FlagGrid',
    methods: {
        onFlagClick(item: FlagEvent) {
            this.$emit('flagClick', item)
        }
    },
    data() {
        // define all of the EU country codes in just a normal fashion.
        // later, they will be diced up into thirds
        const countryCodes: Array<FlagEvent> = [
                {
                    countryName: 'Belgium',
                    code: 'be',
                },
                {
                    countryName: 'Bulgaria',
                    code: 'bg',
                },
                {
                    countryName: 'Czechia',
                    code: 'cz',
                },
                {
                    countryName: 'Denmark',
                    code: 'dk',
                },
                {
                    countryName: 'Germany',
                    code: 'de',
                },
                {
                    countryName: 'Estonia',
                    code: 'ee',
                },
                {
                    countryName: 'Ireland',
                    code: 'ie',
                },
                {
                    countryName: 'Greece',
                    code: 'gr',
                },
                {
                    countryName: 'Spain',
                    code: 'es',
                },
                {
                    countryName: 'France',
                    code: 'fr',
                },
                {
                    countryName: 'Croatia',
                    code: 'hr',
                },
                {
                    countryName: 'Italy',
                    code: 'it',
                },
                {
                    countryName: 'Cyprus',
                    code: 'cy',
                },
                {
                    countryName: 'Latvia',
                    code: 'lv',
                },
                {
                    countryName: 'Lithuania',
                    code: 'lt',
                },
                {
                    countryName: 'Luxembourg',
                    code: 'lu',
                },
                {
                    countryName: 'Hungary',
                    code: 'hu',
                },
                {
                    countryName: 'Malta',
                    code: 'mt',
                },
                {
                    countryName: 'Netherlands',
                    code: 'nl',
                },
                {
                    countryName: 'Austria',
                    code: 'at',
                },
                {
                    countryName: 'Poland',
                    code: 'pl',
                },
                {
                    countryName: 'Portugal',
                    code: 'pt',
                },
                {
                    countryName: 'Romania',
                    code: 'ro',
                },
                {
                    countryName: 'Slovenia',
                    code: 'sl',
                },
                {
                    countryName: 'Slovakia',
                    code: 'sk',
                },
                {
                    countryName: 'Finland',
                    code: 'fi',
                },
                {
                    countryName: 'Sweden',
                    code: 'se',
                },
            ]
        return {
            countryCodesChunked: chunk(countryCodes, 3)
        }
    }
})
</script>

<style scoped>
.button {
    padding: 0;
    border: none;
}
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