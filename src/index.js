import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import store from './store'
import './common/uni.css'

// Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)


App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
	config: {
		"pages": [
			"pages/tabBar/component/index",
			"pages/tabBar/API/index",
			"pages/tabBar/template/index",
			'pages/component/view/index',
			// 'pages/component/scroll-view/scroll-view',
			// 'pages/component/swiper/swiper',
			// 'pages/component/movable-view/movable-view',
			// 'pages/component/text/text',
			// 'pages/component/rich-text/rich-text',
			// 'pages/component/progress/progress',
			// 'pages/component/icon/icon'
		],
		// "subPackages": [{
		// 	"root": "pages/template",
		// 	"pages": [{
		// 		"path": "number-box/number-box",
		// 		"style": {
		// 			"navigationBarTitleText": "数字输入框"
		// 		}
		// 	},
		// 	{
		// 		"path": "product-list/product-list",
		// 		"style": {
		// 			"navigationBarTitleText": "商品列表",
		// 			"enablePullDownRefresh": true,
		// 			"onReachBottomDistance": 20
		// 		}
		// 	},
		// 	// #ifdef APP-PLUS || MP-WEIXIN || H5
		// 	{
		// 		"path": "mdparse/mdparse",
		// 		"style": {
		// 			"navigationBarTitleText": "markdown富文本渲染"
		// 		}
		// 	},
		// 	{
		// 		"path": "md-editor/md-editor",
		// 		"style": {
		// 			"navigationBarTitleText": "md富文本编辑器"
		// 		}
		// 	},
		// 	// #endif
		// 	{
		// 		"path": "qrcode/qrcode",
		// 		"style": {
		// 			"navigationBarTitleText": "二维码生成"
		// 		}
		// 	},
		// 	{
		// 		"path": "crop/crop",
		// 		"style": {
		// 			"navigationBarTitleText": "图片裁剪"
		// 		}
		// 	},
		// 	// #ifndef MP-ALIPAY
		// 	{
		// 		"path": "echarts/echarts",
		// 		"style": {
		// 			"navigationBarTitleText": "ECharts图表"
		// 		}
		// 	},
		// 	// #endif
		// 	// #ifdef APP-PLUS || H5 || MP-WEIXIN
		// 	{
		// 		"path": "gesture-lock/gesture-lock",
		// 		"style": {
		// 			"navigationBarTitleText": "手势图案锁屏"
		// 		}
		// 	},
		// 	// #endif
		// 	{
		// 		"path": "nav-default/nav-default",
		// 		"style": {
		// 			"navigationBarTitleText": "默认导航栏"
		// 		}
		// 	},
		// 	// #ifdef APP-PLUS || H5
		// 	{
		// 		"path": "nav-transparent/nav-transparent",
		// 		"style": {
		// 			"navigationBarTitleText": "透明渐变导航栏",
		// 			"app-plus": {
		// 				"titleNView": {
		// 					"type": "transparent"
		// 				}
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "nav-button/nav-button",
		// 		"style": {
		// 			"navigationBarTitleText": "导航栏带自定义按钮",
		// 			"app-plus": {
		// 				"titleNView": {
		// 					"buttons": [{
		// 						"type": "share"
		// 					},
		// 					{
		// 						"type": "favorite"
		// 					}
		// 					]
		// 				}
		// 			}
		// 		}
		// 	},
		// 	// #endif
		// 	{
		// 		"path": "mpvue-picker/mpvue-picker",
		// 		"style": {
		// 			"navigationBarTitleText": "多列选择picker"
		// 		}
		// 	},
		// 	{
		// 		"path": "drawer/drawer",
		// 		"style": {
		// 			"navigationBarTitleText": "抽屉侧滑菜单drawer",
		// 			"app-plus": {
		// 				"titleNView": {
		// 					"buttons": [{
		// 						"text": "\ue563",
		// 						"fontSrc": "/static/uni.ttf",
		// 						"fontSize": "22px"
		// 					}]
		// 				},
		// 				"bounce": "none"
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "load-more/load-more",
		// 		"style": {
		// 			"navigationBarTitleText": "加载更多"
		// 		}
		// 	},
		// 	{
		// 		"path": "left-category/left-category",
		// 		"style": {
		// 			"navigationBarTitleText": "侧边分类导航"
		// 		}
		// 	},
		// 	{
		// 		"path": "segmented-control/segmented-control",
		// 		"style": {
		// 			"navigationBarTitleText": "分段器segement",
		// 			"app-plus": {
		// 				"bounce": "none"
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "list-with-collapses/list-with-collapses",
		// 		"style": {
		// 			"navigationBarTitleText": "二级列表"
		// 		}
		// 	},
		// 	{
		// 		"path": "list-triplex-row/list-triplex-row",
		// 		"style": {
		// 			"navigationBarTitleText": "三行列表"
		// 		}
		// 	},
		// 	{
		// 		"path": "list2detail-list/list2detail-list",
		// 		"style": {
		// 			"navigationBarTitleText": "列表到详情示例",
		// 			"enablePullDownRefresh": true
		// 		}
		// 	},
		// 	{
		// 		"path": "list2detail-detail/list2detail-detail",
		// 		"style": {
		// 			"navigationBarTitleText": "详情",
		// 			"app-plus": {
		// 				"titleNView": {
		// 					"type": "transparent"
		// 				}
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "popup/popup",
		// 		"style": {
		// 			"navigationBarTitleText": "popup",
		// 			"app-plus": {
		// 				"bounce": "none"
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "tabbar/tabbar",
		// 		"style": {
		// 			"navigationBarTitleText": "可拖动顶部选项卡",
		// 			"app-plus": {
		// 				"titleNView": {
		// 					"titleText": "可拖动顶部选项卡（原生）"
		// 				}
		// 			},
		// 			"h5": {
		// 				"titleNView": {
		// 					"titleText": "可拖动顶部选项卡"
		// 				}
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "tabbar/detail/detail",
		// 		"style": {
		// 			"navigationBarTitleText": "详情页面"
		// 		}
		// 	},
		// 	{
		// 		"path": "media-list/media-list",
		// 		"style": {
		// 			"navigationBarTitleText": "图文列表"
		// 		}
		// 	},
		// 	{
		// 		"path": "index-list/index-list",
		// 		"style": {
		// 			"navigationBarTitleText": "索引列表index-list",
		// 			"mp-weixin": {
		// 				"disableScroll": true
		// 			},
		// 			"app-plus": {
		// 				"bounce": "none"
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "grid/grid",
		// 		"style": {
		// 			"navigationBarTitleText": "九宫格"
		// 		}
		// 	},
		// 	{
		// 		"path": "grid-pagination/grid-pagination",
		// 		"style": {
		// 			"navigationBarTitleText": "左右拖动分页9宫格"
		// 		}
		// 	},
		// 	{
		// 		"path": "badge/badge",
		// 		"style": {
		// 			"navigationBarTitleText": "数字角标"
		// 		}
		// 	},
		// 	{
		// 		"path": "accordion/accordion",
		// 		"style": {
		// 			"navigationBarTitleText": "折叠面板"
		// 		}
		// 	},
		// 	{
		// 		"path": "cardview/cardview",
		// 		"style": {
		// 			"navigationBarTitleText": "卡片视图"
		// 		}
		// 	},
		// 	{
		// 		"path": "list-with-badges/list-with-badges",
		// 		"style": {
		// 			"navigationBarTitleText": "右侧带角标"
		// 		}
		// 	},
		// 	{
		// 		"path": "lazy-load/lazy-load",
		// 		"style": {
		// 			"navigationBarTitleText": "懒加载"
		// 		}
		// 	},
		// 	{
		// 		"path": "lazy-load-custom/lazy-load-custom",
		// 		"style": {
		// 			"navigationBarTitleText": "懒加载"
		// 		}
		// 	},
		// 	{
		// 		"path": "im-chat/im-chat",
		// 		"style": {
		// 			"navigationBarTitleText": "聊天窗口chat"
		// 		}
		// 	},
		// 	{
		// 		"path": "nav-bar/nav-bar",
		// 		"style": {
		// 			"navigationBarTitleText": "导航栏组件",
		// 			"enablePullDownRefresh": true,
		// 			"app-plus": {
		// 				"titleNView": false,
		// 				"bounce": "none",
		// 				"scrollIndicator": "none",
		// 				"pullToRefresh": {
		// 					"style": "circle",
		// 					"offset": "70px",
		// 					"color": "#007AFF"
		// 				}
		// 			}
		// 		}
		// 	},
		// 	{
		// 		"path": "scrollmsg/scrollmsg",
		// 		"style": {
		// 			"navigationBarTitleText": "滚动公告"
		// 		}
		// 	},
		// 	{
		// 		"path": "steps/steps",
		// 		"style": {
		// 			"navigationBarTitleText": "步骤展示"
		// 		}
		// 	},
		// 	{
		// 		"path": "comments/comments",
		// 		"style": {
		// 			"navigationBarTitleText": "评论界面"
		// 		}
		// 	},
		// 	{
		// 		"path": "timeline/timeline",
		// 		"style": {
		// 			"navigationBarTitleText": "时间轴 timeline"
		// 		}
		// 	},
		// 	{
		// 		"path": "tag/tag",
		// 		"style": {
		// 			"navigationBarTitleText": "标签tag"
		// 		}
		// 	},
		// 	{
		// 		"path": "countdown/countdown",
		// 		"style": {
		// 			"navigationBarTitleText": "倒计时"
		// 		}
		// 	},
		// 	{
		// 		"path": "datachecker/datachecker",
		// 		"style": {
		// 			"navigationBarTitleText": "表单校验"
		// 		}
		// 	},
		// 	{
		// 		"path": "sbanner/sbanner",
		// 		"style": {
		// 			"navigationBarTitleText": "插屏弹窗",
		// 			"app-plus": {
		// 				"bounce": "none"
		// 			}
		// 		}
		// 	}
		// 	]
		// }],
		"globalStyle": {
			"navigationBarTextStyle": "black",
			"navigationBarTitleText": "Hello uniapp",
			"navigationBarBackgroundColor": "#F8F8F8",
			"backgroundColor": "#F8F8F8",
			"mp-alipay": {
				"titleBarColor": "#FFFFFF"
			}
		},
		"tabBar": {
			"color": "#7A7E83",
			"selectedColor": "#007AFF",
			"borderStyle": "black",
			"backgroundColor": "#F8F8F8",
			"list": [{
				"pagePath": "pages/tabBar/component/index",
				"iconPath": "static/component.png",
				"selectedIconPath": "static/componentHL.png",
				"text": "组件"
			},
			{
				"pagePath": "pages/tabBar/API/index",
				"iconPath": "static/api.png",
				"selectedIconPath": "static/apiHL.png",
				"text": "接口"
			},
			{
				"pagePath": "pages/tabBar/template/index",
				"iconPath": "static/template.png",
				"selectedIconPath": "static/templateHL.png",
				"text": "模板"
			}
			]
		}
	}

}
