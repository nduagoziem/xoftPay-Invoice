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
        const del = store.customers.splice(index, 1)
        if (del) {
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

                                    <button data-bs-toggle="modal" :data-bs-target="'#deleteModal' + index"> 
                                        <span class="pi pi-trash px-1"></span> 
                                    </button>

                                    <!-- Confirmation Modal For Deleting Customers -->
                                    <div class="modal fade" :id="'deleteModal' + index" tabindex="-1" aria-labelledby="deleteCustomer" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="deleteCustomer">Delete Customer</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Are you sure you want to delete this customer?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="cancel-modal px-3 py-1" data-bs-dismiss="modal">Cancel</button>
                                                    <button @click="deleteCustomer(index)" type="button" data-bs-dismiss="modal" class="delete-modal px-3 py-1">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        font-weight: bold;
    }

    button {
        border: none;
        background-color: transparent;
        color: black;
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

</style>