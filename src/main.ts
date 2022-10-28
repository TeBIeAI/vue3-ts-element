import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import './service/request'

const app = createApp(App);
app.use(router).use(store).mount("#app");
