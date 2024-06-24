import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { API_BASE_URL } from '@/config.js';

const app = createApp(App);
app.config.globalProperties.$apiBaseUrl = API_BASE_URL;
app.use(router);
app.mount('#app');