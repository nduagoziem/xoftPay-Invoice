<script setup>
    import { ref } from 'vue';
    import InputGroup from 'primevue/inputgroup';
    import InputGroupAddon from 'primevue/inputgroupaddon';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import router from '@/router';
    // import axios from 'axios';
    import { loginUrl } from '@/config/api';
    import { useToast } from 'vue-toastification';

    const username = ref("");
    const password = ref("");

    const toast = useToast()

    async function loginUser() {

        try {

            const res = await fetch.post(`${loginUrl}`, 
                {
                    username: username.value,
                    password: password.value
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = await res.json()
            
            if (result.data.success) {
                username.value = "";
                password.value = "";

                router.push('/dashboard');
            } 
            else {
                toast("Login failed");
            }
        }
        catch(err) {
            console.error(err)
        }
    }
</script>

<template>
    <form @submit.prevent="loginUser">

        <div>

            <InputGroup class="mt-4 mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-user-edit"></span>
                </InputGroupAddon>
                <InputText v-model="username" placeholder="Username" required/>
            </InputGroup>

            <InputGroup  class="input mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-lock"></span>
                </InputGroupAddon>
                <Password v-model="password" toggleMask :feedback="false" placeholder="Password" required/>
            </InputGroup>

            <button type="submit" class="py-2 text-center">Login</button>
        </div>
    </form>
</template>

<style scoped>
    button {
        background-color: black;
        width: 100%;
        border: none;
        border-radius: 3px;
        outline: none;
        color: rgb(123, 183, 235);
    }
</style>