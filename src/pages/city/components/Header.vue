<template>
  <div class="header">
		城市选择
		<router-link to="/">
		<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
  </div>
</template>

<script>
  export default {
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headHeight
    line-height: $headHeight
    text-align center
    font-size: .32rem
    color: #fff
    background: $bgColor
    .back-icon
      position absolute
      top: 0;
      left: 0
      width: .6rem
      font-size .36rem
      color: #fff
</style>
