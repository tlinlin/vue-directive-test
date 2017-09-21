<template>
    <div>
        <h1>props learn</h1>
        <FormTest :form="form"></FormTest>
    </div>
</template>
<script>
    import FormTest from "./formTest.vue"
    export default {
    	data() {
    		return {
    			message: "hello",
                fileEle: "",
			    form:{one:1,
				    two:2,
				    three:3,
				    four:4}
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
	    },
        components:{
	        FormTest
        }
    }
</script>