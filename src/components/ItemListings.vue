<script setup>
    import { useItemStore } from '@/stores/items';
    import { RouterLink } from 'vue-router';
    import { computed } from 'vue';
    import { useToast } from 'vue-toastification';

    const store = useItemStore()
    const toast = useToast()

    const props = defineProps({
        searchQuery: String
    });

    const filteredItems = computed(() => {
        if (!props.searchQuery) {
            return store.items;
        }

        else {
            return store.items.filter(items => 
            items.itemName.toLowerCase().includes(props.searchQuery.toLowerCase())
        )}
    });

    const deleteItem = (index) => {
        const del = store.items.splice(index, 1)
        if (del) {
            toast.success("Item deleted successfully")
        }
        else{toast.error("Item was not deleted")}
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

                <div v-for="item, index in filteredItems" :key="item.itemID" class="col-md-6 col-lg-6">

                    <div class="card">

                        <div class="card-body">
                            <div class="d-flex justify-content-end mb-3">
                                <RouterLink :to="'/items/edit/' + item.itemID">
                                    <button> 
                                        <span class="pi pi-pen-to-square px-1"></span> 
                                    </button>
                                </RouterLink>
                                
                                <button data-bs-toggle="modal" :data-bs-target="'#deleteModal' + index"> 
                                    <span class="pi pi-trash px-1"></span> 
                                </button>

                                <!-- Confirmation Modal For Deleting Items -->
                                <div class="modal fade" :id="'deleteModal' + index" tabindex="-1" aria-labelledby="deleteItem" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="deleteItem">Delete Item</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Are you sure you want to delete this item?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="cancel-modal px-3 py-1" data-bs-dismiss="modal">Cancel</button>
                                                <button @click="deleteItem(index)" type="button" data-bs-dismiss="modal" class="delete-modal px-3 py-1">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Name:</h5> 
                                <p>{{ item.itemName }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Price:</h5>
                                <p>${{ formatNumber(item.itemPrice) }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Quantity:</h5>
                                <p>{{ item.itemQuantity }}</p>
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
        color: white;
        border: none;
    }

</style>