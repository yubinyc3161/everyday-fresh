<template>
  <div class="search-bar-container">
      搜索关键字：<a-input size="large" placeholder="large size"  />
      商品类目：<a-dropdown>
      <a-menu slot="overlay"  >
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button :disabled="true" :trigger="['click']" style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
    </a-dropdown>

    <a-button type="primary" >
      搜索
    </a-button>
<a-button class="add-goods">新增商品</a-button>
    <AddGoods />
  </div>
</template>

<script>
import AddGoods from './AddGoods'
export default {
  components:{
    AddGoods
  }
}
</script>

<style scoped>
.search-bar-container{
  position: relative;
}
.ant-input{
  width:200px;
  margin-right: 20px;
}
.ant-btn,.ant-btn-primary{
  margin-left:20px;
}
.add-goods{
  position: absolute;
  right: 10px;
}
</style>