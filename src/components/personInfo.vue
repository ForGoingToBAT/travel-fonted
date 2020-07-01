<template>
  <form style="padding: 10px;">
    <h3>亲爱的<span v-text="userNickname"></span>您好</h3>
    <div class="form-group">
      <label for="exampleFormControlFile1">头像</label>
      <div class='simple-img' style='position:relative;'>
        <img :src="userFont" style='width:100px; height:100px; border:1px solid #c0c0c0;'/>
        <div class="spinner-border text-primary" role="status" v-if="show">
          <span class="sr-only">Loading...</span>
        </div>
        <input type="file" @change="changeImages($event)" class="form-control-file" id="exampleFormControlFile1" style="position: absolute;right: 0;display: inline-block;width: 200px;">
      </div>
    </div>
    <div class="form-group">
      <label for="email">邮箱</label>
      <input type="email" class="form-control" id="email" name="email" v-model="userEmail" disabled/>
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
        <button class="btn btn-primary" @click="chargeMoney()">
          充值金币
        </button>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="updateInfo()">更新</button>
  </form>
</template>

<script>
  import Qs from 'qs';
  import qs from 'qs';
  import Service from "@/request/Service";
  import $ from "jquery";
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
        this.userFont = user.userFont;
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
      userFont:"",
      userMoney:'',
      userTelephone:'',
      city:'',
      show:false,
    }
  },
  methods:{
    chargeMoney:function () {
      let money = prompt("请输入充值金额");
      if(!isNaN(money)){
          Service.post("/charge",qs.stringify({
            userAccount:this.userAccount,
            money:money
          })).then(response=>{
            if(response.data.code===200){
              alert(response.data.msg)
              //更新缓存
              let user = JSON.stringify(response.data.data);
              sessionStorage.setItem("user",user)
              window.location.reload()
            }else{
              alert(response.data.msg)
            }
          })
      }else{
        alert("输入数据非法")
      }
    },


    changeImages: function (event) {
      let imgFiles = event.target.files;
      console.log(imgFiles);
      for (let i = 0; i < imgFiles.length; i++) {
        let filePath = imgFiles[i].name;
        let fileFormat = filePath.split(".")[1].toLowerCase();
        if (!fileFormat.match(/png|jpg|jpeg/)) {
          alert("上传错误,文件格式必须为：png/jpg/jpeg");
          return;
        }
          let formdata = new FormData();// 创建form对象
          formdata.append('image',imgFiles[i],imgFiles[i].name);
          let that = this;
          $.ajax({
            url: "http://106.12.208.167:8088/upload",
            type:"post",
            contentType: false,
            processData: false,
            data: formdata,
            beforeSend: function() {
                that.show=true;
            },
            success: function (data) {
              that.show=false
              if (data.status === 200) {
                that.userFont =  data.url;
              }
            },
          })
        }
      },

    updateInfo:function () {
      let userAccount = this.userAccount;
      let userNickname = this.userNickname;
      let userFont = this.userFont;

      let data = Qs.stringify({
          userAccount: userAccount,
          userNickname: userNickname,
          userFont: userFont,
      })
      console.log(data)
      Service.post("/updateInfo",data).then(response=>{
        if(response.data.code===200){
          sessionStorage.setItem("user",JSON.stringify(response.data.data))
          window.location.reload()
        }else{
          alert("更新失败")
        }
      })

    }

  }
};
</script>

<style scoped></style>
