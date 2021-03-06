import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index'
import site from './components/site'
import city from './components/citys'
import views from './components/views'
import login from './components/LoginStyle'
import register from './components/registerPage'
import person from './components/person'
import personInfo from './components/personInfo'
import UserRouter from './components/UserRouter'
import UserMessage from "./components/UserMessage"
import RouteDetail from './components/routeDetail'
import changePwd  from "@/components/changePwd";
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
        },
        {//路线的详情
            path:"/routeDetail",
            component:RouteDetail
        },
        {
            path:"/person",
            component:person,
            children:[
                {
                    path:"/person",
                    component:personInfo
                },
                {
                    path: "/person/userRouter",
                    component:UserRouter
                },
                {
                    path:"/person/userMessage",
                    component:UserMessage
                },
                {
                    path:"/person/changePwd",
                    component:changePwd
                }
            ]
        }
    ]

})
