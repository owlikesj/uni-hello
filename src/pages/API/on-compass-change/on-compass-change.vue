<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-hello-text uni-center" style="padding-bottom:25px;">
				旋转手机即可获取方位信息
			</view>
			<view class="direction">
				<view class="bg-compass-line"></view>
				<image class="bg-compass" src="../../../static/compass.png" :style="'transform: rotate('+direction+'deg)'"></image>
				<view class="direction-value">
					<text>{{direction}}</text>
					<text class="direction-degree">o</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'onCompassChange',
				direction: 0
			}
		},
		onReady: function () {
			Lemix.onCompassChange((res) => {
				this.direction = parseInt(res.direction)
			})
		},
		onUnload() {
			Lemix.startCompass();
			this.direction = 0;
		}
	}
</script>

<style>
	.direction {
		position: relative;
		margin-top: 35px;
		display: flex;
		width: 270px;
		height: 270px;
		align-items: center;
		justify-content: center;
		margin:0 auto;
	}

	.direction-value {
		position: relative;
		font-size: 100px;
		color: #353535;
		line-height: 1;
		z-index: 1;
	}

	.direction-degree {
		position: absolute;
		top: 0;
		right: -20px;
		font-size: 30px;
	}

	.bg-compass {
		position: absolute;
		top: 0;
		left: 0;
		width: 270px;
		height: 270px;
		transition: .1s;
	}

	.bg-compass-line {
		position: absolute;
		left: 133.5px;
		top: -5px;
		width: 3px;
		height: 28px;
		background-color: #1AAD19;
		border-radius: 499.5px;
		z-index: 1;
	}
</style>
