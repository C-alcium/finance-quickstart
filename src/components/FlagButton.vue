<template>
    <div :class="`column is-third has-text-centered ${countryISO.countryName}`">
        <span 
            :class="`flag-icon flag-icon-${countryISO.code}`" 
            v-bind:style="{ cursor: pointer}"
            @click="onFlagClick()"/>
        <button class="button flag-button" @click="onFlagClick()" :disabled="disabled">
            {{ countryISO.countryName }}
        </button>
    </div>
</template>

<script lang="ts">
import CountryISO from '@/types/CountryISO'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'FlagButton',
    props: {
        countryISO: {
            required: true,
            type: Object as () => CountryISO
        },
        disabled: {
            required: false,
            default: false,
            type: Boolean
        }
    },
    setup(props) {
        const pointer = computed(() => props.disabled ? 'auto' : 'pointer')

        return {
            pointer
        }
    },
    methods: {
        onFlagClick() {
            if(this.disabled) {
                return
            }

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
}
</style>