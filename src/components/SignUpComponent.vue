<script setup>
    import { ref } from 'vue';
    import InputGroup from 'primevue/inputgroup';
    import InputGroupAddon from 'primevue/inputgroupaddon';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    // import axios from 'axios';
    import { registerUrl } from '@/config/api';
    import router from '@/router';
    import { useToast } from 'vue-toastification';

    const fullName = ref("")
    const userName = ref("")
    const passwordValue = ref(null);
    const confirmPasswordValue = ref(null);

    const toast = useToast()

    const registerData = {
        fullName: fullName,
        userName: userName,
        passwordValue: passwordValue,
        confirmPasswordValue: confirmPasswordValue,
    }

    async function registerUser() {
        try {
            const res = await fetch.post(`${registerUrl}`, registerData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = await res.json()

            if (result.data.success) {
                fullName.value = "";
                userName.value = "";
                passwordValue.value = "";
                confirmPasswordValue.value = "";

                router.push("/dashboard");
            } 
            else {
                toast.error("Something went wrong, Try again"); 
            }
            
            return res;
        }
        catch (err) {console.error(err)}
    } 
</script>

<template>
    <form @submit.prevent="registerUser">

        <div>
            <InputGroup class="mt-4 mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-user"></span>
                </InputGroupAddon>
                <InputText placeholder="Full Name" required v-model="fullName"/>
            </InputGroup>

            <InputGroup class="mt-4 mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-user-edit"></span>
                </InputGroupAddon>
                <InputText placeholder="Username" require v-model="userName"/>
            </InputGroup>

            <InputGroup  class="input mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-lock"></span>
                </InputGroupAddon>
                <Password v-model="passwordValue" toggleMask :feedback="false" placeholder="Password" required/>
            </InputGroup>

            <InputGroup  class="input mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-lock"></span>
                </InputGroupAddon>
                <Password v-model="confirmPasswordValue" toggleMask :feedback="false" placeholder="Confirm Password" required/>
            </InputGroup>
        </div>

        <button type="submit" class="py-2 text-center">Register</button>
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