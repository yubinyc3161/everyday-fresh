<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
import Layout from '@/components/Layout'
export default {
  components:{
    Layout,
  }
}
</script>
<style>
#app{
  position: fixed;
  width: 100%;
  height: 100%;
}
.ant-layout{
  width: 100%;
  height: 100%;
}
</style>
