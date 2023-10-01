<template>
    <div class="chart-container">
        <Pie
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData">
        </Pie>
    </div>
</template>

<script>

import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, ArcElement);

export default {
    name: 'PieChart',
    components: { Pie },

    data() {
        return{
            chartData: {
                labels: ["Lazer", "Casa", "Viagem"],
                datasets: [
                    {
                        data: [50, 30, 30],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(56, 170, 236, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                // plugins: {
                //     tooltip: {
                //         title: false
                //     }
                // }
            }
        }
    }
}
</script>

<style scoped>
.chart-container {
  width: 500px;
}
</style>