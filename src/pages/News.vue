<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
       opacity:1
    }
  },
  // mounted() {
  //   setInterval(() =>{
  //    this.timer= this.opacity -=0.01
  //     if(this.opacity <= 0) this.opacity =1
  //   },16)
  // },
  // beforeDestroy(){
  //   clearInterval(this.timer)
  // },
  activated(){
    setInterval(() =>{
     this.timer= this.opacity -=0.01
      if(this.opacity <= 0) this.opacity =1
    },16)
  },
  deactivated(){
    clearInterval(this.timer)
  }
};
</script>
 
<style>
</style>