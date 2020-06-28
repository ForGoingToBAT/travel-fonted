<template>
  <form style="padding: 10px;">
    <h3>亲爱的<span v-text="userNickname"></span>您好</h3>
    <div class="form-group">
      <label for="email">邮箱</label>
      <input type="email" class="form-control" id="email" name="email" v-model="userEmail"/>
    </div>
    <div class="form-group">
      <label for="nickname">昵称</label>
      <input type="text" class="form-control" id="nickname" name="nickname" v-model="userNickname"/>
    </div>
    <div class="form-group">
      <label for="city">所在城市</label>
      <input type="text" class="form-control" id="city" name="city" v-model="city" />
    </div>
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="userMoney">账户余额</label>
        <input type="text" class="form-control" id="userMoney" name="userMoney" v-model="userMoney" disabled/>
      </div>
      <div class="form-group col-md-4">
        <label>点击充钱享受快乐</label><br />
        <button class="btn btn-primary" onclick="chargeMoney()">
          充值金币
        </button>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">保存</button>
  </form>
</template>

<script>
export default {
  name: "personInfo",
  mounted() {
      let isLogin = sessionStorage.getItem("isLogin");
      if(isLogin!=="true"){
        alert("你还没有登录,请登陆后操作")
        this.$router.push("/login")
      }else{
        let user = JSON.parse(sessionStorage.getItem("user"));
        this.userAccount = user.userAccount;
        this.userNickname = user.userNickname;
        this.userEmail = user.userEmail;
        this.userMoney = user.userMoney;
        this.userTelephone = user.userTelphone;
        this.city="北京"
      }
  },
  data(){
    return{
      userAccount:'',
      userNickname:'',
      userEmail:'',
      userMoney:'',
      userTelephone:'',
      city:''
    }
  },
  methods:{
    chargeMoney:function () {

    }
  }
};
</script>

<style scoped></style>
