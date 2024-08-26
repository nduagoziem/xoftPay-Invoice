<script setup>

</script>

<template>
    <div class="container-fluid mb-3">

        <div class="container py-4">
            <h4 class="py-4">Total Invoices Report</h4>
            <div class="d-flex justify-content-between align-items-center">
                <h6>Gross Income</h6>
                <h6>Expenses</h6>
                <h6>Net Income</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p class="green">$500</p>
                <p class="red">$10</p>
                <p class="green">$490</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: black;
        color: white;
    }

    h4 {
        text-align: center;
    }

    h6 {
        width: 200px;
        /* border: 2px solid red; */
        text-align: center;
    }

    p {
        width: 200px;
        /* border: 2px solid red; */
        text-align: center;
    }

    .green {
        color: rgb(0, 239, 159);
    }

    .red {
        color: rgb(255, 0, 0);
    }
</style>