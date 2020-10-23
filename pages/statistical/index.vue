<template>
	<view class="container">
		<view class="bg">
			<p>统计分析</p>
		</view>
		<view class="content">
			<view class="yearChoose tip flex">
				<span class="title">提案年份</span>
				<picker class="yearSelect full" @change="bindPickerChange" :value="yearIndex" :range="yearList">
					<input class="uni-input formInput downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择提案年份"
					 v-model="currentYear" />
				</picker>
			</view>

			<view class="tabBox flex">
				<view class="tab full" :class="{'active-1': type == 1}" @click="changeTab(1)">提案统计</view>
				<view class="tab full" :class="{'active-2': type == 2}" @click="changeTab(2)">类型统计</view>
				<view class="tab full" :class="{'active-3': type == 3}" @click="changeTab(3)">落实统计</view>
			</view>

			<view class="echartCon">
				<echarts v-if="showChart" :option="option" style="height: 100%;"></echarts>
			</view>

			<view class="countBox">
				<view class="count flex tip">
					<p class="title">参会人员信息统计</p>
				</view>
				<div class="list clearfix">
					<div class="item fl" v-for="(item,index) in dataList" :key="index">
						<div class="label">{{item.label}}</div>
						<div class="value">{{item.count}}人</div>
					</div>
				</div>
			</view>

			<view class="btn">
				<button type="primary" @click="clickFunc">提案预览</button>
			</view>

		</view>
	</view>
</template>

<script>
	import Echarts from '@/components/echarts/echarts.vue'
	export default {
		data() {
			const year = new Date().getFullYear();
			let years = [];
			for (let i = 0; i < 5; i++) {
				years.push(year - i)
			}
			return {
				currentYear: year,
				yearList: years,
				yearIndex: 0,
				type: 1,
				dataList: [{
					label: '参会人员',
					count: 152
				}, {
					label: '请假人员',
					count: 12
				}, {
					label: '迟到人员',
					count: 5
				}, {
					label: '旷会人员',
					count: 1
				}],
				showChart:false,
				option: {},
			}
		},
		components: {
			Echarts
		},
		onLoad() {},
		mounted() {
			uni.showLoading();
			setTimeout(() => {
				this.setOption();
				uni.hideLoading();
			}, 1000)
		},
		methods: {
			bindPickerChange(e) {
				this.yearIndex = e.target.value;
				this.currentYear = this.yearList[this.yearIndex];
			},
			changeTab(e) {
				this.type = e;
			},
			clickFunc() {
				this.$tools.goToPage('preview?year=' + this.currentYear + '&type=' + this.type);
			},
			setOption() {
				this.showChart = false;
				setTimeout(()=>{
					this.showChart = true;
					if (this.type == 1) {
						this.setOption1(100, 64, 30);
					} else if (this.type == 2) {
						this.setOption2(
							['油汽勘探', '油汽勘探', '油汽勘探', '油汽勘探', '油汽勘探', '油汽勘探', '油汽勘探'],
							[120, 200, 150, 80, 70, 110, 130]
						);
					} else {
						this.setOption2(
							['已经落实', '正在落实', '暂缓落实', '未能通过'],
							[80,45, 60, 19]
						);
						this.option.dataZoom.show = false;
					}
				},100)
			},
			setOption1(total, yes, no) {
				let title = '提案总项目: ' + total
				this.option = {
					xAxis: {
						show: false,
					},
					yAxis: {
						show: false,
					},
					legend: {
						show: false,
					},
					title: {
						show: true,
						text: title,
						left: 'center',
						bottom: 5,
						textStyle: {
							color: '#888',
							fontSize: 15
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}%',
						position: function(p) { //其中p为当前鼠标的位置
							return [p[0] + 10, p[1] - 10];
						}
					},
					dataZoom: {
						show: false
					},
					grid: {
						left: '10%',
						right: '10%',
						bottom: '2%',
						containLabel: true
					},
					series: [{
						name: '提案统计',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						label: {
							formatter: [
								'{a|{b}}',
								'{b|{d}%}'
							].join('\n'),
							rich: {
								a: {
									align: 'center',
									lineHeight: 20,
									fontSize: 14,
									color: '#212121'
								},
								b: {
									align: 'center',
									lineHeight: 20,
									fontSize: 19,
									fontWeight: 600,
									color: '#212121'
								}
							}
						},
						labelLine: {
							length: 2,
							length2: 10,
							smooth: 0.1
						},
						data: [{
							value: yes,
							name: '通过项目',
							itemStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#51F5FF' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#38C4FF' // #38C4FF% 处的颜色
									}],
									global: false // 缺省为 false
								}
							},
						}, {
							value: no,
							name: '未通过项目',
							itemStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#FFDC49' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#FFA72F' // #38C4FF% 处的颜色
									}],
									global: false // 缺省为 false
								}
							},
						}],
						roseType: 'radius',
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function(idx) {
							return Math.random() * 200;
						}
					}]
				}
			},
			setOption2(legend, arr) {
				let color = null;
				if (this.type == 2) {
					color = {
						barBorderRadius: 6,
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[{
									offset: 0,
									color: '#FFDC49'
								}, //柱图渐变色
								{
									offset: 1,
									color: '#FFA72F'
								}, //柱图渐变色
							]
						)
					}
				}
				if (this.type == 3) {
					color = {
						barBorderRadius: 0,
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[{
									offset: 0,
									color: '#FFAEB7'
								}, //柱图渐变色
								{
									offset: 1,
									color: '#FF5D93'
								}, //柱图渐变色
							]
						)
					}
				}
				this.option = {
					title: {
						show: false
					},
					xAxis: {
						show: true,
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							interval: 0,
							formatter: function(value) {
								var ret = ""; //拼接加\n返回的类目项  
								var maxLength = 2; //每项显示文字个数  
								var valLength = value.length; //X轴类目项的文字个数  
								var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
								if (rowN > 1) //如果类目项的文字大于3,  
								{
									for (var i = 0; i < rowN; i++) {
										var temp = ""; //每次截取的字符串  
										var start = i * maxLength; //开始截取的位置  
										var end = start + maxLength; //结束截取的位置  
										//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
										temp = value.substring(start, end) + "\n";
										ret += temp; //凭借最终的字符串  
									}
									return ret;
								} else {
									return value;
								}
							}
						},
						data: legend
					},
					yAxis: {
						show: true,
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						splitLine: {
							lineStyle: {
								color: '#E8F1FF'
							}
						},
					},
					dataZoom: {
						type: 'slider',
						show: true,
						realtime: true,
						height: 10,
						startValue: 0, // 从头开始。
						endValue: 10, // 一次性展示6个。
						bottom: 4,
						textStyle: {
							color: 'transparent'
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					grid: {
						top: '8%',
						left: '12%',
						right: '12%',
						bottom: '10%',
						containLabel: true
					},
					series: [{
						data: arr,
						type: 'bar',
						barWidth: 12,
						itemStyle: color
					}],
				}
			},
		},
		watch: {
			type(newV, oldV) {
				this.setOption();
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 180px;
			background: linear-gradient(top, #0077FF 0%, #6EA3FF 40%, #ffffff 100%);
			z-index: 9;

			p {
				width: 100%;
				color: #FFFFFF;
				font-size: 16px;
				line-height: 44px;
				text-align: center;
				font-weight: bold;
			}
		}

		.content {
			position: relative;
			background-color: #FFFFFF;
			margin: 54px 16px 0;
			border-radius: 7px;
			padding: 16px;
			z-index: 10;
			font-size: 14px;

			.tip {
				&:before {
					content: '';
					display: inline-block;
					vertical-align: top;
					width: 4px;
					margin: 13px 0;
					background: linear-gradient(top, #6EA3FF 0%, #0077FF 100%);
				}
			}

			.title {
				font-size: 15px;
				font-weight: bold;
			}

			.yearChoose {
				height: 42px;
				line-height: 42px;

				span {
					display: inline-block;
					vertical-align: top;
					padding: 0 30px 0 10px;
				}

				.yearSelect {
					.formInput {
						padding-left: 14px;
					}
				}
			}

			.tabBox {
				width: 280px;
				margin: 15px auto;

				.tab {
					&.active-1 {
						background: url(../../static/image/statistical_tab_left.png) no-repeat;
						background-size: contain;
					}

					&.active-2 {
						background: url(../../static/image/statistical_tab_middle.png) no-repeat;
						background-size: contain;
					}

					&.active-3 {
						background: url(../../static/image/statistical_tab_right.png) no-repeat;
						background-size: contain;
						color: #fff;
					}
				}
			}

			.echartCon {
				height: 60vw;
				width:100vw;
				margin-left: -32px;
			}

			.countBox {
				.count {
					height: 40px;
					line-height: 40px;

					.title {
						padding-left: 10px;
					}
				}

				.list {
					margin: 15px 0;

					.item {
						width: 50%;

						&:nth-child(2n+1) {
							width: calc(50% - 1px);
							border-right: 1px solid #EDEDED;
						}

						margin-bottom: 14px;

						div {
							text-align: center;
							line-height: 1.5;

							&.label {
								color: $uni-text-color-grey;
							}

							&.value {
								font-size: 15px;
								color: $uni-text-color;
								font-weight: bold;
							}
						}
					}
				}
			}

			.btn {
				width: 40vw;
				margin: 0 auto;
			}
		}
	}
</style>
