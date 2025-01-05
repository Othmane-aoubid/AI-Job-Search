<template>
  <div class="creative-template">
    <header>
      <h1>{{ resumeData.name || "jhon doe"}}</h1>
      <h2>{{ resumeData.title || "title"}}</h2>
    </header>
    <section>
      <h3>Summary</h3>
      <p>{{ resumeData.summary || "summary"}}</p>
    </section>
    <section>
      <h3>Experience</h3>
      <div v-for="job in resumeData.experience" :key="job.id" class="job">
        <h4>{{ job.title|| "title" }}</h4>
        <p>{{ job.company || "company" }} ({{ job.duration || "duration"}})</p>
        <p>{{ job.description || "description"}}</p>
      </div>
    </section>
    <section>
      <h3>Education</h3>
      <ul>
        <li v-for="edu in resumeData.education" :key="edu.id">
          {{ edu.degree || "degree"}} - {{ edu.institution || "school"}} ({{ edu.year|| "year" }})
        </li>
      </ul>
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        <li v-for="skill in resumeData.skills" :key="skill.name">
          {{ skill.name || "name" }} ({{ skill.level || "level"}})
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
      required: true,
    },
  },
};
</script>

<style scoped>
.creative-template {
  font-family: "Courier New", monospace;
  padding: 30px;
  background: linear-gradient(to bottom, #ffffff, #f3f4f7);
  color: #444;
}
header {
  text-align: center;
  color: #d35400;
}
header h1 {
  font-size: 36px;
}
header h2 {
  font-size: 20px;
  color: #8e44ad;
}
h3 {
  color: #2c3e50;
  margin-top: 20px;
}
.job h4 {
  color: #2980b9;
}
</style>
