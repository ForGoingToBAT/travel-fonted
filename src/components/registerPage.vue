<template>
    <form class="col-md-6 register-page">
      <div class="form-group">
        <label for="password">昵称</label>
        <input type="text" class="form-control" placeholder="昵称" v-model="userNickname" autoComplete="new-password" aria-required="true">
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" aria-required="true" aria-describedby="emailHelp" v-model="userPwd" autoComplete="new-password"/>
      </div>
      <div class="form-group">
        <label for="telephone">手机号</label>
        <input type="tel" class="form-control" id="telephone" aria-required="true" v-model="userTelphone" autoComplete="new-password"/>
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input type="email" class="form-control" id="email" aria-required="true" v-model="userEmail" autoComplete="new-password"/>
      </div>
      <div class="form-group">
        <label for="confirmcode">验证码</label>
        <div class="input-group">
          <input type="text" class="form-control" id="confirmcode" v-model="registerCode" />
          <div class="input-group-append">
            <span id="getCode" class="input-group-text" @click="avoidMultiClick">获取验证码</span>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="register()">注册</button>
    </form>

</template>

<script>
  import Service from '../request/Service'
  import Qs from 'qs'
  import $ from "jquery";
  export  default {
    methods:{
      register:function(){
        if(this.userNickname!==""&&this.userPwd!==""&&this.userTelphone!==""&&this.userEmail!==""){
          let user = {
            userNickname:this.userNickname,
            userPwd:this.userPwd,
            userTelphone:this.userTelphone,
            userEmail:this.userEmail
          };
          let data = Qs.stringify({
            user : JSON.stringify(user),
            code:this.registerCode
          });

          Service.post("/register",data).then(response=>{
            console.log(response.data.msg)
            if(response.data.code==200){
              sessionStorage.setItem("user",JSON.stringify(response.data.data))
              window.location.path="/"
            }else{
               console.log("失败")
            }
          })
        }else {
          console.log("2121")
        }
      },
      setTime: function () {
        //获取邮箱的账号
        if(this.userEmail==""){
          console.log("hello world");
        }
        if (this.countdown === 0) {
          $("#getCode").removeClass("disabled");
          $("#getCode").text("获取验证码");
          this.countdown = 60;
          this.count = 0;
          return;
        } else {
          $("#getCode").addClass("disabled");
          $("#getCode").text("重新发送(" + this.countdown + ")");
          this.countdown--;
          this.count++;
        }
        setTimeout(() => {
          this.setTime();
        }, 1000);
      },
      avoidMultiClick: function () {
        if (this.count == 0) {
          //获取邮箱
          if(this.userEmail!==""){
            let data ={
              email:this.userEmail
            }
            //请求后端获取code
            Service.post("/getCode",Qs.stringify(data)).then(response=>{
              console.log(response.data)
            })
            this.setTime();
          }else{
            alert("请输入邮箱")
          }

        }
      },
    },
    data(){
      return{
        userNickname:"",
        userPwd:"",
        userTelphone:"",
        userEmail:"",
        countdown: 60,
        count: 0, //timeout执行的次数
        registerCode:''
      }
    }
  }

</script>

<style scoped>
.register-page {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
}
#getCode {
  cursor: pointer;
}
</style>
