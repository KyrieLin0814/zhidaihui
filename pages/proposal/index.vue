<template>
	<view class="container">
		<view class="content clearfix">
			<view class="item fl" v-for="(item,index) in dataList" :key="index" @click="$tools.goToPage(item.path)">
				<div class="con">
					<img :src="item.img">
					<span>{{item.name}}</span>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[{
					name:'提案征集',
					img: require('../../static/image/tian_zhengji_icon.png'),
					path: 'solicitation'
				}, {
					name:'发起提案',
					img: require('../../static/image/tian_faqi_icon.png')
				}, {
					name:'提案审核',
					img: require('../../static/image/tian_shenhe_icon.png')
				}, {
					name:'提案处理',
					img: require('../../static/image/tian_chuli_icon.png')
				}, {
					name:'提案回复',
					img: require('../../static/image/tian_huifu_icon.png')
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.content{
			padding:16px;
			.item{
				width:50%;
				height:0;
				padding-bottom:50%;
				position: relative;
				.con{
					position: absolute;
					top:8px;
					left:8px;
					right:8px;
					bottom:8px;
					background-color: #F8FBFF;
					border-radius: 7px;
					img{
						display: block;
						margin: 24% auto 0;
						width:36%;
					}
					span{
						margin-top:8px;
						display: block;
						text-align: center;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
