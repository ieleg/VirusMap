import Vue from 'vue'
import App from './App.vue'

import store from './store'
import jsonp from 'jsonp'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// var geteData=function(){
  
//   return new Promise((resove,reject) => {
//     jsonp(
//       'http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
//         if(err) reject(err);
//         else resove(data);
//       })
//   })


  
// }
// geteData().then(res => {
//   console.log(res);
// });
