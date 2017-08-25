<template>
    <div>
        <div id="mainBox2"></div>
        <h1>{{message}}</h1>
    </div>
</template>
<script>
	import echarts from 'echarts';
	export default {
		data: function () {
			return {
				message: "listTwo",
			}
		},
		methods: {
			doDraw(id,data){
				const myChart = echarts.init(document.getElementById(id));
				myChart.hideLoading();
				myChart.setOption({
					title: { text: 'ECharts 入门示例' },
					tooltip: {},
					xAxis: {
						data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: data
					}]
				});
			}
		},
		mounted() {
			this.$nextTick(function () {
				this.doDraw('mainBox2', [5, 20, 36, 10, 10, 20])
			});
		}
	}
</script>
<style scoped>
    h1 {
        color: red;
        }
    #mainBox2{
        width: 500px;
        height:300px;
        border: 1px red solid;
        }
</style>