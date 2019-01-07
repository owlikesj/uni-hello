<template>
	<view class="container">
		<view class="page-body">
			<ly-markdown :showPreview="showPreview" :textareaData.sync="textareaData" :textareaHtml.sync="textareaHtml"></ly-markdown>
		</view>
		<page-foot :name="name"></page-foot>
	</view>
</template>

<script>
	import lyMarkdown from '../../../components/ly-markdown/ly-markdown.vue'
	export default {
		components: {
			lyMarkdown
		},
		data() {
			return {
				textareaData: "",
				textareaHtml:"",
				showPreview:false,
				name:'七月_'
			}
		},
		watch:{
			"textareaData":function(){
				this.showPreview = true;
			}
		}
	}
</script>

<style>
	.input-content {
		width: 100%;
	}

	.input-content textarea {
		padding: 8px 12.5px 7.5px 12.5px;
		font-size: 15px;
		min-height: 250px;
		line-height: 1.5;
	}

	.preview {
		border-top: 0.5px solid #e0e0e0;
		width: 100%;
	}

	.toolbar {
		width: 100%;
		border: none;
		box-shadow: 0 0px 2px rgba(0, 0, 0, 0.157), 0 0px 2px rgba(0, 0, 0, 0.227);
	}

	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 61.3px;
		width: 61.3px;
		margin: 6.5px 0 5.5px 0px;
		font-size: 16.5px;
		padding: 5px 6.5px 5.5px 4px;
		color: #757575;
		border-radius: 5.5px;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		line-height: 2.2;
		vertical-align: middle;
	}
</style>
