<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
    return this.todos.reduce((pre,current) => pre +(current.done?1:0),0)
    },
    isAll(){
     return this.doneTotal===this.total && this.total>0
    },
  },
  methods: {
    checkAll(e){
     
     this.$emit('checkAllTodo',e.target.checked)

    },
    clearAll(){
     
     this.$emit('clearTodo')
    }
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
</style>