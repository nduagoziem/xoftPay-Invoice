<script setup>
    import { useRouter } from 'vue-router';
    import { useInvoiceStore } from '@/stores/invoice';
    import { useToast } from 'vue-toastification';
    const router = useRouter()
    const store = useInvoiceStore()
    const toast = useToast()

    const handleSubmit = () => {
        store.addInvoice();
        toast.success("Invoice added successfully")
        router.push("/invoices")
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="handleSubmit">
                <h3 class=" py-2 text-center">New Invoice</h3>

                <label for="customerName" class="d-block m-2">Customer Name:
                     <span class="text-danger">*</span>
                </label>
                <input type="text" id="customerName" class="px-2 my-2" placeholder="E.g Davy Jones" required v-model="store.customerName">

                <label for="customerEmail" class="d-block m-2">Email: 
                    <span class="text-danger">*</span>
                </label>
                <input type="email" id="customerEmail" class="px-2" required v-model="store.email">

                <label for="itemName" class="d-block m-2">Item Name: 
                    <span class="text-danger">*</span>
                </label>
                <input type="text" id="itemName" class="px-2" placeholder="E.g Table Saws" required v-model="store.itemName">

                <label for="price" class="d-block m-2">Price: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="price" class="px-2" placeholder="E.g 200"  required v-model="store.price">

                <label for="quantity" class="d-block m-2">Quantity: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="quantity" class="px-2" placeholder="E.g 5" required v-model="store.quantity">

                <label for="shipping" class="d-block m-2">Shipping Fee: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="shipping" class="px-2" placeholder="Input 0 if there is none" required v-model="store.shippingFee">

                <label for="issuedDate" class="d-block m-2">Issued Date: 
                    <span class="text-danger">*</span>
                </label>
                <input type="date" id="issuedDate" class="px-2" required v-model="store.issuedDate">

                <label for="issuedDate" class="d-block m-2">Due Date: 
                    <span class="text-danger">*</span>
                </label>
                <input type="date" id="dueDate" class="px-2" required v-model="store.dueDate">

                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Add Invoice</button>
                </div>
            </form>
        </div>
    </div> 
</template>

<style scoped>
    form {
        background-color: aliceblue;
        height: 1000px;
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
            height: 1000px;
            width: 700px;
        }
    }
</style>