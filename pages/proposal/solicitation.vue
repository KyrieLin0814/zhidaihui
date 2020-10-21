<template>
	<view class="container">
		<view class="startTime">
			<p>开始时间</p>
			<input class="uni-input date" placeholder-style="color:#D5D5D5" disabled placeholder="请选择开始时间" 
			v-model="startTime" @click="selectDatePicker('start')"/>
		</view>
		<view class="endTime">
			<p>截止时间</p>
			<input class="uni-input date" placeholder-style="color:#D5D5D5" disabled placeholder="请选择截止时间" 
			v-model="endTime" @click="selectDatePicker('end')"/>
		</view>
		<view class="msg">
			<p>提案征集通知文本</p>
			<view class="uni-textarea">
				<textarea placeholder='请输入通知内容' placeholder-style="color:#D5D5D5" v-model="text" />
				</view>
		</view>
		<view class="bottomBtn">
			<button type="primary" @click="sendFunc">发布</button>
		</view>
		
		 <date-time-picker ref='date-time' :indicatorStyle='indicatorStyle' type='date' datestring='' @change='dateTimeChange'></date-time-picker>
	</view>
</template>

<script>
	import DateTimePicker from '@/components/bory-dateTimePicker/bory-dateTimePicker.vue'
	export default {
		data() {
			return {
				startTime:'',
				endTime: '',
				text:'',
				type: '',
			}
		},
		components: {
			DateTimePicker
		},
		onLoad() {
			
		},
		computed: {
			indicatorStyle() {
				return {
					background: 'rgba(33, 149, 242, 0.2)',
					height: '40px',
				};
			}
		},
		methods: {
			selectDatePicker(type) {
				this.type = type;
				this.$refs['date-time'].show();
			},
			dateTimeChange(value) {
				if(this.type=='start'){
					this.startTime = value;
				}
				if(this.type=='end'){
					this.endTime = value;
				}
			},
			sendFunc(){
				let start = new Date(this.startTime).getTime();
				let end = new Date(this.endTime).getTime();
				if(!this.end || !this.start || !this.text){
					uni.showToast({
					    title: '请填写完整',
						icon: 'none'
					});
					return
				}
				if(end < start){
					uni.showToast({
					    title: '截止时间必须大于开始时间',
						icon: 'none'
					});
					return
				}
			}
		},
		watch: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding:0 16px;
		>view{
			padding:10px 0;
			line-height:2.2;
			>p{
				font-weight: bold;
				font-size:15px;
			}
			>div{
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
				.icon{
					background: url(../../static/image/location_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.msg{
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
