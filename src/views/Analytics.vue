<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useToolsStore } from '../stores/toolsStore';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const toolsStore = useToolsStore();
const chartData = ref({
  labels: ['Resume Builders', 'Cover Letter Tools', 'Job Platforms'],
  datasets: [{
    label: 'Average Price',
    data: [0, 0, 0],
    backgroundColor: '#646cff'
  }]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Average Tool Prices by Category'
    }
  }
};

onMounted(async () => {
  await toolsStore.fetchTools();
  updateChartData();
});

function updateChartData() {
  const categories = ['resume', 'cover-letter', 'job-platform'];
  const averagePrices = categories.map(category => {
    const tools = toolsStore.getToolsByCategory(category);
    if (tools.length === 0) return 0;
    const sum = tools.reduce((acc, tool) => acc + tool.price, 0);
    return Math.round(sum / tools.length);
  });

  chartData.value.datasets[0].data = averagePrices;
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Analytics</h1>
    
    <!-- Price Analysis -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-4">Price Analysis</h2>
      <div class="h-[400px]">
        <Bar 
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold mb-2">Total Tools</h3>
        <p class="text-3xl font-bold text-primary">{{ toolsStore.tools.length }}</p>
      </div>
      
      <div class="card">
        <h3 class="text-lg font-semibold mb-2">Average Price</h3>
        <p class="text-3xl font-bold text-primary">
          ${{ Math.round(toolsStore.tools.reduce((acc, tool) => acc + tool.price, 0) / toolsStore.tools.length) }}
        </p>
      </div>
      
      <div class="card">
        <h3 class="text-lg font-semibold mb-2">Most Popular Category</h3>
        <p class="text-3xl font-bold text-primary">Resume Builders</p>
      </div>
    </div>
  </div>
</template>