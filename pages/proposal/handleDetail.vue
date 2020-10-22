<template>
	<view class="container">
		<view class="formBox">
			<view class="scroll">
				<view class="form">
					<p>提案名称</p>
					<input class="uni-input formInput title" placeholder-style="color:#D5D5D5" placeholder="请输入提案名称" v-model="data.title" />
				</view>
				<view class="form">
					<p>提案人</p>
					<input class="uni-input formInput name" placeholder-style="color:#D5D5D5" placeholder="请输入提案人" v-model="data.name" />
				</view>
				<view class="form">
					<p>联系方式</p>
					<input class="uni-input formInput phone" placeholder-style="color:#D5D5D5" placeholder="请输入联系方式" maxlength="11" v-model="data.phone" />
				</view>
				<view class="form">
					<p>附议人</p>
					<input class="uni-input formInput name" placeholder-style="color:#D5D5D5" placeholder="请输入附议人" v-model="data.namefuyi" />
				</view>
				<view class="msg">
					<p>提案内容</p>
					<view class="uni-textarea">
						<textarea placeholder='请输入提案内容' placeholder-style="color:#D5D5D5" v-model="data.text"></textarea>
					</view>
				</view>
				<view class="msg">
					<p>建议和措施</p>
					<view class="uni-textarea">
						<textarea placeholder='请输入建议和措施' placeholder-style="color:#D5D5D5" v-model="data.suggest"></textarea>
					</view>
				</view>
				<view class="form">
					<p>提案类别</p>
					<picker @change="bindPickerChange" :value="typeIndex" :range="typeList">
						<input class="uni-input formInput type downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择提案类别" v-model="data.type" />
					</picker>
				</view>
				<view class="form">
					<p>建议公司承办部门</p>
					<picker @change="bindPickerChange2" :value="departIndex" :range="departList">
						<input class="uni-input formInput depart downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择承办部门" v-model="data.depart" />
					</picker>
				</view>
				<view class="form">
					<p>抄送相关部门</p>
					<picker @change="bindPickerChange3" :value="chaosongIndex" :range="chaosongList">
						<input class="uni-input formInput chaosong downIcon" placeholder-style="color:#D5D5D5" disabled placeholder="请选择抄送部门" v-model="data.chaosong" />
					</picker>
				</view>
			</view>
		</view>
		<view class="bottomBtns fixed flex" v-if="doneFlag == '0'">
			<button type="primary" class="full" @click="sendFunc">分发</button>
		</view>
		<view class="bottomBtns fixed flex" v-if="doneFlag == '1'">
			<button type="primary" class="full" @click="$tools.backRoute(1)">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doneFlag: '0' , //0未审核   1已审核
				id: '',
				data: {
					title: '提案名称提案名称',
					phone: '13356566565',
					name: '张三',
					namefuyi: '李四',
					text: '这首诗曾在志愿军部队广泛流传，激起了无数将士们的斗志。如今，当我们重温这首战歌时，将士们保家卫国、至死不渝的决心仍令人心生敬佩。',
					suggest: '战士们爬上光秃秃的山包，还未修筑工事，便与美军打了个“照面”。',
					type: '类别1',
					depart: '部门1',
					chaosong:''
				},
				typeIndex: 0,
				typeList: ['类别1', '类别2', '类别3'],
				departIndex:0,
				departList: ['部门1', '部门2', '部门3'],
				chaosongIndex:0,
				chaosongList: ['部门1', '部门2', '部门3'],
			}
		},
		onLoad() {
			this.id = this.$route.query.id || '';
			//是否完成
			this.doneFlag = this.$route.query.done;
		},
		computed: {

		},
		methods: {
			bindPickerChange(e) {
				this.typeIndex = e.target.value;
				this.data.type = this.typeList[this.typeIndex];
			},
			bindPickerChange2(e){
				this.departIndex = e.target.value;
				this.data.depart = this.departList[this.departIndex];
			},
			bindPickerChange3(e){
				this.chaosongIndex = e.target.value;
				this.data.chaosong = this.chaosongList[this.chaosongIndex];
			},
			sendFunc() {
				uni.showModal({
					title: '提示',
					content: '是否分发提案?',
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
