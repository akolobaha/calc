import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import clipboard from 'v-clipboard'

Vue.config.productionTip = false

Vue.use(clipboard)

new Vue({
  router,
  store,
	vuetify,
  render: h => h(App)
}).$mount('#app')
