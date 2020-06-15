<template>
  <form style="padding: 10px;">
    <h3>亲爱的Sofency 您好</h3>
    <div class="form-group">
      <label for="email">邮箱</label>
      <input type="email" class="form-control" id="email" name="email" />
    </div>
    <div class="form-group">
      <label for="nickname">昵称</label>
      <input type="text" class="form-control" id="nickname" name="nickname" />
    </div>
    <div class="form-group">
      <label for="city">所在城市</label>
      <input type="text" class="form-control" id="city" name="city" />
    </div>
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="userMoney">账户余额</label>
        <input
          type="text"
          class="form-control"
          id="userMoney"
          name="userMoney"
        />
      </div>
      <div class="form-group col-md-4">
        <label>点击充钱享受快乐</label><br />
        <button class="btn btn-primary" onclick="chargeMoney()">
          充值金币
        </button>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">保存</button>
  </form>
</template>

<script>
export default {
  name: "personInfo",
};
</script>

<style scoped></style>
