<template>
  <div class="under-construction-notice has-centered-text">
    <div class="block">
      <feather-icon icon="alert-triangle"/>
      <span> This site is currently under construction, as such this section is not complete.</span>
    </div>
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