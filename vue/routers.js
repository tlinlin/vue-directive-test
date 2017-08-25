const one = (resolve) => require(["./components/listone.vue"],resolve);
const two = (resolve) => require(["./components/listTwo.vue"],resolve);
const vislist = (resolve) => require(["./components/vislist.vue"],resolve);
const fileUp = (resolve) => require(["./components/fileUp.vue"],resolve);
import Vue from "vue";
import router from "vue-router";
Vue.use(router);

const routes = [
	{path:"/", name:"one",component: one},
	{path:"/two", name:"two",component:two},
	{path:"/vis", name:"vislist",component:vislist},
	{path:"/fileUp", name:"fileUp",component:fileUp}
];

export default new router({
	routes
})