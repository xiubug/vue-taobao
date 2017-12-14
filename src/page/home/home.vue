<template>
  <div class="home-container">
    <header-home></header-home>
    <div id="scroll_wrapper" class="scroll-wrapper">
      <div class="content">
        <open-app></open-app>
        <mt-swipe :auto="4000" class="home-swipe">
          <mt-swipe-item>
            <img src="//gw.alicdn.com/imgextra/i3/89/TB20HSIewvD8KJjy0FlXXagBFXa_!!89-0-luban.jpg_q50.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="//gw.alicdn.com/imgextra/i3/89/TB20HSIewvD8KJjy0FlXXagBFXa_!!89-0-luban.jpg_q50.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="//gw.alicdn.com/imgextra/i3/89/TB20HSIewvD8KJjy0FlXXagBFXa_!!89-0-luban.jpg_q50.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <footer-tabbar></footer-tabbar>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import BScroll from 'better-scroll'
import headerHome from '../../components/header/headerHome'
import openApp from '../../components/common/openApp'
import footerTabbar from '../../components/footer/footerTabbar'
import { getUserList } from '../../service/api'
export default {
  components: {
    mtSwipe: Swipe,
    mtSwipeItem: SwipeItem,
    headerHome,
    openApp,
    footerTabbar
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('#scroll_wrapper', {
      deceleration: 0.001,
      bounce: true,
      swipeTime: 1800,
      click: true
    })
    getUserList()
  }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    position: relative;
    margin-top: .95rem;
    .home-swipe {
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
</style>


