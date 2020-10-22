<template>
	<view class="container">
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="0" :backgroundCover="'#ffffff'"
		 :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list">
				<view class="msgList">
					<view class="con clearfix" v-for="(item,index) in messageList" :key="index" @click="$tools.goToPage('detail')">
						<div class="content fl">
							<div class="til text-1">
								{{item.title}}
							</div>
							<div class="time text-1">
								{{item.time}}
							</div>
						</div>
						<div class="export fr">导入记录</div>
					</view>
				</view>
			</view>
		</load-refresh>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: [],
				currPage: 1, // 当前页码
				totalPage: 1, // 总页数
			}
		},
		mounted() {
			this.$refs.loadRefresh.runRefresh()
		},
		methods: {
			// 上划加载更多
			loadMore() {
				this.getList();
			},
			// 下拉刷新数据列表
			refresh() {
				this.getList();
			},
			getList() {
				setTimeout(() => {
					this.messageList = [...this.messageList, ...[{
						type: 1,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 2,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 3,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 4,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 1,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 2,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 3,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, {
						type: 4,
						title: '会议通知标题',
						time: '2020-05-15 10:10'
					}, ]]

					this.currPage = 1;
					this.totalPage = 1;

					this.$refs.loadRefresh.loadOver();
				}, 1000)
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
		.msgList {
			padding: 0 16px;

			.con {
				border-bottom: 1px solid $uni-bg-color-grey;
				padding: 12px 6px;
				line-height: 1.8;

				.content {
					width: calc(100% - 50px);

					.til {
						font-size: 15px;
						font-weight: bold;

						span {
							width: 20px;
							height: 20px;
							display: inline-block;
							vertical-align: sub;
							margin-right: 5px;
						}
					}

					.time {
						font-size: 12px;
						color: $uni-text-color-grey;
						padding-left: 15px;
						background: url(../../static/image/jilu_time_icon.png) no-repeat left center;
						background-size: 12px;
					}
				}

				.export {
					width: 50px;
					height: 14px;
					padding-top: 34px;
					font-size: 12px;
					line-height: 14px;
					background: url(../../static/image/import_icon.png) no-repeat top center;
					background-size: 30px;
				}

			}
		}
	}
</style>
