import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 通过state保存共享数据
    state: {
        city: '长沙'
    },
    // actions接收changeCity函数传递过来的city,在通过ctx.commit将city传递出去
    actions: {
        changeCity (ctx,city) {
            ctx.commit('changeCity',city)
            console.log(city)
        }
    },
    //在通过mutations里的changeCity函数将city传递给state 
    mutations: {
        changeCity (state,city) {
            state.city = city
        }
    }
})