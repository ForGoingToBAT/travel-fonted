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
        <button class="btn btn-primary" style="position: absolute; right: 20px; bottom: 15px; z-index: 9999;" @click.stop="BookTicket()">预定</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$router.push({ path: "/views", query: { site: this.$Base64.encode(JSON.stringify(message)) } });
    },
    toDetail: function (message) {
      this.$router.push({ path: "/routeDetail", query: { title: message } });
    },
    BookTicket: function () {
      alert("hello world");
    },
  },
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
