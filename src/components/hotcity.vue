<template>
  <!--热门城市-->
  <div class="citys">
    <h3 class="text-center">当月热门城市</h3>
    <div class="container">
      <div class="row">
        <div class="text-white col-md-4 block" v-for="(city, index) in citys" v-bind:key="index">
          <a @click="swapToPage(city)"><img :src="city.cityImg" class="col-md-12" alt="..."/></a>
          <div class="city">
            <span class="card-title">{{ city.cityName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/request/Service";
export default {
  mounted:function(){
      this.getCityBySeason()
  },
  methods: {
    swapToPage: function (message) {
      this.$router.push({ path: "/city", query: { city: JSON.stringify(message) } });
    },
    getCityBySeason:function () {
      Service.get("/getCityBySeason").then(response=>{
        this.citys = response.data.data;
        console.log(this.citys)
      }).catch(function (error) {
          console.log(error)
      })
    }
  },
  data() {
    return {
      citys: [],
    };
  },
};
</script>

<style scoped>
.block img {
  height: 240px;
  margin-top: 20px;
  display: inline-block;
}
.city {
  position: absolute;
  right: 45px;
  bottom: 9px;
  font-size: 25px;
  color: #c0c2c9;
}
</style>
