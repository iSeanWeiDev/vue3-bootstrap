import { createApp } from 'vue';
import bootPlugin from '@plugins/boot';
import App from './App.vue';

createApp(App).use(bootPlugin).mount('#app');
