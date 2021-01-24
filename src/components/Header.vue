<template>
    <nav class="header navbar">
        <div class="navbar-start"> 
            <router-link class="navbar-item" v-for="route in routes" :key="route.path" :to="route.path">
                {{ route.name }}
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

declare interface Route {
    name: string;
    path: string;
}

export default defineComponent({
    name:'Header',
    data() {
        return {
            routes: new Array<Route>()
        }
    },
    created() {
        this.$router.options.routes.forEach(route => {
            this.routes.push({
                name: route.name as string,
                path: route.path as string
            })
        })
    }
})
</script>

<style>
    
</style>