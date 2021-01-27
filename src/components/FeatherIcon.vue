<template>
    <span v-html="svgContent"/>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { icons } from 'feather-icons'

export default defineComponent({
    name: 'FeatherIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'black',
            required: false
        }
    },
    setup(props) {
        const svgContent = ref(icons[props.icon].toSvg({ class: 'ico-props', color: props.color}))

        return {
            svgContent
        }
    }
}) 
</script>

<style>

</style>