<template>
    <div id="myrouter">
        <router-link to="/">listone</router-link>
        <router-link to="/two">listtwo</router-link>
        <router-link to="/vis">vis list</router-link>
        <router-link to="/fileUp">fileUp</router-link>
        <router-link to="/drag">drag</router-link>
        <router-link to="/EChartsLines"><h3>EChartsLines</h3></router-link>
        <router-view></router-view>
    </div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		data: function () {
            return {
                message: "hello world",
            }
		}
    }
</script>
<style scoped>
    h1 {
        color: red;
    }
    #mainBox{
        width: 500px;
        height:300px;
        border: 1px red solid;
        }
    h1{
        display: inline-block;
        }
</style>