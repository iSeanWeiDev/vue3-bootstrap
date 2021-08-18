import { createApp } from 'vue';
import router from '@router';
import store from '@store';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(store).use(router).mount('#app');
