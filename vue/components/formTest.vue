<template>
    <div>
        <form method="post" enctype="multipart/form-datad">
            <input type="text" v-model="form.one">
            <input type="text" v-model="form.two">
            <input type="text" v-model="form.three" v-focus>
            <input type="text" v-model="form.four">
            <button type="button" @click="save">提交</button>
        </form>
        <div>{{message | capitalize}}</div>
        <h1>{{one | capitalize}}</h1>
        <div>{{num | capitalize}}</div>
        <div>{{testNum | myfilter}}</div>
        <input type="text" @keyup.enter.self="sureChild(index)" :placeholder="testNum | myfilter">
    </div>
</template>
<script>
	export default {
		data() {
			return {
				message: "hello",
				one: "test one two",
                num:"12311234567.883",
				testNum:"12311234567.1234"
			}
		},
        props:{
	        form:{one:Number,
		        two:Number,
		        three:Number,
		        four:Number}
        },
		methods: {
			save(){
				this.form.one = 2;
				console.log(this.form);
			},
			sureChild(){
				alert(1111111111111111111111111);
            }
		},
        mounted(){
			console.log(this.form, "----------------------------------------")
        },
		filters: {
			capitalize: function (value) {
				if (!value) return '';
				value = value.toString();
				return value.charAt(0).toUpperCase() + value.slice(1)
			},
            myfilter: function(num) {
	            num = num.toString().replace(/\$|\,/g,'');
	            if(isNaN(num))
		            num = "0";
                const abNum = Math.abs(num);

	            const sign = parseFloat(num) === abNum;
	            num = Math.floor(num*100+0.50000000001);
	            let cents = num%100;
	            num = Math.floor(num/100).toString();
	            if(cents<10)
		            cents = "0" + cents;
	            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		            num = num.substring(0,num.length-(4*i+3))+','+
			            num.substring(num.length-(4*i+3));
	            return (((sign)?'':'-') + num + '.' + cents);
            }

		},
		directives:{
			focus:{
				inserted: function (el) {
					// 聚焦元素
                    console.log(11111111111);
					el.focus()
				}
			}
		}
	}
</script>
<style>

</style>