<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<block v-if="tempFilePath">
				<image :src="tempFilePath" class="image" mode="aspectFit"></image>
			</block>
			<block v-if="!tempFilePath && savedFilePath">
				<image :src="savedFilePath" class="image" mode="aspectFit"></image>
			</block>
			<block v-if="!tempFilePath && !savedFilePath">
				<view class="uni-hello-addfile" @click="chooseImage">+ 请选择文件</view>
			</block>
			<view class="uni-btn-v">
				<button class="btn-savefile" @click="saveFile">保存文件</button>
				<button @click="clear">删除文件</button>
			</view>
			<view class="btn-area">
				<button @click="openDocument">打开pdf文件</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'saveFile',
				tempFilePath: '',
				savedFilePath: ''
			}
		},
		onLoad() {
			this.savedFilePath = Lemix.getStorageSync('savedFilePath');
		},
		methods: {
			chooseImage() {
				Lemix.chooseImage({
					count: 1,
					success: (res) => {
						this.tempFilePath = res.tempFilePaths[0]
					}
				})
			},
			saveFile() {
				if (this.tempFilePath.length > 0) {
					Lemix.saveFile({
						tempFilePath: this.tempFilePath,
						success: (res) => {
							this.savedFilePath = res.savedFilePath
							Lemix.setStorageSync('savedFilePath', res.savedFilePath)
							Lemix.showModal({
								title: '保存成功',
								content: '下次进入页面时，此文件仍可用',
								showCancel: false
							})
						},
						fail: (res) => {
							Lemix.showModal({
								title: '保存失败',
								content: '失败原因: ' + JSON.stringify(res),
								showCancel: false
							})
						}
					})
				} else {
					Lemix.showModal({
						content: "请选择文件",
						showCancel: false
					})
				}
			},
			clear() {
				Lemix.setStorageSync('savedFilePath', '')
				this.tempFilePath = '',
					this.savedFilePath = ''
			},
			openDocument() {
				Lemix.downloadFile({
					url: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
					success: function(res) {
						var filePath = res.tempFilePath
						Lemix.openDocument({
							filePath: filePath,
							success: function(res) {
								console.log('打开文档成功')
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.image {
		width: 100%;
		height: 180px;
	}

	.btn-savefile {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
