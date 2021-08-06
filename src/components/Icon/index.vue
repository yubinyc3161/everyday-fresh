<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const fontMap = {
    warn:'icon-jinggao',
    home:'icon-header-02',
    article:'icon-wenzhang',
    info:'icon-guanyuwomen',
    error:'icon-shibai',
    success:'icon-chenggong',
    close:'icon-iconfonticon2',
    nodata:'icon-zanwushuju',
    qq:'icon-qq',
    email:'icon-youxiang',
    chat:'icon-weixin',
    github:'icon-github',
    project:'icon-xiangmu',
    word:'icon-liuyan',
    arrowUp:'icon-xiangshang',
    arrowDown:'icon-xiangxia'
}
export const types = Object.keys(fontMap)
export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        fontClass(){
            return fontMap[this.type]
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2699193_257tv70rfjo.css";

</style>