<template>
  <div class="modern-template">
    <aside class="sidebar">
      <h1>{{ resumeData.name || "jhon doe" }}</h1>
      <p>{{ resumeData.contact || "contact"  }}</p>
      <p>{{ resumeData.address  || "address" }}</p>
      <p>
        <a :href="resumeData.linkedin">{{ resumeData.linkedin || "linkedin" }}</a>
      </p>

      <h2>Skills</h2>
      <ul>
        <li v-for="skill in resumeData.skills" :key="skill.name">
          {{ skill.name || "name" }} ({{ skill.level || "level"}})
        </li>
      </ul>
    </aside>

    <main class="content">
      <section class="summary">
        <h2>Summary</h2>
        <p>{{ resumeData.summary || "summary" }}</p>
      </section>

      <section class="experience">
        <h2>Experience</h2>
        <ul>
          <li v-for="job in resumeData.experience" :key="job.id">
            <strong>{{ job.title || "title" }}</strong> at {{ job.company || "company"}} ({{
              job.duration || "duration"
            }})
            <p>{{ job.description || "duration"}}</p>
          </li>
        </ul>
      </section>

      <section class="education">
        <h2>Education</h2>
        <ul>
          <li v-for="edu in resumeData.education" :key="edu.id">
            <strong>{{ edu.degree || "degree" }}</strong> - {{ edu.institution || "institution" }} ({{
              edu.year || "year"
            }})
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    resumeData: {
      type: Object,
      default: () => ({
        // Include the same mock data as the Classic template
      }),
    },
  },
};
</script>

<style scoped>
.modern-template {
  display: flex;
  font-family: "Arial", sans-serif;
  color: #444;
}
.sidebar {
  background: #0078d4;
  color: white;
  padding: 20px;
  width: 30%;
}
.content {
  padding: 20px;
  width: 70%;
}
h1 {
  font-size: 24px;
}
h2 {
  margin-top: 20px;
  color: #0078d4;
}
</style>
