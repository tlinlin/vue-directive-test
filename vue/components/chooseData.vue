<template>
    <div class="itemSelect">
        <div>
            <select name="itemType" v-model = "selectItem">
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
                <option value="4">four</option>
            </select>
        </div>
        <div>
            <i @click = "prev">《</i>
            <span>{{startDate}}</span>~~
            <span>{{endDate}}</span>
            <i @click = "next">》</i>
        </div>
    </div>
</template>
<script>
	export default {
		data: function () {
			return {
				selectItem:'',
                startTime: new Date(),
			}
		},
        computed:{
	        startDate(){
	        	const date = this.startTime;
	        	return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
            },
            endDate(){
	            const myDate=this.startTime;
	            const date = new Date(myDate.setDate(myDate.getDate()+5));
	            return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
            }
        },
        methods:{
	        prev(){
	        	console.log("点击前一星期");
                const date = this.startTime;
		        const newDate = new Date(date.setDate(date.getDate()-7));
		        this.startTime = newDate;
		        console.log(newDate);
            },
	        next(){
		        console.log("点击后一星期");
		        const date = this.startTime;
		        const newDate = new Date(date.setDate(date.getDate()+7));
		        this.startTime = newDate;
		        console.log(newDate);
            }
        }
	}
</script>
<style scoped>
    .itemSelect>div{
        display: inline-block;
        }
</style>