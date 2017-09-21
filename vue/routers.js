const one = (resolve) => require(["./components/listone.vue"], resolve);
const two = (resolve) => require(["./components/listTwo.vue"], resolve);
const vislist = (resolve) => require(["./components/vislist.vue"], resolve);
const fileUp = (resolve) => require(["./components/fileUp.vue"], resolve);
const drag = (resolve) => require(["./components/dragDemo.vue"], resolve);
const EChartsLines = (resolve) => require(["./components/echarts_lines.vue"], resolve);
import Vue from "vue";
import router from "vue-router";
Vue.use(router);

const routes = [
    { path: "/", name: "one", component: one },
    { path: "/two", name: "two", component: two },
    { path: "/vis", name: "vislist", component: vislist },
    { path: "/fileUp", name: "fileUp", component: fileUp },
    { path: "/drag", name: "drag", component: drag },
	{ path: "/EChartsLines", name: "EChartsLines", component: EChartsLines },
];

export default new router({
    routes
})