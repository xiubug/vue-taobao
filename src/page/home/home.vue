<template>
  <div class="home-container">
    <header-home></header-home>
    <div id="scroll_wrapper" class="scroll-wrapper">
      <div class="content">
        <open-app></open-app>
      </div>
    </div>
    <footer-tabbar></footer-tabbar>
  </div>
</template>

<script>
import headerHome from '../../components/header/headerHome'
import openApp from '../../components/common/openApp'
import footerTabbar from '../../components/footer/footerTabbar'
import BScroll from 'better-scroll'
export default {
  components: {
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
  }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    position: relative;
    margin-top: .95rem;
  }
</style>


