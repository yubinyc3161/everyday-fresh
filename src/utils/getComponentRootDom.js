import Vue from 'vue'
/**
 * 
 * @param {*} component 组件名
 * @param {*} props 组件需要的属性
 */
export default function (component, props) {
    const vm = new Vue({
        render:(h)=>{
            return h(component,{props})
        }
    })
    vm.$mount()
    return vm.$el
}