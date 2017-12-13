<template>
  <div class="header-home-container" flex="">
    <div class="header-logo iconfont" flex-box="0">&#xe614;</div>
    <div class="header-search" flex-box="1">
      <span class="header-search-placeholder"><i class="iconfont iconfont-search">&#xe60d;</i>寻找宝贝店铺</span>
    </div>
  </div>
</template>

<script>
export default {
  components: { }
}
</script>

<style lang="less" scoped>
    .header-home-container {
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -3.75rem;
        width: 100%;
        max-width: 7.5rem;
        height: .95rem;
        background-color: #FE5400;
        padding: .12rem .12rem .12rem 0;
        z-index: 1;
        .header-logo {
          font-size: .7rem;
          color: #fff;
        }
        .header-search {
          width: 100%;
          box-sizing: border-box;
          background-color: #B52600;
          text-align: center;
          border-radius: .1rem;
          height: .7rem;
          line-height: .7rem;
          .header-search-placeholder {
            color: #fff;
            font-size: .3rem;
            .iconfont-search {
              -webkit-font-smoothing: antialiased;
              -webkit-text-stroke-width: 0.2px;
              -moz-osx-font-smoothing: grayscale;
              font-size: .3rem;
              margin-right: 5px;
            }
          }
        }
    }
</style>


