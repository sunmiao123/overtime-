import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataJson: [],
        addJson:[],
        detailData:[]
    },

    mutations: {
        setlogin(state, res) {
            state.dataJson = res.data
            console.log(state.dataJson)
        },
        setadd(state,res){
            state.addJson = res.data
        },
        setdetail(state,res){
            state.detailData = res
        }
    },

    actions: {
        //列表渲染
        login({ commit }, params) {
            axios.get('http://localhost:3000/api/task/list',{params:params}).then((res) => {
                commit('setlogin', res.data)
            })
        },
        //提交加班
        // add({commit},obj){
        //     axios.defaults.headers.common['token']=localStorage.token
        //     axios.post('http://localhost:3000/api/apply/overtime',{obj:obj}).then((res)=>{
        //         console.log(obj)
        //         commit('setadd',res)
        //     }).catch()
        // },
        detail({commit},item){
            console.log(item)
            axios.defaults.headers.common['token']=localStorage.token
            axios.get('http://localhost:3000/api/apply/overtime',{
                params:{
                    applicationNumber:item
                }
            }).then((res)=>{
                console.log(res.data)
                commit('setdetail',res.data)
            }).catch();
        },
        addtime({commit},obj){
            axios.defaults.headers.common['token']=localStorage.token
            console.log(obj)
            axios.post("http://localhost:3000/api/apply/overtime",{
                endTime:obj.endTime,
                startTime:obj.startTime,
                type:obj.type,

            }).then(res=>{
                console.log(res)
            }).catch(error=>{

            })
        }
    },
    getters: {

    },

})