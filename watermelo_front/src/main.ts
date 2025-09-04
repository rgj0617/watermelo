import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.ts";
import "uno.css";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
