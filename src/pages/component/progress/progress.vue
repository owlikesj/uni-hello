<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box">
				<progress percent="20" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="40" active stroke-width="3" />
				<uni-icon type="close" class="progress-cancel" color="#dd524d"></uni-icon>
			</view>
			<view class="progress-box">
				<progress percent="60" active stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="80" color="#10AEFF" active stroke-width="3" />
			</view>
		</view>
	</view>
</template>
<script>
    import uniIcon from '../../../components/uni-icon.vue'
	export default {
		data() {
			return {
				title: 'progress'
			}
		},
        components: {
        	uniIcon
        },
	}
</script>

<style>
	.progress-box {
		display: flex;
		height: 25px;
		margin-bottom: 30px;
	}
	.progress-cancel {
		margin-left: 20px;
	}
</style>
