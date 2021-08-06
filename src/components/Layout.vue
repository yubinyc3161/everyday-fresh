<template>
  <div class="home-container">
    <div class="left-aside" :class="{ 'menu-fold': collapsed }">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="home" /><span>首页</span></span>
          <a-menu-item key="5"> 
            <router-link :to="{name:'Statistics'}"> 统计</router-link> </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>商品</span></span>
          <a-menu-item key="9">
             <router-link :to="{name:'ProductList'}"> 商品列表</router-link></a-menu-item>
          <a-menu-item key="10">
             <router-link :to="{name:'AddGoods'}"> 添加商品</router-link></a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>

    <div class="right-aside">
      <div class="header">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>

        <div class="bread-crumb">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>统计</a-breadcrumb-item>
          </a-breadcrumb>
        </div>

        <div class="user-info">
          <a-dropdown>
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              欢迎管理员 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">退出</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped lang="less">
.home-container {
  width: 100%;
  position: fixed;
  height: 100%;
  display: flex;

  .left-aside {
    transition: 0.3s;
    width: 180px;
    height: 100%;
    &.menu-fold {
      width: 80px;
    }
    .ant-menu {
      height: 100%;
    }
  }
  .right-aside {
    flex: auto;
    .header {
      line-height: 48px;
      padding-left: 10px;
      .bread-crumb {
        display: inline-block;
        margin-left: 5px;
      }
      .user-info {
        text-align: center;
        float: right;
        margin-right: 20px;
      }
    }
  }
}
</style>
