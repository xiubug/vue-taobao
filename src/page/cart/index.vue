<template>
  <div class="cart-container">
    购物车
    <footer-tabbar :current='"cart"' />
  </div>
</template>

<script>
import footerTabbar from '../../components/footer/footerTabbar'
export default {
  components: {
    footerTabbar
  }
}
</script>

<style lang="less" scoped>
  .cart-container {
    
  }
</style>


