<template>
  <div class="category">
      <h3>{{title}}</h3>
      <!-- 定义一个插槽（挖一个坑），等着组件的使用者进行填充 -->
      <slot :games='games' msg="hello">我是一些默认值 当使用者没有传递具体结构时 我就会出现</slot>
    <!-- 儿在利用卡槽传递数据 -->
  </div>
</template>

<script>
export default {
 name:'Category',
 props:['title'],
  data() {
    return {
        // 数据放入儿子zhong
    //   foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    //   films: ["《教父》", "《拆弹专家》", "《暗夜行者》", "《牛排》"],
    };
  },
}
</script>

<style>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color:orange;
}
</style>