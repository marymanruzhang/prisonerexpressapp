import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '@/views/ExploreView.vue';
import WorksView from '@/views/WorksView.vue';
import Programs from '@/views/Programs.vue';
import Saved from '@/views/Saved.vue';
import FAQ from '@/views/FAQ.vue';


const routes = [
  {
    path: '/',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/programs',
    name: 'programs',
    component: Programs
  },
  {
    path: '/saved',
    name: 'saved',
    component: Saved
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  // Other routes can be added here
  { path: '/works/:work_type', name: 'works', component: WorksView, props: true },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

});

export default router;
