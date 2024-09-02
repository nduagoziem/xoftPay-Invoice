<script setup>
    import Chart from 'primevue/chart';
    import { ref, onBeforeMount, computed } from 'vue';
    import { useInvoiceStore } from '@/stores/invoice';
    import { useExpenseStore } from '@/stores/expenses';

    onBeforeMount(
        () => {
            chartData.value = setChartData();
            chartOptions.value = setChartOptions();
        }
    )

    const chartData = ref();
    const chartOptions = ref();
    const invoiceStore = useInvoiceStore()
    const expenseStore = useExpenseStore()

    const sales = computed( // Gross Income Data
        () => {
            return invoiceStore.invoices.reduce(
                (acc, arg) => {
                  return acc + arg.price
                }, 0
            )
        }
    )

    const expenses = computed( // Expense Data
        () => {
            return expenseStore.expenses.reduce(
                (acc, arg) => {
                  return acc + arg.expensePrice
                }, 0
            )
        }
    )

    // profitMargin data from January - December(profitMargin0 - profitMargin11), sales minus expenses
    const profitMargin0 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 0) {
                return sales.value - expenses.value
            } // January

            return null
        }
    )

    const profitMargin1 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 1) {
                return sales.value - expenses.value
            } // February

            return null
        }
    )

    const profitMargin2 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 2) {
                return sales.value - expenses.value
            } // March

            return null
        }
    )

    const profitMargin3 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 3) {
                return sales.value - expenses.value
            } // April

            return null
        }
    )

    const profitMargin4 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 4) {
                return sales.value - expenses.value
            } // May

            return null
        }
    )

    const profitMargin5 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 5) {
                return sales.value - expenses.value
            } // June

            return null
        }
    )

    const profitMargin6 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 6) {
                return sales.value - expenses.value
            } // July

            return null
        }
    )

    const profitMargin7 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 7) {
                return sales.value - expenses.value
            } // August

            return null
        }
    )
    
    const profitMargin8 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 8) {
                return sales.value - expenses.value
            } // September

            return null
        }
    )

    const profitMargin9 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 9) {
                return sales.value - expenses.value
            } // October

            return null
        }
    )

    const profitMargin10 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 10) {
                return sales.value - expenses.value
            } // November

            return null
        }
    )

    const profitMargin11 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if(currentMonth === 11) {
                return sales.value - expenses.value
            } // December

            return null
        }
    )

    const setChartData = () => {
        const documentStyle = getComputedStyle(document.documentElement);

        return {
            labels: ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Profit",
                    backgroundColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    data: [profitMargin0.value, profitMargin1.value, profitMargin2.value, profitMargin3.value, profitMargin4.value,
                        profitMargin5.value, profitMargin6.value, profitMargin7.value, profitMargin8.value, profitMargin9.value,
                        profitMargin10.value, profitMargin11.value
                    ],
                    fill: false,
                    tension: 0.4
                },
            ]
        }
    }
    
    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue("--p-black-500");
        const textSecondaryColor = documentStyle.getPropertyValue("--p-text-muted-color");
        const surfaceBorder = documentStyle.getPropertyValue("--p-content-border-color")

        return {
            maintainAspectRatio: true,
            aspectRatio: 0,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textSecondaryColor,
                        font: {
                            weight: 700
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    },
                },
                y: {
                    ticks: {
                        color: textSecondaryColor
                    },
                    grid: {
                        color: "black",
                    }
                }
            }
        }
    }

</script>

<template>
    <div class="container-fluid">
        <div class="container py-3">
            <h4 class="text-center">Profit Margin</h4>
            <div>
                <Chart type="line" :data="chartData" :options="chartOptions"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>