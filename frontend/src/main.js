import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import 'flatpickr/dist/flatpickr.css';

// import "../public/assets/js/defaultmenu.js";
import "../public/assets/libs/flatpickr/flatpickr.min.css"
import "../public/assets/libs/flatpickr/flatpickr.min.js"
import "../public/assets/images/brand-logos/favicon.ico"
import "../public/assets/js/main.js"
import "../public/assets/css/style.css"
import "../public/assets/libs/simplebar/simplebar.min.css"
import "../public/assets/libs/@simonwep/pickr/themes/nano.min.css"
import "../public/assets/js/switch.js"
import "../public/assets/libs/preline/preline.js"
import "../public/assets/libs/@simonwep/pickr/pickr.es5.min.js"

import "../public/assets/libs/simplebar/simplebar.min.js"
import "../public/assets/libs/jsvectormap/js/jsvectormap.min.js"
import "../public/assets/libs/jsvectormap/maps/world-merc.js"
import "../public/assets/libs/apexcharts/apexcharts.min.js"
import "../public/assets/libs/chart.js/chart.min.js"

import "../public/assets/js/custom-switcher.js"
// import "../public/assets/js/custom.js"


import "../public/assets/libs/choices.js/public/assets/styles/choices.min.css"
import "../public/assets/libs/filepond/filepond.min.css"
import "../public/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.css"
import "../public/assets/libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.css"
import "../public/assets/libs/flatpickr/flatpickr.min.css"
import "../public/assets/libs/choices.js/public/assets/scripts/choices.min.js"
import "../public/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js"
import "../public/assets/libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js"
import "../public/assets/libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js"
import "../public/assets/libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js"
import "../public/assets/libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js"
import "../public/assets/libs/filepond-plugin-image-crop/filepond-plugin-image-crop.min.js"
import "../public/assets/libs/filepond-plugin-image-resize/filepond-plugin-image-resize.min.js"
import "../public/assets/libs/filepond-plugin-image-transform/filepond-plugin-image-transform.min.js"
import "../public/assets/libs/dragula/dragula.min.js"
import "../public/assets/libs/@popperjs/core/umd/popper.min.js"
// import "../public/assets/js/task-kanban-board.js"

import { initializeAll } from "../public/assets/js/task-kanban-board.js";
import "../public/assets/js/switch.js"
import '../node_modules/flowbite-vue/dist/index.css'

import "./axios";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});


const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
