<template>
	<view class="container">
		<view class="chooseBox flex">
			<picker class="item full" @change="bindPickerChange" :value="yearIndex" :range="yearList">
				<input class="uni-input formInput downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择提案年份"
				 v-model="currentYear" />
			</picker>
			<picker class="item full" @change="bindPickerChange2" :value="typeIndex" :range="typeList">
				<input class="uni-input formInput downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择提案类别"
				 v-model="currentType" />
			</picker>
		</view>
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="70" :backgroundCover="'#ffffff'"
		 :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list">
				<view class="msgList">
					<view class="con clearfix" v-for="(item,index) in messageList" :key="index" @click="$tools.goToPage('detail')">
						<div class="content">
							<div class="til text-1">
								{{item.title}}
							</div>
							<div class="time text-1">
								{{item.time}}
							</div>
						</div>
					</view>
				</view>
			</view>
		</load-refresh>
	</view>
</template>

<script>
	export default {
		data() {
			const year = new Date().getFullYear();
			let years = [];
			for (let i = 0; i < 5; i++) {
				years.push(year - i)
			}
			return {
				currentType: '',
				typeIndex: 0,
				typeList: ['类别1', '类别2', '类别3'],
				currentYear: '',
				yearIndex: 0,
				yearList: years,

				messageList: [],
				currPage: 1, // 当前页码
				totalPage: 1, // 总页数
			}
		},
		mounted() {
			this.$refs.loadRefresh.runRefresh()
		},
		methods: {
			bindPickerChange(e) {
				this.yearIndex = e.target.value;
				this.currentYear = this.yearList[this.yearIndex];
				this.$refs.loadRefresh.runRefresh();
			},
			bindPickerChange2(e) {
				this.typeIndex = e.target.value;
				this.currentType = this.typeList[this.typeIndex];
				this.$refs.loadRefresh.runRefresh();
			},
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
		.chooseBox {
			padding: 15px 8px;

			.item {
				padding: 0 8px;

				.formInput {
					padding-left: 14px;
				}
			}
		}

		.msgList {
			padding: 0 16px;

			.con {
				border-bottom: 1px solid $uni-bg-color-grey;
				padding: 12px 6px;
				line-height: 1.8;

				.content {
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
			}
		}
	}
</style>
