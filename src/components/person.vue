<template>
  <div
    class="d-flex"
    style="
      margin-top: 30px;
      border: 1px solid #c0c0c0;
      padding: 20px 20px 20px 0;
    "
  >
    <div class="col-lg-3 col-md-3">
      <ul class="list-group">
        <router-link class="list-group-item" to="/person"
          >我的个人资料</router-link
        >
        <router-link class="list-group-item" to="/person/userRouter"
          >我的订单</router-link
        >
        <router-link class="list-group-item" to="/person/userMessage"
          >我的消息</router-link
        >
      </ul>
    </div>
    <div class="col-lg-9 col-md-9" style="border: 1px solid #c0c0c0;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
};
</script>

<style scoped></style>
