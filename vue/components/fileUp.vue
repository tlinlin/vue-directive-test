<template>
    <div>
        <form method="post" enctype="multipart/form-datad">
            <input type="file" ref="xxx" @change="handleFileChange">
            <button>提交</button>
            <input type="text" v-model="message">
            <button type="button" v-tap="save">提交</button>
        </form>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			message: "hello",
                fileEle: "",
                question:[
                    {num:0,name:"",img:"",},
	                {num:2,name:"",img:"",},
	                {num:3,name:"",img:"",},
	                {num:4,name:"",img:"",},
                ]
            }
        },
	    methods: {
		    handleFileChange() {
                console.log(this.$refs.xxx,'111111111111');
		    },
		    onSubmit() {

		    	console.log("submit file");
            },
            save(){
		    	console.log(this.message);
            }
	    }
    }
</script>
<style>
    /*input {*/
        /*font-size: 0; !* 为了去掉‘未选择任何文件’这几个字，也可以随便弄到哪里*!*/
        /*}*/
    /*!* 注意不是直接input > input[type=button] 哦*!*/
    /*input::-webkit-file-upload-button {*/
        /*background: #efeeee;*/
        /*color: #333;*/
        /*border: 0;*/
        /*padding: 40px 100px;*/
        /*border-radius: 5px;*/
        /*font-size: 12px;*/
        /*box-shadow: 1px 1px 5px rgba(0,0,0,.1), 0 0 10px rgba(0,0,0,.12);*/
        /*}*/
</style>