<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click='handleCityClick(item.name)'
            >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
      v-for="(item, key) of cities"
      :key='key'
      :ref='key'
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click='handleCityClick(innerItem.name)'
          >
          {{innerItem.name}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
   methods:{
    // handleCityClick函数实现的时点击城市时将获取的城市通过dispatch方法传递给Actions下的changeCity方法
  //  添加路由跳转到首页
   handleCityClick (city) {
      this.$store.dispatch('changeCity',city)
      // 通过路由来实现页面跳转
      this.$router.push('/')
      // 、alert(city)
    }
   },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{click: true})
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:after
      border-color: #ccc
  .list
    position:absolute
    overflow hidden
    top: 1.58rem
    left:0
    right:0
    bottom:0
    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin .1rem
          padding .1rem 0
          border .02rem solid #ccc
          border-radius: .08rem
    .item-list
     .item
       line-height .54rem
       padding-left: .2rem
</style>
