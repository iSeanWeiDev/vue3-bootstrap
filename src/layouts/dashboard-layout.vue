<template>
  <app-navbar />
  <app-sidebar />
  <router-view :key="$route.path" />
  <app-footer />
</template>

<script>
import AppNavbar from '@components/App/navbar.vue';
import AppSidebar from '@components/App/sidebar.vue';
import AppFooter from '@components/App/footer.vue';

export default {
  name: 'AppDashboardLayout',
  components: {
    AppSidebar,
    AppNavbar,
    AppFooter
  }
};
</script>
