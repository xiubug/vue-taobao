<template>
  <div class="profile-container">
    我的页面
    <footer-tabbar :current='"profile"' />
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
  .profile-container {
    
  }
</style>


