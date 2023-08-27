import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// PrimeVue
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import './index.css';
const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
