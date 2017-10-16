<template>
    <div>
        <input type="text" placeholder="请输入文字1" :value="childwords">
        <button type="button" @click = "btnClick1">按钮1</button>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				message:'',
                one:""
			}
		},
		props:{
			childwords1:{
				type:String
			}
		},
        computed:{
	        childwords(){
	        	return this.childwords1;
            }
        },
        created(){
		//	this.message = this.childwords1;
        },
        beforeUpdate(){
	        console.log("页面跟新前");
        },
        updated(){
        	console.log("页面跟新");
        },
        methods:{
	        btnClick1(){
	        	console.log("点击了按钮1");
                this.one = "1111111111111";
            }
        }
	}
</script>