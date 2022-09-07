import { createApp } from 'vue'
import App from './App.vue'

import './assets/fonts/fonts.css'

import router from "./router"

import { useAccordion } from "vue3-rich-accordion";

import vSelect from 'vue-select'





const app = createApp(App);
app.use(router);
app.use(useAccordion);
app.component('v-select', vSelect)
app.mount('#app');

