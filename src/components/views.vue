<template>
  <div class="container" style="padding-left: 0; padding-right: 0;">
    <h3 class="viewname" v-if="viewIntroduce!==null" v-text="viewIntroduce.siteName"></h3>
    <div class="introduce">
      <a href="javascript:void(0);" @click="viewsScroll(1)">概况</a>
      <a href="javascript:void(0);" @click="viewsScroll(2)">评论</a>
      <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#staticBackdrop">
        我要点评
      </button>
    </div>
    <!--景点的图片-->
    <div class="content" style="margin-top: 20px;"   v-if="viewIntroduce!==null">
      <div class="view-image">
        <div class="col-md-8" style="position: relative;" >
          <img :src="images[0]" class="col-md-12" />
          <span class="images">共<span>{{ imagesNum }}</span>张图片</span>
        </div>
        <div class="col-md-4" >
          <img :src="images[1]" class="col-md-12" />
          <img :src="images[2]" class="col-md-12" />
        </div>
      </div>
    </div>

    <!--景点的介绍-->
    <div class="view-intro"   v-if="viewIntroduce!==null" >
      <h4>景点介绍</h4>
      <div class="summary"  v-html="viewIntroduce.siteDetail"></div>
      <br />
      <p>
        <span>门票</span><br />
        <span  >{{ viewIntroduce.sitePrice }}/天</span><br />
      </p>
      <p>
        <span>开放时间</span><br />
        <span>{{ viewIntroduce.openTime }}</span><br />
      </p>
      <hr />
    </div>

    <!--景点评论-->
    <div class="views-comments" id="comment-dot">
      <div class="comments-header">栖栖点评<span>(共300条真实评论)</span></div>
      <div
        class="media"
        v-for="(userinfo, index) in userinfos"
        v-bind:key="index"
      >
        <img
          :src="userinfo.userFont"
          class="mr-3"
          style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid red;
          "
        />
        <div class="media-body">
          <a class="name" href="#" target="_blank">{{ userinfo.username }}</a>
          <span
            class="s-star s-common"
            :class="'s-star' + userinfo.stars"
          ></span
          ><br />
          <p class="comments-content">{{ userinfo.comments }}</p>
          <!--照片墙-->
          <div class="views-img">
            <img
              :src="image.pic"
              v-for="(image, index) in userinfo.viewImages"
              v-bind:key="index"
              class="col-md-3"
            />
          </div>
          <div class="info clearfix">
            <a
              class="view-comment"
              title="添加评论"
              href="javascript:void(0)"
              @click="writeComment(1)"
              >评论</a
            >
            <span class="time">{{ userinfo.commentTime }}</span>
          </div>
          <hr style="margin-top: 5px;" />
          <div class="views-replys">
            <div
              class="views-reply d-flex"
              v-for="(reply, index) in userinfo.replys"
              v-bind:key="index"
            >
              <div class="user-font">
                <img
                  :src="reply.replyUserFont"
                  style="width: 15px; height: 15px;"
                />
              </div>
              <div class="user-reply col-md-12">
                <a href="#" class="username">{{ reply.replyName }}</a
                >&nbsp;&nbsp;:&nbsp;&nbsp;<span>{{ reply.replyContent }}</span>
                <a
                  href="javascript:void(0)"
                  style="margin-left: 5px; color: #deb887;"
                  @click="writeComment(2)"
                  >回复</a
                ><br />
                <span class="time">{{ reply.replyTime }}</span
                ><br />
              </div>
            </div>
          </div>
          <!--评论的窗口-->
          <div class="reply-window" style="margin-top: 10px; display: none;">
            <textarea
              placeholder=""
              class="col-md-12"
              style="border: 1px solid #deb887;"
            />
            <button class="btn btn-primary btn-sm" style="float: right;">
              回复
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--点评的蒙版-->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel"  v-if="viewIntroduce!==null" v-text="viewIntroduce.siteName"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-2 text-right">
                <span>总体评价</span>
              </div>
              <div class="col-md-10">
                <div class="review-star" style="position: relative;">
                  <span class="_j_starcount star0"></span>
                  <div class="click-star _j_starlist">
                    <a role="button" title="不建议" rel="nofollow" @click="star(1)"></a>
                    <a role="button" title="有待改善" rel="nofollow" @click="star(2)"></a>
                    <a role="button" title="还可以" rel="nofollow" @click="star(3)"></a>
                    <a role="button" title="值得一去" rel="nofollow" @click="star(4)"></a>
                    <a role="button" title="强烈推荐" rel="nofollow" @click="star(5)"></a>
                  </div>
                </div>
                <span class="txt-tips _j_startip">点击星星打分</span>
              </div>
            </div>
            <!--内容评价-->
            <div class="row">
              <div class="col-md-2 text-right">
                <span>内容</span>
              </div>
              <div class="col-md-10">
                <textarea class="col-md-12" placeholder="100字+3图,有机会获得优质点评" rows="4" v-model="comment"></textarea>
                <small>内容不超过300字</small>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2 text-right">
                <span>上传图片</span>
              </div>
              <div class="col-md-10">
                <div class="upload-img-btn">
                  <i></i>
                  <input type="file" class="upload-img" id="uploadImgs" @change="addImages($event)" multiple="multiple"/>
                  <div id="img-preview" class="img-preview d-flex"></div>
                </div>
                <small>最多上传4张</small>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="justify-content: unset;">
            <div class="col-md-2"></div>
            <div class="col-md-10">
              <button type="button" class="btn btn-primary" style="width: 97px; background-color: #ff8a00; border: none;" @click="submitComment()">
                提交
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Service from "../request/Service";
import qs from 'qs';
export default {
  mounted: function () {
    let object = this.$Base64.decode(this.$route.query.site)
    this.viewIntroduce = JSON.parse(object.toString());
  },
  watch:{
    viewIntroduce:function (newValue) {
      console.log(newValue.siteName)
    }
  },
  computed:{
    images:function () {
      if(this.viewIntroduce!=null&&this.viewIntroduce.siteImg!=null) {
        return this.viewIntroduce.siteImg.split(";")
      }else{
        return null;
      }
    },
    imagesNum:function () {
      if(this.viewIntroduce!=null&&this.viewIntroduce.siteImg!=null) {
        return this.viewIntroduce.siteImg.split(";").length;
      }else{
        return 0;
      }
    }
  },
  data() {
    return {
      reply_window: true,
      viewIntroduce: null,
      stars:'',//评价的星级
      comment:'',//模板的评论
      userinfos: [
        {
          userFont: require("../static/img/logo.png"), //解决图片不显示的问题
          username: "Sofency",
          stars: 1,
          comments:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum" +
            "nunc ac nisi vulputate fringilla." +
            "Donec lacinia congue felis in faucibus.",
          viewImages: [
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
          ],
          commentTime: "2019-05-05 13:56:24",
          replys: [
            {
              replyUserFont: require("../static/img/logo.png"),
              replyName: "Sofency",
              replyContent: "你好,大理古镇住哪个们比较方便的哪?",
              replyTime: "2019-05-05 13:56:24",
            },
            {
              replyUserFont: require("../static/img/logo.png"),
              replyName: "Alice",
              replyContent: "你好,大理古镇住哪个们比较方便的哪?",
              replyTime: "2019-05-05 13:56:24",
            },
          ],
        },
        {
          userFont: require("../static/img/logo.png"), //解决图片不显示的问题
          username: "ALice",
          stars: 4,
          comments:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum" +
            "nunc ac nisi vulputate fringilla." +
            "Donec lacinia congue felis in faucibus.",
          viewImages: [
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
            {
              pic: "https://static.runoob.com/images/demo/demo3.jpg",
              url: "",
            },
          ],
          commentTime: "2019-05-05 13:56:24",
          replys: [
            {
              replyName: "Sofency",
              replyContent: "你好,大理古镇住哪个们比较方便的哪?",
              replyTime: "2019-05-05 13:56:24",
            },
          ],
        },
      ],
    };
  },
  methods: {
    writeComment: function (message) {
      if (message === 1) {
        $(event.target)
          .parents(".media-body")
          .children(".reply-window")
          .children("textarea")
          .attr("placeholder", "发表评论");
      } else {
        let username = $(event.target).parent().children(".username").html();
        $(event.target)
          .parents(".media-body")
          .children(".reply-window")
          .children("textarea")
          .attr("placeholder", "回复" + username);
      }
      if (this.reply_window) {
        $(event.target).parents(".media-body").children(".reply-window").css({
          display: "block",
        });
        $(event.target)
          .parents(".media-body")
          .children(".reply-window")
          .children("textarea")
          .animate({
            height: "62px",
          });
      } else {
        $(event.target)
          .parents(".media-body")
          .children(".reply-window")
          .children("textarea")
          .animate({
            height: "0px",
          });
        $(event.target).parents(".media-body").children(".reply-window").css({
          display: "none",
        });
      }
      this.reply_window = !this.reply_window;
    },
    star: function (message) {
      $("._j_starcount").removeClass(function () {
          return (
            "star" + 1 + " star" + 2 + " star" + 3 + " star" + 4 + " star" + 5
          );
      }).addClass("star" + message);
      $(".txt-tips").html(
          $("._j_starlist a").eq(message - 1).attr("title")
      );
      //设置stars的数据
      this.stars = message;
    },
    viewsScroll: function (message) {
      console.log(message);
      let height1 = $(".content")[0].offsetTop;
      let height2 = $(".views-comments")[0].offsetTop;
      console.log(height2 + "-" + height1);
      switch (message) {
        case 1:
          $(window).scrollTop(height1);
          break;
        case 2:
          $(window).scrollTop(height2);
          break;
      }
    },
    addImages: function (event) {
      let imgFiles = event.target.files;
      console.log(imgFiles);
      let length = $("#img-preview").children().length;
      if (length >= 4) {
        alert("超过最大上传照片的数量");
      } else {
        for (let i = 0; i < imgFiles.length; i++) {
          let filePath = imgFiles[i].name;
          let fileFormat = filePath.split(".")[1].toLowerCase();
          if (!fileFormat.match(/png|jpg|jpeg/)) {
            alert("上传错误,文件格式必须为：png/jpg/jpeg");
            return;
          }
          //请求后台上传图片 拿到地址
          let formdata = new FormData();// 创建form对象
          formdata.append('image',imgFiles[i],imgFiles[i].name);
          $.ajax({
            url: "http://106.12.208.167:8088/upload",
            type:"post",
            contentType: false,
            processData: false,
            data: formdata,
            success: function (data) {
              if (data.status === 200) {
                let $divparent = $(
                        "<div class='simple-img' style='position:relative;'></div>"
                );
                let $img = $(
                        "<img src='" + data.url + "' style='width:100px;height:100px;border:1px solid #c0c0c0;'/>"
                );
                $divparent.append($img);
                let preview = $("#img-preview");
                preview.append($divparent); //添加孩子结点
              }
            },
          })
        }
      }
    },

    submitComment:function(){
      let preview = $("#img-preview");
      let children = preview.children(".simple-img");
      let image="";
      if(this.stars!==""&&this.comment!==""&&children!==undefined&&children.length!=0){
        for(let i=0;i<children.length;i++){
          let attr = children.eq(i).children("img").attr("src");
          image=image + attr+";"
        }
        let length = image.length-1;
        image = image.substring(0,length);
        let stars = this.stars;
        let comment = this.comment;
        let siteId = this.viewIntroduce.id;
        let userAccount = JSON.parse(sessionStorage.getItem("user")).userAccount;
        // alert(userAccount);
        console.log(stars,comment,siteId,userAccount,image)
        Service.post("/comments",qs.stringify({
            userAccount:userAccount,
            siteId:siteId,
            stars: stars,
            comment:comment,
            image:image
        })).then(response=>{
            alert(response.data.msg)
            $('#staticBackdrop').modal('hide');
            window.location.reload();
        }).catch(function (error) {
          console.log(error)
        })
      }else{
        alert("请完善信息后再提交")
      }
    }
  },
};
</script>

<style scoped>
.container {
  padding-left: 0;
  padding-right: 0;
}
.viewname {
  margin-top: 10px;
}

.introduce {
  border-bottom: 1px solid #c0c0c0;
}

.introduce a {
  display: inline-block;
  margin-right: 10px;
  margin-top: 15px;
  font-size: 18px;
  color: black;
  padding-bottom: 10px;
  margin-left: 10px;
}

.introduce a:hover {
  color: #ff9d00;
  text-decoration: none;
  border-bottom: 1px solid;
}

.introduce a:last-child {
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff9d00;
}

.introduce a:last-child:hover {
  color: white;
}

.content .view-image {
  display: flex;
}

.content .view-image .images {
  display: block;
  position: absolute;
  bottom: 15px;
  left: 20px;
  border: 1px solid #c0c0c0;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 13px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.content .view-image .col-md-8,
.content .view-image .col-md-12,
.content .view-image .col-md-4 {
  padding-left: 0;
  padding-right: 5px;
  margin-bottom: 5px;
}

.content .view-image .col-md-8 img {
  height: 400px;
}
.content .view-image .col-md-4 img {
  height: 198px;
}
.comments-header {
  font-size: 24px;
  margin-bottom: 15px;
}

.views-comments .media {
  margin-bottom: 20px;
}

.views-img img {
  padding-left: 0;
  height: 150px;
}

.media-body .info {
  margin-top: 5px;
  line-height: 20px;
  font-size: 12px;
}

.media-body .info .view-comment {
  float: right;
  line-height: 22px;
}

.media-body .time {
  color: #999;
  margin-right: 20px;
}

/*回复专区*/
.views-replys {
  font-size: 12px;
}

.views-replys .views-reply {
  border-bottom: 1px dotted #c0c0c0;
  padding-bottom: 6px;
  padding-top: 10px;
}

.user-reply {
  margin-left: 10px;
}

textarea {
  outline: none;
  font-size: 12px;
}

.s-star1 {
  background: url(../static/img/shopping-icons3.png) no-repeat -112px -90px;
}

.s-star2 {
  background: url(../static/img/shopping-icons3.png) no-repeat -99px -90px;
}

.s-star3 {
  background: url(../static/img/shopping-icons3.png) no-repeat -86px -90px;
}

.s-star4 {
  background: url(../static/img/shopping-icons3.png) no-repeat -73px -90px;
}

.s-star5 {
  background: url(../static/img/shopping-icons3.png) no-repeat -60px -90px;
}

.s-star {
  display: inline-block;
  margin: 0 5px;
  vertical-align: -1px;
}

.s-common {
  width: 67px;
  height: 13px;
  overflow: hidden;
}

/*弹窗评星*/
.review-star {
  position: relative;
  float: left;
  display: inline-block;
  width: 127px;
  height: 23px;
  overflow: hidden;
  background: url(../static/img/path-sprite16.png) no-repeat -300px 0;
  vertical-align: middle;
}

.review-star span {
  display: inline-block;
  height: 23px;
  background: url(../static/img/path-sprite16.png) no-repeat -300px -30px;
  vertical-align: top;
}

.star0 {
  width: 0px;
}

.star1 {
  width: 23px;
}

.star2 {
  width: 49px;
}

.star3 {
  width: 75px;
}

.star4 {
  width: 101px;
}

.star5 {
  width: 127px;
}

.click-star {
  position: absolute;
  left: 0;
  top: 0;
  width: 132px;
  height: 23px;
}

.click-star a {
  float: left;
  width: 23px;
  height: 23px;
  padding-right: 3px;
}

.txt-tips {
  padding-left: 20px;
}

.modal-body .row {
  margin-top: 20px;
}

.upload-img-btn {
  width: 100px;
  height: 100px;
  border: 1px dotted #c0c0c0;
  position: relative;
  background-color: #f0f8ff;
  display: flex;
}

.upload-img {
  width: 100px;
  height: 100px;
  opacity: 0;
}

.upload-img-btn i {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -22px 0 0 -22px;
  width: 44px;
  height: 44px;
  background: url(../static/img/path-sprite16.png) no-repeat -150px -120px;
}
</style>
