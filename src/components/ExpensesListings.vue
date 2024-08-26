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
        const confirm = window.confirm("Are you sure you want to delete this expenditure?")
        if (confirm) {
            store.expenses.splice(index, 1)
            toast.success("Expenditure deleted successfully")
        }
        else{toast.error("Expenditure was not deleted")}
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
                                <button @click="deleteExpense(index)"> <span class="pi pi-trash px-1"></span> </button>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Name:</h5> 
                                <p>{{ expense.expenseName }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Price:</h5>
                                <p>${{ expense.expensePrice }}</p>
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

</style>