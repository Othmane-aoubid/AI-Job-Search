<script setup>
import { onMounted, ref } from 'vue';
import { useToolsStore } from '../stores/toolsStore';

const toolsStore = useToolsStore();
const searchQuery = ref('');

onMounted(() => {
  toolsStore.fetchTools();
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">AI Job Search Tools Dashboard</h1>
    
    <!-- Search Bar -->
    <div class="mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search tools..."
        class="w-full md:w-96 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
      >
    </div>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="card">
        <h3 class="text-xl font-semibold mb-2">Resume Builders</h3>
        <p class="text-gray-600">AI-powered resume creation tools</p>
      </div>
      <div class="card">
        <h3 class="text-xl font-semibold mb-2">Cover Letter Generators</h3>
        <p class="text-gray-600">Automated cover letter writing assistance</p>
      </div>
      <div class="card">
        <h3 class="text-xl font-semibold mb-2">Job Platforms</h3>
        <p class="text-gray-600">AI-enhanced job search platforms</p>
      </div>
    </div>

    <!-- Tools List -->
    <div v-if="toolsStore.loading" class="text-center">
      <p>Loading tools...</p>
    </div>
    <div v-else-if="toolsStore.error" class="text-red-500 text-center">
      {{ toolsStore.error }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="tool in toolsStore.tools" :key="tool.id" class="card">
        <h3 class="text-xl font-semibold mb-2">{{ tool.name }}</h3>
        <p class="text-gray-600 mb-4">{{ tool.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-primary font-semibold">${{ tool.price }}/mo</span>
          <a :href="tool.url" target="_blank" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</template>