<template>
  <div class="template-gallery">
    <h2 class="text-2xl font-bold mb-4">Select a Template</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="template in templates"
        :key="template.id"
        class="template-card"
      >
        <!-- <img
          :src="template.image"
          :alt="template.name"
          class="w-full h-48 object-cover mb-2"
        /> -->
        <h3 class="text-lg font-semibold">{{ template.name }}</h3>
        <button
          @click="selectTemplate(template)"
          class="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        >
          Select
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import classicTemplateImage from "./../assets/vue.svg";
// import modernTemplateImage from "./../assets/vue.svg";
// import creativeTemplateImage from "./../assets/vue.svg";

// Import Templates
import ClassicTemplate from "../templates/ClassicTemplate.vue";
import ModernTemplate from "../templates/ModernTemplate.vue";
import CreativeTemplate from "../templates/CreativeTemplate.vue";
import CustomTemplate from "../templates/CustomTemplate.vue";

export default {
  name: "TemplateGallery",
  data() {
    return {
      templates: [
        {
          id: 1,
          name: "Classic Template",
          component: ClassicTemplate,
        },
        {
          id: 2,
          name: "Modern Template",
          component: ModernTemplate,
        },
        {
          id: 3,
          name: "Creative Template",
          component: CreativeTemplate,
        },
        {
          id: 4,
          name: "Custom Template", // Replace with a custom template image
          component: CustomTemplate,
        },
      ],
    };
  },
  methods: {
    selectTemplate(template) {
      // Emit the selected template's component to the parent
      this.$emit("template-selected", template);
    },
  },
};
</script>

<style scoped>
.template-gallery {
  padding: 20px;
}
.template-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  background-color: #ffffff;
  text-align: center;
}
.template-card:hover {
  transform: scale(1.05);
}
img {
  border-bottom: 1px solid #e5e7eb;
}
</style>
