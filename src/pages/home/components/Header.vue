<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">内容</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    height: .88rem
    background: #00bcd4
    .header-left
      float left
      width .64rem
    .header-input
      height .64rem
      color: #ccc
    .header-right
      float right
      text-align center
</style>