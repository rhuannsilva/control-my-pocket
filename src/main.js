import { createApp } from 'vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import './style.css'

import App from './App.vue'

const app = createApp(App);
// const pinia = createPinia()

app.use(router);
app.use(VueTheMask);
// app.use(createPinia());
app.mount('#app');
