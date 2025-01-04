<template>
    <div class="bg-white shadow-md rounded-lg p-6 mt-8">
      <!-- Cover Letter Header -->
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Cover Letter Generator</h2>
      
      <form @submit.prevent="generateCoverLetter">
        <!-- Job Title -->
        <div class="mb-4">
          <label for="jobTitle" class="block text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            v-model="formData.jobTitle"
            class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
            placeholder="Software Engineer"
            required
          />
        </div>
  
        <!-- Company Name -->
        <div class="mb-4">
          <label for="companyName" class="block text-sm font-medium text-gray-600">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            v-model="formData.companyName"
            class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
            placeholder="TechCorp"
            required
          />
        </div>
  
        <!-- Applicant Strengths -->
        <div class="mb-4">
          <label for="strengths" class="block text-sm font-medium text-gray-600">
            Your Key Strengths
          </label>
          <textarea
            id="strengths"
            v-model="formData.strengths"
            class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
            placeholder="e.g., expertise in Vue.js, strong problem-solving skills..."
            rows="3"
            required
          ></textarea>
        </div>
  
        <!-- Custom Message -->
        <div class="mb-4">
          <label for="customMessage" class="block text-sm font-medium text-gray-600">
            Custom Message (optional)
          </label>
          <textarea
            id="customMessage"
            v-model="formData.customMessage"
            class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300"
            placeholder="e.g., I admire your company's innovation in AI..."
            rows="3"
          ></textarea>
        </div>
  
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Generate Cover Letter
        </button>
      </form>
  
      <!-- Cover Letter Preview -->
      <div v-if="coverLetter" class="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 class="text-md font-bold text-gray-800 mb-2">Cover Letter Preview</h3>
        <p class="text-gray-700 whitespace-pre-line">{{ coverLetter }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          jobTitle: '',
          companyName: '',
          strengths: '',
          customMessage: '',
        },
        coverLetter: null,
      };
    },
    methods: {
      generateCoverLetter() {
        // Construct a cover letter based on form data
        const { jobTitle, companyName, strengths, customMessage } = this.formData;
  
        const coverLetterTemplate = `
  Dear Hiring Manager at ${companyName},
  
  I am writing to express my interest in the ${jobTitle} position at your esteemed company. With a proven track record of ${strengths}, I am confident in my ability to contribute meaningfully to your team.
  
  ${customMessage ? customMessage + '\n\n' : ''}
  Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with your organization's goals.
  
  Best regards,
  [Your Name]
  `;
  
        this.coverLetter = coverLetterTemplate;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles for the Cover Letter Generator */
  </style>
  