<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../../composables/useAuth';

const props = defineProps(['onClose']);
const emit = defineEmits(['close']);

const isLogin = ref(true);
const email = ref('');
const password = ref('');
const router = useRouter();
const { error, isPending, login, register } = useAuth();

async function handleSubmit() {
  try {
    if (isLogin.value) {
      await login(email.value, password.value);
    } else {
      await register(email.value, password.value);
    }
    router.push('/dashboard');
    emit('close');
  } catch (e) {
    console.error('Authentication error:', e);
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg p-8 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6">{{ isLogin ? 'Login' : 'Register' }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            v-model="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            required
          >
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

        <button 
          type="submit"
          :disabled="isPending"
          class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button 
          @click="isLogin = !isLogin"
          class="text-primary hover:text-secondary"
        >
          {{ isLogin ? 'Register' : 'Login' }}
        </button>
      </p>

      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    </div>
  </div>
</template>