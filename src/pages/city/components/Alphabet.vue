<template>
  <ul class="list">
  <li
		class="item"
		v-for="item of letters"
		:key="item"
		:ref="item"
		@click="handleLetterClick"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
	>
		{{item}}
	</li>
  </ul>
</template>

<script>
  export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		computed: {
			letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
		},
		updated () {
			this.startY = this.$refs['A'][0].offsetTop
		},
		data () {
      return {
				TouchStatus: false,
				startY: 0,
				timer: null
      }
    },
		methods: {
			handleLetterClick (e) {
        const letter = e.target.innerText
        this.$emit('change', letter)
			},
			handleTouchStart () {
				this.TouchStatus = true
			},
			handleTouchMove (e) {
				if (this.TouchStatus) {
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 18)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
						}
					}, 16)
        }
			},
			handleTouchEnd () {
				this.TouchStatus = false
			}
		}
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    width: .4rem
    text-align: center
    color: $bgColor
    .item
      line-height: .36rem
</style>
