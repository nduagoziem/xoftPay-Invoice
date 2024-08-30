<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container-fluid">
    <div class="container py-3">
        <div class="d-flex justify-content-center">
            <span class="pi pi-exclamation-triangle text-warning text-center mb-3" :style="{fontSize: '50px'}"></span>
        </div>
        <h1 class="text-center mb-3" :style="{fontWeight: 'bolder'}">404 Not Found</h1>
        <p class="mb-3 text-center" :style="{fontWeight: 'bolder'}">This page does not exist</p>
        <div class="d-flex justify-content-center">
            <RouterLink to="/">
                <button class="px-3 py-1" :style="{background: 'black', border: 'none'}">Go Back</button>
            </RouterLink>
        </div>
    </div>
  </div>
</template>