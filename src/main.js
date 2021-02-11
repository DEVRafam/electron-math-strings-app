import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import "./registerServiceWorker";
import "./sass/main.sass";
//
import { ipcRenderer } from "electron";
//
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
//
//GLOBAL COMPONENTS
import HomeRedirection from "./components/HomeRedirection.vue";
Vue.component("HomeRedirection", HomeRedirection);
//
document.addEventListener("keydown", e => {
    if (e.keyCode === 123) {
        ipcRenderer.send("open-devtools");
    }
});
