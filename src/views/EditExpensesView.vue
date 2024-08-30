<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import { useExpenseStore } from '@/stores/expenses';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification';

    const router = useRouter();
    const route = useRoute();
    const store = useExpenseStore();
    const toast = useToast();
    const id = route.params.id;
    const name = ref("");
    const price = ref("");
    const quantity = ref("");

    onMounted(
        () => {
            const expense = store.expenses.find(exp => exp.expenseID == id)

            if (expense) {
                name.value = expense.expenseName
                price.value = expense.expensePrice
                quantity.value = expense.expenseQuantity
            }
        }
    )

    const submitForm = () => {
        const expense = store.expenses.find(exp => exp.expenseID == id);
        if (expense) {

            const confirm = window.confirm("Are you sure you want to modify this expenditure?")
            if (confirm) {
                expense.expenseName = name.value;
                expense.expensePrice = price.value;
                expense.expenseQuantity = quantity.value;
                toast.success("Expenditure updated successfully");
                router.push("/expenses");
            }
            else {
                toast.error("Expenditure was not modified")
                router.push("/expenses")
            }
        } 
        else {
            toast.error("Expenditure not found");
            router.push("/expenses")
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="submitForm">
                <h3 class=" py-2 text-center">Edit Expenditure</h3>

                <label for="itemName" class="d-block m-2">Name:
                    <span class="text-danger">*</span>
                </label>
                <input type="text" id="itemName" class="px-2 my-2" required v-model="name">

                <label for="itemPrice" class="d-block m-2">Price: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="itemPrice" class="px-2 mb-3" required v-model="price">

                <label for="itemQuantity" class="d-block m-2">Quantity: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="itemQuantity" class="px-2" required v-model="quantity">

                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Update Expenditure</button>
                </div>
            </form>
        </div>
    </div> 
</template>

<style scoped>
    form {
        background-color: aliceblue;
        height: 550px;
        width: 550px;
        box-shadow: 0px 0px 5px gray;
    }

    input {
        width: 100%;
        height: 60px;
        background-color: white;
        color: black;
        border: none;
        outline: none;
        caret-color: black;
        box-shadow: 0px 0px 3px black;
    }

    label {
        font-weight: bold;
        font-size: large;
    }

    button {
        background-color: black;
        border: none;
        border-radius: 5px;
        width: 300px;
        height: 50px;
    }

    @media (min-width: 1500px) and (max-width: 9999px) {
        form {
            height: 700px;
            width: 700px;
        }
    }
</style>