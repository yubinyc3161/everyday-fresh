<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="home" />首页</span>
              <a-menu-item key="1">
                <router-link :to="{name:'Statistics'}">统计</router-link>
              </a-menu-item>
            
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="shop" />商品</span>
              <a-menu-item key="2">
                <router-link :to="{path:'/ProductList'}">商品列表</router-link>
                
              </a-menu-item>
              <a-menu-item key="3">
                <router-link :to="{path:'/AddGoods'}">添加商品</router-link>
                
              </a-menu-item>
            
            </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
     
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      欢迎用户 <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">退出</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>


      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
       <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Breadcrumb from './Breadcrumb.vue'
export default {
  components:{
    Breadcrumb
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped lang="less">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-breadcrumb{
  display: inline-block;
  margin: 0;
  line-height: 64px;
}
.ant-layout-header{
  position: relative;
}
.ant-dropdown-link {
  float: right;
  margin-right:10px
}


</style>
