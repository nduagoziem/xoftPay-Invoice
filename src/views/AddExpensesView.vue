<script setup>
    import { useRouter } from 'vue-router';
    import { useExpenseStore } from '@/stores/expenses';
    import { useToast } from 'vue-toastification';
    const router = useRouter()
    const store = useExpenseStore()
    const toast = useToast()

    const handleSubmit = () => {
        store.addExpense();
        toast.success("Expenditure added successfully")
        router.push("/expenses")
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="handleSubmit">
                <h3 class=" py-2 text-center">Track Your Expenses</h3>

                <label for="name" class="d-block m-2">Name:
                    <span class="text-danger">*</span>
                </label>
                <input type="text" id="name" class="px-2 my-2" required v-model="store.name">

                <label for="price" class="d-block m-2">Price: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="price" class="px-2 mb-3" required v-model="store.price">

                <label for="quantity" class="d-block m-2">Quantity: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="quantity" class="px-2" required v-model="store.quantity">

                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Add Expenditure</button>
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