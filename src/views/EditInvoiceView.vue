<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useInvoiceStore } from '@/stores/invoice';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification';

    const router = useRouter()
    const route = useRoute()
    const store = useInvoiceStore()
    const toast = useToast();
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
    )

    const submitForm = () =>{
        const invoice = store.invoices.find(inv => inv.invoiceID == id)

        if (invoice) {

            const confirm = window.confirm("Are you sure you want to modify this invoice?")
            if (confirm) {
                invoice.customerName = customerName.value;
                invoice.email = email.value;
                invoice.itemName = itemName.value
                invoice.price = price.value;
                invoice.quantity = quantity.value;
                invoice.shippingFee = shippingFee.value;
                invoice.issuedDate = issuedDate.value;
                invoice.dueDate = dueDate.value;
                toast.success("Invoice updated successfully");
                router.back();
            }
            else {
                toast.error("Invoice was not modified")
                router.back()
            }

        }
        else {
            toast.error("Invoice not found");
            router.back()
        }
    }

</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="submitForm">
                <h3 class=" py-2 text-center">Modify Invoice</h3>

                <label for="customerName" class="d-block m-2">Customer Name:
                     <span class="text-danger">*</span>
                </label>
                <input type="text" id="customerName" class="px-2 my-2" placeholder="E.g Davy Jones" required v-model="customerName">

                <label for="customerEmail" class="d-block m-2">Email: 
                    <span class="text-danger">*</span>
                </label>
                <input type="email" id="customerEmail" class="px-2" required v-model="email">

                <label for="itemName" class="d-block m-2">Item Name: 
                    <span class="text-danger">*</span>
                </label>
                <input type="text" id="itemName" class="px-2" placeholder="E.g Table Saws" required v-model="itemName">

                <label for="price" class="d-block m-2">Price: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="price" class="px-2" placeholder="E.g 200"  required v-model="price">

                <label for="quantity" class="d-block m-2">Quantity: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="quantity" class="px-2" placeholder="E.g 5" required v-model="quantity">

                <label for="shipping" class="d-block m-2">Shipping Fee: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="shipping" class="px-2" placeholder="Input 0 if there is none" required v-model="shippingFee">

                <label for="issuedDate" class="d-block m-2">Issued Date: 
                    <span class="text-danger">*</span>
                </label>
                <input type="date" id="issuedDate" class="px-2" required v-model="issuedDate">

                <label for="issuedDate" class="d-block m-2">Due Date: 
                    <span class="text-danger">*</span>
                </label>
                <input type="date" id="dueDate" class="px-2" required v-model="dueDate">

                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Update Invoice</button>
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