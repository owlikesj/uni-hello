<template>
	<view>
		<view class="banner">
			<image class="banner-img" :src="banner.cover"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.author_name}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.published_at}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="htmlString"></rich-text>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'list-triplex-row',
				banner: {},
				htmlString: ""
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.title,
				path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
			}
		},
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(event.detailDate));
			} catch (error) {
				this.banner = JSON.parse(event.detailDate);
			}

			this.getDetail();
			Lemix.setNavigationBarTitle({
				title: this.banner.title
			});
		},
		methods: {
			getDetail() {
				Lemix.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					success: (data) => {
						if (data.statusCode == 200) {
							this.htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
						}
					},
					fail: () => {
						console.log('fail');
					}
				})
			}
		}
	}
</script>

<style>
	.banner {
		height: 180px;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 42px;
		overflow: hidden;
		position: absolute;
		left: 15px;
		bottom: 15px;
		width: 90%;
		font-size: 16px;
		font-weight: 400;
		line-height: 21px;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 10px 20px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 13px;
		line-height: 25px;
		margin: 0 10px;
	}

	.article-author,
	.article-time {
		font-size: 15px;
	}

	.article-content {
		padding: 0 15px;
		overflow: hidden;
		font-size: 15px;
		margin-bottom: 15px;
	}
</style>
