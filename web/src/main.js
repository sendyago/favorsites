import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/main.css'
import '@/assets/styles/home.css'
import '@/assets/styles/detail.css'
import '@/assets/styles/review.css'
import local_ from  '@/components/public/local.vue'
import style_ from '@/components/public/styles.vue'

// Vue.config.productionTip = false
Vue.prototype.LOCAL = local_
Vue.prototype.STYLES = style_

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })