<script setup>
    import { useCustomerStore } from '@/stores/customer';
    import { useRoute, useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification';

    const store = useCustomerStore();
    const route = useRoute();
    const router = useRouter()
    const id = route.params.id;
    const toast = useToast()

    const name = ref("");
    const email = ref("");

    onMounted(
        () => {
            const customer = store.customers.find(cus => cus.customerID == id)

            if (customer) {
                name.value = customer.customerName
                email.value = customer.customerEmail
            }
        }
    )

    const submitForm = () => {
        const customer = store.customers.find(cus => cus.customerID == id);
        if (customer) {
            customer.customerName = name.value;
            customer.customerEmail = email.value;

            const confirm = window.confirm("Are you sure you want to modify this customer?")
            if (confirm) {
                toast.success('Customer updated successfully');
                router.push('/customers');
            }
            else {
                toast.error("Customer was not modified")
                router.push("/customers")
            }
        } 
        else {
            toast.error('Customer not found');
            router.push("/customers")
        }
    }

</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="submitForm">
                <h3 class="py-4 text-center">Edit Customer</h3>
                <label for="customersName" class="d-block m-3">Full Name: <span class="text-danger">*</span></label>
                <input type="text" id="customersName" class="px-2" placeholder="E.g Davy Jones"  required v-model="name">
                <label for="customersEmail" class="d-block m-3">Email: <span class="text-danger">*</span></label>
                <input type="email" id="customersEmail" class="px-2 mb-3" required v-model="email">
                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Update Customer</button>
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