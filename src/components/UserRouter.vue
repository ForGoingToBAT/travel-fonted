<template>
  <div class="orders" style="padding-top: 20px; padding-bottom: 20px;">
    <div v-if="orders">
      <div class="card" v-for="(order,index) in orders" :key="index">
        <div class="card-body">
          <div class="row" style="padding-left: 16px; padding-right: 16px; position: relative;">
            <span class="time" v-html="bookDate(order.orders.bookTime)"></span>
            <span style="display: inline-block; width: 20px;"></span>
            <span>订单号:</span>
            <span style="display: inline-block; width: 10px;"></span>
            <span>{{order.orders.id}}</span>
            <a class="btn" title="删除订单"><span class="del"></span></a>
          </div>
          <hr />
          <div class="row text-center" style="padding-left: 16px; padding-right: 16px;">
            <img :src="order.route.routeImg" style="height: 50px; width: 50px;"/>
            <div class="col-md-4">{{order.route.routeName}}</div>
            <div class="col-md-3">{{order.route.routePrice}}/天</div>
            <div class="col-md-3">
              <a href="javascript:void(0)" v-if="order.orders.orderStatus===1" @click="takeMoney($event)" :data-routemoney="order.route.routePrice" :data-orderId="order.orders.id" :data-routeid="order.route.id">去付款</a>
              <a href="javascript:void(0)" v-if="order.orders.orderStatus===2" @click="goToEvaluate($event)" :data-routeid="order.route.id" :data-orderId="order.orders.id">去评价</a>
              <a href="javascript:void(0)" v-if="order.orders.orderStatus===3">已完成评价</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="orders!=null">
      {{msg}}
    </div>
  </div>
</template>

<script>
  import Service from '../request/Service'
  import Qs from 'qs';
export default {
  name: "UserRouter",
  data() {
    return {
      time: "2020年5月20日",
      orders:"",
      msg:"",
    };
  },
  computed:{
    bookDate:function () {
      return function(message){
        let date = new Date(message)
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
      }
    }
  },
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let userAccount = user.userAccount;
    let that = this;
    Service.post("/getOrder",Qs.stringify({
      userAccount:userAccount
    })).then(response=>{
      if(response.data.code===200){
        that.orders = response.data.data
      }else{
        that.msg = response.data.msg
      }
    })
  },
  methods:{
    takeMoney:function (e) {
      console.log(e.currentTarget.dataset);
      let orderId = e.currentTarget.dataset.orderid;
      let routeId = e.currentTarget.dataset.routeid;
      let routePrice = e.currentTarget.dataset.routemoney;
      let user = JSON.parse(sessionStorage.getItem("user"));
      Service.post("/payMoney",Qs.stringify({
        userAccount: user.userAccount,
        orderId:orderId,
        routeId:routeId
      })).then(response=>{
        if(response.data.code===200){
          let user = JSON.parse(sessionStorage.getItem("user"));
          console.log(user)
          user.userMoney = Number(user.userMoney)-Number(routePrice);
          console.log(user.userMoney);
          sessionStorage.setItem("user",JSON.stringify(user));//更新金额
          alert("订票成功")
        }
      }).catch(function (error) {
          console.log(error)
      })
    },
    goToEvaluate:function (e) {
        let routeId = e.currentTarget.dataset.routeid;
        let orderId = e.currentTarget.dataset.orderid;
        this.$router.push({ path: "/routeDetail", query: { routeId: routeId,orderId:orderId } });
    }
  }
};
</script>

<style scoped>
.del {
  position: absolute;
  display: inline-block;
  right: 20px;
  top: 0;
  width: 23px;
  height: 23px;
  background: url("../static/img/path-sprite16.png") no-repeat -352px -168px;
  vertical-align: top;
}
</style>
