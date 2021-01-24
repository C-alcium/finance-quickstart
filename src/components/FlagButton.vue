<template>
    <div :class="`column is-third has-text-centered ${countryISO.countryName}`">
        <span :class="`flag-icon flag-icon-${countryISO.code}`" @click="onFlagClick()"/>
        <button class="button flag-button" @click="onFlagClick()">
            {{ countryISO.countryName }}
        </button>
    </div>
</template>

<script lang="ts">
import CountryISO from '@/types/CountryISO'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FlagButton',
    props: {
        countryISO: {
            required: true,
            type: Object as () => CountryISO
        }
    },
    methods: {
        onFlagClick() {
            this.$parent?.$emit('flagClick', this.countryISO)
        }
    }
})

</script>

<style scoped>
.button {
    padding: 0;
    border: none;
    width: 100%
}

.flag-icon {
    width: 64px;
    height: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>