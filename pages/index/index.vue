<template>
	<view class="content">
		<image class="logo" style="width: 32px; height: 32px" src="/static/rabbit.png"></image>
		<view class="text-area">
			<text class="title" @click="clickHandler">{{ "getApp()" }}</text>
		</view>
		<common-component-a :id="'common-component-a'"></common-component-a>
		<test-easy-com></test-easy-com>
		<view>!!!!!!!!!</view>
		<view>
			<h2>Main page test</h2></rich-text>
		</view>

		<button @click="testMyApi">调用原生API(手机端有效)</button>
	</view>
</template>

<script>
	// #ifdef APP
	import {
		myApi,
		myApiSync,
		MyApiOptions
	} from "@/uni_modules/test-api";
	// #endif

	export default {
		data() {
			return {
				title: "uni-demo-default",
			};
		},
		onLoad() {},
		methods: {
			clickHandler() {
				console.log("app console.", getApp());
			},
			// #ifdef APP
			testMyApi() {
				// 调用异步方法示例
				let options = {
					paramA: false,
					complete: (res) => {
						console.log(res)
					}
				}

				myApi(options);
			},
			testMyApiSync() {
				// 调用同步方法示例
				console.log(myApiSync(true))
			},
			// #endif

		},
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>