<template>
  <form>
    <div class="form-group">
      <label for="account">账号</label>
      <input type="text" class="form-control" id="account" v-model="account" autoComplete="new-password"/>
    </div>
    <div class="form-group">
      <label for="password">密码</label>
      <input type="password" class="form-control" id="password" v-model="password" autoComplete="new-password" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="rememberme" v-model="rememberMe"/>
      <label class="form-check-label" for="rememberme">记住我<small>10天免登录</small></label>
    </div>
    <button class="btn btn-primary" @click="submit()">登录</button>
  </form>
</template>

<script>
  import $ from 'jquery'
export default {
  components: {
  },
  data(){
    return{
      password:"",
      account:"",
      rememberMe:true
    }
  },
  methods:{
    submit:function () {
        let that = this;
        if(this.password.trim()!==""&&this.account.trim()!==""){
          $.ajax({
              method: "post",
              url:"http://localhost:8099/login",
              data:{
                userAccount: that.account,
                userPwd:that.password,
                rememberMe: that.rememberMe
              },
              beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic bmVvd2F5Oe4lb3dheQ==");
              },
              success:function(data){
                if(data.code===200){
                  sessionStorage.setItem("user",JSON.stringify(data.data))
                  sessionStorage.setItem("isLogin","true");
                  that.$router.push({ path: "/"});
                  window.location.reload();//刷新页面
                }else{
                  alert("账号或密码输入错误")
                }
              }
          })
        }
    },
    sendMsgToPerson:function (msg) {
      this.$store.commit('SetPerson',msg)
    }
  }
};
</script>

<style></style>
