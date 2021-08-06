export default {
    namespaced:true,
    state:{
        loading:false,
        user:null
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setUser(state,payload){
            state.user = payload
        }
    },
    actions:{
        login({commit},payload){
            commit(setLoading,true)
            
        }
    }
}