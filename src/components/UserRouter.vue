<template>
  <div class="orders" style="padding-top: 20px; padding-bottom: 20px;">
    <div class="card">
      <div class="card-body">
        <div
          class="row"
          style="padding-left: 16px; padding-right: 16px; position: relative;"
        >
          <span class="time" v-html="time"></span>
          <span style="display: inline-block; width: 20px;"></span>
          <span>订单号:</span>
          <span style="display: inline-block; width: 10px;"></span>
          <span>0012102102010</span>
          <a class="btn" title="删除订单"><span class="del"></span></a>
        </div>
        <hr />
        <div
          class="row text-center"
          style="padding-left: 16px; padding-right: 16px;"
        >
          <img
            src="../static/img/logo.png"
            style="height: 50px; width: 50px;"
          />
          <div class="col-md-4">陕西三日游</div>
          <div class="col-md-3">$31</div>
          <div class="col-md-3"><a href="#">前去评价</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserRouter",
  data() {
    return {
      time: "2020年5月20日",
    };
  },
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
