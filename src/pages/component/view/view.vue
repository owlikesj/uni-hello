<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。当设置display: flex后，继续给view等容器组件设置flex-direction: row或column，就可以在该容器内按行或列排布子组件。uni-app默认全局使用flex布局(在App.vue里预设了)。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。
			</view>
			
			<view class="uni-title uni-common-mt">
				flex-direction: row
				<text>\n横向布局</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item uni-bg-red">A</view>
				<view class="flex-item uni-bg-green">B</view>
				<view class="flex-item uni-bg-blue">C</view>
			</view>
			
			<view class="uni-title uni-common-mt">
				flex-direction: column
				<text>\n纵向布局</text>
			</view>
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">A</view>
				<view class="flex-item flex-item-V uni-bg-green">B</view>
				<view class="flex-item flex-item-V uni-bg-blue">C</view>
			</view>
			
			<view class="uni-title uni-common-mt">
				更多布局示例
				<text>\nflex布局演示</text>
			</view>
			<view>
				<view class="text">纵向布局-自动宽度</view>
				<view class="text" style="width: 150px;">纵向布局-固定宽度</view>
				<view class="uni-flex uni-row">
					<view class="text">横向布局-自动宽度</view>
					<view class="text">横向布局-自动宽度</view>
				</view>
				<view class="uni-flex uni-row" style="justify-content: center;">
					<view class="text">横向布局-居中</view>
					<view class="text">横向布局-居中</view>
				</view>
				<view class="uni-flex uni-row" style="justify-content: flex-end;">
					<view class="text">横向布局-居右</view>
					<view class="text">横向布局-居右</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="flex: 1;">横向布局-平均分布</view>
					<view class="text" style="flex: 1;">横向布局-平均分布</view>
				</view>
				<view class="uni-flex uni-row" style="justify-content: space-between;">
					<view class="text">横向布局-两端对齐</view>
					<view class="text">横向布局-两端对齐</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="width: 100px;">固定宽度</view>
					<view class="text" style="flex: 1;">自动占满余量</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="width: 100px;">固定宽度</view>
					<view class="text" style="flex: 1;">自动占满</view>
					<view class="text" style="width: 100px;">固定宽度</view>
				</view>
				<view class="uni-flex uni-row" style="flex-wrap: wrap;">
					<view class="text" style="width: 140px;">一行显示不全,wrap折行</view>
					<view class="text" style="width: 140px;">一行显示不全,wrap折行</view>
					<view class="text" style="width: 140px;">一行显示不全,wrap折行</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="flex: 1;height: 100px;display: flex; justify-content: center;align-items: flex-start;">
						<text>垂直居顶</text>
					</view>
					<view class="text" style="flex: 1;height: 100px;display: flex; justify-content: center;align-items: center;">
						<text>垂直居中</text>
					</view>
					<view class="text" style="flex: 1;height: 100px;display: flex; justify-content: center;align-items: flex-end;">
						<text>垂直居底</text>
					</view>
				</view>
			</view>
			
			<view class="uni-title uni-common-mt">
				组合示例
				<text>\nflex布局演示</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="text" style="width: 100px;height: 110px;display: flex; justify-content: center;align-items: center;">
					<image src="../../../static/plus.png" style="width: 75px;height: 75px;"></image>
				</view>
				<view class="uni-flex uni-column" style="flex: 1;justify-content: space-between;">
					<view class="text" style="height: 60px;text-align: left;padding-left: 10px;padding-top: 5px;">
						文字居左，留出左间距
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="flex: 1;">剩余数量</view>
						<view class="text" style="flex: 1;">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'view'
			}
		}
	}
</script>

<style>
	.flex-item {
		width: 33.3%;
		height: 100px;
		text-align: center;
		line-height: 100px;
	}

	.flex-item-V {
		width: 100%;
		height: 75px;
		text-align: center;
		line-height: 75px;
	}
	.text{
		margin:7.5px 5px;
		padding: 0 10px;
		background-color: #ebebeb;
		height: 35px;
		line-height: 35px;
		text-align: center;
		color: #777;
		font-size: 13px;
	}
	.desc{
		/* text-indent: 20px; */
	}
</style>
