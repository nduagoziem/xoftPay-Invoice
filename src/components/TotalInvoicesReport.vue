<script setup>
    import { useInvoiceStore } from '@/stores/invoice';
    import { useExpenseStore } from '@/stores/expenses';
    import { computed } from 'vue';

    const invoiceStore = useInvoiceStore()
    const expenseStore = useExpenseStore()

    const grossIncome = computed(
        () => {
            return invoiceStore.invoices.reduce(
                (acc, inc) => {
                   return acc + inc.price
                }, 0
            )
        }
    )

    const expenses = computed(
        () => {
            return expenseStore.expenses.reduce(
                (acc, exp) => {
                   return acc + exp.expensePrice
                }, 0
            )
        }
    )

    const netIncome = computed(
        () => {
            return grossIncome.value - expenses.value
        }
    )

    const formatNumber = (num) => {
        const isNegative = num < 0;
        const absoluteValue = Math.abs(num);

        let formattedNumber;
        
        if (absoluteValue >= 1e12) {
            formattedNumber = (absoluteValue / 1e12).toFixed(1) + "T"; // Trillions
        } 
        else if (absoluteValue >= 1e9) {
            formattedNumber = (absoluteValue / 1e9).toFixed(1) + "B"; // Billions
        } 
        else if (absoluteValue >= 1e6) {
            formattedNumber = (absoluteValue / 1e6).toFixed(1) + "M"; // Millions
        } 
        else if (absoluteValue >= 1e3) {
            formattedNumber = (absoluteValue / 1e3).toFixed(1) + "K"; // Thousands
        } 
        else {
            formattedNumber = absoluteValue.toLocaleString(); // Less than a thousand
        }

        // Prefix the dollar sign and handle the negative sign
        return `${isNegative ? '-' : ''}$${formattedNumber}`;
    };
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
                <p :class="grossIncome <= 0 ? 'red' : 'green'">{{ formatNumber(grossIncome)  }}</p>
                <p :class="expenses <= 0 ? 'green' : 'red'">{{ formatNumber(expenses) }}</p>
                <p :class="netIncome <= 0 ? 'red' : 'green'">{{ formatNumber(netIncome) }}</p>
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
        text-align: center;
    }

    p {
        width: 200px;
        text-align: center;
    }

    .green {
        color: rgb(0, 239, 159);
    }

    .red {
        color: rgb(255, 0, 0);
    }
</style>