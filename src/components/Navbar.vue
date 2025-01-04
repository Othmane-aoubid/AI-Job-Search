<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex">
          <router-link to="/" class="flex items-center">
            <span class="text-xl font-bold text-primary">AI Job Tools</span>
          </router-link>
        </div>
        
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-primary">Dashboard</router-link>
          <router-link to="/tools" class="text-gray-700 hover:text-primary">Tools</router-link>
          <router-link to="/analytics" class="text-gray-700 hover:text-primary">Analytics</router-link>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="block px-3 py-2 text-gray-700 hover:text-primary">Dashboard</router-link>
        <router-link to="/tools" class="block px-3 py-2 text-gray-700 hover:text-primary">Tools</router-link>
        <router-link to="/analytics" class="block px-3 py-2 text-gray-700 hover:text-primary">Analytics</router-link>
      </div>
    </div>
  </nav>
</template>