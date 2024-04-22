
// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/ExploreView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     }
//     // {
//     //   path: '/about',
//     //   name: 'about',
//     //   // route level code-splitting
//     //   // this generates a separate chunk (About.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () => import('../views/AboutView.vue')
//     // }
//   ]
// })

// export default router

// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ExploreView from '@/views/ExploreView.vue';
import WorksView from '@/views/WorksView.vue';
import Programs from '@/views/Programs.vue';


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

  // Other routes can be added here
  { path: '/works/:work_type', name: 'works', component: WorksView, props: true }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
