<script setup>
    import { RouterLink } from 'vue-router';

    const emit = defineEmits(['search']);

    const searchExpenses = (event) => {
        emit('search', event.target.value);
    };
</script>

<template>
    <div class="container-fluid d-flex align-items-center mb-3" :style="{background: 'aliceblue', height: '90px'}">

        <div class="container d-flex justify-content-around">

            <form :style="{background: 'whitesmoke'}">

                <span class="pi pi-search py-2 px-2"></span>
                <input @input="searchExpenses" type="text" placeholder="Track your expenses..." 
                :style="{width: '500px', background: 'transparent', border: 'none', outline: 'none', color: 'black', caretColor: 'black'}">
                <span class="pi pi-sort-alt bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></span>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">Newest First</li>
                    <li class="dropdown-item">Oldest First</li>
                </ul>
                    
            </form>

            <!-- The modal will be visible on small screens only -->
            <button class="smallScreenBtn px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Search</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">

                            <form class="d-flex justify-content-between" :style="{background: 'white'}">

                                <span class="pi pi-search py-2 px-2"></span>
                                <input @input="searchExpenses" type="text" placeholder="Track your expenses..." 
                                :style="{border: 'none', outline: 'none', color: 'black', caretColor: 'black'}">
                                <span class="pi pi-sort-alt py-2 bg-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">Newest First</li>
                                    <li class="dropdown-item">Oldest First</li>
                                </ul>
                                    
                            </form> 

                        </div>
                    </div>
                </div>
            </div>
            
            <RouterLink to="/expenses/add"><button class="py-2 px-1">New Expenditure</button></RouterLink>

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