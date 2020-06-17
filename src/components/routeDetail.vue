<template>
  <!--路线的详情-->
  <div class="container">
    <div class="de-header" style="display: flex; position: relative;">
      <div class="left">
        <h3>{{ title }}</h3>
        <span class="season">
          <i class="icon-season"></i>
          最佳季节:
          <strong>全年</strong>
        </span>
      </div>
      <div
        class="right"
        style="position: absolute; right: 0; top: 0; display: flex;"
      >
        <a class="clickStar" href="#">
          <i class="stars"></i><br />
          <div class="starNum">
            点赞
            <span>20000</span>
          </div>
        </a>
        <!--收藏-->
        <a class="clickRestore" href="#">
          <i class="restores"></i><br />
          <div class="restoreNum">
            收藏
            <span>20000</span>
          </div>
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
          <span v-for="(view, index) in views" v-bind:key="index">
            <a :href="view.id">{{ view.view }}</a
            >--->
          </span>
          <span>终点</span>
        </div>
      </div>
      <hr />
      <!---->
      <div class="content">
        <h3 class="router2">行程详情</h3>
        <div id="routeIntroDetails">
          <div class="routeIntroDetail" style="position: relative;">
            <div class="viewName">北京</div>
            <span class="steps">D1</span>
            <hr />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              ea ex illo in magnam maxime molestias nemo, placeat qui ratione
              reprehenderit repudiandae sed soluta! Ab dolores eius perferendis
              quam voluptates.
            </div>
            <hr />
            <div class="viewImages">
              <img src="../static/img/demo2.jpg" class="col-md-4" />
              <img src="../static/img/demo2.jpg" class="col-md-4" />
              <img src="../static/img/demo2.jpg" class="col-md-4" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="content">
        <h3 class="router3" style="text-align: center; margin-bottom: 30px;">
          线路讨论区
        </h3>
        <div id="discuss">
          <div
            class="comment-form clearfix"
            style="width: 80%; margin-left: auto; margin-right: auto;"
          >
            <textarea></textarea>
            <input type="button" value="发布" id="submitComment" />
          </div>
        </div>

        <div class="viewComments">
          <div class="viewComment" style="display: flex;">
            <div class="viewComment-left" style="margin-right: 20px;">
              <img
                src="../static/img/logo.png"
                width="40px"
                height="40px"
                style="border-radius: 50%;"
              />
            </div>
            <div class="viewComment-right" style="font-size: 12px;">
              <div class="viewComment-head">
                <a><span>Sofency</span></a>
                <span style="display: inline-block; padding-left: 5px;"
                  >2020-12-09 11:21:11</span
                >
                <a>回复</a>
              </div>
              <div class="viewComment-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at
                autem blanditiis consectetur consequatur cum exercitationem
                facilis hic impedit laudantium maxime, numquam perspiciatis qui,
                quibusdam quidem sint soluta suscipit vitae.
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
export default {
  name: "routeDetail",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.title = this.$route.query.title;
    console.log(this.$route.query.title);
  },
  data() {
    return {
      title: "测试",
      views: [
        {
          view: "兵马用",
          id: "1",
        },
        {
          view: "故宫",
          id: "1",
        },
        {
          view: "兵马用",
          id: "1",
        },
      ],
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
