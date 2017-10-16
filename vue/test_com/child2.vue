<template>
    <div>
        <input type="text" @keyup="inputChange" placeholder="请输入文字2" v-model="message">
        <button type="button">按钮2</button>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				message:"初始的值",
			}
		},
        props:{
	        childwords2:{
	        	type:String
            }
        },
        created(){
		//	this.message = this.childwords2;
	        console.log("组件的内部定义创建值-child2");
	        this.$emit("childChanged",[this.message])
        },
        methods:{
	        inputChange(){
	        	console.log(this.message,11111111111);
	        	this.$emit("childChanged",[this.message])
            }
        }
	}
</script>