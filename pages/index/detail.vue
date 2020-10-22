<template>
	<view class="container">
		<view class="item time">
			<p>会议时间</p>
			<div class="icon">{{data.time}}</div>
		</view>
		<view class="item location">
			<p>会议地点</p>
			<div class="icon">{{data.location}}</div>
		</view>
		<view class="item content">
			<p>通知内容</p>
			<div>{{data.text}}</div>
		</view>
		<view class="item reason">
			<p>请假原因</p>
			<view class="uni-textarea">
				<textarea placeholder='请输入请假原因' placeholder-style="color:#D5D5D5" v-model="reason" />
				</view>
		</view>
		<view class="bottomBtns flex">
			<button type="default" class="full" @click="qingjiaFunc">确认请假</button>
			<button type="primary" class="full" @click="canhuiFunc">会议参会</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					type: 1,
					title: '会议通知标题',
					time: '2020-05-05',
					location: '第三会议室',
					text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
				},
				reason:'',
				title: '会议通知'
			}
		},
		onLoad() {
			//改变页面标题
			if(this.data.type == 2){
				this.title = '提案通知'
			}
			uni.setNavigationBarTitle({
			　　title: this.title
			})
		},
		methods: {
			qingjiaFunc(){
				uni.showModal({
					title: '提示',
					content: '是否确认请假?',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			canhuiFunc(){
				uni.showModal({
					title: '提示',
					content: '是否确认参会?',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		},
		watch: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.item {
			padding:10px 16px;
			line-height:2.2;
			>p{
				font-weight: bold;
				font-size:15px;
			}
			>div{
				font-size:14px;
			}
			.icon{
				padding-left:20px;
			}
			&.time{
				.icon{
					background: url(../../static/image/date_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.location{
				.icon{
					background: url(../../static/image/location_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.content{
				div{
					line-height:1.4;
				}
			}
			&.reason{
				textarea{
					font-size:14px;
					border:1px solid #E5E5E5;
					width:calc(100% - 16px);
					padding:8px;
					border-radius: 5px;
					height:125px;
				}
			}
		}
	}
</style>
