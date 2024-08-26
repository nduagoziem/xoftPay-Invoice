<script setup>
    import CustomersViewNav from '@/components/CustomersViewNav.vue';
    import CustomersListings from '@/components/CustomersListings.vue';
    import { ref } from 'vue';

    const searchQuery = ref('');
</script>

<template>
    <CustomersViewNav  @search="searchQuery = $event"/>
    <CustomersListings :searchQuery="searchQuery"/>
</template>

<style scoped>

</style>