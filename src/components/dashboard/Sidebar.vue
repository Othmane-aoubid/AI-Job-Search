<template>
  <div class="relative h-screen">
    <!-- Overlay -->
    <div
      v-if="isOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[ 
        'fixed top-0 left-0 z-30 h-screen w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0 lg:static lg:w-64'
      ]"
    >
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">My App</h1>
        <nav>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/dashboard"
                class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link
                to="/profile"
                class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Profile
              </router-link>
            </li>
            <li>
              <router-link
                to="/resume-builder"
                class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Resume Builder
              </router-link>
            </li>
            <li>
              <router-link
                to="/cover-letter-generator"
                class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Cover Letter Generator
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="absolute bottom-0 w-full p-4">
        <button
          @click="handleLogout"
          class="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '../../composables/useAuth';

// Props passed from the parent
defineProps({
  isOpen: Boolean,
  toggleSidebar: Function,
});

const router = useRouter();
const { logout } = useAuth();

async function handleLogout() {
  try {
    await logout();
    router.push('/');
  } catch (err) {
    console.error('Logout error:', err);
  }
}
</script>

