<script setup>
    import { useInvoiceStore } from '@/stores/invoice';
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useToast } from 'vue-toastification';

    const store = useInvoiceStore()
    const toast = useToast()

    const lastFourInvoices = computed(
        () => {
            return store.invoices.slice(-4)
        }
    )

    const deleteInvoice = (index) => {
        const confirm = window.confirm("Are you sure you want to delete this invoice?")
        if (confirm) {
            store.invoices.splice(index, 1)
            toast.success("Invoice deleted successfully")
        }
        else{toast.error("Invoice was not deleted")}
    }

    const formatNumber = (num) => {

        if (num >= 1e12) {
            return (num / 1e12).toFixed(1) + "T"; // Trillions
        } 
        else if (num >= 1e9) {
            return (num / 1e9).toFixed(1) + "B"; // Billions
        } 
        else if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + "M"; // Millions
        } 
        else if (num > 1e3) {
            return (num / 1e3).toFixed(1) + "K"; // Thousands
        } 
        else {
            return num.toLocaleString(); // Less than a thousand
        }
    }

</script>

<template>
    <div class="container-fluid mb-4">

        <div class="container">

            <h4 v-if="lastFourInvoices == false" class="text-center mb-3"></h4>
            <h4 v-else class="text-center mb-3">Recent Invoices</h4>
            
            <div class="row g-3">

                <div v-for="invoice, index in lastFourInvoices" :key="invoice.invoiceID" class="col-md-6 col-lg-6"> <!-- Paid Invoice Card Column -->

                    <div class="card">

                        <div class="card-header"  :style="{background: 'aliceblue'}">

                            <div class="d-flex justify-content-between">

                                <p class="card-title">{{ invoice.customerName }}</p>

                                <div>
                                    <RouterLink :to="'/invoices/edit/' + invoice.invoiceID">
                                        <button class="piBtn"> <span class="pi pi-pen-to-square px-1"></span> </button>
                                    </RouterLink>
                                    <button @click="deleteInvoice(index)" class="piBtn"> <span class="pi pi-trash px-1"></span> </button>
                                </div>
                            </div>
                            <span>{{ invoice.email }}</span>
                        </div>

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Price</p>
                                <p>Issued Date</p>
                                <p>Due Date</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>${{ formatNumber(invoice.price) }}</p>
                                <p>{{ invoice.issuedDate }}</p>
                                <p>{{ invoice.dueDate }}</p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <RouterLink :to="'/invoices/invoice-details/' + invoice.invoiceID" class="nav-link">
                                    <button class="readMore">Read More</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: aliceblue;
        border: none;
    }

    .card-title {
        font-weight: bold;
    }

    .card-body p {
        width: 100px;
        text-align: center;
    }

    .readMore {
        background-color: black;
        padding: 7px 10px;
        border: none;
        border-radius: 5px;
    }

    .piBtn {
        border: none;
        background-color: transparent;
        color: black;
    }

</style>