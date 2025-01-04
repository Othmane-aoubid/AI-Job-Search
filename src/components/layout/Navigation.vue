<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthModal from '../auth/AuthModal.vue';

const showAuthModal = ref(false);
const isMobileMenuOpen = ref(false);
const router = useRouter();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-primary">
            AI Job Tools
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-700 hover:text-primary">Features</a>
          <a href="#tools" class="text-gray-700 hover:text-primary">Tools</a>
          <a href="#pricing" class="text-gray-700 hover:text-primary">Pricing</a>
          <button 
            @click="showAuthModal = true"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-primary"
          >
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen" 
      class="md:hidden bg-white border-t"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          href="#features"
          class="block px-3 py-2 text-gray-700 hover:text-primary"
          @click="isMobileMenuOpen = false"
        >
          Features
        </a>
        <a 
          href="#tools"
          class="block px-3 py-2 text-gray-700 hover:text-primary"
          @click="isMobileMenuOpen = false"
        >
          Tools
        </a>
        <a 
          href="#pricing"
          class="block px-3 py-2 text-gray-700 hover:text-primary"
          @click="isMobileMenuOpen = false"
        >
          Pricing
        </a>
        <button 
          @click="showAuthModal = true"
          class="w-full text-left px-3 py-2 text-primary hover:text-secondary"
        >
          Get Started
        </button>
      </div>
    </div>

    <!-- Auth Modal -->
    <AuthModal 
      v-if="showAuthModal" 
      @close="showAuthModal = false" 
    />
  </nav>
</template>