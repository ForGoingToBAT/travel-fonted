import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        author: 'Wise Wrong',
        isLogin:'',
        user:{},
    },
    //修改数据
    mutations:{
        SetPerson(state){
            state.isLogin = sessionStorage.getItem("isLogin");
            console.log(state.isLogin)
            if(state.isLogin){
                state.user = sessionStorage.getItem("user")
            }else{
                state.user={}
            }
        }
    }
})

export default store