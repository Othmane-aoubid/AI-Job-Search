<template>
  <div class="classic-template">
    <header class="header">
      <h1>{{ resumeData.name }}</h1>
      <p>{{ resumeData.contact }}</p>
      <p>{{ resumeData.address }}</p>
      <p>
        <a :href="resumeData.linkedin">{{ resumeData.linkedin }}</a>
      </p>
    </header>

    <section class="summary">
      <h2>Professional Summary</h2>
      <p>{{ resumeData.summary }}</p>
    </section>

    <section class="experience">
      <h2>Experience</h2>
      <ul>
        <li v-for="job in resumeData.experience" :key="job.id">
          <strong>{{ job.title }}</strong> at {{ job.company }} ({{
            job.duration
          }})
          <p>{{ job.description }}</p>
        </li>
      </ul>
    </section>

    <section class="education">
      <h2>Education</h2>
      <ul>
        <li v-for="edu in resumeData.education" :key="edu.id">
          <strong>{{ edu.degree }}</strong> - {{ edu.institution }} ({{
            edu.year
          }})
        </li>
      </ul>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in resumeData.skills" :key="skill.name">
          {{ skill.name }} - {{ skill.level }}
        </li>
      </ul>
    </section>

    <section class="references">
      <h2>References</h2>
      <ul>
        <li v-for="ref in resumeData.references" :key="ref.name">
          {{ ref.name }} - {{ ref.contact }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    resumeData: {
      type: Object,
      default: () => ({
        name: "John Doe",
        contact: "john.doe@example.com",
        address: "123 Main St, Anytown, USA",
        linkedin: "linkedin.com/in/johndoe",
        summary:
          "Experienced software engineer specializing in web development.",
        experience: [
          {
            id: 1,
            title: "Senior Developer",
            company: "Tech Solutions",
            duration: "2020 - Present",
            description:
              "Led the development of a high-traffic e-commerce platform.",
          },
          {
            id: 2,
            title: "Junior Developer",
            company: "Startup Inc.",
            duration: "2018 - 2020",
            description:
              "Built features for a SaaS product with a user base of 50k.",
          },
        ],
        education: [
          {
            id: 1,
            degree: "B.Sc. Computer Science",
            institution: "Tech University",
            year: "2018",
          },
        ],
        skills: [
          { name: "JavaScript", level: "Advanced" },
          { name: "Vue.js", level: "Advanced" },
          { name: "CSS", level: "Intermediate" },
        ],
        references: [
          { name: "Jane Smith", contact: "jane.smith@example.com" },
          { name: "Bob Johnson", contact: "bob.johnson@example.com" },
        ],
      }),
    },
  },
};
</script>

<style scoped>
.classic-template {
  font-family: "Georgia", serif;
  color: #333;
  padding: 20px;
  line-height: 1.5;
}
.header {
  text-align: center;
  margin-bottom: 20px;
}
.header h1 {
  font-size: 28px;
  margin: 0;
}
.header p {
  margin: 5px 0;
}
.summary,
.experience,
.education,
.skills,
.references {
  margin-bottom: 20px;
}
h2 {
  border-bottom: 1px solid #333;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
