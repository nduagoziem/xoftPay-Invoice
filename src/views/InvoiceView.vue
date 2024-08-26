<script setup>
    import InvoiceViewNav from '@/components/InvoiceViewNav.vue';
    import InvoiceListings from '@/components/InvoiceListings.vue';
    import { ref } from 'vue';

    const searchQuery = ref("");
</script>

<template>
    <InvoiceViewNav @search="searchQuery = $event"/>
    <InvoiceListings :searchQuery="searchQuery"/>
</template>

<style scoped>

</style>