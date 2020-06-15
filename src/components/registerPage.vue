<template>
  <form class="col-md-6 register-page">
    <div class="form-group">
      <label for="password">密码</label>
      <input
        type="password"
        class="form-control"
        id="password"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="telephone">手机号</label>
      <input type="tel" class="form-control" id="telephone" />
    </div>
    <div class="form-group">
      <label for="email">邮箱</label>
      <input type="email" class="form-control" id="email" />
    </div>
    <button type="submit" class="btn btn-primary">注册</button>
  </form>
</template>

<script></script>

<style>
.register-page {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
}
</style>
