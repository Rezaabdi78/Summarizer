import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'


Vue.use(VueAxios, axios)
Vue.use(VueClipboard)

Vue.config.productionTip = false

import './assets/full.css'
import './assets/fonts.css'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
