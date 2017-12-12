// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  // 写在第一位，便于编译，babek-runtime在编译过程中使用，无需写在源码中
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import 'common/css/index.css'
import VViewer from 'v-viewer'
import VueLazyLoad from 'vue-lazyload'


fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(iview)
Vue.use(VViewer)

Vue.use(VueLazyLoad,{  //use方法可以穿一些参数
  loading: require('common/image/hh.png')
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
  // template: '<App/>',
  // components: { App }
})
