<template>
  <div class="min-h-screen bg-gray-100 p-4 md:p-8">
    <!-- Header -->
    <header class="text-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Resume Builder</h1>
      <p class="text-gray-600">Create and customize your professional resume</p>
    </header>

    <!-- Form -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <!-- Personal Info -->
      <h2 class="text-lg font-semibold text-gray-700 mb-4">
        Personal Information
      </h2>
      <form @submit.prevent="generateResume">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              v-model="formData.phone"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="+123 456 7890"
              required
            />
          </div>
        </div>

        <!-- Experience -->
        <h2 class="text-lg font-semibold text-gray-700 mt-6 mb-4">
          Work Experience
        </h2>
        <div
          v-for="(experience, index) in formData.experiences"
          :key="index"
          class="space-y-4"
        >
          <div>
            <label
              :for="'experience-title-' + index"
              class="block text-sm font-medium text-gray-600"
            >
              Job Title
            </label>
            <input
              :id="'experience-title-' + index"
              v-model="experience.title"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="Software Engineer"
              required
            />
          </div>
          <div>
            <label
              :for="'experience-company-' + index"
              class="block text-sm font-medium text-gray-600"
            >
              Company
            </label>
            <input
              :id="'experience-company-' + index"
              v-model="experience.company"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="TechCorp"
              required
            />
          </div>
          <div>
            <label
              :for="'experience-duration-' + index"
              class="block text-sm font-medium text-gray-600"
            >
              Duration
            </label>
            <input
              :id="'experience-duration-' + index"
              v-model="experience.duration"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="Jan 2020 - Dec 2022"
              required
            />
          </div>
        </div>
        <button
          type="button"
          @click="addExperience"
          class="mt-2 text-indigo-600 hover:text-indigo-800 text-sm"
        >
          + Add Experience
        </button>

        <!-- Skills -->
        <h2 class="text-lg font-semibold text-gray-700 mt-6 mb-4">Skills</h2>
        <div
          v-for="(skill, index) in formData.skills"
          :key="index"
          class="space-y-2"
        >
          <div>
            <input
              type="text"
              v-model="formData.skills[index]"
              class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
              placeholder="JavaScript, Vue.js"
              required
            />
          </div>
        </div>
        <button
          type="button"
          @click="addSkill"
          class="mt-2 text-indigo-600 hover:text-indigo-800 text-sm"
        >
          + Add Skill
        </button>

        <!-- Submit Button -->
        <button
          type="submit"
          class="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Generate Resume
        </button>
      </form>
    </div>

    <!-- Resume Preview -->
    <div v-if="resumePreview" class="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Resume Preview</h2>
      <p><strong>Name:</strong> {{ resumePreview.name }}</p>
      <p><strong>Email:</strong> {{ resumePreview.email }}</p>
      <p><strong>Phone:</strong> {{ resumePreview.phone }}</p>
      <h3 class="text-md font-semibold text-gray-700 mt-4">Experience</h3>
      <ul class="list-disc ml-5">
        <li
          v-for="(experience, index) in resumePreview.experiences"
          :key="index"
        >
          {{ experience.title }} at {{ experience.company }} ({{
            experience.duration
          }})
        </li>
      </ul>
      <h3 class="text-md font-semibold text-gray-700 mt-4">Skills</h3>
      <ul class="list-disc ml-5">
        <li v-for="(skill, index) in resumePreview.skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        experiences: [{ title: "", company: "", duration: "" }],
        skills: [""],
      },
      resumePreview: null,
    };
  },
  methods: {
    addExperience() {
      this.formData.experiences.push({ title: "", company: "", duration: "" });
    },
    addSkill() {
      this.formData.skills.push("");
    },
    generateResume() {
      this.resumePreview = { ...this.formData };
    },
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
