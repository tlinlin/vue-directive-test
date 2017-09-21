<template>
    <div>
        <ChooseData></ChooseData>
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
			}
		},
		components:{
			Lines,
			ChooseData
		}
	}
</script>
<style scoped>
</style>