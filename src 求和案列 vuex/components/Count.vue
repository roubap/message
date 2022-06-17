<template>
  <div>
    <h1>当前求和为 {{sum}}</h1>
    <h3>当前求和 放大10倍为:{{bigSum}}</h3>
    <h3>我在{{school}} ,学习{{subject}}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementtodd">当前求和为奇数再加</button>
    <button @click="incrementwait">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
 name:'Count',
 data(){ 
   return{
     n:1,
   }  
 },
 methods:{
   increment(){
      this.$store.commit('JIA',this.n)
   },
   decrement(){
      this.$store.commit('JIAN',this.n)
   },
  incrementtodd(){
      this.$store.dispatch('jiaOdd',this.n)
  },
  incrementwait(){
       this.$store.dispatch('jiawait',this.n)
  },
 },
 computed:{
   //程序员自己写的代码
  //  sum(){
  //    return this.$store.state.sum
  //  },
  //  school(){
  //    return this.$store.state.school
  //  },
  //  subject(){
  //    return this.$store.state.subject
  //    },

  //借助mapStates生成计算属性 ，从state中读取数据（对象写法）
  // ...mapState({sum:'sum',school:'school',subject:'subject'}),

//简写形式数组，借助mapStates生成计算属性 ，从state中读取数据
  ...mapState(['sum','school','subject']),

  bigSum(){
     return this.$store.getters.bigSum
   },

  //  ...mapGetters({bigSum:'bigSum'})
   ...mapGetters(['bigSum'])
 },
  

 }

</script>

<style>
</style>