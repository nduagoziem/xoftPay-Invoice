<script setup>
    import Chart from 'primevue/chart';
    import { ref, onBeforeMount, computed} from 'vue';
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
    const invoiceStore = useInvoiceStore();
    const expenseStore = useExpenseStore();
    
    // Sales Data from January To December (sales0 - sales11)
    const sales0 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 0) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // January

            return null
        }
    )
    const sales1 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 1) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // February

            return null
        }
    )
    const sales2 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 2) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // March

            return null
        }
    )
    const sales3 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 3) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // April

            return null
        }
    )
    const sales4 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 4) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // May

            return null
        }
    )
    const sales5 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 5) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // June

            return null
        }
    )
    const sales6 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 6) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // July

            return null
        }
    )

    const sales7 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 7) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // August

            return null
        }
    )

    const sales8 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 8) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                    return acc + arg.price
                    }, 0
                )
            } // September

            return null
        }
    )

    const sales9 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 9) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // October

            return null
        }
    )

    const sales10 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 10) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // November

            return null
        }
    )

    const sales11 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 11) {
                return invoiceStore.invoices.reduce(
                    (acc, arg) => {
                        return acc + arg.price
                    }, 0
                )
            } // December

            return null
        }
    )

    //expensesData from January - December (expenses0 - expenses11) 
    const expenses0 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 0) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // January

            return null
        }
    )

    const expenses1 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 1) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // February

            return null
        }
    )

    const expenses2 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 2) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // March

            return null
        }
    )

    const expenses3 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 3) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // April

            return null
        }
    )

    const expenses4 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 4) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // May

            return null
        }
    )

    const expenses5 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 5) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // June

            return null
        }
    )

    const expenses6 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 6) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // July

            return null
        }
    )

    const expenses7 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 7) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // August

            return null
        }
    )

    const expenses8 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 8) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // September

            return null
        }
    )

    const expenses9 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 9) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // October

            return null
        }
    )

    const expenses10 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 10) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
            } // November

            return null
        }
    )

    const expenses11 = computed(
        () => {
            const currentMonth = new Date().getMonth()

            if (currentMonth === 11) {
                return expenseStore.expenses.reduce(
                    (acc, arg) => {
                        return acc + arg.expensePrice
                    }, 0
                )
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
                    label: "Sales",
                    backgroundColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    data: [sales0.value, sales1.value, sales2.value, sales3.value, sales4.value, sales5.value, sales6.value,
                        sales7.value, sales8.value, sales9.value, sales10.value, sales11.value
                    ],
                },
                
                {
                    label: "Expenses",
                    backgroundColor: documentStyle.getPropertyValue("--p-black-500"),
                    borderColor: documentStyle.getPropertyValue("--p-black-500"),
                    data: [expenses0.value, expenses1.value, expenses2.value, expenses3.value, expenses4.value, expenses5.value, expenses6.value,
                        expenses7.value, expenses8.value, expenses9.value, expenses10.value, expenses11.value
                    ],
                },
            ]
        }
    }

    const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue("--p-black-500");
        const textSecondaryColor = documentStyle.getPropertyValue("--p-text-muted-color");

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
                        display: true,
                        drawBorder: false
                    },
                },
                y: {
                    ticks: {
                        color: textSecondaryColor
                    },
                    grid: {
                        color: "black",
                        drawBorder: false
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="container-fluid mb-3">
        <div class="container">
            <h4 class="text-center py-3">Sales & Expenses</h4>
            <div>
                <Chart type="bar" :data="chartData" :options="chartOptions" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>