<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ title }}</h1>
                <h2 class="subtitle">{{ subtitle }}</h2>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Hero',
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        subtitle: {
            type: String,
            required: false,
            default: ''
        }
    },
})

</script>