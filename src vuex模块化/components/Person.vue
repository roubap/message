<template>
  <div>
      <h3>上方组件的求和是{{sum}}</h3>
      <h1>人员列表</h1>
      <h3>列表中第一个名字是{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click='addWang'>添加一个姓王的人</button>
      <button @click="addPersonServer">添加一个人 名字随机</button>
      <ul>
          <li v-for="p in PersonList" :key="p.id">{{p.name}}</li>
      
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'Person',
  data(){
   return{
    name:''
   }
  },
  computed:{
      PersonList(){
          return this.$store.state.personObout.personList
      },
     sum(){
     return this.$store.state.countObout.sum
      },  
     firstPersonName(){
         return this.$store.getters['personObout/firstPersonName']
     } 
  },
  methods:{
      add(){
       const PersonObj={id:nanoid(),name:this.name}
       this.$store.commit('personObout/ADD_PESON',PersonObj)
       this.name=''
      },
      addWang(){
         const PersonObj={id:nanoid(),name:this.name} 
          this.$store.dispatch('personObout/addPersonWang',PersonObj)
          this.name=''
      },
      addPersonServer(){
           this.$store.dispatch('personObout/addPersonSever')
      }
  }
}
</script>

<style>

</style>