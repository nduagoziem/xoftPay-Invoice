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
                    label: "Profit",
                    backgroundColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
                    data: [100, 780, 40, 59, 67, 851, 907, 513, 404, 2009, 67, 1001],
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