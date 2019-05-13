import Vue from "vue";
//import FlockBanner from "./Banner.vue";
import LoadingM from './Loading-M/Loading.vue'
import Row from './Row-M/Row.vue'
import Button from './Button/Button.vue'
import util from './../common/util'
import './assets/common.css'
console.log('fakervue安装000')
export default {
  install() {
    console.log('fakervue安装')
    const LoadingPlugin = Vue.extend(LoadingM);

    //如果vue实例在实力化的时候没有收到el选项，则它属于未挂载状态
    //可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
    //如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中
    let $vm = new LoadingPlugin().$mount(); 
    document.body.appendChild($vm.$el);
    Vue.prototype.$loading = {
      show(text) {
        $vm.show = true;
        $vm.text = text;
      },
      hide() {
        $vm.show = false;
      }
    }

    Vue.component('Row',Row);
    Vue.component('Button',Button);
    Vue.prototype.$util = util;

  }
}


// const Components = {
//   FlockBanner
// };

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name]);
// });

// export default Components;