<template>
  <div class="open-app-container" flex="cross:center dir:right box:first">
    <div class="open-app-btn">立即打开</div>
    <div flex="main:left cross:center">
      <span class="iconfont close-open-btn">&#xe608;</span>
      <span class="iconfont open-logo">&#xe6e4;</span>
      <div class="open-text">
        <p>打开手机淘宝App</p>
        <p>随时随地 想淘就淘</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  .open-app-container {
    height: 1.4rem;
    background-color: #fff;
    border-bottom: 1px solid #bababa;
    .open-app-btn {
      font-size: .3rem;
      text-align: center;
      color: #fff;
      width: 2.1rem;
      background-image: linear-gradient(225deg, rgb(254, 86, 10) 3%, rgb(255, 153, 1) 100%);
      height: 100%;
      line-height: 1.4rem;
    }
    .close-open-btn {
      font-size: .4rem;
      color: #999;
      margin-left: .3rem;
    }
    .open-logo {
      font-size: .8rem;
      color: #fe560a;
      margin-left: .3rem;
    }
    .open-text {
      padding: 0 .3rem;
      :first-child {
        font-size: .36rem;
        color: #333;
      }
      :last-child {
        color: #666;
      }
    }
  }
</style>


