<script setup>
    import { useCustomerStore } from '@/stores/customer';
    import { useRoute, useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification';
    import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';

    const store = useCustomerStore();
    const route = useRoute();
    const router = useRouter()
    const id = route.params.id;
    const toast = useToast()

    const name = ref("");
    const email = ref("");
    const confirmModal = ref(null); // To store modal instance

    onMounted(
        () => {
            const customer = store.customers.find(cus => cus.customerID == id)

            if (customer) {
                name.value = customer.customerName
                email.value = customer.customerEmail
            }
        }
    )

    const showConfirmationModal = () => {
        const modalInstance = new Modal(confirmModal.value);
        modalInstance.show();
    };

    const submitForm = () => {
        
    const customer = store.customers.find((cus) => cus.customerID == id);
        if (customer) {
            customer.customerName = name.value;
            customer.customerEmail = email.value;
            toast.success('Customer updated successfully');
            router.push('/customers');
        }
        else {
            toast.error('Customer not found');
            router.push('/customers');
        }
    };

    const cancel = () => {
        router.push('/customers')
        toast.error('Customer was not modified');
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex justify-content-center py-5">
            <form @submit.prevent="showConfirmationModal">
                <h3 class="py-4 text-center">Edit Customer</h3>
                <label for="customersName" class="d-block m-3">Full Name: <span class="text-danger">*</span></label>
                <input type="text" id="customersName" class="px-2" placeholder="E.g Davy Jones"  required v-model="name">
                <label for="customersEmail" class="d-block m-3">Email: <span class="text-danger">*</span></label>
                <input type="email" id="customersEmail" class="px-2 mb-3" required v-model="email">
                <div class="d-flex justify-content-center mt-5">
                    <button  class="submit" type="submit">Update Customer</button>
                </div>
            </form>

            <!--Confirmation Modal For Editing Customers-->
            <div class="modal fade" id="editCustomer" tabindex="-1" aria-labelledby="editCustomerLabel" aria-hidden="true" ref="confirmModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="editCustomerLabel">Edit Customer</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            You are about to edit this customer
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