//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//引入插件
//关闭vue生产提示
Vue.config.productionTip = false
//应用Vuex插件
//引入store
import store from './store'
//应用插件
Vue.use(plugins)
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus=this //安装全局总线
    }
})
