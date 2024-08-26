<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { ref, onMounted, computed } from 'vue';
    import { useInvoiceStore } from '@/stores/invoice';

    const route = useRoute()
    const store = useInvoiceStore()
    const id = route.params.id;
    const customerName = ref("")
    const email = ref("");
    const itemName = ref("");
    const price = ref();
    const quantity = ref();
    const shippingFee = ref();
    const issuedDate = ref();
    const dueDate = ref();

    onMounted(
        () => {
            const invoice = store.invoices.find(inv => inv.invoiceID == id)

            if (invoice) {
                customerName.value = invoice.customerName;
                email.value = invoice.email;
                itemName.value = invoice.itemName;
                price.value = invoice.price;
                quantity.value = invoice.quantity;
                shippingFee.value = invoice.shippingFee;
                issuedDate.value = invoice.issuedDate;
                dueDate.value = invoice.dueDate;
            }
        }
    );

    const total = computed(
        () => {
         return price.value + shippingFee.value
        }
    );
</script>

<template>
    <div class="container-fluid">
        
        <div class="container d-flex justify-content-center align-items-center">

            <div class="card">

                <div class="d-flex justify-content-between py-3">
                    <RouterLink to="/invoices" class="nav-link">
                        <span class="pi pi-arrow-left px-3 py-2"></span>
                    </RouterLink>

                    <h5 class="px-2">Invoice Details</h5>
                </div>

                <h5 class="px-3">Invoice {{ id }}</h5>

                <div class="card-body mt-3 mx-2 mb-3">
                    <h5 class="card-title text-center mb-3">{{ itemName }}</h5>
                    <h6>{{ customerName }}</h6>
                    <p class="mb-3">{{ email }}</p>

                    <div class="pt-4 mt-4 mb-3" :style="{background: 'white'}">

                        <div class="d-flex justify-content-around">
                            <h6>Issued Date</h6>
                            <h6>Due Date</h6>
                        </div>

                        <div class="d-flex justify-content-around">
                            <p>{{ issuedDate }}</p>
                            <p>{{ dueDate }}</p>
                        </div>
                    </div>
                </div>

                <div class="card-body mt-2 mx-2">

                    <div class="d-flex justify-content-between">
                        <h6>Quantity:</h6>
                        <p>{{ quantity }}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h6>Price:</h6>
                        <p>${{ price }}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h6>Shipping Fee:</h6>
                        <p>${{ shippingFee }}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h6>Total:</h6>
                        <p>${{ total }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container {
        height: 90vh;
    }

    .card {
        background-color: aliceblue;
        width: 700px;
        border: none;
    }
</style>