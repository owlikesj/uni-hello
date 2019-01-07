<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			// plus.screen.lockOrientation('portrait-primary'); //锁定
			// // 检测升级
			// Lemix.request({
			// 	url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
			// 	data: {
			// 		appid: plus.runtime.appid,
			// 		version: plus.runtime.version,
			// 		imei: plus.device.imei
			// 	},
			// 	success: (res) => {
			// 		console.log('success', res);
			// 		if (res.statusCode == 200 && res.data.isUpdate) {
			// 			let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
			// 			// 提醒用户更新
			// 			Lemix.showModal({
			// 				title: '更新提示',
			// 				content: res.data.note ? res.data.note : '是否选择更新',
			// 				success: (showResult) => {
			// 					if (showResult.confirm) {
			// 						plus.runtime.openURL(openUrl);
			// 					}
			// 				}
			// 			})
			// 		}
			// 	}
			// })
			// // #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* Lemix.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import './common/uni.css'; */

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 14px;
		line-height: 1.8;
	}

	.uni-header-logo {
		padding: 15px;
		text-align: center;
		margin-top: 5px;
	}

	.uni-header-logo image {
		width: 70px;
		height: 70px;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 150px;
		background: #FFF;
		padding: 25px;
		margin-top: 10px;
		font-size: 19px;
		color: #808080;
	}
</style>
