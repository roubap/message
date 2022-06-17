//读取文件用于创建vuex中最为核心的store
//引入axios
import axios from 'axios'
import Vue from 'vue'
//引入store
import Vuex from 'vuex'
Vue.use(Vuex)
import {nanoid} from 'nanoid'
//求和功能相关的配置
const counOptions = {
    namespaced:true,
    actions: {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
    jiawait(context, value) {
        setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
//人员管理相关配置
const personOptions = {
    namespaced:true,
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
               context.commit('ADD_PESON.value')
            }else{
              alert('添加的人必须姓王')  
            }
        },
        addPersonSever(context){
              axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                  response =>{
                      context.commit('ADD_PESON',{id:nanoid(),name:response.data})
                  },
                  error =>{
                      alert(error.message)
                  }
              ) 
        }
    },
    mutations: {
        ADD_PESON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
        { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}
//创建并暴露store
export default new Vuex.Store({
  modules:{
    countObout:counOptions,
    personObout:personOptions 
  }
})