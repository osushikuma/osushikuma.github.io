import { createRouter, createWebHistory } from 'vue-router';
import BusinessCard from "./components/BusinessCard.vue";
import AboutMe from "./components/AboutMe.vue";
import MyResume from "./components/MyResume.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: BusinessCard },
    { path: '/about', component: AboutMe },
    { path: '/resume', component: MyResume }
  ],
});

// Export the router instance to use in your Vue application
export default router;
