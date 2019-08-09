<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList " :key="item.id">
			<img class="swiper-img" :src="item.imgUrl" />
		</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</div>
</template>
<script>
export default {
	name: 'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			swiperList: [{
				id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/5cf51617d7efdc4f7537b2c3ac77b2c5.jpg'
			}, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/36358222d41ad18b66efe3dea09df24b.jpg'
			}
			]
		}
	}
}

</script>
<style lang="stylus" scoped>
	//样式穿透
	.wrapper >>> .swiper-pagination-bullet-active
		background :#fff
	.wrapper
		overflow :hidden
		width:100%
		height:0
		padding-bottom:26.7%
		background :#eee

		.swiper-img
			width :100%

</style>
