import axios from "axios";
import showMessage from '@/utils/showMessage'
const instance = axios.create({
    baseURL:'https://mallapi.duyiedu.com/'
})

instance.interceptors.request.use((config)=>{
    console.log(config)
    return config
})


instance.interceptors.response.use((resp)=>{
    console.log(resp)
    if(resp.data.status === 'fail'){
        showMessage({
            content:resp.data.msg,
            type:'error'
        })
    }
})

export default instance