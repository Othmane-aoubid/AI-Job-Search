<template>
  <div class="min-h-screen bg-gray-50">
    <template v-if="$route.meta.requiresAuth">
      <!-- Main wrapper with sidebar handling -->
      <div class="flex min-h-screen">
        <!-- Sidebar -->
        <Sidebar :isOpen="showSidebar" :toggleSidebar="toggleSidebar" />

        <!-- Toggle button for larger screens -->
        <button
          @click="toggleSidebar"
          class="hidden lg:block fixed top-4 left-4 z-40 bg-gray-800 text-white p-2 rounded-md shadow-lg"
          aria-label="Toggle sidebar (Desktop)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Toggle button for mobile -->
        <button
          @click="toggleSidebar"
          class="fixed top-2 left-2 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-md"
          aria-label="Toggle sidebar (Mobile)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Main content -->
        <div class="flex-1 min-w-0">
          <!-- Top Navigation -->
          <nav class="bg-white shadow-md">
            <div
              class="flex items-center justify-between px-4 py-2 md:px-6 lg:px-8"
            >
              <!-- Left: Search bar -->
              <div class="flex items-center flex-1">
                <div class="relative w-full max-w-sm">
                  <input
                    type="text"
                    class="w-full border border-gray-300 rounded-lg p-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute top-2.5 left-3 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l4 4"
                    />
                  </svg>
                </div>
              </div>

              <!-- Right: Notifications and Profile -->
              <div class="flex items-center space-x-4">
                <!-- Notifications -->
                <button class="relative text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                    />
                  </svg>
                  <span
                    class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"
                  ></span>
                </button>

                <!-- Profile Dropdown -->
                <div class="relative">
                  <button
                    @click="toggleProfileMenu"
                    class="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
                  >
                    <img
                      src="https://via.placeholder.com/32"
                      alt="Profile"
                      class="h-8 w-8 rounded-full"
                    />
                    <span class="hidden md:block text-sm font-medium">
                      John Doe
                    </span>
                  </button>
                  <div
                    v-if="showProfileMenu"
                    class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <button
                      @click="handleLogout"
                      class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div
            :class="['p-4 transition-all duration-300 ease-in-out', 'lg:pl-4']"
          >
            <router-view />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "./components/dashboard/Sidebar.vue";

const route = useRoute();
const showSidebar = ref(false);
const showProfileMenu = ref(false); // Track profile menu visibility

// Function to toggle the sidebar visibility
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
  console.log(`Sidebar toggled: ${showSidebar.value ? "open" : "closed"}`); // Debugging
};

// Function to toggle the profile menu visibility
const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};
</script>
