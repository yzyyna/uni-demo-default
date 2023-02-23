<template>
	<view class="content">
		<image class="logo" style="width: 32px; height: 32px" src="/static/rabbit.png"></image>
		<view class="text-area">
			<text class="title" @click="clickHandler">{{ "getApp()" }}</text>
		</view>
		<common-component-a :id="'common-component-a'"></common-component-a>
		<view><a @click="clickHandlerToPages(2)">uni.navigateTo</a></view>
		<view><a @click="clickHandlerToPagesRedirect(2)">uni.redirectTo</a></view>
		<view><a @click="clickHandlerToPagesReLaunch(2)">uni.reLaunch</a></view>
		<view><a @click="clickHandlerSwitchTab(2)">uni.reLaunch</a></view>
		<view><h2>test helo waiting for reply</h2></rich-text></view>
	</view>
</template>

<script>
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
			clickHandlerToPages(index) {
				uni.navigateTo({
					url: `/pages/pages${index}/index`,
				});
				console.log("navigate to pages" + index);
			},
			clickHandlerToPagesRedirect(index) {
				uni.redirectTo({
					url: `/pages/pages${index}/index`,
				});
				console.log("redirect to pages" + index);
			},
			clickHandlerToPagesReLaunch(index) {
				uni.reLaunch({
					url: `/pages/pages${index}/index`
				})
				console.log('relaunch to pages' + index)
			},
			clickHandlerSwitchTab(index) {
				uni.switchTab({
					url: `/pages/pages${index}/index`
				})
				console.log('switch tab to pages' + index)
			}
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
