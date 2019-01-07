<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">key</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="请输入key" name="key" :value="key" @input="keyChange"></input>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">value</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="请输入value" name="data" :value="data" @input="dataChange"></input>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="setStorage">存储数据</button>
					<button @tap="getStorage">读取数据</button>
					<button @tap="clearStorage">清理数据</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'get/set/clearStorage',
				key: '',
				data: ''
			}
		},
		methods: {
			keyChange: function (e) {
				this.key = e.target.value
			},
			dataChange: function (e) {
				this.data = e.target.value
			},
			getStorage: function () {
				var key = this.key,
					data = this.data;
				if (key.length === 0) {
					Lemix.showModal({
						title: '读取数据失败',
						content: "key 不能为空",
						showCancel:false
					})
				} else {
					Lemix.getStorage({
						key: key,
						success: (res) => {
							Lemix.showModal({
								title: '读取数据成功',
								content: "data: '" + res.data + "'",
								showCancel:false
							})
						},
						fail: () => {
							Lemix.showModal({
								title: '读取数据失败',
								content: "找不到 key 对应的数据",
								showCancel:false
							})
						}
					})
				}
			},
			setStorage: function () {
				var key = this.key
				var data = this.data
				if (key.length === 0) {
					Lemix.showModal({
						title: '保存数据失败',
						content: 'key 不能为空',
						showCancel:false
					})
				} else {
					Lemix.setStorage({
						key: key,
						data: data,
						success: (res) => {
							Lemix.showModal({
								title: '存储数据成功',
								content: ' ',
								showCancel:false
							})
						},
						fail: () => {
							Lemix.showModal({
								title: '储存数据失败!',
								showCancel:false
							})
						}
					})
				}
			},
			clearStorage: function () {
				Lemix.clearStorageSync()
				this.key = '',
					this.data = ''
				Lemix.showModal({
					title: '清除数据成功',
					content: ' ',
					showCancel:false
				})
			}
		}
	}
</script>

<style>
	.btn-setstorage {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
