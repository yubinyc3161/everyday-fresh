import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode:"history"
})


// router.beforeEach((to,from,next)=>{
//     if(to.meta.need){
//         const status = store.getters["loginUser/status"]
//         if(status === 'loading'){
//             //登陆中

//         } else if (status === 'login'){
//             //登陆了

//         } else {
//             //未登录
//             next('/login')
//         }
//     }
// })

export default router