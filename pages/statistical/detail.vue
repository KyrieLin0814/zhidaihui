<template>
	<view class="container">
		<view class="item name">
			<p>提案名称</p>
			<div class="icon">{{data.title}}</div>
		</view>
		
		<view class="item content">
			<p>案由</p>
			<div>{{data.reason}}</div>
		</view>
		<view class="item content">
			<p>提案内容</p>
			<div>{{data.text}}</div>
		</view>
		<view class="item content">
			<p>建议和措施</p>
			<div>{{data.suggest}}</div>
		</view>
		<view class="item content">
			<p>提案答复</p>
			<div>{{data.reply}}</div>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title: '会议通知标题',
					reason: '国家卫生健康委员会提醒',
					text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产国家卫生健康委员会提醒，酵米面中毒的主要原因生产',
					suggest: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产国家卫生健康委员会提醒，酵米面中毒的主要原因生产',
					reply: '这是一条很认真的答复'
				},
			}
		},
		onLoad() {
		},
		methods: {
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
			&.name{
				.icon{
					background: url(../../static/image/tianname_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			
		}
	}
</style>
