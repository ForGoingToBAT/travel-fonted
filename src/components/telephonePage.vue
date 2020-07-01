<template>
  <form>
    <div class="form-group">
      <label for="telephone">邮箱</label>
      <input type="tel" class="form-control" id="telephone" aria-describedby="emailHelp" v-model="email"/>
    </div>
    <div class="form-group">
      <label for="confirmcode">验证码</label>
      <div class="input-group">
        <input type="text" class="form-control" id="confirmcode" v-model="coder"/>
        <div class="input-group-append">
          <span id="getCode" class="input-group-text" @click="avoidMultiClick">获取验证码</span>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="loginByEmail()">登录</button>
  </form>
</template>

<script>
import $ from "jquery";
import Service from "@/request/Service";
import qs from 'qs';
import Qs from 'qs';
export default {
  components: {},
  data() {
    return {
      email:"",
      coder:'',
      countdown: 60,
      count: 0, //timeout执行的次数
    };
  },
  methods: {
    loginByEmail: function () {
      if (this.email !== "" && this.coder !== "") {
        Service.post("/loginByEmail", qs.stringify({
          email: this.email,
          code: this.coder,
        })).then(response => {
          if (response.data.code === 200) {
            sessionStorage.setItem("user", JSON.stringify(response.data.data));
            sessionStorage.setItem("isLogin", "true");
            window.location.href = "/"
          } else {
            alert(response.data.msg)
          }
        })
      }
    },
    setTime: function () {
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
        if (this.email !== "") {
          let data = {
            email: this.email
          }
          //请求后端获取code
          Service.post("/getCode", Qs.stringify(data)).then(response => {
            console.log(response.data)
          })
          this.setTime();
        } else {
          alert("请输入邮箱")
        }
      }
    }
  }
}
</script>

<style scoped>
#getCode {
  cursor: pointer;
}
</style>
