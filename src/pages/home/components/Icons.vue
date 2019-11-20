<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
        desc: '错峰出行'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
        desc: '赏秋色'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '上海自然博物馆'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '黄浦江游船'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '上海野生'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
        desc: '上海迪士尼'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '世纪公园'
      }]
    }
  },

  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
     .icons >>> .swiper-container
       height 0
       padding-bottom 50%
     .icon
       overflow hidden
       float left
       width 25%
       height 0
       padding-bottom 25%
       position relative
       .icon-img
         position absolute
         top 0
         left 0
         right 0
         bottom .44rem
         box-sizing border-box
         .icon-img-content
           display block
           margin 0 auto
           height 100%
        .icon-desc
          position absolute
          left 0
          right 0
          bottom 0
          height .44rem
          line-height .44rem
          text-align center
          ellipsis()
</style>