//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴漏一个路由器
const router= new VueRouter({
    routes: [
        { 
            name:'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path: '/Home',
            component: Home,
            meta:{title:'主页'},
            children:[
                {  
                   name:'zinwen',
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xioaxi',
                    path: 'message',
                    component: Message,
                    children:[
                        { 
                            name:'xiangqing',
                            path: 'detail',
                        component: Detail,
                        //props第一种写法，值为对象
                        //该对象中的所有key-value都会以props的形式传给datail组件
                        // props:{a:1,b:'hello'}

                        //prop的第二种写法，值为布尔值 布尔值为真，就会把该路由组件收到的所有params参数
                        //以props的形式传给datail组件
                    //    props:true,

                       //prop的第三种写法 值为函数
                    //    props($route){
                    //      return{id:$route.query.id, title:$route.query.title}
                    //    },
                       props({query}){
                        return{id:query.id, title:query.title}
                      }, 
                    }
                   
                    ]
                },
            ]
        },
    ]
})
//全局前置路由守卫-初始化的时候和每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
  if(to.path==='/home/news'||to.path ==='/home/message'){
      if(localStorage.getItem('school')==='zyy'){
          next()
      }else{
          alert('学校名字不对 没有查看权限')
      }
  }else{
      next()
  }
})
router.afterEach((to,from)=>{
    document.title=to.meta.title || "硅谷系统"
})
export default router