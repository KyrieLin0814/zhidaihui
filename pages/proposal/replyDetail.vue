<template>
	<view class="container">
		<view class="formBox">
			<view class="scroll">
				<view class="form">
					<p>提案名称</p>
					<input class="uni-input formInput title" placeholder-style="color:#D5D5D5" placeholder="请输入提案名称" v-model="data.title" />
				</view>
				<view class="msg">
					<p>案由</p>
					<view class="uni-textarea">
						<textarea placeholder='请输入案由' placeholder-style="color:#D5D5D5" v-model="data.reason"></textarea>
					</view>
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
				<view class="msg">
					<p>提案答复</p>
					<view class="uni-textarea">
						<textarea placeholder='请输入提案回复内容' placeholder-style="color:#D5D5D5" v-model="data.reply"></textarea>
					</view>
				</view>

				<view class="radioBox">
					<radio-group @change="radioChange">
						<label class="radioItem" v-for="(item,index) in items" :key="index" :class="{'checked':item.value === data.result}">
							<view>
								<radio :value="item.value" :checked="item.value === data.result" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
			</view>
		</view>
		<view class="bottomBtns fixed flex" v-if="doneFlag == '0'">
			<button type="default" class="full" @click="saveFunc">保存</button>
			<button type="primary" class="full" @click="sendFunc">答复</button>
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
				doneFlag: '0', //0未审核   1已审核
				id: '',
				data: {
					title: '提案名称提案名称',
					reason: 'App平台软键盘弹出有 adjustResize|adjustPan 两种模式，默认为 adjustPan 模式，小程序平台只支持 adjustPan 模式，H5平台因不同浏览器而异',
					text: '这首诗曾在志愿军部队广泛流传，激起了无数将士们的斗志。如今，当我们重温这首战歌时，将士们保家卫国、至死不渝的决心仍令人心生敬佩。',
					suggest: '战士们爬上光秃秃的山包，还未修筑工事，便与美军打了个“照面”。',
					reply: '',
					result: '1'
				},
				items: [{
					value: '1',
					name: '已经落实'
				}, {
					value: '2',
					name: '正在落实'
				}, {
					value: '3',
					name: '暂缓落实'
				}, {
					value: '4',
					name: '未能通过'
				}, ]
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
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.data.result = evt.target.value;
						break;
					}
				}
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
					content: '是否答复提案?',
					success: function(res) {
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

			.scroll {
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
		.radioBox{
			margin-top:16px;
			padding:0 10px;
		}
	}
</style>
