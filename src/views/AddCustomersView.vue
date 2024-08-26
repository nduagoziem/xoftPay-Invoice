<script setup>
    import { useRouter } from 'vue-router';
    import { useCustomerStore } from '@/stores/customer';
    import { useToast } from 'vue-toastification';

    const router = useRouter()

    const store = useCustomerStore()

    const toast = useToast()

    const handleSubmit = () => {
        store.addCustomer();
        toast.success("Customer was added")
        router.push("/customers")
    }

</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="handleSubmit">
                <h3 class="py-4 text-center">Add A New Customer</h3>
                <label for="customersName" class="d-block m-3">Full Name: <span class="text-danger">*</span></label>
                <input type="text" id="customersName" class="px-2" placeholder="E.g Davy Jones"  required v-model="store.fullName">
                <label for="customersEmail" class="d-block m-3">Email: <span class="text-danger">*</span></label>
                <input type="email" id="customersEmail" class="px-2 mb-3" required v-model="store.email">
                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Add Customer</button>
                </div>
            </form>
        </div>
    </div> 
</template>

<style scoped>
    form {
        background-color: aliceblue;
        height: 500px;
        width: 500px;
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
        color: white;
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