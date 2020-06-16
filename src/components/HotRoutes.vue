<template>
  <!--最热门路线-->
  <div>
    <div class="hot-routes" style="margin-top: 20px; margin-bottom: 20px;">
      <a href="#"><span>最热门路线>></span></a>
    </div>
    <div class="card mb-3" v-for="(route, index) in routes" v-bind:key="index">
      <routeWay :data="route"></routeWay>
    </div>
  </div>
</template>

<script>
import routeWay from "./routeWay.vue";
export default {
  components: {
    routeWay,
  },
  data() {
    return {
      routes: [
        {
          img: require("../static/img/demo2.jpg"),
          title: "路线的标题",
          content:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          sites: ["上海", "西安", "北京", "西藏"],
        },
        {
          img: require("../static/img/demo2.jpg"),
          title: "路线的标题",
          content: "路线的介绍",
          sites: ["上海", "西安", "北京", "西藏"],
        },
        {
          img: require("../static/img/demo2.jpg"),
          title: "路线的标题",
          content: "路线的介绍",
          sites: ["上海", "西安", "北京", "西藏"],
        },
        {
          img: require("../static/img/demo2.jpg"),
          title: "路线的标题",
          content: "路线的介绍",
          sites: ["上海", "西安", "北京", "西藏"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
