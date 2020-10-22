<template>
	<view class="container">
		<view class="tabBox flex">
			<view class="tab full" :class="{'active-1': type == 1}" @click="changeTab(1)">未审核</view>
			<view class="tab full" :class="{'active-2': type == 2}" @click="changeTab(2)">已审核</view>
		</view>

		<view class="list">
			<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="40" :backgroundCover="'#ffffff'"
			 :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
				<view slot="content-list">
					<div class="con" v-for="(item,index) in dataList" :key="index" @click="$tools.goToPage('examineDetail?done=' + (type==1?'0':'1'))">
						<div class="content">
							<view class="topBox clearfix">
								<div class="til text-1">
									{{item.title}}
								</div>
								<div class="tip">{{type==1? '待审核' : '已审核'}}</div>
							</view>
							
							<div class="msg text-1">
								{{item.text}}
							</div>
						</div>
					</div>
				</view>
			</load-refresh>
		</view>
	</view>
</template>

<script>
	import loadRefresh from '@/components/load-refresh/load-refresh.vue'
	export default {
		components: {
			loadRefresh
		},
		data() {
			return {
				type: 1,
				dataList: [],
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
			changeTab(e) {
				this.type = e;
			},
			getList() {
				setTimeout(()=>{
					this.dataList = [...this.dataList,...[{
						id: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, {
						id: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, {
						id: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						id: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, ]]
					
					this.currPage=1;
					this.totalPage=1;
					
					this.$refs.loadRefresh.loadOver();
				},1000)
			},
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0 16px;

		.list {
			margin: 0 -16px;
			// overflow-y: auto;
			// height: calc(100% - 98px);

			.con {
				border-bottom: 1px solid $uni-bg-color-grey;
				line-height: 1.8;
				margin: 0 16px;

				.content {
					padding: 12px 0;
					.topBox{
						.til {
							float: left;
							font-size: 15px;
							font-weight: bold;
							width: calc(100% - 50px);
						}
						.tip {
							float: right;
							width: 50px;
							font-size: 12px;
							margin-top: 3px;
							line-height: 20px;
							border-radius: 3px;
							text-align: center;
							background-color: #FFF8F2;
							color: #FF9024;
						}
					}

					.msg {
						font-size: 14px;
						margin-right: 15px;
						color: $uni-text-color-grey;
					}
				}
			}
		}

	}
</style>
