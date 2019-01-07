<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button @tap="navigateTo">跳转新页面，并传递数据</button>
				<button @tap="navigateBack">返回上一页</button>
				<button @tap="redirectTo">在当前页面打开</button>
				<button @tap="switchTab">切换到模板选项卡</button>
				<button @tap="reLaunch">关闭所有页面，打开首页</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'navigate'
			}
		},
		methods: {
			navigateTo() {
				Lemix.navigateTo({
					url: 'new-page/new-page?data=Hello'
				})
			},
			navigateBack() {
				Lemix.navigateBack();
			},
			redirectTo() {
				Lemix.redirectTo({
					url: 'new-page/new-page'
				});
			},
			switchTab() {
				Lemix.switchTab({
					url: '/pages/tabBar/template/template'
				});
			},
			reLaunch() {
				Lemix.reLaunch({
					url: '/pages/tabBar/component/component'
				});
			}
		}
	}
</script>
