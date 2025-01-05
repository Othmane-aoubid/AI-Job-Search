<template>
  <div class="live-preview">
    <h2 class="text-2xl font-bold mb-4">Live Preview</h2>
    <div class="resume-preview">
      <div v-if="selectedTemplate.id === 1" class="classic-template">
        <h1 class="text-3xl font-bold">{{ mockData.name }}</h1>
        <h2 class="text-xl">{{ mockData.title }}</h2>
        <section>
          <h3 class="text-lg font-semibold">Profile</h3>
          <p>{{ mockData.profile }}</p>
        </section>
        <section>
          <h3 class="text-lg font-semibold">Education</h3>
          <ul>
            <li v-for="edu in mockData.education" :key="edu.id">
              <strong>{{ edu.degree }}</strong> at {{ edu.institution }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold">Experience</h3>
          <ul>
            <li v-for="exp in mockData.experience" :key="exp.id">
              <strong>{{ exp.position }}</strong> at {{ exp.company }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold">Skills</h3>
          <ul>
            <li v-for="skill in mockData.skills" :key="skill">{{ skill }}</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold">Projects</h3>
          <ul>
            <li v-for="project in mockData.projects" :key="project.id">
              <strong>{{ project.name }}</strong
              >: {{ project.description }}
            </li>
          </ul>
        </section>
      </div>
      <div v-if="selectedTemplate.id === 2" class="modern-template">
        <h1 class="text-3xl font-bold text-blue-600">{{ mockData.name }}</h1>
        <h2 class="text-xl text-gray-700">{{ mockData.title }}</h2>
        <section>
          <h3 class="text-lg font-semibold text-blue-600">Profile</h3>
          <p>{{ mockData.profile }}</p>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-blue-600">Education</h3>
          <ul>
            <li v-for="edu in mockData.education" :key="edu.id">
              <strong>{{ edu.degree }}</strong> at {{ edu.institution }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-blue-600">Experience</h3>
          <ul>
            <li v-for="exp in mockData.experience" :key="exp.id">
              <strong>{{ exp.position }}</strong> at {{ exp.company }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-blue-600">Skills</h3>
          <ul>
            <li v-for="skill in mockData.skills" :key="skill">{{ skill }}</li>
          </ul>
        </section>
      </div>
      <div v-if="selectedTemplate.id === 3" class="creative-template">
        <h1 class="text-3xl font-bold text-purple-700">{{ mockData.name }}</h1>
        <h2 class="text-xl text-purple-500">{{ mockData.title }}</h2>
        <section>
          <h3 class="text-lg font-semibold text-purple-700">Profile</h3>
          <p>{{ mockData.profile }}</p>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-purple-700">Education</h3>
          <ul>
            <li v-for="edu in mockData.education" :key="edu.id">
              <strong>{{ edu.degree }}</strong> at {{ edu.institution }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-purple-700">Experience</h3>
          <ul>
            <li v-for="exp in mockData.experience" :key="exp.id">
              <strong>{{ exp.position }}</strong> at {{ exp.company }}
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-semibold text-purple-700">Skills</h3>
          <ul>
            <li v-for="skill in mockData.skills" :key="skill">{{ skill }}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LivePreview",
  props: {
    selectedTemplate: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mockData: {
        name: "John Doe",
        title: "Software Engineer",
        profile:
          "Experienced software engineer with a passion for developing innovative programs.",
        education: [
          {
            id: 1,
            degree: "B.Sc. in Computer Science",
            institution: "University of Example",
          },
        ],
        experience: [
          { id: 1, position: "Senior Developer", company: "Tech Corp" },
        ],
        skills: ["JavaScript", "Vue.js", "Node.js"],
        projects: [
          {
            id: 1,
            name: "Project Alpha",
            description: "A web application for managing tasks.",
          },
          {
            id: 2,
            name: "Project Beta",
            description: "A mobile app for tracking fitness activities.",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.live-preview {
  padding: 20px;
  border-left: 1px solid #e5e7eb;
}
.resume-preview {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}
.classic-template {
  font-family: serif;
}
.classic-template h1 {
  color: #2c3e50;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.classic-template h2 {
  color: #34495e;
  margin-bottom: 15px;
}
.classic-template section {
  margin-bottom: 20px;
}
.classic-template h3 {
  color: #e74c3c;
  margin-bottom: 10px;
}
.modern-template {
  font-family: sans-serif;
  color: #333;
}
.creative-template {
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #4a148c;
}
</style>
