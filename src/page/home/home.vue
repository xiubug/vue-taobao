<template>
  <div class="home-container">
    <header-home></header-home>
    <footer-tabbar></footer-tabbar>
  </div>
</template>

<script>
import headerHome from '../../components/header/headerHome'
import footerTabbar from '../../components/footer/footerTabbar'
export default {
  components: {
    headerHome,
    footerTabbar
  }
}
</script>

