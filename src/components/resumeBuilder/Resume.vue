<template>
  <div class="resume-builder">
    <template-gallery
      v-if="!isEditing"
      @template-selected="onTemplateSelected"
    />

    <ClassicTemplate
      v-if="selectedTemplate === 'ClassicTemplate' && !isEditing"
    />
    <ModernTemplate
      v-if="selectedTemplate === 'ModernTemplate' && !isEditing"
    />
    <CreativeTemplate
      v-if="selectedTemplate === 'CreativeTemplate' && !isEditing"
    />
    <CustomTemplate
      v-if="selectedTemplate === 'CustomTemplate' && !isEditing"
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
    <resume-editor v-if="isEditing" @sections-updated="onSectionsUpdated" :templateType="selectedTemplate" />
    <pdf-exporter v-if="formData" :targetElementId="'resume-preview'" />
  </div>
</template>

<script>
import TemplateGallery from "./TemplateGallery.vue";
import DynamicForm from "./DynamicForm.vue";
import ResumeEditor from "./ResumeEditor.vue";
import PdfExporter from "./PdfExporter.vue";

// Import Templates
import ClassicTemplate from "../templates/ClassicTemplate.vue";
import ModernTemplate from "../templates/ModernTemplate.vue";
import CreativeTemplate from "../templates/CreativeTemplate.vue";
import CustomTemplate from "../templates/CustomTemplate.vue";

import { useTemplateStore } from "../../stores/templateStore";

export default {
  name: "Resume",
  components: {
    TemplateGallery,
    DynamicForm,
    ResumeEditor,
    PdfExporter,
    ClassicTemplate,
    ModernTemplate,
    CreativeTemplate,
    CustomTemplate,
  },
  data() {
    return {
      selectedTemplate: null,
      formSchema: [],
      formData: null,
      isEditing: false,
    };
  },
  methods: {
    onTemplateSelected(template) {
      console.log(
        "this is template frol template galary: template-> ",
        template.name
      );

      // Map template names to identifiers
      const templateMap = {
        "Classic Template": "ClassicTemplate",
        "Modern Template": "ModernTemplate",
        "Creative Template": "CreativeTemplate",
        "Custom Template": "CustomTemplate",
      };

      // Set the selected template identifier based on the name
      this.selectedTemplate = templateMap[template.name] || null;

    //   if (this.selectedTemplate) {
    //     this.formSchema = this.generateFormSchema();
    //   } else {
    //     console.error("Selected template not found");
    //   }
    },
    onFormSubmitted(data) {
      this.formData = data;
      this.isEditing = false;
    },
    onSectionsUpdated(sections) {},
    startEditing() {
      this.isEditing = true;
      const templateStore = useTemplateStore();
      templateStore.setTemplate(this.selectedTemplate);
    },
    generateFormSchema() {
      return [
        // Define dynamic form schema
      ];
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
