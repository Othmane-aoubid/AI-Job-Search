<template>
  <div class="resume-builder">
    <template-gallery @template-selected="onTemplateSelected" />
    <live-preview
      v-if="selectedTemplate && !isEditing"
      :selectedTemplate="selectedTemplate"
      :resumeData="resumeData"
    />
    <button
      v-if="selectedTemplate && !isEditing"
      @click="startEditing"
      class="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Edit
    </button>
    <dynamic-form
      v-if="isEditing"
      :formSchema="formSchema"
      @form-submitted="onFormSubmitted"
    />
    <resume-editor v-if="isEditing" @sections-updated="onSectionsUpdated" />
    <pdf-exporter v-if="formData" :targetElementId="'resume-preview'" />
  </div>
</template>

<script>
import TemplateGallery from "./TemplateGallery.vue";
import DynamicForm from "./DynamicForm.vue";
import LivePreview from "./LivePreview.vue";
import ResumeEditor from "./ResumeEditor.vue";
import PdfExporter from "./PdfExporter.vue";

export default {
  name: "Resume",
  components: {
    TemplateGallery,
    DynamicForm,
    LivePreview,
    ResumeEditor,
    PdfExporter,
  },
  data() {
    return {
      selectedTemplate: null,
      formSchema: [],
      formData: null,
      resumeData: [],
      isEditing: false,
    };
  },
  methods: {
    onTemplateSelected(template) {
      this.selectedTemplate = template;
      this.formSchema = this.generateFormSchema(template);
      this.resumeData = this.generateMockData(template);
    },
    onFormSubmitted(data) {
      this.formData = data;
      this.resumeData = this.generateResumeData(data);
      this.isEditing = false;
    },
    onSectionsUpdated(sections) {
      this.resumeData = this.updateResumeSections(sections);
    },
    startEditing() {
      this.isEditing = true;
    },
    generateFormSchema(template) {
      // Generate form schema based on the selected template
      return [
        {
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Enter your name",
        },
        {
          name: "title",
          label: "Title",
          type: "text",
          placeholder: "Enter your job title",
        },
        // Add more fields based on the template
      ];
    },
    generateMockData(template) {
      // Generate mock data for the selected template
      return [
        {
          name: "Profile",
          label: "Profile",
          items: [
            { id: 1, type: "text", value: "John Doe" },
            { id: 2, type: "text", value: "Software Engineer" },
          ],
        },
        // Add more sections with mock data
      ];
    },
    generateResumeData(data) {
      // Convert form data to resume data format
      return [
        {
          name: "Profile",
          label: "Profile",
          items: [
            { id: 1, type: "text", value: data.name },
            { id: 2, type: "text", value: data.title },
          ],
        },
        // Add more sections based on the form data
      ];
    },
    updateResumeSections(sections) {
      // Update resume data based on the reordered sections
      return sections.map((section) => ({
        ...section,
        items:
          this.resumeData.find((s) => s.name === section.label)?.items || [],
      }));
    },
  },
};
</script>

<style scoped>
.resume-builder {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
