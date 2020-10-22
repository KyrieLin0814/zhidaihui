<template>
	<view class="container">
		<view class="form time">
			<p>会议时间</p>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindTimeDateChange">
				<input class="uni-input date downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择会议时间" v-model="data.time" />
			</picker>
		</view>
		<view class="form location">
			<p>会议地点</p>
			<picker @change="bindPickerChange" :value="localIndex" :range="localList">
				<input class="uni-input formInput downIcon location" placeholder-style="color:#D5D5D5" disabled placeholder="请选择会议地点" v-model="data.location" />
			</picker>
		</view>
		
		<view class="form text">
			<p>会议通知</p>
			<view class="uni-textarea">
				<textarea placeholder='请输入请假原因' placeholder-style="color:#D5D5D5" v-model="data.text" />
				</view>
		</view>
		<view class="bottomBtns flex">
			<button type="primary" class="full" @click="sendFunc">发布</button>
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
				data:{
					type: 1,
					time: '',
					location: '',
					text: ''
				},
				date: currentDate,
				localIndex: 0,
				localList: ['地点1', '地点2', '地点3'],
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {
			
		},
		methods: {
			bindTimeDateChange(e) {
				this.data.time = e.target.value
			},
			bindPickerChange(e) {
				this.localIndex = e.target.value;
				this.data.location = this.localList[this.localIndex];
			},
			sendFunc(){
				uni.showModal({
					title: '提示',
					content: '是否发布会议?',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
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
		.form {
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
				.location{
					background: url(../../static/image/location_icon.png) no-repeat 14px center;
					background-size: 14px;
				}
			}
			&.content{
				div{
					line-height:1.4;
				}
			}
			&.text{
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
