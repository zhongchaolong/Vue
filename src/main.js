
//1.1 导入第三方包
import Vue from "vue";
//1.2 引入router
import VueRouter from "vue-router";
//1.3启动Vue插件
Vue.use(VueRouter);
// 2.1 导入自己写的根组件
import App from './component/App.vue';
// 2.2 导入路由配置
import routerConfig from './router/index.js'


// 把根组件渲染到指定视图
var vue=new Vue({
  el:'#app',
  render:function(createElement){
    return createElement(App);
  },
  router:new VueRouter(routerConfig)
})