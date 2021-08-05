<template>
  <div class="login-container">
      <form >
      <div class="item username">
          <input type="text">
      </div>
      <div class="item password">
          <input type="password" name="password" id="">
      </div>
      <div class="item submit">
          <button type="button" :disabled="loading">{{loading?'登陆中':'登录'}}</button>
      </div>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            loading:false
        }
    }
}
</script>

<style scoped lang="less">
    .login-container{
        width: 100%;
        height: 100%;
        position:fixed;
    }
</style>