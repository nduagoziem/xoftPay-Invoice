<script setup>
    const date = new Date()
</script>

<template>
    <div class="container-fluid mb-3">

        <div class="container">

            <h3 v-if="date.getHours() < 12">Good Morning</h3>
            <h3 v-else-if="date.getHours() < 16">Good Afternoon</h3>
            <h3 v-else>Good Evening</h3>

            <p :style="{fontSize: '19px'}">Welcome to your dashboard</p>
        </div>
    </div>
</template>

<style scoped>
    
</style>