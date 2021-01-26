<template>
  <div class="under-construction-notice has-centered-text">
    <feather-icon icon="box"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FeatherIcon from './FeatherIcon.vue'

export default defineComponent({
    components: { FeatherIcon },
    name: 'UnderConstructionNotice',
})
</script>

<style>

</style>