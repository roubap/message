<template>
  <div class="container">
    <Category title="游戏">
        <!-- z怎么样可以接受儿子传过来的数据 -->
        <!-- 外面必须要包一个template 加scope 名字可以随便起 -->
        <template scope="{games}">
          <ul >
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>   
        </template> 
    </Category> 
   
   <Category title="游戏">
   <template scope="{games}">
       <ol >
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ol>
    </template>
    </Category> 

     <Category title="游戏">
     <template scope="{games}" >
    <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category> 

     </div>
</template>
   

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style lang='css' scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
.video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>