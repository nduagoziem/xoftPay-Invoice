<script setup>
    import ExpensesViewNav from '@/components/ExpensesViewNav.vue';
    import ExpensesListings from '@/components/ExpensesListings.vue';
    import { ref } from 'vue';

    const searchQuery = ref("");
</script>

<template>
    <ExpensesViewNav @search="searchQuery = $event"/>
    <ExpensesListings :searchQuery="searchQuery"/>
</template>

<style scoped>

</style>