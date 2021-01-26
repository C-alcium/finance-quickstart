<template>
    <div v-html="svgContent"/>
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
        }
    },
    setup(props) {
        const svgContent = ref(icons[props.icon].toSvg())

        return {
            svgContent
        }
    }
}) 
</script>

<style>

</style>