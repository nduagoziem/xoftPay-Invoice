<script setup>
    import GreetingComponent from '@/components/GreetingComponent.vue';
    import TotalInvoicesReport from '@/components/TotalInvoicesReport.vue';
    import CreateInvoiceButton from '@/components/CreateInvoiceButton.vue';
    import SalesExpensesChart from '@/components/SalesExpensesChart.vue';
    import RecentInvoice from '@/components/RecentInvoice.vue';
    import ProfitMarginChart from '@/components/ProfitMarginChart.vue';
</script>

<template>
    <GreetingComponent />
    <TotalInvoicesReport />
    <CreateInvoiceButton />
    <SalesExpensesChart />
    <RecentInvoice />
    <ProfitMarginChart />
</template>

<style scoped>
    
</style>