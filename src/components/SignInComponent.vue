<script setup>
    import { ref } from 'vue';
    import InputGroup from 'primevue/inputgroup';
    import InputGroupAddon from 'primevue/inputgroupaddon';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';

    const value = ref(null);
</script>

<template>
    <form action="">

        <div>

            <InputGroup class="mt-4 mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-user-edit"></span>
                </InputGroupAddon>
                <InputText placeholder="Username" required/>
            </InputGroup>

            <InputGroup  class="input mb-4 py-2">
                <InputGroupAddon>
                    <span class="pi pi-lock"></span>
                </InputGroupAddon>
                <Password v-model="value" toggleMask :feedback="false" placeholder="Password" required/>
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