<template>
    <hero class="is-primary has-text-centered"
          title="Per country FAQ"
          subtitle="Click on your country to see a list of common FAQ questions"
          />
    <div class="faq">
        <flag-grid/>
    </div>
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