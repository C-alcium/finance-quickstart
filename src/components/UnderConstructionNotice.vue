<template>
  <div class="under-construction-notice columns is-mobile is-centered pt-5">
    <div class="column is-half has-text-centered">
      <!-- The color here (hsl) comes from Bulma default colors. 
           It would be ideal to change this to something that reads the value directly, 
           perhaps through a mixin.
      -->
      <feather-icon :icon="icon" color="hsl(348, 100%, 61%)"/>
        <div>
          {{ message }}
        </div>
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