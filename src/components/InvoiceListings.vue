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
        const del = store.invoices.splice(index, 1)
        if (del) {
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
            
            <div class="row g-3">

                <div v-for="invoice, index in filteredInvoices" :key="invoice.invoiceID" class="col-md-6 col-lg-6">

                    <div class="card">

                        <div class="card-header" :style="{background: 'aliceblue'}">

                            <div class="d-flex justify-content-between">

                                <p class="card-title">{{ invoice.customerName }}</p>

                                <div>
                                    <RouterLink :to="'/invoices/edit/' + invoice.invoiceID">
                                        <button class="piBtn"> <span class="pi pi-pen-to-square px-1"></span> </button>
                                    </RouterLink>
                                    <button data-bs-toggle="modal" :data-bs-target="'#deleteModal' + index" class="piBtn"> <span class="pi pi-trash px-1"></span> </button>

                                    <!-- Confirmation Modal For Deleting Invoices -->
                                    <div class="modal fade" :id="'deleteModal' + index" tabindex="-1" aria-labelledby="deleteInvoice" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="deleteInvoice">Delete Invoice</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Are you sure you want to delete this invoice?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="cancel-modal px-3 py-1" data-bs-dismiss="modal">Cancel</button>
                                                    <button @click="deleteInvoice(index)" type="button" data-bs-dismiss="modal" class="delete-modal px-3 py-1">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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

    .cancel-modal {
        background-color: black;
        border-radius: 4px;
        color: white;
        border: none;
    }

    .delete-modal {
        background-color: rgb(150, 7, 7);
        border-radius: 4px;
        border: none;
        color: white;
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