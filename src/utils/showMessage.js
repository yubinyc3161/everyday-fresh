import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from '@/styles/showMessage.module.less'

export default function (options={}){
    const content = options.content || ""
    const type = options.type || "info"
    const duration = options.duration || 2000
    const container = options.container || document.body

    const div = document.createElement('div')

    const IconDom = getComponentRootDom(Icon, {type})

    div.innerHTML = `<span class=${styles.icon}>${IconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`

    if(options.container){//防止改动body的定位
        //看一看父元素定位是否改动过
        if(getComputedStyle(container).position==='static'){
            container.position = 'relative'
        }
    }

    container.appendChild(div)
    //reflow强行浏览器重新渲染,不加重新渲染上来opacity就是设置的1
    div.clientHeight

    div.style.opacity = 1
    div.style.transform = 'translate(-50%,-50%)'


    setTimeout(()=>{
        div.style.opacity = 0
        div.style.transform = 'translate(-50%,-50%) translateY(-25px)'
        div.addEventListener('transitionend',()=>{
            div.remove()
            //有回调执行回调
            options.callback && options.callback()
        },{once:true})
    },duration)

}
