<template>
	<view class="container">
		<view class="startTime">
			<p>开始时间</p>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindStartDateChange">
				<input class="uni-input date downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择开始时间" v-model="startTime" />
			</picker>
		</view>
		<view class="endTime">
			<p>截止时间</p>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindEndDateChange">
				<input class="uni-input date downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择截止时间" v-model="endTime"/>
			</picker>
		</view>
		<view class="msg">
			<p>提案征集通知文本</p>
			<view class="uni-textarea">
				<textarea placeholder='请输入通知内容' placeholder-style="color:#D5D5D5" v-model="text"></textarea>
			</view>
		</view>
		<view class="bottomBtn">
			<button type="primary" @click="sendFunc">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				startTime: '',
				endTime: '',
				text: '',
				type: '',
				date: currentDate
			}
		},
		onLoad() {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindStartDateChange(e) {
				this.startTime = e.target.value
			},
			bindEndDateChange(e) {
				this.endTime = e.target.value
			},
			sendFunc() {
				let start = new Date(this.startTime).getTime();
				let end = new Date(this.endTime).getTime();
				if (!this.endTime || !this.startTime || !this.text) {
					uni.showToast({
						title: '请填写完整',
						icon: 'none'
					});
					return
				}
				if (end < start) {
					uni.showToast({
						title: '截止时间不能小于开始时间',
						icon: 'none'
					});
					return
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0 16px;

		>view {
			padding: 10px 0;
			line-height: 2.2;

			>p {
				font-weight: bold;
				font-size: 15px;
			}

			>div {}

			.icon {
				padding-left: 20px;
			}

			&.time {
				.icon {
					background: url(../../static/image/date_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.location {
				.icon {
					background: url(../../static/image/location_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.msg {
				textarea {
					font-size: 14px;
					border: 1px solid #E5E5E5;
					width: calc(100% - 16px);
					padding: 8px;
					border-radius: 5px;
					height: 125px;
				}
			}
		}
	}
</style>
