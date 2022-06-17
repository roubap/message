<template>
  <div>
    <h1>当前求和为 {{sum}}</h1>
    <h3>当前求和 放大10倍为:{{bigSum}}</h3> 
    <h3>我在{{school}} ,学习{{subject}}</h3>
    <h3>下方组件的总人数是{{personList.length}}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- 用优化形式写 调用的时候一定要加n 
    否则的话就会传入默认参数event 
    因为之前是手动添加n 优化代码手动添加的n没有出现-->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementtodd(n)">当前求和为奇数再加</button>
    <button @click="incrementwait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations, mapActions } from 'vuex'
export default {
 name:'Count',
 data(){ 
   return{
     n:1,
   }  
 },
 methods:{
  //  increment(){
  //     this.$store.commit('JIA',this.n)
  //  },
  //  decrement(){
  //     this.$store.commit('JIAN',this.n)
  //  },
   //利用mapMutation  这个方法最后生成的是对象 对象中插入对象 
   //es6中展示式可以让对象插入对象中
   //借助mapMutation 生成对应方法，方法中会调用commit去联系mutation
   ...mapMutations('countObout',{increment:'JIA',decrement:'JIAN'}),
  // incrementtodd(){
  //     this.$store.dispatch('jiaOdd',this.n)
  // },
  // incrementwait(){
  //      this.$store.dispatch('jiawait',this.n)
  // },
   ...mapActions('countObout',{incrementtodd:'jiaOdd',incrementwait:'jiawait'})

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
  ...mapState('countObout',['sum','school','subject']),
  ...mapState('personObout',['personList']),

  bigSum(){
     return this.$store.getters.bigSum
   },

  //  ...mapGetters({bigSum:'bigSum'})
  ...mapGetters('countObout',['bigSum'])
 },
  

 }

</script>

<style>
</style>