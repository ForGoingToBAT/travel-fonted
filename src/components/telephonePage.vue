<template>
  <form>
    <div class="form-group">
      <label for="telephone">手机号</label>
      <input
        type="tel"
        class="form-control"
        id="telephone"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="confirmcode">验证码</label>
      <div class="input-group">
        <input type="text" class="form-control" id="confirmcode" />
        <div class="input-group-append">
          <span id="getCode" class="input-group-text" @click="avoidMultiClick"
            >获取验证码</span
          >
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
  </form>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  data() {
    return {
      countdown: 60,
      count: 0, //timeout执行的次数
    };
  },
  methods: {
    settime: function () {
      if (this.countdown === 0) {
        $("#getCode").removeClass("disabled");
        $("#getCode").text("获取验证码");
        this.countdown = 60;
        this.count = 0;
        return;
      } else {
        if (this.countdown === 60) {
          //向手机发送验证码
          alert("发送手机验证码");
        }
        $("#getCode").addClass("disabled");
        $("#getCode").text("重新发送(" + this.countdown + ")");
        this.countdown--;
        this.count++;
      }
      setTimeout(() => {
        this.settime();
      }, 1000);
    },
    avoidMultiClick: function () {
      if (this.count == 0) {
        this.settime();
      }
    },
  },
};
</script>

<style>
#getCode {
  cursor: pointer;
}
</style>
