<script setup>
    import { useExpenseStore } from '@/stores/expenses';
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useToast } from 'vue-toastification';

    const store = useExpenseStore()
    const toast = useToast()

    const props = defineProps({
        searchQuery: String
    });

    const filteredExpenses = computed(() => {
        if (!props.searchQuery) {
            return store.expenses;
        }

        else {
            return store.expenses.filter(expenses => 
            expenses.expenseName.toLowerCase().includes(props.searchQuery.toLowerCase())
        )}
    });

    const deleteExpense = (index) => {
        const del = store.expenses.splice(index, 1)
        if (del) {
            toast.success("Expenditure deleted successfully")
        }
        else{toast.error("Expenditure was not deleted")}
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

                <div  v-for="expense, index in filteredExpenses" :key="expense.expenseID" class="col-md-6 col-lg-6">

                    <div class="card">

                        <div class="card-body">
                            <div class="d-flex justify-content-end mb-3">
                                <RouterLink :to="'/expenses/edit/' + expense.expenseID" >
                                    <button> <span class="pi pi-pen-to-square px-1"></span> </button>
                                </RouterLink>
                                <button data-bs-toggle="modal" :data-bs-target="'#deleteModal' + index"> 
                                    <span class="pi pi-trash px-1"></span> 
                                </button>

                                <!-- Confirmation Modal For Deleting Expenses -->
                                <div class="modal fade" :id="'deleteModal' + index" tabindex="-1" aria-labelledby="deleteCustomer" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="deleteCustomer">Delete Expenditure</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Are you sure you want to delete this expense?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="cancel-modal px-3 py-1" data-bs-dismiss="modal">Cancel</button>
                                                <button @click="deleteExpense(index)" type="button" data-bs-dismiss="modal" class="delete-modal px-3 py-1">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Name:</h5> 
                                <p>{{ expense.expenseName }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Price:</h5>
                                <p>${{ formatNumber(expense.expensePrice) }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Quantity:</h5>
                                <p>{{ expense.expenseQuantity }}</p>
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
        color: black;
        border: none;
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