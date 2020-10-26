<template>
	<view class="container">
		<view class="list">
			<view class="item flex" v-for="(item,index) in dataList" :key="index" @click="clickFunc(item)">
				<img :src="item.img" />
				<view class="full">
					<div>{{item.name}}</div>
					<p>{{item.en}}</p>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="center" :maskClick="false">
			<div class="success">
				<img :src="require('../../static/image/tc_img.png')" />
				<span>恭喜您签到成功</span>
			</div>
			<div class="close" @click="close"></div>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					name: '会议发布',
					en: 'Conference release',
					img: require('../../static/image/meeting_fabu_icon.png'),
					path: 'release'
				}, {
					name: '坐席管理',
					en: 'Agent management',
					img: require('../../static/image/meeting_guanli_icon.png'),
					path: 'seat'
				}, {
					name: '会议签到',
					en: 'Conference registration',
					img: require('../../static/image/meeting_qiandao_icon.png'),
					path: ''
				}, {
					name: '会议记录',
					en: 'Conference records',
					img: require('../../static/image/meeting_jilu_icon.png'),
					path: 'record'
				}]
			}
		},
		onNavigationBarButtonTap() {
			uni.showToast({
				title: '扫码功能',
				icon: 'none'
			});
			return
		},
		methods: {
			clickFunc(item) {
				if (item.path) {
					this.$tools.goToPage(item.path);
				} else {
					//签到
					this.$refs.popup.open()
				}
			},
			close() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.list {
			padding: 0 16px;

			.item {
				padding: 10px;
				margin-bottom: 14px;
				border-radius: 40px;
				background-color: #F8FBFF;

				img {
					display: block;
					width: 60px;
					height: 60px;
				}

				view {
					margin-left: 20px;
					line-height: 20px;
					padding: 10px 0;

					div {
						font-weight: bold;
						font-size: 15px;
					}

					p {
						font-size: 14px;
						color: #ABB6C4;
					}
				}
			}
		}

		.success {
			background-color: #FFFFFF;
			border-radius: 10px;
			padding: 20px 30px;

			img {
				display: block;
				width: 50vw;
			}

			span {
				display: block;
				font-size: 15px;
				font-weight: bold;
				text-align: center;
				line-height: 2;
			}
		}

		.close {
			width: 22px;
			height: 50px;
			margin: 0 auto;
			background: url(../../static/image/tc_close_down.png) no-repeat top center;
			background-size: 22px;
		}
	}
</style>
