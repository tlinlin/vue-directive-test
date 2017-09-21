<template>
    <div>
        <div id="mainBox1"></div>
        <h1>{{message}}</h1>
        <button @click="addJs">异步加载js按钮</button>
        <Lines :data="data"></Lines>
    </div>
</template>
<script>
	import echarts from 'echarts';
	import Lines from "./lines.vue";
	export default {
		data: function () {
			return {
				message: "listone",
				data:[1, 11, 15, 13, 12, 13, 10],
			}
		},
		methods: {
			doDraw(id){
				const myChart = echarts.init(document.getElementById(id));
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
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			},
			addJs() {
				require.ensure([],function () {
                    const addedJs = require('./addTest.js');
                    console.log(addedJs,"添加的部分js内容");
				})
            }
		},
        components:{
	        Lines
        },
		mounted() {
			this.$nextTick(function() {
				this.doDraw('mainBox1')
			});
		}
	}
</script>
<style scoped>
    h1 {
        color: red;
        }
    #mainBox1{
        width: 500px;
        height:300px;
        border: 1px red solid;
        }
</style>