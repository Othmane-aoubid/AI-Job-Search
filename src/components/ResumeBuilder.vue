<template>
  <div class="min-h-screen bg-gray-100 p-4 md:p-8">
    <Resume />
  </div>
</template>

<script>
import Resume from "./resumeBuilder/Resume.vue";
export default {
  components: {
    Resume,
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
