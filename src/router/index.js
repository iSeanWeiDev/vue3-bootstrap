import { createRouter, createWebHistory } from 'vue-router';

// Import layouts
import AppHomeLayout from '@layouts/home-layout';
import AppDashboardLayout from '@layouts/dashboard-layout';
import Home from '@views/Home';

const routes = [
  {
    path: '/',
    component: AppHomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@views/About')
      }
    ]
  },
  {
    path: '/dashboard',
    component: AppDashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@views/Dashboard')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
