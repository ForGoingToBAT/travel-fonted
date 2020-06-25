<template>
  <!--最热门路线-->
  <div>
    <div class="hot-routes" style="margin-top: 20px; margin-bottom: 20px;">
      <a href="#"><span>最热门路线>></span></a>
    </div>
    <div class="card mb-3" v-for="(route, index) in routes" v-bind:key="index">
      <routeWay :route="route" v-if="route"></routeWay>
    </div>
  </div>
</template>

<script>
import routeWay from "./routeWay.vue";
import Service from '../request/Service'
export default {
  components: {
    routeWay,
  },
  created:function(){
    this.getHotRoutes()
  },
  data() {
    return {
      page:1,//当前的页数
      routes: null
    };
  },
  methods:{
    getHotRoutes:function(){
      let that = this;
      Service.get("/getHotRoutes",{
        params:{
          page:that.page
        }
      }).then(response => (that.routes = response.data.data))
              .catch(function (error) { // 请求失败处理
                  console.log(error);
              });
    }
  }
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
