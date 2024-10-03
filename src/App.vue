<script setup>
    import { RouterView, useRoute } from 'vue-router';
    import { computed } from 'vue';
    import NavBar from './components/NavBar.vue';

    const route = useRoute();

    const isHomePage = computed(
        () => {
          return  route.path === '/'
        }
    );
</script>

<template>
    <NavBar v-if="!isHomePage"/> <!--The Navbar won't be shown on the homepage-->
    <RouterView />
</template>

<style scoped>
    
</style>