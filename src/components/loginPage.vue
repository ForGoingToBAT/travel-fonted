<template>
  <form>
    <div class="form-group">
      <label for="telephone">账号</label>
      <input
        type="tel"
        class="form-control"
        id="telephone"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="password">密码</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="rememberme" />
      <label class="form-check-label" for="rememberme"
        >记住我<small>10天免登录</small></label
      >
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
  </form>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
