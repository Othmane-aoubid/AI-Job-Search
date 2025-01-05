<template>
  <div class="custom-template">
    <header class="header">
      <h1>{{  "jhon doe" }}</h1>
      <h2>{{  "title" }}</h2>
    </header>
    <main>
      <section class="summary">
        <h2>Professional Summary</h2>
        <p>{{  "summary" }}</p>
      </section>
      <section class="details">
        <div class="left">
          <h2>Experience</h2>
          <ul>
            <li v-for="job in resumeData.experience" :key="job.id">
              <h4>{{  "title" }}</h4>
              <p>
                {{  "company" }} ({{
                   "duration"
                }})
              </p>
              <p>{{  "description" }}</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <h2>Education</h2>
          <ul>
            <li v-for="edu in resumeData.education" :key="edu.id">
              {{  "degree"}} - {{  "school"}} ({{  "year" }})
            </li>
          </ul>
          <h2>Skills</h2>
          <ul>
            <li v-for="skill in resumeData.skills" :key="skill.name">
              {{  "name" }} ({{  "level"}})
            </li>
          </ul>
        </div>
      </section>
    </main>
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
.custom-template {
  font-family: "Roboto", sans-serif;
  padding: 20px;
  background: #f5f5f5;
}
.header {
  text-align: center;
  background: #34495e;
  color: #ecf0f1;
  padding: 20px;
}
main {
  display: flex;
  gap: 20px;
}
.details {
  display: flex;
  gap: 20px;
}
.left {
  width: 70%;
}
.right {
  width: 30%;
}
h2 {
  border-bottom: 2px solid #34495e;
  color: #2c3e50;
}
</style>
