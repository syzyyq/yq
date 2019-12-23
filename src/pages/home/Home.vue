<template>
    <div>
       <home-header :city='city'></home-header>
       <home-swiper :list='swiperList'></home-swiper>
        <home-icons :list='iconList'></home-icons>
        <home-hot :list="hotList"></home-hot>
        <home-like :list='likeList'></home-like>
        <home-weekend :list='weekendList'></home-weekend>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/Hot'
import HomeLike from './components/Like'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
       HomeHeader,
       HomeSwiper,
       HomeIcons,
       HomeHot,
       HomeLike,
       HomeWeekend
    },
    data () {
       return {
          //city:'',
          swiperList: [],
          iconList: [],
          hontList: [],
          likeList: [],
          weekendList: []
       }
    },
    methods: {
       getHomeInfo () {
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc (res) {
          res = res.data
          if(res.ret && res.data){
             const data = res.data
             //this.city = data.city
             this.swiperList = data.swiperList
             this.iconList = data.iconList
             this.hotList = data.hotList
             this.likeList = data.likeList
             this.weekendList = data.weekendList

          }
       }
    },
    mounted () {
       this.getHomeInfo()
      
    }
    }
</script>

<style lang="stylus" scoped>

</style>