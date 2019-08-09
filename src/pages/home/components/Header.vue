<template>
<div class="header">
  <div class="header-left">
		<div class="iconfont back-icon">&#xe624;</div>
	</div>
  <div class="header-input">
		<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题
		</div>
  <div class="header-right">
		城市
		<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
</div>
</template>

<script>
export default {
name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		line-height: .86rem
		//background: #00bcd4
		background: $bgColor
		color :#fff
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align :center
				font-size: .4rem
		.header-input
			flex: 1
			height:.64rem
			// 设置以百分比计的行高
			line-height:.64rem
			// 设置元素的上外边距
			margin-top :.12rem
			// 设置元素的左外边距
			margin-left :.2rem
			// 属性设置元素左内边距(空白)
			padding-left :.2rem
			background :#fff
			// 向 div 元素添加圆角边框：
			border-radius:.1rem
			color :#ccc
		.header-right
			width: 1.24rem
			float: right
			text-align :center
			.arrow-icon
				margin-left :-.04rem
				font-size :.24rem
</style>
