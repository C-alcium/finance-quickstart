<template>
  <div class="under-construction-notice columns is-mobile is-centered">
    <div class="column is-half has-text-centered">
      <feather-icon :icon="icon"/>
        {{ message }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FeatherIcon from './FeatherIcon.vue'

export default defineComponent({
    components: { FeatherIcon },
    name: 'UnderConstructionNotice',
    props: {
      message: {
        type: String,
        default: 'This section is currently under construction',
        required: false
      },
      icon: {
        type: String,
        required: false,
        default: 'alert-triangle'
      }
    }
})
</script>

<style>

</style>