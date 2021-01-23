<template>
    <hero class="is-primary has-text-centered"
          title="Per country FAQ"
          />

    <p class="has-text-centered"> 
        Below is a list of exclusively EU countries. 
    </p>
    <p class="has-text-centered"> 
        <b>Click</b> or <b>tap</b> on your country to view the FAQ for it.
    </p>
    <flag-grid/>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import FlagGrid from "@/components/FlagGrid.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Hero, FlagGrid },
    name: 'Faq'
})
</script>

<style>

</style>