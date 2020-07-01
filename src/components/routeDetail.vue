<template>
  <!--路线的详情-->
  <div class="container">
    <div class="de-header" style="display: flex; position: relative;">
      <div class="left">
        <h3>{{ route.routeName }}</h3>
        <span class="season">
          <i class="icon-season"></i>最佳季节:<strong>全年</strong>
        </span>
      </div>
      <div class="right" style="position: absolute; right: 0; top: 0; display: flex;">
        <a class="clickStar" href="#"><i class="stars"></i><br /><div class="starNum">点赞<span>{{route.thumpsNum}}</span></div></a>
        <!--收藏-->
        <a class="clickRestore" href="#"><i class="restores"></i><br /><div class="restoreNum">收藏<span>{{route.restoreNums}}</span></div>
        </a>
      </div>
    </div>
    <div class="choose">
      <ul class="clearfix">
        <li class="on" data-scroll="overview">
          <a href="javascript:void(0);" @click="scroll(1)">行程概况</a>
        </li>
        <li data-scroll="detail" class="">
          <a href="javascript:void(0);" @click="scroll(2)">行程详情</a>
        </li>
        <li data-scroll="discuss" class="">
          <a href="javascript:void(0);" @click="scroll(3)">讨论区</a>
        </li>
      </ul>
    </div>
    <div class="contents">
      <div class="content">
        <h3 class="router1">行程概况</h3>
        <div id="routeIntro" style="font-size: 14px;">
          <span>起点----></span>
          <span v-for="(site, index) in sites" v-bind:key="index">
            <a :href="site.id">{{ site.siteName }}</a>--->
          </span>
          <span>终点</span>
        </div>
      </div>
      <hr />
      <!---->
      <div class="content">
        <h3 class="router2">行程详情</h3>
        <div id="routeIntroDetails">
          <div class="routeIntroDetail" style="position: relative;margin-bottom: 50px" v-for="(site,index) in sites" :key="index">
            <div class="viewName">{{site.siteName}}</div>
            <span class="steps">D{{index}}</span>
            <hr />
            <div>{{site.siteDetail}}</div>
            <hr />
            <div class="viewImages">
              <a v-for="(img,index) in siteImages(site.siteImg)"  :key="index">
                <img :src="img" class="col-md-4" v-if="index<3"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="content">
        <h3 class="router3" style="text-align: center; margin-bottom: 30px;">线路讨论区</h3>
        <div id="discuss">
          <div class="comment-form clearfix" style="width: 80%; margin-left: auto; margin-right: auto;">
            <textarea v-model="discuss"></textarea>
            <input type="button" value="发布" id="submitComment" @click="submitCommit()"/>
          </div>
        </div>

        <div class="viewComments">
          <div class="viewComment" style="display: flex;margin-bottom: 30px" v-for="(comment,index) in commentss" :key="index">
            <div class="viewComment-left" style="margin-right: 20px;">
              <img :src="comment.userFont" width="40px" height="40px" style="border-radius: 50%;"/>
            </div>
            <div class="viewComment-right" style="font-size: 12px;">
              <div class="viewComment-head">
                <a><span>{{comment.userNickname}}</span></a>
                <span style="display: inline-block; padding-left: 5px;">{{comment.comments.commentDate}}</span>
                <a>回复</a>
              </div>
              <div class="viewComment-body">
               {{comment.comments.commentContent}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Service from '../request/Service'
import Qs from 'qs';
export default {
  name: "routeDetail",
  computed:{
    siteImages(){
      return function(siteImg){
        return siteImg.split(';')
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.routeId = this.$route.query.routeId;
    this.orderId = this.$route.query.orderId;//订单号
    Service.post("/getRouteDetail",Qs.stringify({
      routeId:this.routeId
    })).then(response=>{
      let data = response.data.data;//获取后端传递来的数据
      this.route = data.route;//路线
      this.sites = data.sites;//地点
    }).catch(function(error){
      console.log(error)
    });
    //获取评论的信息
    Service.post("/getRouteComments",Qs.stringify({
      routeId:this.routeId
    })).then(response=>{
      let data = response.data.data;//获取后端传递来的数据
      this.commentss = data;
    }).catch(function(error){
      console.log(error)
    });
  },
  data() {
    return {
      orderId:"",
      routeId: "",
      route:"",
      sites:"",
      discuss:"",
      commentss:[]
    };
  },
  methods: {
    handleScroll: function () {
      let scrollTop = $(window).scrollTop(); //获取页面上移的高度
      let router1 = $(".router1")[0].offsetTop;
      if (scrollTop >= router1) {
        $(".clearfix:first").css({
          position: "fixed",
          top: 0,
          backgroundColor: "#c0c0c0",
          width: "76%",
          zIndex: "999",
        });
      } else {
        $(".clearfix:first").css({
          position: "",
          top: "",
          backgroundColor: "",
          width: "",
        });
      }
    },
    submitCommit:function(){
      let item = sessionStorage.getItem("isLogin");
      if(item==="true"){
        let user = JSON.parse(sessionStorage.getItem("user"));
        let userAccount = user.userAccount;//获取用户的账户
        let comment = this.discuss;//用户的评论
        let routeId = this.routeId;
        let orderId = this.orderId;
        Service.post("/routeComment",Qs.stringify({
          userAccount:userAccount,
          comment: comment,
          routeId: routeId,
          orderId:orderId
        })).then(response=>{
          console.log(response.data)
          if(response.data.code===200){
            window.location.reload();
          }
        }).catch(function (error) {
          console.log(error)
        })

      }else{
        alert("请登陆后再评价")
      }
    },
    scroll: function (message) {
      let router1 = $(".router1")[0].offsetTop;
      let router2 = $(".router2")[0].offsetTop;
      let router3 = $(".router3")[0].offsetTop;

      switch (message) {
        case 1:
          $(window).scrollTop(router1);
          break;
        case 2:
          $(window).scrollTop(router2);
          break;
        case 3:
          $(window).scrollTop(router3);
          break;
      }
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
a:hover {
  text-decoration: none;
  color: #ff9d00;
}
.container {
  padding-top: 20px;
}
.de-header .left {
  display: flex;
}
.icon-season {
  float: left;
  margin: -2px 10px 0 0;
  width: 32px;
  height: 32px;
  background: url(../static/img/sprites7.png) no-repeat -40px 0;
  overflow: hidden;
}
.season {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 6px;
  display: inline-block;
  margin-left: 20px;
  height: 24px;
  border-left: 1px solid #e6e6e6;
  padding-left: 20px;
  vertical-align: 6px;
  line-height: 24px;
}
.clickStar,
.clickRestore {
  text-align: center;
  margin-right: 20px;
}
.restores,
.stars {
  display: inline-block;
  margin-bottom: 5px;
  width: 32px;
  height: 32px;
  background: url(../static/img/sprites7.png) no-repeat 0 -240px;
}
.restores {
  background-position: -35px -240px;
}
.starNum,
.restoreNum {
  font-weight: 400;
  font-size: 12px;
}
.choose {
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  margin-top: 37px;
  margin-bottom: 30px;
}
.clearfix {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0;
  height: 60px;
  line-height: 58px;
}
ul li {
  list-style: none;
  display: inline-block;
  width: 120px;
  text-align: center;
}
ul li:hover {
  border-bottom: 2px solid #ff9d00;
}
.content {
  margin-bottom: 30px;
}
.routeIntroDetail {
  margin-top: 20px;
  margin-left: 20px;
  padding-left: 30px;
  border-left: 1px solid #c0c0c0;
}
.viewImages img {
  object-fit: cover;
  height: 200px;
}
.steps {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #999999;
  color: white;
  text-align: center;
  line-height: 40px;
  top: 19px;
  left: -19px;
}
.comment-form textarea {
  float: left;
  width: 755px;
  height: 50px;
  padding: 9px 10px;
  border: 1px solid #e4e4e4;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  border-radius: 1px;
  resize: vertical;
}
.comment-form {
  margin-bottom: 20px;
}
.comment-form input {
  float: right;
  width: 100px;
  height: 50px;
  border: 0;
  padding: 0;
  margin: 0;
  line-height: normal;
  background-color: #ff9d00;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
}
#discuss {
  margin-bottom: 20px;
}
</style>
