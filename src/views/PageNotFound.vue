<template>
    <div class="not-found columns">
        <div class="column has-text-centered">
            <feather-icon icon="help-circle" color="blue"/>
            <div>
                Hmm... That page was not found, perhaps return home?
            </div>
        </div>
    </div>
</template>

<script>
import FeatherIcon from '@/components/FeatherIcon.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageNotFound',
    components: { FeatherIcon }
})
</script>

<style>

</style>