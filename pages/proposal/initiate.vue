<template>
	<view class="container">
		<view class="tabBox flex">
			<view class="tab full" :class="{'active-1': type == 1}" @click="changeTab(1)">未发布</view>
			<view class="tab full" :class="{'active-2': type == 2}" @click="changeTab(2)">已发布</view>
		</view>

		<view class="list">
			<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="98" :backgroundCover="'#ffffff'"
			 :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
				<view slot="content-list">
					<uni-swipe-action>
						<uni-swipe-action-item class="con clearfix" v-for="(item,index) in dataList" :key="index" :right-options="options"
						 @click="bindClick($event, index)" @change="swipeChange($event, index)">
							<div class="content">
								<div class="til text-1">
									{{item.title}}
								</div>
								<div class="msg text-1">
									{{item.text}}
								</div>
							</div>
							<div class="edit" @click="$tools.goToPage('detail?id=' + item.id)"></div>
						</uni-swipe-action-item>
					</uni-swipe-action>
				</view>
			</load-refresh>
		</view>

		<view class="bottomBtn">
			<button type="primary" @click="$tools.goToPage('detail')">新建</button>
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

				options: [{
					text: '删除',
					style: {
						backgroundColor: '#F85858'
					}
				}]
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
			bindClick(e, index) {
				console.log(index)
				// console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
				uni.showModal({
					title: '提示',
					content: '是否确认删除?',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			swipeChange(e, index) {
				console.log('当前状态：' + open + '，下标：' + index)
			}
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
					float: left;
					padding: 12px 0;
					width: calc(100% - 40px);

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

					.msg {
						font-size: 14px;
						color: $uni-text-color-grey;
					}
				}

				.edit {
					float: right;
					width: 40px;
					height: 70px;
					background: url(../../static/image/faqi_edit_icon.png) no-repeat center;
					background-size: 16px;
				}
			}
		}

		.bottomBtn {
			padding-bottom: 14px;
			background-color: #FFFFFF;
			position: relative;
			z-index: 99;
		}
	}
</style>
