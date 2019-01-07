<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="default" @tap="toast1Tap">点击弹出默认toast</button>
				<button type="default" @tap="toast2Tap">点击弹出设置duration的toast</button>
				<button type="default" @tap="toast3Tap">点击弹出显示loading的toast</button>
				<button type="default" @tap="toast4Tap">点击弹出显示自定义图片的toast</button>
				<button type="default" @tap="hideToast">点击隐藏toast</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'toast'
			}
		},
		methods: {
			toast1Tap: function () {
				Lemix.showToast({
					title: "默认"
				})
			},
			toast2Tap: function () {
				Lemix.showToast({
					title: "duration 3000",
					duration: 3000
				})
			},
			toast3Tap: function () {
				Lemix.showToast({
					title: "loading",
					icon: "loading",
					duration: 5000
				})
			},
			toast4Tap: function () {
				Lemix.showToast({
					title: "logo",
					image: "../../../static/uni.png"
				})
			},
			hideToast: function () {
				Lemix.hideToast()
			}
		}
	}
</script>
