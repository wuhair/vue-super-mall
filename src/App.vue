<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link='/home'>
        <img slot='icon' src="~assets/tabbar/home.svg" />
        <img slot='active-icon' src="~assets/tabbar/home_active.svg"/>
        <span slot='text'>首页</span>
      </tab-bar-item>
      <tab-bar-item link='/category'>
        <img slot='icon' src="~assets/tabbar/category.svg" />
        <img slot='active-icon' src="~assets/tabbar/category_active.svg"/>
        <span slot='text'>分类</span>
      </tab-bar-item>
      <tab-bar-item link='/cart'>
        <img slot='icon' src="~assets/tabbar/cart.svg" />
        <img slot='active-icon' src="~assets/tabbar/cart_active.svg"/>
        <span slot='text'>购物车</span>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img slot='icon' src="~assets/tabbar/profile.svg" />
        <img slot='active-icon' src="~assets/tabbar/profile_active.svg"/>
        <span slot='text'>我的</span>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from 'common/TabBar.vue'
import TabBarItem from 'common/TabBarItem'
export default {
  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
