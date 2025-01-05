<template>
  <div class="dynamic-form">
    <h2 class="text-2xl font-bold mb-4">Customize Your Resume</h2>
    <form @submit.prevent="submitForm">
      <div v-for="field in formSchema" :key="field.name" class="mb-4">
        <label
          :for="field.name"
          class="block text-sm font-medium text-gray-700"
        >
          {{ field.label }}
        </label>
        <input
          v-if="field.type === 'text'"
          :id="field.name"
          v-model="formData[field.name]"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          :placeholder="field.placeholder"
        />
        <textarea
          v-else-if="field.type === 'textarea'"
          :id="field.name"
          v-model="formData[field.name]"
          rows="3"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          :placeholder="field.placeholder"
        ></textarea>
        <span v-if="errors[field.name]" class="text-red-500 text-sm">{{
          errors[field.name]
        }}</span>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DynamicForm",
  props: {
    formSchema: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formData: {},
      errors: {},
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      this.formSchema.forEach((field) => {
        if (!this.formData[field.name]) {
          this.errors[field.name] = `${field.label} is required.`;
        }
      });
      if (Object.keys(this.errors).length === 0) {
        this.$emit("form-submitted", this.formData);
      }
    },
  },
};
</script>

<style scoped>
.dynamic-form {
  padding: 20px;
}
</style>
