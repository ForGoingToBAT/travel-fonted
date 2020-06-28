<template>
  <div class="col-md-6 login-style">
    <div class="demo">
      <div v-if="status === 1">
        <loginPage></loginPage>
      </div>
      <div v-else="">
        <telephonePage></telephonePage>
      </div>
    </div>
    <div class="footer">
      <button id="account" class="btn btn-primary" @click="changeStyle(1)">账户登录</button>
      <button id="telLogin" class="btn btn-primary" @click="changeStyle(2)">手机号码登录</button>
    </div>
  </div>
</template>

<script>
import loginPage from "./loginPage.vue";
import telephonePage from "./telephonePage.vue";
export default {
  components: {
    loginPage,
    telephonePage,
  },
  data() {
    return {
      status: 1,
    };
  },
  methods: {
    changeStyle: function (message) {
      if (message === 1) {
        this.status = 1;
      } else {
        this.status = 2;
      }
    },
  },
};
</script>

<style scoped>
.footer {
  margin-top: 20px;
}
.login-style {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
}
</style>
