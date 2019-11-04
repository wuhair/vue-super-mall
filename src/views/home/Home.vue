<template>
  <div id="home">
    <nav-bar class="nav-bar"><span slot='center'>购物街</span></nav-bar>
    <home-slider :imgs="bannerImgs"></home-slider>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar.vue'
  import HomeSlider from 'views/home/childComponents/HomeSlider'
  //网络请求相关
  import {getHomeMultidata} from 'network/home.js'
export default {
  name: '',
  data () {
    return {
      bannerImgs:[]
    }
  },
  methods: {

  },
  components:{
    NavBar,
    HomeSlider
  },
  created(){
    getHomeMultidata().then(res=>{
      this.bannerImgs = res.data.data.banner.list
    })
  }
}
</script>
<style scoped="scoped">
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
