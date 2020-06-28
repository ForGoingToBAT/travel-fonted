<template>
  <div>
    <h3 class="city-header" v-html="cityName"></h3>
    <span style="display: block; margin-top: 10px; margin-bottom: 10px;">你所在的城市共有<span v-text="routeNum"></span>条路线</span>
    <span v-if="routeNum===0">暂时未开发路线</span>
    <div class="card mb-3" v-for="(route, index) in routes" v-bind:key="index">
      <routeWay :route="route"></routeWay>
    </div>
  </div>
</template>

<script>
import routeWay from "./routeWay.vue";
import Service from "@/request/Service";
export default {
  mounted: function () {
   let obj= JSON.parse(this.$route.query.city.toString());
    this.cityName= obj.cityName
    this.cityId = obj.id;
    //请求拿取数据
    this.getRoutes(this.cityId)
  },
  components: {
    routeWay,
  },
  data() {
    return {
      cityName:"",
      routeNum:'',
      cityId:'',
      routes: [],
    };
  },
  methods:{
    getRoutes:function (cityId) {
      Service.get("/getCityInfo",{params:{cityId:cityId}}).then(response=>{
        this.routes = response.data.data;
        if(response.data.code===404){
          this.routeNum = 0;
        }else{
          this.routeNum = this.routes.length;
        }
      })
    }
  }
};
</script>

<style scoped>
.city-header {
  margin-top: 20px;
}
</style>
