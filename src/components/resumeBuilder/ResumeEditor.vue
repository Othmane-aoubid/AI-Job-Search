<template>
  <div class="resume-editor-layout">
    <!-- Left Panel -->
    <div class="side-panel">
      <button class="side-button" @click="openSectionModal">Add section</button>
      <button class="side-button">Rearrange</button>
      <button class="side-button" @click="openTemplateModal">Templates</button>
      <button class="side-button">Design & Font</button>
      <button class="side-button">Improve text</button>
      <button class="side-button">Check</button>
      <button class="side-button">Download</button>
      <button class="side-button">Share</button>
      <button class="side-button">History</button>
    </div>

    <!-- Main Content -->
    <div class="resume-content">
      <ClassicTemplate v-if="selectTemplate == 'ClassicTemplate'" />
      <ModernTemplate v-if="selectTemplate == 'ModernTemplate'" />
      <CreativeTemplate v-if="selectTemplate == 'CreativeTemplate'" />
      <CustomTemplate v-if="selectTemplate == 'CustomTemplate'" />
      <!-- <h1 class="resume-title">YOUR NAME</h1>
      <p class="subtitle">The role you are applying for?</p>
      <div class="contact-info">
        <span>Phone | Email | LinkedIn/Portfolio | Location</span>
      </div>

       Summary Section 
      <div class="resume-section">
        <h2 class="section-title">SUMMARY</h2>
        <textarea
          placeholder="Briefly explain why you're a great fit for the role..."
        ></textarea>
      </div>

       Experience Section 
      <div class="resume-section">
        <h2 class="section-title">EXPERIENCE</h2>
        <div
          class="experience-item"
          v-for="experience in experiences"
          :key="experience.id"
        >
          <input type="text" placeholder="Title" v-model="experience.title" />
          <input
            type="text"
            placeholder="Company Name"
            v-model="experience.company"
          />
          <textarea
            placeholder="Highlight your accomplishments..."
            v-model="experience.details"
          ></textarea>
        </div>
        <button @click="addExperience" class="add-button">
          Add Experience
        </button>
      </div>

       Education Section 
      <div class="resume-section">
        <h2 class="section-title">EDUCATION</h2>
        <div
          class="education-item"
          v-for="education in educationList"
          :key="education.id"
        >
          <input
            type="text"
            placeholder="Degree and Field of Study"
            v-model="education.degree"
          />
          <input
            type="text"
            placeholder="School or University"
            v-model="education.school"
          />
        </div>
        <button @click="addEducation" class="add-button">Add Education</button>
      </div>

       Key Achievements Section 
      <div class="resume-section">
        <h2 class="section-title">KEY ACHIEVEMENTS</h2>
        <textarea
          placeholder="Describe what you did and the impact it had..."
          v-model="keyAchievements"
        ></textarea>
      </div> -->
    </div>

    <!-- Popup Modal for Adding Sections -->
    <div v-if="showSectionModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="modal-title">Add a New Section</h2>
        <p>Click on a section to add it to your resume</p>
        <div class="modal-grid">
          <div
            class="modal-card"
            v-for="section in availableSections"
            :key="section.id"
            @click="addSection(section)"
          >
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
          </div>
        </div>
        <button @click="closeModal" class="modal-close">Close</button>
      </div>
    </div>

    <!-- Popup Modal for Templates -->
    <div
      v-if="showTemplateModal"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <h2 class="modal-title">Select a Template</h2>
        <div class="modal-grid">
          <div
            class="modal-card"
            v-for="template in templates"
            :key="template.id"
            @click="selectTemplate(template)"
          >
            <img
              :src="template.image"
              alt="Template preview"
              class="template-preview"
            />
            <h3>{{ template.name }}</h3>
          </div>
        </div>
        <button @click="closeModal" class="modal-close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicTemplate from "../templates/ClassicTemplate.vue";
import ModernTemplate from "../templates/ModernTemplate.vue";
import CreativeTemplate from "../templates/CreativeTemplate.vue";
import CustomTemplate from "../templates/CustomTemplate.vue";

import { useTemplateStore } from "../../stores/templateStore";

export default {
  props: {
    templateType: {
      type: String,
      required: true, // Optional if `templateType` might not always be provided
    },
  },
  components: {
    ClassicTemplate,
    ModernTemplate,
    CreativeTemplate,
    CustomTemplate,
  },
  data() {
    return {
      experiences: [{ id: 1, title: "", company: "", details: "" }],
      educationList: [{ id: 1, degree: "", school: "" }],
      keyAchievements: "",
      showSectionModal: false,
      showTemplateModal: false,
      availableSections: [
        {
          id: 1,
          title: "Custom Title",
          description: "Add a custom section with a title of your choice.",
        },
        {
          id: 2,
          title: "Projects",
          description: "Showcase your projects and accomplishments.",
        },
        {
          id: 3,
          title: "Strengths",
          description: "Highlight your key strengths and traits.",
        },
        {
          id: 4,
          title: "Volunteering",
          description: "List your volunteering experience.",
        },
        {
          id: 5,
          title: "Industry Expertise",
          description: "Display your expertise in specific fields.",
        },
        {
          id: 6,
          title: "My Time",
          description: "Showcase your hobbies or personal achievements.",
        },
      ],
      templates: [
        {
          id: 1,
          name: "Classic",
          component: ClassicTemplate,
          image: "classic-template-preview.png",
        },
        {
          id: 2,
          name: "Modern",
          component: ModernTemplate,
          image: "modern-template-preview.png",
        },
        {
          id: 3,
          name: "Creative",
          component: CreativeTemplate,
          image: "creative-template-preview.png",
        },
        {
          id: 4,
          name: "Custom",
          component: CustomTemplate,
          image: "custom-template-preview.png",
        },
      ],
      ClassicTemplate: false,
      ModernTemplate: false,
      CreativeTemplate: false,
      CustomTemplate: false,
      selectTemplate: this.templateType || null,
    };
  },
  computed: {
    // selectedTemplate() {
    //   const templateStore = useTemplateStore();
    //   this.selectTemplate = templateStore;
    //   console.log("templatestore ", templateStore);
    //   return templateStore.selectedTemplate;
    // },
  },
  methods: {
    addExperience() {
      const newId = this.experiences.length + 1;
      this.experiences.push({ id: newId, title: "", company: "", details: "" });
    },
    addEducation() {
      const newId = this.educationList.length + 1;
      this.educationList.push({ id: newId, degree: "", school: "" });
    },
    openSectionModal() {
      this.showSectionModal = true;
    },
    openTemplateModal() {
      this.showTemplateModal = true;
    },
    closeModal() {
      this.showSectionModal = false;
      this.showTemplateModal = false;
    },
    addSection(section) {
      console.log(`Added section: ${section.title}`);
      this.closeModal();
    },
    selectTemplate(template) {
      console.log(`Selected template: ${template.name}`);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.resume-editor-layout {
  display: flex;
  font-family: Arial, sans-serif;
  padding: 20px;
}
.side-panel {
  width: 200px;
  background: #f9fafb;
  padding: 10px;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.side-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.side-button:hover {
  background-color: #45a049;
}
.resume-content {
  flex: 1;
  padding: 20px;
}
.resume-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.subtitle {
  font-size: 16px;
  margin-bottom: 20px;
}
.contact-info {
  font-size: 14px;
  margin-bottom: 20px;
}
.resume-section {
  margin-bottom: 20px;
}
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
textarea,
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}
textarea {
  resize: vertical;
}
.add-button {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-button:hover {
  background-color: #0056b3;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
}
.modal-title {
  font-size: 20px;
  margin-bottom: 10px;
}
.modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.modal-card {
  background: #f9fafb;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}
.modal-card:hover {
  background: #e5e7eb;
}
.modal-close {
  background-color: #dc3545;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}
.modal-close:hover {
  background-color: #b02a37;
}
.template-preview {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
