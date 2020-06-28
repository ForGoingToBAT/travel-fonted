<template>
  <div class="row no-gutters" @click.stop="toDetail(route.route.routeTitle)">
    <div class="col-md-2">
      <img :src="route.route.routeImg" class="card-img" alt="..." />
    </div>
    <div class="col-md-10" style="position: relative;">
      <div class="card-body">
        <h5 class="card-title" v-text="route.route.routeTitle"></h5>
        <p class="card-text" v-text="route.route.routeContent"></p>
        <p class="card-text">
          <small class="text-muted">
            <span>起点--</span>
            <span style="cursor: pointer" v-for="(site, index) in route.sites" v-bind:key="index"><a @click.stop="seeViews(site)">{{ site.siteName }}</a>--</span>
            <span>终点</span>
          </small>
        </p>
        <button class="btn btn-primary" style="position: absolute; right: 20px; bottom: 15px; z-index: 9999;" @click.stop="BookTicket($event)" :data-routeId="route.route.id" :data-routePrice="route.route.routePrice">预定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from '../request/Service'
  import qs from 'qs'
export default {
  props: {
    route: {
      type: Object,
      default:function () {
        return{
          route:null,
          sites:[]
        }
      }
    },
  },
  watch:{
    route:function(newValue){
      console.log(newValue)
    }
  },
  methods: {
    seeViews: function (message) {
      alert(JSON.stringify(message))
      this.$router.push({ path: "/views", query: { site: this.$Base64.encode(JSON.stringify(message)) } });
    },
    toDetail: function (message) {
      this.$router.push({ path: "/routeDetail", query: { title: message } });
    },
    BookTicket: function (e) {
      let obj = JSON.parse(sessionStorage.getItem("user"));
      if(obj===null){
        alert("你还没有登录,请登陆后操作")
      }else{
        let userAccount = obj.userAccount;
        let userMoney = obj.userMoney;
        let routePrice = e.currentTarget.dataset.routeprice;
        let routeId = e.currentTarget.dataset.routeid;
        if (routePrice <= userMoney) {
            let password = prompt("请输入密码");
            let bookDate = prompt("请选择日期","2020-06-10");
            Service.post("/bookTicket",qs.stringify({
              userAccount:userAccount,
              routeId:routeId,
              password:password,
              bookDate:bookDate,
            })).then(response=>{
              console.log(response.data)
            }).catch(function (error) {
              console.log(error)
            })
        } else {
          alert("抱歉 你的账户越余额不足,如果你已经充值还是未实时显示,请重新清理缓存")
        }
      }
    },
  },
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
