<template>
  <div class="resume-editor">
    <h2 class="text-2xl font-bold mb-4">Edit Your Resume</h2>
    <draggable v-model="sections" class="drag-area" @end="onDragEnd">
      <div v-for="section in sections" :key="section.id" class="section-item">
        <h3 class="text-lg font-semibold">{{ section.label }}</h3>
        <button @click="removeSection(section.id)" class="text-red-500">
          Remove
        </button>
      </div>
    </draggable>
    <button
      @click="addSection"
      class="mt-4 bg-green-500 text-white py-2 px-4 rounded"
    >
      Add Section
    </button>
  </div>
</template>

<script>
import draggable from "vue-draggable";

export default {
  name: "ResumeEditor",
  components: {
    draggable,
  },
  data() {
    return {
      sections: [
        { id: 1, label: "Profile" },
        { id: 2, label: "Education" },
        { id: 3, label: "Experience" },
        { id: 4, label: "Skills" },
      ],
    };
  },
  methods: {
    onDragEnd() {
      this.$emit("sections-updated", this.sections);
    },
    addSection() {
      const newId = this.sections.length + 1;
      this.sections.push({ id: newId, label: `New Section ${newId}` });
    },
    removeSection(id) {
      this.sections = this.sections.filter((section) => section.id !== id);
    },
  },
};
</script>

<style scoped>
.resume-editor {
  padding: 20px;
}
.drag-area {
  border: 1px dashed #e5e7eb;
  padding: 10px;
  border-radius: 8px;
}
.section-item {
  background-color: #f9fafb;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
