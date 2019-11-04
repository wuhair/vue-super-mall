<template>
  <div>
    <swiper ref="swiper" v-if="imgs.length">
      <swiper-item v-for="(item, index) in imgs" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper'
export default {
  name: 'HomeSlider',
  props:{
    imgs:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer()
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer()
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped="scoped">

</style>
