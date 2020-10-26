<template>
	<view class="container">
		<view class="formBox">
			<view class="scroll">
				<view class="form seatImg">
					<p>会议坐席</p>
					<movable-area class="seatBox">
						<movable-view class="seatCon" :x="0" :y="0" direction="all" :scale='true'>
							<img :src="data.img">
							<!-- <p>主席台</p>
							<div class="zxtCon">
								<div class="clo" v-for="(item,index) in seatList1" :key="index">
									<div class="seat seatzxt" v-for="(i,idx) in item" :key="idx" 
										:class="{'disabled': !i.status }">
											{{index+1}}行-{{i.ColumnNum}}号
										</div>
								</div>
							</div>
							<p>观众席</p>
							<div class="gzxCon">
								<div class="clo" v-for="(item,index) in seatList2" :key="index">
									<div class="seat seatgzx" v-for="(i,idx) in item" :key="idx" 
										:class="{'disabled': !i.status }">
											{{index+1}}行-{{i.ColumnNum}}号
										</div>
								</div>
							</div> -->
						</movable-view>
					</movable-area>
				</view>
				<view class="form location">
					<p>会议地点</p>
					<div class="icon">{{data.location}}</div>
				</view>
				<view class="form">
					<p>选择座位</p>
					<input class="uni-input formInput seat" placeholder-style="color:#D5D5D5" placeholder="请选择座位" v-model="data.seat" />
				</view>
				<view class="form">
					<p>代表部门</p>
					<picker @change="bindPickerChange" :value="departIndex" :range="departList">
						<input class="uni-input formInput depart downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择代表部门" v-model="data.depart" />
					</picker>
				</view>
				<view class="form">
					<p>代表姓名</p>
					<picker @change="bindPickerChange2" :value="nameIndex" :range="nameList">
						<input class="uni-input formInput name downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择代表姓名" v-model="data.type" />
					</picker>
				</view>
				
			</view>
		</view>
		<view class="bottomBtns fixed flex">
			<button type="default" class="full" @click="saveFunc">保存</button>
			<button type="primary" class="full" @click="sendFunc">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				data: {
					location: '第三会议室',
					seat: '进门左手第三个',
					depart: '',
					name: '',
					img: require('../../static/image/zuoxi_head_img.png')
				},
				nameIndex: 0,
				nameList: ['张三', '李四', '王五'],
				departIndex:0,
				departList: ['部门1', '部门2', '部门3'],
				seatList1:[[{
					Status:0,
					ColumnNum:4
				},{
					Status:0,
					ColumnNum:3
				},{
					Status:1,
					ColumnNum:2
				},{
					Status:1,
					ColumnNum:1
				}],[{
					Status:0,
					ColumnNum:3
				},{
					Status:1,
					ColumnNum:2
				},{
					Status:0,
					ColumnNum:1
				}]],
				seatList2:[[{
					Status:0,
					ColumnNum:5
				},{
					Status:0,
					ColumnNum:4
				},{
					Status:0,
					ColumnNum:3
				},{
					Status:0,
					ColumnNum:2
				},{
					Status:1,
					ColumnNum:1
				}],[{
					Status:0,
					ColumnNum:5
				},{
					Status:1,
					ColumnNum:4
				},{
					Status:1,
					ColumnNum:3
				},{
					Status:1,
					ColumnNum:2
				},{
					Status:1,
					ColumnNum:1
				}]]
			}
		},
		onLoad() {
			this.id = this.$route.query.id || '';
		},
		computed: {

		},
		methods: {
			bindPickerChange(e){
				this.departIndex = e.target.value;
				this.data.depart = this.departList[this.departIndex];
			},
			bindPickerChange2(e) {
				this.nameIndex = e.target.value;
				this.data.name = this.nameList[this.nameIndex];
			},
			saveFunc() {
				uni.showToast({
					title: '保存成功'
				});
				
				this.$tools.backRoute(1,1500);
			},
			sendFunc() {
				uni.showModal({
					title: '提示',
					content: '是否确定座位?',
					success: function (res) {
						if (res.confirm) {
							let flag = false;
							for (let key in this.data) {
								if (!this.data[key]) {
									flag = true;
								}
							}
							if (flag) {
								uni.showToast({
									title: '请填写完整',
									icon: 'none'
								});
								return
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.formBox {
			height: calc(100% - 61px);
			overflow-y: auto;
			.scroll{
				padding-bottom: 16px;
			}
			.seatImg{
				.seatBox{
					width: 100%;
					height: 60vh;
					overflow: hidden;
					.seatCon{
						width: auto;
						height: auto;
						p{
							text-align: center;
						}
						.zxtCon,.gzxCon{
							.clo{
								text-align: center;
								.seat{
									display: inline-block;
									margin: 5px;
									color: #FFFFFF;
									font-size: 12px;
									padding: 5px;
									
									&.seatzxt{
										background-color: #DD524D;
									}
									&.seatgzx{
										background-color: #0077FF;
									}
								}
							}
						}
					}
				}
				img{
					margin-top: 4px;
					border-radius: 5px;
					display: block;
					width: 100%;
					// box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
				}
			}
			.form{
				&.location{
					font-size:14px;
					line-height:2.2;
					.icon{
						background: url(../../static/image/location_icon.png) no-repeat left center;
						background-size: 14px;
					}
				}
			}
			.form,
			.msg {
				margin-top: 15px;
				padding: 0 16px;
				line-height: 2.2;
				>p {
					font-weight: bold;
					font-size: 15px;
				}
				
				.icon {
					padding-left: 20px;
				}
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
