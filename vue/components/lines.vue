<template>
        <div id="bedroom"></div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {

			}
		},
        props:{
			data:{
				type:Array
            }
        },
		methods: {
			drawPie (id) {
				this.chart = echarts.init(document.getElementById(id));
				const options = {
					title: [
						{text: '标题',x:'left',show: true},
                        {subtext: '副标题',x:'center',show:true,padding:[20, 0, 0, 0]}
                        ],
                    grid:{
						show:false,
                        top:100,
                        left:80,
                        right:80,
                        bottom:80
                    },
					tooltip: {
						trigger: 'item',
						triggerOn: 'click',
						position: "top",
						backgroundColor: 'pink',
                        padding: [5,5,5,5],

					},
//					brush: {
//						geoIndex: 'all', // 只可以在所有 geo 坐标系中刷选，也就是上面定义的 geo 组件中。
//					},
//					legend: {
//						data:['最高气温','最低气温']
//					},
//					toolbox: {
//						show: true,
//						orient: 'vertical',
//						itemGap: 20,
//                        right:25,
//						feature: {
//							dataZoom: {
//								yAxisIndex: 'none'
//							},
//							dataView: {readOnly: false},
//							magicType: {type: ['line', 'bar']},
//							restore: {},
//							saveAsImage: {}
//						}
//					},
					xAxis:  {
						type: 'category',
					//	boundaryGap: false,
                        position:'bottom',
                        name:'x轴',
                        nameLocation:'end',
                        nameTextStyle:{
							color:'red'
                        },
						axisTick: {
							show:true,
                        },
						splitLine:{
							show:false,
                        },
						data: [{
							value: '周一',
							// 突出周一
							textStyle: {
								fontSize: 20,
								color: 'red'
							}
						},'周二','周三','周四','周五','周六','周日']
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							formatter: '{value} °C'
						},
						splitLine:{
							show:true,
                            lineStyle:{
								type: "dashed",
                            }
						},
                        min:0,
                        max:20
					},
					series: [
						{
							name:'最高气温',
							type:'line',
                            lineStyle:{
								normal:{
									type:'solid',
									color: "red",
                                    width: 5,
                                }
                            },
							data:this.data,
						}
					]
				};
				this.chart.setOption(options)
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.drawPie('bedroom')
			})
		}
	}
</script>
<style scoped>
    #bedroom {
        position: relative;
        left: 50%;
        margin-left: -400px;
        margin-bottom: 70px;
        width: 800px;
        height: 600px;
        border: solid #D01257 1px;
        box-shadow: 0 0 8px #FB90B7;
        border-radius: 10px;
        }
</style>