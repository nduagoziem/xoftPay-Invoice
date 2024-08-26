<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-fluid mt-4 mb-3">

        <div class="container py-4">

            <h4>View Your Receivables Summary</h4>
            <p>Keep an eye on current and overdue amount your customers owe you</p>
            
            <div class="d-flex justify-content-center">
                <RouterLink to="/invoices">
                    <button class="px-3 py-2 bg-dark "><span class="pi pi-plus px-1"></span>Create Invoice</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: aliceblue
    }

    button {
        border: none;
        outline: none;
        border-radius: 10px;
    }
</style>