<template>
  <div class="min-h-screen bg-gray-100 p-4 md:p-8">
    <h1 class="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.title"
        class="bg-white rounded-lg shadow p-4"
      >
        <h2 class="text-lg font-semibold text-gray-700 mb-2">
          {{ stat.title }}
        </h2>
        <div class="flex items-center">
          <span class="text-3xl font-bold text-blue-600">{{ stat.value }}</span>
          <font-awesome-icon
            :icon="stat.icon"
            class="ml-2 text-2xl text-blue-400"
          />
        </div>
      </div>
    </div>

    <!-- Job Application Progress -->
    <div class="bg-white rounded-lg shadow p-4 mb-8 text-center">
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Job Application Progress
        </h2>
        <div style="width:50%; height: 80%;margin-inline: auto;">
          <canvas ref="jobProgressChart" style="width:80%; height: 80%; margin-left: 5rem;"></canvas>
        </div>
      </div>
    </div>
    <!-- User Engagement -->
    <div class="bg-white rounded-lg shadow p-4 mb-8 text-center">
      <div class="">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">User Engagement</h2>
        <div style="width:50%; height: 80%;margin-inline: auto;">
          <canvas ref="userEngagementChart" style="width:100%; height: 80%"></canvas>
        </div>
      </div>
    </div>
    <!-- Application Sources -->
    <div class="bg-white rounded-lg shadow p-4 mb-8 text-center">
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Application Sources</h2>
        <div style="width:50%; height: 80% ;margin-inline: auto;">
          <canvas ref="applicationSourcesChart" style="width:100%; height: 80%;" ></canvas>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow p-4 mb-8">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <ul class="space-y-4">
        <li
          v-for="activity in recentActivities"
          :key="activity.id"
          class="flex items-start"
        >
          <font-awesome-icon
            :icon="activity.icon"
            class="mt-1 mr-3 text-blue-500"
          />
          <div>
            <p class="font-medium text-gray-800">{{ activity.title }}</p>
            <p class="text-sm text-gray-600">{{ activity.timestamp }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Upcoming Interviews -->
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Upcoming Interviews
      </h2>
      <ul class="space-y-4">
        <li
          v-for="interview in upcomingInterviews"
          :key="interview.id"
          class="flex items-center justify-between"
        >
          <div>
            <p class="font-medium text-gray-800">{{ interview.company }}</p>
            <p class="text-sm text-gray-600">{{ interview.position }}</p>
          </div>
          <div class="text-right">
            <p class="font-medium text-blue-600">{{ interview.date }}</p>
            <p class="text-sm text-gray-600">{{ interview.time }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileAlt,
  faBriefcase,
  faCheckCircle,
  faChartLine,
  faPaperPlane,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

library.add(
  faFileAlt,
  faBriefcase,
  faCheckCircle,
  faChartLine,
  faPaperPlane,
  faEdit
);

export default defineComponent({
  name: "Dashboard",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      stats: [
        { title: "Resumes Created", value: 5, icon: "file-alt" },
        { title: "Jobs Applied", value: 12, icon: "briefcase" },
        { title: "Interviews Scheduled", value: 3, icon: "check-circle" },
        { title: "Profile Views", value: 47, icon: "chart-line" },
      ],
      recentActivities: [
        {
          id: 1,
          title: "Applied to Software Engineer position at TechCorp",
          icon: "paper-plane",
          timestamp: "2 hours ago",
        },
        {
          id: 2,
          title: "Updated resume for Data Scientist roles",
          icon: "edit",
          timestamp: "1 day ago",
        },
        {
          id: 3,
          title: "Completed phone interview with InnovateTech",
          icon: "check-circle",
          timestamp: "3 days ago",
        },
      ],
      upcomingInterviews: [
        {
          id: 1,
          company: "FutureSoft Inc.",
          position: "Full Stack Developer",
          date: "May 15, 2023",
          time: "2:00 PM",
        },
        {
          id: 2,
          company: "DataViz Corp",
          position: "Data Analyst",
          date: "May 18, 2023",
          time: "11:00 AM",
        },
      ],
    };
  },
  methods: {
    initJobProgressChart() {
      const ctx = this.$refs.jobProgressChart.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Applied", "Phone Screen", "Interview", "Offer"],
          datasets: [
            {
              data: [8, 3, 2, 1],
              backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: "Job Application Status",
            },
          },
        },
      });
    },
    initUserEngagementChart() {
      const ctx = this.$refs.userEngagementChart.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
              label: "User Engagement",
              data: [20, 35, 25, 40, 30, 20, 50],
              borderColor: "#3B82F6",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Daily User Engagement",
            },
          },
        },
      });
    },
    initApplicationSourcesChart() {
      const ctx = this.$refs.applicationSourcesChart.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["LinkedIn", "Company Website", "Job Portal", "Referral"],
          datasets: [
            {
              label: "Applications",
              data: [40, 30, 20, 10],
              backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Application Sources Distribution",
            },
          },
        },
      });
    },
  },
  mounted() {
    this.initJobProgressChart();
    this.initUserEngagementChart();
    this.initApplicationSourcesChart();
  },
});
</script>
