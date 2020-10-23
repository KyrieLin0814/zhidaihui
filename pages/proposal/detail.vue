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
					<input class="uni-input formInput depart" placeholder-style="color:#D5D5D5" placeholder="请输入承办部门名称" v-model="data.depart" />
				</view>
			</view>
		</view>
		<view class="bottomBtns fixed flex">
			<button type="default" class="full" @click="saveFunc">保存</button>
			<button type="primary" class="full" @click="sendFunc">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				data: {
					title: '',
					phone: '',
					name: '',
					namefuyi: '',
					text: '',
					suggest: '',
					type: '',
					depart: ''
				},
				typeIndex: 0,
				typeList: ['类别1', '类别2', '类别3']
			}
		},
		onLoad() {
			this.id = this.$route.query.id || '';
			//改变页面标题
			if (this.id) {
				uni.setNavigationBarTitle({
					title: '编辑提案'
				})
			}

		},
		computed: {

		},
		methods: {
			bindPickerChange(e) {
				this.typeIndex = e.target.value;
				this.data.type = this.typeList[this.typeIndex];
			},
			saveFunc() {
				uni.showToast({
					title: '保存成功'
				});
				this.$tools.backRoute(1,1500);
			},
			sendFunc() {
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
