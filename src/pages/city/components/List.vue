<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="area-cont button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="area-cont button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(list, key) of cities" :key="key" :ref="key">
        <div class="area-title border-topbottom">{{key}}</div>
        <div class="area-cont item-list">
        <div class="item border-bottom" v-for="item of list" :key="item.id"  @click="handleCityClick(item.name)">
					{{item.name}}
				</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'CityList',
	props: {
		hotCities: Array,
		cities: Object,
		letter: String
	},
	computed: {
		...mapState({
			currentCity: 'city'
		})
  },
	methods: {
		handleCityClick (city) {
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	watch: {
    letter () {
			if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	}
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .area
      .area-title
        padding-left .2rem
        line-height .6rem
        color: #666
        background: $bgColorGray
      .area-cont
        overflow hidden
        &.button-list
          margin: .2rem .6rem 0 0
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: 0 0 .2rem .2rem
            line-height .48rem
            text-align: center
            border: 1px solid #ddd
            border-radius: .04rem
        .item
          line-height .64rem
          text-indent: .2rem

</style>
