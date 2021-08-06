<template>
  <div class="login-container">
    <div class="item">
      <label for="username">账户：</label>
      <input type="text" name="username" id="username" v-model="user.username" />
    </div>
    <div class="item">
      <label for="password">密码：</label>
      <input type="password" name="password" id="password" v-model="user.password" />
    </div>
    <div class="item submit">
      <button type="button" :disabled="loading" @click="submit">
        {{ loading ? "登陆中" : "登录" }}
      </button>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/login'
export default {
  data() {
    return {
      loading: false,
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
   async submit() {
       const resp = await login(this.user)
       console.log(resp)
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  width: 400px;
  height: 200px;
  border: 1px solid;
  margin: 100px auto 0;
  .item {
    margin: 30px auto 0;
    text-align: center;
    input {
      outline: none;
      border: 1px solid;
      border-radius: 4px;
    }
    button {
      width: 100px;
      border: none;
      background: #50936c;
      border-radius: 4px;
      height: 35px;
      outline: none;
    }
  }
}
</style>