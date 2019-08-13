<template>
	<div>
		<div class="search">
			<input  v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom " v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom " v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	methods: {
		handleCityClick (city) {
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	computed: {
		hasNoData () {
			return !this.list.length
		}
  },
	watch: {
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if (!this.keyword) {
				this.list = []
        return
      }
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
							result.push(value)
						}
					})
				}
				this.list = result
			}, 100)
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .12rem
    background: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: .6rem
			padding: 0 .1rem
			line-height: .6rem
			text-align: center
			border-radius: .04rem
			color :#666
	.search-content
		position: absolute;
		top: 1.6rem
		right: 0
		bottom: 0
		left: 0
		overflow hidden
		z-index: 1
		background: #eee
		.search-item
			text-indent: .2rem
			line-height: .62rem
			background: #fff
			color: #666
</style>
