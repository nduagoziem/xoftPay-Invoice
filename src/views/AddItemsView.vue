<script setup>
    import { useRouter } from 'vue-router';
    import { useItemStore } from '@/stores/items';
    import { useToast } from 'vue-toastification';

    const router = useRouter()
    const store = useItemStore()
    const toast = useToast()

    const handleSubmit = () => {
        store.addItem();
        toast.success("Item added successfully")
        router.push("/items")
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="handleSubmit">
                <h3 class=" py-2 text-center">Add A New Item</h3>

                <label for="itemName" class="d-block m-2">Item Name:
                     <span class="text-danger">*</span>
                </label>
                <input type="text" id="itemName" class="px-2 my-2" required v-model="store.name">

                <label for="itemPrice" class="d-block m-2">Price: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="itemPrice" class="px-2 mb-3" required v-model="store.price">

                <label for="itemQuantity" class="d-block m-2">Quantity: 
                    <span class="text-danger">*</span>
                </label>
                <input type="number" id="itemQuantity" class="px-2" required v-model="store.quantity">

                <div class="d-flex justify-content-center mt-5">
                    <button type="submit">Add Item</button>
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