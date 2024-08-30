<script setup>
    import { RouterLink } from 'vue-router';

    const emit = defineEmits(['search']);

    const searchCustomers = (event) => {
        emit('search', event.target.value);
    };
</script>

<template>
    <div class="container-fluid d-flex align-items-center mb-3" :style="{background: 'aliceblue', height: '90px'}">

        <div class="container d-flex justify-content-around">

            <form :style="{background: 'white'}">

                <span class="pi pi-search py-2 px-2"></span>
                <input @input="searchCustomers" type="text" placeholder="Search Customers..." 
                :style="{width: '500px', background: 'transparent', border: 'none', outline: 'none', color: 'black', caretColor: 'black'}">                    
            </form>

            <!-- The modal will be visible on small screens only -->
            <button class="smallScreenBtn px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Search Customers</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">

                            <form class="d-flex" :style="{background: 'white'}">

                                <span class="pi pi-search py-2 px-2"></span>
                                <input @input="searchCustomers" type="text" placeholder="Search Customers..." 
                                :style="{border: 'none', outline: 'none', color: 'black', caretColor: 'black'}">                                    
                            </form> 

                        </div>
                    </div>
                </div>
            </div>
            
            <RouterLink to="/customers/add"><button class="p-2">New Customer</button></RouterLink>

        </div>
    </div>

</template>

<style scoped>

    @media (min-width: 799px) and (max-width: 9999px) {

        .smallScreenBtn {
            display: none;
        }

        button {
            background-color: black;
            border: none;
            outline: none;
            border-radius: 5px;
            color: white;
        }

    }

    @media (min-width: 0px) and (max-width: 799px) {

        form {
            display: none;
        }

        button {
            background-color: black;
            color: white;
            padding: 10px 10px;
            border-radius: 5px;
            border: none;
        }

        .modal-content {
            background-color: black
        }

        input {
            width: 400px;
            background-color: transparent;
        }
    }

</style>