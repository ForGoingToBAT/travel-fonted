import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index'
import site from './components/site'
import city from './components/citys'
import views from './components/views'
import login from './components/LoginStyle'
import register from './components/registerPage'
Vue.use(VueRouter)

export default new VueRouter({
    //n个路由
    routes:[
        {
            path:'/',
            component:index
        },
        {
            path:'/site',
            component:site
        },
        {
            path:'/person',
            component:index
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/city',
            component:city
        },
        {
            path:"/views",//使用:作为占位符号
            component:views
        }
    ]

})
