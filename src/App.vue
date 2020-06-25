<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">旅游课设</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">首页<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/site">目的地</router-link>
          </li>
          <li class="nav-item float-right">
            <router-link class="nav-link" to="/person">个人中心</router-link>
          </li>
          <li class="nav-item" style="position: absolute; right: 53px;" v-if="isLogin !=='true'">
            <router-link to="/login" class="nav-link">登录</router-link>
          </li>
          <li class="nav-item" style="position: absolute; right: 0;" v-if="isLogin !=='true'">
            <router-link to="/register" class="nav-link">注册</router-link>
          </li>
          <li class="nav-item" style="position: absolute; right: 0;" v-if="isLogin ==='true'">
            <a href="javascript:void(0)" @click="loginOut()" class="nav-link">退出</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted:function () {
    console.log(sessionStorage.getItem("isLogin"))
  },
  data(){
    return{
      isLogin: sessionStorage.getItem("isLogin")
    }
  },
  methods:{
    loginOut:function () {
      sessionStorage.setItem("isLogin","false")
      sessionStorage.setItem("user","")
      window.location.reload()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
