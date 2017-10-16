<template>
    <div>
        <div>{{message}}</div>
        <Child1 :childwords1="childwords1"></Child1>
        <Child2 :childwords2="childwords2" @childChanged="getWordsOne"></Child2>
        <Child3></Child3>
    </div>
</template>
<script>
    import Child1 from "./child1.vue";
    import Child2 from "./child2.vue";
    import Child3 from "./child3.vue";
    export default {
    	data(){
    		return {
    			message:"test words",
                childwords1:"组件1的文字",
			    childwords2:"组件2的文字",
            }
        },
        components:{
	        Child1,
	        Child2,
	        Child3
        },
        created(){
    		console.log("组件的内部定义创建值");
    	    this.message = "组件的内部定义创建值";
        },
        mounted(){
            console.log("父组件mounted");
        },
        methods:{
	        getWordsOne(data){
	        	console.log(data,"父组件接收到的数据");
	        	this.message = data[0];
	        	this.childwords1 = data[0];
            }
        }
    }
</script>