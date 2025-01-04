<script setup>
import { ref } from 'vue';
import Navigation from '../components/layout/Navigation.vue';
import AuthModal from '../components/auth/AuthModal.vue';

const showAuthModal = ref(false);
</script>

<template>
  <div class="min-h-screen">
    <Navigation @show-auth="showAuthModal = true" />
    
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect AI Job Tools</h1>
            <p class="text-xl mb-8">Compare and analyze the best AI-powered job search tools</p>
            <button @click="showAuthModal = true" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="card text-center">
              <div class="text-primary text-4xl mb-4">📊</div>
              <h3 class="text-xl font-semibold mb-2">Compare Tools</h3>
              <p class="text-gray-600">Easy comparison of features and pricing</p>
            </div>
            <div class="card text-center">
              <div class="text-primary text-4xl mb-4">📈</div>
              <h3 class="text-xl font-semibold mb-2">Analytics</h3>
              <p class="text-gray-600">Detailed insights and trends</p>
            </div>
            <div class="card text-center">
              <div class="text-primary text-4xl mb-4">💡</div>
              <h3 class="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p class="text-gray-600">AI-powered tool suggestions</p>
            </div>
            <div class="card text-center">
              <div class="text-primary text-4xl mb-4">🔒</div>
              <h3 class="text-xl font-semibold mb-2">Secure</h3>
              <p class="text-gray-600">Your data is safe with us</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Section -->
      <section id="tools" class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Popular Tools</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card">
              <h3 class="text-xl font-semibold mb-4">Resume Builders</h3>
              <ul class="space-y-2">
                <li>✓ AI-powered content suggestions</li>
                <li>✓ Professional templates</li>
                <li>✓ ATS optimization</li>
              </ul>
            </div>
            <div class="card">
              <h3 class="text-xl font-semibold mb-4">Cover Letters</h3>
              <ul class="space-y-2">
                <li>✓ Customizable templates</li>
                <li>✓ Industry-specific content</li>
                <li>✓ Quick generation</li>
              </ul>
            </div>
            <div class="card">
              <h3 class="text-xl font-semibold mb-4">Job Platforms</h3>
              <ul class="space-y-2">
                <li>✓ Smart job matching</li>
                <li>✓ Application tracking</li>
                <li>✓ Career insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card text-center">
              <h3 class="text-xl font-bold mb-4">Basic</h3>
              <p class="text-4xl font-bold mb-4">Free</p>
              <ul class="space-y-2 mb-6">
                <li>Basic tool comparisons</li>
                <li>Limited analytics</li>
                <li>Community support</li>
              </ul>
              <button @click="showAuthModal = true" class="btn btn-primary">Get Started</button>
            </div>
            <div class="card text-center border-primary">
              <h3 class="text-xl font-bold mb-4">Pro</h3>
              <p class="text-4xl font-bold mb-4">$9/mo</p>
              <ul class="space-y-2 mb-6">
                <li>Advanced comparisons</li>
                <li>Full analytics</li>
                <li>Priority support</li>
              </ul>
              <button @click="showAuthModal = true" class="btn btn-primary">Get Started</button>
            </div>
            <div class="card text-center">
              <h3 class="text-xl font-bold mb-4">Enterprise</h3>
              <p class="text-4xl font-bold mb-4">Custom</p>
              <ul class="space-y-2 mb-6">
                <li>Custom solutions</li>
                <li>Dedicated support</li>
                <li>API access</li>
              </ul>
              <button @click="showAuthModal = true" class="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 class="font-semibold mb-4">About Us</h4>
              <p class="text-gray-400">Helping job seekers find the best AI tools</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#features">Features</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Legal</h4>
              <ul class="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Connect</h4>
              <ul class="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <!-- Auth Modal -->
    <AuthModal v-if="showAuthModal" @close="showAuthModal = false" />
  </div>
</template>