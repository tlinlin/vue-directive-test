import Vue from "vue";
import App from "./App.vue";
import router from "./routers"
import vTap from "./directive/index";
Vue.use(vTap);
const app = new Vue({
	el: "#app",
	router,
	render: (h) => h(App)
});