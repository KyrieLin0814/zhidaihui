<template>
	<view class="container">
		<view class="tabBox flex">
			<view class="tab full" :class="{'active-1': type == 1}" @click="changeTab(1)">未读消息</view>
			<view class="tab full" :class="{'active-2': type == 2}" @click="changeTab(2)">历史消息</view>
		</view>
		<view class="msgList">
			<view class="con" v-for="(item,index) in messageList" :key="index" @click="$tools.goToPage('detail')">
				<div class="til text-1">
					<span :class="[{'meeting': item.type==1},{'tian': item.type==2}]"></span>
					{{item.title}}
				</div>
				<div class="msg text-1">
					{{item.text}}
				</div>
			</view>
		</view>
		<view v-show="isLoadMore">
			<uni-load-more :status="loadStatus"></uni-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1, //1未读消息  2历史消息
				messageList: [],
				loadStatus: 'loading',
				isLoadMore: false, //是否加载中
				page: 1,
				pagesize: 10,
			}
		},
		onLoad() {
			setTimeout(() => {
				console.log('start pulldown');
				this.getList()
			}, 1000);
			uni.startPullDownRefresh();
		},
		//下拉刷新函数
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉触底函数
		onReachBottom() {
			if (!this.isLoadMore) { //此处判断，上锁，防止重复请求
				this.isLoadMore = true
				this.page += 1
				this.getList()
			}
		},
		methods: {
			changeTab(e) {
				this.type = e;
			},
			getList() {
				this.messageList = [{
					type: 1,
					title: '会议通知标题',
					text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
				}, {
					type: 2,
					title: '提案通知标题',
					text: '深圳航空ZH9247航班在四川攀枝花机场'
				}, {
					type: 2,
					title: '提案通知标题',
					text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
				}, ]

				// if (res.data.data.list) {
				// 	this.videoList = this.videoList.concat(res.data.data.list)
				// 	if (res.data.data.list.length < this.pagesize) { //判断接口返回数据量小于请求数据量，则表示此为最后一页
				// 		this.isLoadMore = true
				// 		this.loadStatus = 'nomore'
				// 	} else {
				// 		this.isLoadMore = false
				// 	}
				// } else {
				// 	this.isLoadMore = true
				// 	this.loadStatus = 'nomore'
				// }
			}
		},
		watch: {
			type() {
				this.page = 1;
				this.getList();
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.tabBox {
			margin: 0 auto;
			width: 222px;
			padding: 4px;
			border-radius: 5px;
			background-color: $uni-bg-color-grey;

			.tab {
				font-size: 14px;
				line-height: 32px;
				color: $uni-text-color-grey;
				text-align: center;
				transition: all 0.3s;

				&.active-1 {
					color: #FFFFFF;
					background: url(../../static/image/message_tab_left_click.png) no-repeat;
					background-size: contain;
				}

				&.active-2 {
					color: #FFFFFF;
					background: url(../../static/image/message_tab_right_click.png) no-repeat;
					background-size: contain;
				}
			}
		}

		.msgList {
			padding: 5px 8px 0;

			.con {
				border-bottom: 1px solid $uni-bg-color-grey;
				padding: 12px 6px;
				line-height: 1.6;

				.til {
					font-size: 15px;
					font-weight: bold;

					span {
						width: 20px;
						height: 20px;
						display: inline-block;
						vertical-align: sub;
						margin-right: 5px;

						&.tian {
							background: url(../../static/image/message_tian_icon.png) no-repeat;
							background-size: contain;
						}

						&.meeting {
							background: url(../../static/image/message_huiyi_icon.png) no-repeat;
							background-size: contain;
						}
					}
				}

				.msg {
					font-size: 14px;
					color: $uni-text-color-grey;
					padding-left: 25px;
				}
			}
		}
	}
</style>
