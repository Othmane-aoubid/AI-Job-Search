<script setup>
import { ref, computed } from 'vue';
import { useToolsStore } from '../stores/toolsStore';

const toolsStore = useToolsStore();
const selectedCategory = ref('all');
const priceRange = ref([0, 1000]);

const filteredTools = computed(() => {
  let tools = toolsStore.tools;
  
  if (selectedCategory.value !== 'all') {
    tools = toolsStore.getToolsByCategory(selectedCategory.value);
  }
  
  return toolsStore.getToolsByPriceRange(priceRange.value[0], priceRange.value[1]);
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Tool Comparison</h1>
    
    <!-- Filters -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="card">
        <h3 class="text-lg font-semibold mb-4">Category</h3>
        <select 
          v-model="selectedCategory"
          class="w-full p-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="resume">Resume Builders</option>
          <option value="cover-letter">Cover Letter Tools</option>
          <option value="job-platform">Job Platforms</option>
        </select>
      </div>
      
      <div class="card">
        <h3 class="text-lg font-semibold mb-4">Price Range</h3>
        <div class="flex items-center space-x-4">
          <input 
            type="range" 
            v-model="priceRange[0]" 
            min="0" 
            max="1000"
            class="w-full"
          >
          <span>${{ priceRange[0] }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <input 
            type="range" 
            v-model="priceRange[1]" 
            min="0" 
            max="1000"
            class="w-full"
          >
          <span>${{ priceRange[1] }}</span>
        </div>
      </div>
    </div>

    <!-- Comparison Table -->
    <div class="overflow-x-auto">
      <table class="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-3 text-left">Tool</th>
            <th class="px-6 py-3 text-left">Category</th>
            <th class="px-6 py-3 text-left">Price</th>
            <th class="px-6 py-3 text-left">Features</th>
            <th class="px-6 py-3 text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tool in filteredTools" :key="tool.id" class="border-t">
            <td class="px-6 py-4">{{ tool.name }}</td>
            <td class="px-6 py-4">{{ tool.category }}</td>
            <td class="px-6 py-4">${{ tool.price }}/mo</td>
            <td class="px-6 py-4">
              <ul class="list-disc list-inside">
                <li v-for="feature in tool.features" :key="feature">{{ feature }}</li>
              </ul>
            </td>
            <td class="px-6 py-4">{{ tool.rating }}/5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>