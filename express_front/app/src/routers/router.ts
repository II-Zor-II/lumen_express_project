import VueRouter from 'vue-router';
import AppComponent from '@/App.vue';
import DashboardComponent from "@/components/DashboardComponent.vue";

// Create router instance for export
const router = new VueRouter({
  routes: [
    {
      path: '/Dashboard',
      component: DashboardComponent
    },
    {
      path: '/',
      component: AppComponent
    }
  ],
  mode: 'history'
});

export default router;
