<template>
  <div class="row no-gutters">
    <div class="col-md-2">
      <img :src="data.img" class="card-img" alt="..." />
    </div>
    <div class="col-md-10" style="position: relative;">
      <div class="card-body">
        <h5 class="card-title" v-text="data.title"></h5>
        <p class="card-text" v-text="data.content"></p>
        <p class="card-text">
          <small class="text-muted">
            <span>起点--</span>
            <span v-for="(site, index) in data.sites" v-bind:key="index"
              ><a @click="seeViews(site.name)">{{ site.name }}</a
              >--</span
            >
            <span>终点</span>
          </small>
        </p>
        <button
          class="btn btn-primary"
          style="position: absolute; right: 20px; bottom: 15px;"
        >
          预定
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    seeViews: function (message) {
      this.$router.push({ path: "/views", query: { viewname: message } });
    },
  },
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
