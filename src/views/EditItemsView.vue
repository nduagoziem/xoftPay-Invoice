<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import { useItemStore } from '@/stores/items';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification';
    import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';

    const router = useRouter();
    const route = useRoute();
    const store = useItemStore();
    const toast = useToast();
    const id = route.params.id;
    const name = ref("");
    const price = ref();
    const quantity = ref();
    const confirmModal = ref(null)

    onMounted(
        () => {
            const item = store.items.find(i => i.itemID == id)

            if (item) {
                name.value = item.itemName
                price.value = item.itemPrice
                quantity.value = item.itemQuantity
            }
        }
    )

    const showConfirmationModal = () => {
        const modalInstance = new Modal(confirmModal.value);
        modalInstance.show();
    };

    const submitForm = () => {
        const item = store.items.find(i => i.itemID == id);
        if (item) {

            item.itemName = name.value;
            item.itemPrice = price.value;
            item.itemQuantity = quantity.value;
            toast.success("Item updated successfully");
            router.push("/items");
        } 
        else {
            toast.error("Item not found");
            router.push("/items")
        }
    }

    const cancel = () => {
        router.push('/items')
        toast.error('Item was not modified');
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="showConfirmationModal">
                <h3 class=" py-2 text-center">Edit Item</h3>

                <label for="itemName" class="d-block m-2">Item Name:
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
                    <button class="submit" type="submit">Update Item</button>
                </div>
            </form>

            <!--Confirmation Modal For Editing Items-->
            <div class="modal fade" id="editItem" tabindex="-1" aria-labelledby="editItemLabel" aria-hidden="true" ref="confirmModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="editItemLabel">Edit Item</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            You are about to edit this item
                        </div>
                        <div class="modal-footer">
                            <button @click="cancel" type="button" class="cancel-modal px-3 py-1" data-bs-dismiss="modal">Cancel</button>
                            <button @click="submitForm" type="button"  data-bs-dismiss="modal" class="edit-modal px-4 py-1">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
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

    .submit {
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        width: 300px;
        height: 50px;
    }

    .cancel-modal {
        background-color: black;
        border-radius: 4px;
        color: white;
        border: none;
    }

    .edit-modal {
        background-color: rgb(123, 183, 235);
        border-radius: 4px;
        color: white;
        border: none;
    }

    @media (min-width: 1500px) and (max-width: 9999px) {
        form {
            height: 700px;
            width: 700px;
        }
    }
</style>