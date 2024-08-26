<script setup>
    import { useCustomerStore } from '@/stores/customer';
    import { RouterLink } from 'vue-router';
    import { computed } from 'vue';
    import { useToast } from 'vue-toastification';

    const store = useCustomerStore()
    const toast = useToast()

    const props = defineProps({
        searchQuery: String
    });

    const filteredCustomers = computed(() => {
        if (!props.searchQuery) {
            return store.customers;
        }

        else {
            return store.customers.filter(customer => 
            customer.customerName.toLowerCase().includes(props.searchQuery.toLowerCase())
        )}
    });

    const deleteCustomer = (index) => {
        const confirm = window.confirm("Are you sure you want to delete this customer?")
        if (confirm) {
            store.customers.splice(index, 1)
            toast.success("Customer deleted successfully")
        }
        else{toast.error("Customer was not deleted")}
    }

</script>

<template>
    <div class="container-fluid mb-4">

        <div class="container">
            
            <div class="row g-3">

                <div v-for="customer, index in filteredCustomers" :key="customer.customerID" class="col-md-4 col-lg-4">

                    <div class="card">

                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="card-title">{{ customer.customerName }}</p>
                                <div>
                                    <RouterLink :to="'/customers/edit/' + customer.customerID">
                                        <button> 
                                            <span class="pi pi-pen-to-square px-1"></span> 
                                        </button>
                                    </RouterLink>

                                    <button @click="deleteCustomer(index)"> 
                                        <span class="pi pi-trash px-1"></span> 
                                    </button>
                                </div>
                            </div>
                            <span>{{ customer.customerEmail }}</span>
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
        color: black;
        border: none;
    }

    .card-title {
        font-family:cursive, Arial, Helvetica, sans-serif ;
        font-weight: bold;
    }

    button {
        border: none;
        background-color: transparent;
        color: black;
    }

</style>