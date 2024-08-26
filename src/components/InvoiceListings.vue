<script setup>
    import { useInvoiceStore } from '@/stores/invoice';
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useToast } from 'vue-toastification';

    const store = useInvoiceStore()
    const toast = useToast()

    const props = defineProps(
        {
            searchQuery: String
        }
    )

    const filteredInvoices = computed(() => {
        if (!props.searchQuery) {
            return store.invoices;
        }

        else {
            return store.invoices.filter(invoices => 
            invoices.customerName.toLowerCase().includes(props.searchQuery.toLowerCase())
        )}
    });

    const deleteInvoice = (index) => {
        const confirm = window.confirm("Are you sure you want to delete this invoice?")
        if (confirm) {
            store.invoices.splice(index, 1)
            toast.success("Invoice deleted successfully")
        }
        else{toast.error("Invoice was not deleted")}
    }
</script>

<template>
    <div class="container-fluid mb-4">

        <div class="container">
            
            <div class="row g-3">

                <div v-for="invoice, index in filteredInvoices" :key="invoice.invoiceID" class="col-md-6 col-lg-6"> <!-- Paid Invoice Card Column -->

                    <div class="card">

                        <div class="card-body">

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
                                <p>${{ invoice.price }}</p>
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
        font-family:cursive, Arial, Helvetica, sans-serif ;
        font-weight: bold;
    }

    .card-body p {
        width: 100px;
        /* border: 2px solid red; */
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