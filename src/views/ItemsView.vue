<script setup>
    import ItemsViewNav from '@/components/ItemsViewNav.vue';
    import ItemListings from '@/components/ItemListings.vue';
    import { ref } from 'vue';

    const searchQuery = ref('');
</script>

<template>
    <ItemsViewNav @search="searchQuery = $event"/>
    <ItemListings :searchQuery="searchQuery"/>
</template>

<style scoped>

</style>