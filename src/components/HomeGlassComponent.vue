<script setup>
    import { ref, onMounted } from 'vue';
    import SVGBlobsComponent from './SVGBlobsComponent.vue';
    import SignUpComponent from './SignUpComponent.vue';
    import SignInComponent from './SignInComponent.vue';

    const activeComponent = ref("signUp"); // Default is "signUp"

    const showSignUpComponent = () => {
        activeComponent.value = "signUp";
        localStorage.setItem("activeComponent", "signUp");
    };
    const showSignInComponent= () => {
        activeComponent.value = "signIn";
        localStorage.setItem("activeComponent", "signIn");
    };

    // Check localStorage for the previously selected component
    // Incase the user refreshes or closes the browser
    onMounted(
        () => {
            const savedComponent = localStorage.getItem("activeComponent");
            if (savedComponent) {
                activeComponent.value = savedComponent;
            }
        }
    );

</script>

<template>
    <div class="mirror-container">

        <div class="mirror-box">

            <div class="container">

                <div class="d-flex justify-content-center py-3">

                    <div class="dotted-circle d-flex justify-content-center align-items-center">
                        <div class="logo"></div>
                    </div>
                </div>

                <p class="text-center" v-if="activeComponent === 'signUp'">Simplify your invoicing and manage payments with ease.</p>
                <p class="text-center" v-if="activeComponent === 'signIn'">Hi, Welcome Back</p>

                <div class="d-flex justify-content-center">
                    
                    <div class="content-container py-2">

                        <div class="d-flex justify-content-around">

                            <button @click="showSignUpComponent" class="px-3 py-1 text-center" :style="{background: 'black'}">Register</button>
                            <button  @click="showSignInComponent" class="px-3 py-1 text-center" :style="{background: 'rgb(123, 183, 235)'}">Login</button>
                        </div>

                        <SignUpComponent v-if="activeComponent === 'signUp'"/>
                        <SignInComponent v-if="activeComponent === 'signIn'"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- Blob component goes here -->
        <SVGBlobsComponent />

    </div>
</template>

<style scoped>

    .mirror-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color:  rgb(123, 183, 235);
        overflow: hidden;
    }

    .mirror-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.5); 
        backdrop-filter: blur(10px); /* Blurs anything behind the box */
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        z-index: 10; /* Ensures the box is above the blobs */
        color: black;
    }

    .dotted-circle {
        height: 100px;
        width: 100px;
        border: 3px dotted white;
        border-radius: 50%;
    }

    .logo {
        height: 30px;
        width: 30px;
        background: linear-gradient(to right, rgb(123, 183, 235), black);
        transform: rotate(40deg);
    }

    p {
        font-weight: 500;
    }

    .content-container {
        width: 500px;
    }

    button {
        border: none;
        border-radius: 3px;
        outline: none;
    }

</style>