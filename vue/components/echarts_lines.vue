<template>
    <div>
        <ChooseData @changeData="getChangeData"></ChooseData>
        <Lines :data="data"></Lines>
    </div>
</template>
<script>
	import Lines from "./lines.vue";
	import ChooseData from "./chooseData.vue";
	export default {
		data: function () {
			return {
				selectItem:'',
				data:[1, 11, 15, 13, 12, 13, 10],
                one:""
			}
		},
		components:{
			Lines,
			ChooseData
		},
        watch:{
		    one:function (val) {
                this.setRandomData();
		    }
        },
        methods:{
	        getChangeData(data){
	        	this.setRandomData();
            },
	        setRandomData(){
		        const dataArr = [];
		        for(let i=0;i<7;i++){
			        dataArr.push(Math.ceil(Math.random()*1000));
		        }
		        this.data = dataArr;
	        },
        }
	}
</script>
<style scoped>
</style>