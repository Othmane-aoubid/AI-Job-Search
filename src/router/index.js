import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LandingPage from "../views/LandingPage.vue";
import Dashboard from "../views/Dashboard.vue";
import ToolComparison from "../views/ToolComparison.vue";
import Analytics from "../views/Analytics.vue";
import ResumeBuilder from "../components/ResumeBuilder.vue";
import CoverLetterGenerator from "../components/coverLetterGenerator/CoverLetterGenerator.vue";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/tools",
    name: "Tools",
    component: ToolComparison,
    meta: { requiresAuth: true },
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
    meta: { requiresAuth: true },
  },
  {
    path: "/resume-builder",
    name: "ResumeBuilder",
    component: ResumeBuilder,
    meta: { requiresAuth: true },
  },
  {
    path: "/cover-letter-generator",
    name: "CoverLetterGenerator",
    component: CoverLetterGenerator,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next("/");
    } else {
      next();
    }
  });
});

export default router;
