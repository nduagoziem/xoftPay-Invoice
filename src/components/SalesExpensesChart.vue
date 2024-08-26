<script setup>
    import Chart from 'primevue/chart';
    import { ref, onBeforeMount } from 'vue';

    onBeforeMount(
        () => {
            chartData.value = setChartData();
            chartOptions.value = setChartOptions();
        }
    )

    const chartData = ref();
    const chartOptions = ref();

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
                    data: [28, 48, 40, 19, 86, 85, 90, 55, 44, 23, 67, 90],
                },
                
                {
                    label: "Expenses",
                    backgroundColor: documentStyle.getPropertyValue("--p-black-500"),
                    borderColor: documentStyle.getPropertyValue("--p-black-500"),
                    data: [28, 48, 40, 19, 86, 27, 45, 55, 44, 23, 37, 9],
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